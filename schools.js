/* Adeptly — multiple schools on one platform.
   Every class, diagnostic, imported test and past result carries a schoolId. Teachers can belong to several
   schools and switch between them; students belong to one school (set by the first class they join).
   All counts, averages, tiers and reports are calculated for ONE school at a time. The super-admin can switch
   school, or choose "All schools" for an overview that never feeds into a school's own figures.
   Until the admin presses "Set up schools", the app behaves exactly as before (single school). */
var DEFAULT_SCHOOL = "noaimiyah";
var SCHOOL_SEED = [
  { id: "noaimiyah", name: "Al Noaimiyah Girls School – Cycle 1, 2 & 3", prefix: "NOAIM" },
  { id: "ibnhazm",   name: "Ibn Hazm Boys School",                       prefix: "IBNHZ" }
];

function schoolsEnabled(){ return !!(typeof CACHE !== "undefined" && CACHE.schools && CACHE.schools.length); }
function schoolList(){ return ((typeof CACHE !== "undefined" && CACHE.schools) || []).slice().sort(function(a,b){ return String(a.name).localeCompare(String(b.name)); }); }
function schoolName(id){ var s=schoolList().filter(function(x){return x.id===id;})[0]; if(s) return s.name; var d=SCHOOL_SEED.filter(function(x){return x.id===id;})[0]; return d?d.name:(id||""); }
function schoolShort(id){ return String(schoolName(id)).replace(/\s*[–-]\s*Cycle.*$/i,"").replace(/\s+School$/i,""); }
function sidOf(r){ return (r && r.schoolId) || DEFAULT_SCHOOL; }
function newSchoolCode(prefix){ var c="ABCDEFGHJKLMNPQRSTUVWXYZ23456789", s=""; for(var i=0;i<4;i++) s+=c.charAt(Math.floor(Math.random()*c.length)); return String(prefix||"SCH").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)+"-"+s; }
function normSchoolCode(s){ return String(s||"").toUpperCase().replace(/[^A-Z0-9-]/g,""); }

// Which schools a user belongs to. Accounts created before schools existed belong to the default school.
function userSchools(u){
  if(!u) return [];
  if(u.role==="student") return [u.school || DEFAULT_SCHOOL];
  if(Array.isArray(u.schools)) return u.schools.slice();
  return [DEFAULT_SCHOOL];
}
// Schools available on the dashboard currently shown (the super-admin may work in any school).
function mySchools(){
  if(typeof ADMIN_AS!=="undefined" && ADMIN_AS) return userSchools(ownerUser()).filter(function(x){return x;});
  if(isAdmin()) { var all=schoolList().map(function(s){return s.id;}); return all.length?all:[DEFAULT_SCHOOL]; }
  return userSchools(AUTH);
}
function curSchool(){
  var list=mySchools(); var c=(typeof ADMIN_AS!=="undefined" && ADMIN_AS) ? S.asSchool : (S.curSchool || (AUTH && AUTH.activeSchool));
  if(c && list.indexOf(c)>=0) return c;
  return list[0] || DEFAULT_SCHOOL;
}
function inCur(r){ return !schoolsEnabled() || sidOf(r)===curSchool(); }
function setCurSchool(id){
  if(typeof ADMIN_AS!=="undefined" && ADMIN_AS){ S.asSchool=id; }
  else { S.curSchool=id; try{ if(AUTH && AUTH.uid) db.collection("users").doc(AUTH.uid).update({activeSchool:id}).catch(function(){}); AUTH.activeSchool=id; }catch(e){} }
  S.openClassId=null; render();
}
function openClassInSchool(classId, sid){ if(sid && sid!==curSchool()){ if(typeof ADMIN_AS!=="undefined" && ADMIN_AS) S.asSchool=sid; else { S.curSchool=sid; try{ db.collection("users").doc(AUTH.uid).update({activeSchool:sid}).catch(function(){}); AUTH.activeSchool=sid; }catch(e){} } } S.tSection="classes"; S.openClassId=classId; render(); }

