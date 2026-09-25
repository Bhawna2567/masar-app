/* Adeptly — Arabic weekly practice.
   • SCI_ACTIVITY_LIB: activity libraries for the 12 Science / Physics / Chemistry skills (these skills
     previously had none, so every task read "Practice activity"). Each entry is [English, Arabic].
   • ACT_AR: English activity text → Arabic (Math library + science library + the old fallback), used to
     DISPLAY Arabic for Arabic-medium classes. Plans keep the English text as the stable internal key,
     so existing plans and ticked progress are untouched.
   • PR_AR: Arabic interface strings for the Weekly Folders, Plan, Goals and practice screens. */
var SCI_ACTIVITY_LIB = {
  "Life Science": [
    ["Answer 10 questions on living things and their needs, then write one new fact you learned","أجب عن 10 أسئلة عن الكائنات الحية واحتياجاتها، ثم اكتب حقيقة جديدة تعلّمتها"],
    ["Review the explanation, then answer 10 questions on life cycles and food chains","راجع الشرح، ثم أجب عن 10 أسئلة عن دورات الحياة والسلاسل الغذائية"],
    ["Answer 10 questions on cells and body systems and correct any mistakes","أجب عن 10 أسئلة عن الخلايا وأجهزة الجسم وصحّح أي خطأ"],
    ["Practise 10 questions on adaptation and survival, then name one adaptation you know","تدرّب على 10 أسئلة عن التكيّف والبقاء، ثم اذكر تكيّفًا واحدًا تعرفه"],
    ["Draw a simple food chain, then answer 10 Life Science questions","ارسم سلسلة غذائية بسيطة، ثم أجب عن 10 أسئلة في علوم الحياة"],
    ["Answer 10 questions on classifying living things and explain one choice in a sentence","أجب عن 10 أسئلة عن تصنيف الكائنات الحية وفسّر إحدى إجاباتك في جملة"],
    ["Answer 10 mixed Life Science questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في علوم الحياة — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Life Science questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في علوم الحياة"]
  ],
  "Physical Science": [
    ["Answer 10 questions on matter and its states, then list 3 examples of each state","أجب عن 10 أسئلة عن المادة وحالاتها، ثم اذكر 3 أمثلة لكل حالة"],
    ["Review the explanation, then answer 10 questions on forces and motion","راجع الشرح، ثم أجب عن 10 أسئلة عن القوى والحركة"],
    ["Answer 10 questions on energy and how it changes form","أجب عن 10 أسئلة عن الطاقة وتحوّلاتها"],
    ["Practise 10 questions on electricity and magnetism","تدرّب على 10 أسئلة عن الكهرباء والمغناطيسية"],
    ["Answer 10 questions on physical and chemical changes, then give one example of each","أجب عن 10 أسئلة عن التغيّرات الفيزيائية والكيميائية، ثم أعطِ مثالًا على كلٍّ منهما"],
    ["Answer 10 questions on heat, light and sound","أجب عن 10 أسئلة عن الحرارة والضوء والصوت"],
    ["Answer 10 mixed Physical Science questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في العلوم الفيزيائية — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Physical Science questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في العلوم الفيزيائية"]
  ],
  "Earth & Space Science": [
    ["Answer 10 questions on weather and climate, then describe today's weather","أجب عن 10 أسئلة عن الطقس والمناخ، ثم صِف طقس اليوم"],
    ["Review the explanation, then answer 10 questions on rocks, minerals and soil","راجع الشرح، ثم أجب عن 10 أسئلة عن الصخور والمعادن والتربة"],
    ["Answer 10 questions on the water cycle and draw a labelled diagram","أجب عن 10 أسئلة عن دورة الماء وارسم مخططًا مع تسمية أجزائه"],
    ["Practise 10 questions on the Sun, Earth, Moon and the solar system","تدرّب على 10 أسئلة عن الشمس والأرض والقمر والمجموعة الشمسية"],
    ["Answer 10 questions on earthquakes, volcanoes and Earth's changing surface","أجب عن 10 أسئلة عن الزلازل والبراكين وتغيّر سطح الأرض"],
    ["Answer 10 questions on natural resources and how to protect them","أجب عن 10 أسئلة عن الموارد الطبيعية وكيفية المحافظة عليها"],
    ["Answer 10 mixed Earth & Space questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في علوم الأرض والفضاء — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Earth & Space questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في علوم الأرض والفضاء"]
  ],
  "Scientific Inquiry & Technology": [
    ["Answer 10 questions on the scientific method, then write your own hypothesis","أجب عن 10 أسئلة عن الطريقة العلمية، ثم اكتب فرضيتك الخاصة"],
    ["Review the explanation, then answer 10 questions on variables and fair tests","راجع الشرح، ثم أجب عن 10 أسئلة عن المتغيرات والاختبار العادل"],
    ["Answer 10 questions on measuring tools and units","أجب عن 10 أسئلة عن أدوات القياس ووحداته"],
    ["Practise 10 questions on reading data tables and graphs","تدرّب على 10 أسئلة عن قراءة جداول البيانات والرسوم البيانية"],
    ["Answer 10 questions on the design process and technology","أجب عن 10 أسئلة عن عملية التصميم والتقنية"],
    ["Plan a simple experiment (question, variables, steps), then answer 10 questions","خطّط لتجربة بسيطة (السؤال، المتغيرات، الخطوات)، ثم أجب عن 10 أسئلة"],
    ["Answer 10 mixed Scientific Inquiry questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في الاستقصاء العلمي — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Scientific Inquiry questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في الاستقصاء العلمي"]
  ],
  "Measurement & Units": [
    ["Answer 10 questions on SI base units and derived units","أجب عن 10 أسئلة عن الوحدات الأساسية والمشتقة في النظام الدولي"],
    ["Review the explanation, then answer 10 questions on precision and accuracy","راجع الشرح، ثم أجب عن 10 أسئلة عن الدقة والضبط"],
    ["Practise 10 questions on converting units, showing each step","تدرّب على 10 أسئلة في تحويل الوحدات مع إظهار كل خطوة"],
    ["Answer 10 questions on significant figures and measurement","أجب عن 10 أسئلة عن الأرقام المعنوية والقياس"],
    ["Answer 10 questions on plotting and reading graphs of data","أجب عن 10 أسئلة عن رسم البيانات وقراءة الرسوم البيانية"],
    ["Check the units in 5 equations, then answer 10 Measurement questions","تحقّق من الوحدات في 5 معادلات، ثم أجب عن 10 أسئلة في القياس"],
    ["Answer 10 mixed Measurement & Units questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في القياس والوحدات — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Measurement & Units questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في القياس والوحدات"]
  ],
  "Motion & Forces": [
    ["Answer 10 questions on position, distance and displacement","أجب عن 10 أسئلة عن الموقع والمسافة والإزاحة"],
    ["Review the explanation, then answer 10 questions on speed and velocity","راجع الشرح، ثم أجب عن 10 أسئلة عن السرعة القياسية والمتجهة"],
    ["Practise 10 questions on acceleration and motion graphs","تدرّب على 10 أسئلة عن التسارع ومنحنيات الحركة"],
    ["Answer 10 questions on Newton's laws of motion","أجب عن 10 أسئلة عن قوانين نيوتن للحركة"],
    ["Draw a force diagram for 2 objects, then answer 10 questions on forces","ارسم مخطط القوى لجسمين، ثم أجب عن 10 أسئلة عن القوى"],
    ["Answer 10 questions on weight, friction and net force","أجب عن 10 أسئلة عن الوزن والاحتكاك والقوة المحصلة"],
    ["Answer 10 mixed Motion & Forces questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في الحركة والقوى — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Motion & Forces questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في الحركة والقوى"]
  ],
  "Waves & Sound": [
    ["Answer 10 questions on wave properties: amplitude, wavelength, frequency","أجب عن 10 أسئلة عن خصائص الموجة: السعة والطول الموجي والتردد"],
    ["Review the explanation, then answer 10 questions on wave speed (v = fλ)","راجع الشرح، ثم أجب عن 10 أسئلة عن سرعة الموجة (v = fλ)"],
    ["Practise 10 questions on transverse and longitudinal waves","تدرّب على 10 أسئلة عن الموجات المستعرضة والطولية"],
    ["Answer 10 questions on sound: pitch, loudness and speed","أجب عن 10 أسئلة عن الصوت: درجته وشدّته وسرعته"],
    ["Answer 10 questions on reflection and interference of waves","أجب عن 10 أسئلة عن انعكاس الموجات وتداخلها"],
    ["Sketch a labelled wave, then answer 10 Waves & Sound questions","ارسم موجة مع تسمية أجزائها، ثم أجب عن 10 أسئلة في الموجات والصوت"],
    ["Answer 10 mixed Waves & Sound questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في الموجات والصوت — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Waves & Sound questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في الموجات والصوت"]
  ],
  "Light & Optics": [
    ["Answer 10 questions on the reflection of light and plane mirrors","أجب عن 10 أسئلة عن انعكاس الضوء والمرايا المستوية"],
    ["Review the explanation, then answer 10 questions on curved mirrors","راجع الشرح، ثم أجب عن 10 أسئلة عن المرايا الكروية"],
    ["Practise 10 questions on refraction and Snell's law","تدرّب على 10 أسئلة عن الانكسار وقانون سنل"],
    ["Answer 10 questions on convex and concave lenses","أجب عن 10 أسئلة عن العدسات المحدبة والمقعرة"],
    ["Draw 2 ray diagrams, then answer 10 Light & Optics questions","ارسم مخططين للأشعة، ثم أجب عن 10 أسئلة في الضوء والبصريات"],
    ["Answer 10 questions on total internal reflection and colour","أجب عن 10 أسئلة عن الانعكاس الكلي الداخلي والألوان"],
    ["Answer 10 mixed Light & Optics questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في الضوء والبصريات — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Light & Optics questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في الضوء والبصريات"]
  ],
  "Matter & Atomic Structure": [
    ["Answer 10 questions on protons, neutrons and electrons","أجب عن 10 أسئلة عن البروتونات والنيوترونات والإلكترونات"],
    ["Review the explanation, then answer 10 questions on atomic number and mass number","راجع الشرح، ثم أجب عن 10 أسئلة عن العدد الذري والعدد الكتلي"],
    ["Practise 10 questions on electron configuration","تدرّب على 10 أسئلة عن التوزيع الإلكتروني"],
    ["Answer 10 questions on the periodic table and its trends","أجب عن 10 أسئلة عن الجدول الدوري وتدرّج خصائصه"],
    ["Answer 10 questions on isotopes and elements","أجب عن 10 أسئلة عن النظائر والعناصر"],
    ["Draw the structure of 3 atoms, then answer 10 questions","ارسم تركيب 3 ذرات، ثم أجب عن 10 أسئلة"],
    ["Answer 10 mixed Matter & Atomic Structure questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في المادة وتركيب الذرة — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Matter & Atomic Structure questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في المادة وتركيب الذرة"]
  ],
  "Bonding & Compounds": [
    ["Answer 10 questions on ions and ionic bonds","أجب عن 10 أسئلة عن الأيونات والروابط الأيونية"],
    ["Review the explanation, then answer 10 questions on covalent bonds","راجع الشرح، ثم أجب عن 10 أسئلة عن الروابط التساهمية"],
    ["Practise 10 questions on naming compounds and writing formulas","تدرّب على 10 أسئلة في تسمية المركبات وكتابة صيغها"],
    ["Answer 10 questions on metallic bonds and properties of metals","أجب عن 10 أسئلة عن الروابط الفلزية وخصائص الفلزات"],
    ["Answer 10 questions on molecular shape and polarity","أجب عن 10 أسئلة عن أشكال الجزيئات وقطبيتها"],
    ["Draw dot diagrams for 3 compounds, then answer 10 questions","ارسم تمثيل النقاط لـ3 مركبات، ثم أجب عن 10 أسئلة"],
    ["Answer 10 mixed Bonding & Compounds questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في الروابط والمركبات — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Bonding & Compounds questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في الروابط والمركبات"]
  ],
  "Reactions & Stoichiometry": [
    ["Answer 10 questions on balancing chemical equations","أجب عن 10 أسئلة عن موازنة المعادلات الكيميائية"],
    ["Review the explanation, then answer 10 questions on types of reactions","راجع الشرح، ثم أجب عن 10 أسئلة عن أنواع التفاعلات"],
    ["Practise 10 questions on the mole and molar mass","تدرّب على 10 أسئلة عن المول والكتلة المولية"],
    ["Answer 10 questions on stoichiometry calculations, showing each step","أجب عن 10 أسئلة في الحسابات الكيميائية مع إظهار كل خطوة"],
    ["Answer 10 questions on reaction rates, energy and equilibrium","أجب عن 10 أسئلة عن سرعة التفاعل والطاقة والاتزان"],
    ["Answer 10 questions on acids, bases and pH","أجب عن 10 أسئلة عن الأحماض والقواعد والرقم الهيدروجيني"],
    ["Answer 10 mixed Reactions & Stoichiometry questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في التفاعلات والحسابات الكيميائية — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 Reactions & Stoichiometry questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في التفاعلات والحسابات الكيميائية"]
  ],
  "States, Solutions & Organic": [
    ["Answer 10 questions on states of matter and phase changes","أجب عن 10 أسئلة عن حالات المادة وتحوّلاتها"],
    ["Review the explanation, then answer 10 questions on the gas laws","راجع الشرح، ثم أجب عن 10 أسئلة عن قوانين الغازات"],
    ["Practise 10 questions on mixtures, solutions and concentration","تدرّب على 10 أسئلة عن المخاليط والمحاليل والتركيز"],
    ["Answer 10 questions on solubility and factors affecting solvation","أجب عن 10 أسئلة عن الذائبية والعوامل المؤثرة في الذوبان"],
    ["Answer 10 questions on hydrocarbons and organic compounds","أجب عن 10 أسئلة عن الهيدروكربونات والمركبات العضوية"],
    ["Draw the structure of 3 hydrocarbons, then answer 10 questions","ارسم الصيغة البنائية لـ3 هيدروكربونات، ثم أجب عن 10 أسئلة"],
    ["Answer 10 mixed States, Solutions & Organic questions — aim for 8 or more correct","أجب عن 10 أسئلة متنوعة في الحالات والمحاليل والكيمياء العضوية — استهدف 8 إجابات صحيحة أو أكثر"],
    ["Beat your last score: retry 10 States, Solutions & Organic questions","تفوّق على نتيجتك السابقة: أعد محاولة 10 أسئلة في الحالات والمحاليل والكيمياء العضوية"]
  ]
};

