/* Adeptly — English generator engine (ENG_GEN).
   Self-contained, deterministic-by-seed generator so every diagnostic is a different English paper
   with effectively no repetition, and no external AI/API (works offline).

   The English paper is built and ORDERED as:
       Reading comprehension  →  Vocabulary (from the passage)  →  Grammar  →  Writing
   Target = 20 items: 7 reading + 5 vocabulary + 7 grammar (= 19 questions) + 1 writing task.
   Question wording is kept simple so lower/medium achievers can follow it, and each section mixes
   Foundational (easy) / Core (medium) / Challenge (hard) items.

   Public API (seeded by a string):
     ENG_GEN.reading(grade, seedStr)  -> {title, passage, qs:[...]}  (7 Reading + 5 Vocabulary)
     ENG_GEN.items(grade, seedStr, n) -> [...]  (n Grammar questions, easy→hard)
     ENG_GEN.writing(grade, seedStr)  -> writing-prompt string
   Grade bands: A (<=4), B (5-6), C (7-9), D (10-12). Load AFTER curriculum.js. */
(function(){
  function hashStr(s){ s=String(s); var h=1779033703^s.length; for(var i=0;i<s.length;i++){ h=Math.imul(h^s.charCodeAt(i),3432918353); h=(h<<13)|(h>>>19); } return h>>>0; }
  function rng(seed){ var s=hashStr(seed)||123456789; return function(){ s^=s<<13; s>>>=0; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
  function ri(r,a,b){ return a+Math.floor(r()*(b-a+1)); }
  function pick(r,arr){ return arr[Math.floor(r()*arr.length)]; }
  function shuffle(r,arr){ arr=arr.slice(); for(var i=arr.length-1;i>0;i--){ var j=Math.floor(r()*(i+1)),t=arr[i];arr[i]=arr[j];arr[j]=t; } return arr; }
  function bandOf(grade){ var n=parseInt(String(grade),10)||6; return n<=4?1:n<=6?2:n<=9?3:4; }
  function cap(s){ s=String(s); return s.charAt(0).toUpperCase()+s.slice(1); }
  function distinct(r,pool,answer,n,extraExclude){
    var ex={}; ex[String(answer).toLowerCase()]=1; (extraExclude||[]).forEach(function(e){ex[String(e).toLowerCase()]=1;});
    var out=[], sh=shuffle(r,pool);
    for(var i=0;i<sh.length&&out.length<n;i++){ var v=sh[i],k=String(v).toLowerCase(); if(ex[k])continue; ex[k]=1; out.push(v); }
    while(out.length<n){ out.push("none of these"+(out.length?" ("+out.length+")":"")); }
    return out;
  }
  var MC_FILL=["none of these","no change is needed","not sure","cannot say"];
  function mc(r,skill,level,sub,q,correct,distractors){
    var seen={}; seen[String(correct).toLowerCase()]=1; var ds=[];
    shuffle(r,distractors||[]).forEach(function(d){ if(d==null)return; var k=String(d).toLowerCase(); if(!seen[k]){ seen[k]=1; ds.push(d); } });
    var fi=0; while(ds.length<3 && fi<MC_FILL.length){ var f=MC_FILL[fi++]; if(!seen[f.toLowerCase()]){ seen[f.toLowerCase()]=1; ds.push(f); } }
    var opts=shuffle(r,[correct].concat(ds.slice(0,3)));
    var answer=opts.indexOf(correct); if(answer<0){ opts[0]=correct; answer=0; }
    return {q:q,options:opts,answer:answer,skill:skill,level:level,sub:sub};
  }

  /* ===================== GRAMMAR WORD BANKS ===================== */
  var SUBJ=["He","She","The teacher","My friend","The old man","Ali","Sara","The little boy","The girl","Our neighbour"];
  var TIME_PAST=["Yesterday","Last week","An hour ago","Last night","Two days ago"];
  var TIME_HABIT=["every day","each morning","on Sundays","every evening"];
  var VERBS=[
    ["go","goes","going","went","gone"],["eat","eats","eating","ate","eaten"],
    ["write","writes","writing","wrote","written"],["play","plays","playing","played","played"],
    ["study","studies","studying","studied","studied"],["take","takes","taking","took","taken"],
    ["make","makes","making","made","made"],["buy","buys","buying","bought","bought"],
    ["see","sees","seeing","saw","seen"],["drink","drinks","drinking","drank","drunk"],
    ["give","gives","giving","gave","given"],["sing","sings","singing","sang","sung"],
    ["drive","drives","driving","drove","driven"],["speak","speaks","speaking","spoke","spoken"]
  ];
  var OBJ=["a book","the ball","some water","a letter","a song","a picture","a story","a cake"];
  var AN=["apple","elephant","umbrella","orange","egg","idea","island","envelope"];
  var A=["book","car","dog","table","pen","house","ball","cat","tree","phone"];
  var IRREG_PLURAL=[["child","children"],["man","men"],["woman","women"],["foot","feet"],["tooth","teeth"],["mouse","mice"],["person","people"],["leaf","leaves"],["knife","knives"],["baby","babies"],["city","cities"]];
  var PREP_COLLOC=[["good","at"],["interested","in"],["afraid","of"],["listen","to"],["depend","on"],["famous","for"],["proud","of"],["full","of"]];
  var PREPS=["at","in","of","to","on","for","with","from"];
  var COMPAR=[["big","bigger"],["happy","happier"],["good","better"],["easy","easier"],["hot","hotter"],["tall","taller"],["fast","faster"],["cold","colder"],["small","smaller"],["long","longer"]];
  var POSS=[["Sara","her"],["Ali","his"],["the children","their"],["my brother","his"],["my sister","her"],["the students","their"]];
  var CONJ=[["It was raining, ___ we stayed home.","so",["but","or","because"]],["I like tea ___ coffee.","and",["but","so","or"]],["He is rich ___ unhappy.","but",["and","so","or"]],["Hurry up, ___ you'll miss the bus.","or",["and","but","so"]]];
  var AGREE=[["One of my friends ___ a doctor.","is",["are","am","be"]],["Each of the students ___ a book.","has",["have","are","having"]],["Everybody ___ ready to start.","is",["are","were","have"]]];
  var PUNCT=[
    ["Which sentence is written correctly?","My brother's car is red.",["My brothers car is red.","my brother's car is red.","My brother's car is red"]],
    ["Which sentence is written correctly?","We bought apples, oranges and pears.",["We bought apples oranges and pears.","We bought, apples, oranges and pears.","we bought apples, oranges and pears"]],
    ["Which sentence is written correctly?","Yes, I would love to come.",["Yes I would love to come.","yes, I would love to come.","Yes, I would love to come"]]
  ];
  var HOMOPHONE=[
    ["Choose the correct word: ___ going to be late.","They're",["Their","There","Theyre"]],
    ["Choose the correct word: ___ book is on the table.","Their",["They're","There","Thier"]],
    ["Choose the correct word: The cat hurt ___ paw.","its",["it's","its'","it is"]]
  ];
  var COND=[["If you heat ice, it ___.","melts",["will melt","melted","would melt"]],["If it rains tomorrow, we ___ at home.","will stay",["stay","stayed","would stay"]]];

  // Grammar templates: {b:minBand, lv:level, fn}
  var GRAMMAR=[
    {b:1,lv:"F",fn:function(r){ var s=pick(r,SUBJ),v=pick(r,VERBS); return mc(r,"Grammar","F","present tense",s+" ___ "+pick(r,OBJ)+" "+pick(r,TIME_HABIT)+".",v[1],[v[0],v[2],v[3],v[4]]); }},
    {b:1,lv:"F",fn:function(r){ var vowel=r()<0.5,n=vowel?pick(r,AN):pick(r,A),c=vowel?"an":"a"; return mc(r,"Grammar","F","a / an","I saw ___ "+n+" in the park.",c,[vowel?"a":"an","the","some"]); }},
    {b:1,lv:"F",fn:function(r){ var p=pick(r,POSS); return mc(r,"Grammar","F","pronouns",p[0]+" forgot ___ bag at school.",p[1],["his","her","their","its"].filter(function(x){return x!==p[1];})); }},
    {b:2,lv:"C",fn:function(r){ var s=pick(r,SUBJ),v=pick(r,VERBS),t=pick(r,TIME_PAST); return mc(r,"Grammar","C","past tense",t+", "+s.toLowerCase()+" ___ "+pick(r,OBJ)+".",v[3],[v[0],v[1],v[2],v[4]]); }},
    {b:2,lv:"C",fn:function(r){ var v=pick(r,VERBS); return mc(r,"Grammar","C","-ing form","Look! The baby is ___ now.",v[2],[v[0],v[1],v[3]]); }},
    {b:2,lv:"C",fn:function(r){ var p=pick(r,IRREG_PLURAL); return mc(r,"Grammar","C","plurals","One "+p[0]+", two ___.",p[1],[p[0]+"s",p[0]+"es",p[0]]); }},
    {b:2,lv:"C",fn:function(r){ var c=pick(r,PREP_COLLOC); return mc(r,"Grammar","C","prepositions","She is very "+c[0]+" ___ it.",c[1],distinct(r,PREPS,c[1],3)); }},
    {b:1,lv:"F",fn:function(r){ var c=pick(r,COMPAR); return mc(r,"Grammar","F","comparing","This one is ___ than that one.",c[1],[c[0],c[0]+"est","most "+c[0]]); }},
    {b:2,lv:"C",fn:function(r){ var it=pick(r,CONJ); return mc(r,"Grammar","C","joining words",it[0],it[1],it[2]); }},
    {b:2,lv:"C",fn:function(r){ var it=pick(r,HOMOPHONE); return mc(r,"Grammar","C","tricky words",it[0],it[1],it[2]); }},
    {b:2,lv:"C",fn:function(r){ var it=pick(r,PUNCT); return mc(r,"Grammar","C","punctuation",it[0],it[1],it[2]); }},
    {b:3,lv:"H",fn:function(r){ var it=pick(r,AGREE); return mc(r,"Grammar","H","matching the verb",it[0],it[1],it[2]); }},
    {b:3,lv:"H",fn:function(r){ var it=pick(r,COND); return mc(r,"Grammar","H","if-sentences",it[0],it[1],it[2]); }},
    {b:3,lv:"H",fn:function(r){ var v=pick(r,VERBS); return mc(r,"Grammar","H","present perfect","I have never ___ that before.",v[4],[v[3],v[1],v[2],v[0]]); }},
    {b:4,lv:"H",fn:function(r){ var it=pick(r,[["The window ___ by the storm.","was broken",["broke","is breaking","has broke"]],["This bridge ___ in 1990.","was built",["built","is building","builds"]]]); return mc(r,"Grammar","H","passive",it[0],it[1],it[2]); }},
    {b:4,lv:"H",fn:function(r){ var it=pick(r,[["He said he ___ tired.","was",["is","will be","has been"]],["She told me she ___ come.","would",["will","can","shall"]]]); return mc(r,"Grammar","H","reported speech",it[0],it[1],it[2]); }}
  ];

  /* ===================== READING: narrative builder (bands A/B) ===================== */
  var NAMES=["Layla","Omar","Maya","Yousef","Hana","Zaid","Noor","Adam","Sofia","Khalid","Mariam","Tariq","Lina","Sami","Dana","Faris"];
  var PLACES=["the beach","the old market","the school library","her grandmother's farm","the science museum","the mountain village","the city park","the harbour"];
  var GOALS=["find a lost puppy","win the drawing contest","finish reading a long book","plant a small garden","learn to ride a bicycle","help clean the beach","bake a cake for a friend"];
  var PROBLEMS=["it started to rain heavily","the road was blocked","she had forgotten her bag","it was getting dark","the shop had already closed","a strong wind blew things around"];
  var ACTIONS=["ask a kind person for help","try again a different way","share the work with a friend","stay calm and make a plan","use what she already had","wait patiently for the rain to stop"];
  var RESULTS=["everything worked out well","she reached her goal just in time","she learned something useful","her friends thanked her warmly","the day ended with a big smile"];
  var FEELINGS=[["proud","pleased"],["relieved","glad"],["grateful","thankful"],["calm","relaxed"]];
  function buildNarrative(r){
    var name=pick(r,NAMES), place=pick(r,PLACES), goal=pick(r,GOALS), problem=pick(r,PROBLEMS), action=pick(r,ACTIONS), result=pick(r,RESULTS), feel=pick(r,FEELINGS);
    var day=pick(r,["one sunny morning","one quiet afternoon","early one Saturday","one cloudy day"]);
    var passage=name+" went to "+place+" "+day+". "+name+" wanted to "+goal+". "+
      "At first it seemed easy, but then there was a problem: "+problem+". "+
      name+" decided to "+action+". It was not easy, and "+name+" had to keep trying patiently. "+
      "In the end, "+result+", and "+name+" felt very "+feel[0]+".";
    var comp=[
      mc(r,"Reading","F","detail","Where did "+name+" go?",place,distinct(r,PLACES,place,3)),
      mc(r,"Reading","F","detail","What did "+name+" want to do?",goal,distinct(r,GOALS,goal,3)),
      mc(r,"Reading","C","detail","What was the problem?",problem,distinct(r,PROBLEMS,problem,3)),
      mc(r,"Reading","C","detail","What did "+name+" do about the problem?",action,distinct(r,ACTIONS,action,3)),
      mc(r,"Reading","F","detail","How did "+name+" feel at the end?",feel[0],distinct(r,["angry","bored","afraid","tired","hungry"],feel[0],3)),
      mc(r,"Reading","C","main idea","What is this story mostly about?","not giving up until you solve a problem",["a long car journey","how to cook food","a football match"]),
      mc(r,"Reading","H","thinking","What can we tell about "+name+"?",name+" does not give up easily",[name+" is unkind to others",name+" never leaves home",name+" dislikes helping"]),
      mc(r,"Reading","C","detail","What happened at the end of the story?",result,distinct(r,RESULTS,result,3))
    ];
    return {title:pick(r,["A Day to Remember","Never Give Up","The Big Try","A Small Adventure"]), passage:passage, comp:comp};
  }

  /* ===================== READING: factual builder (bands C/D) ===================== */
  var FACT_PACKS=[
    {subj:"the Arctic fox",where:"the freezing Arctic",f1:"has a thick white coat that keeps it warm",f2:"eats small animals and berries when food is scarce",extra:"can survive very cold winters"},
    {subj:"the honeybee",where:"hives made of wax",f1:"collects nectar from flowers to make honey",f2:"tells other bees where food is by doing a special dance",extra:"helps many of the plants we eat to grow"},
    {subj:"the Nile River",where:"north-east Africa",f1:"is one of the longest rivers in the world",f2:"gave water and rich soil to farmers long ago",extra:"still helps millions of people today"},
    {subj:"the rainforest",where:"warm places near the equator",f1:"is home to more than half of the world's plants and animals",f2:"makes a large part of the oxygen we breathe",extra:"is threatened by cutting down trees"},
    {subj:"the camel",where:"hot, dry deserts",f1:"stores fat in its hump for when food is hard to find",f2:"can go many days without drinking water",extra:"has long eyelashes that keep sand out of its eyes"},
    {subj:"solar power",where:"anywhere with sunlight",f1:"turns energy from the sun into electricity",f2:"makes no smoke or harmful gases while it works",extra:"is getting cheaper and more common"},
    {subj:"the octopus",where:"oceans around the world",f1:"can change the colour of its skin to hide",f2:"is one of the most intelligent sea animals",extra:"can squeeze through tiny gaps because it has no bones"},
    {subj:"the elephant",where:"the grasslands of Africa and Asia",f1:"uses its long trunk to gather food and water",f2:"lives in family groups led by the oldest female",extra:"can recognise friends it has not seen for years"},
    {subj:"recycling",where:"homes, schools and factories",f1:"turns used materials into new things",f2:"saves energy and reduces waste",extra:"helps protect the Earth for the future"},
    {subj:"the penguin",where:"the cold southern coasts",f1:"is a bird that cannot fly but swims very well",f2:"huddles together with others to stay warm",extra:"can dive deep to catch fish"},
    {subj:"the dolphin",where:"seas around the world",f1:"uses sound to find food and talk to other dolphins",f2:"often works together in groups to hunt",extra:"is one of the most intelligent animals"},
    {subj:"the water cycle",where:"the sky and the land",f1:"moves water between the sea, the clouds and the ground",f2:"includes water rising, forming clouds, and falling as rain",extra:"gives us the fresh water we need"}
  ];
  function buildFactual(r){
    var p=pick(r,FACT_PACKS);
    var passage=cap(p.subj)+" is found in "+p.where+". It "+p.f1+". It also "+p.f2+". As well as this, it "+p.extra+". For these reasons, many people find "+p.subj+" interesting.";
    var comp=[
      mc(r,"Reading","C","main idea","What is the passage mostly about?",cap(p.subj)+" and what makes it special",distinct(r,FACT_PACKS.filter(function(x){return x.subj!==p.subj;}).map(function(x){return cap(x.subj)+" and what makes it special";}),cap(p.subj)+" and what makes it special",3)),
      mc(r,"Reading","F","detail","Where is "+p.subj+" found?",p.where,distinct(r,FACT_PACKS.map(function(x){return x.where;}),p.where,3)),
      mc(r,"Reading","C","detail","The passage says it "+"___"+".",p.f1,distinct(r,FACT_PACKS.filter(function(x){return x.subj!==p.subj;}).map(function(x){return x.f1;}),p.f1,3)),
      mc(r,"Reading","C","detail","What else does the passage tell us?","It "+p.f2,["It can fly to the Moon","It is made of plastic","It never moves"]),
      mc(r,"Reading","F","detail","Which one is true, according to the passage?","It "+p.extra,["It cannot survive anywhere","It is not real","It has never been seen"]),
      mc(r,"Reading","H","thinking","What can we tell from the passage?",cap(p.subj)+" is special in more than one way",["It is boring and useless","It only lives in stories","It has no interesting features"]),
      mc(r,"Reading","C","writer's purpose","Why did the writer write this passage?","to give us facts about "+p.subj,["to sell us something","to tell a funny joke","to frighten us"])
    ];
    return {title:cap(p.subj.replace(/^the /,"")), passage:passage, comp:comp};
  }

  /* ===================== VOCABULARY FROM THE PASSAGE ===================== */
  // word (lowercase, may match inflections as a substring) -> [meaning, d1, d2, d3, level]
  var VOCAB_GLOSS={
    "freezing":["very cold","very hot","very loud","very bright","F"],
    "scarce":["hard to find","easy to find","very tasty","very heavy","H"],
    "survive":["stay alive","fall asleep","get lost","give up","F"],
    "collects":["gathers together","throws away","breaks apart","hides","C"],
    "gather":["bring together","throw away","break","forget","C"],
    "rich":["full of goodness","empty","dry","frozen","C"],
    "threatened":["in danger","very safe","very old","very large","H"],
    "stores":["keeps for later","throws away","sells quickly","gives away","F"],
    "harmful":["causing harm","very helpful","very small","very fast","C"],
    "intelligent":["clever","slow","lazy","weak","C"],
    "recognise":["know again","forget","break","build","C"],
    "reduces":["makes less","makes more","makes hot","makes wet","C"],
    "fresh":["clean and new","old and stale","very hot","very dark","F"],
    "huddles":["crowds close together","runs far away","falls asleep","floats","H"],
    "interesting":["makes you want to know more","very boring","very cold","very small","F"],
    "special":["not ordinary","very common","very cheap","very small","F"],
    "patiently":["waiting calmly without getting upset","in a big hurry","angrily","loudly","C"],
    "proud":["pleased with yourself","angry","hungry","sleepy","F"],
    "relieved":["glad a worry is over","very scared","very bored","very cold","C"],
    "grateful":["thankful","angry","tired","hungry","C"],
    "calm":["relaxed and quiet","angry and loud","very fast","very cold","F"],
    "decided":["made up your mind","forgot","fell down","ran away","F"],
    "gather ":["bring together","scatter","forget","break","C"],
    "oxygen":["the gas we need to breathe","a kind of food","a type of rock","a colour","C"],
    "equator":["the middle line around the Earth","the top of a mountain","the bottom of the sea","a city","H"],
    "energy":["power to do work","a kind of animal","a type of soil","a sound","C"],
    "electricity":["power that runs lights and machines","a kind of food","a type of cloud","a game","C"],
    "materials":["things that objects are made from","feelings","sounds","colours","C"],
    "berries":["small soft fruits","large stones","metal tools","paper sheets","F"],
    "warm":["a little hot","very cold","very loud","very dark","F"],
    "coat":["a thick fur covering","a pair of shoes","a loud sound","a type of food","F"],
    "nectar":["sweet liquid in flowers","a kind of rock","a metal tool","a cold wind","H"],
    "soil":["the ground that plants grow in","a type of cloud","a sea animal","a musical sound","F"],
    "hump":["a raised lump on the back","a deep hole","a loud noise","a small bird","C"],
    "deserts":["very dry, sandy places","wet forests","cold oceans","busy cities","C"],
    "sunlight":["light from the sun","light from a lamp","a type of food","a kind of cloud","F"],
    "gases":["air-like substances","solid stones","cold liquids","small animals","C"],
    "hide":["keep out of sight","show clearly","sell quickly","break apart","F"],
    "bones":["the hard parts inside the body","soft feathers","small leaves","metal bars","F"],
    "trunk":["an elephant's long nose","a small tail","a type of leaf","a kind of stone","C"],
    "groups":["sets of things or animals together","single objects","empty spaces","loud sounds","F"],
    "protect":["keep safe from harm","break into pieces","throw away","forget","C"],
    "dive":["go down quickly into water","float on top","fly upward","stand still","C"],
    "hunt":["search for food to catch","sleep all day","sing loudly","hide away","C"],
    "clouds":["masses of water drops in the sky","piles of sand","heaps of stones","groups of fish","F"],
    "waste":["things thrown away as rubbish","fresh new food","clean water","bright light","C"],
    "skin":["the outer covering of the body","the inside of a bone","a type of cloud","a metal tool","F"],
    "female":["a girl or woman animal","a type of plant","a kind of rock","a loud sound","C"],
    "longest":["the greatest in length","the smallest in size","the fastest in speed","the loudest in sound","C"],
    "honey":["a sweet food made by bees","a kind of stone","a cold drink","a type of cloth","F"]
  };
  var SYN=[["happy",["glad","cheerful"]],["big",["large","huge"]],["small",["little","tiny"]],["fast",["quick"]],["begin",["start"]],["end",["finish"]],["help",["assist"]],["scared",["afraid"]],["quiet",["silent"]],["easy",["simple"]],["hard",["difficult"]],["beautiful",["lovely"]],["cold",["chilly"]],["tired",["sleepy"]]];
  var VOCAB_DISTRACT=["river","table","garden","yellow","market","window","forest","letter","summer","pocket","corner","bottle","candle","ladder"];
  function passageVocab(passage, r, n){
    var text=" "+String(passage).toLowerCase()+" ", words=Object.keys(VOCAB_GLOSS);
    var found=shuffle(r, words.filter(function(w){ return text.indexOf(w.trim().toLowerCase())>=0; }).map(function(w){return w.trim();}));
    var used={}, out=[];
    for(var i=0;i<found.length && out.length<n;i++){ var w=found[i]; if(used[w])continue; used[w]=1; var g=VOCAB_GLOSS[w]||VOCAB_GLOSS[w+" "]; if(!g)continue;
      out.push(mc(r,"Vocabulary",g[4]||"C","word from the passage","In the passage, the word “"+w+"” means:",g[0],[g[1],g[2],g[3]])); }
    var guard=0;
    while(out.length<n && guard<60){ guard++; var it=pick(r,SYN),syn=pick(r,it[1]);
      out.push(mc(r,"Vocabulary","F","word meaning","Which word means about the same as “"+it[0]+"”?",syn,distinct(r,VOCAB_DISTRACT,syn,3,it[1].concat([it[0]])))); }
    return out.slice(0,n);
  }

  /* ===================== WRITING PROMPT ===================== */
  var W_NARR=["a day you will always remember","a time you helped someone","your happiest memory","a time you felt proud","a time you made a new friend","something funny that happened to you"];
  var W_DESC=["your favourite place and why you like it","a person you look up to","your perfect weekend","a festival your family enjoys","an animal you would like as a pet","a hobby you love"];
  var W_OPIN=["Should students wear school uniforms?","Should mobile phones be allowed in class?","Is it better to live in a city or the countryside?","Should homework be made shorter?","Are zoos good or bad for animals?"];
  function buildWriting(r,band){
    if(band<=1) return "Write 3–5 sentences about "+pick(r,W_NARR)+". Use capital letters and full stops.";
    if(band===2) return r()<0.5 ? "Write a short paragraph (4–5 sentences) about "+pick(r,W_DESC)+"."
                                 : "Write a short story about "+pick(r,W_NARR)+". Give it a beginning, a middle and an end.";
    if(band===3) return r()<0.5 ? "Give your opinion: "+pick(r,W_OPIN)+" Write a paragraph with two reasons and an example."
                                 : "Write about "+pick(r,W_DESC)+". Use clear paragraphs and joining words like first, however and finally.";
    return "Write a short response: "+pick(r,W_OPIN)+" Give your opinion, two clear reasons, and a short conclusion.";
  }

  /* ===================== PUBLIC API ===================== */
  function pickTemplates(list,band){ return list.filter(function(t){ return band>=t.b; }); }
  // Grammar questions only, easy→hard, no repeated stems.
  function items(grade, seedStr, count){
    count=count||7; var band=bandOf(grade), r=rng("GRAM|"+grade+"|"+seedStr);
    var G=pickTemplates(GRAMMAR,band); if(!G.length) G=GRAMMAR;
    var byLv={F:[],C:[],H:[]}; G.forEach(function(t){ (byLv[t.lv]||byLv.C).push(t); });
    var want={F:Math.max(1,Math.round(count*0.4)), C:Math.max(1,Math.round(count*0.35))}; want.H=Math.max(1,count-want.F-want.C);
    var out=[], seen={};
    ["F","C","H"].forEach(function(lv){ var pool=byLv[lv].length?byLv[lv]:G, need=want[lv], guard=0;
      while(need>0 && guard<200){ guard++; var t=pick(r,pool), it=t.fn(r), key=it.q+"|"+it.options.join("|"); if(seen[key])continue; seen[key]=1; out.push(it); need--; } });
    var guard=0; while(out.length<count && guard<200){ guard++; var t=pick(r,G), it=t.fn(r), key=it.q+"|"+it.options.join("|"); if(seen[key])continue; seen[key]=1; out.push(it); }
    var rank={F:0,C:1,H:2}; out.sort(function(a,b){ return (rank[a.level]||1)-(rank[b.level]||1); });
    return out.slice(0,count);
  }
  // Reading comprehension (first) + vocabulary drawn from the passage (second). Default 7 + 5 = 12.
  function reading(grade, seedStr){
    var band=bandOf(grade), r=rng("READ|"+grade+"|"+seedStr);
    var built = band<=2 ? buildNarrative(r) : buildFactual(r);
    var comp = built.comp.slice(0,7);
    var vocab = passageVocab(built.passage, r, 12-comp.length);
    return { title:built.title, passage:built.passage, qs:comp.concat(vocab) };
  }
  function writing(grade, seedStr){ return buildWriting(rng("WRITE|"+grade+"|"+seedStr), bandOf(grade)); }

  var api={ items:items, reading:reading, writing:writing, _band:bandOf };
  if(typeof window!=="undefined") window.ENG_GEN=api;
  if(typeof globalThis!=="undefined") globalThis.ENG_GEN=api;
})();