/* ---------------- Admin scope (reports / lists) ---------------- */
function adminSchool(){ return S.adminSchool || DEFAULT_SCHOOL; }
function setAdminSchool(v){ S.adminSchool=v; render(); }
function inAdminScope(r){ var a=adminSchool(); return !schoolsEnabled() || a==="ALL" || sidOf(r)===a; }
function userInAdminScope(u){ var a=adminSchool(); if(!schoolsEnabled() || a==="ALL") return true; return u.admin===true || userSchools(u).indexOf(a)>=0; }
function adminSchoolSwitcher(){
  if(!schoolsEnabled()) return "";
  var a=adminSchool();
  return '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:12px;padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:#f8fafc">'
    +'<b style="font-size:13px">🏫 School:</b><select style="width:auto" onchange="setAdminSchool(this.value)">'
    +schoolList().map(function(s){ return '<option value="'+s.id+'"'+(a===s.id?' selected':'')+'>'+esc(s.name)+'</option>'; }).join("")
    +'<option value="ALL"'+(a==="ALL"?' selected':'')+'>All schools (overview — you only)</option></select>'
    +'<span class="muted" style="font-size:12px">'+(a==="ALL"?"Showing every school together. Each school’s own reports stay separate.":"Every report and list below is for this school only.")+'</span></div>';
}