var ACT_AR = {
  "Practice activity":"نشاط تدريبي",
  // Number & Operations
  "Complete 20 mixed multi-digit +/− problems":"حُلّ 20 مسألة جمع وطرح متنوعة لأعداد متعددة المنازل",
  "Solve 15 multiplication and division problems":"حُلّ 15 مسألة ضرب وقسمة",
  "Practise 10 fraction operations (add, subtract, multiply)":"تدرّب على 10 عمليات على الكسور (جمع، طرح، ضرب)",
  "Convert 10 numbers between fractions, decimals, and percents":"حوّل 10 أعداد بين الكسور العادية والعشرية والنسب المئوية",
  "Solve 8 word problems involving rates or ratios":"حُلّ 8 مسائل كلامية على المعدلات أو النسب",
  "Order and compare 10 rational numbers":"رتّب وقارن 10 أعداد نسبية",
  "Round 10 numbers to a given place value":"قرّب 10 أعداد إلى منزلة محددة",
  "Find the GCF and LCM of 6 number pairs":"أوجد القاسم المشترك الأكبر والمضاعف المشترك الأصغر لـ6 أزواج من الأعداد",
  "Simplify 8 fractions to lowest terms":"بسّط 8 كسور إلى أبسط صورة",
  "Solve 6 multi-step word problems":"حُلّ 6 مسائل كلامية متعددة الخطوات",
  // Algebra
  "Solve 10 one- and two-step equations":"حُلّ 10 معادلات من خطوة واحدة وخطوتين",
  "Evaluate 8 algebraic expressions":"أوجد قيمة 8 عبارات جبرية",
  "Continue and describe 6 patterns or sequences":"أكمل وصِف 6 أنماط أو متتابعات",
  "Build and complete an input/output (function) table":"أنشئ جدول مدخلات ومخرجات (دالة) وأكمله",
  "Solve 6 inequalities and graph the solutions":"حُلّ 6 متباينات ومثّل حلولها بيانيًا",
  "Write an expression or equation for 6 word problems":"اكتب عبارة أو معادلة لـ6 مسائل كلامية",
  "Graph 4 linear equations":"مثّل 4 معادلات خطية بيانيًا",
  "Simplify 8 expressions by combining like terms":"بسّط 8 عبارات بجمع الحدود المتشابهة",
  "Solve 6 proportion problems":"حُلّ 6 مسائل تناسب",
  "Factor 6 simple expressions":"حلّل 6 عبارات بسيطة إلى عواملها",
  // Geometry
  "Find the perimeter and area of 8 figures":"أوجد محيط ومساحة 8 أشكال",
  "Find the surface area or volume of 6 solids":"أوجد المساحة السطحية أو الحجم لـ6 مجسّمات",
  "Classify 10 shapes or angles by their properties":"صنّف 10 أشكال أو زوايا حسب خصائصها",
  "Measure and draw 5 shapes accurately":"قِس وارسم 5 أشكال بدقة",
  "Solve 5 problems using the Pythagorean theorem or similarity":"حُلّ 5 مسائل باستخدام نظرية فيثاغورس أو التشابه",
  "Plot and identify 8 points on the coordinate plane":"عيّن وحدّد 8 نقاط في المستوى الإحداثي",
  "Calculate missing angles in 6 figures":"احسب الزوايا المجهولة في 6 أشكال",
  "Find missing side lengths in 5 right triangles":"أوجد أطوال الأضلاع المجهولة في 5 مثلثات قائمة",
  "Identify the transformation in 6 figures":"حدّد التحويل الهندسي في 6 أشكال",
  "Find the volume of 5 prisms or cylinders":"أوجد حجم 5 منشورات أو أسطوانات",
  // Data & Probability
  "Read and answer questions on 3 graphs":"اقرأ 3 تمثيلات بيانية وأجب عن الأسئلة",
  "Find the mean, median, mode, and range of 4 data sets":"أوجد المتوسط والوسيط والمنوال والمدى لـ4 مجموعات بيانات",
  "Calculate the probability of 8 simple events":"احسب احتمال 8 أحداث بسيطة",
  "Build a bar graph or line plot from given data":"أنشئ تمثيلًا بالأعمدة أو بالنقاط من بيانات معطاة",
  "Interpret a scatter plot and describe the trend":"فسّر شكل انتشار وصِف الاتجاه",
  "Compare two data sets and write 2 conclusions":"قارن بين مجموعتي بيانات واكتب استنتاجين",
  "Create a frequency table from raw data":"أنشئ جدولًا تكراريًا من بيانات خام",
  "Find the probability of 6 compound events":"أوجد احتمال 6 أحداث مركّبة",
  "Calculate the mean of 5 larger data sets":"احسب المتوسط لـ5 مجموعات بيانات أكبر",
  "Draw and interpret a box plot":"ارسم وفسّر تمثيل الصندوق وطرفيه"
};
(function(){ for(var k in SCI_ACTIVITY_LIB){ SCI_ACTIVITY_LIB[k].forEach(function(p){ ACT_AR[p[0]]=p[1]; }); } })();

