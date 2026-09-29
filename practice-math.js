/* Adeptly — Math weekly practice: one generator PER ACTIVITY, so the problems always match the
   activity title (previously every Number activity gave + − × ÷, every Algebra activity gave the same
   "solve for x", every Data activity gave "find the mean"). Bilingual (English / Arabic), scaled to the
   grade, answers computed, seeded so a given week always shows the same set.
   API: mathActivityExercise(activityText, seed, gradeNumber, isArabic)
        → {type:"mathinput"|"mcq", intro?:html, items:[{q,answer}|{q,options,answer}]}  or null. */
(function(){
  function rng(seed){ var a=(seed>>>0)||1; return function(){ a|=0; a=a+0x6D2B79F5|0; var t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ var t=b; b=a%b; a=t; } return a||1; }
  function lcm(a,b){ return a/gcd(a,b)*b; }
  function fs(n,d){ if(d<0){n=-n;d=-d;} var g=gcd(n,d); n/=g; d/=g; return d===1?String(n):(n+"/"+d); }
  function r2(x){ return Math.round(x*100)/100; }

  function make(seed, lv, ar){
    var R=rng(seed);
    var X={ lv:lv, ar:ar,
      ri:function(a,b){ return Math.floor(R()*(b-a+1))+a; },
      pick:function(a){ return a[Math.floor(R()*a.length)]; },
      shuffle:function(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(R()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; },
      L:function(en,arTxt){ return ar?arTxt:en; } };
    X.mcq=function(q,correct,distr){
      var c=String(correct), out=[c], seen={}; seen[c]=1;
      (distr||[]).forEach(function(d){ var s=String(d); if(out.length<4 && !seen[s]){ seen[s]=1; out.push(s); } });
      var k=1; while(out.length<4 && k<50){ var n=parseFloat(c); var s=isNaN(n)?(c+" ("+k+")"):String(r2(n+(k%2?k:-k))); if(!seen[s]){ seen[s]=1; out.push(s); } k++; }
      var o=X.shuffle(out); return {q:q, options:o, answer:o.indexOf(c)};
    };
    X.num=function(q,a){ return {q:q, answer:a}; };
    return X;
  }
  // Repeat a single-problem maker until n distinct problems exist.
  function many(n, fn){ var out=[], seen={}, g=0; while(out.length<n && g<n*30){ g++; var it=fn(out.length); if(!it||seen[it.q]) continue; seen[it.q]=1; out.push(it); } return out; }
  function bars(title, labels, vals, ar){
    var mx=Math.max.apply(null,vals);
    return '<div style="margin:4px 0 10px"><b>'+title+'</b>'+labels.map(function(l,i){ return '<div style="display:flex;align-items:center;gap:8px;margin:4px 0;'+(ar?'flex-direction:row-reverse':'')+'"><span style="width:90px;font-size:13px">'+l+'</span><span style="display:inline-block;height:16px;width:'+Math.round(vals[i]/mx*220)+'px;background:#6366f1;border-radius:3px"></span><b style="font-size:13px">'+vals[i]+'</b></div>'; }).join("")+'</div>';
  }
  function table(head, rows){ return '<table style="margin:6px 0;font-size:13px"><tr>'+head.map(function(h){return '<th>'+h+'</th>';}).join("")+'</tr>'+rows.map(function(r){ return '<tr>'+r.map(function(c){return '<td>'+c+'</td>';}).join("")+'</tr>'; }).join("")+'</table>'; }

  var G={};
  /* ======================= NUMBER & OPERATIONS ======================= */
  G["Complete 20 mixed multi-digit +/− problems"]=function(X){
    var hi=X.lv>=6?9999:(X.lv>=4?999:99), lo=X.lv>=6?1000:(X.lv>=4?100:10);
    return {type:"mathinput", items:many(20,function(i){ var a=X.ri(lo,hi), b=X.ri(lo,hi);
      if(i%2===0) return X.num(a+" + "+b+" = "+X.L("?","؟"), a+b);
      if(b>a){ var t=a; a=b; b=t; } return X.num(a+" − "+b+" = "+X.L("?","؟"), a-b); })};
  };
  G["Solve 15 multiplication and division problems"]=function(X){
    var big=X.lv>=5;
    return {type:"mathinput", items:many(15,function(i){
      if(i%2===0){ var a=big?X.ri(12,99):X.ri(2,10), b=big?X.ri(3,25):X.ri(2,10); return X.num(a+" × "+b+" = "+X.L("?","؟"), a*b); }
      var d=big?X.ri(3,15):X.ri(2,9), q=big?X.ri(6,60):X.ri(2,10); return X.num((d*q)+" ÷ "+d+" = "+X.L("?","؟"), q); })};
  };
  G["Practise 10 fraction operations (add, subtract, multiply)"]=function(X){
    return {type:"mcq", items:many(10,function(i){
      var kind=i%3, same=X.lv<6;
      var b=X.ri(2,9), d=same?b:X.ri(2,9), a=X.ri(1,b-1||1), c=X.ri(1,d-1||1);
      var op, n, dd;
      if(kind===0){ op="+"; n=a*d+c*b; dd=b*d; }
      else if(kind===1){ if(a/b<c/d){ var t1=a,t2=b; a=c; b=d; c=t1; d=t2; } op="−"; n=a*d-c*b; dd=b*d; if(n===0) return null; }
      else { op="×"; n=a*c; dd=b*d; }
      var ans=fs(n,dd);
      var wrong=[fs(a+c,b+d), (op==="×"?fs(a*d,b*c):fs(Math.abs(a-c)||1,Math.max(b,d))), (n+"/"+dd)!==ans?(n+"/"+dd):fs(n+1,dd), fs(n,dd+1)];
      return X.mcq(X.L("Work out and simplify: ","احسب وبسّط: ")+a+"/"+b+" "+op+" "+c+"/"+d, ans, wrong); })};
  };
  G["Convert 10 numbers between fractions, decimals, and percents"]=function(X){
    var F=[[1,2],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,10],[3,10],[7,10],[9,10],[1,20],[3,20],[1,25],[6,25]];
    return {type:"mcq", items:many(10,function(i){ var f=X.pick(F), dec=f[0]/f[1], pct=r2(dec*100), k=i%3;
      if(k===0) return X.mcq(X.L("Write "+f[0]+"/"+f[1]+" as a decimal.","اكتب "+f[0]+"/"+f[1]+" في صورة عدد عشري."), String(dec), [String(r2(dec*10)), String(f[0]+"."+f[1]), String(r2(1-dec))]);
      if(k===1) return X.mcq(X.L("Write "+dec+" as a percent.","اكتب "+dec+" في صورة نسبة مئوية."), pct+"%", [r2(pct/10)+"%", dec+"%", r2(pct*10)+"%"]);
      return X.mcq(X.L("Write "+pct+"% as a fraction in simplest form.","اكتب "+pct+"% في صورة كسر في أبسط صورة."), fs(f[0],f[1]), [pct+"/10", fs(f[0]+1,f[1]), "1/"+pct]); })};
  };
  G["Solve 8 word problems involving rates or ratios"]=function(X){
    return {type:"mathinput", items:many(8,function(i){ var k=i%4;
      if(k===0){ var h=X.ri(2,6), s=X.ri(4,12)*10; return X.num(X.L("A car travels "+(s*h)+" km in "+h+" hours. How many km does it travel in 1 hour?","تقطع سيارة "+(s*h)+" km في "+h+" ساعات. كم كيلومترًا تقطع في ساعة واحدة؟"), s); }
      if(k===1){ var p=X.ri(2,5), q=X.ri(p+1,p+5), m=X.ri(2,6); return X.num(X.L("The ratio of boys to girls is "+p+":"+q+". There are "+(p*m)+" boys. How many girls are there?","نسبة الأولاد إلى البنات "+p+":"+q+". عدد الأولاد "+(p*m)+". كم عدد البنات؟"), q*m); }
      if(k===2){ var n=X.ri(3,6), c=X.ri(2,9), t=X.ri(n+2,n+6); return X.num(X.L(n+" pens cost "+(n*c)+" AED. How much do "+t+" pens cost (in AED)?",n+" أقلام ثمنها "+(n*c)+" درهمًا. كم ثمن "+t+" أقلام بالدرهم؟"), t*c); }
      var w=X.ri(3,8), r=X.ri(20,60); return X.num(X.L("A machine fills "+r+" bottles per minute. How many bottles does it fill in "+w+" minutes?","تملأ آلة "+r+" زجاجة في الدقيقة. كم زجاجة تملأ في "+w+" دقائق؟"), r*w); })};
  };
  G["Order and compare 10 rational numbers"]=function(X){
    return {type:"mcq", items:many(10,function(i){
      if(i%2===0){ var vs=[], sn={}; while(vs.length<4){ var v=r2(X.ri(1,99)/(X.lv>=6?100:10)*(X.lv>=7&&X.ri(0,3)===0?-1:1)); if(!sn[v]){sn[v]=1; vs.push(v);} }
        var mx=Math.max.apply(null,vs); return X.mcq(X.L("Which number is the greatest?  ","أيّ الأعداد التالية هو الأكبر؟  ")+vs.join(" ,  "), String(mx), vs.filter(function(v){return v!==mx;}).map(String)); }
      var a=r2(X.ri(1,99)/100), b=r2(X.ri(1,9)/10); var s=a>b?">":(a<b?"<":"=");
      return X.mcq(X.L("Choose the symbol:  "+a+"  __  "+b,"اختر الرمز المناسب:  "+a+"  __  "+b), s, [">","<","="].filter(function(x){return x!==s;}).concat(["≠"])); })};
  };
  G["Round 10 numbers to a given place value"]=function(X){
    return {type:"mathinput", items:many(10,function(i){
      if(X.lv>=5 && i%2===1){ var n3=X.ri(1000,99999); if(n3%100===50) return null; var d=(n3/1000).toFixed(3); return X.num(X.L("Round "+d+" to the nearest tenth.","قرّب "+d+" إلى أقرب جزء من عشرة."), Math.round(n3/100)/10); }
      var n=X.ri(1000,99999), pl=X.pick([[10,"ten","عشرة"],[100,"hundred","مئة"],[1000,"thousand","ألف"]]);
      return X.num(X.L("Round "+n+" to the nearest "+pl[1]+".","قرّب "+n+" إلى أقرب "+pl[2]+"."), Math.round(n/pl[0])*pl[0]); })};
  };
  G["Find the GCF and LCM of 6 number pairs"]=function(X){
    var pairs=many(6,function(){ var g=X.ri(2,6), a=g*X.ri(2,7), b=g*X.ri(2,7); if(a===b) return null; return {q:a+","+b,a:a,b:b}; });
    var items=[]; pairs.forEach(function(p){
      items.push(X.num(X.L("GCF (greatest common factor) of "+p.a+" and "+p.b+" = ?","القاسم المشترك الأكبر للعددين "+p.a+" و "+p.b+" = ؟"), gcd(p.a,p.b)));
      items.push(X.num(X.L("LCM (least common multiple) of "+p.a+" and "+p.b+" = ?","المضاعف المشترك الأصغر للعددين "+p.a+" و "+p.b+" = ؟"), lcm(p.a,p.b))); });
    return {type:"mathinput", items:items};
  };
  G["Simplify 8 fractions to lowest terms"]=function(X){
    return {type:"mcq", items:many(8,function(){ var d=X.ri(3,12), n=X.ri(1,d-1), k=X.ri(2,6); if(gcd(n,d)!==1) return null;
      return X.mcq(X.L("Simplify "+(n*k)+"/"+(d*k)+" to lowest terms.","بسّط الكسر "+(n*k)+"/"+(d*k)+" إلى أبسط صورة."), n+"/"+d, [(k%2===0&&k>2)?((n*k/2)+"/"+(d*k/2)):((n*k)+"/"+(d*k)), (n+1)+"/"+d, n+"/"+(d+1), d+"/"+n]); })};
  };
  G["Solve 6 multi-step word problems"]=function(X){
    return {type:"mathinput", items:many(6,function(i){ var k=i%3;
      if(k===0){ var n=X.ri(2,6), p=X.ri(3,12), e=X.ri(2,9), pay=Math.ceil((n*p+e+1)/10)*10+10; return X.num(X.L("Sara buys "+n+" notebooks at "+p+" AED each and a pen for "+e+" AED. She pays with "+pay+" AED. How much change does she get?","اشترت سارة "+n+" دفاتر سعر الدفتر "+p+" دراهم وقلمًا بسعر "+e+" دراهم، ودفعت "+pay+" درهمًا. كم الباقي؟"), pay-n*p-e); }
      if(k===1){ var b=X.ri(3,8), per=X.ri(12,30), g=X.ri(5,20); return X.num(X.L("A school has "+b+" buses with "+per+" students on each. "+g+" students walk. How many students are there in total?","لدى مدرسة "+b+" حافلات في كل منها "+per+" طالبًا، و"+g+" طلاب يأتون مشيًا. كم عدد الطلاب كلهم؟"), b*per+g); }
      var t=X.ri(4,9)*6, sh=X.ri(2,3); return X.num(X.L("Omar has "+t+" sweets. He gives 1/"+sh+" of them to his sister and then eats 2. How many are left?","مع عمر "+t+" قطعة حلوى. أعطى أخته 1/"+sh+" منها ثم أكل قطعتين. كم بقي معه؟"), t-t/sh-2); })};
  };
  /* ======================= ALGEBRA ======================= */
  G["Solve 10 one- and two-step equations"]=function(X){
    return {type:"mathinput", items:many(10,function(i){ var x=X.ri(X.lv>=7?-9:1,12)||3, a=X.ri(2,9), b=X.ri(1,20), k=i%4;
      if(k===0) return X.num(X.L("Solve: x + "+b+" = "+(x+b),"حُلّ: x + "+b+" = "+(x+b)), x);
      if(k===1) return X.num(X.L("Solve: "+a+"x = "+(a*x),"حُلّ: "+a+"x = "+(a*x)), x);
      if(k===2) return X.num(X.L("Solve: "+a+"x + "+b+" = "+(a*x+b),"حُلّ: "+a+"x + "+b+" = "+(a*x+b)), x);
      return X.num(X.L("Solve: "+a+"x − "+b+" = "+(a*x-b),"حُلّ: "+a+"x − "+b+" = "+(a*x-b)), x); })};
  };
  G["Evaluate 8 algebraic expressions"]=function(X){
    return {type:"mathinput", items:many(8,function(i){ var a=X.ri(1,9), b=X.ri(1,9), p=X.ri(2,6), q=X.ri(2,6), k=i%3;
      if(k===0) return X.num(X.L("Find the value of "+p+"a + "+q+"b when a = "+a+" and b = "+b+".","أوجد قيمة "+p+"a + "+q+"b عندما a = "+a+" و b = "+b+"."), p*a+q*b);
      if(k===1) return X.num(X.L("Find the value of "+p+"(a + "+q+") when a = "+a+".","أوجد قيمة "+p+"(a + "+q+") عندما a = "+a+"."), p*(a+q));
      return X.num(X.L("Find the value of a² − "+b+" when a = "+a+".","أوجد قيمة a² − "+b+" عندما a = "+a+"."), a*a-b); })};
  };
  G["Continue and describe 6 patterns or sequences"]=function(X){
    return {type:"mathinput", items:many(6,function(i){
      if(X.lv>=6 && i%3===2){ var s=X.ri(1,4), r=X.ri(2,3), sq=[s,s*r,s*r*r,s*r*r*r]; return X.num(X.L("What is the next number?  ","ما العدد التالي؟  ")+sq.join(", ")+", __", s*Math.pow(r,4)); }
      var st=X.ri(1,20), d=X.ri(2,9)*(X.lv>=7&&i%2?-1:1), seq=[0,1,2,3].map(function(j){return st+j*d;});
      if(i%3===1) return X.num(X.L("The pattern "+seq.join(", ")+", … continues. What is the 10th term?","يستمر النمط "+seq.join("، ")+"، … ما الحد العاشر؟"), st+9*d);
      return X.num(X.L("What is the next number?  ","ما العدد التالي؟  ")+seq.join(", ")+", __", st+4*d); })};
  };
  G["Build and complete an input/output (function) table"]=function(X){
    var m=X.ri(2,6), c=X.ri(1,9), ins=X.shuffle([1,2,3,4,5,6,7,8,9,10]).slice(0,4);
    var intro='<b>'+X.L("Rule:","القاعدة:")+'</b> output = '+m+' × input + '+c+table([X.L("Input","المدخل"),X.L("Output","المخرج")], ins.slice(0,2).map(function(v){return [v, m*v+c];}).concat([[ins[2],"?"],[ins[3],"?"],["?", m*(ins[3]+2)+c]]));
    return {type:"mathinput", intro:intro, items:[
      X.num(X.L("Output when input = "+ins[2]+"?","المخرج عندما المدخل = "+ins[2]+"؟"), m*ins[2]+c),
      X.num(X.L("Output when input = "+ins[3]+"?","المخرج عندما المدخل = "+ins[3]+"؟"), m*ins[3]+c),
      X.num(X.L("Which input gives output "+(m*(ins[3]+2)+c)+"?","ما المدخل الذي يعطي المخرج "+(m*(ins[3]+2)+c)+"؟"), ins[3]+2),
      X.num(X.L("Output when input = 0?","المخرج عندما المدخل = 0؟"), c),
      X.num(X.L("Output when input = 20?","المخرج عندما المدخل = 20؟"), m*20+c)]};
  };
  G["Solve 6 inequalities and graph the solutions"]=function(X){
    return {type:"mcq", items:many(6,function(i){ var a=X.ri(2,6), x=X.ri(1,9), b=X.ri(1,15), ops=[">","<","≥","≤"], op=X.pick(ops), neg=X.lv>=8&&i%3===2;
      var flip={">":"<","<":">","≥":"≤","≤":"≥"};
      if(neg){ var ans="x "+flip[op]+" "+x; return X.mcq(X.L("Solve: −"+a+"x "+op+" "+(-a*x),"حُلّ: −"+a+"x "+op+" "+(-a*x)), ans, ["x "+op+" "+x, "x "+flip[op]+" "+(-x), "x "+op+" "+(-x)]); }
      var ans2="x "+op+" "+x; return X.mcq(X.L("Solve: "+a+"x + "+b+" "+op+" "+(a*x+b),"حُلّ: "+a+"x + "+b+" "+op+" "+(a*x+b)), ans2, ["x "+flip[op]+" "+x, "x "+op+" "+(x+b), "x "+op+" "+(a*x)]); })};
  };
  G["Write an expression or equation for 6 word problems"]=function(X){
    var T=[
      function(n){ return [X.L("Ali has x marbles. He gets "+n+" more. Which expression shows how many he has now?","مع علي x من الكرات الزجاجية، وحصل على "+n+" أخرى. أيّ عبارة تمثّل عددها الآن؟"), "x + "+n, [n+"x","x − "+n,"x ÷ "+n]]; },
      function(n){ return [X.L("A book costs y AED. What is the cost of "+n+" books?","ثمن الكتاب y درهم. ما ثمن "+n+" كتب؟"), n+"y", ["y + "+n,"y ÷ "+n,"y − "+n]]; },
      function(n){ return [X.L("Sara had m AED and spent "+n+" AED. Which expression shows what is left?","كان مع سارة m درهمًا وأنفقت "+n+" دراهم. أيّ عبارة تمثّل الباقي؟"), "m − "+n, [n+" − m","m + "+n,n+"m"]]; },
      function(n){ return [X.L("k students share "+(n*6)+" pencils equally. Which expression shows pencils per student?","يتقاسم k طالبًا "+(n*6)+" قلمًا بالتساوي. أيّ عبارة تمثّل نصيب كل طالب؟"), (n*6)+" ÷ k", ["k ÷ "+(n*6),(n*6)+"k",(n*6)+" − k"]]; },
      function(n){ return [X.L("A number doubled and then increased by "+n+" equals 20. Which equation matches?","عدد ضُرب في 2 ثم زيد عليه "+n+" فكان الناتج 20. أيّ معادلة تناسب ذلك؟"), "2x + "+n+" = 20", ["2(x + "+n+") = 20","x + 2"+n+" = 20","2x − "+n+" = 20"]]; },
      function(n){ return [X.L("The perimeter of a square with side s is "+(n*4)+" cm. Which equation matches?","محيط مربع طول ضلعه s يساوي "+(n*4)+" سم. أيّ معادلة تناسب ذلك؟"), "4s = "+(n*4), ["s + 4 = "+(n*4),"s² = "+(n*4),"2s = "+(n*4)]]; }];
    return {type:"mcq", items:X.shuffle(T).map(function(f){ var t=f(X.ri(3,9)); return X.mcq(t[0],t[1],t[2]); })};
  };
  G["Graph 4 linear equations"]=function(X){
    var items=[], used={}; for(var e=0,g=0;e<4&&g<200;e++,g++){ var m=X.ri(-4,5)||2, c=X.ri(-6,8), x=X.ri(-3,5), eq="y = "+m+"x "+(c<0?"− "+(-c):"+ "+c);
      if(used[eq]){ e--; continue; } used[eq]=1;
      items.push(X.mcq(X.L("For "+eq+", what is y when x = "+x+"?","في المعادلة "+eq+"، ما قيمة y عندما x = "+x+"؟"), String(m*x+c), [String(m*x-c),String(m+x+c),String(m*(x+1)+c)]));
      items.push(e%2===0 ? X.mcq(X.L("What is the slope of "+eq+"?","ما ميل المستقيم "+eq+"؟"), String(m), [String(c),String(-m),String(m+1)])
                         : X.mcq(X.L("Which point lies on the line "+eq+"?","أيّ نقطة تقع على المستقيم "+eq+"؟"), "("+x+", "+(m*x+c)+")", ["("+(m*x+c)+", "+x+")","("+x+", "+(m*x+c+1)+")","("+(x+1)+", "+(m*x+c)+")"])); }
    return {type:"mcq", items:items};
  };
  G["Simplify 8 expressions by combining like terms"]=function(X){
    return {type:"mcq", items:many(8,function(){ var a=X.ri(1,9), b=X.ri(1,9), c=X.ri(1,9), d=X.ri(1,c); var p=a+b, q=c-d;
      function ex(pp,qq){ return pp+"x"+(qq===0?"":(qq>0?" + "+qq:" − "+(-qq))); }
      return X.mcq(X.L("Simplify: ","بسّط: ")+a+"x + "+c+" + "+b+"x − "+d, ex(p,q), [ex(p,c+d), ex(a*b,q), (p+q)+"x"]); })};
  };
  G["Solve 6 proportion problems"]=function(X){
    return {type:"mathinput", items:many(6,function(i){ var a=X.ri(1,9), b=X.ri(a+1,12), k=X.ri(2,6);
      if(i%2===0) return X.num(X.L("Find x:  x / "+b+" = "+(a*k)+" / "+(b*k),"أوجد x:  x / "+b+" = "+(a*k)+" / "+(b*k)), a);
      return X.num(X.L("Find x:  "+a+" / "+b+" = "+(a*k)+" / x","أوجد x:  "+a+" / "+b+" = "+(a*k)+" / x"), b*k); })};
  };
  G["Factor 6 simple expressions"]=function(X){
    return {type:"mcq", items:many(6,function(i){
      if(X.lv>=9 && i%2===1){ var p=X.ri(1,7), q=X.ri(1,7); if(p===q) return null; return X.mcq(X.L("Factor: ","حلّل: ")+"x² + "+(p+q)+"x + "+(p*q), "(x + "+Math.min(p,q)+")(x + "+Math.max(p,q)+")", ["(x + "+(p+q)+")(x + 1)","(x − "+p+")(x − "+q+")","x(x + "+(p+q+p*q)+")"]); }
      var g=X.ri(2,6), a=X.ri(1,6), b=X.ri(1,9); if(gcd(a,b)!==1) return null;
      return X.mcq(X.L("Factor completely: ","حلّل تحليلًا كاملًا: ")+(g*a)+"x + "+(g*b), g+"("+(a===1?"":a)+"x + "+b+")", [g+"x("+a+" + "+b+")",(g*a)+"(x + "+b+")",a+"("+g+"x + "+(g*b)+")"]); })};
  };
  /* ======================= GEOMETRY ======================= */
  G["Find the perimeter and area of 8 figures"]=function(X){
    return {type:"mathinput", items:many(8,function(i){ var w=X.ri(3,15), h=X.ri(2,12), k=i%4;
      if(k===0) return X.num(X.L("Perimeter of a rectangle "+w+" cm by "+h+" cm (cm)?","محيط مستطيل بُعداه "+w+" سم و"+h+" سم (سم)؟"), 2*(w+h));
      if(k===1) return X.num(X.L("Area of a rectangle "+w+" cm by "+h+" cm (cm²)?","مساحة مستطيل بُعداه "+w+" سم و"+h+" سم (سم²)؟"), w*h);
      if(k===2) return X.num(X.L("Area of a triangle with base "+(w*2)+" cm and height "+h+" cm (cm²)?","مساحة مثلث قاعدته "+(w*2)+" سم وارتفاعه "+h+" سم (سم²)؟"), w*h);
      return X.num(X.L("Perimeter of a square with side "+w+" cm (cm)?","محيط مربع طول ضلعه "+w+" سم (سم)؟"), 4*w); })};
  };
  G["Find the surface area or volume of 6 solids"]=function(X){
    return {type:"mathinput", items:many(6,function(i){ var l=X.ri(2,10), w=X.ri(2,8), h=X.ri(2,9), k=i%3;
      if(k===0) return X.num(X.L("Volume of a cuboid "+l+" × "+w+" × "+h+" cm (cm³)?","حجم متوازي مستطيلات أبعاده "+l+" × "+w+" × "+h+" سم (سم³)؟"), l*w*h);
      if(k===1) return X.num(X.L("Surface area of a cube with edge "+l+" cm (cm²)?","المساحة الكلية لمكعب طول حرفه "+l+" سم (سم²)؟"), 6*l*l);
      return X.num(X.L("Surface area of a cuboid "+l+" × "+w+" × "+h+" cm (cm²)?","المساحة الكلية لمتوازي مستطيلات أبعاده "+l+" × "+w+" × "+h+" سم (سم²)؟"), 2*(l*w+l*h+w*h)); })};
  };
  G["Classify 10 shapes or angles by their properties"]=function(X){
    var A=[X.L("acute","حادة"),X.L("right","قائمة"),X.L("obtuse","منفرجة"),X.L("straight","مستقيمة")];
    var S=[[X.L("A quadrilateral with 4 equal sides and 4 right angles is a:","الشكل الرباعي الذي أضلاعه الأربعة متساوية وزواياه قائمة هو:"),X.L("square","مربع"),[X.L("rhombus","معين"),X.L("trapezium","شبه منحرف"),X.L("kite","طائرة ورقية")]],
      [X.L("A triangle with all three sides equal is:","المثلث الذي أضلاعه الثلاثة متساوية هو:"),X.L("equilateral","متطابق الأضلاع"),[X.L("isosceles","متطابق الضلعين"),X.L("scalene","مختلف الأضلاع"),X.L("right-angled","قائم الزاوية")]],
      [X.L("A triangle with exactly two equal sides is:","المثلث الذي له ضلعان فقط متساويان هو:"),X.L("isosceles","متطابق الضلعين"),[X.L("equilateral","متطابق الأضلاع"),X.L("scalene","مختلف الأضلاع"),X.L("obtuse","منفرج الزاوية")]],
      [X.L("A quadrilateral with exactly one pair of parallel sides is a:","الشكل الرباعي الذي له زوج واحد فقط من الأضلاع المتوازية هو:"),X.L("trapezium","شبه منحرف"),[X.L("parallelogram","متوازي أضلاع"),X.L("rectangle","مستطيل"),X.L("square","مربع")]],
      [X.L("A polygon with 6 sides is a:","المضلع الذي له 6 أضلاع هو:"),X.L("hexagon","سداسي"),[X.L("pentagon","خماسي"),X.L("octagon","ثماني"),X.L("heptagon","سباعي")]],
      [X.L("A triangle with no equal sides is:","المثلث الذي ليس فيه أضلاع متساوية هو:"),X.L("scalene","مختلف الأضلاع"),[X.L("isosceles","متطابق الضلعين"),X.L("equilateral","متطابق الأضلاع"),X.L("right-angled","قائم الزاوية")]]];
    return {type:"mcq", items:many(10,function(i){
      if(i%2===0){ var ang=X.pick([X.ri(10,85),90,X.ri(95,175),180]); var c=ang<90?A[0]:ang===90?A[1]:ang<180?A[2]:A[3];
        return X.mcq(X.L("An angle of "+ang+"° is:","الزاوية التي قياسها "+ang+"° هي زاوية:"), c, A.filter(function(x){return x!==c;})); }
      var s=X.pick(S); return X.mcq(s[0], s[1], s[2]); })};
  };
  G["Measure and draw 5 shapes accurately"]=function(X){
    return {type:"mathinput", intro:X.L("Draw each shape on squared paper with a ruler, then answer the question about it.","ارسم كل شكل على ورق مربعات باستخدام المسطرة، ثم أجب عن السؤال."), items:many(5,function(i){ var k=i%5, a=X.ri(3,12);
      if(k===0) return X.num(X.L("Draw a square with perimeter "+(4*a)+" cm. How long is each side (cm)?","ارسم مربعًا محيطه "+(4*a)+" سم. كم طول ضلعه (سم)؟"), a);
      if(k===1) return X.num(X.L("Draw a rectangle "+a+" cm long with area "+(a*3)+" cm². How wide is it (cm)?","ارسم مستطيلًا طوله "+a+" سم ومساحته "+(a*3)+" سم². كم عرضه (سم)؟"), 3);
      if(k===2) return X.num(X.L("Draw a triangle with angles 50° and 60°. What is the third angle (°)?","ارسم مثلثًا زاويتاه 50° و60°. ما قياس الزاوية الثالثة (°)؟"), 70);
      if(k===3) return X.num(X.L("Draw a circle with diameter "+(2*a)+" cm. What is its radius (cm)?","ارسم دائرة قطرها "+(2*a)+" سم. كم نصف قطرها (سم)؟"), a);
      return X.num(X.L("Draw a regular hexagon with side "+a+" cm. What is its perimeter (cm)?","ارسم سداسيًا منتظمًا طول ضلعه "+a+" سم. كم محيطه (سم)؟"), 6*a); })};
  };
  var TRIPLES=[[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[7,24,25],[12,16,20]];
  G["Solve 5 problems using the Pythagorean theorem or similarity"]=function(X){
    return {type:"mathinput", items:many(5,function(i){ var t=X.pick(TRIPLES), k=i%3;
      if(k===0) return X.num(X.L("A right triangle has legs "+t[0]+" cm and "+t[1]+" cm. How long is the hypotenuse (cm)?","مثلث قائم طولا ساقيه "+t[0]+" سم و"+t[1]+" سم. كم طول الوتر (سم)؟"), t[2]);
      if(k===1) return X.num(X.L("A ladder "+t[2]+" m long reaches "+t[1]+" m up a wall. How far is its foot from the wall (m)?","سلّم طوله "+t[2]+" م يصل إلى ارتفاع "+t[1]+" م على جدار. كم يبعد أسفله عن الجدار (م)؟"), t[0]);
      var s=X.ri(2,4), a=X.ri(2,9); return X.num(X.L("Two triangles are similar. A side of "+a+" cm in the small one matches "+(a*s)+" cm in the large one. A side of "+(a+2)+" cm in the small one matches how many cm?","مثلثان متشابهان: ضلع طوله "+a+" سم في الصغير يقابله "+(a*s)+" سم في الكبير. ضلع طوله "+(a+2)+" سم في الصغير يقابله كم سنتيمترًا؟"), (a+2)*s); })};
  };
  G["Plot and identify 8 points on the coordinate plane"]=function(X){
    var Q=[X.L("Quadrant I","الربع الأول"),X.L("Quadrant II","الربع الثاني"),X.L("Quadrant III","الربع الثالث"),X.L("Quadrant IV","الربع الرابع")];
    return {type:"mcq", items:many(8,function(i){ var x=X.ri(1,9)*(X.ri(0,1)?1:-1), y=X.ri(1,9)*(X.ri(0,1)?1:-1), k=i%3;
      if(k===0){ var q=x>0&&y>0?0:x<0&&y>0?1:x<0&&y<0?2:3; return X.mcq(X.L("In which quadrant is the point ("+x+", "+y+")?","في أيّ ربع تقع النقطة ("+x+", "+y+")؟"), Q[q], Q.filter(function(_,j){return j!==q;})); }
      if(k===1) return X.mcq(X.L("Start at the origin, move "+Math.abs(x)+" "+(x>0?"right":"left")+" and "+Math.abs(y)+" "+(y>0?"up":"down")+". Which point are you at?","ابدأ من نقطة الأصل وتحرّك "+Math.abs(x)+" "+(x>0?"إلى اليمين":"إلى اليسار")+" و"+Math.abs(y)+" "+(y>0?"إلى الأعلى":"إلى الأسفل")+". عند أيّ نقطة أنت؟"), "("+x+", "+y+")", ["("+y+", "+x+")","("+(-x)+", "+y+")","("+x+", "+(-y)+")"]);
      var d=X.ri(1,5); return X.mcq(X.L("Point ("+x+", "+y+") moves "+d+" units up. Where is it now?","تحرّكت النقطة ("+x+", "+y+") "+d+" وحدات إلى الأعلى. أين أصبحت؟"), "("+x+", "+(y+d)+")", ["("+(x+d)+", "+y+")","("+x+", "+(y-d)+")","("+(x-d)+", "+y+")"]); })};
  };
  G["Calculate missing angles in 6 figures"]=function(X){
    return {type:"mathinput", items:many(6,function(i){ var a=X.ri(25,80), b=X.ri(20,70), k=i%5;
      if(k===0) return X.num(X.L("Two angles of a triangle are "+a+"° and "+b+"°. Find the third angle (°).","زاويتان في مثلث قياساهما "+a+"° و"+b+"°. أوجد قياس الثالثة (°)."), 180-a-b);
      if(k===1) return X.num(X.L("Angles on a straight line: one is "+(a+60)+"°. Find the other (°).","زاويتان على خط مستقيم إحداهما "+(a+60)+"°. أوجد الأخرى (°)."), 120-a);
      if(k===2) return X.num(X.L("Angles around a point: 90°, "+(a+60)+"°, "+(b+40)+"° and x. Find x (°).","زوايا حول نقطة: 90° و"+(a+60)+"° و"+(b+40)+"° و x. أوجد x (°)."), 360-90-(a+60)-(b+40));
      if(k===3) return X.num(X.L("A quadrilateral has angles "+(a+40)+"°, "+(b+50)+"°, 90° and x. Find x (°).","شكل رباعي زواياه "+(a+40)+"° و"+(b+50)+"° و90° و x. أوجد x (°)."), 360-(a+40)-(b+50)-90);
      var top=X.ri(20,100)*1; top=top%2?top+1:top; return X.num(X.L("An isosceles triangle has a top angle of "+top+"°. Find each base angle (°).","مثلث متطابق الضلعين زاوية رأسه "+top+"°. أوجد قياس كل زاوية من زاويتي القاعدة (°)."), (180-top)/2); })};
  };
  G["Find missing side lengths in 5 right triangles"]=function(X){
    return {type:"mathinput", items:many(5,function(i){ var t=X.pick(TRIPLES), k=X.ri(1,2)===1&&X.lv>=9?2:1;
      var a=t[0]*k, b=t[1]*k, c=t[2]*k;
      if(i%2===0) return X.num(X.L("Right triangle: legs "+a+" and "+b+". Find the hypotenuse.","مثلث قائم: الساقان "+a+" و"+b+". أوجد الوتر."), c);
      return X.num(X.L("Right triangle: hypotenuse "+c+", one leg "+a+". Find the other leg.","مثلث قائم: الوتر "+c+" وإحدى الساقين "+a+". أوجد الساق الأخرى."), b); })};
  };
  G["Identify the transformation in 6 figures"]=function(X){
    var T=[X.L("translation","انسحاب"),X.L("reflection","انعكاس"),X.L("rotation","دوران"),X.L("enlargement (dilation)","تكبير (تمدد)")];
    return {type:"mcq", items:many(6,function(i){ var x=X.ri(1,6), y=X.ri(1,6), k=i%4, img;
      if(k===0){ var dx=X.ri(1,5); img="("+(x+dx)+", "+y+")"; }
      else if(k===1) img="("+(-x)+", "+y+")";
      else if(k===2) img="("+(-y)+", "+x+")";
      else img="("+(2*x)+", "+(2*y)+")";
      if(k===2&&x===y) return null;
      return X.mcq(X.L("Point ("+x+", "+y+") is mapped to "+img+". Which transformation is this?","تحوّلت النقطة ("+x+", "+y+") إلى "+img+". ما نوع هذا التحويل؟"), T[k], T.filter(function(_,j){return j!==k;})); })};
  };
  G["Find the volume of 5 prisms or cylinders"]=function(X){
    return {type:"mathinput", items:many(5,function(i){ var k=i%3, l=X.ri(2,10), w=X.ri(2,8), h=X.ri(2,10), r=X.ri(1,6);
      if(k===0) return X.num(X.L("Volume of a rectangular prism "+l+" × "+w+" × "+h+" cm (cm³)?","حجم منشور رباعي أبعاده "+l+" × "+w+" × "+h+" سم (سم³)؟"), l*w*h);
      if(k===1) return X.num(X.L("A triangular prism: triangle base "+(2*w)+" cm, triangle height "+h+" cm, length "+l+" cm. Volume (cm³)?","منشور ثلاثي: قاعدة المثلث "+(2*w)+" سم وارتفاعه "+h+" سم وطول المنشور "+l+" سم. الحجم (سم³)؟"), w*h*l);
      return X.num(X.L("Volume of a cylinder with radius "+r+" cm and height "+h+" cm. Use π = 3.14 and round to the nearest whole number (cm³).","حجم أسطوانة نصف قطرها "+r+" سم وارتفاعها "+h+" سم. استخدم π = 3.14 وقرّب لأقرب عدد صحيح (سم³)."), Math.round(3.14*r*r*h)); })};
  };
  /* ======================= DATA & PROBABILITY ======================= */
  var CATS=[[["Football","Basketball","Swimming","Tennis"],["كرة القدم","كرة السلة","السباحة","التنس"],"Favourite sport","الرياضة المفضلة"],
            [["Apple","Banana","Mango","Orange"],["تفاح","موز","مانجو","برتقال"],"Favourite fruit","الفاكهة المفضلة"],
            [["Bus","Car","Walk","Bike"],["حافلة","سيارة","مشيًا","دراجة"],"How we get to school","كيف نأتي إلى المدرسة"]];
  G["Read and answer questions on 3 graphs"]=function(X){
    var intro="", items=[];
    X.shuffle(CATS).forEach(function(c){ var v=c[0].map(function(){return X.ri(3,15);}), lab=X.ar?c[1]:c[0];
      intro+=bars(X.L(c[2],c[3])+X.L(" (number of students)"," (عدد الطلاب)"), lab, v, X.ar);
      var i1=X.ri(0,3), i2=(i1+X.ri(1,3))%4;
      items.push(X.num(X.L("["+c[2]+"] How many students chose "+c[0][i1]+"?","["+c[3]+"] كم طالبًا اختار "+c[1][i1]+"؟"), v[i1]));
      items.push(X.num(X.L("["+c[2]+"] How many more chose "+c[0][i1]+" than "+c[0][i2]+"? (use a negative number if fewer)","["+c[3]+"] بكم يزيد عدد من اختاروا "+c[1][i1]+" على من اختاروا "+c[1][i2]+"؟ (اكتب عددًا سالبًا إذا كان أقل)"), v[i1]-v[i2]));
      items.push(X.num(X.L("["+c[2]+"] How many students were asked in total?","["+c[3]+"] كم عدد الطلاب الذين سُئلوا جميعًا؟"), v.reduce(function(a,b){return a+b;},0))); });
    return {type:"mathinput", intro:intro, items:items};
  };
  function dataSet(X,n,lo,hi){ var a=[]; for(var i=0;i<n;i++) a.push(X.ri(lo,hi)); return a; }
  G["Find the mean, median, mode, and range of 4 data sets"]=function(X){
    var items=[], tries=0; for(var s=0;s<4 && tries<200;s++){ tries++; var base=dataSet(X,4,2,20), md=X.ri(2,20), set=X.shuffle(base.concat([md,md]).concat([X.ri(2,20)]));
      var counts={}; set.forEach(function(v){counts[v]=(counts[v]||0)+1;}); var best=Object.keys(counts).sort(function(a,b){return counts[b]-counts[a];}); if(counts[best[0]]===counts[best[1]]){ s--; continue; }
      var srt=set.slice().sort(function(a,b){return a-b;}), sum=set.reduce(function(a,b){return a+b;},0);
      var mean=r2(sum/set.length); var lbl=X.L("Data set "+(s+1)+": ","مجموعة البيانات "+(s+1)+": ")+set.join(", ");
      items.push(X.num(lbl+X.L(" — median?"," — الوسيط؟"), srt[3]));
      items.push(X.num(lbl+X.L(" — mode?"," — المنوال؟"), Number(best[0])));
      items.push(X.num(lbl+X.L(" — range?"," — المدى؟"), srt[6]-srt[0]));
      items.push(X.num(lbl+X.L(" — mean? (round to 2 decimal places)"," — المتوسط الحسابي؟ (قرّب لمنزلتين عشريتين)"), mean)); }
    return {type:"mathinput", items:items};
  };
  G["Calculate the probability of 8 simple events"]=function(X){
    return {type:"mcq", items:many(8,function(i){ var k=i%3;
      if(k===0){ var r=X.ri(1,8), b=X.ri(1,8); return X.mcq(X.L("A bag has "+r+" red and "+b+" blue balls. What is P(red)?","في كيس "+r+" كرات حمراء و"+b+" كرات زرقاء. ما احتمال سحب كرة حمراء؟"), fs(r,r+b), [fs(b,r+b), r+"/"+b, fs(1,r+b)]); }
      if(k===1){ var ev=X.pick([[X.L("an even number","عدد زوجي"),3],[X.L("a number greater than 4","عدد أكبر من 4"),2],[X.L("a 6","العدد 6"),1],[X.L("a prime number","عدد أولي"),3],[X.L("a number less than 3","عدد أصغر من 3"),2]]);
        return X.mcq(X.L("A fair die is rolled. What is the probability of getting "+ev[0]+"?","رُمي حجر نرد منتظم. ما احتمال ظهور "+ev[0]+"؟"), fs(ev[1],6), [fs(ev[1]+1,6), ev[1]+"/"+(6-ev[1]||1), "1/"+ev[1]]); }
      var n=X.ri(8,20), w=X.ri(1,n-1); return X.mcq(X.L("A spinner has "+n+" equal parts; "+w+" are green. What is P(green)?","قرص دوّار مقسّم إلى "+n+" أجزاء متساوية، منها "+w+" خضراء. ما احتمال التوقف على الأخضر؟"), fs(w,n), [fs(n-w,n), fs(w,n-w), fs(1,w)]); })};
  };
  G["Build a bar graph or line plot from given data"]=function(X){
    var c=X.pick(CATS), lab=X.ar?c[1]:c[0], cnt=c[0].map(function(){return X.ri(2,7);}), raw=[];
    cnt.forEach(function(n,i){ for(var j=0;j<n;j++) raw.push(lab[i]); }); raw=X.shuffle(raw);
    var intro='<b>'+X.L(c[2]+" — raw survey answers:",c[3]+" — إجابات الاستبيان الأصلية:")+'</b><div style="margin:6px 0;font-size:13px;line-height:1.8">'+raw.join(X.ar?"، ":", ")+'</div>'+X.L("Count each answer to build your bar graph, then answer:","عُدّ كل إجابة لتنشئ تمثيلك بالأعمدة، ثم أجب:");
    var items=cnt.map(function(n,i){ return X.num(X.L("How tall is the bar for "+c[0][i]+"?","ما ارتفاع العمود الخاص بـ "+c[1][i]+"؟"), n); });
    items.push(X.num(X.L("How many answers are there in total?","كم عدد الإجابات كلها؟"), raw.length));
    return {type:"mathinput", intro:intro, items:items};
  };
  G["Interpret a scatter plot and describe the trend"]=function(X){
    var pos=X.ri(0,1)===1, pts=[]; for(var h=1;h<=8;h++){ pts.push([h, Math.max(5,Math.min(98, pos? 40+h*7+X.ri(-5,5) : 95-h*8+X.ri(-5,5)))]); }
    var W=260,H=170, svg='<svg width="'+W+'" height="'+H+'" style="background:#fff;border:1px solid #ddd;border-radius:6px"><line x1="30" y1="150" x2="250" y2="150" stroke="#555"/><line x1="30" y1="10" x2="30" y2="150" stroke="#555"/>'+pts.map(function(p){ return '<circle cx="'+(30+p[0]*26)+'" cy="'+(150-p[1]*1.35)+'" r="4" fill="#6366f1"/>'; }).join("")+'<text x="140" y="166" font-size="10" text-anchor="middle">'+X.L(pos?"Hours of study":"Hours of screen time","ساعات "+(pos?"الدراسة":"استخدام الشاشة"))+'</text><text x="8" y="80" font-size="10" transform="rotate(-90 8 80)" text-anchor="middle">'+X.L("Test score","درجة الاختبار")+'</text></svg>';
    var intro=svg+table([X.L("Hours","الساعات")].concat(pts.map(function(p){return p[0];})),[[X.L("Score","الدرجة")].concat(pts.map(function(p){return p[1];}))]);
    var tr=[X.L("positive","موجبة"),X.L("negative","سالبة"),X.L("no correlation","لا يوجد ارتباط")];
    var c=pos?0:1;
    return {type:"mcq", intro:intro, items:[
      X.mcq(X.L("What kind of correlation does the scatter plot show?","ما نوع الارتباط الذي يظهره شكل الانتشار؟"), tr[c], tr.filter(function(_,j){return j!==c;}).concat([X.L("it is impossible to tell","لا يمكن تحديده")])),
      X.mcq(X.L("As the hours increase, the score generally:","كلما زادت الساعات فإن الدرجة عمومًا:"), pos?X.L("increases","تزداد"):X.L("decreases","تقل"), [pos?X.L("decreases","تقل"):X.L("increases","تزداد"),X.L("stays the same","تبقى ثابتة"),X.L("doubles every hour","تتضاعف كل ساعة")]),
      X.mcq(X.L("What was the score for "+pts[3][0]+" hours?","ما الدرجة عند "+pts[3][0]+" ساعات؟"), String(pts[3][1]), [String(pts[4][1]),String(pts[2][1]),String(pts[3][1]+10)]),
      X.mcq(X.L("Which is the best estimate of the score for 9 hours?","ما أفضل تقدير للدرجة عند 9 ساعات؟"), String(Math.max(0,Math.min(100,pos?pts[7][1]+6:pts[7][1]-7))), [String(pos?pts[0][1]:pts[0][1]), String(50), String(pos?pts[7][1]-30:pts[7][1]+30)])]};
  };
  G["Compare two data sets and write 2 conclusions"]=function(X){
    var A=dataSet(X,6,40,90), B=dataSet(X,6,55,75); var sA=A.reduce(function(a,b){return a+b;},0), sB=B.reduce(function(a,b){return a+b;},0);
    var mA=r2(sA/6), mB=r2(sB/6), rA=Math.max.apply(null,A)-Math.min.apply(null,A), rB=Math.max.apply(null,B)-Math.min.apply(null,B);
    var intro=table([X.L("Class","الفصل"),X.L("Test scores","درجات الاختبار")],[["A",A.join(", ")],["B",B.join(", ")]]);
    return {type:"mcq", intro:intro, items:[
      X.mcq(X.L("Mean of class A?","المتوسط الحسابي للفصل A؟"), String(mA), [String(mB),String(r2(mA+5)),String(r2(sA/5))]),
      X.mcq(X.L("Mean of class B?","المتوسط الحسابي للفصل B؟"), String(mB), [String(mA),String(r2(mB-4)),String(r2(sB/5))]),
      X.mcq(X.L("Range of class A?","المدى للفصل A؟"), String(rA), [String(rB),String(rA+5),String(Math.max.apply(null,A))]),
      X.mcq(X.L("Range of class B?","المدى للفصل B؟"), String(rB), [String(rA),String(rB+3),String(Math.max.apply(null,B))]),
      X.mcq(X.L("Which class has more consistent scores (smaller range)?","أيّ الفصلين درجاته أكثر تقاربًا (مدى أصغر)؟"), rA<rB?"A":(rB<rA?"B":X.L("equal","متساويان")), ["A","B",X.L("equal","متساويان"),X.L("cannot tell","لا يمكن التحديد")].filter(function(v){ return v!==(rA<rB?"A":(rB<rA?"B":X.L("equal","متساويان"))); })),
      X.mcq(X.L("Which class did better on average?","أيّ الفصلين أفضل في المتوسط؟"), mA>mB?"A":(mB>mA?"B":X.L("equal","متساويان")), ["A","B",X.L("equal","متساويان"),X.L("cannot tell","لا يمكن التحديد")].filter(function(v){ return v!==(mA>mB?"A":(mB>mA?"B":X.L("equal","متساويان"))); }))]};
  };
  G["Create a frequency table from raw data"]=function(X){
    var vals=[1,2,3,4,5], cnt=vals.map(function(){return X.ri(1,6);}), raw=[];
    cnt.forEach(function(n,i){ for(var j=0;j<n;j++) raw.push(vals[i]); }); raw=X.shuffle(raw);
    var intro='<b>'+X.L("Number of books read last month by each student:","عدد الكتب التي قرأها كل طالب في الشهر الماضي:")+'</b><div style="margin:6px 0;font-size:14px;letter-spacing:1px">'+raw.join(", ")+'</div>'+X.L("Make a frequency table (value → how many times), then answer:","أنشئ جدولًا تكراريًا (القيمة ← عدد مرات تكرارها)، ثم أجب:");
    var items=vals.map(function(v,i){ return X.num(X.L("Frequency of "+v+"?","تكرار القيمة "+v+"؟"), cnt[i]); });
    items.push(X.num(X.L("Total frequency (number of students)?","مجموع التكرارات (عدد الطلاب)؟"), raw.length));
    return {type:"mathinput", intro:intro, items:items};
  };
  G["Find the probability of 6 compound events"]=function(X){
    var P=[[X.L("Two fair coins are tossed. P(two heads)?","أُلقيت قطعتا نقود منتظمتان. ما احتمال ظهور صورتين؟"),"1/4",["1/2","1/3","2/4"]],
      [X.L("A coin is tossed and a die is rolled. P(heads and a 6)?","أُلقيت قطعة نقود ورُمي حجر نرد. ما احتمال ظهور صورة والعدد 6؟"),"1/12",["1/6","1/8","7/12"]],
      [X.L("Two dice are rolled. P(sum = 7)?","رُمي حجرا نرد. ما احتمال أن يكون المجموع 7؟"),"1/6",["7/36","1/12","1/7"]],
      [X.L("Two dice are rolled. P(both show 6)?","رُمي حجرا نرد. ما احتمال ظهور 6 على كليهما؟"),"1/36",["1/6","1/12","2/36"]],
      [X.L("Two fair coins are tossed. P(one head and one tail)?","أُلقيت قطعتا نقود. ما احتمال ظهور صورة وكتابة؟"),"1/2",["1/4","1/3","3/4"]],
      [X.L("A coin is tossed and a die is rolled. P(tails and an even number)?","أُلقيت قطعة نقود ورُمي حجر نرد. ما احتمال ظهور كتابة وعدد زوجي؟"),"1/4",["1/2","1/6","3/12"]],
      [X.L("A bag has 3 red and 2 blue balls. Two are drawn with replacement. P(both red)?","في كيس 3 كرات حمراء وكرتان زرقاوان. سُحبت كرتان مع الإرجاع. ما احتمال أن تكونا حمراوين؟"),"9/25",["6/25","3/5","9/20"]],
      [X.L("A bag has 3 red and 2 blue balls. Two are drawn without replacement. P(both red)?","في كيس 3 كرات حمراء وكرتان زرقاوان. سُحبت كرتان دون إرجاع. ما احتمال أن تكونا حمراوين؟"),"3/10",["9/25","6/25","2/5"]]];
    return {type:"mcq", items:X.shuffle(P).slice(0,6).map(function(p){ return X.mcq(p[0],p[1],p[2]); })};
  };
  G["Calculate the mean of 5 larger data sets"]=function(X){
    return {type:"mathinput", items:many(5,function(){ var n=X.ri(8,10), m=X.ri(20,80), a=[]; for(var i=0;i<n-1;i++) a.push(m+X.ri(-15,15)); a.push(m*n-a.reduce(function(s,v){return s+v;},0));
      if(a[n-1]<1) return null; return X.num(X.L("Find the mean: ","أوجد المتوسط الحسابي: ")+X.shuffle(a).join(", "), m); })};
  };
  G["Draw and interpret a box plot"]=function(X){
    var d=[]; for(var i=0;i<11;i++) d.push(X.ri(10,60)); d.sort(function(a,b){return a-b;});
    var med=d[5], q1=d[2], q3=d[8], mn=d[0], mx=d[10], sc=function(v){return 20+(v-mn)/(mx-mn||1)*220;};
    var svg='<svg width="270" height="70" style="background:#fff;border:1px solid #ddd;border-radius:6px"><line x1="'+sc(mn)+'" y1="35" x2="'+sc(q1)+'" y2="35" stroke="#333"/><line x1="'+sc(q3)+'" y1="35" x2="'+sc(mx)+'" y2="35" stroke="#333"/><rect x="'+sc(q1)+'" y="20" width="'+(sc(q3)-sc(q1))+'" height="30" fill="#e0e7ff" stroke="#6366f1"/><line x1="'+sc(med)+'" y1="20" x2="'+sc(med)+'" y2="50" stroke="#6366f1" stroke-width="2"/><line x1="'+sc(mn)+'" y1="28" x2="'+sc(mn)+'" y2="42" stroke="#333"/><line x1="'+sc(mx)+'" y1="28" x2="'+sc(mx)+'" y2="42" stroke="#333"/></svg>';
    var intro='<b>'+X.L("Data (sorted):","البيانات (مرتبة):")+'</b> '+d.join(", ")+'<div style="margin:6px 0">'+svg+'</div>'+X.L("Draw the box plot yourself from the data, then answer:","ارسم تمثيل الصندوق وطرفيه بنفسك من البيانات، ثم أجب:");
    return {type:"mathinput", intro:intro, items:[
      X.num(X.L("Median?","الوسيط؟"), med), X.num(X.L("Lower quartile (Q1)?","الربيع الأدنى (Q1)؟"), q1), X.num(X.L("Upper quartile (Q3)?","الربيع الأعلى (Q3)؟"), q3),
      X.num(X.L("Interquartile range (Q3 − Q1)?","المدى الربيعي (Q3 − Q1)؟"), q3-q1), X.num(X.L("Range?","المدى؟"), mx-mn)]};
  };

  function mathActivityExercise(activity, seed, grade, ar){
    var f=G[activity]; if(!f) return null;
    var lv=parseInt(String(grade||"6").replace(/[^0-9]/g,""),10)||6;
    var X=make((seed>>>0)+activity.length*7919, lv, !!ar);
    var out=f(X); if(!out||!out.items||!out.items.length) return null;
    if(out.intro) out.intro='<div'+(ar?' dir="rtl" style="text-align:right"':'')+'>'+out.intro+'</div>';
    return out;
  }
  var api={mathActivityExercise:mathActivityExercise, MATH_ACTIVITY_GENERATORS:G};
  if(typeof window!=="undefined"){ window.mathActivityExercise=mathActivityExercise; window.MATH_ACTIVITY_GENERATORS=G; }
  if(typeof module!=="undefined") module.exports=api;
})();
