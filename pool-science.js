/* Adeptly — Science diagnostic question banks (lower grades), BILINGUAL.
   A Science class is diagnosed on the PREVIOUS grade's content, so pools are keyed by the grade
   being TESTED: a Grade 4 class tests grade "3", ... a Grade 9 class tests grade "8".

   Each question is authored ONCE (with English + Arabic text) and split into:
     • QUESTION_POOL[grade]["Science"]      -> English pool (assembled Foundational/Core/Challenge)
     • QUESTION_BANK_AR[grade]["Science"]   -> Arabic bank (used when the class language is Arabic)
   Skills: "Life Science", "Physical Science", "Earth & Space Science", "Scientific Inquiry & Technology".
   Aligned to the embedded MOE Science scope & sequence. Load AFTER the app's globals. */
if (typeof QUESTION_POOL === "undefined") { var QUESTION_POOL = {}; }
if (typeof QUESTION_BANK_AR === "undefined") { var QUESTION_BANK_AR = {}; }
(function(){
  var LIFE="Life Science", PHYS="Physical Science", EARTH="Earth & Space Science", INQ="Scientific Inquiry & Technology";
  function build(grade, items){
    var EN=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.en.q, options:it.en.o, answer:it.a}; });
    var AR=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.ar.q, options:it.ar.o, answer:it.a}; });
    QUESTION_POOL[grade]=QUESTION_POOL[grade]||{}; QUESTION_POOL[grade]["Science"]=EN;
    QUESTION_BANK_AR[grade]=QUESTION_BANK_AR[grade]||{}; QUESTION_BANK_AR[grade]["Science"]=AR;
  }

  /* ================= GRADE 3 ================= */
  build("3",[
   {s:LIFE,l:"F",sub:"Living things",a:0,en:{q:"Which of these is a living thing?",o:["A tree","A rock","A chair","A car"]},ar:{q:"أيٌّ مما يلي كائن حي؟",o:["شجرة","صخرة","كرسي","سيارة"]}},
   {s:LIFE,l:"F",sub:"Needs of living things",a:0,en:{q:"Living things need ___ to stay alive.",o:["food and water","toys","cars","money"]},ar:{q:"تحتاج الكائنات الحية إلى ___ لتبقى حية.",o:["الغذاء والماء","الألعاب","السيارات","المال"]}},
   {s:LIFE,l:"C",sub:"Life cycles",a:0,en:{q:"A butterfly's life cycle begins with an:",o:["egg","adult","bird","flower"]},ar:{q:"تبدأ دورة حياة الفراشة بـ:",o:["بيضة","حشرة بالغة","طائر","زهرة"]}},
   {s:LIFE,l:"C",sub:"Food chains",a:0,en:{q:"In a food chain, which usually comes first?",o:["A plant","A lion","A snake","An eagle"]},ar:{q:"في السلسلة الغذائية، أيٌّ يأتي عادةً في البداية؟",o:["نبات","أسد","أفعى","نسر"]}},
   {s:LIFE,l:"H",sub:"Classifying animals",a:0,en:{q:"Which animal is a mammal?",o:["A dog","A fish","A frog","A snake"]},ar:{q:"أيُّ حيوان من الثدييات؟",o:["الكلب","السمكة","الضفدع","الأفعى"]}},
   {s:PHYS,l:"F",sub:"States of matter",a:0,en:{q:"Which one is a solid?",o:["A rock","Water","Juice","Air"]},ar:{q:"أيٌّ مما يلي مادة صلبة؟",o:["صخرة","ماء","عصير","هواء"]}},
   {s:PHYS,l:"F",sub:"Changes of state",a:0,en:{q:"When water freezes, it turns into:",o:["ice","steam","gas","salt"]},ar:{q:"عندما يتجمد الماء يتحول إلى:",o:["ثلج","بخار","غاز","ملح"]}},
   {s:PHYS,l:"C",sub:"Changes of state",a:0,en:{q:"Heating ice will change it into:",o:["water","rock","sand","wood"]},ar:{q:"تسخين الثلج يحوّله إلى:",o:["ماء","صخر","رمل","خشب"]}},
   {s:PHYS,l:"F",sub:"Forces",a:0,en:{q:"A push or a pull is a:",o:["force","colour","sound","smell"]},ar:{q:"الدفع أو السحب هو:",o:["قوة","لون","صوت","رائحة"]}},
   {s:PHYS,l:"C",sub:"Simple machines",a:0,en:{q:"A ramp makes it easier to:",o:["move heavy things up","make sound","cool water","give light"]},ar:{q:"المستوى المائل (المنحدر) يسهّل:",o:["رفع الأشياء الثقيلة للأعلى","إصدار الصوت","تبريد الماء","إعطاء الضوء"]}},
   {s:PHYS,l:"F",sub:"Energy",a:0,en:{q:"Which gives us light and heat?",o:["The Sun","A rock","A book","A chair"]},ar:{q:"أيٌّ يعطينا الضوء والحرارة؟",o:["الشمس","الصخرة","الكتاب","الكرسي"]}},
   {s:EARTH,l:"F",sub:"Weather",a:0,en:{q:"Rain, sun and wind together are called:",o:["weather","soil","rock","plant"]},ar:{q:"المطر والشمس والرياح معًا تُسمى:",o:["الطقس","التربة","الصخر","النبات"]}},
   {s:EARTH,l:"C",sub:"Water cycle",a:0,en:{q:"In the water cycle, the Sun makes water:",o:["rise into the air as vapour","turn into rock","disappear forever","become soil"]},ar:{q:"في دورة الماء، تجعل الشمسُ الماءَ:",o:["يتصاعد في الهواء على شكل بخار","يتحول إلى صخر","يختفي للأبد","يصبح تربة"]}},
   {s:EARTH,l:"C",sub:"Changes to Earth",a:0,en:{q:"What slowly shapes the land over a long time?",o:["Wind and water","A book","A lamp","A chair"]},ar:{q:"ما الذي يشكّل اليابسة ببطء عبر زمن طويل؟",o:["الرياح والماء","الكتاب","المصباح","الكرسي"]}},
   {s:INQ,l:"F",sub:"Scientific method",a:0,en:{q:"To answer a question, a scientist first makes a:",o:["hypothesis (a smart guess)","cake","car","painting"]},ar:{q:"للإجابة عن سؤال، يضع العالِم أولًا:",o:["فرضية (تخمينًا ذكيًا)","كعكة","سيارة","لوحة"]}},
   {s:INQ,l:"C",sub:"Measuring tools",a:0,en:{q:"To measure how hot something is, we use a:",o:["thermometer","ruler","clock","balance"]},ar:{q:"لقياس درجة حرارة شيء نستخدم:",o:["ميزان الحرارة","المسطرة","الساعة","الميزان"]}},
   {s:LIFE,l:"F",sub:"Plants",a:0,en:{q:"Which part of a plant takes in water from the soil?",o:["Roots","Leaf","Flower","Fruit"]},ar:{q:"أيّ جزء من النبات يمتص الماء من التربة؟",o:["الجذور","الورقة","الزهرة","الثمرة"]}},
   {s:PHYS,l:"F",sub:"States of matter",a:0,en:{q:"Which of these is a gas?",o:["Air","A rock","Ice","Wood"]},ar:{q:"أيٌّ مما يلي غاز؟",o:["الهواء","صخرة","ثلج","خشب"]}},
   {s:LIFE,l:"C",sub:"Life cycles",a:0,en:{q:"A young frog that lives in water is called a:",o:["tadpole","puppy","kitten","calf"]},ar:{q:"صغير الضفدع الذي يعيش في الماء يُسمى:",o:["شرغوف","جرو","هريرة","عجل"]}},
   {s:INQ,l:"H",sub:"Fair testing",a:0,en:{q:"In a fair test you change one thing and keep everything else:",o:["the same","different","hidden","broken"]},ar:{q:"في الاختبار العادل تغيّر عاملًا واحدًا وتُبقي كل شيء آخر:",o:["ثابتًا","مختلفًا","مخفيًا","مكسورًا"]}}
  ]);

  /* ================= GRADE 4 ================= */
  build("4",[
   {s:LIFE,l:"F",sub:"Cells",a:0,en:{q:"The smallest building block of a living thing is the:",o:["cell","brick","atom of metal","drop"]},ar:{q:"أصغر وحدة بناء في الكائن الحي هي:",o:["الخلية","الطوبة","ذرة المعدن","القطرة"]}},
   {s:LIFE,l:"C",sub:"Classifying",a:0,en:{q:"Which group do humans belong to?",o:["Mammals","Fish","Insects","Birds"]},ar:{q:"إلى أي مجموعة ينتمي الإنسان؟",o:["الثدييات","الأسماك","الحشرات","الطيور"]}},
   {s:LIFE,l:"C",sub:"Adaptation",a:0,en:{q:"A polar bear's thick fur helps it to:",o:["stay warm in the cold","swim faster only","see in the dark","fly"]},ar:{q:"يساعد الفراءُ الكثيف الدبَّ القطبيَّ على:",o:["البقاء دافئًا في البرد","السباحة أسرع فقط","الرؤية في الظلام","الطيران"]}},
   {s:LIFE,l:"H",sub:"Adaptation",a:0,en:{q:"A cactus stores water in its thick stem because it lives in a:",o:["desert","forest","ocean","cave"]},ar:{q:"يخزّن الصبّار الماء في ساقه السميكة لأنه يعيش في:",o:["الصحراء","الغابة","المحيط","الكهف"]}},
   {s:PHYS,l:"F",sub:"Matter",a:0,en:{q:"Which tool measures the mass of an object?",o:["A balance","A ruler","A clock","A thermometer"]},ar:{q:"أيّ أداة تقيس كتلة الجسم؟",o:["الميزان","المسطرة","الساعة","ميزان الحرارة"]}},
   {s:PHYS,l:"C",sub:"Mixtures",a:0,en:{q:"When you stir salt into water, the salt:",o:["dissolves","turns into a rock","disappears from the world","becomes a gas"]},ar:{q:"عند تحريك الملح في الماء فإن الملح:",o:["يذوب","يتحول إلى صخر","يختفي من الوجود","يصبح غازًا"]}},
   {s:PHYS,l:"F",sub:"Sound",a:0,en:{q:"Sound is made by objects that:",o:["vibrate","freeze","shine","float"]},ar:{q:"يَنتج الصوت عن الأجسام التي:",o:["تهتزّ","تتجمد","تلمع","تطفو"]}},
   {s:PHYS,l:"C",sub:"Light",a:0,en:{q:"We can see a shiny mirror image because light is:",o:["reflected","eaten","frozen","weighed"]},ar:{q:"نرى الصورة في المرآة اللامعة لأن الضوء:",o:["ينعكس","يُؤكل","يتجمد","يُوزن"]}},
   {s:PHYS,l:"C",sub:"Electricity",a:0,en:{q:"Electricity flows easily through:",o:["metal wire","dry wood","plastic","rubber"]},ar:{q:"تسري الكهرباء بسهولة خلال:",o:["سلك معدني","الخشب الجاف","البلاستيك","المطاط"]}},
   {s:PHYS,l:"F",sub:"Magnetism",a:0,en:{q:"A magnet will attract objects made of:",o:["iron","paper","glass","cloth"]},ar:{q:"يجذب المغناطيس الأجسام المصنوعة من:",o:["الحديد","الورق","الزجاج","القماش"]}},
   {s:PHYS,l:"H",sub:"Motion",a:0,en:{q:"To make a still ball start moving, you must apply a:",o:["force","colour","sound","smell"]},ar:{q:"لجعل كرة ساكنة تتحرك يجب أن تؤثر عليها بـ:",o:["قوة","لون","صوت","رائحة"]}},
   {s:EARTH,l:"F",sub:"Weather",a:0,en:{q:"Which tool measures temperature of the air?",o:["Thermometer","Ruler","Balance","Compass"]},ar:{q:"أيّ أداة تقيس درجة حرارة الهواء؟",o:["ميزان الحرارة","المسطرة","الميزان","البوصلة"]}},
   {s:EARTH,l:"C",sub:"Solar system",a:0,en:{q:"Which one is the star at the centre of our solar system?",o:["The Sun","The Moon","The Earth","Mars"]},ar:{q:"أيٌّ هو النجم في مركز مجموعتنا الشمسية؟",o:["الشمس","القمر","الأرض","المريخ"]}},
   {s:EARTH,l:"C",sub:"Earth and Moon",a:0,en:{q:"Day and night happen because the Earth:",o:["spins on its axis","stops moving","gets bigger","cools down"]},ar:{q:"يحدث الليل والنهار لأن الأرض:",o:["تدور حول محورها","تتوقف عن الحركة","تكبر","تبرد"]}},
   {s:INQ,l:"F",sub:"Scientific method",a:0,en:{q:"In a fair test you change:",o:["only one thing at a time","everything at once","nothing at all","the answer"]},ar:{q:"في الاختبار العادل تغيّر:",o:["عاملًا واحدًا في كل مرة","كل شيء دفعة واحدة","لا شيء إطلاقًا","الإجابة"]}},
   {s:INQ,l:"C",sub:"Design process",a:0,en:{q:"What is the best first step when designing a solution?",o:["Understand the problem","Throw it away","Copy a friend","Guess the price"]},ar:{q:"ما أفضل خطوة أولى عند تصميم حل؟",o:["فهم المشكلة","التخلص منها","تقليد صديق","تخمين السعر"]}},
   {s:LIFE,l:"F",sub:"Human body",a:0,en:{q:"Which sense organ do we use to see?",o:["Eyes","Ears","Nose","Skin"]},ar:{q:"أيّ عضو حسّي نستخدمه للرؤية؟",o:["العينان","الأذنان","الأنف","الجلد"]}},
   {s:PHYS,l:"F",sub:"Light",a:0,en:{q:"Which of these gives out its own light?",o:["A lamp","A mirror","A book","A stone"]},ar:{q:"أيٌّ مما يلي يصدر ضوءه الخاص؟",o:["المصباح","المرآة","الكتاب","الحجر"]}},
   {s:EARTH,l:"C",sub:"Earth and Moon",a:0,en:{q:"The Moon is best described as:",o:["a natural satellite of Earth","a star","a planet like Earth","a comet"]},ar:{q:"يوصف القمر بأنه:",o:["قمر (تابع) طبيعي للأرض","نجم","كوكب مثل الأرض","مذنّب"]}},
   {s:PHYS,l:"H",sub:"Heat transfer",a:0,en:{q:"Which object lets heat pass through it best?",o:["A metal spoon","A wooden spoon","A plastic ruler","A cloth"]},ar:{q:"أيّ جسم يسمح بمرور الحرارة خلاله بأفضل شكل؟",o:["ملعقة معدنية","ملعقة خشبية","مسطرة بلاستيكية","قطعة قماش"]}}
  ]);

  /* ================= GRADE 5 ================= */
  build("5",[
   {s:LIFE,l:"C",sub:"Photosynthesis",a:0,en:{q:"Green plants make their food using sunlight in a process called:",o:["photosynthesis","digestion","respiration","evaporation"]},ar:{q:"تصنع النباتات الخضراء غذاءها باستخدام ضوء الشمس في عملية تُسمى:",o:["البناء الضوئي","الهضم","التنفس","التبخر"]}},
   {s:LIFE,l:"F",sub:"Life cycles",a:0,en:{q:"A new plant usually grows from a:",o:["seed","stone","cup","nail"]},ar:{q:"ينمو النبات الجديد عادةً من:",o:["بذرة","حجر","كوب","مسمار"]}},
   {s:LIFE,l:"C",sub:"Ecosystems",a:0,en:{q:"In an ecosystem, animals that eat plants are called:",o:["herbivores","producers","rocks","clouds"]},ar:{q:"في النظام البيئي، الحيوانات التي تأكل النبات تُسمى:",o:["آكلات الأعشاب","المنتِجات","الصخور","الغيوم"]}},
   {s:LIFE,l:"H",sub:"Energy flow",a:0,en:{q:"The original source of energy for almost all food chains is the:",o:["Sun","soil","wind","moon"]},ar:{q:"المصدر الأصلي للطاقة في معظم السلاسل الغذائية هو:",o:["الشمس","التربة","الرياح","القمر"]}},
   {s:PHYS,l:"C",sub:"Elements",a:0,en:{q:"A pure substance made of only one kind of atom is an:",o:["element","mixture","solution","alloy"]},ar:{q:"المادة النقية المكوّنة من نوع واحد فقط من الذرات هي:",o:["عنصر","خليط","محلول","سبيكة"]}},
   {s:PHYS,l:"C",sub:"Metals",a:0,en:{q:"Which of these is a property of most metals?",o:["They conduct electricity","They are always liquid","They never shine","They float on all liquids"]},ar:{q:"أيٌّ مما يلي من خصائص معظم الفلزات؟",o:["توصل الكهرباء","سائلة دائمًا","لا تلمع أبدًا","تطفو على كل السوائل"]}},
   {s:PHYS,l:"C",sub:"Physical & chemical change",a:0,en:{q:"Which is a chemical change?",o:["Wood burning","Ice melting","Cutting paper","Bending wire"]},ar:{q:"أيٌّ مما يلي تغيّر كيميائي؟",o:["احتراق الخشب","انصهار الثلج","قص الورق","ثني السلك"]}},
   {s:PHYS,l:"F",sub:"Acids and bases",a:0,en:{q:"Lemon juice tastes sour because it is an:",o:["acid","base","metal","gas"]},ar:{q:"طعم عصير الليمون حامض لأنه:",o:["حمض","قاعدة","فلز","غاز"]}},
   {s:PHYS,l:"C",sub:"Forces and motion",a:0,en:{q:"A force that slows down a moving object rubbing on a surface is:",o:["friction","gravity only","magnetism","light"]},ar:{q:"القوة التي تُبطئ جسمًا متحركًا باحتكاكه بسطح هي:",o:["الاحتكاك","الجاذبية فقط","المغناطيسية","الضوء"]}},
   {s:PHYS,l:"F",sub:"Sound and light",a:0,en:{q:"Light travels in:",o:["straight lines","circles","zig-zags always","squares"]},ar:{q:"ينتقل الضوء في:",o:["خطوط مستقيمة","دوائر","خطوط متعرجة دائمًا","مربعات"]}},
   {s:EARTH,l:"F",sub:"Rocks and soil",a:0,en:{q:"Rocks are made of one or more:",o:["minerals","plants","animals","clouds"]},ar:{q:"تتكوّن الصخور من واحد أو أكثر من:",o:["المعادن","النباتات","الحيوانات","الغيوم"]}},
   {s:EARTH,l:"C",sub:"Natural resources",a:0,en:{q:"Which is a renewable resource?",o:["Sunlight","Coal","Oil","Natural gas"]},ar:{q:"أيٌّ من الموارد المتجددة؟",o:["ضوء الشمس","الفحم","النفط","الغاز الطبيعي"]}},
   {s:EARTH,l:"C",sub:"Cycles",a:0,en:{q:"Water moving from the sea to clouds to rain and back is the:",o:["water cycle","rock cycle","life cycle","food chain"]},ar:{q:"انتقال الماء من البحر إلى الغيوم إلى المطر ثم العودة يُسمى:",o:["دورة الماء","دورة الصخور","دورة الحياة","السلسلة الغذائية"]}},
   {s:INQ,l:"F",sub:"Tools",a:0,en:{q:"Which tool best measures the volume of a liquid?",o:["A measuring cylinder","A ruler","A balance","A thermometer"]},ar:{q:"أيّ أداة تقيس حجم السائل بأفضل شكل؟",o:["المخبار المدرّج","المسطرة","الميزان","ميزان الحرارة"]}},
   {s:INQ,l:"H",sub:"Fair testing",a:0,en:{q:"To test which soil grows taller plants, you should keep the same:",o:["water and light for all pots","type of soil in every pot","number of leaves","colour of the pots only"]},ar:{q:"لاختبار أيّ تربة تنبت نباتات أطول، يجب تثبيت:",o:["الماء والضوء لكل الأصص","نوع التربة في كل إناء","عدد الأوراق","لون الأصص فقط"]}},
   {s:LIFE,l:"C",sub:"Photosynthesis",a:0,en:{q:"Which gas do plants take in for photosynthesis?",o:["Carbon dioxide","Oxygen","Nitrogen","Helium"]},ar:{q:"أيّ غاز يمتصه النبات للبناء الضوئي؟",o:["ثاني أكسيد الكربون","الأكسجين","النيتروجين","الهيليوم"]}},
   {s:LIFE,l:"C",sub:"Ecosystems",a:0,en:{q:"Decomposers such as fungi are important because they:",o:["break down dead material","make sunlight","give out oxygen only","hunt living animals"]},ar:{q:"المحلِّلات مثل الفطريات مهمة لأنها:",o:["تحلل المواد الميتة","تصنع ضوء الشمس","تطلق الأكسجين فقط","تصطاد الحيوانات الحية"]}},
   {s:PHYS,l:"F",sub:"States of matter",a:0,en:{q:"Which state of matter has a fixed shape and a fixed volume?",o:["Solid","Liquid","Gas","Vapour"]},ar:{q:"أيّ حالة للمادة لها شكل ثابت وحجم ثابت؟",o:["الصلبة","السائلة","الغازية","البخار"]}},
   {s:PHYS,l:"C",sub:"Separating mixtures",a:0,en:{q:"Sand can be separated from water by:",o:["filtering","burning","freezing only","using magnets"]},ar:{q:"يمكن فصل الرمل عن الماء عن طريق:",o:["الترشيح","الحرق","التجميد فقط","استخدام المغناطيس"]}},
   {s:EARTH,l:"H",sub:"Soil",a:0,en:{q:"Soil is formed mainly from:",o:["weathered rock and dead material","plastic","metal","glass"]},ar:{q:"تتكوّن التربة أساسًا من:",o:["صخور متفتّتة ومواد ميتة","البلاستيك","المعدن","الزجاج"]}}
  ]);

  /* ================= GRADE 6 ================= */
  build("6",[
   {s:PHYS,l:"C",sub:"Atomic structure",a:0,en:{q:"Everything around us is made of tiny particles called:",o:["atoms","cells","organs","fossils"]},ar:{q:"كل ما حولنا مكوّن من جسيمات دقيقة تُسمى:",o:["الذرات","الخلايا","الأعضاء","الأحافير"]}},
   {s:PHYS,l:"C",sub:"Properties of matter",a:0,en:{q:"Which is a physical property of matter?",o:["Density","Kindness","Speed of reading","Happiness"]},ar:{q:"أيٌّ مما يلي خاصية فيزيائية للمادة؟",o:["الكثافة","اللطف","سرعة القراءة","السعادة"]}},
   {s:PHYS,l:"C",sub:"Solutions",a:0,en:{q:"In salty water, the water is the:",o:["solvent","solute","gas","solid"]},ar:{q:"في الماء المالح، الماء هو:",o:["المذيب","المذاب","الغاز","الصلب"]}},
   {s:PHYS,l:"H",sub:"Acids and bases",a:0,en:{q:"A solution with a pH of 3 is:",o:["acidic","basic","neutral","frozen"]},ar:{q:"المحلول الذي رقمه الهيدروجيني (pH) يساوي 3 يكون:",o:["حمضيًا","قاعديًا","متعادلًا","متجمدًا"]}},
   {s:PHYS,l:"C",sub:"Energy and machines",a:0,en:{q:"A machine that changes the direction or size of a force is a:",o:["simple machine","thermometer","battery only","magnet only"]},ar:{q:"الآلة التي تغيّر اتجاه القوة أو مقدارها هي:",o:["آلة بسيطة","ميزان حرارة","بطارية فقط","مغناطيس فقط"]}},
   {s:PHYS,l:"F",sub:"Forms of energy",a:0,en:{q:"A moving object has which kind of energy?",o:["Kinetic energy","Chemical energy","Sound only","No energy"]},ar:{q:"الجسم المتحرك يمتلك أي نوع من الطاقة؟",o:["الطاقة الحركية","الطاقة الكيميائية","الصوت فقط","لا طاقة"]}},
   {s:LIFE,l:"F",sub:"Characteristics of life",a:0,en:{q:"Which is a sign that something is alive?",o:["It grows and reproduces","It is shiny","It is heavy","It is cold"]},ar:{q:"أيٌّ علامة تدل على أن الشيء حي؟",o:["ينمو ويتكاثر","لامع","ثقيل","بارد"]}},
   {s:LIFE,l:"C",sub:"Cell structure",a:0,en:{q:"Which part controls the activities of a cell?",o:["Nucleus","Cell wall of metal","Wheel","Screen"]},ar:{q:"أيّ جزء يتحكم في أنشطة الخلية؟",o:["النواة","جدار معدني","العجلة","الشاشة"]}},
   {s:LIFE,l:"C",sub:"Classifying life",a:0,en:{q:"Living things are sorted into large groups called:",o:["kingdoms","cities","teams","colours"]},ar:{q:"تُصنّف الكائنات الحية في مجموعات كبرى تُسمى:",o:["ممالك","مدن","فِرق","ألوان"]}},
   {s:EARTH,l:"C",sub:"Earth's systems",a:0,en:{q:"The layer of gases around the Earth is the:",o:["atmosphere","crust","mantle","core"]},ar:{q:"طبقة الغازات المحيطة بالأرض هي:",o:["الغلاف الجوي","القشرة","الوشاح","اللب"]}},
   {s:EARTH,l:"H",sub:"Earth in space",a:0,en:{q:"The Earth takes about one year to:",o:["orbit the Sun once","spin once","cool down","warm up"]},ar:{q:"تستغرق الأرض سنةً تقريبًا كي:",o:["تدور حول الشمس دورة واحدة","تدور حول نفسها مرة","تبرد","تسخن"]}},
   {s:EARTH,l:"C",sub:"Natural resources",a:0,en:{q:"Which energy resource is non-renewable?",o:["Coal","Wind","Sunlight","Moving water"]},ar:{q:"أيّ مورد للطاقة غير متجدد؟",o:["الفحم","الرياح","ضوء الشمس","الماء المتحرك"]}},
   {s:EARTH,l:"C",sub:"Environmental impact",a:0,en:{q:"Which action helps protect the environment?",o:["Recycling waste","Wasting water","Cutting all trees","Burning rubbish"]},ar:{q:"أيّ سلوك يساعد على حماية البيئة؟",o:["إعادة تدوير النفايات","إهدار الماء","قطع كل الأشجار","حرق القمامة"]}},
   {s:INQ,l:"F",sub:"Measurement",a:0,en:{q:"The SI base unit of length is the:",o:["metre","litre","gram","second"]},ar:{q:"الوحدة الأساسية للطول في النظام الدولي هي:",o:["المتر","اللتر","الغرام","الثانية"]}},
   {s:INQ,l:"C",sub:"Scientific method",a:0,en:{q:"A testable statement you can investigate is a:",o:["hypothesis","conclusion only","drawing","title"]},ar:{q:"العبارة القابلة للاختبار التي يمكنك بحثها هي:",o:["الفرضية","الاستنتاج فقط","الرسم","العنوان"]}},
   {s:PHYS,l:"F",sub:"Properties of matter",a:0,en:{q:"The amount of matter in an object is its:",o:["mass","colour","temperature","speed"]},ar:{q:"كمية المادة في الجسم تُسمى:",o:["الكتلة","اللون","درجة الحرارة","السرعة"]}},
   {s:LIFE,l:"F",sub:"Cell structure",a:0,en:{q:"The basic unit of all living things is the:",o:["cell","atom","organ","molecule"]},ar:{q:"وحدة البناء الأساسية لكل الكائنات الحية هي:",o:["الخلية","الذرة","العضو","الجزيء"]}},
   {s:EARTH,l:"C",sub:"Earth's systems",a:0,en:{q:"Which is the innermost layer of the Earth?",o:["the core","the crust","the atmosphere","the ocean"]},ar:{q:"أيٌّ هي الطبقة الأعمق في الأرض؟",o:["اللب","القشرة","الغلاف الجوي","المحيط"]}},
   {s:PHYS,l:"C",sub:"Matter and change",a:0,en:{q:"Ice melting into water is an example of a:",o:["physical change","chemical change","new element","mixture"]},ar:{q:"انصهار الثلج إلى ماء مثال على:",o:["تغيّر فيزيائي","تغيّر كيميائي","عنصر جديد","خليط"]}},
   {s:LIFE,l:"H",sub:"Cells and energy",a:0,en:{q:"Which process releases energy from food inside cells?",o:["respiration","photosynthesis","condensation","erosion"]},ar:{q:"أيّ عملية تطلق الطاقة من الغذاء داخل الخلايا؟",o:["التنفس الخلوي","البناء الضوئي","التكاثف","التعرية"]}}
  ]);

  /* ================= GRADE 7 ================= */
  build("7",[
   {s:PHYS,l:"C",sub:"Foundations of chemistry",a:0,en:{q:"A change that produces a new substance is a:",o:["chemical change","physical change","change of shape","change of place"]},ar:{q:"التغيّر الذي ينتج عنه مادة جديدة هو:",o:["تغيّر كيميائي","تغيّر فيزيائي","تغيّر في الشكل","تغيّر في المكان"]}},
   {s:PHYS,l:"C",sub:"The atom",a:0,en:{q:"The centre of an atom, holding protons and neutrons, is the:",o:["nucleus","electron cloud","shell of metal","membrane"]},ar:{q:"مركز الذرة الذي يحوي البروتونات والنيوترونات هو:",o:["النواة","سحابة الإلكترونات","غلاف معدني","الغشاء"]}},
   {s:PHYS,l:"H",sub:"The atom",a:0,en:{q:"Which particle has a negative charge?",o:["Electron","Proton","Neutron","Nucleus"]},ar:{q:"أيّ جسيم يحمل شحنة سالبة؟",o:["الإلكترون","البروتون","النيوترون","النواة"]}},
   {s:PHYS,l:"C",sub:"Periodic table",a:0,en:{q:"The periodic table arranges the:",o:["elements","planets","animals","rocks"]},ar:{q:"الجدول الدوري يرتّب:",o:["العناصر","الكواكب","الحيوانات","الصخور"]}},
   {s:PHYS,l:"C",sub:"Motion and forces",a:0,en:{q:"Speed is calculated as:",o:["distance ÷ time","time ÷ distance","mass × speed","force × area"]},ar:{q:"تُحسب السرعة بالعلاقة:",o:["المسافة ÷ الزمن","الزمن ÷ المسافة","الكتلة × السرعة","القوة × المساحة"]}},
   {s:PHYS,l:"H",sub:"Newton's laws",a:0,en:{q:"An object stays at rest unless a ___ acts on it.",o:["force","colour","sound","smell"]},ar:{q:"يبقى الجسم ساكنًا ما لم تؤثر عليه ___.",o:["قوة","لون","صوت","رائحة"]}},
   {s:PHYS,l:"C",sub:"Waves and sound",a:0,en:{q:"Sound needs a ___ to travel through.",o:["material medium","vacuum","magnet","battery"]},ar:{q:"يحتاج الصوت إلى ___ لكي ينتقل.",o:["وسط مادي","فراغ","مغناطيس","بطارية"]}},
   {s:PHYS,l:"F",sub:"Light",a:0,en:{q:"White light can be split into colours using a:",o:["prism","magnet","wire","battery"]},ar:{q:"يمكن تحليل الضوء الأبيض إلى ألوان باستخدام:",o:["منشور","مغناطيس","سلك","بطارية"]}},
   {s:LIFE,l:"C",sub:"Animals",a:0,en:{q:"Animals without a backbone are called:",o:["invertebrates","vertebrates","mammals","reptiles"]},ar:{q:"الحيوانات التي لا عمود فقري لها تُسمى:",o:["اللافقاريات","الفقاريات","الثدييات","الزواحف"]}},
   {s:LIFE,l:"C",sub:"Plants",a:0,en:{q:"Which part of a plant takes in water from the soil?",o:["Roots","Flower","Petal","Fruit"]},ar:{q:"أيّ جزء من النبات يمتص الماء من التربة؟",o:["الجذور","الزهرة","البتلة","الثمرة"]}},
   {s:LIFE,l:"H",sub:"Plant processes",a:0,en:{q:"Plants release which gas during photosynthesis?",o:["Oxygen","Nitrogen","Helium","Carbon dioxide"]},ar:{q:"يُطلق النبات أيّ غاز أثناء البناء الضوئي؟",o:["الأكسجين","النيتروجين","الهيليوم","ثاني أكسيد الكربون"]}},
   {s:EARTH,l:"C",sub:"Earth's changing surface",a:0,en:{q:"Earthquakes and volcanoes happen because of movement of:",o:["tectonic plates","clouds","ocean fish","the Moon"]},ar:{q:"تحدث الزلازل والبراكين بسبب حركة:",o:["الصفائح التكتونية","الغيوم","أسماك المحيط","القمر"]}},
   {s:EARTH,l:"C",sub:"Weather",a:0,en:{q:"Which layer of the atmosphere do we live in and have weather?",o:["Troposphere","Stratosphere","Mesosphere","Thermosphere"]},ar:{q:"في أيّ طبقة من الغلاف الجوي نعيش ويحدث فيها الطقس؟",o:["التروبوسفير","الستراتوسفير","الميزوسفير","الثيرموسفير"]}},
   {s:EARTH,l:"F",sub:"Exploring space",a:0,en:{q:"A tool used to see distant objects in space is a:",o:["telescope","microscope","barometer","thermometer"]},ar:{q:"الأداة المستخدمة لرؤية الأجسام البعيدة في الفضاء هي:",o:["التلسكوب","المجهر","البارومتر","ميزان الحرارة"]}},
   {s:INQ,l:"C",sub:"Measurement & tools",a:0,en:{q:"Which is the correct SI unit for mass?",o:["kilogram","metre","second","litre"]},ar:{q:"ما الوحدة الصحيحة للكتلة في النظام الدولي؟",o:["الكيلوغرام","المتر","الثانية","اللتر"]}},
   {s:PHYS,l:"F",sub:"Forces",a:0,en:{q:"The SI unit of force is the:",o:["newton","metre","litre","second"]},ar:{q:"وحدة القوة في النظام الدولي هي:",o:["النيوتن","المتر","اللتر","الثانية"]}},
   {s:PHYS,l:"F",sub:"Waves",a:0,en:{q:"The frequency of a wave is measured in:",o:["hertz","metres","seconds","newtons"]},ar:{q:"يُقاس تردد الموجة بوحدة:",o:["الهرتز","المتر","الثانية","النيوتن"]}},
   {s:LIFE,l:"F",sub:"Animals",a:0,en:{q:"Which group of animals has feathers?",o:["Birds","Fish","Mammals","Reptiles"]},ar:{q:"أيّ مجموعة من الحيوانات لها ريش؟",o:["الطيور","الأسماك","الثدييات","الزواحف"]}},
   {s:PHYS,l:"C",sub:"Newton's laws",a:0,en:{q:"If the forces on an object are balanced, its motion:",o:["does not change","always increases","always reverses","stops instantly"]},ar:{q:"إذا كانت القوى المؤثرة على جسم متزنة فإن حركته:",o:["لا تتغيّر","تزداد دائمًا","تنعكس دائمًا","تتوقف فورًا"]}},
   {s:EARTH,l:"H",sub:"Seasons",a:0,en:{q:"What is the main reason Earth has seasons?",o:["the tilt of Earth's axis","Earth moving closer to the Sun","the phases of the Moon","clouds in the sky"]},ar:{q:"ما السبب الرئيسي لحدوث الفصول على الأرض؟",o:["ميل محور الأرض","اقتراب الأرض من الشمس","أطوار القمر","الغيوم في السماء"]}}
  ]);

  /* ================= GRADE 8 ================= */
  build("8",[
   {s:PHYS,l:"C",sub:"Thermal energy",a:0,en:{q:"Heat always flows from a ___ object to a ___ object.",o:["hotter; colder","colder; hotter","larger; smaller","lighter; heavier"]},ar:{q:"تنتقل الحرارة دائمًا من جسم ___ إلى جسم ___.",o:["أسخن؛ أبرد","أبرد؛ أسخن","أكبر؛ أصغر","أخف؛ أثقل"]}},
   {s:PHYS,l:"C",sub:"Elements and bonds",a:0,en:{q:"When a metal reacts with a non-metal, they usually form a(n):",o:["ionic bond","covalent bond only","mixture","alloy"]},ar:{q:"عندما يتفاعل فلز مع لافلز فإنهما يكوّنان عادةً:",o:["رابطة أيونية","رابطة تساهمية فقط","خليطًا","سبيكة"]}},
   {s:PHYS,l:"H",sub:"Chemical reactions",a:0,en:{q:"In a balanced chemical equation, the number of atoms is:",o:["equal on both sides","greater on the left","greater on the right","always zero"]},ar:{q:"في المعادلة الكيميائية الموزونة يكون عدد الذرات:",o:["متساويًا على الطرفين","أكبر في اليسار","أكبر في اليمين","صفرًا دائمًا"]}},
   {s:PHYS,l:"C",sub:"Chemical reactions",a:0,en:{q:"Rusting of iron is an example of a:",o:["chemical reaction","physical change","change of state","mixture"]},ar:{q:"صدأ الحديد مثال على:",o:["تفاعل كيميائي","تغيّر فيزيائي","تغيّر في الحالة","خليط"]}},
   {s:PHYS,l:"C",sub:"Electricity and magnetism",a:0,en:{q:"A complete path that lets electric current flow is a:",o:["circuit","magnet","lever","lens"]},ar:{q:"المسار المغلق الذي يسمح بمرور التيار الكهربائي هو:",o:["الدارة الكهربائية","المغناطيس","الرافعة","العدسة"]}},
   {s:PHYS,l:"H",sub:"Electricity",a:0,en:{q:"Materials that let current pass easily are called:",o:["conductors","insulators","magnets","gases"]},ar:{q:"المواد التي تسمح بمرور التيار بسهولة تُسمى:",o:["موصلات","عوازل","مغناطيسات","غازات"]}},
   {s:PHYS,l:"C",sub:"Mirrors and lenses",a:0,en:{q:"A magnifying glass uses which type of lens?",o:["Convex","Concave","Flat","Coloured"]},ar:{q:"العدسة المكبّرة تستخدم أيّ نوع من العدسات؟",o:["محدبة","مقعرة","مستوية","ملوّنة"]}},
   {s:LIFE,l:"C",sub:"Digestion",a:0,en:{q:"Where does most digestion and absorption of food happen?",o:["Small intestine","Lungs","Heart","Brain"]},ar:{q:"أين يحدث معظم هضم الطعام وامتصاصه؟",o:["الأمعاء الدقيقة","الرئتان","القلب","الدماغ"]}},
   {s:LIFE,l:"C",sub:"Circulatory system",a:0,en:{q:"Which organ pumps blood around the body?",o:["Heart","Stomach","Kidney","Liver"]},ar:{q:"أيّ عضو يضخّ الدم في الجسم؟",o:["القلب","المعدة","الكلية","الكبد"]}},
   {s:LIFE,l:"C",sub:"Respiratory system",a:0,en:{q:"Oxygen enters the blood mainly in the:",o:["lungs","stomach","bones","skin"]},ar:{q:"يدخل الأكسجين إلى الدم بشكل رئيسي في:",o:["الرئتين","المعدة","العظام","الجلد"]}},
   {s:LIFE,l:"H",sub:"Heredity",a:0,en:{q:"Traits are passed from parents to offspring through:",o:["genes","muscles","habits only","food"]},ar:{q:"تنتقل الصفات من الآباء إلى الأبناء عن طريق:",o:["الجينات","العضلات","العادات فقط","الغذاء"]}},
   {s:EARTH,l:"C",sub:"Earthquakes and volcanoes",a:0,en:{q:"The point on the surface directly above an earthquake's start is the:",o:["epicentre","equator","crater","orbit"]},ar:{q:"النقطة على السطح فوق بؤرة الزلزال مباشرةً تُسمى:",o:["المركز السطحي","خط الاستواء","الفوهة","المدار"]}},
   {s:EARTH,l:"C",sub:"Evidence of Earth's past",a:0,en:{q:"The preserved remains or traces of ancient living things are:",o:["fossils","minerals","clouds","comets"]},ar:{q:"بقايا الكائنات القديمة أو آثارها المحفوظة تُسمى:",o:["الأحافير","المعادن","الغيوم","المذنبات"]}},
   {s:EARTH,l:"H",sub:"Geologic time",a:0,en:{q:"Scientists find the relative age of rock layers by studying:",o:["the order of the layers","their colour only","their smell","their sound"]},ar:{q:"يحدد العلماء العمر النسبي لطبقات الصخور بدراسة:",o:["ترتيب الطبقات","لونها فقط","رائحتها","صوتها"]}},
   {s:INQ,l:"C",sub:"Scientific tools",a:0,en:{q:"Which instrument is used to view very small objects like cells?",o:["Microscope","Telescope","Thermometer","Barometer"]},ar:{q:"أيّ أداة تُستخدم لرؤية الأجسام الصغيرة جدًا مثل الخلايا؟",o:["المجهر","التلسكوب","ميزان الحرارة","البارومتر"]}},
   {s:PHYS,l:"F",sub:"Electricity",a:0,en:{q:"The unit of electric current is the:",o:["ampere","metre","gram","second"]},ar:{q:"وحدة التيار الكهربائي هي:",o:["الأمبير","المتر","الغرام","الثانية"]}},
   {s:PHYS,l:"F",sub:"Electricity",a:0,en:{q:"Which material is a good electrical insulator?",o:["Plastic","Copper","Iron","Aluminium"]},ar:{q:"أيّ مادة عازل كهربائي جيد؟",o:["البلاستيك","النحاس","الحديد","الألمنيوم"]}},
   {s:LIFE,l:"F",sub:"Excretion",a:0,en:{q:"Which organ removes waste from the blood as urine?",o:["Kidney","Heart","Lung","Stomach"]},ar:{q:"أيّ عضو يزيل الفضلات من الدم على شكل بول؟",o:["الكلية","القلب","الرئة","المعدة"]}},
   {s:PHYS,l:"C",sub:"Electric circuits",a:0,en:{q:"In a simple series circuit, if one bulb breaks the other bulbs:",o:["go out","get brighter","stay the same","change colour"]},ar:{q:"في دارة توالٍ بسيطة، إذا انكسر مصباح فإن المصابيح الأخرى:",o:["تنطفئ","تزداد سطوعًا","تبقى كما هي","تغيّر لونها"]}},
   {s:EARTH,l:"H",sub:"Absolute-age dating",a:0,en:{q:"Radioactive dating is used to find the ___ age of rocks.",o:["absolute (actual)","relative only","coloured","market"]},ar:{q:"يُستخدم التأريخ الإشعاعي لإيجاد العمر ___ للصخور.",o:["المطلق (الفعلي)","النسبي فقط","اللوني","السوقي"]}}
  ]);
})();
