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

/* ================= EXPANSION PACK (adds ~14 more bilingual questions per grade) =================
   Appended so each Science pool holds ~34 questions; the diagnostic picks 20, giving real variety
   across generations and retakes. Same skills/format; still aligned to the embedded MOE scope. */
(function(){
  var LIFE="Life Science", PHYS="Physical Science", EARTH="Earth & Space Science", INQ="Scientific Inquiry & Technology";
  function moreS(grade, items){
    var EN=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.en.q, options:it.en.o, answer:it.a}; });
    var AR=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.ar.q, options:it.ar.o, answer:it.a}; });
    QUESTION_POOL[grade]=QUESTION_POOL[grade]||{}; QUESTION_POOL[grade]["Science"]=(QUESTION_POOL[grade]["Science"]||[]).concat(EN);
    QUESTION_BANK_AR[grade]=QUESTION_BANK_AR[grade]||{}; QUESTION_BANK_AR[grade]["Science"]=(QUESTION_BANK_AR[grade]["Science"]||[]).concat(AR);
  }

  /* ---------- GRADE 3 ---------- */
  moreS("3",[
   {s:LIFE,l:"F",sub:"Animal parts",a:0,en:{q:"Which body part do fish use to breathe under water?",o:["Gills","Lungs","Wings","Fins"]},ar:{q:"أيّ عضو تستخدمه الأسماك للتنفس تحت الماء؟",o:["الخياشيم","الرئتان","الأجنحة","الزعانف"]}},
   {s:LIFE,l:"C",sub:"Plants",a:0,en:{q:"Green plants make their own food using sunlight in their:",o:["leaves","roots","flowers","seeds"]},ar:{q:"تصنع النباتات الخضراء غذاءها بضوء الشمس في:",o:["الأوراق","الجذور","الأزهار","البذور"]}},
   {s:LIFE,l:"F",sub:"Living vs non-living",a:0,en:{q:"Which one is NOT a living thing?",o:["A stone","A cat","A tree","A bird"]},ar:{q:"أيٌّ مما يلي ليس كائنًا حيًا؟",o:["الحجر","القط","الشجرة","الطائر"]}},
   {s:PHYS,l:"C",sub:"Properties of matter",a:0,en:{q:"Which tool would you use to measure how long a pencil is?",o:["A ruler","A thermometer","A clock","A magnet"]},ar:{q:"أيّ أداة تستخدم لقياس طول القلم؟",o:["المسطرة","ميزان الحرارة","الساعة","المغناطيس"]}},
   {s:PHYS,l:"H",sub:"Changes of state",a:0,en:{q:"Leaving a puddle of water in the hot Sun makes it:",o:["evaporate into the air","freeze into ice","turn into a rock","become heavier"]},ar:{q:"ترك بركة ماء في الشمس الحارة يجعلها:",o:["تتبخر في الهواء","تتجمد ثلجًا","تتحول إلى صخر","تصبح أثقل"]}},
   {s:PHYS,l:"F",sub:"Motion",a:0,en:{q:"A ball rolling down a hill is an example of:",o:["motion","sound","colour","smell"]},ar:{q:"كرة تتدحرج على منحدر مثال على:",o:["الحركة","الصوت","اللون","الرائحة"]}},
   {s:PHYS,l:"C",sub:"Heat",a:0,en:{q:"Which object would feel the warmest on a sunny day?",o:["A dark metal car","A white cloth","A glass of ice","A shady wall"]},ar:{q:"أيّ جسم يكون أدفأ في يوم مشمس؟",o:["سيارة معدنية داكنة","قماش أبيض","كوب ثلج","جدار في الظل"]}},
   {s:EARTH,l:"F",sub:"Earth's features",a:0,en:{q:"Which of these is a landform?",o:["A mountain","A cloud","A rainbow","A shadow"]},ar:{q:"أيٌّ مما يلي تضاريس أرضية؟",o:["الجبل","السحابة","قوس قزح","الظل"]}},
   {s:EARTH,l:"C",sub:"Weathering and erosion",a:0,en:{q:"Wind slowly carrying away sand and soil is called:",o:["erosion","freezing","melting","growing"]},ar:{q:"حمل الرياح للرمل والتربة ببطء يُسمى:",o:["التعرية","التجمد","الانصهار","النمو"]}},
   {s:EARTH,l:"F",sub:"Weather",a:0,en:{q:"On a cloudy, wet day we might see:",o:["rain","stars","a rainbow only","snow in the desert"]},ar:{q:"في يوم غائم وممطر قد نرى:",o:["المطر","النجوم","قوس قزح فقط","الثلج في الصحراء"]}},
   {s:INQ,l:"F",sub:"Observing",a:0,en:{q:"Using your eyes to watch something closely is called:",o:["observing","cooking","sleeping","running"]},ar:{q:"استخدام عينيك لمراقبة شيء عن قرب يُسمى:",o:["الملاحظة","الطبخ","النوم","الجري"]}},
   {s:INQ,l:"C",sub:"Recording data",a:0,en:{q:"After doing an experiment, a good scientist should:",o:["record the results","forget them","hide them","change them"]},ar:{q:"بعد إجراء تجربة، يجب على العالِم الجيد أن:",o:["يسجّل النتائج","ينساها","يخفيها","يغيّرها"]}},
   {s:LIFE,l:"H",sub:"Food webs",a:0,en:{q:"If all the plants in a food web died, the animals that eat them would:",o:["have no food","get bigger","become plants","glow"]},ar:{q:"إذا ماتت كل النباتات في شبكة غذائية، فإن الحيوانات التي تأكلها:",o:["لن تجد غذاءً","تكبر","تتحول إلى نباتات","تتوهج"]}},
   {s:PHYS,l:"F",sub:"Simple machines",a:0,en:{q:"Scissors are an example of a simple machine that helps us:",o:["cut","fly","melt ice","make light"]},ar:{q:"المقص مثال على آلة بسيطة تساعدنا على:",o:["القص","الطيران","إذابة الثلج","صنع الضوء"]}}
  ]);

  /* ---------- GRADE 4 ---------- */
  moreS("4",[
   {s:LIFE,l:"F",sub:"Kingdoms of life",a:0,en:{q:"Living things are sorted into large groups called:",o:["kingdoms","cities","teams","colours"]},ar:{q:"تُصنّف الكائنات الحية في مجموعات كبيرة تُسمى:",o:["ممالك","مدن","فرق","ألوان"]}},
   {s:LIFE,l:"C",sub:"Animal systems",a:0,en:{q:"Which body system carries oxygen to all parts of the body?",o:["Circulatory system","Digestive system","Skeletal system","Nervous system"]},ar:{q:"أيّ جهاز في الجسم ينقل الأكسجين إلى جميع أجزاء الجسم؟",o:["الجهاز الدوري","الجهاز الهضمي","الجهاز الهيكلي","الجهاز العصبي"]}},
   {s:LIFE,l:"H",sub:"Ecosystems",a:0,en:{q:"If a new animal enters an ecosystem and eats all the rabbits, the number of rabbits will:",o:["fall","rise","stay the same","turn into plants"]},ar:{q:"إذا دخل حيوان جديد نظامًا بيئيًا وأكل كل الأرانب، فإن عدد الأرانب:",o:["ينخفض","يرتفع","يبقى ثابتًا","يتحول إلى نباتات"]}},
   {s:LIFE,l:"F",sub:"Health",a:0,en:{q:"Which of these is a healthy food choice?",o:["Fresh fruit","Sugary sweets","Fried chips","Fizzy drinks"]},ar:{q:"أيٌّ مما يلي خيار غذائي صحي؟",o:["الفاكهة الطازجة","الحلويات السكرية","البطاطس المقلية","المشروبات الغازية"]}},
   {s:PHYS,l:"C",sub:"Properties of water",a:0,en:{q:"Water is unusual because its solid form (ice):",o:["floats on liquid water","sinks quickly","is heavier than gold","cannot melt"]},ar:{q:"الماء غير اعتيادي لأن حالته الصلبة (الثلج):",o:["تطفو على الماء السائل","تغرق بسرعة","أثقل من الذهب","لا يمكن أن تنصهر"]}},
   {s:PHYS,l:"F",sub:"Heat transfer",a:0,en:{q:"Heat always moves from a warmer object to a:",o:["cooler object","brighter object","louder object","heavier object"]},ar:{q:"تنتقل الحرارة دائمًا من الجسم الأدفأ إلى الجسم:",o:["الأبرد","الألمع","الأعلى صوتًا","الأثقل"]}},
   {s:PHYS,l:"C",sub:"Light",a:0,en:{q:"A shadow forms when an object blocks:",o:["light","sound","air","water"]},ar:{q:"يتكوّن الظل عندما يحجب جسمٌ:",o:["الضوء","الصوت","الهواء","الماء"]}},
   {s:PHYS,l:"H",sub:"Magnetism and electricity",a:0,en:{q:"An electromagnet can be turned off by:",o:["stopping the electric current","painting it","cooling the room","adding water"]},ar:{q:"يمكن إيقاف المغناطيس الكهربائي عن طريق:",o:["قطع التيار الكهربائي","طلائه","تبريد الغرفة","إضافة الماء"]}},
   {s:PHYS,l:"C",sub:"Forces and transport",a:0,en:{q:"A force that slows down a moving bicycle is:",o:["friction","light","sound","colour"]},ar:{q:"القوة التي تُبطئ دراجة متحركة هي:",o:["الاحتكاك","الضوء","الصوت","اللون"]}},
   {s:EARTH,l:"F",sub:"Climate",a:0,en:{q:"The usual weather of a place over many years is its:",o:["climate","shadow","echo","gravity"]},ar:{q:"الطقس المعتاد لمكان ما عبر سنوات كثيرة يُسمى:",o:["المناخ","الظل","الصدى","الجاذبية"]}},
   {s:EARTH,l:"C",sub:"Earth and Moon",a:0,en:{q:"The Moon appears to change shape during the month because of its:",o:["phases","temperature","colour","sound"]},ar:{q:"يبدو القمر يغيّر شكله خلال الشهر بسبب:",o:["أطواره","درجة حرارته","لونه","صوته"]}},
   {s:EARTH,l:"H",sub:"Solar system",a:0,en:{q:"Planets stay in orbit around the Sun because of:",o:["gravity","wind","magnetism of the air","sound waves"]},ar:{q:"تبقى الكواكب في مدارها حول الشمس بسبب:",o:["الجاذبية","الرياح","مغناطيسية الهواء","الموجات الصوتية"]}},
   {s:INQ,l:"C",sub:"Scientific method",a:0,en:{q:"A scientist's careful, testable guess before an experiment is a:",o:["hypothesis","conclusion","holiday","mistake"]},ar:{q:"تخمين العالِم الدقيق القابل للاختبار قبل التجربة يُسمى:",o:["فرضية","استنتاجًا","عطلة","خطأ"]}},
   {s:LIFE,l:"C",sub:"Adaptation",a:0,en:{q:"A duck's webbed feet are an adaptation that helps it:",o:["swim","fly higher","dig tunnels","climb trees"]},ar:{q:"أقدام البط المكفّفة تكيّف يساعده على:",o:["السباحة","الطيران أعلى","حفر الأنفاق","تسلق الأشجار"]}}
  ]);

  /* ---------- GRADE 5 ---------- */
  moreS("5",[
   {s:LIFE,l:"C",sub:"Photosynthesis",a:0,en:{q:"During photosynthesis, plants take in carbon dioxide and give out:",o:["oxygen","salt","plastic","sand"]},ar:{q:"أثناء البناء الضوئي تأخذ النباتات ثاني أكسيد الكربون وتُطلق:",o:["الأكسجين","الملح","البلاستيك","الرمل"]}},
   {s:LIFE,l:"F",sub:"Reproduction",a:0,en:{q:"A new plant often begins to grow from a:",o:["seed","stone","cloud","flame"]},ar:{q:"غالبًا ما يبدأ نبات جديد بالنمو من:",o:["بذرة","حجر","سحابة","لهب"]}},
   {s:LIFE,l:"H",sub:"Ecosystem relationships",a:0,en:{q:"A bee getting food from a flower while helping it make seeds is an example of:",o:["both living things benefiting","only the bee being harmed","only the flower dying","no relationship"]},ar:{q:"حصول النحلة على غذاء من الزهرة مع مساعدتها على تكوين البذور مثال على:",o:["استفادة الكائنين معًا","تضرّر النحلة فقط","موت الزهرة فقط","عدم وجود علاقة"]}},
   {s:PHYS,l:"F",sub:"Elements",a:0,en:{q:"The simplest pure substances that make up all matter are called:",o:["elements","mixtures","shadows","forces"]},ar:{q:"أبسط المواد النقية التي تتكوّن منها كل المواد تُسمى:",o:["العناصر","المخاليط","الظلال","القوى"]}},
   {s:PHYS,l:"C",sub:"Metals and nonmetals",a:0,en:{q:"Which is a typical property of most metals?",o:["They conduct electricity","They break like glass","They are always gases","They never shine"]},ar:{q:"أيٌّ صفة نموذجية لمعظم المعادن؟",o:["توصّل الكهرباء","تنكسر مثل الزجاج","غازات دائمًا","لا تلمع أبدًا"]}},
   {s:PHYS,l:"C",sub:"Acids and bases",a:0,en:{q:"Lemon juice tastes sour because it is a weak:",o:["acid","base","metal","gas"]},ar:{q:"عصير الليمون طعمه حامض لأنه حمض:",o:["ضعيف","قاعدة","معدن","غاز"]}},
   {s:PHYS,l:"H",sub:"Physical vs chemical change",a:0,en:{q:"Which of these is a chemical change?",o:["Wood burning to ash","Ice melting","Tearing paper","Bending a wire"]},ar:{q:"أيٌّ مما يلي تغيّر كيميائي؟",o:["احتراق الخشب إلى رماد","انصهار الثلج","تمزيق الورق","ثني السلك"]}},
   {s:PHYS,l:"F",sub:"Work and energy",a:0,en:{q:"In science, work is done when a force moves an object over a:",o:["distance","colour","sound","smell"]},ar:{q:"في العلوم، يُبذل الشغل عندما تحرّك قوةٌ جسمًا عبر:",o:["مسافة","لون","صوت","رائحة"]}},
   {s:PHYS,l:"C",sub:"Sound",a:0,en:{q:"Sound travels fastest through a:",o:["solid","gas","vacuum","shadow"]},ar:{q:"ينتقل الصوت أسرع خلال:",o:["مادة صلبة","غاز","فراغ","ظل"]}},
   {s:EARTH,l:"F",sub:"Natural resources",a:0,en:{q:"Which of these is a renewable resource?",o:["Sunlight","Coal","Oil","Natural gas"]},ar:{q:"أيٌّ مما يلي مورد متجدد؟",o:["ضوء الشمس","الفحم","النفط","الغاز الطبيعي"]}},
   {s:EARTH,l:"C",sub:"Minerals and rocks",a:0,en:{q:"Rocks are made of one or more natural solids called:",o:["minerals","gases","liquids","plastics"]},ar:{q:"تتكوّن الصخور من مادة صلبة طبيعية واحدة أو أكثر تُسمى:",o:["المعادن","الغازات","السوائل","اللدائن"]}},
   {s:EARTH,l:"C",sub:"Soil",a:0,en:{q:"Good soil for growing plants usually contains:",o:["water, air and nutrients","only plastic","only salt","only metal"]},ar:{q:"التربة الجيدة لنمو النبات تحتوي عادةً على:",o:["ماء وهواء ومغذيات","بلاستيك فقط","ملح فقط","معدن فقط"]}},
   {s:INQ,l:"H",sub:"Design process",a:0,en:{q:"After building a model, the design process says an engineer should:",o:["test it and improve it","throw it away","hide it","never change it"]},ar:{q:"بعد بناء نموذج، تقول عملية التصميم إن على المهندس أن:",o:["يختبره ويحسّنه","يرميه","يخفيه","لا يغيّره أبدًا"]}},
   {s:LIFE,l:"C",sub:"Life cycles",a:0,en:{q:"Which animal changes body form completely through metamorphosis?",o:["A butterfly","A dog","A horse","A human"]},ar:{q:"أيّ حيوان يغيّر شكل جسمه تمامًا عبر التحوّل؟",o:["الفراشة","الكلب","الحصان","الإنسان"]}}
  ]);
})();