/* ---------------- Teacher: switcher, schools card, combined class list, gate ---------------- */
function teacherSchoolSwitcher(){
  if(!schoolsEnabled()) return "";
  var list=mySchools(); if(list.length<2) return '<span class="pill" style="margin-left:auto">🏫 '+esc(schoolShort(curSchool()))+'</span>';
  var c=curSchool();
  return '<span style="margin-left:auto;display:inline-flex;align-items:center;gap:6px"><span style="font-size:12px" class="muted">School</span><select style="width:auto" onchange="setCurSchool(this.value)">'
    +list.map(function(id){ return '<option value="'+id+'"'+(id===c?' selected':'')+'>'+esc(schoolName(id))+'</option>'; }).join("")+'</select></span>';
}
function allMyClassesRaw(){
  if(typeof ADMIN_AS!=="undefined" && ADMIN_AS) return (CACHE.allClasses||[]).filter(function(c){ return c.teacherUid===ADMIN_AS.uid; });
  return CACHE.classes||[];
}
function allMyClassesCard(){
  if(!schoolsEnabled() || mySchools().length<2) return "";
  var c=curSchool();
  var others=allMyClassesRaw().filter(function(k){ return sidOf(k)!==c; });
  if(!others.length) return "";
  var asAll=(typeof ADMIN_AS!=="undefined" && ADMIN_AS)?(CACHE.allAssign||[]):(CACHE.assignments||[]);
  var groups={}; others.forEach(function(k){ var s=sidOf(k); (groups[s]=groups[s]||[]).push(k); });
  var html=Object.keys(groups).map(function(s){
    var rows=groups[s].sort(function(a,b){ return String(a.name).localeCompare(String(b.name)); }).map(function(k){
      var n=new Set(asAll.filter(function(x){return x.classId===k.id;}).map(function(x){return x.studentEmail;})).size;
      return '<div class="flex-between" style="border:1px solid var(--line);border-radius:8px;padding:8px 12px;margin-bottom:6px;gap:8px;flex-wrap:wrap"><span><b>'+esc(k.name)+'</b> <span class="muted" style="font-size:12px">· '+esc(subjLabelLong(k.subject))+' · '+n+' students · code '+esc(k.joinCode||"")+'</span></span>'
        +'<button class="btn sm" onclick="openClassInSchool(\''+k.id+'\',\''+s+'\')">Switch to '+esc(schoolShort(s))+' & open</button></div>';
    }).join("");
    return '<h3 style="font-size:14px;margin:12px 0 6px">🏫 '+esc(schoolName(s))+' <span class="muted" style="font-weight:400">('+groups[s].length+')</span></h3>'+rows;
  }).join("");
  return '<div class="card"><details><summary style="cursor:pointer;font-weight:600">📚 Your classes in other schools ('+others.length+') — not part of '+esc(schoolShort(c))+'</summary><p class="sub" style="margin-top:6px">These belong to other schools, so they are not counted in this school’s results or reports.</p>'+html+'</details></div>';
}
function schoolEmptyHint(){
  if(!schoolsEnabled() || mySchools().length<2) return "";
  var c=curSchool(), others=allMyClassesRaw().filter(function(k){ return sidOf(k)!==c; }).length;
  return 'No classes in <b>'+esc(schoolName(c))+'</b> yet. Create one below'+(others?', or — if students of this school took tests in a class listed under “other schools” — ask the admin to use <b>Schools → 📧 Move students by email</b>.':'.');
}
function mySchoolsCard(){
  if(!schoolsEnabled() || isAdmin() || (typeof ADMIN_AS!=="undefined" && ADMIN_AS)) return "";
  var list=mySchools();
  return '<div class="card"><h2 style="margin:0 0 4px">🏫 My schools</h2><p class="sub">Teach at more than one school? Add each school with its code — you’ll get a switcher at the top of your dashboard.</p>'
    +list.map(function(id){ return '<div style="padding:6px 0;border-top:1px solid var(--line)">'+esc(schoolName(id))+(id===curSchool()?' <span class="pill green">current</span>':'')+'</div>'; }).join("")
    +'<div class="row" style="margin-top:8px"><div class="col"><input id="add_school_code" placeholder="School code, e.g. IBNHZ-4K7P" style="text-transform:uppercase"></div><div class="col" style="display:flex;align-items:flex-end"><button class="btn" onclick="addMySchool()">+ Add a school</button> <span id="add_school_msg" style="font-size:12px;margin-left:8px"></span></div></div></div>';
}
function findSchoolByCode(code){
  code=normSchoolCode(code); if(!code) return Promise.resolve(null);
  var local=schoolList().filter(function(s){ return normSchoolCode(s.code)===code; })[0];
  if(local) return Promise.resolve(local);
  return db.collection("schools").where("code","==",code).limit(1).get().then(function(q){ return q.empty?null:Object.assign({id:q.docs[0].id},q.docs[0].data()); });
}
function joinSchoolWithCode(code, msgId){
  var m=document.getElementById(msgId); function say(t,c){ if(m){ m.style.color="var(--"+(c||"muted")+")"; m.textContent=t; } }
  if(!normSchoolCode(code)){ say("Enter the school code your school gave you.","red"); return; }
  say("Checking the code…");
  findSchoolByCode(code).then(function(s){
    if(!s){ say("No school has that code. Check it with your school.","red"); return; }
    var have=userSchools(AUTH).filter(function(x){return x;});
    if(Array.isArray(AUTH.schools) && have.indexOf(s.id)>=0){ say("You’re already in "+s.name+".","ok"); return; }
    var next=(Array.isArray(AUTH.schools)?AUTH.schools:[]).concat([s.id]).filter(function(v,i,a){return a.indexOf(v)===i;});
    return db.collection("users").doc(AUTH.uid).update({schools:next, activeSchool:s.id}).then(function(){ AUTH.schools=next; AUTH.activeSchool=s.id; S.curSchool=s.id; say("Added "+s.name+" ✓","ok"); render(); });
  }).catch(function(e){ say("Couldn’t add the school: "+fbErr(e),"red"); });
}
function addMySchool(){ joinSchoolWithCode((document.getElementById("add_school_code")||{}).value, "add_school_msg"); }
function needsSchoolGate(){ return schoolsEnabled() && AUTH && AUTH.role==="teacher" && !isAdmin() && Array.isArray(AUTH.schools) && AUTH.schools.length===0; }
function schoolGateView(){
  return '<div class="card" style="max-width:480px;margin:28px auto"><h2>🏫 Join your school</h2><p class="sub">Enter the school code your school gave you. This keeps your classes and reports inside your school.</p>'
    +'<input id="gate_code" placeholder="e.g. NOAIM-7K2Q" style="text-transform:uppercase"><div style="margin-top:10px"><button class="btn" onclick="joinSchoolWithCode(document.getElementById(\'gate_code\').value,\'gate_msg\')">Join school</button> <span id="gate_msg" style="font-size:12px"></span></div>'
    +'<p class="muted" style="font-size:12px;margin-top:12px">Don’t have a code? Ask your school’s coordinator or the platform admin.</p></div>';
}

