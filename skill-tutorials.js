/* Adeptly — student-facing skill tutorials (BILINGUAL: English + Arabic).
   Detailed "learn it first" mini-lessons shown before the weekly practice exercises. Each entry is
   keyed by the EXACT skill name used in the diagnostic/plan, so the tutorial on every folder matches
   the skill written on that folder.
   SKILL_TUTORIALS[skillName] = { title, html }  (html = detailed English block, then Arabic block). */
if (typeof SKILL_TUTORIALS === "undefined") { var SKILL_TUTORIALS = {}; }
(function(){
  var EG='style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 12px;margin:8px 0"';
  var TIP='style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:9px 12px;margin:8px 0"';
  var WARN='style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:9px 12px;margin:8px 0"';
  var H='style="margin:14px 0 4px;font-size:14px"';
  function t(name, tEn, htmlEn, tAr, htmlAr){
    SKILL_TUTORIALS[name] = { title: tEn + "  ·  " + tAr,
      html: '<div dir="ltr">'+htmlEn+'</div>'
          + '<hr style="border:none;border-top:2px solid #cbd5e1;margin:18px 0">'
          + '<div dir="rtl" style="text-align:right;font-family:Tahoma,\'Segoe UI\',Arial,sans-serif">'
          + '<h4 style="margin:0 0 8px;font-size:16px">🌐 '+tAr+'</h4>'+htmlAr+'</div>' };
  }

  /* ============================ ENGLISH — READING ============================ */
  t("Reading","Reading Comprehension",
    '<p>Reading comprehension means <b>understanding the meaning of a text</b>, not just reading the words. Good readers read for a purpose and keep asking: <i>What is this telling me?</i></p>'+
    '<h4 '+H+'>How to read a passage well</h4>'+
    '<ol><li><b>Skim it once</b> quickly to get the general idea and topic.</li>'+
    '<li><b>Read it again slowly</b>, sentence by sentence.</li>'+
    '<li>For each question, <b>go back to the text</b> and find the exact words that give the answer.</li>'+
    '<li>Watch for <b>signal words</b>: <i>but, however, because, for example, first, finally</i>.</li></ol>'+
    '<h4 '+H+'>The four question types</h4>'+
    '<ul><li><b>Main idea</b> — what the whole passage is mostly about.</li>'+
    '<li><b>Detail</b> — a fact stated directly in the text (who, what, where, when).</li>'+
    '<li><b>Vocabulary</b> — the meaning of a word, using the sentence around it.</li>'+
    '<li><b>Inference</b> — something the text suggests but does not say directly.</li></ul>'+
    '<div '+EG+'><b>Example passage:</b> "The streets were wet and shining. People hurried by under umbrellas, and the sky was grey."<br>'+
    '<b>Detail —</b> What were people carrying? → <i>umbrellas.</i><br>'+
    '<b>Inference —</b> What was the weather like? → <i>It had been raining</i> (the text never says "rain", but wet streets + umbrellas prove it).</div>'+
    '<div '+EG+'><b>Vocabulary in context:</b> "The old dog was <b>weary</b> after the long walk and fell asleep at once."<br>'+
    '"weary" here means <b>very tired</b> — the clues are "long walk" and "fell asleep".</div>'+
    '<div '+WARN+'><b>Common mistake:</b> choosing an answer that is true in real life but is <b>not in the passage</b>. Only pick what the text actually says.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> before you choose, put your finger on the line in the text that proves your answer. If you cannot find it, think again.</div>',
    "الفهم القرائي",
    '<p>الفهم القرائي يعني <b>فهم معنى النص</b> وليس مجرد قراءة الكلمات. القارئ الجيد يقرأ بهدف ويسأل دائمًا: <i>ماذا يخبرني هذا النص؟</i></p>'+
    '<h4 '+H+'>كيف تقرأ النص جيدًا</h4>'+
    '<ol><li><b>اقرأه قراءة سريعة</b> لتعرف الفكرة العامة والموضوع.</li>'+
    '<li><b>ثم اقرأه بتأنٍّ</b> جملةً جملة.</li>'+
    '<li>لكل سؤال <b>ارجع إلى النص</b> وابحث عن الكلمات التي تعطي الإجابة.</li>'+
    '<li>انتبه إلى <b>كلمات الإشارة</b>: <i>لكن، مع ذلك، لأن، على سبيل المثال، أولًا، أخيرًا</i>.</li></ol>'+
    '<h4 '+H+'>أنواع الأسئلة الأربعة</h4>'+
    '<ul><li><b>الفكرة الرئيسة</b> — عمَّ يتحدث النص في معظمه.</li>'+
    '<li><b>التفصيل</b> — معلومة مذكورة صراحةً (مَن، ماذا، أين، متى).</li>'+
    '<li><b>المفردات</b> — معنى كلمة من خلال سياق الجملة.</li>'+
    '<li><b>الاستنتاج</b> — ما يلمّح إليه النص دون أن يذكره مباشرة.</li></ul>'+
    '<div '+EG+'><b>مثال نص:</b> «كانت الشوارع مبتلّة لامعة، ويسرع الناس تحت المظلات، والسماء رمادية».<br>'+
    '<b>تفصيل —</b> ماذا كان يحمل الناس؟ ← <i>المظلات.</i><br>'+
    '<b>استنتاج —</b> كيف كان الطقس؟ ← <i>كانت تمطر</i> (لم يُذكر «المطر»، لكن الشوارع المبتلّة والمظلات تدلّان على ذلك).</div>'+
    '<div '+EG+'><b>مفردة في سياق:</b> «كان الكلب العجوز <b>مُنهَكًا</b> بعد المشي الطويل فنام على الفور».<br>'+
    'هنا «مُنهَك» تعني <b>متعبًا جدًا</b> — والدليل «المشي الطويل» و«نام على الفور».</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> اختيار إجابة صحيحة في الواقع لكنها <b>ليست في النص</b>. اختر فقط ما ذكره النص.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> قبل أن تختار، ضع إصبعك على السطر الذي يثبت إجابتك؛ إن لم تجده فأعِد التفكير.</div>');

  /* ============================ ENGLISH — VOCABULARY ============================ */
  t("Vocabulary","Vocabulary",
    '<p>Vocabulary means <b>knowing what words mean</b> and picking the best word for a sentence. A bigger vocabulary helps you read, write and speak more clearly.</p>'+
    '<h4 '+H+'>Four ways to work out a word</h4>'+
    '<ul><li><b>Synonyms</b> — words with a similar meaning: <i>happy = glad = cheerful</i>.</li>'+
    '<li><b>Antonyms</b> — opposites: <i>begin ↔ end, brave ↔ afraid</i>.</li>'+
    '<li><b>Context clues</b> — the other words in the sentence.</li>'+
    '<li><b>Word parts</b> — prefixes and suffixes: <i>un-</i> = not, <i>re-</i> = again, <i>-less</i> = without, <i>-ful</i> = full of.</li></ul>'+
    '<div '+EG+'><b>Context example:</b> "The soup was so <b>bland</b> that she added salt and pepper."<br>'+
    '"bland" must mean <b>having little taste</b> — because she needed to add flavour.</div>'+
    '<div '+EG+'><b>Word-parts example:</b> <i>un + kind = unkind</i> (not kind). <i>re + build = rebuild</i> (build again). <i>care + less = careless</i> (without care).</div>'+
    '<div '+EG+'><b>Synonym vs antonym:</b> A synonym of "quick" is <i>fast</i>; an antonym of "quick" is <i>slow</i>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> choosing a word that looks similar but has a different meaning (e.g. <i>quiet</i> vs <i>quite</i>). Read the whole sentence first.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> replace the word with your answer and read the sentence again — if the meaning stays the same, you are right.</div>',
    "المفردات",
    '<p>المفردات تعني <b>معرفة معاني الكلمات</b> واختيار أنسب كلمة للجملة. اتّساع حصيلتك اللغوية يساعدك على القراءة والكتابة والتحدث بوضوح.</p>'+
    '<h4 '+H+'>أربع طرق لمعرفة الكلمة</h4>'+
    '<ul><li><b>المرادفات</b> — كلمات متقاربة المعنى: <i>سعيد = مسرور = فَرِح</i>.</li>'+
    '<li><b>الأضداد</b> — كلمات متعاكسة: <i>يبدأ ↔ ينتهي، شجاع ↔ خائف</i>.</li>'+
    '<li><b>قرائن السياق</b> — الكلمات المجاورة في الجملة.</li>'+
    '<li><b>أجزاء الكلمة</b> — البادئات واللواحق: <i>un-</i> = غير، <i>re-</i> = إعادة، <i>-less</i> = بدون، <i>-ful</i> = مليء بـ.</li></ul>'+
    '<div '+EG+'><b>مثال سياق:</b> "The soup was so <b>bland</b> that she added salt." ← «bland» تعني <b>قليلة الطعم</b>، لأنها احتاجت إضافة نكهة.</div>'+
    '<div '+EG+'><b>مثال أجزاء الكلمة:</b> <i>un + kind = unkind</i> (غير لطيف)، <i>re + build = rebuild</i> (يبني ثانيةً)، <i>care + less = careless</i> (بلا اهتمام).</div>'+
    '<div '+EG+'><b>مرادف مقابل ضد:</b> مرادف "quick" هو <i>fast</i>، وضدّه <i>slow</i>.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> اختيار كلمة تشبه غيرها في الشكل وتختلف في المعنى (مثل <i>quiet</i> و<i>quite</i>). اقرأ الجملة كاملة أولًا.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> ضع إجابتك مكان الكلمة وأعِد القراءة؛ إن بقي المعنى نفسه فإجابتك صحيحة.</div>');

  /* ============================ ENGLISH — GRAMMAR ============================ */
  t("Grammar","Grammar",
    '<p>Grammar is the set of <b>rules that make a sentence correct and clear</b>. Small changes can change the meaning, so grammar matters.</p>'+
    '<h4 '+H+'>Key rules to remember</h4>'+
    '<ul><li><b>Verb tense</b> — the verb must match the time. <i>Now:</i> "She <b>walks</b>." <i>Yesterday:</i> "She <b>walked</b>." <i>Tomorrow:</i> "She <b>will walk</b>."</li>'+
    '<li><b>Subject–verb agreement</b> — a singular subject takes a singular verb. "He <b>plays</b>" (not "He play"); "They <b>play</b>".</li>'+
    '<li><b>Articles</b> — use <i>a</i> before a consonant sound and <i>an</i> before a vowel sound: <i>a book, a car, an apple, an hour</i>.</li>'+
    '<li><b>Pronouns</b> must match: "Sara lost <b>her</b> bag"; "The boys lost <b>their</b> bags".</li>'+
    '<li><b>Punctuation</b> — start with a capital letter, end with a full stop/question mark, and use apostrophes for owning: <i>the dog\'s bone</i>.</li></ul>'+
    '<div '+EG+'><b>Tense example:</b> "Last night we ___ a film." → <b>watched</b> (past, because of "last night").</div>'+
    '<div '+EG+'><b>Agreement example:</b> "One of the students ___ absent." → <b>is</b> (the subject is "one", which is singular).</div>'+
    '<div '+EG+'><b>Article example:</b> "I waited for ___ hour." → <b>an</b> (the "h" is silent, so it sounds like a vowel).</div>'+
    '<div '+WARN+'><b>Common mistake:</b> matching the verb to the nearest noun instead of the real subject: "The box of apples <b>is</b> heavy" (not "are") — the subject is "box", not "apples".</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> read the sentence aloud with your choice. The correct answer usually sounds right.</div>',
    "القواعد",
    '<p>القواعد هي <b>القوانين التي تجعل الجملة صحيحة وواضحة</b>. تغيير بسيط قد يغيّر المعنى، لذا فالقواعد مهمة.</p>'+
    '<h4 '+H+'>قواعد أساسية تذكّرها</h4>'+
    '<ul><li><b>زمن الفعل</b> يوافق الزمن. <i>الآن:</i> "She <b>walks</b>." <i>أمس:</i> "She <b>walked</b>." <i>غدًا:</i> "She <b>will walk</b>."</li>'+
    '<li><b>مطابقة الفاعل والفعل</b> — الفاعل المفرد يأخذ فعلًا مفردًا: "He <b>plays</b>" و"They <b>play</b>".</li>'+
    '<li><b>أدوات a / an</b> — <i>a</i> قبل صوت ساكن و<i>an</i> قبل صوت متحرك: <i>a book, an apple, an hour</i>.</li>'+
    '<li><b>الضمائر</b> يجب أن تطابق: "Sara lost <b>her</b> bag"، "The boys lost <b>their</b> bags".</li>'+
    '<li><b>الترقيم</b> — ابدأ بحرف كبير، وانتهِ بنقطة أو علامة استفهام، واستخدم الفاصلة العليا للملكية: <i>the dog\'s bone</i>.</li></ul>'+
    '<div '+EG+'><b>مثال زمن:</b> "Last night we ___ a film." ← <b>watched</b> (ماضٍ بسبب "last night").</div>'+
    '<div '+EG+'><b>مثال مطابقة:</b> "One of the students ___ absent." ← <b>is</b> (الفاعل "one" مفرد).</div>'+
    '<div '+EG+'><b>مثال أداة:</b> "I waited for ___ hour." ← <b>an</b> (حرف الـ h صامت فيُلفظ كصوت متحرك).</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> مطابقة الفعل لأقرب اسم بدل الفاعل الحقيقي: "The box of apples <b>is</b> heavy" (وليس "are")؛ فالفاعل "box" لا "apples".</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> اقرأ الجملة بصوتٍ مسموع مع اختيارك؛ غالبًا ما تبدو الإجابة الصحيحة سليمة.</div>');

  /* ============================ ENGLISH — WRITING ============================ */
  t("Writing","Writing",
    '<p>Writing shares your ideas clearly. Strong writing is <b>planned, organised into paragraphs, and checked</b>.</p>'+
    '<h4 '+H+'>Steps to write well</h4>'+
    '<ol><li><b>Plan</b> — jot down your main ideas and put them in order (beginning → middle → end).</li>'+
    '<li><b>Topic sentence</b> — begin each paragraph with its main point.</li>'+
    '<li><b>Add detail</b> — support each point with a reason or an example.</li>'+
    '<li><b>Link ideas</b> — use <i>first, next, also, however, because, finally</i>.</li>'+
    '<li><b>Check</b> — capital letters, full stops, spelling, and that every sentence is complete.</li></ol>'+
    '<div '+EG+'><b>Opinion paragraph frame:</b><br>1) <i>I think schools should…</i> (your view)<br>2) <i>One reason is… For example,…</i><br>3) <i>Another reason is…</i><br>4) <i>For these reasons, I believe…</i> (conclusion)</div>'+
    '<div '+EG+'><b>Weak → strong sentence:</b> "The trip was good." → "The school trip to the science museum was exciting because we did real experiments."</div>'+
    '<div '+WARN+'><b>Common mistake:</b> one long paragraph with no plan. Break your writing into clear paragraphs, one idea each.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> vary how sentences begin, and read your work aloud at the end to catch mistakes.</div>',
    "الكتابة",
    '<p>الكتابة توصِّل أفكارك بوضوح. الكتابة القوية <b>مخطَّطة ومنظَّمة في فقرات ومراجَعة</b>.</p>'+
    '<h4 '+H+'>خطوات الكتابة الجيدة</h4>'+
    '<ol><li><b>خطِّط</b> — دوِّن أفكارك الرئيسة ورتّبها (بداية ← وسط ← نهاية).</li>'+
    '<li><b>جملة رئيسة</b> — ابدأ كل فقرة بفكرتها الأساسية.</li>'+
    '<li><b>أضِف تفاصيل</b> — ادعم كل فكرة بسبب أو مثال.</li>'+
    '<li><b>اربط الأفكار</b> — استخدم <i>أولًا، ثم، أيضًا، لكن، لأن، أخيرًا</i>.</li>'+
    '<li><b>راجِع</b> — الحروف الكبيرة والنقاط والإملاء واكتمال الجمل.</li></ol>'+
    '<div '+EG+'><b>هيكل فقرة رأي:</b><br>١) <i>أرى أن المدارس ينبغي…</i> (رأيك)<br>٢) <i>أحد الأسباب… على سبيل المثال…</i><br>٣) <i>سبب آخر…</i><br>٤) <i>لهذه الأسباب أعتقد…</i> (خاتمة)</div>'+
    '<div '+EG+'><b>جملة ضعيفة ← قوية:</b> «كانت الرحلة جيدة» ← «كانت الرحلة المدرسية إلى متحف العلوم ممتعة لأننا أجرينا تجارب حقيقية».</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> فقرة واحدة طويلة بلا تخطيط. قسِّم كتابتك إلى فقرات واضحة، لكل فكرة فقرة.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> نوِّع بدايات الجمل، واقرأ عملك بصوتٍ مسموع في النهاية لاكتشاف الأخطاء.</div>');

  /* ============================ MATHS — NUMBER & OPERATIONS ============================ */
  t("Number & Operations","Number & Operations",
    '<p>This is <b>calculating with numbers</b>: the four operations, fractions, decimals and percentages.</p>'+
    '<h4 '+H+'>Key ideas</h4>'+
    '<ul><li><b>Order of operations (BODMAS):</b> Brackets → Orders (powers) → Division/Multiplication → Addition/Subtraction.</li>'+
    '<li><b>Percentage of an amount</b> — turn the % into a fraction of 100 and multiply.</li>'+
    '<li><b>Simplify a fraction</b> — divide the top and bottom by the same number.</li></ul>'+
    '<div '+EG+'><b>Order of operations:</b> 2 + 3 × 4 = 2 + 12 = <b>14</b> (do × before +, not left to right).</div>'+
    '<div '+EG+'><b>Percentage:</b> 30% of 200 = 30 ÷ 100 × 200 = 0.3 × 200 = <b>60</b>.</div>'+
    '<div '+EG+'><b>Simplify:</b> 8/12 → divide top and bottom by 4 → <b>2/3</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> working left to right and ignoring BODMAS. 2 + 3 × 4 is <b>14</b>, not 20.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> estimate first. 30% is a little less than a third, so an answer of 60 out of 200 makes sense.</div>',
    "الأعداد والعمليات",
    '<p>هذا هو <b>الحساب بالأعداد</b>: العمليات الأربع والكسور والأعداد العشرية والنِّسَب المئوية.</p>'+
    '<h4 '+H+'>أفكار أساسية</h4>'+
    '<ul><li><b>ترتيب العمليات:</b> الأقواس ← الأُسُس ← القسمة/الضرب ← الجمع/الطرح.</li>'+
    '<li><b>نسبة مئوية من كمية</b> — حوِّل % إلى كسر من 100 ثم اضرب.</li>'+
    '<li><b>تبسيط كسر</b> — اقسم البسط والمقام على العدد نفسه.</li></ul>'+
    '<div '+EG+'><b>ترتيب العمليات:</b> 2 + 3 × 4 = 2 + 12 = <b>14</b> (نفّذ × قبل +).</div>'+
    '<div '+EG+'><b>نسبة مئوية:</b> 30% من 200 = 30 ÷ 100 × 200 = 0.3 × 200 = <b>60</b>.</div>'+
    '<div '+EG+'><b>تبسيط:</b> 8/12 ← نقسم على 4 ← <b>2/3</b>.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> الحساب من اليسار لليمين وتجاهل ترتيب العمليات. الناتج <b>14</b> لا 20.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> قدِّر الناتج أولًا. 30% أقل قليلًا من الثلث، فـ 60 من 200 ناتج منطقي.</div>');

  /* ============================ MATHS — ALGEBRA ============================ */
  t("Algebra","Algebra",
    '<p>Algebra uses <b>letters to stand for unknown numbers</b>. Solving means finding the value of the letter.</p>'+
    '<h4 '+H+'>The golden rule</h4>'+
    '<p>Whatever you do to one side of the equals sign, do to the <b>other side too</b>, so it stays balanced. Undo operations in reverse order.</p>'+
    '<div '+EG+'><b>Two-step equation:</b> 2x + 3 = 11<br>Step 1: subtract 3 from both sides → 2x = 8<br>Step 2: divide both sides by 2 → <b>x = 4</b><br>Check: 2×4 + 3 = 11 ✓</div>'+
    '<div '+EG+'><b>Substitute:</b> If f(x) = 3x + 1, then f(5) = 3×5 + 1 = <b>16</b>.</div>'+
    '<div '+EG+'><b>Collect like terms:</b> 4x + 2x − x = <b>5x</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> changing only one side. If you subtract 3, subtract it from <b>both</b> sides.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> always check your answer by putting it back into the original equation.</div>',
    "الجبر",
    '<p>الجبر يستخدم <b>حروفًا بدل أعداد مجهولة</b>. والحل يعني إيجاد قيمة الحرف.</p>'+
    '<h4 '+H+'>القاعدة الذهبية</h4>'+
    '<p>ما تفعله بطرفٍ من المعادلة افعله <b>بالطرف الآخر</b> ليبقى التوازن. وتراجع عن العمليات بترتيب عكسي.</p>'+
    '<div '+EG+'><b>معادلة من خطوتين:</b> 2x + 3 = 11<br>الخطوة 1: اطرح 3 من الطرفين ← 2x = 8<br>الخطوة 2: اقسم الطرفين على 2 ← <b>x = 4</b><br>التحقق: 2×4 + 3 = 11 ✓</div>'+
    '<div '+EG+'><b>تعويض:</b> إذا كان f(x) = 3x + 1 فإن f(5) = 3×5 + 1 = <b>16</b>.</div>'+
    '<div '+EG+'><b>جمع الحدود المتشابهة:</b> 4x + 2x − x = <b>5x</b>.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> تغيير طرف واحد فقط. إذا طرحت 3 فاطرحها من <b>الطرفين</b>.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> تحقّق دائمًا بإعادة القيمة إلى المعادلة الأصلية.</div>');

  /* ============================ MATHS — GEOMETRY ============================ */
  t("Geometry","Geometry",
    '<p>Geometry is about <b>shapes, angles, space and measurement</b>.</p>'+
    '<h4 '+H+'>Facts to know</h4>'+
    '<ul><li>Angles on a <b>straight line add to 180°</b>; angles <b>around a point add to 360°</b>.</li>'+
    '<li>A triangle\'s three angles add to <b>180°</b>.</li>'+
    '<li><b>Area:</b> rectangle = length × width; triangle = ½ × base × height.</li>'+
    '<li><b>Perimeter</b> = the total distance around the edge.</li></ul>'+
    '<div '+EG+'><b>Missing angle:</b> Two angles on a straight line are 110° and x. Then x = 180 − 110 = <b>70°</b>.</div>'+
    '<div '+EG+'><b>Area of a rectangle:</b> 5 cm × 3 cm = <b>15 cm²</b>. Perimeter = 2 × (5 + 3) = <b>16 cm</b>.</div>'+
    '<div '+EG+'><b>Area of a triangle:</b> base 6 cm, height 4 cm → ½ × 6 × 4 = <b>12 cm²</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> mixing up area and perimeter, or forgetting the unit. Area uses square units (cm²).</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> draw the shape and label every side before you calculate.</div>',
    "الهندسة",
    '<p>الهندسة تتناول <b>الأشكال والزوايا والمساحة والقياس</b>.</p>'+
    '<h4 '+H+'>حقائق مهمة</h4>'+
    '<ul><li>الزوايا على <b>خط مستقيم مجموعها 180°</b>، وحول <b>نقطة مجموعها 360°</b>.</li>'+
    '<li>مجموع زوايا المثلث <b>180°</b>.</li>'+
    '<li><b>المساحة:</b> المستطيل = الطول × العرض؛ المثلث = ½ × القاعدة × الارتفاع.</li>'+
    '<li><b>المحيط</b> = مجموع أطوال الحواف.</li></ul>'+
    '<div '+EG+'><b>زاوية مجهولة:</b> زاويتان على خط مستقيم 110° و x، إذن x = 180 − 110 = <b>70°</b>.</div>'+
    '<div '+EG+'><b>مساحة مستطيل:</b> 5 سم × 3 سم = <b>15 سم²</b>، والمحيط = 2 × (5 + 3) = <b>16 سم</b>.</div>'+
    '<div '+EG+'><b>مساحة مثلث:</b> القاعدة 6 سم والارتفاع 4 سم ← ½ × 6 × 4 = <b>12 سم²</b>.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> الخلط بين المساحة والمحيط أو نسيان الوحدة. المساحة بوحدات مربعة (سم²).</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> ارسم الشكل واكتب أطوال الأضلاع قبل الحساب.</div>');

  /* ============================ MATHS — DATA & PROBABILITY ============================ */
  t("Data & Probability","Data & Probability",
    '<p>This covers <b>handling data</b> (averages and graphs) and <b>probability</b> (how likely something is).</p>'+
    '<h4 '+H+'>The four averages</h4>'+
    '<ul><li><b>Mean</b> = add all the values, then divide by how many.</li>'+
    '<li><b>Median</b> = the middle value when they are in order.</li>'+
    '<li><b>Mode</b> = the value that appears most often.</li>'+
    '<li><b>Range</b> = largest − smallest.</li></ul>'+
    '<h4 '+H+'>Probability</h4>'+
    '<p>Probability = favourable outcomes ÷ total outcomes. It goes from <b>0</b> (impossible) to <b>1</b> (certain).</p>'+
    '<div '+EG+'><b>Averages:</b> data 4, 6, 6, 8 → mean = (4+6+6+8) ÷ 4 = 24 ÷ 4 = <b>6</b>; mode = <b>6</b>; range = 8 − 4 = <b>4</b>.</div>'+
    '<div '+EG+'><b>Median (odd list):</b> 3, 7, 9 in order → middle = <b>7</b>.</div>'+
    '<div '+EG+'><b>Probability:</b> a bag has 4 balls, 1 red → P(red) = <b>1/4</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> finding the median without ordering the numbers first. Always sort them.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> for an even list, the median is the mean of the two middle numbers.</div>',
    "البيانات والاحتمالات",
    '<p>يشمل <b>التعامل مع البيانات</b> (المتوسطات والرسوم) و<b>الاحتمال</b> (مدى إمكانية الحدوث).</p>'+
    '<h4 '+H+'>المقاييس الأربعة</h4>'+
    '<ul><li><b>المتوسط الحسابي</b> = مجموع القيم ÷ عددها.</li>'+
    '<li><b>الوسيط</b> = القيمة الوسطى بعد الترتيب.</li>'+
    '<li><b>المنوال</b> = الأكثر تكرارًا.</li>'+
    '<li><b>المدى</b> = الأكبر − الأصغر.</li></ul>'+
    '<h4 '+H+'>الاحتمال</h4>'+
    '<p>الاحتمال = عدد النواتج المرغوبة ÷ إجمالي النواتج، ويتراوح من <b>0</b> (مستحيل) إلى <b>1</b> (مؤكَّد).</p>'+
    '<div '+EG+'><b>المتوسطات:</b> 4، 6، 6، 8 ← المتوسط = 24 ÷ 4 = <b>6</b>؛ المنوال = <b>6</b>؛ المدى = 8 − 4 = <b>4</b>.</div>'+
    '<div '+EG+'><b>الوسيط (عدد فردي):</b> 3، 7، 9 بعد الترتيب ← الوسط = <b>7</b>.</div>'+
    '<div '+EG+'><b>احتمال:</b> كيس فيه 4 كرات، واحدة حمراء ← احتمال الحمراء = <b>1/4</b>.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> إيجاد الوسيط دون ترتيب الأعداد. رتِّبها دائمًا.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> إذا كان عدد القيم زوجيًا فالوسيط = متوسط العددين الأوسطين.</div>');

  /* ============================ PHYSICS — MEASUREMENT & UNITS ============================ */
  t("Measurement & Units","Measurement & Units",
    '<p>Science measures quantities using <b>agreed (SI) units</b> so results can be compared.</p>'+
    '<h4 '+H+'>Base units and prefixes</h4>'+
    '<ul><li>Length → <b>metre (m)</b>, mass → <b>kilogram (kg)</b>, time → <b>second (s)</b>.</li>'+
    '<li>Prefixes: <b>kilo</b> = 1000, <b>centi</b> = 1/100, <b>milli</b> = 1/1000. So 1 km = 1000 m, 1 m = 100 cm.</li>'+
    '<li><b>Speed</b> = distance ÷ time, in metres per second (m/s).</li></ul>'+
    '<div '+EG+'><b>Speed:</b> a car travels 100 m in 20 s → speed = 100 ÷ 20 = <b>5 m/s</b>.</div>'+
    '<div '+EG+'><b>Converting:</b> 2 km = 2 × 1000 = <b>2000 m</b>; 350 cm = 350 ÷ 100 = <b>3.5 m</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> mixing units in one calculation (e.g. cm with m). Convert them to the same unit first.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> always write the unit next to your number — a number with no unit has no meaning in science.</div>',
    "القياس والوحدات",
    '<p>يقيس العلم الكميات باستخدام <b>وحدات دولية (SI) متفق عليها</b> لتُقارن النتائج.</p>'+
    '<h4 '+H+'>الوحدات الأساسية والبادئات</h4>'+
    '<ul><li>الطول ← <b>المتر (m)</b>، الكتلة ← <b>الكيلوغرام (kg)</b>، الزمن ← <b>الثانية (s)</b>.</li>'+
    '<li>البادئات: <b>كيلو</b> = 1000، <b>سنتي</b> = 1/100، <b>مِلّي</b> = 1/1000. فـ 1 كم = 1000 م، و1 م = 100 سم.</li>'+
    '<li><b>السرعة</b> = المسافة ÷ الزمن، بوحدة م/ث.</li></ul>'+
    '<div '+EG+'><b>سرعة:</b> سيارة تقطع 100 م في 20 ث ← السرعة = 100 ÷ 20 = <b>5 م/ث</b>.</div>'+
    '<div '+EG+'><b>تحويل:</b> 2 كم = 2000 م؛ 350 سم = 3.5 م.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> خلط الوحدات في حساب واحد (سم مع م). وحِّد الوحدات أولًا.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> اكتب الوحدة بجانب العدد دائمًا؛ العدد بلا وحدة لا معنى له في العلم.</div>');

  /* ============================ PHYSICS — MOTION & FORCES ============================ */
  t("Motion & Forces","Motion & Forces",
    '<p>This explains <b>how objects move and what makes them change their motion</b>.</p>'+
    '<h4 '+H+'>Key ideas</h4>'+
    '<ul><li>A <b>force</b> is a push or a pull, measured in newtons (N).</li>'+
    '<li><b>Speed</b> = distance ÷ time. <b>Acceleration</b> = change in velocity ÷ time.</li>'+
    '<li><b>Balanced forces</b> → motion does not change. <b>Unbalanced forces</b> → the object speeds up, slows down or changes direction.</li>'+
    '<li><b>Gravity</b> pulls objects down; <b>friction</b> acts against motion.</li></ul>'+
    '<div '+EG+'><b>Acceleration:</b> a car goes from 0 to 20 m/s in 4 s → a = (20 − 0) ÷ 4 = <b>5 m/s²</b>.</div>'+
    '<div '+EG+'><b>Distance:</b> at a steady 6 m/s for 10 s → distance = 6 × 10 = <b>60 m</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> confusing mass and weight. Mass (kg) is how much matter; weight (N) is the pull of gravity on that mass.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> on a velocity–time graph, the <b>slope</b> is the acceleration and the <b>area</b> under the line is the distance.</div>',
    "الحركة والقوى",
    '<p>يشرح <b>كيف تتحرك الأجسام وما الذي يغيّر حركتها</b>.</p>'+
    '<h4 '+H+'>أفكار أساسية</h4>'+
    '<ul><li><b>القوة</b> دفع أو سحب، وحدتها النيوتن (N).</li>'+
    '<li><b>السرعة</b> = المسافة ÷ الزمن. <b>التسارع</b> = التغير في السرعة ÷ الزمن.</li>'+
    '<li><b>القوى المتزنة</b> ← لا تتغيّر الحركة. <b>غير المتزنة</b> ← يتسارع الجسم أو يتباطأ أو يغيّر اتجاهه.</li>'+
    '<li><b>الجاذبية</b> تسحب الأجسام للأسفل، و<b>الاحتكاك</b> يعاكس الحركة.</li></ul>'+
    '<div '+EG+'><b>تسارع:</b> سيارة من 0 إلى 20 م/ث خلال 4 ث ← ت = (20 − 0) ÷ 4 = <b>5 م/ث²</b>.</div>'+
    '<div '+EG+'><b>مسافة:</b> بسرعة ثابتة 6 م/ث لمدة 10 ث ← المسافة = 6 × 10 = <b>60 م</b>.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> الخلط بين الكتلة والوزن. الكتلة (kg) مقدار المادة، والوزن (N) قوة جذب الجاذبية لها.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> في منحنى السرعة–الزمن، الميل = التسارع، والمساحة تحت الخط = المسافة.</div>');

  /* ============================ PHYSICS — WAVES & SOUND ============================ */
  t("Waves & Sound","Waves & Sound",
    '<p>Waves <b>carry energy</b> from one place to another without carrying matter along.</p>'+
    '<h4 '+H+'>Parts of a wave</h4>'+
    '<ul><li><b>Frequency</b> — how many waves pass each second, in hertz (Hz).</li>'+
    '<li><b>Wavelength</b> — the length of one whole wave.</li>'+
    '<li><b>Amplitude</b> — the height of the wave (louder sound / brighter light).</li></ul>'+
    '<p><b>Wave speed = frequency × wavelength</b> (v = f × λ).</p>'+
    '<div '+EG+'><b>Find the speed:</b> f = 5 Hz, λ = 2 m → v = 5 × 2 = <b>10 m/s</b>.</div>'+
    '<div '+EG+'><b>Find the wavelength:</b> v = 300 m/s, f = 60 Hz → λ = 300 ÷ 60 = <b>5 m</b>.</div>'+
    '<div '+EG+'><b>Sound:</b> higher frequency = higher pitch; larger amplitude = louder. Sound needs a medium, so it cannot travel through a vacuum.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> thinking sound travels in space. With no air (a vacuum), there is nothing to carry the sound.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> learn v = f × λ and rearrange it: f = v ÷ λ, and λ = v ÷ f.</div>',
    "الموجات والصوت",
    '<p>تنقل الموجات <b>الطاقة</b> من مكان إلى آخر دون أن تنقل المادة معها.</p>'+
    '<h4 '+H+'>أجزاء الموجة</h4>'+
    '<ul><li><b>التردد</b> — عدد الموجات في كل ثانية، بوحدة الهرتز (Hz).</li>'+
    '<li><b>الطول الموجي</b> — طول موجة كاملة واحدة.</li>'+
    '<li><b>السعة</b> — ارتفاع الموجة (صوت أعلى / ضوء أسطع).</li></ul>'+
    '<p><b>سرعة الموجة = التردد × الطول الموجي</b> (v = f × λ).</p>'+
    '<div '+EG+'><b>إيجاد السرعة:</b> f = 5 هرتز، λ = 2 م ← v = 5 × 2 = <b>10 م/ث</b>.</div>'+
    '<div '+EG+'><b>إيجاد الطول الموجي:</b> v = 300 م/ث، f = 60 هرتز ← λ = 300 ÷ 60 = <b>5 م</b>.</div>'+
    '<div '+EG+'><b>الصوت:</b> تردد أعلى = طبقة أعلى؛ سعة أكبر = صوت أعلى. ويحتاج الصوت إلى وسط فلا ينتقل في الفراغ.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> الظن أن الصوت ينتقل في الفضاء. في الفراغ لا يوجد وسط ينقل الصوت.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> احفظ v = f × λ وأعِد ترتيبها: f = v ÷ λ و λ = v ÷ f.</div>');

  /* ============================ PHYSICS — LIGHT & OPTICS ============================ */
  t("Light & Optics","Light & Optics",
    '<p>Light is a wave that normally travels in <b>straight lines</b> and very fast.</p>'+
    '<h4 '+H+'>Key behaviours</h4>'+
    '<ul><li><b>Reflection</b> — light bounces off a surface. The <b>angle of incidence = angle of reflection</b>, both measured from the <b>normal</b> (the line at 90° to the surface).</li>'+
    '<li><b>Refraction</b> — light bends when it enters a new material because it changes speed (e.g. air → glass bends toward the normal).</li>'+
    '<li><b>Dispersion</b> — a prism splits white light into the colours of the rainbow.</li></ul>'+
    '<div '+EG+'><b>Reflection:</b> a ray hits a mirror at 30° to the normal → it reflects at <b>30°</b>.</div>'+
    '<div '+EG+'><b>Refraction:</b> light slows down entering glass, so it bends <b>toward</b> the normal; leaving glass into air it bends <b>away</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> measuring angles from the surface. Always measure from the <b>normal</b>.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> draw the normal as a dotted line first, then measure both angles from it.</div>',
    "الضوء والبصريات",
    '<p>الضوء موجة تنتقل عادةً في <b>خطوط مستقيمة</b> وبسرعة عالية جدًا.</p>'+
    '<h4 '+H+'>سلوكيات مهمة</h4>'+
    '<ul><li><b>الانعكاس</b> — يرتد الضوء عن السطح، و<b>زاوية السقوط = زاوية الانعكاس</b>، وتُقاسان من <b>العمود المقام</b> (الخط العمودي على السطح).</li>'+
    '<li><b>الانكسار</b> — ينحني الضوء عند دخوله وسطًا جديدًا لتغيّر سرعته (من الهواء إلى الزجاج ينحني نحو العمود).</li>'+
    '<li><b>التحليل</b> — يحلّل المنشور الضوء الأبيض إلى ألوان الطيف.</li></ul>'+
    '<div '+EG+'><b>انعكاس:</b> شعاع يسقط على مرآة بزاوية 30° عن العمود ← ينعكس بزاوية <b>30°</b>.</div>'+
    '<div '+EG+'><b>انكسار:</b> يتباطأ الضوء داخل الزجاج فينحني <b>نحو</b> العمود، وعند خروجه إلى الهواء ينحني <b>بعيدًا</b> عنه.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> قياس الزوايا من السطح. قِسها دائمًا من <b>العمود المقام</b>.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> ارسم العمود المقام خطًا متقطعًا أولًا ثم قِس الزاويتين منه.</div>');

  /* ============================ SCIENCE — LIFE SCIENCE ============================ */
  t("Life Science","Life Science",
    '<p>Life science studies <b>living things</b> — how they are built and how they live.</p>'+
    '<h4 '+H+'>Key ideas</h4>'+
    '<ul><li>The <b>cell</b> is the basic building block of every living thing.</li>'+
    '<li>All living things do seven things: move, breathe, respond, grow, reproduce, get rid of waste and need food (energy).</li>'+
    '<li><b>Producers</b> (plants) make their own food; <b>consumers</b> (animals) eat other living things.</li>'+
    '<li>A <b>food chain</b> shows how energy passes from one living thing to the next.</li></ul>'+
    '<div '+EG+'><b>Food chain:</b> grass → grasshopper → frog → snake. The arrows show the direction the energy flows.</div>'+
    '<div '+EG+'><b>Producer vs consumer:</b> a tree is a producer (it makes food using sunlight); a rabbit is a consumer (it eats plants).</div>'+
    '<div '+WARN+'><b>Common mistake:</b> drawing food-chain arrows the wrong way. The arrow points <b>to the thing that gets the energy</b> (the eater).</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> plants are almost always at the start of a food chain because they capture the Sun\'s energy.</div>',
    "علوم الحياة",
    '<p>تدرس علوم الحياة <b>الكائنات الحية</b> — كيف تتركّب وكيف تعيش.</p>'+
    '<h4 '+H+'>أفكار أساسية</h4>'+
    '<ul><li><b>الخلية</b> هي وحدة بناء كل كائن حي.</li>'+
    '<li>تقوم الكائنات الحية بسبعة أمور: الحركة والتنفّس والاستجابة والنمو والتكاثر والإخراج والحاجة إلى الغذاء (الطاقة).</li>'+
    '<li><b>المنتِجات</b> (النباتات) تصنع غذاءها، و<b>المستهلكات</b> (الحيوانات) تأكل غيرها.</li>'+
    '<li><b>السلسلة الغذائية</b> تبيّن انتقال الطاقة من كائن إلى آخر.</li></ul>'+
    '<div '+EG+'><b>سلسلة غذائية:</b> عشب ← جرادة ← ضفدع ← أفعى. الأسهم تبيّن اتجاه انتقال الطاقة.</div>'+
    '<div '+EG+'><b>منتِج ومستهلك:</b> الشجرة منتِج (تصنع الغذاء بضوء الشمس)، والأرنب مستهلك (يأكل النبات).</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> رسم أسهم السلسلة بالاتجاه الخاطئ. يشير السهم <b>إلى الكائن الذي يأخذ الطاقة</b> (الآكل).</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> النباتات غالبًا في بداية السلسلة لأنها تلتقط طاقة الشمس.</div>');

  /* ============================ SCIENCE — PHYSICAL SCIENCE ============================ */
  t("Physical Science","Physical Science",
    '<p>Physical science is about <b>matter and energy</b> and the changes they go through.</p>'+
    '<h4 '+H+'>Key ideas</h4>'+
    '<ul><li>Matter has three main <b>states</b>: solid, liquid and gas. Heating or cooling changes the state.</li>'+
    '<li>A <b>physical change</b> (melting, cutting) can be reversed and makes no new substance.</li>'+
    '<li>A <b>chemical change</b> (burning, rusting) makes a <b>new substance</b> and is hard to reverse.</li>'+
    '<li>Energy comes in forms: heat, light, sound, electrical, and kinetic (movement).</li></ul>'+
    '<div '+EG+'><b>Physical change:</b> ice → water → steam. It is still water (H₂O), only the state changed.</div>'+
    '<div '+EG+'><b>Chemical change:</b> wood burning makes ash, smoke and gases — new substances you cannot turn back into wood.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> calling every change chemical. If no new substance forms, it is a physical change.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> signs of a chemical change: a new colour, a gas (bubbles), heat/light given out, or a smell.</div>',
    "العلوم الفيزيائية",
    '<p>تتناول العلوم الفيزيائية <b>المادة والطاقة</b> والتغيّرات التي تطرأ عليهما.</p>'+
    '<h4 '+H+'>أفكار أساسية</h4>'+
    '<ul><li>للمادة ثلاث <b>حالات</b>: صلبة وسائلة وغازية، وتتغيّر الحالة بالتسخين أو التبريد.</li>'+
    '<li><b>التغير الفيزيائي</b> (الانصهار، القص) قابل للعكس ولا يكوّن مادة جديدة.</li>'+
    '<li><b>التغير الكيميائي</b> (الاحتراق، الصدأ) يكوّن <b>مادة جديدة</b> ويصعب عكسه.</li>'+
    '<li>الطاقة أشكال: حرارية وضوئية وصوتية وكهربائية وحركية.</li></ul>'+
    '<div '+EG+'><b>تغير فيزيائي:</b> ثلج ← ماء ← بخار. تبقى المادة ماءً (H₂O) وتتغيّر الحالة فقط.</div>'+
    '<div '+EG+'><b>تغير كيميائي:</b> احتراق الخشب يكوّن رمادًا ودخانًا وغازات — مواد جديدة لا تعود خشبًا.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> اعتبار كل تغيّر كيميائيًا. إن لم تتكوّن مادة جديدة فهو تغيّر فيزيائي.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> علامات التغيّر الكيميائي: لون جديد، أو غاز (فقاعات)، أو حرارة/ضوء، أو رائحة.</div>');

  /* ============================ SCIENCE — EARTH & SPACE ============================ */
  t("Earth & Space Science","Earth & Space Science",
    '<p>This studies the <b>Earth, its weather, and space</b>.</p>'+
    '<h4 '+H+'>Key ideas</h4>'+
    '<ul><li>The <b>water cycle</b> keeps recycling water: <i>evaporation → condensation → precipitation (rain) → collection</i>.</li>'+
    '<li>The Earth <b>spins</b> on its axis once a day (giving day and night) and <b>orbits</b> the Sun once a year.</li>'+
    '<li>The Earth\'s surface changes slowly (weathering, erosion) and quickly (earthquakes, volcanoes).</li></ul>'+
    '<div '+EG+'><b>Water cycle:</b> the Sun heats the sea → water evaporates into vapour → it cools and condenses into clouds → it falls as rain → rivers carry it back to the sea.</div>'+
    '<div '+EG+'><b>Day and night:</b> it is day on the side of Earth facing the Sun, and night on the side facing away.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> thinking the seasons happen because Earth gets nearer the Sun. They are caused by the <b>tilt</b> of the Earth.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> learn the four water-cycle steps in order — many questions follow that sequence.</div>',
    "علوم الأرض والفضاء",
    '<p>تدرس <b>الأرض وطقسها والفضاء</b>.</p>'+
    '<h4 '+H+'>أفكار أساسية</h4>'+
    '<ul><li><b>دورة الماء</b> تعيد تدوير الماء: <i>تبخُّر ← تكاثف ← هطول (مطر) ← تجمُّع</i>.</li>'+
    '<li>تدور الأرض حول <b>محورها</b> مرة كل يوم (الليل والنهار)، وحول <b>الشمس</b> مرة كل سنة.</li>'+
    '<li>يتغيّر سطح الأرض ببطء (التجوية والتعرية) وبسرعة (الزلازل والبراكين).</li></ul>'+
    '<div '+EG+'><b>دورة الماء:</b> تسخّن الشمس البحر ← يتبخّر الماء ← يبرد ويتكاثف غيومًا ← يهطل مطرًا ← تعيده الأنهار إلى البحر.</div>'+
    '<div '+EG+'><b>الليل والنهار:</b> نهار على الجهة المواجهة للشمس، وليل على الجهة المقابلة.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> الظن أن الفصول بسبب اقتراب الأرض من الشمس. سببها <b>ميل</b> محور الأرض.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> احفظ خطوات دورة الماء الأربع بالترتيب.</div>');

  /* ============================ SCIENCE — SCIENTIFIC INQUIRY ============================ */
  t("Scientific Inquiry & Technology","Scientific Inquiry & Technology",
    '<p>This is <b>how scientists investigate questions</b> and how we design solutions to problems.</p>'+
    '<h4 '+H+'>The scientific method</h4>'+
    '<ol><li>Ask a <b>question</b>.</li><li>Make a <b>hypothesis</b> (a smart guess you can test).</li>'+
    '<li>Do a <b>fair test</b>.</li><li><b>Observe</b> and record results.</li><li>Make a <b>conclusion</b>.</li></ol>'+
    '<p>A <b>fair test</b> changes only <b>one</b> thing (the variable) and keeps everything else the same.</p>'+
    '<div '+EG+'><b>Fair test:</b> to see which soil grows the tallest plant, keep the water, light and pot size the same, and change only the <b>soil</b>.</div>'+
    '<div '+EG+'><b>Variables:</b> the thing you change = the soil; the thing you measure = plant height; the things you keep the same = water, light, pot.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> changing two things at once — then you cannot tell which one caused the result.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> the one thing you deliberately change is called the <b>independent variable</b>.</div>',
    "الاستقصاء العلمي والتقنية",
    '<p>هو <b>كيف يبحث العلماء في الأسئلة</b> وكيف نصمّم حلولًا للمشكلات.</p>'+
    '<h4 '+H+'>الطريقة العلمية</h4>'+
    '<ol><li>اطرح <b>سؤالًا</b>.</li><li>ضع <b>فرضية</b> (تخمينًا قابلًا للاختبار).</li>'+
    '<li>أجرِ <b>اختبارًا عادلًا</b>.</li><li><b>لاحِظ</b> وسجِّل النتائج.</li><li>استخلص <b>استنتاجًا</b>.</li></ol>'+
    '<p><b>الاختبار العادل</b> يغيّر <b>عاملًا واحدًا</b> فقط ويبقي كل شيء آخر ثابتًا.</p>'+
    '<div '+EG+'><b>اختبار عادل:</b> لمعرفة أي تربة تنبت أطول نبتة، ثبِّت الماء والضوء وحجم الإناء، وغيّر <b>التربة</b> فقط.</div>'+
    '<div '+EG+'><b>المتغيرات:</b> ما تغيّره = التربة؛ ما تقيسه = طول النبتة؛ ما تبقيه ثابتًا = الماء والضوء والإناء.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> تغيير عاملين معًا — عندها لا تعرف أيّهما سبّب النتيجة.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> العامل الذي تغيّره عمدًا يسمّى <b>المتغير المستقل</b>.</div>');

  /* ============================ CHEMISTRY — MATTER & ATOMIC STRUCTURE ============================ */
  t("Matter & Atomic Structure","Matter & Atomic Structure",
    '<p>Everything around us is made of tiny particles called <b>atoms</b>.</p>'+
    '<h4 '+H+'>Inside an atom</h4>'+
    '<ul><li>The <b>nucleus</b> at the centre holds <b>protons</b> (positive) and <b>neutrons</b> (neutral).</li>'+
    '<li><b>Electrons</b> (negative) move around the nucleus.</li>'+
    '<li>The <b>atomic number</b> = the number of protons, and it tells you which element it is.</li>'+
    '<li>The <b>periodic table</b> lists the elements in order of atomic number.</li></ul>'+
    '<div '+EG+'><b>Example:</b> Carbon has 6 protons, so its atomic number is <b>6</b>. A neutral carbon atom also has 6 electrons.</div>'+
    '<div '+EG+'><b>Charge:</b> protons (+) and electrons (−) are equal in a neutral atom, so their charges cancel out.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> mixing up atomic number (protons) with mass number (protons + neutrons).</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> in a neutral atom, number of electrons = number of protons.</div>',
    "المادة وتركيب الذرة",
    '<p>كل ما حولنا مكوَّن من جسيمات دقيقة تُسمى <b>الذرّات</b>.</p>'+
    '<h4 '+H+'>داخل الذرة</h4>'+
    '<ul><li><b>النواة</b> في المركز تحوي <b>بروتونات</b> (موجبة) و<b>نيوترونات</b> (متعادلة).</li>'+
    '<li><b>الإلكترونات</b> (سالبة) تدور حول النواة.</li>'+
    '<li><b>العدد الذري</b> = عدد البروتونات، ويحدّد نوع العنصر.</li>'+
    '<li><b>الجدول الدوري</b> يرتّب العناصر حسب العدد الذري.</li></ul>'+
    '<div '+EG+'><b>مثال:</b> الكربون له 6 بروتونات، فعدده الذري <b>6</b>، وله 6 إلكترونات في الحالة المتعادلة.</div>'+
    '<div '+EG+'><b>الشحنة:</b> البروتونات (+) والإلكترونات (−) متساوية في الذرة المتعادلة فتتعادل شحنتاها.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> الخلط بين العدد الذري (البروتونات) والعدد الكتلي (البروتونات + النيوترونات).</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> في الذرة المتعادلة، عدد الإلكترونات = عدد البروتونات.</div>');

  /* ============================ CHEMISTRY — BONDING & COMPOUNDS ============================ */
  t("Bonding & Compounds","Bonding & Compounds",
    '<p>Atoms join together by <b>bonding</b> to make compounds — new substances with new properties.</p>'+
    '<h4 '+H+'>Two main types of bond</h4>'+
    '<ul><li><b>Ionic bond</b> — a metal <b>gives</b> electrons to a non-metal. The atoms become charged ions that attract. Example: sodium + chlorine → NaCl (table salt).</li>'+
    '<li><b>Covalent bond</b> — two non-metals <b>share</b> electrons. Example: water, H₂O.</li></ul>'+
    '<div '+EG+'><b>Ionic:</b> sodium (a metal) gives 1 electron to chlorine (a non-metal). Na becomes Na⁺ and Cl becomes Cl⁻, and they stick together.</div>'+
    '<div '+EG+'><b>Covalent:</b> in water, one oxygen atom shares electrons with two hydrogen atoms → H₂O.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> thinking a compound is just a mixture. In a compound the atoms are <b>chemically joined</b> and cannot be separated by hand.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> quick rule — metal + non-metal → ionic; non-metal + non-metal → covalent.</div>',
    "الروابط والمركبات",
    '<p>ترتبط الذرات بـ<b>روابط</b> لتكوين مركبات — مواد جديدة بخصائص جديدة.</p>'+
    '<h4 '+H+'>نوعان رئيسان من الروابط</h4>'+
    '<ul><li><b>الرابطة الأيونية</b> — يمنح الفلز إلكتروناته للّافلز، فتصبح الذرات أيونات مشحونة تتجاذب. مثال: صوديوم + كلور → NaCl (ملح الطعام).</li>'+
    '<li><b>الرابطة التساهمية</b> — يتشارك لافلزان الإلكترونات. مثال: الماء H₂O.</li></ul>'+
    '<div '+EG+'><b>أيونية:</b> يمنح الصوديوم (فلز) إلكترونًا للكلور (لافلز)، فيصبح Na⁺ و Cl⁻ ويتجاذبان.</div>'+
    '<div '+EG+'><b>تساهمية:</b> في الماء تتشارك ذرة أكسجين إلكتروناتها مع ذرتَي هيدروجين ← H₂O.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> اعتبار المركب مجرد خليط. في المركب ترتبط الذرات <b>كيميائيًا</b> ولا تُفصل باليد.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> قاعدة سريعة — فلز + لافلز ← أيونية؛ لافلز + لافلز ← تساهمية.</div>');

  /* ============================ CHEMISTRY — REACTIONS & STOICHIOMETRY ============================ */
  t("Reactions & Stoichiometry","Reactions & Stoichiometry",
    '<p>In a chemical reaction, atoms are <b>rearranged</b> to make new substances. Atoms are never created or destroyed.</p>'+
    '<h4 '+H+'>Balancing equations</h4>'+
    '<p>Because no atoms are lost, an equation must have the <b>same number of each atom on both sides</b>. Balance by changing the big numbers (coefficients) in front, never the small subscripts.</p>'+
    '<div '+EG+'><b>Balanced:</b> 2H₂ + O₂ → 2H₂O.<br>Left: 4 H and 2 O. Right: 4 H and 2 O. ✓ Both sides match.</div>'+
    '<div '+EG+'><b>Reactants → products:</b> in "carbon + oxygen → carbon dioxide", carbon and oxygen are the reactants and carbon dioxide is the product.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> changing a subscript (the small number) to balance. That changes the substance! Only change the big front numbers.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> count each type of atom on both sides and adjust the coefficients until they match.</div>',
    "التفاعلات والحسابات الكيميائية",
    '<p>في التفاعل الكيميائي تُعاد <b>ترتيب</b> الذرات لتكوين مواد جديدة، ولا تُخلق الذرات ولا تفنى.</p>'+
    '<h4 '+H+'>وزن المعادلات</h4>'+
    '<p>بما أن الذرات لا تُفقد، يجب أن يكون <b>عدد كل نوع من الذرات متساويًا على الطرفين</b>. وازِن بتغيير الأعداد الكبيرة (المعاملات) أمام الصيغ، لا الأرقام الصغيرة السفلية.</p>'+
    '<div '+EG+'><b>موزونة:</b> 2H₂ + O₂ → 2H₂O.<br>اليسار: 4 هيدروجين و2 أكسجين. اليمين: 4 هيدروجين و2 أكسجين. ✓</div>'+
    '<div '+EG+'><b>متفاعلات ← نواتج:</b> في «كربون + أكسجين → ثاني أكسيد الكربون»، الكربون والأكسجين متفاعلان، وثاني أكسيد الكربون ناتج.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> تغيير الرقم السفلي للموازنة — فهذا يغيّر المادة نفسها! غيّر المعاملات الكبيرة فقط.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> عُدّ كل نوع من الذرات على الطرفين وعدّل المعاملات حتى تتساوى.</div>');

  /* ============================ CHEMISTRY — STATES, SOLUTIONS & ORGANIC ============================ */
  t("States, Solutions & Organic","States, Solutions & Organic",
    '<p>This covers <b>states of matter, solutions (mixtures), and organic (carbon) chemistry</b>.</p>'+
    '<h4 '+H+'>Key ideas</h4>'+
    '<ul><li><b>Gases:</b> heating a gas in a fixed container raises its pressure, because the particles move faster and hit the walls more often.</li>'+
    '<li><b>Solution</b> = a <b>solute</b> dissolved in a <b>solvent</b>. Concentration = how much solute per amount of solvent.</li>'+
    '<li><b>Organic chemistry</b> is the chemistry of carbon compounds, such as hydrocarbons (e.g. methane, CH₄).</li></ul>'+
    '<div '+EG+'><b>Solution:</b> stir salt into water — the salt is the solute, the water is the solvent, and together they make a salt solution.</div>'+
    '<div '+EG+'><b>Concentration:</b> more salt in the same water = a <b>more concentrated</b> solution; more water = more <b>dilute</b>.</div>'+
    '<div '+WARN+'><b>Common mistake:</b> swapping solute and solvent. The solute is the smaller amount that dissolves; the solvent is the liquid that does the dissolving.</div>'+
    '<div '+TIP+'>💡 <b>Tip:</b> "like dissolves like" — many everyday substances dissolve well in water.</div>',
    "الحالات والمحاليل والكيمياء العضوية",
    '<p>يشمل <b>حالات المادة والمحاليل (المخاليط) والكيمياء العضوية (الكربون)</b>.</p>'+
    '<h4 '+H+'>أفكار أساسية</h4>'+
    '<ul><li><b>الغازات:</b> تسخين غاز في وعاء ثابت الحجم يرفع ضغطه، لأن الجسيمات تتحرك أسرع وتصطدم بالجدران أكثر.</li>'+
    '<li><b>المحلول</b> = <b>مذاب</b> ذائب في <b>مذيب</b>. والتركيز = كمية المذاب لكل كمية من المذيب.</li>'+
    '<li><b>الكيمياء العضوية</b> هي كيمياء مركبات الكربون، مثل الهيدروكربونات (كالميثان CH₄).</li></ul>'+
    '<div '+EG+'><b>محلول:</b> أذِب الملح في الماء — الملح مذاب، والماء مذيب، ومعًا يكوّنان محلولًا ملحيًا.</div>'+
    '<div '+EG+'><b>التركيز:</b> ملح أكثر في القدر نفسه من الماء = محلول <b>أكثر تركيزًا</b>؛ ماء أكثر = محلول <b>أكثر تخفيفًا</b>.</div>'+
    '<div '+WARN+'><b>خطأ شائع:</b> الخلط بين المذاب والمذيب. المذاب هو الكمية الأقل التي تذوب، والمذيب هو السائل الذي يُذيب.</div>'+
    '<div '+TIP+'>💡 <b>نصيحة:</b> «المتشابهات تذوب في المتشابهات» — كثير من المواد تذوب جيدًا في الماء.</div>');

  if(typeof window!=="undefined") window.SKILL_TUTORIALS=SKILL_TUTORIALS;
})();