/* ================= EXPANSION PACK 2 (grades 6-8) ================= */
(function(){
  var LIFE="Life Science", PHYS="Physical Science", EARTH="Earth & Space Science", INQ="Scientific Inquiry & Technology";
  function moreS(grade, items){
    var EN=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.en.q, options:it.en.o, answer:it.a}; });
    var AR=items.map(function(it){ return {skill:it.s, level:it.l, sub:it.sub, q:it.ar.q, options:it.ar.o, answer:it.a}; });
    QUESTION_POOL[grade]=QUESTION_POOL[grade]||{}; QUESTION_POOL[grade]["Science"]=(QUESTION_POOL[grade]["Science"]||[]).concat(EN);
    QUESTION_BANK_AR[grade]=QUESTION_BANK_AR[grade]||{}; QUESTION_BANK_AR[grade]["Science"]=(QUESTION_BANK_AR[grade]["Science"]||[]).concat(AR);
  }

  /* ---------- GRADE 6 ---------- */
  moreS("6",[
   {s:PHYS,l:"F",sub:"Atomic structure",a:0,en:{q:"The tiny particles that make up all matter are called:",o:["atoms","cells","planets","waves"]},ar:{q:"الجسيمات الصغيرة جدًا التي تتكوّن منها كل المواد تُسمى:",o:["الذرات","الخلايا","الكواكب","الأمواج"]}},
   {s:PHYS,l:"C",sub:"Mixtures",a:0,en:{q:"Which is a mixture that can be separated by filtering?",o:["Sand in water","Pure water","A single atom","Oxygen gas"]},ar:{q:"أيٌّ خليط يمكن فصله بالترشيح؟",o:["رمل في ماء","ماء نقي","ذرة مفردة","غاز الأكسجين"]}},
   {s:PHYS,l:"C",sub:"Solutions",a:0,en:{q:"In salty water, the salt is the ___ and the water is the solvent.",o:["solute","gas","metal","mineral"]},ar:{q:"في الماء المالح، الملح هو ___ والماء هو المذيب.",o:["المُذاب","الغاز","المعدن","المعدن الطبيعي"]}},
   {s:PHYS,l:"H",sub:"Acids and bases",a:0,en:{q:"On the pH scale, a value of exactly 7 means a solution is:",o:["neutral","strongly acidic","strongly basic","a metal"]},ar:{q:"على مقياس الأس الهيدروجيني، القيمة 7 بالضبط تعني أن المحلول:",o:["متعادل","حمضي قوي","قاعدي قوي","معدن"]}},
   {s:PHYS,l:"C",sub:"Energy transformations",a:0,en:{q:"A moving car changes chemical energy from fuel mostly into:",o:["motion (kinetic) energy","sound only","light only","magnetism"]},ar:{q:"تحوّل السيارة المتحركة الطاقة الكيميائية من الوقود غالبًا إلى:",o:["طاقة حركية","صوت فقط","ضوء فقط","مغناطيسية"]}},
   {s:PHYS,l:"F",sub:"Simple machines",a:0,en:{q:"A seesaw is an example of which simple machine?",o:["A lever","A pulley","A screw","A wedge"]},ar:{q:"الأرجوحة (السيسو) مثال على أيّ آلة بسيطة؟",o:["الرافعة","البكرة","اللولب","الإسفين"]}},
   {s:LIFE,l:"C",sub:"Cell structure",a:0,en:{q:"In a plant cell, which structure captures sunlight to make food?",o:["Chloroplast","Nucleus","Vacuole","Cell membrane"]},ar:{q:"في الخلية النباتية، أيّ تركيب يلتقط ضوء الشمس لصنع الغذاء؟",o:["البلاستيدة الخضراء","النواة","الفجوة","الغشاء الخلوي"]}},
   {s:LIFE,l:"H",sub:"Cell transport",a:0,en:{q:"Water moving across a cell membrane from high to low concentration is:",o:["osmosis","burning","melting","gravity"]},ar:{q:"انتقال الماء عبر الغشاء الخلوي من تركيز عالٍ إلى منخفض هو:",o:["الخاصية الأسموزية","الاحتراق","الانصهار","الجاذبية"]}},
   {s:LIFE,l:"F",sub:"Classifying living things",a:0,en:{q:"All living things are made of one or more:",o:["cells","metals","rocks","clouds"]},ar:{q:"تتكوّن جميع الكائنات الحية من خلية واحدة أو أكثر من:",o:["الخلايا","المعادن","الصخور","الغيوم"]}},
   {s:EARTH,l:"C",sub:"Earth's systems",a:0,en:{q:"The layer of gases surrounding the Earth is the:",o:["atmosphere","geosphere","lithosphere","crust only"]},ar:{q:"طبقة الغازات المحيطة بالأرض تُسمى:",o:["الغلاف الجوي","الغلاف الصخري","اليابسة","القشرة فقط"]}},
   {s:EARTH,l:"F",sub:"Space",a:0,en:{q:"The Sun is a:",o:["star","planet","moon","comet"]},ar:{q:"الشمس هي:",o:["نجم","كوكب","قمر","مذنّب"]}},
   {s:EARTH,l:"H",sub:"Environmental impacts",a:0,en:{q:"Burning large amounts of fossil fuels adds which gas that warms the planet?",o:["Carbon dioxide","Oxygen","Helium","Nitrogen only"]},ar:{q:"يضيف حرق كميات كبيرة من الوقود الأحفوري أيّ غاز يسبب احترار الكوكب؟",o:["ثاني أكسيد الكربون","الأكسجين","الهيليوم","النيتروجين فقط"]}},
   {s:INQ,l:"C",sub:"Design process",a:0,en:{q:"The first step when engineers design a solution is to:",o:["define the problem","sell the product","paint it","celebrate"]},ar:{q:"الخطوة الأولى عند تصميم المهندسين لحلٍّ هي:",o:["تحديد المشكلة","بيع المنتج","طلاؤه","الاحتفال"]}},
   {s:PHYS,l:"C",sub:"Matter and its changes",a:0,en:{q:"Which change is a physical change?",o:["Cutting paper","Baking a cake","Iron rusting","Milk turning sour"]},ar:{q:"أيّ تغيّر هو تغيّر فيزيائي؟",o:["قص الورق","خبز الكعك","صدأ الحديد","تعفّن الحليب"]}}
  ]);

  /* ---------- GRADE 7 ---------- */
  moreS("7",[
   {s:PHYS,l:"F",sub:"Classifying matter",a:0,en:{q:"A substance made of only one kind of atom is a(n):",o:["element","mixture","solution","alloy"]},ar:{q:"المادة المكوّنة من نوع واحد فقط من الذرات هي:",o:["عنصر","خليط","محلول","سبيكة"]}},
   {s:PHYS,l:"C",sub:"Parts of the atom",a:0,en:{q:"Which particle in an atom has a negative charge?",o:["Electron","Proton","Neutron","Nucleus"]},ar:{q:"أيّ جسيم في الذرة يحمل شحنة سالبة؟",o:["الإلكترون","البروتون","النيوترون","النواة"]}},
   {s:PHYS,l:"C",sub:"Periodic table",a:0,en:{q:"On the periodic table, elements in the same column (group) have similar:",o:["chemical properties","colours","temperatures","masses exactly"]},ar:{q:"في الجدول الدوري، العناصر في العمود نفسه (المجموعة) لها خصائص:",o:["كيميائية متشابهة","ألوان متشابهة","درجات حرارة متشابهة","كتل متطابقة تمامًا"]}},
   {s:PHYS,l:"H",sub:"Newton's laws",a:0,en:{q:"Newton's first law says an object at rest stays at rest unless acted on by a(n):",o:["unbalanced force","colour","sound","smell"]},ar:{q:"ينص قانون نيوتن الأول على أن الجسم الساكن يبقى ساكنًا ما لم تؤثر عليه:",o:["قوة غير متزنة","ألوان","أصوات","روائح"]}},
   {s:PHYS,l:"C",sub:"Describing motion",a:0,en:{q:"Speed is calculated by dividing distance by:",o:["time","mass","colour","temperature"]},ar:{q:"تُحسب السرعة بقسمة المسافة على:",o:["الزمن","الكتلة","اللون","درجة الحرارة"]}},
   {s:PHYS,l:"F",sub:"Waves",a:0,en:{q:"Sound is a type of wave that needs a ___ to travel through.",o:["material (medium)","vacuum","shadow","magnet"]},ar:{q:"الصوت نوع من الموجات يحتاج إلى ___ لينتقل خلاله.",o:["وسط مادي","فراغ","ظل","مغناطيس"]}},
   {s:PHYS,l:"C",sub:"Light",a:0,en:{q:"White light passing through a prism splits into:",o:["many colours","one colour","sound","heat only"]},ar:{q:"الضوء الأبيض المار خلال منشور ينقسم إلى:",o:["ألوان كثيرة","لون واحد","صوت","حرارة فقط"]}},
   {s:LIFE,l:"F",sub:"Invertebrates",a:0,en:{q:"Which animal is an invertebrate (has no backbone)?",o:["An insect","A fish","A cat","A bird"]},ar:{q:"أيّ حيوان لافقاري (بلا عمود فقري)؟",o:["الحشرة","السمكة","القط","الطائر"]}},
   {s:LIFE,l:"C",sub:"Plant processes",a:0,en:{q:"Plants lose water vapour to the air through tiny openings in their leaves during:",o:["transpiration","digestion","erosion","gravity"]},ar:{q:"تفقد النباتات بخار الماء إلى الهواء عبر فتحات صغيرة في أوراقها أثناء:",o:["النتح","الهضم","التعرية","الجاذبية"]}},
   {s:LIFE,l:"H",sub:"Animal behaviour",a:0,en:{q:"A behaviour an animal is born knowing how to do is called:",o:["instinct","homework","a habit learned at school","a machine"]},ar:{q:"السلوك الذي يولد الحيوان وهو يعرف كيفية أدائه يُسمى:",o:["غريزة","واجبًا","عادة تُتعلّم في المدرسة","آلة"]}},
   {s:EARTH,l:"C",sub:"Plate tectonics",a:0,en:{q:"Earthquakes most often happen where Earth's tectonic plates:",o:["meet and move","are painted","are heated by the Sun only","are covered by clouds"]},ar:{q:"تحدث الزلازل غالبًا حيث الصفائح التكتونية للأرض:",o:["تلتقي وتتحرك","تُطلى","تُسخّن بالشمس فقط","تغطيها الغيوم"]}},
   {s:EARTH,l:"F",sub:"The atmosphere",a:0,en:{q:"The most common gas in Earth's atmosphere is:",o:["nitrogen","oxygen","carbon dioxide","helium"]},ar:{q:"أكثر الغازات شيوعًا في الغلاف الجوي للأرض هو:",o:["النيتروجين","الأكسجين","ثاني أكسيد الكربون","الهيليوم"]}},
   {s:EARTH,l:"H",sub:"Climate change",a:0,en:{q:"Rising average global temperatures over many decades is called:",o:["global warming","a single storm","an eclipse","an earthquake"]},ar:{q:"ارتفاع متوسط درجات الحرارة العالمية عبر عقود كثيرة يُسمى:",o:["الاحترار العالمي","عاصفة واحدة","كسوفًا","زلزالًا"]}},
   {s:INQ,l:"C",sub:"Measurement",a:0,en:{q:"The SI (metric) unit for measuring mass is the:",o:["kilogram","metre","second","litre"]},ar:{q:"وحدة النظام الدولي (المتري) لقياس الكتلة هي:",o:["الكيلوغرام","المتر","الثانية","اللتر"]}}
  ]);

  /* ---------- GRADE 8 ---------- */
  moreS("8",[
   {s:PHYS,l:"C",sub:"Thermal energy",a:0,en:{q:"Heat transfer through direct contact between materials is:",o:["conduction","radiation","evaporation","reflection"]},ar:{q:"انتقال الحرارة عبر التلامس المباشر بين المواد هو:",o:["التوصيل","الإشعاع","التبخر","الانعكاس"]}},
   {s:PHYS,l:"H",sub:"Heat transfer",a:0,en:{q:"The Sun's heat reaches the Earth through empty space by:",o:["radiation","conduction","convection","friction"]},ar:{q:"تصل حرارة الشمس إلى الأرض عبر الفضاء الفارغ بواسطة:",o:["الإشعاع","التوصيل","الحمل","الاحتكاك"]}},
   {s:PHYS,l:"C",sub:"Chemical bonds",a:0,en:{q:"An ionic bond forms when one atom ___ electrons to another.",o:["transfers","hides","paints","cools"]},ar:{q:"تتكوّن الرابطة الأيونية عندما تنقل ذرةٌ الإلكترونات إلى أخرى، أي عندما ___ الإلكترونات.",o:["تنقل","تخفي","تطلي","تبرّد"]}},
   {s:PHYS,l:"C",sub:"Covalent bonds",a:0,en:{q:"In a covalent bond, atoms:",o:["share electrons","give away protons","melt","glow"]},ar:{q:"في الرابطة التساهمية، تقوم الذرات بـ:",o:["مشاركة الإلكترونات","التخلي عن البروتونات","الانصهار","التوهّج"]}},
   {s:PHYS,l:"H",sub:"Chemical equations",a:0,en:{q:"Balancing a chemical equation shows that atoms are:",o:["conserved (not created or destroyed)","made from nothing","destroyed","turned into energy only"]},ar:{q:"موازنة المعادلة الكيميائية تبيّن أن الذرات:",o:["محفوظة (لا تُخلق ولا تفنى)","تُصنع من العدم","تُدمّر","تتحول إلى طاقة فقط"]}},
   {s:PHYS,l:"F",sub:"Types of reactions",a:0,en:{q:"When two or more substances combine to form one new substance, the reaction is a:",o:["synthesis (combination)","decomposition","single change of state","filtration"]},ar:{q:"عندما تتحد مادتان أو أكثر لتكوين مادة جديدة واحدة، يكون التفاعل:",o:["اتحادًا (بناءً)","تفككًا","تغيّر حالة فقط","ترشيحًا"]}},
   {s:PHYS,l:"C",sub:"Electric charges",a:0,en:{q:"Two objects with the same type of electric charge will:",o:["repel each other","stick together forever","turn into magnets","disappear"]},ar:{q:"جسمان لهما النوع نفسه من الشحنة الكهربائية:",o:["يتنافران","يلتصقان للأبد","يتحوّلان إلى مغناطيسات","يختفيان"]}},
   {s:PHYS,l:"C",sub:"Optics",a:0,en:{q:"A concave (curved-in) mirror can be used to:",o:["focus light to a point","only make sound","cool a room","measure mass"]},ar:{q:"يمكن استخدام المرآة المقعّرة لـ:",o:["تجميع الضوء في نقطة","إصدار الصوت فقط","تبريد الغرفة","قياس الكتلة"]}},
   {s:LIFE,l:"F",sub:"Digestion",a:0,en:{q:"Digestion begins in the:",o:["mouth","lungs","kidneys","heart"]},ar:{q:"يبدأ الهضم في:",o:["الفم","الرئتين","الكليتين","القلب"]}},
   {s:LIFE,l:"C",sub:"Respiratory system",a:0,en:{q:"The tiny air sacs in the lungs where gases are exchanged are the:",o:["alveoli","neurons","nephrons","villi"]},ar:{q:"الأكياس الهوائية الصغيرة في الرئتين حيث يتم تبادل الغازات تُسمى:",o:["الحويصلات الهوائية","الخلايا العصبية","الوحدات الكلوية","الزغابات"]}},
   {s:LIFE,l:"H",sub:"Heredity",a:0,en:{q:"A section of DNA that carries the instructions for a trait is a:",o:["gene","bone","muscle","vitamin"]},ar:{q:"جزء من الحمض النووي (DNA) يحمل تعليمات صفة ما يُسمى:",o:["جينًا","عظمًا","عضلة","فيتامينًا"]}},
   {s:LIFE,l:"C",sub:"Adaptations",a:0,en:{q:"Over many generations, helpful traits become more common in a species through:",o:["natural selection","a single meal","one hot day","painting"]},ar:{q:"عبر أجيال كثيرة تصبح الصفات المفيدة أكثر شيوعًا في النوع عن طريق:",o:["الانتخاب الطبيعي","وجبة واحدة","يوم حار واحد","الطلاء"]}},
   {s:EARTH,l:"C",sub:"Volcanoes",a:0,en:{q:"Melted rock below the Earth's surface is called:",o:["magma","fossil","mineral vein","glacier"]},ar:{q:"الصخر المنصهر تحت سطح الأرض يُسمى:",o:["الصهارة (ماغما)","الأحفورة","العرق المعدني","النهر الجليدي"]}},
   {s:EARTH,l:"H",sub:"Geologic time",a:0,en:{q:"The era known as the 'Age of Dinosaurs' is the:",o:["Mesozoic","Paleozoic","Cenozoic","Precambrian only"]},ar:{q:"العصر المعروف بـ'عصر الديناصورات' هو:",o:["الحقب الوسطى (الميزوزوي)","الحقب القديمة (الباليوزوي)","الحقب الحديثة (السينوزوي)","ما قبل الكامبري فقط"]}}
  ]);
})();