/* ---------------- Super-admin: Schools page ---------------- */
function adminSchoolsView(){
  if(!schoolsEnabled()){
    return '<div class="card"><h2>🏫 Schools</h2><p class="sub">Set up separate schools so each school’s marks, classes and reports stay apart.</p>'
      +'<p style="font-size:14px">Pressing the button below will:</p><ol style="font-size:14px;line-height:1.8"><li>Create <b>'+esc(SCHOOL_SEED[0].name)+'</b> and <b>'+esc(SCHOOL_SEED[1].name)+'</b>, each with its own school code.</li><li>Label <b>all existing</b> teachers, students, classes, diagnostics, imported tests and past results as <b>'+esc(SCHOOL_SEED[0].name)+'</b>. Nothing is deleted or changed otherwise.</li></ol>'
      +'<button class="btn" onclick="setupSchools()">Set up schools</button> <span id="sch_msg" style="font-size:12px;margin-left:8px"></span></div>';
  }
  var us=CACHE.users||[], cls=CACHE.allClasses||[], as=CACHE.allAssign||[];
  var rows=schoolList().map(function(s){
    var t=us.filter(function(u){ return u.role!=="student" && userSchools(u).indexOf(s.id)>=0; }).length;
    var st={}; as.forEach(function(a){ if(sidOf(a)===s.id && a.studentEmail) st[a.studentEmail]=1; });
    var c=cls.filter(function(k){ return sidOf(k)===s.id; }).length;
    return '<tr><td><b>'+esc(s.name)+'</b></td><td><code style="font-size:14px;letter-spacing:1px">'+esc(s.code||"")+'</code></td><td>'+t+'</td><td>'+Object.keys(st).length+'</td><td>'+c+'</td></tr>'; }).join("");
  var unl=['classes','assignments','tests'].map(function(k){ var src=k==="classes"?cls:(k==="assignments"?as:(CACHE.allTests||[])); return src.filter(function(r){return !r.schoolId;}).length; }).reduce(function(a,b){return a+b;},0)
    +us.filter(function(u){ return u.role==="student"?!u.school:!Array.isArray(u.schools); }).length;
  var teachers=us.filter(function(u){ return u.role!=="student"; }).sort(function(a,b){ return String(a.name||a.email).localeCompare(String(b.name||b.email)); });
  var trows=teachers.map(function(u){ var mine=userSchools(u);
    return '<tr><td><b>'+esc(u.name||"—")+'</b><div class="muted" style="font-size:11px">'+esc(u.email||"")+'</div></td><td>'
      +schoolList().map(function(s){ return '<label style="display:inline-flex;align-items:center;gap:4px;margin-right:12px;font-weight:400"><input type="checkbox" style="width:auto" class="ts_'+u.uid+'" value="'+s.id+'"'+(mine.indexOf(s.id)>=0?' checked':'')+'> '+esc(schoolShort(s.id))+'</label>'; }).join("")
      +'</td><td><button class="btn ghost sm" onclick="saveTeacherSchools(\''+u.uid+'\')">Save</button></td></tr>'; }).join("");
  return '<div class="card"><h2 style="margin:0 0 4px">🏫 Schools</h2><p class="sub">Give each school’s teachers their school code. Students don’t need one — they join their school through a class code.</p>'
    +'<table><thead><tr><th>School</th><th>School code</th><th>Teachers</th><th>Students</th><th>Classes</th></tr></thead><tbody>'+rows+'</tbody></table>'
    +'<h3 style="font-size:14px;margin:16px 0 6px">Add a school</h3><div class="row"><div class="col"><input id="new_school_name" placeholder="School name"></div><div class="col" style="display:flex;align-items:flex-end"><button class="btn" onclick="addSchool()">+ Add school</button> <span id="sch_msg" style="font-size:12px;margin-left:8px"></span></div></div>'
    +(unl?'<div class="notice" style="margin-top:12px">'+unl+' record(s) have no school label yet (made on an older version). <button class="btn sm" onclick="migrateToSchools(true)">Label them as '+esc(schoolShort(DEFAULT_SCHOOL))+'</button></div>':'')
    +'</div>'
    +splitByEmailCard()
    +'<div class="card"><h2 style="margin:0 0 4px">👩‍🏫 Which schools each teacher belongs to</h2><p class="sub">Tick every school a teacher works at. Teachers with more than one school get a switcher on their dashboard.</p>'
    +'<table><thead><tr><th>Teacher</th><th>Schools</th><th></th></tr></thead><tbody>'+trows+'</tbody></table></div>';
}
function setupSchools(){
  if(!isAdmin()) return;
  if(!confirm("Set up the two schools and label ALL existing data as "+SCHOOL_SEED[0].name+"?")) return;
  var m=document.getElementById("sch_msg"); if(m){ m.textContent="Setting up…"; }
  var b=db.batch();
  SCHOOL_SEED.forEach(function(s){ b.set(db.collection("schools").doc(s.id),{name:s.name, code:newSchoolCode(s.prefix), createdAt:Date.now()},{merge:true}); });
  b.commit().then(function(){ return migrateToSchools(false); })
    .then(function(n){ S.adminSchool=DEFAULT_SCHOOL; alert("✅ Schools are set up.\n\n"+n+" existing record(s) were labelled as "+SCHOOL_SEED[0].name+".\n\nYou’ll find each school’s code in Admin → Schools."); render(); })
    .catch(function(e){ alert("Couldn’t set up schools: "+fbErr(e)+((e&&e.code)?" ("+e.code+")":"")); });
}
// Label every record that has no school yet. Diagnostics take their class's school.
function migrateToSchools(interactive){
  if(!isAdmin()) return Promise.resolve(0);
  var ops=[], clsSchool={};
  (CACHE.allClasses||[]).forEach(function(c){ clsSchool[c.id]=sidOf(c); if(!c.schoolId) ops.push([db.collection("classes").doc(c.id),{schoolId:DEFAULT_SCHOOL}]); });
  (CACHE.allAssign||[]).forEach(function(a){ if(!a.schoolId) ops.push([db.collection("assignments").doc(a.id),{schoolId:(a.classId&&clsSchool[a.classId])||DEFAULT_SCHOOL}]); });
  (CACHE.allTests||[]).forEach(function(t){ if(!t.schoolId) ops.push([db.collection("tests").doc(t.id),{schoolId:DEFAULT_SCHOOL}]); });
  (CACHE.users||[]).forEach(function(u){
    if(u.role==="student"){ if(!u.school) ops.push([db.collection("users").doc(u.uid),{school:DEFAULT_SCHOOL}]); }
    else if(!Array.isArray(u.schools)) ops.push([db.collection("users").doc(u.uid),{schools:[DEFAULT_SCHOOL], activeSchool:DEFAULT_SCHOOL}]); });
  var chain=Promise.resolve();
  for(var i=0;i<ops.length;i+=400){ (function(ck){ chain=chain.then(function(){ var b=db.batch(); ck.forEach(function(o){ b.update(o[0],o[1]); }); return b.commit(); }); })(ops.slice(i,i+400)); }
  // past results imported by Student ID
  chain=chain.then(function(){ return db.collection("priorResults").get().then(function(q){ var list=[]; q.forEach(function(d){ if(!(d.data()||{}).schoolId) list.push(d.ref); });
    var c2=Promise.resolve(); for(var j=0;j<list.length;j+=400){ (function(ck){ c2=c2.then(function(){ var b=db.batch(); ck.forEach(function(r){ b.update(r,{schoolId:DEFAULT_SCHOOL}); }); return b.commit(); }); })(list.slice(j,j+400)); }
    return c2.then(function(){ return list.length; }); }).catch(function(){ return 0; }); });
  return chain.then(function(p){ var n=ops.length+(p||0); if(interactive) alert("✅ Labelled "+n+" record(s) as "+schoolName(DEFAULT_SCHOOL)+"."); return n; })
    .catch(function(e){ if(interactive) alert("Couldn’t label records: "+fbErr(e)); throw e; });
}
function addSchool(){
  var n=((document.getElementById("new_school_name")||{}).value||"").trim(); var m=document.getElementById("sch_msg");
  if(!n){ if(m){ m.style.color="var(--red)"; m.textContent="Type the school name."; } return; }
  var id=n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40)||("school-"+Date.now());
  if(schoolList().some(function(s){return s.id===id;})){ if(m){ m.style.color="var(--red)"; m.textContent="That school already exists."; } return; }
  var prefix=n.replace(/^(al|the)\s+/i,"").replace(/[^A-Za-z]/g,"").slice(0,5);
  db.collection("schools").doc(id).set({name:n, code:newSchoolCode(prefix), createdAt:Date.now()})
    .then(function(){ if(m){ m.style.color="var(--ok)"; m.textContent="Added “"+n+"”."; } })
    .catch(function(e){ if(m){ m.style.color="var(--red)"; m.textContent=fbErr(e); } });
}
function saveTeacherSchools(uid){
  var picks=[].slice.call(document.querySelectorAll(".ts_"+uid)).filter(function(x){return x.checked;}).map(function(x){return x.value;});
  if(!picks.length){ alert("A teacher must belong to at least one school."); return; }
  var u=(CACHE.users||[]).filter(function(x){return x.uid===uid;})[0]||{};
  var act=(u.activeSchool && picks.indexOf(u.activeSchool)>=0)?u.activeSchool:picks[0];
  db.collection("users").doc(uid).update({schools:picks, activeSchool:act}).then(function(){ alert("✅ Saved: "+picks.map(schoolShort).join(", ")); }).catch(function(e){ alert(fbErr(e)); });
}
// Move a class — with every diagnostic and its students — to another school.
function moveClassToSchool(classId, sid){
  if(!isAdmin()||!sid) return;
  var c=(CACHE.allClasses||[]).filter(function(x){return x.id===classId;})[0]; if(!c||sidOf(c)===sid) return;
  if(!confirm("Move “"+c.name+"” and all its students’ diagnostics to "+schoolName(sid)+"?")) return;
  var cas=(CACHE.allAssign||[]).filter(function(a){return a.classId===classId;});
  var emails={}; cas.forEach(function(a){ if(a.studentEmail) emails[a.studentEmail]=1; });
  var ops=[db.collection("classes").doc(classId).update({schoolId:sid})].concat(cas.map(function(a){ return db.collection("assignments").doc(a.id).update({schoolId:sid}); }));
  (CACHE.users||[]).forEach(function(u){ if(u.role==="student" && emails[String(u.email||"").toLowerCase()]) ops.push(db.collection("users").doc(u.uid).update({school:sid})); });
  Promise.all(ops).then(function(){ alert("✅ Moved “"+c.name+"” to "+schoolName(sid)+"."); }).catch(function(e){ alert("Couldn’t move it: "+fbErr(e)); });
}

