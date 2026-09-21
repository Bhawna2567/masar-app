/* Adeptly — Chemistry diagnostic question banks, BILINGUAL.
   A Chemistry class is diagnosed on the PREVIOUS grade's content:
     Grade 10 class -> tests grade 9 chemistry, Grade 11 -> grade 10, Grade 12 -> grade 11.
   Each question is authored ONCE (English + Arabic) and split into:
     • QUESTION_POOL[grade]["Chemistry"]    -> English pool (assembled F/C/H)
     • QUESTION_BANK_AR[grade]["Chemistry"] -> Arabic bank (used when the class language is Arabic)
   The grade-9/10/11 sets are applied to BOTH streams (…A and …G) for the diagnosed grade.
   Strands: "Matter & Atomic Structure","Bonding & Compounds","Reactions & Stoichiometry","States, Solutions & Organic". */
if (typeof QUESTION_POOL === "undefined") { var QUESTION_POOL = {}; }
if (typeof QUESTION_BANK_AR === "undefined") { var QUESTION_BANK_AR = {}; }
(function(){
  var MAS="Matter & Atomic Structure", BC="Bonding & Compounds", RS="Reactions & Stoichiometry", SSO="States, Solutions & Organic";
  function assign(grades, items){
    var EN=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.en.q, options:it.en.o, answer:it.a}; });
    var AR=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.ar.q, options:it.ar.o, answer:it.a}; });
    grades.forEach(function(g){
      QUESTION_POOL[g]=QUESTION_POOL[g]||{}; QUESTION_POOL[g]["Chemistry"]=EN;
      QUESTION_BANK_AR[g]=QUESTION_BANK_AR[g]||{}; QUESTION_BANK_AR[g]["Chemistry"]=AR;
    });
  }

  /* ============ GRADE 9 chemistry (diagnoses a Grade 10 class) ============ */
  assign(["9A","9G"],[
   {s:MAS,l:"F",sub:"Atoms",a:0,en:{q:"Everything around us is made of tiny particles called:",o:["atoms","cells","organs","waves"]},ar:{q:"كل ما حولنا مكوّن من جسيمات دقيقة تُسمى:",o:["الذرات","الخلايا","الأعضاء","الأمواج"]}},
   {s:MAS,l:"F",sub:"Atomic structure",a:0,en:{q:"The centre of an atom is called the:",o:["nucleus","electron shell","membrane","orbit"]},ar:{q:"يُسمّى مركز الذرة:",o:["النواة","غلاف الإلكترونات","الغشاء","المدار"]}},
   {s:MAS,l:"F",sub:"Subatomic particles",a:0,en:{q:"Which particle has a positive charge?",o:["Proton","Electron","Neutron","Atom"]},ar:{q:"أيّ جسيم يحمل شحنة موجبة؟",o:["البروتون","الإلكترون","النيوترون","الذرة"]}},
   {s:MAS,l:"C",sub:"Atomic number",a:0,en:{q:"The atomic number of an element equals its number of:",o:["protons","neutrons","molecules","ions"]},ar:{q:"العدد الذري للعنصر يساوي عدد:",o:["البروتونات","النيوترونات","الجزيئات","الأيونات"]}},
   {s:MAS,l:"C",sub:"Neutral atom",a:0,en:{q:"In a neutral atom, the number of electrons equals the number of:",o:["protons","neutrons","nuclei","molecules"]},ar:{q:"في الذرة المتعادلة يساوي عدد الإلكترونات عدد:",o:["البروتونات","النيوترونات","الأنوية","الجزيئات"]}},
   {s:MAS,l:"H",sub:"Mass number",a:0,en:{q:"The mass number of an atom is the number of:",o:["protons plus neutrons","electrons only","protons only","neutrons only"]},ar:{q:"العدد الكتلي للذرة هو عدد:",o:["البروتونات مع النيوترونات","الإلكترونات فقط","البروتونات فقط","النيوترونات فقط"]}},
   {s:MAS,l:"C",sub:"Elements",a:0,en:{q:"A pure substance made of only one kind of atom is an:",o:["element","mixture","solution","alloy"]},ar:{q:"المادة النقية المكوّنة من نوع واحد فقط من الذرات هي:",o:["عنصر","خليط","محلول","سبيكة"]}},
   {s:MAS,l:"C",sub:"Compounds",a:0,en:{q:"Two or more elements chemically joined form a:",o:["compound","mixture","single element","atom"]},ar:{q:"عنصران أو أكثر مرتبطة كيميائيًا تكوّن:",o:["مركبًا","خليطًا","عنصرًا واحدًا","ذرة"]}},
   {s:MAS,l:"F",sub:"Periodic table",a:0,en:{q:"The periodic table arranges the:",o:["elements","planets","animals","rocks"]},ar:{q:"الجدول الدوري يرتّب:",o:["العناصر","الكواكب","الحيوانات","الصخور"]}},
   {s:RS,l:"F",sub:"Physical change",a:0,en:{q:"Which of these is a physical change?",o:["Melting ice","Burning wood","Rusting iron","Cooking an egg"]},ar:{q:"أيٌّ مما يلي تغيّر فيزيائي؟",o:["انصهار الثلج","احتراق الخشب","صدأ الحديد","طهي البيضة"]}},
   {s:RS,l:"C",sub:"Chemical change",a:0,en:{q:"Which of these is a chemical change?",o:["Burning wood","Melting ice","Cutting paper","Boiling water"]},ar:{q:"أيٌّ مما يلي تغيّر كيميائي؟",o:["احتراق الخشب","انصهار الثلج","قص الورق","غليان الماء"]}},
   {s:RS,l:"F",sub:"Separating mixtures",a:0,en:{q:"Salt can be separated from salty water by:",o:["evaporating the water","burning it","using a magnet","freezing it forever"]},ar:{q:"يمكن فصل الملح عن الماء المالح عن طريق:",o:["تبخير الماء","حرقه","استخدام مغناطيس","تجميده للأبد"]}},
   {s:SSO,l:"F",sub:"States of matter",a:0,en:{q:"In which state are the particles far apart and moving freely?",o:["Gas","Solid","Liquid","Crystal"]},ar:{q:"في أيّ حالة تكون الجسيمات متباعدة وتتحرك بحرية؟",o:["الغازية","الصلبة","السائلة","البلورية"]}},
   {s:SSO,l:"C",sub:"Changes of state",a:0,en:{q:"When a gas is cooled enough, it will:",o:["condense into a liquid","turn into an element","vanish","become a metal"]},ar:{q:"عند تبريد الغاز بدرجة كافية فإنه:",o:["يتكاثف إلى سائل","يتحول إلى عنصر","يختفي","يصبح فلزًا"]}},
   {s:SSO,l:"C",sub:"Changes of state",a:0,en:{q:"Heating a solid enough makes it:",o:["melt into a liquid","freeze","turn into a new element","disappear"]},ar:{q:"تسخين المادة الصلبة بدرجة كافية يجعلها:",o:["تنصهر إلى سائل","تتجمد","تتحول إلى عنصر جديد","تختفي"]}},
   {s:SSO,l:"H",sub:"Particle model",a:0,en:{q:"According to the particle model, heating a gas makes its particles:",o:["move faster","stop moving","disappear","get heavier"]},ar:{q:"وفق نموذج الجسيمات، تسخين الغاز يجعل جسيماته:",o:["تتحرك أسرع","تتوقف عن الحركة","تختفي","تصبح أثقل"]}},
   {s:MAS,l:"C",sub:"Electrons",a:0,en:{q:"Electrons move in the space ___ the nucleus.",o:["around","inside","below the atom","outside the universe"]},ar:{q:"تتحرك الإلكترونات في الفراغ ___ النواة.",o:["حول","داخل","أسفل الذرة","خارج الكون"]}},
   {s:RS,l:"F",sub:"Physical change",a:0,en:{q:"A change of state such as melting is a ___ change.",o:["physical","chemical","nuclear","biological"]},ar:{q:"تغيّر الحالة مثل الانصهار هو تغيّر ___.",o:["فيزيائي","كيميائي","نووي","حيوي"]}},
   {s:SSO,l:"F",sub:"States of matter",a:0,en:{q:"Which state keeps a fixed shape and a fixed volume?",o:["Solid","Liquid","Gas","Vapour"]},ar:{q:"أيّ حالة تحتفظ بشكل ثابت وحجم ثابت؟",o:["الصلبة","السائلة","الغازية","البخار"]}},
   {s:MAS,l:"F",sub:"Mixtures",a:0,en:{q:"Which of these is a mixture?",o:["Sea water","Pure gold","Oxygen gas","Pure water"]},ar:{q:"أيٌّ مما يلي خليط؟",o:["ماء البحر","الذهب النقي","غاز الأكسجين","الماء النقي"]}}
  ]);

  /* ============ GRADE 10 chemistry (diagnoses a Grade 11 class) ============ */
  assign(["10A","10G"],[
   {s:MAS,l:"F",sub:"Electron arrangement",a:0,en:{q:"Electrons are arranged around the nucleus in:",o:["energy levels (shells)","the nucleus","protons","neutrons"]},ar:{q:"تترتّب الإلكترونات حول النواة في:",o:["مستويات طاقة (أغلفة)","النواة","البروتونات","النيوترونات"]}},
   {s:MAS,l:"C",sub:"Periodic law",a:0,en:{q:"Elements in the same group of the periodic table have similar:",o:["chemical properties","masses exactly","colours","temperatures"]},ar:{q:"العناصر في المجموعة نفسها من الجدول الدوري لها خصائص:",o:["كيميائية متشابهة","كتل متساوية تمامًا","ألوان متطابقة","درجات حرارة متطابقة"]}},
   {s:MAS,l:"H",sub:"Periodic trends",a:0,en:{q:"Across a period (left to right), the atomic size generally:",o:["decreases","doubles","stays the same","becomes zero"]},ar:{q:"عبر الدورة (من اليسار إلى اليمين) يتغيّر الحجم الذري عمومًا فـ:",o:["يقل","يتضاعف","يبقى ثابتًا","يصبح صفرًا"]}},
   {s:MAS,l:"F",sub:"Atoms",a:0,en:{q:"The smallest particle of an element that keeps its properties is an:",o:["atom","cell","brick","drop"]},ar:{q:"أصغر جسيم من العنصر يحتفظ بخصائصه هو:",o:["الذرة","الخلية","الطوبة","القطرة"]}},
   {s:BC,l:"C",sub:"Ionic bonding",a:0,en:{q:"An ionic bond forms when a metal ___ electrons to a non-metal.",o:["transfers","shares","hides","buys"]},ar:{q:"تتكوّن الرابطة الأيونية عندما ___ الفلزُّ إلكتروناته إلى اللافلز.",o:["ينقل","يشارك","يخفي","يشتري"]}},
   {s:BC,l:"C",sub:"Covalent bonding",a:0,en:{q:"A covalent bond forms when two non-metals ___ electrons.",o:["share","transfer","destroy","weigh"]},ar:{q:"تتكوّن الرابطة التساهمية عندما ___ لافلزّان الإلكترونات.",o:["يتشارك","ينقل","يدمّر","يزن"]}},
   {s:BC,l:"F",sub:"Ionic compounds",a:0,en:{q:"Table salt (NaCl) is held together by:",o:["ionic bonds","covalent bonds only","no bonds","magnets"]},ar:{q:"ملح الطعام (NaCl) تربط أجزاءه:",o:["روابط أيونية","روابط تساهمية فقط","بلا روابط","مغناطيسات"]}},
   {s:BC,l:"C",sub:"Covalent compounds",a:0,en:{q:"Water (H₂O) contains which type of bond?",o:["covalent","ionic","metallic","none"]},ar:{q:"يحتوي الماء (H₂O) على أيّ نوع من الروابط؟",o:["تساهمية","أيونية","فلزية","لا شيء"]}},
   {s:RS,l:"C",sub:"Balancing equations",a:0,en:{q:"In a balanced chemical equation, the number of atoms is:",o:["equal on both sides","greater on the left","greater on the right","always zero"]},ar:{q:"في المعادلة الكيميائية الموزونة يكون عدد الذرات:",o:["متساويًا على الطرفين","أكبر في اليسار","أكبر في اليمين","صفرًا دائمًا"]}},
   {s:RS,l:"H",sub:"Balancing equations",a:0,en:{q:"Balance the equation: 2H₂ + O₂ → ___ H₂O",o:["2","1","3","4"]},ar:{q:"وازن المعادلة: 2H₂ + O₂ → ___ H₂O",o:["2","1","3","4"]}},
   {s:RS,l:"C",sub:"The mole",a:0,en:{q:"Chemists use the mole to:",o:["count particles","measure temperature","measure length","measure sound"]},ar:{q:"يستخدم الكيميائيون المول من أجل:",o:["عدّ الجسيمات","قياس الحرارة","قياس الطول","قياس الصوت"]}},
   {s:RS,l:"C",sub:"Reactions",a:0,en:{q:"In the reaction A + B → C, A and B are the:",o:["reactants","products","catalysts","solvents"]},ar:{q:"في التفاعل A + B → C، فإن A و B هما:",o:["المتفاعلات","النواتج","العوامل المحفّزة","المذيبات"]}},
   {s:RS,l:"F",sub:"Energy in reactions",a:0,en:{q:"A reaction that gives out heat to the surroundings is:",o:["exothermic","endothermic","neutral","frozen"]},ar:{q:"التفاعل الذي يطلق حرارة إلى المحيط هو:",o:["طارد للحرارة","ماص للحرارة","متعادل","متجمد"]}},
   {s:SSO,l:"C",sub:"Solutions",a:0,en:{q:"In salty water, the water is the:",o:["solvent","solute","precipitate","gas"]},ar:{q:"في الماء المالح، الماء هو:",o:["المذيب","المذاب","الراسب","الغاز"]}},
   {s:SSO,l:"C",sub:"Solutions",a:0,en:{q:"A solution is a mixture that is:",o:["the same throughout (homogeneous)","lumpy","always solid","always a gas"]},ar:{q:"المحلول خليط يكون:",o:["متجانسًا في كل أجزائه","متكتّلًا","صلبًا دائمًا","غازًا دائمًا"]}},
   {s:SSO,l:"H",sub:"Solubility",a:0,en:{q:"Raising the temperature usually makes a solid solute dissolve:",o:["faster","slower","never","only once"]},ar:{q:"رفع درجة الحرارة عادةً يجعل المذاب الصلب يذوب:",o:["أسرع","أبطأ","لا يذوب أبدًا","مرة واحدة فقط"]}},
   {s:MAS,l:"C",sub:"Periodic table",a:0,en:{q:"A horizontal row across the periodic table is called a:",o:["period","group","molecule","bond"]},ar:{q:"الصف الأفقي في الجدول الدوري يُسمى:",o:["دورة","مجموعة","جزيء","رابطة"]}},
   {s:BC,l:"H",sub:"Ion charge",a:0,en:{q:"When a sodium atom loses one electron it becomes an ion with a charge of:",o:["+1","−1","0","+2"]},ar:{q:"عندما تفقد ذرة الصوديوم إلكترونًا واحدًا تصبح أيونًا شحنته:",o:["+1","−1","0","+2"]}},
   {s:RS,l:"C",sub:"Conservation of mass",a:0,en:{q:"The law of conservation of mass says that in a reaction mass is:",o:["neither created nor destroyed","always lost","always gained","turned into light"]},ar:{q:"ينص قانون حفظ الكتلة على أن الكتلة في التفاعل:",o:["لا تُستحدث ولا تفنى","تُفقد دائمًا","تزداد دائمًا","تتحول إلى ضوء"]}},
   {s:SSO,l:"C",sub:"Solubility",a:0,en:{q:"Which of these speeds up dissolving sugar in water?",o:["Stirring","Cooling the water","Using larger crystals","Adding oil"]},ar:{q:"أيٌّ مما يلي يسرّع ذوبان السكر في الماء؟",o:["التحريك","تبريد الماء","استخدام بلورات أكبر","إضافة الزيت"]}}
  ]);

  /* ============ GRADE 11 chemistry (diagnoses a Grade 12 class) ============ */
  assign(["11A","11G"],[
   {s:RS,l:"C",sub:"Thermochemistry",a:0,en:{q:"A reaction that releases heat to the surroundings is called:",o:["exothermic","endothermic","neutral","reversible only"]},ar:{q:"التفاعل الذي يطلق حرارة إلى المحيط يُسمى:",o:["طاردًا للحرارة","ماصًا للحرارة","متعادلًا","انعكاسيًا فقط"]}},
   {s:RS,l:"C",sub:"Reaction rates",a:0,en:{q:"Which change usually increases the rate of a reaction?",o:["Raising the temperature","Lowering the temperature","Using larger lumps","Reducing concentration"]},ar:{q:"أيّ تغيير يزيد عادةً من سرعة التفاعل؟",o:["رفع درجة الحرارة","خفض درجة الحرارة","استخدام قطع أكبر","تقليل التركيز"]}},
   {s:RS,l:"H",sub:"Catalysts",a:0,en:{q:"A catalyst speeds up a reaction by:",o:["lowering the activation energy","being used up","raising the temperature only","adding mass"]},ar:{q:"يُسرّع العامل المحفّز التفاعل عن طريق:",o:["خفض طاقة التنشيط","استهلاكه في التفاعل","رفع درجة الحرارة فقط","إضافة كتلة"]}},
   {s:RS,l:"C",sub:"Equilibrium",a:0,en:{q:"At equilibrium, the rates of the forward and reverse reactions are:",o:["equal","zero","always rising","unknown"]},ar:{q:"عند الاتزان تكون سرعتا التفاعل الأمامي والعكسي:",o:["متساويتين","صفرًا","في ازدياد دائم","غير معروفتين"]}},
   {s:RS,l:"H",sub:"Le Chatelier",a:0,en:{q:"Adding more reactant to a system at equilibrium shifts it toward the:",o:["products","reactants","solid only","gas only"]},ar:{q:"إضافة المزيد من المتفاعل إلى نظام متزن يزيح الاتزان نحو:",o:["النواتج","المتفاعلات","الصلب فقط","الغاز فقط"]}},
   {s:RS,l:"C",sub:"Acids",a:0,en:{q:"An acid produces which ion in water?",o:["Hydrogen ion (H⁺)","Only hydroxide","A metal ion","Oxygen gas"]},ar:{q:"ينتج الحمض في الماء أيّ أيون؟",o:["أيون الهيدروجين (H⁺)","الهيدروكسيد فقط","أيون فلز","غاز الأكسجين"]}},
   {s:RS,l:"C",sub:"Bases",a:0,en:{q:"A base (alkali) produces which ion in water?",o:["Hydroxide ion (OH⁻)","Hydrogen ion","Carbon ion","Sodium metal"]},ar:{q:"تنتج القاعدة (القلوي) في الماء أيّ أيون؟",o:["أيون الهيدروكسيد (OH⁻)","أيون الهيدروجين","أيون الكربون","فلز الصوديوم"]}},
   {s:RS,l:"F",sub:"pH scale",a:0,en:{q:"A neutral solution has a pH of about:",o:["7","1","14","0"]},ar:{q:"المحلول المتعادل رقمه الهيدروجيني (pH) حوالي:",o:["7","1","14","0"]}},
   {s:RS,l:"C",sub:"pH scale",a:0,en:{q:"A solution with a pH of 2 is:",o:["strongly acidic","strongly basic","neutral","salty only"]},ar:{q:"المحلول الذي رقمه الهيدروجيني 2 يكون:",o:["حمضيًا قويًا","قاعديًا قويًا","متعادلًا","مالحًا فقط"]}},
   {s:RS,l:"C",sub:"Neutralization",a:0,en:{q:"When an acid reacts with a base, it forms a salt and:",o:["water","oxygen","only hydrogen gas","a metal"]},ar:{q:"عند تفاعل حمض مع قاعدة ينتج ملح و:",o:["ماء","أكسجين","غاز هيدروجين فقط","فلز"]}},
   {s:RS,l:"C",sub:"Redox",a:0,en:{q:"Oxidation is defined as the ___ of electrons.",o:["loss","gain","sharing","weighing"]},ar:{q:"تُعرّف الأكسدة بأنها ___ الإلكترونات.",o:["فقد","اكتساب","مشاركة","وزن"]}},
   {s:RS,l:"H",sub:"Redox",a:0,en:{q:"In a redox reaction, the substance that loses electrons is:",o:["oxidised","reduced","neutral","a catalyst"]},ar:{q:"في تفاعل الأكسدة والاختزال، المادة التي تفقد الإلكترونات تكون قد:",o:["تأكسدت","اختُزلت","بقيت متعادلة","صارت محفّزًا"]}},
   {s:MAS,l:"C",sub:"Periodic table",a:0,en:{q:"Elements in the modern periodic table are arranged by increasing:",o:["atomic number","colour","price","weight in grams"]},ar:{q:"تُرتَّب عناصر الجدول الدوري الحديث حسب تزايد:",o:["العدد الذري","اللون","السعر","الوزن بالغرامات"]}},
   {s:BC,l:"C",sub:"Covalent bonds",a:0,en:{q:"A double covalent bond shares how many pairs of electrons?",o:["Two","One","Three","Zero"]},ar:{q:"الرابطة التساهمية الثنائية تتشارك كم زوجًا من الإلكترونات؟",o:["زوجين","زوجًا واحدًا","ثلاثة أزواج","لا شيء"]}},
   {s:SSO,l:"C",sub:"Organic chemistry",a:0,en:{q:"Compounds made mainly of carbon and hydrogen are called:",o:["hydrocarbons","metals","salts","acids"]},ar:{q:"المركبات المكوّنة أساسًا من الكربون والهيدروجين تُسمى:",o:["الهيدروكربونات","الفلزات","الأملاح","الأحماض"]}},
   {s:SSO,l:"C",sub:"Organic chemistry",a:0,en:{q:"Methane (CH₄) is the simplest:",o:["alkane","alkene","alcohol","acid"]},ar:{q:"الميثان (CH₄) هو أبسط:",o:["ألكان","ألكين","كحول","حمض"]}},
   {s:RS,l:"C",sub:"Thermochemistry",a:0,en:{q:"In an endothermic reaction, energy is:",o:["absorbed from the surroundings","released as heat","destroyed","created"]},ar:{q:"في التفاعل الماص للحرارة، تكون الطاقة:",o:["ممتصّة من المحيط","منطلقة كحرارة","مُدمَّرة","مُستحدَثة"]}},
   {s:RS,l:"C",sub:"Reaction rates",a:0,en:{q:"Increasing the concentration of the reactants usually makes the rate:",o:["increase","decrease","stop","reverse"]},ar:{q:"زيادة تركيز المتفاعلات عادةً تجعل سرعة التفاعل:",o:["تزداد","تقل","تتوقف","تنعكس"]}},
   {s:SSO,l:"C",sub:"Hydrocarbons",a:0,en:{q:"Alkanes contain only ___ bonds between their carbon atoms.",o:["single","double","triple","ionic"]},ar:{q:"تحتوي الألكانات على روابط ___ فقط بين ذرات الكربون.",o:["أحادية","ثنائية","ثلاثية","أيونية"]}},
   {s:RS,l:"F",sub:"Acids and bases",a:0,en:{q:"Blue litmus paper turns red in a(n):",o:["acid","base","neutral solution","salt solution"]},ar:{q:"يتحوّل ورق تباع الشمس الأزرق إلى الأحمر في:",o:["حمض","قاعدة","محلول متعادل","محلول ملحي"]}}
  ]);
})();