var PR_AR = {
  weeklyFolders:"المجلدات الأسبوعية", weeklySub:"يحتوي كل فصل على مجلدات أسبوعية. أنجز الأنشطة وسيتم احتساب تقدّمك تلقائيًا.",
  term:"الفصل الدراسي", week:"الأسبوع", done:"مكتمل", practice:"▶ تدرّب", doneBtn:"✓ مكتمل", activityOf:"نشاط الأسبوع",
  learnFirst:"تعلّم أولًا", openLesson:"افتح الشرح",
  practiceTitle:"تدريب", activity:"النشاط:", practiseWith:"تدرّب على هذه المهارة من خلال الأسئلة أدناه.",
  whenFinish:"عند الانتهاء يُسجَّل النشاط مكتملًا ويتحدّث تقدّمك تلقائيًا.", completeBelow:"أكمل النشاط أدناه.",
  quickExpl:"📘 شرح سريع —", check:"تحقّق من الإجابات", cancel:"إلغاء", finish:"✓ إنهاء وتسجيل الإنجاز", close:"إغلاق",
  scored:"نتيجتك", great:"عمل رائع! 🎉", keep:"واصل التدريب — يمكنك المحاولة مرة أخرى في أي وقت.", yourAnswer:"إجابتك", q:"س",
  noBank:"لم تتم إضافة بنك أسئلة تدريبية لهذه المهارة بعد.",
  planTitle:"خطة تطوير المهارات", planSub:"3 فصول · تستهدف مهارات التركيز", focus:"مهارة التركيز", activities:"الأنشطة",
  goalsTitle:"أهدافي", goalsSub:"تُحدَّد تلقائيًا من اختبارك التشخيصي. حقّق كل هدف بإنجاز الأنشطة المطابقة في خطتك الأسبوعية.",
  startNow:"الآن", t1:"هدف الفصل 1", t2:"هدف الفصل 2", yearT:"هدف نهاية العام", ofDone:"من الأنشطة مكتمل",
  foldersPer:"مجلدات/أسبوع", weeks:"أسابيع"
};
if (typeof window !== "undefined") { window.SCI_ACTIVITY_LIB = SCI_ACTIVITY_LIB; window.ACT_AR = ACT_AR; window.PR_AR = PR_AR; }