/* ---------------- Super-admin: move students to the right school by email ----------------
   For records made before the schools were set up. Example: Ibn Hazm boys' emails start with "stum".
   A class holding ONLY matching students moves whole. A MIXED class is split: matching students move into a
   copy of the class in the target school (new class code); everyone else stays in the original class. */
function splitByEmailCard(){
  if(!schoolsEnabled()) return "";
  var subs={}; (CACHE.allAssign||[]).forEach(function(a){ if(a.subject) subs[a.subject]=1; });
  return '<div class="card"><h2 style="margin:0 0 4px">📧 Move students by email</h2><p class="sub">Put students (and their classes and results) into the right school using how their email starts — e.g. Ibn Hazm boys start with <b>stum</b>, Al Noaimiyah girls with <b>stuf</b>.</p>'
    +'<div class="row"><div class="col"><label>Email starts with</label><input id="sp_prefix" value="stum"></div>'
    +'<div class="col"><label>Subject</label><select id="sp_subject"><option value="Chemistry">Chemistry</option><option value="">All subjects</option>'+Object.keys(subs).filter(function(s){return s!=="Chemistry";}).sort().map(function(s){ return '<option value="'+esc(s)+'">'+esc(s)+'</option>'; }).join("")+'</select></div>'
    +'<div class="col"><label>Move to</label><select id="sp_target">'+schoolList().map(function(s){ return '<option value="'+s.id+'"'+(s.id==="ibnhazm"?' selected':'')+'>'+esc(s.name)+'</option>'; }).join("")+'</select></div></div>'
    +'<div style="margin-top:10px"><button class="btn" onclick="previewSplit()">Preview</button></div><div id="sp_out" style="margin-top:12px"></div></div>';
}
function _splitPlan(){
  var prefix=String((document.getElementById("sp_prefix")||{}).value||"").trim().toLowerCase();
  var subj=(document.getElementById("sp_subject")||{}).value||"";
  var target=(document.getElementById("sp_target")||{}).value||"";
  if(!prefix||!target) return {error:"Enter how the emails start and choose a school."};
  var all=CACHE.allAssign||[], cls=CACHE.allClasses||[];
  var hit=function(a){ return String(a.studentEmail||"").toLowerCase().indexOf(prefix)===0 && (!subj||a.subject===subj) && sidOf(a)!==target; };
  var moving=all.filter(hit); var byClass={};
  moving.forEach(function(a){ var k=a.classId||"_none"; (byClass[k]=byClass[k]||[]).push(a); });
  var groups=Object.keys(byClass).map(function(k){
    var c=cls.filter(function(x){return x.id===k;})[0]||null;
    var inClass=c?all.filter(function(a){return a.classId===k;}):[];
    var stay=inClass.filter(function(a){ return !hit(a); });
    var emails={}; byClass[k].forEach(function(a){ emails[String(a.studentEmail).toLowerCase()]=1; });
    return {classId:k, cls:c, move:byClass[k], stayCount:stay.length, students:Object.keys(emails), mode:!c?"records":(stay.length?"split":"whole")};
  });
  var emailsAll={}; moving.forEach(function(a){ emailsAll[String(a.studentEmail).toLowerCase()]=1; });
  var other=all.filter(function(a){ return emailsAll[String(a.studentEmail||"").toLowerCase()] && subj && a.subject!==subj && sidOf(a)!==target; }).length;
  return {prefix:prefix, subj:subj, target:target, groups:groups, moving:moving, students:Object.keys(emailsAll), other:other};
}
function previewSplit(){
  var out=document.getElementById("sp_out"); var P=_splitPlan(); if(!out) return;
  if(P.error){ out.innerHTML='<div class="notice">'+P.error+'</div>'; return; }
  if(!P.moving.length){ out.innerHTML='<div class="notice">Nothing to move — no '+(P.subj||"")+' diagnostics from emails starting “'+esc(P.prefix)+'” are outside '+esc(schoolName(P.target))+'.</div>'; return; }
  var rows=P.groups.map(function(g){
    var what=g.mode==="whole"?"Whole class moves to "+esc(schoolShort(P.target))
      :g.mode==="split"?"Split — these students move to a new "+esc(schoolShort(P.target))+" copy of the class (new class code); "+g.stayCount+" other record(s) stay"
      :"Individual diagnostics (no class) move";
    return '<tr><td><b>'+esc(g.cls?g.cls.name:"(no class)")+'</b><div class="muted" style="font-size:11px">'+esc(g.cls?(g.cls.teacherName||""):"")+(g.cls?" · "+esc(subjLabelLong(g.cls.subject)):"")+'</div></td><td>'+g.students.length+' student(s), '+g.move.length+' diagnostic(s)</td><td>'+what+'</td></tr>'; }).join("");
  out.innerHTML='<table><thead><tr><th>Class</th><th>Moving</th><th>What happens</th></tr></thead><tbody>'+rows+'</tbody></table>'
    +'<p style="font-size:13px;margin:8px 0">'+P.students.length+' student(s) will belong to <b>'+esc(schoolName(P.target))+'</b>. Their teachers are added to that school so they can switch to it.</p>'
    +(P.other?'<div class="notice" style="margin:6px 0">ℹ These students also have '+P.other+' diagnostic(s) in other subjects outside '+esc(schoolShort(P.target))+'. They are not moved now (choose “All subjects” to move everything).</div>':'')
    +'<button class="btn" onclick="runSplit()">Move now</button> <span id="sp_msg" style="font-size:12px;margin-left:8px"></span>';
}
function runSplit(){
  if(!isAdmin()) return; var P=_splitPlan(); if(P.error||!P.moving.length) return;
  if(!confirm("Move "+P.moving.length+" diagnostic(s) for "+P.students.length+" student(s) to "+schoolName(P.target)+"?")) return;
  var msg=document.getElementById("sp_msg"); if(msg){ msg.textContent="Moving…"; }
  var ops=[], newCodes=[], teachers={};
  P.groups.forEach(function(g){
    var c=g.cls;
    if(c) teachers[c.teacherUid]=1; g.move.forEach(function(a){ if(a.teacherUid) teachers[a.teacherUid]=1; });
    if(g.mode==="whole"){
      ops.push(function(){ return db.collection("classes").doc(c.id).update({schoolId:P.target}); });
      g.move.forEach(function(a){ ops.push(function(){ return db.collection("assignments").doc(a.id).update({schoolId:P.target}); }); });
    } else if(g.mode==="split"){
      ops.push(function(){
        var copy=Object.assign({},c); delete copy.id; copy.schoolId=P.target; copy.joinCode=genCode(); copy.createdAt=Date.now(); copy.splitFrom=c.id;
        return db.collection("classes").add(copy).then(function(ref){ newCodes.push(c.name+" ("+schoolShort(P.target)+"): "+copy.joinCode);
          return Promise.all(g.move.map(function(a){ return db.collection("assignments").doc(a.id).update({schoolId:P.target, classId:ref.id}); })); });
      });
    } else {
      g.move.forEach(function(a){ ops.push(function(){ return db.collection("assignments").doc(a.id).update({schoolId:P.target}); }); });
    }
  });
  // students now belong to the target school
  (CACHE.users||[]).forEach(function(u){ if(u.role==="student" && P.students.indexOf(String(u.email||"").toLowerCase())>=0) ops.push(function(){ return db.collection("users").doc(u.uid).update({school:P.target}); }); });
  // teachers join the target school; their student-list entries follow the students
  Object.keys(teachers).forEach(function(uid){ var t=(CACHE.users||[]).filter(function(u){return u.uid===uid;})[0]; if(!t) return;
    var sch=userSchools(t); if(sch.indexOf(P.target)<0) sch=sch.concat([P.target]);
    var roster=(t.students||[]).map(function(x){ return P.students.indexOf(String(x.email||"").toLowerCase())>=0?Object.assign({},x,{school:P.target}):x; });
    ops.push(function(){ return db.collection("users").doc(uid).update({schools:sch, students:roster}); }); });
  ops.reduce(function(p,f){ return p.then(f); }, Promise.resolve())
    .then(function(){ alert("✅ Moved "+P.moving.length+" diagnostic(s) for "+P.students.length+" student(s) to "+schoolName(P.target)+"."+(newCodes.length?"\n\nNew class code(s) for the moved students:\n"+newCodes.join("\n")+"\n\n(The original classes keep their old codes for the students who stayed.)":"")); render(); })
    .catch(function(e){ if(msg){ msg.style.color="var(--red)"; msg.textContent="Couldn’t finish: "+fbErr(e); } });
}