/* ================= EXPANSION PACK (adds ~12 more bilingual questions per grade set) =================
   Appended so each Chemistry pool holds ~32 questions; the diagnostic picks 20 for real variety. */
(function(){
  var MAS="Matter & Atomic Structure", BC="Bonding & Compounds", RS="Reactions & Stoichiometry", SSO="States, Solutions & Organic";
  function addC(grades, items){
    var EN=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.en.q, options:it.en.o, answer:it.a}; });
    var AR=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.ar.q, options:it.ar.o, answer:it.a}; });
    grades.forEach(function(g){
      QUESTION_POOL[g]=QUESTION_POOL[g]||{}; QUESTION_POOL[g]["Chemistry"]=(QUESTION_POOL[g]["Chemistry"]||[]).concat(EN);
      QUESTION_BANK_AR[g]=QUESTION_BANK_AR[g]||{}; QUESTION_BANK_AR[g]["Chemistry"]=(QUESTION_BANK_AR[g]["Chemistry"]||[]).concat(AR);
    });
  }

  /* ---------- GRADE 9 chemistry (diagnoses a Grade 10 class) ---------- */
  addC(["9A","9G"],[
   {s:MAS,l:"F",sub:"Subatomic particles",a:0,en:{q:"Which particle has no electric charge?",o:["Neutron","Proton","Electron","Ion"]},ar:{q:"أيّ جسيم ليس له شحنة كهربائية؟",o:["النيوترون","البروتون","الإلكترون","الأيون"]}},
   {s:MAS,l:"C",sub:"Periodic table",a:0,en:{q:"The vertical columns of the periodic table are called:",o:["groups","periods","shells","bonds"]},ar:{q:"الأعمدة الرأسية في الجدول الدوري تُسمى:",o:["مجموعات","دورات","أغلفة","روابط"]}},
   {s:MAS,l:"C",sub:"Periodic table",a:0,en:{q:"Elements on the left side of the periodic table are mostly:",o:["metals","nonmetals","noble gases","liquids"]},ar:{q:"العناصر في الجانب الأيسر من الجدول الدوري معظمها:",o:["فلزات","لافلزات","غازات نبيلة","سوائل"]}},
   {s:MAS,l:"H",sub:"Isotopes",a:0,en:{q:"Isotopes of an element have the same number of protons but different numbers of:",o:["neutrons","electrons","atoms","molecules"]},ar:{q:"نظائر العنصر لها العدد نفسه من البروتونات لكن أعداد مختلفة من:",o:["النيوترونات","الإلكترونات","الذرات","الجزيئات"]}},
   {s:BC,l:"F",sub:"Compounds",a:0,en:{q:"Water (H₂O) is an example of a:",o:["compound","element","metal","mixture"]},ar:{q:"الماء (H₂O) مثال على:",o:["مركّب","عنصر","فلز","خليط"]}},
   {s:BC,l:"C",sub:"Ions",a:0,en:{q:"An atom that has lost an electron becomes a:",o:["positive ion","negative ion","neutron","molecule"]},ar:{q:"الذرة التي تفقد إلكترونًا تصبح:",o:["أيونًا موجبًا","أيونًا سالبًا","نيوترونًا","جزيئًا"]}},
   {s:RS,l:"F",sub:"Physical vs chemical change",a:0,en:{q:"Which is a chemical change?",o:["Iron rusting","Ice melting","Salt dissolving","Cutting paper"]},ar:{q:"أيٌّ تغيّر كيميائي؟",o:["صدأ الحديد","انصهار الثلج","ذوبان الملح","قص الورق"]}},
   {s:RS,l:"C",sub:"Chemical reactions",a:0,en:{q:"In a chemical reaction, the starting substances are called the:",o:["reactants","products","catalysts","mixtures"]},ar:{q:"في التفاعل الكيميائي، المواد الابتدائية تُسمى:",o:["المتفاعلات","النواتج","العوامل الحفازة","المخاليط"]}},
   {s:RS,l:"H",sub:"Conservation of mass",a:0,en:{q:"In a closed chemical reaction, the total mass of the products equals the total mass of the:",o:["reactants","water","air","container"]},ar:{q:"في تفاعل كيميائي مغلق، تساوي الكتلة الكلية للنواتج الكتلة الكلية لـ:",o:["المتفاعلات","الماء","الهواء","الوعاء"]}},
   {s:SSO,l:"F",sub:"States of matter",a:0,en:{q:"Which state of matter has a fixed volume but takes the shape of its container?",o:["Liquid","Solid","Gas","Plasma"]},ar:{q:"أيّ حالة للمادة لها حجم ثابت لكنها تأخذ شكل الوعاء؟",o:["السائل","الصلب","الغاز","البلازما"]}},
   {s:SSO,l:"C",sub:"Solutions",a:0,en:{q:"In a solution of sugar in water, water is the:",o:["solvent","solute","precipitate","gas"]},ar:{q:"في محلول السكر في الماء، الماء هو:",o:["المذيب","المُذاب","الراسب","الغاز"]}},
   {s:SSO,l:"C",sub:"Mixtures",a:0,en:{q:"A mixture that looks the same throughout is called:",o:["homogeneous","heterogeneous","an element","a compound"]},ar:{q:"الخليط الذي يبدو متجانسًا في كل أجزائه يُسمى:",o:["متجانسًا","غير متجانس","عنصرًا","مركّبًا"]}}
  ]);

  /* ---------- GRADE 10 chemistry (diagnoses a Grade 11 class) ---------- */
  addC(["10A","10G"],[
   {s:MAS,l:"C",sub:"Electron configuration",a:0,en:{q:"The maximum number of electrons in the first energy level (shell) is:",o:["2","8","18","1"]},ar:{q:"أقصى عدد للإلكترونات في مستوى الطاقة الأول (الغلاف) هو:",o:["2","8","18","1"]}},
   {s:MAS,l:"H",sub:"Periodic trends",a:0,en:{q:"Moving left to right across a period, atomic radius generally:",o:["decreases","increases","stays the same","doubles"]},ar:{q:"عند الانتقال من اليسار إلى اليمين عبر الدورة، نصف القطر الذري عمومًا:",o:["يقل","يزداد","يبقى ثابتًا","يتضاعف"]}},
   {s:MAS,l:"C",sub:"Valence electrons",a:0,en:{q:"The electrons in the outermost shell of an atom are called:",o:["valence electrons","core electrons","protons","neutrons"]},ar:{q:"الإلكترونات في الغلاف الخارجي للذرة تُسمى:",o:["إلكترونات التكافؤ","الإلكترونات الداخلية","البروتونات","النيوترونات"]}},
   {s:BC,l:"C",sub:"Ionic bonding",a:0,en:{q:"An ionic bond usually forms between a metal and a:",o:["nonmetal","noble gas","different metal","liquid"]},ar:{q:"تتكوّن الرابطة الأيونية عادةً بين فلز و:",o:["لافلز","غاز نبيل","فلز آخر","سائل"]}},
   {s:BC,l:"H",sub:"Molecular shapes",a:0,en:{q:"The shape of a molecule is determined mainly by the arrangement of its:",o:["electron pairs","neutrons","protons","isotopes"]},ar:{q:"يتحدد شكل الجزيء أساسًا بترتيب:",o:["أزواج الإلكترونات","النيوترونات","البروتونات","النظائر"]}},
   {s:BC,l:"C",sub:"Naming compounds",a:0,en:{q:"The compound NaCl is named:",o:["sodium chloride","sodium chlorine","salt oxide","chlorine sodide"]},ar:{q:"المركّب NaCl يُسمّى:",o:["كلوريد الصوديوم","صوديوم كلورين","أكسيد الملح","صوديد الكلور"]}},
   {s:RS,l:"C",sub:"Balancing equations",a:0,en:{q:"Balancing a chemical equation makes the number of each atom equal on:",o:["both sides","the left only","the right only","neither side"]},ar:{q:"موازنة المعادلة الكيميائية تجعل عدد كل ذرة متساويًا على:",o:["الطرفين","اليسار فقط","اليمين فقط","لا طرف"]}},
   {s:RS,l:"H",sub:"The mole",a:0,en:{q:"One mole of any substance contains about 6.02 × 10²³:",o:["particles","grams","litres","atoms of carbon only"]},ar:{q:"مول واحد من أيّ مادة يحتوي على نحو 6.02 × 10²³:",o:["جسيمًا","غرامًا","لترًا","ذرة كربون فقط"]}},
   {s:RS,l:"C",sub:"Types of reactions",a:0,en:{q:"A reaction in which a compound breaks into simpler substances is:",o:["decomposition","synthesis","neutralization","filtration"]},ar:{q:"التفاعل الذي يتفكك فيه مركّب إلى مواد أبسط هو:",o:["تفكك","اتحاد (بناء)","تعادل","ترشيح"]}},
   {s:SSO,l:"C",sub:"Gas laws",a:0,en:{q:"At constant temperature, increasing the pressure on a gas will ___ its volume.",o:["decrease","increase","not change","double"]},ar:{q:"عند ثبوت درجة الحرارة، زيادة الضغط على غاز ___ حجمه.",o:["تقلّل","تزيد","لا تغيّر","تضاعف"]}},
   {s:SSO,l:"F",sub:"Phase changes",a:0,en:{q:"The change from a liquid directly to a gas is called:",o:["evaporation","condensation","freezing","melting"]},ar:{q:"التحوّل من السائل مباشرة إلى غاز يُسمى:",o:["التبخّر","التكاثف","التجمّد","الانصهار"]}},
   {s:SSO,l:"H",sub:"Concentration",a:0,en:{q:"Molarity is defined as moles of solute per:",o:["litre of solution","gram of solvent","kilogram of solute","mole of gas"]},ar:{q:"المولارية تُعرّف بأنها عدد مولات المُذاب لكل:",o:["لتر من المحلول","غرام من المذيب","كيلوغرام من المُذاب","مول من الغاز"]}}
  ]);

  /* ---------- GRADE 11 chemistry (diagnoses a Grade 12 class) ---------- */
  addC(["11A","11G"],[
   {s:RS,l:"C",sub:"Thermochemistry",a:0,en:{q:"A reaction that releases heat to the surroundings is described as:",o:["exothermic","endothermic","neutral","reversible only"]},ar:{q:"التفاعل الذي يطلق حرارة إلى المحيط يوصف بأنه:",o:["طارد للحرارة","ماص للحرارة","متعادل","انعكاسي فقط"]}},
   {s:RS,l:"H",sub:"Enthalpy",a:0,en:{q:"The heat change of a reaction at constant pressure is called the change in:",o:["enthalpy","volume","mass","colour"]},ar:{q:"التغيّر الحراري للتفاعل عند ثبوت الضغط يُسمى التغيّر في:",o:["المحتوى الحراري (الإنثالبي)","الحجم","الكتلة","اللون"]}},
   {s:RS,l:"C",sub:"Reaction rates",a:0,en:{q:"A substance that speeds up a reaction without being used up is a:",o:["catalyst","reactant","product","solvent"]},ar:{q:"المادة التي تسرّع التفاعل دون أن تُستهلك هي:",o:["عامل حفّاز","متفاعل","ناتج","مذيب"]}},
   {s:RS,l:"C",sub:"Reaction rates",a:0,en:{q:"Raising the temperature usually makes a reaction rate:",o:["increase","decrease","stop","reverse"]},ar:{q:"رفع درجة الحرارة عادةً يجعل سرعة التفاعل:",o:["تزداد","تقل","تتوقف","تنعكس"]}},
   {s:RS,l:"H",sub:"Equilibrium",a:0,en:{q:"At chemical equilibrium, the rates of the forward and reverse reactions are:",o:["equal","zero","always increasing","unrelated"]},ar:{q:"عند الاتزان الكيميائي، تكون سرعتا التفاعل الأمامي والعكسي:",o:["متساويتين","صفرًا","في ازدياد دائم","غير مرتبطتين"]}},
   {s:RS,l:"F",sub:"Acids and bases",a:0,en:{q:"Which of these everyday substances is an acid?",o:["Lemon juice","Soap","Baking soda","Table salt"]},ar:{q:"أيٌّ من هذه المواد اليومية حمض؟",o:["عصير الليمون","الصابون","صودا الخبز","ملح الطعام"]}},
   {s:RS,l:"C",sub:"Acids and bases",a:0,en:{q:"An acid is a substance that produces which ion in water?",o:["Hydrogen ion (H⁺)","Hydroxide ion (OH⁻)","Sodium ion","Chloride ion"]},ar:{q:"الحمض مادة تنتج أيّ أيون في الماء؟",o:["أيون الهيدروجين (H⁺)","أيون الهيدروكسيد (OH⁻)","أيون الصوديوم","أيون الكلوريد"]}},
   {s:RS,l:"C",sub:"pH",a:0,en:{q:"A solution with a pH of 10 is:",o:["basic","acidic","neutral","a pure metal"]},ar:{q:"محلول رقمه الهيدروجيني (pH) يساوي 10 يكون:",o:["قاعديًا","حمضيًا","متعادلًا","فلزًا نقيًا"]}},
   {s:RS,l:"H",sub:"Neutralization",a:0,en:{q:"An acid reacting with a base produces water and a:",o:["salt","metal","gas only","fuel"]},ar:{q:"تفاعل الحمض مع القاعدة ينتج الماء و:",o:["ملحًا","فلزًا","غازًا فقط","وقودًا"]}},
   {s:MAS,l:"C",sub:"Electron configuration",a:0,en:{q:"Which element has the electron arrangement 2,8,1?",o:["Sodium","Neon","Helium","Chlorine"]},ar:{q:"أيّ عنصر له التوزيع الإلكتروني 2،8،1؟",o:["الصوديوم","النيون","الهيليوم","الكلور"]}},
   {s:BC,l:"C",sub:"Bond polarity",a:0,en:{q:"A bond in which electrons are shared unequally is:",o:["polar covalent","pure ionic","metallic","nonpolar always"]},ar:{q:"الرابطة التي تُشارَك فيها الإلكترونات بشكل غير متساوٍ هي:",o:["تساهمية قطبية","أيونية بحتة","فلزية","غير قطبية دائمًا"]}},
   {s:SSO,l:"C",sub:"Organic chemistry",a:0,en:{q:"A hydrocarbon with a carbon–carbon double bond is an:",o:["alkene","alkane","alcohol","acid"]},ar:{q:"الهيدروكربون الذي يحتوي على رابطة مزدوجة بين ذرتي كربون هو:",o:["ألكين","ألكان","كحول","حمض"]}}
  ]);
})();
