/* Adeptly — student-facing skill tutorials (BILINGUAL: English + Arabic).
   Short "learn it first" explanations shown before the weekly practice exercises. Each entry is
   keyed by the SAME skill name used in the diagnostic/plan, so the folder's tutorial always matches
   the skill written on that folder.
   SKILL_TUTORIALS[skillName] = { title, html }  (html contains an English block then an Arabic block). */
if (typeof SKILL_TUTORIALS === "undefined") { var SKILL_TUTORIALS = {}; }
(function(){
  var eg='style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 12px;margin:8px 0"';
  var tip='style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px 12px;margin:8px 0;font-size:13px"';
  // Compose one bilingual entry. Arabic block is right-to-left.
  function t(name, tEn, htmlEn, tAr, htmlAr){
    SKILL_TUTORIALS[name] = { title: tEn + "  ·  " + tAr,
      html: '<div dir="ltr">'+htmlEn+'</div>'
          + '<hr style="border:none;border-top:1px solid #d1d5db;margin:16px 0">'
          + '<div dir="rtl" style="text-align:right;font-family:Tahoma,\'Segoe UI\',Arial,sans-serif">'
          + '<h4 style="margin:0 0 8px;font-size:15px">🌐 '+tAr+'</h4>'+htmlAr+'</div>' };
  }

  /* ================= ENGLISH — READING ================= */
  t("Reading","Reading Comprehension",
    '<p>Reading comprehension means <b>understanding what a text is really saying</b>.</p>'+
    '<ul><li><b>Skim first</b> for the general idea, then read again slowly.</li>'+
    '<li><b>Find the main idea</b> — what is the whole passage mostly about?</li>'+
    '<li><b>Look back for details</b> — the answer is usually a specific line in the text.</li>'+
    '<li><b>Guess new words from the sentence around them.</b></li></ul>'+
    '<div '+eg+'><b>Example:</b> "The streets were wet and people carried umbrellas." → We can tell it had been raining.</div>'+
    '<div '+tip+'>💡 Tip: point to the exact words that prove your answer.</div>',
    "الفهم القرائي",
    '<p>الفهم القرائي يعني <b>أن تفهم ما يقصده النص حقًا</b>، وليس مجرد قراءة الكلمات.</p>'+
    '<ul><li><b>اقرأ قراءة سريعة أولًا</b> لتعرف الفكرة العامة، ثم اقرأ بتأنٍّ مرة أخرى.</li>'+
    '<li><b>ابحث عن الفكرة الرئيسة</b> — عمَّ يتحدث النص في معظمه؟</li>'+
    '<li><b>ارجع إلى النص للتفاصيل</b> — تكون الإجابة عادةً في سطر محدد.</li>'+
    '<li><b>خمّن معنى الكلمة الجديدة</b> من الجملة المحيطة بها.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> «كانت الشوارع مبتلّة ويحمل الناس المظلات» ← نستنتج أنها كانت تمطر.</div>'+
    '<div '+tip+'>💡 نصيحة: أشِر إلى الكلمات التي تثبت إجابتك.</div>');

  /* ================= ENGLISH — VOCABULARY ================= */
  t("Vocabulary","Vocabulary",
    '<p>Vocabulary is about <b>knowing what words mean</b> and choosing the right word.</p>'+
    '<ul><li><b>Synonyms</b> = similar meaning (happy ≈ glad).</li>'+
    '<li><b>Antonyms</b> = opposites (begin ↔ end).</li>'+
    '<li><b>Context</b> — the other words tell you the meaning.</li></ul>'+
    '<div '+eg+'><b>Example:</b> "The room was so <b>dim</b> we could barely see." → <i>dim</i> means <b>dark</b>.</div>'+
    '<div '+tip+'>💡 Tip: put your answer back in the sentence — it should still make sense.</div>',
    "المفردات",
    '<p>المفردات تعني <b>معرفة معاني الكلمات</b> واختيار الكلمة المناسبة.</p>'+
    '<ul><li><b>المرادفات</b> = كلمات متقاربة في المعنى (سعيد ≈ مسرور).</li>'+
    '<li><b>الأضداد</b> = كلمات متعاكسة (يبدأ ↔ ينتهي).</li>'+
    '<li><b>السياق</b> — الكلمات المجاورة تدلّك على المعنى.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> «كانت الغرفة <b>معتمة</b> حتى بالكاد نرى» ← <i>معتمة</i> تعني <b>مظلمة</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: أعِد الكلمة إلى الجملة؛ يجب أن يبقى المعنى صحيحًا.</div>');

  /* ================= ENGLISH — GRAMMAR ================= */
  t("Grammar","Grammar",
    '<p>Grammar is the set of <b>rules that make a sentence correct</b>.</p>'+
    '<ul><li><b>Verb tense</b> must match the time (yesterday → "went").</li>'+
    '<li><b>Agreement</b> — "She <b>runs</b>", not "She run".</li>'+
    '<li><b>Articles</b> — a book, an apple.</li>'+
    '<li><b>Punctuation</b> — capital letters, full stops, commas.</li></ul>'+
    '<div '+eg+'><b>Example:</b> "Yesterday she ___ to school." → <b>walked</b>.</div>'+
    '<div '+tip+'>💡 Tip: read it aloud — the correct one usually sounds right.</div>',
    "القواعد",
    '<p>القواعد هي <b>القوانين التي تجعل الجملة صحيحة</b>.</p>'+
    '<ul><li><b>زمن الفعل</b> يجب أن يوافق الزمن (أمس ← الفعل الماضي).</li>'+
    '<li><b>المطابقة</b> بين الفاعل والفعل — "She <b>runs</b>" وليس "She run".</li>'+
    '<li><b>أدوات التعريف/التنكير</b> — a book، an apple.</li>'+
    '<li><b>علامات الترقيم</b> — الحروف الكبيرة والنقاط والفواصل.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> "Yesterday she ___ to school." ← <b>walked</b> (زمن ماضٍ بسبب "yesterday").</div>'+
    '<div '+tip+'>💡 نصيحة: اقرأ الجملة بصوتٍ مسموع؛ غالبًا ما تبدو الإجابة الصحيحة سليمة.</div>');

  /* ================= ENGLISH — WRITING ================= */
  t("Writing","Writing",
    '<p>Good writing is <b>clear, organised and complete</b>.</p>'+
    '<ul><li><b>Plan</b> a beginning, middle and end.</li>'+
    '<li><b>Topic sentence</b> starts each paragraph.</li>'+
    '<li><b>Linking words</b> — first, next, however, finally.</li>'+
    '<li><b>Check</b> capital letters, full stops and spelling.</li></ul>'+
    '<div '+eg+'><b>Opinion plan:</b> 1) your view · 2) reason + example · 3) another reason · 4) conclusion.</div>'+
    '<div '+tip+'>💡 Tip: use full sentences and vary how they begin.</div>',
    "الكتابة",
    '<p>الكتابة الجيدة <b>واضحة ومنظّمة ومكتملة</b>.</p>'+
    '<ul><li><b>خطّط</b> لبداية ووسط ونهاية قبل أن تبدأ.</li>'+
    '<li><b>جملة رئيسة</b> تبدأ بها كل فقرة.</li>'+
    '<li><b>كلمات الربط</b> — أولًا، ثم، لكن، أخيرًا.</li>'+
    '<li><b>راجِع</b> الحروف الكبيرة والنقاط والإملاء.</li></ul>'+
    '<div '+eg+'><b>خطة رأي:</b> ١) رأيك · ٢) سبب مع مثال · ٣) سبب آخر · ٤) خاتمة.</div>'+
    '<div '+tip+'>💡 نصيحة: استخدم جملًا كاملة ونوِّع في بداياتها.</div>');

  /* ================= MATHS ================= */
  t("Number & Operations","Number & Operations",
    '<p><b>Calculating with numbers</b> — the four operations, fractions and percentages.</p>'+
    '<ul><li><b>Order of operations:</b> brackets, then × ÷, then + −.</li>'+
    '<li><b>Percentages</b> — "of" means multiply: 25% of 80 = 20.</li>'+
    '<li><b>Fractions</b> — simplify by dividing top and bottom by the same number.</li></ul>'+
    '<div '+eg+'><b>Example:</b> 30% of 200 = 30 ÷ 100 × 200 = <b>60</b>.</div>'+
    '<div '+tip+'>💡 Tip: estimate first to catch silly answers.</div>',
    "الأعداد والعمليات",
    '<p><b>الحساب بالأعداد</b> — العمليات الأربع والكسور والنِّسَب المئوية.</p>'+
    '<ul><li><b>ترتيب العمليات:</b> الأقواس، ثم × ÷، ثم + −.</li>'+
    '<li><b>النسبة المئوية</b> — «من» تعني الضرب: 25% من 80 = 20.</li>'+
    '<li><b>الكسور</b> — بسِّطها بقسمة البسط والمقام على العدد نفسه.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> 30% من 200 = 30 ÷ 100 × 200 = <b>60</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: قدِّر الناتج أولًا لتكتشف الأخطاء.</div>');

  t("Algebra","Algebra",
    '<p>Algebra uses <b>letters for unknown numbers</b> and finds their value.</p>'+
    '<ul><li><b>Keep both sides balanced.</b></li>'+
    '<li><b>Undo</b> operations in reverse.</li>'+
    '<li><b>Substitute</b> the number for the letter.</li></ul>'+
    '<div '+eg+'><b>Example:</b> 2x + 3 = 11 → 2x = 8 → x = <b>4</b>.</div>'+
    '<div '+tip+'>💡 Tip: check by putting your answer back in.</div>',
    "الجبر",
    '<p>الجبر يستخدم <b>حروفًا بدل الأعداد المجهولة</b> ويجد قيمتها.</p>'+
    '<ul><li><b>حافظ على توازن طرفي المعادلة.</b></li>'+
    '<li><b>تراجع</b> عن العمليات بترتيب عكسي.</li>'+
    '<li><b>عوِّض</b> بالعدد مكان الحرف.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> 2x + 3 = 11 ← 2x = 8 ← x = <b>4</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: تحقّق بإعادة القيمة إلى المعادلة.</div>');

  t("Geometry","Geometry",
    '<p>Geometry is about <b>shapes, angles and measurement</b>.</p>'+
    '<ul><li><b>Angles</b> on a straight line = 180°; around a point = 360°.</li>'+
    '<li><b>Area:</b> rectangle = length × width; triangle = ½ × base × height.</li>'+
    '<li><b>Perimeter</b> = distance around a shape.</li></ul>'+
    '<div '+eg+'><b>Example:</b> Rectangle 5 × 3 → area <b>15 cm²</b>, perimeter <b>16 cm</b>.</div>'+
    '<div '+tip+'>💡 Tip: always write the unit (cm, cm²).</div>',
    "الهندسة",
    '<p>الهندسة تتناول <b>الأشكال والزوايا والقياس</b>.</p>'+
    '<ul><li><b>الزوايا</b> على خط مستقيم = 180°، وحول نقطة = 360°.</li>'+
    '<li><b>المساحة:</b> المستطيل = الطول × العرض؛ المثلث = ½ × القاعدة × الارتفاع.</li>'+
    '<li><b>المحيط</b> = المسافة حول الشكل.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> مستطيل 5 × 3 ← المساحة <b>15 سم²</b>، المحيط <b>16 سم</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: اكتب الوحدة دائمًا (سم، سم²).</div>');

  t("Data & Probability","Data & Probability",
    '<p>Handling <b>data</b> (averages, graphs) and <b>chance</b>.</p>'+
    '<ul><li><b>Mean</b> = total ÷ how many. <b>Median</b> = middle value. <b>Mode</b> = most common. <b>Range</b> = biggest − smallest.</li>'+
    '<li><b>Probability</b> = favourable ÷ total (0 to 1).</li></ul>'+
    '<div '+eg+'><b>Example:</b> 4, 6, 6, 8 → mean <b>6</b>, range <b>4</b>. One red of 4 → P = <b>1/4</b>.</div>'+
    '<div '+tip+'>💡 Tip: put numbers in order before finding the median.</div>',
    "البيانات والاحتمالات",
    '<p>التعامل مع <b>البيانات</b> (المتوسطات والرسوم) و<b>الاحتمال</b>.</p>'+
    '<ul><li><b>المتوسط</b> = المجموع ÷ العدد. <b>الوسيط</b> = القيمة الوسطى. <b>المنوال</b> = الأكثر تكرارًا. <b>المدى</b> = الأكبر − الأصغر.</li>'+
    '<li><b>الاحتمال</b> = المرغوب ÷ الكل (من 0 إلى 1).</li></ul>'+
    '<div '+eg+'><b>مثال:</b> 4، 6، 6، 8 ← المتوسط <b>6</b>، المدى <b>4</b>. كرة حمراء من 4 ← الاحتمال <b>1/4</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: رتِّب الأعداد قبل إيجاد الوسيط.</div>');

  /* ================= PHYSICS ================= */
  t("Measurement & Units","Measurement & Units",
    '<p>Science measures things using <b>agreed units</b>.</p>'+
    '<ul><li>Length → <b>metre</b>, mass → <b>kilogram</b>, time → <b>second</b>.</li>'+
    '<li>1 km = 1000 m.</li>'+
    '<li><b>Speed</b> = distance ÷ time (m/s).</li></ul>'+
    '<div '+eg+'><b>Example:</b> 100 m in 20 s → speed = <b>5 m/s</b>.</div>'+
    '<div '+tip+'>💡 Tip: check the units match before calculating.</div>',
    "القياس والوحدات",
    '<p>يقيس العلم الأشياء باستخدام <b>وحدات متفق عليها</b>.</p>'+
    '<ul><li>الطول ← <b>المتر</b>، الكتلة ← <b>الكيلوغرام</b>، الزمن ← <b>الثانية</b>.</li>'+
    '<li>1 كم = 1000 م.</li>'+
    '<li><b>السرعة</b> = المسافة ÷ الزمن (م/ث).</li></ul>'+
    '<div '+eg+'><b>مثال:</b> 100 م في 20 ث ← السرعة = <b>5 م/ث</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: تأكد من توافق الوحدات قبل الحساب.</div>');

  t("Motion & Forces","Motion & Forces",
    '<p><b>How things move and why.</b></p>'+
    '<ul><li>A <b>force</b> is a push or pull (newtons, N).</li>'+
    '<li><b>Acceleration</b> = change in velocity ÷ time.</li>'+
    '<li><b>Balanced forces</b> → no change; <b>unbalanced</b> → speed up/slow/turn.</li></ul>'+
    '<div '+eg+'><b>Example:</b> 0 → 20 m/s in 4 s → acceleration = <b>5 m/s²</b>.</div>'+
    '<div '+tip+'>💡 Tip: on a velocity–time graph, the slope is the acceleration.</div>',
    "الحركة والقوى",
    '<p><b>كيف تتحرك الأجسام ولماذا.</b></p>'+
    '<ul><li><b>القوة</b> دفع أو سحب (وحدتها النيوتن N).</li>'+
    '<li><b>التسارع</b> = التغير في السرعة ÷ الزمن.</li>'+
    '<li><b>القوى المتزنة</b> ← لا تغيّر في الحركة؛ <b>غير المتزنة</b> ← تسارع أو تباطؤ أو انعطاف.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> من 0 إلى 20 م/ث خلال 4 ث ← التسارع = <b>5 م/ث²</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: في منحنى السرعة–الزمن، الميل يمثّل التسارع.</div>');

  t("Waves & Sound","Waves & Sound",
    '<p>Waves carry <b>energy</b> from place to place.</p>'+
    '<ul><li><b>Frequency</b> (Hz), <b>wavelength</b>, <b>amplitude</b> (loudness).</li>'+
    '<li><b>Wave speed = frequency × wavelength.</b></li>'+
    '<li>Sound needs a <b>medium</b>; higher frequency = higher pitch.</li></ul>'+
    '<div '+eg+'><b>Example:</b> 5 Hz × 2 m → speed = <b>10 m/s</b>.</div>'+
    '<div '+tip+'>💡 Tip: learn v = f × λ and rearrange it.</div>',
    "الموجات والصوت",
    '<p>تنقل الموجات <b>الطاقة</b> من مكان إلى آخر.</p>'+
    '<ul><li><b>التردد</b> (هرتز)، <b>الطول الموجي</b>، <b>السعة</b> (العلوّ/الجهارة).</li>'+
    '<li><b>سرعة الموجة = التردد × الطول الموجي.</b></li>'+
    '<li>يحتاج الصوت إلى <b>وسط</b>؛ التردد الأعلى = طبقة صوت أعلى.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> 5 هرتز × 2 م ← السرعة = <b>10 م/ث</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: احفظ ع = ت × ل وأعِد ترتيبها.</div>');

  t("Light & Optics","Light & Optics",
    '<p>Light is a wave that usually travels in <b>straight lines</b>.</p>'+
    '<ul><li><b>Reflection</b> — angle of incidence = angle of reflection.</li>'+
    '<li><b>Refraction</b> — light bends when it enters a new material.</li>'+
    '<li>A <b>prism</b> splits white light into colours.</li></ul>'+
    '<div '+eg+'><b>Example:</b> A ray at 30° to the normal reflects at <b>30°</b>.</div>'+
    '<div '+tip+'>💡 Tip: angles are measured from the normal.</div>',
    "الضوء والبصريات",
    '<p>الضوء موجة تنتقل عادةً في <b>خطوط مستقيمة</b>.</p>'+
    '<ul><li><b>الانعكاس</b> — زاوية السقوط = زاوية الانعكاس.</li>'+
    '<li><b>الانكسار</b> — ينحني الضوء عند دخوله وسطًا جديدًا.</li>'+
    '<li><b>المنشور</b> يحلّل الضوء الأبيض إلى ألوان.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> شعاع بزاوية 30° عن العمود ينعكس بزاوية <b>30°</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: تُقاس الزوايا من العمود المقام.</div>');

  /* ================= SCIENCE ================= */
  t("Life Science","Life Science",
    '<p>Life science studies <b>living things</b>.</p>'+
    '<ul><li>The <b>cell</b> is the basic unit of life.</li>'+
    '<li>Living things need energy, grow, reproduce and respond.</li>'+
    '<li><b>Food chains</b> show how energy passes along.</li></ul>'+
    '<div '+eg+'><b>Example:</b> grass → grasshopper → bird (energy flow).</div>'+
    '<div '+tip+'>💡 Tip: plants make their own food; animals eat others.</div>',
    "علوم الحياة",
    '<p>تدرس علوم الحياة <b>الكائنات الحية</b>.</p>'+
    '<ul><li><b>الخلية</b> هي وحدة بناء الحياة.</li>'+
    '<li>الكائنات الحية تحتاج طاقة وتنمو وتتكاثر وتستجيب.</li>'+
    '<li><b>السلاسل الغذائية</b> تبيّن انتقال الطاقة.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> عشب ← جرادة ← طائر (انتقال الطاقة).</div>'+
    '<div '+tip+'>💡 نصيحة: النباتات تصنع غذاءها، والحيوانات تأكل غيرها.</div>');

  t("Physical Science","Physical Science",
    '<p>About <b>matter and energy</b> and how they change.</p>'+
    '<ul><li><b>States:</b> solid, liquid, gas — changed by heat.</li>'+
    '<li><b>Physical change</b> (melting) reverses; <b>chemical change</b> (burning) makes a new substance.</li></ul>'+
    '<div '+eg+'><b>Example:</b> ice → water → steam are physical changes.</div>'+
    '<div '+tip+'>💡 Tip: a new substance means a chemical change.</div>',
    "العلوم الفيزيائية",
    '<p>تتناول <b>المادة والطاقة</b> وكيف تتغيران.</p>'+
    '<ul><li><b>الحالات:</b> صلبة وسائلة وغازية — تتغيّر بالتسخين.</li>'+
    '<li><b>التغير الفيزيائي</b> (الانصهار) قابل للعكس؛ <b>التغير الكيميائي</b> (الاحتراق) يكوّن مادة جديدة.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> ثلج ← ماء ← بخار تغيّرات فيزيائية.</div>'+
    '<div '+tip+'>💡 نصيحة: ظهور مادة جديدة يعني تغيّرًا كيميائيًا.</div>');

  t("Earth & Space Science","Earth & Space Science",
    '<p>Studies the <b>Earth, weather and space</b>.</p>'+
    '<ul><li>The <b>water cycle:</b> evaporation → condensation → rain → collection.</li>'+
    '<li>Earth orbits the Sun (a year) and spins (day and night).</li></ul>'+
    '<div '+eg+'><b>Example:</b> Sun heats water → evaporates → clouds → rain.</div>'+
    '<div '+tip+'>💡 Tip: learn the water-cycle steps in order.</div>',
    "علوم الأرض والفضاء",
    '<p>تدرس <b>الأرض والطقس والفضاء</b>.</p>'+
    '<ul><li><b>دورة الماء:</b> تبخُّر ← تكاثف ← مطر ← تجمُّع.</li>'+
    '<li>تدور الأرض حول الشمس (سنة) وحول نفسها (الليل والنهار).</li></ul>'+
    '<div '+eg+'><b>مثال:</b> تسخّن الشمس الماء ← يتبخّر ← غيوم ← مطر.</div>'+
    '<div '+tip+'>💡 نصيحة: احفظ خطوات دورة الماء بالترتيب.</div>');

  t("Scientific Inquiry & Technology","Scientific Inquiry & Technology",
    '<p><b>How scientists investigate</b> and design solutions.</p>'+
    '<ul><li>Question → hypothesis → fair test → observe → conclude.</li>'+
    '<li>A <b>fair test</b> changes only one thing.</li></ul>'+
    '<div '+eg+'><b>Example:</b> testing soils — keep water, light and pot the same; change only the soil.</div>'+
    '<div '+tip+'>💡 Tip: the one thing you change is the variable.</div>',
    "الاستقصاء العلمي والتقنية",
    '<p><b>كيف يبحث العلماء</b> ويصمّمون الحلول.</p>'+
    '<ul><li>سؤال ← فرضية ← اختبار عادل ← ملاحظة ← استنتاج.</li>'+
    '<li><b>الاختبار العادل</b> يغيّر عاملًا واحدًا فقط.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> اختبار التربة — ثبّت الماء والضوء والإناء، وغيّر التربة فقط.</div>'+
    '<div '+tip+'>💡 نصيحة: العامل الذي تغيّره هو «المتغير المستقل».</div>');

  /* ================= CHEMISTRY ================= */
  t("Matter & Atomic Structure","Matter & Atomic Structure",
    '<p>Everything is made of <b>atoms</b>.</p>'+
    '<ul><li>An atom has a <b>nucleus</b> (protons + neutrons) with <b>electrons</b> around it.</li>'+
    '<li>Protons +, electrons −, neutrons neutral.</li>'+
    '<li>The <b>periodic table</b> is ordered by atomic number.</li></ul>'+
    '<div '+eg+'><b>Example:</b> Carbon has 6 protons → atomic number <b>6</b>.</div>'+
    '<div '+tip+'>💡 Tip: in a neutral atom, electrons = protons.</div>',
    "المادة وتركيب الذرة",
    '<p>كل شيء مكوَّن من <b>ذرّات</b>.</p>'+
    '<ul><li>للذرة <b>نواة</b> (بروتونات + نيوترونات) وحولها <b>إلكترونات</b>.</li>'+
    '<li>البروتون موجب، والإلكترون سالب، والنيوترون متعادل.</li>'+
    '<li><b>الجدول الدوري</b> مرتّب حسب العدد الذري.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> الكربون له 6 بروتونات ← عدده الذري <b>6</b>.</div>'+
    '<div '+tip+'>💡 نصيحة: في الذرة المتعادلة، الإلكترونات = البروتونات.</div>');

  t("Bonding & Compounds","Bonding & Compounds",
    '<p>Atoms join by <b>bonding</b> to form compounds.</p>'+
    '<ul><li><b>Ionic</b> — a metal gives electrons to a non-metal (NaCl).</li>'+
    '<li><b>Covalent</b> — non-metals share electrons (H₂O).</li></ul>'+
    '<div '+eg+'><b>Example:</b> Water is H₂O — hydrogen shares electrons with oxygen.</div>'+
    '<div '+tip+'>💡 Tip: metal + non-metal → ionic; non-metal + non-metal → covalent.</div>',
    "الروابط والمركبات",
    '<p>ترتبط الذرات بـ<b>روابط</b> لتكوين المركبات.</p>'+
    '<ul><li><b>الرابطة الأيونية</b> — يمنح الفلز إلكتروناته للّافلز (NaCl).</li>'+
    '<li><b>الرابطة التساهمية</b> — تتشارك اللافلزات الإلكترونات (H₂O).</li></ul>'+
    '<div '+eg+'><b>مثال:</b> الماء H₂O — يتشارك الهيدروجين الإلكترونات مع الأكسجين.</div>'+
    '<div '+tip+'>💡 نصيحة: فلز + لافلز ← أيونية؛ لافلز + لافلز ← تساهمية.</div>');

  t("Reactions & Stoichiometry","Reactions & Stoichiometry",
    '<p>Reactions <b>rearrange atoms</b> to make new substances.</p>'+
    '<ul><li>Equations must be <b>balanced</b> (same atoms on both sides).</li>'+
    '<li>Reactants → products.</li></ul>'+
    '<div '+eg+'><b>Example:</b> 2H₂ + O₂ → 2H₂O (4 H and 2 O each side).</div>'+
    '<div '+tip+'>💡 Tip: balance using the big numbers, not the small ones.</div>',
    "التفاعلات والحسابات الكيميائية",
    '<p>تُعيد التفاعلات <b>ترتيب الذرّات</b> لتكوين مواد جديدة.</p>'+
    '<ul><li>يجب أن تكون المعادلة <b>موزونة</b> (العدد نفسه من الذرات على الطرفين).</li>'+
    '<li>المتفاعلات ← النواتج.</li></ul>'+
    '<div '+eg+'><b>مثال:</b> 2H₂ + O₂ → 2H₂O (4 هيدروجين و2 أكسجين على كل طرف).</div>'+
    '<div '+tip+'>💡 نصيحة: وازِن بتغيير الأعداد الكبيرة (المعاملات) لا الصغيرة.</div>');

  t("States, Solutions & Organic","States, Solutions & Organic",
    '<p>Covers <b>states of matter, solutions and carbon chemistry</b>.</p>'+
    '<ul><li>Heating a gas (fixed volume) raises its pressure.</li>'+
    '<li>A <b>solution</b> = solute dissolved in a solvent (salt in water).</li>'+
    '<li><b>Organic</b> chemistry is the chemistry of carbon (e.g. CH₄).</li></ul>'+
    '<div '+eg+'><b>Example:</b> salt (solute) dissolves in water (solvent) → a solution.</div>'+
    '<div '+tip+'>💡 Tip: "like dissolves like".</div>',
    "الحالات والمحاليل والكيمياء العضوية",
    '<p>تشمل <b>حالات المادة والمحاليل وكيمياء الكربون</b>.</p>'+
    '<ul><li>تسخين الغاز (بحجم ثابت) يرفع ضغطه.</li>'+
    '<li><b>المحلول</b> = مذاب ذائب في مذيب (ملح في ماء).</li>'+
    '<li><b>الكيمياء العضوية</b> هي كيمياء الكربون (مثل CH₄).</li></ul>'+
    '<div '+eg+'><b>مثال:</b> يذوب الملح (المذاب) في الماء (المذيب) ← محلول.</div>'+
    '<div '+tip+'>💡 نصيحة: «المتشابهات تذوب في المتشابهات».</div>');

  if(typeof window!=="undefined") window.SKILL_TUTORIALS=SKILL_TUTORIALS;
})();
