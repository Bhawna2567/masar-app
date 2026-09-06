/* Adeptly — matched practice bank.
   Each weekly activity maps to an exercise that EXACTLY matches its skill/sub-skill:
   - Writing  : a specific topic/question (student knows what to write about)
   - Reading  : a real passage + multiple-choice comprehension questions
   - Grammar  : multiple-choice questions on that exact grammar point
   - Vocabulary: multiple-choice questions on that exact vocabulary sub-skill
   Answers are the INDEX (0-based) of the correct option. */

/* ---------- WRITING: specific topic per activity ---------- */
var WRITING_TOPICS = {
  "Write a full response (8–10 sentences) to a given writing prompt":
    "Write 8–10 sentences about the most memorable day of your life. What happened, and why do you remember it?",
  "Write a paragraph with a topic sentence, 3 details, and a conclusion":
    "Write one paragraph about why reading books is useful. Begin with a topic sentence, give 3 details, and end with a conclusion.",
  "Add transition words to a paragraph to improve its flow":
    "Write a paragraph describing your morning routine. Use these transition words: first, next, then, after that, and finally.",
  "Revise a paragraph for punctuation, capitals, and run-ons":
    "Rewrite this paragraph with correct capital letters, full stops and commas: “my friend and i went to the park we played football then we ate lunch it was a great day”.",
  "Plan and draft a short multi-paragraph piece from an outline":
    "Write TWO short paragraphs about your favourite festival. Paragraph 1: what the festival is. Paragraph 2: why you enjoy it.",
  "Write an opinion with a clear claim and two supporting reasons":
    "Do you think students should wear a school uniform? State your opinion clearly and give two reasons.",
  "Combine 6 short sentences into smoother, varied sentences":
    "Rewrite these six short sentences as 2–3 smooth sentences: “The cat was black. The cat was small. The cat sat on the mat. The mat was red. The cat slept. The room was quiet.”",
  "Write a descriptive paragraph using 5 sensory details":
    "Write a descriptive paragraph about a busy market. Include 5 sensory details — what you SEE, HEAR, SMELL, TASTE and TOUCH.",
  "Write a 5-sentence summary of something you read this week":
    "In exactly 5 sentences, summarise a book, article or story you read this week. Include the main idea and two key points.",
  "Draft an email or letter for a real purpose":
    "Write a short, polite email to your teacher asking permission to submit your project two days late. Give a clear reason.",
  "Write a counter-argument to a given opinion":
    "Someone says: “Homework should be banned.” Write a counter-argument explaining why homework can be helpful. Give two reasons.",
  "Edit a sample paragraph and suggest 3 improvements":
    "Rewrite this weak paragraph to make it better, then list 3 improvements you made: “The movie was good. It was really good. I liked it a lot because it was good and fun.”",
  "Expand a single sentence into a full paragraph":
    "Expand this sentence into a full paragraph of 6–8 sentences: “The storm arrived suddenly.”",
  "Write a short narrative with a clear beginning, middle, and end":
    "Write a short story about a student who finds a mysterious key. Include a clear beginning, middle and end."
};

/* ---------- READING: passages with multiple-choice comprehension ---------- */
var PRACTICE_PASSAGES = [
 {title:"The Lost Kitten", text:"Sara found a small kitten under a tree. It was cold and hungry, so she gave it warm milk and a soft box to sleep in. The next day, Sara put up a sign near her house. Soon a boy came to the door — the kitten was his! He had been looking for it all week. He thanked Sara and promised to take good care of it.",
  qs:[
   {q:"Where did Sara find the kitten?",options:["Under a tree","In a box","At school","In the milk"],answer:0},
   {q:"Why did Sara give the kitten milk?",options:["It was cold and hungry","It was her toy","The boy asked her","It was raining"],answer:0},
   {q:"How did the boy know the kitten?",options:["It was his lost kitten","He bought it","It was new","He found the sign funny"],answer:0},
   {q:"What is the main idea of the passage?",options:["A kind girl helps a lost kitten find its owner","Kittens like milk","Signs are useful","Boys lose things"],answer:0},
   {q:"The word 'hungry' tells us the kitten needed:",options:["food","a name","a friend","a sign"],answer:0}
 ]},
 {title:"Plastic in the Sea", text:"Every year, tonnes of plastic reach the ocean. Sea animals sometimes think the plastic is food and eat it, which can make them very ill. Because of this, many countries are now banning single-use bags and asking people to recycle. Small changes, made by many people, can protect the sea for the future.",
  qs:[
   {q:"What is the main idea?",options:["Plastic harms the sea, but people can help","Fish enjoy plastic","The ocean is empty","Bags are cheap"],answer:0},
   {q:"Why is plastic dangerous to sea animals?",options:["They eat it and get ill","It is too heavy","It is colourful","It floats away"],answer:0},
   {q:"What are many countries doing?",options:["Banning single-use bags","Building more ships","Selling more plastic","Ignoring the problem"],answer:0},
   {q:"The word 'recycle' means to:",options:["use again","throw away","eat","hide"],answer:0},
   {q:"What does the writer want readers to do?",options:["Make small changes to help","Swim more","Buy plastic","Move away"],answer:0}
 ]},
 {title:"The Big Match", text:"Ali's football team was losing 1–0 and he felt very tired. Even so, he did not stop trying. In the last minute, his friend passed him the ball. Ali kicked it hard and scored! The game ended 1–1. His team was proud because they never gave up, even when they were tired.",
  qs:[
   {q:"Why did Ali keep trying?",options:["He did not want to give up","He was not tired","He wanted to leave","The game was easy"],answer:0},
   {q:"What was the final score?",options:["1–1","1–0","2–1","0–0"],answer:0},
   {q:"Who passed Ali the ball?",options:["His friend","The coach","His brother","Nobody"],answer:0},
   {q:"What lesson does the story teach?",options:["Never give up","Football is boring","Always rest","Winning is easy"],answer:0},
   {q:"How did the team feel at the end?",options:["Proud","Angry","Bored","Afraid"],answer:0}
 ]},
 {title:"The Value of Sleep", text:"Many students stay up late and sleep too little. Research shows that sleep helps the brain store what we learn, and it improves memory and mood. Teenagers need about eight to ten hours a night. Simple habits — a regular bedtime and less screen time before bed — can make a real difference to how well students think and feel.",
  qs:[
   {q:"What is the writer's main point?",options:["Sleep improves learning and mood","Screens are fun","Students are lazy","School starts early"],answer:0},
   {q:"How much sleep do teenagers need?",options:["About 8–10 hours","About 3 hours","About 12 hours","About 5 hours"],answer:0},
   {q:"Which habit does the writer suggest?",options:["A regular bedtime","More coffee","Studying all night","Skipping breakfast"],answer:0},
   {q:"According to the text, sleep helps the brain to:",options:["store what we learn","grow taller","get hungry","stay awake"],answer:0},
   {q:"The word 'regular' means:",options:["at the same time each day","very late","only once","never"],answer:0}
 ]},
 {title:"Bees and Their Importance", text:"Bees are small insects that play a huge role in nature. As they move from flower to flower collecting nectar, they carry pollen, which helps plants make seeds and fruit. Without bees, many of our crops would fail. Sadly, bee numbers are falling because of pesticides and the loss of their natural homes.",
  qs:[
   {q:"Why are bees important?",options:["They help plants make fruit and seeds","They make loud noises","They are colourful","They sleep a lot"],answer:0},
   {q:"What are bees collecting from flowers?",options:["Nectar","Water","Sand","Leaves"],answer:0},
   {q:"What is harming bees?",options:["Pesticides and loss of habitat","Too much rain","Other insects","Bright flowers"],answer:0},
   {q:"What is the main idea?",options:["Bees are important but under threat","Bees are dangerous","Flowers need water","Fruit is sweet"],answer:0},
   {q:"The word 'habitat' means an animal's:",options:["natural home","favourite food","enemy","colour"],answer:0}
 ]},
 {title:"A Surprising Discovery", text:"When Mariam opened the dusty old box in the attic, she did not expect to find anything special. Inside were letters tied with ribbon, written by her great-grandmother fifty years ago. As she read them, Mariam learned about family members she had never known, and she felt a deep connection to her past.",
  qs:[
   {q:"What did Mariam find in the box?",options:["Old letters","Money","Toys","Photos only"],answer:0},
   {q:"Who wrote the letters?",options:["Her great-grandmother","Her teacher","Her friend","Mariam"],answer:0},
   {q:"How did Mariam feel after reading them?",options:["Connected to her past","Bored","Angry","Afraid"],answer:0},
   {q:"Where did she find the box?",options:["In the attic","In the garden","At school","In a shop"],answer:0},
   {q:"The word 'dusty' suggests the box was:",options:["old and unused","brand new","wet","heavy"],answer:0}
 ]}
];

/* ---------- GRAMMAR: activity -> sub-skill, and questions per sub-skill ---------- */
var GRAMMAR_ACT = {
  "Label nouns, verbs, and adjectives in 8 sentences":"pos",
  "Fix subject–verb agreement in 6 sentences":"sva",
  "Convert 6 sentences between different tenses":"tense",
  "Punctuate a short paragraph correctly":"punct",
  "Combine simple sentences using conjunctions":"conj",
  "Correct 6 sentences with fragments or misplaced modifiers":"frag",
  "Add correct capitalisation to 8 sentences":"capital",
  "Identify and fix 6 comma errors":"comma",
  "Rewrite 5 sentences from passive to active voice":"voice",
  "Use apostrophes correctly in 8 sentences":"apos",
  "Identify the clauses and phrases in 6 sentences":"clause",
  "Correct pronoun–antecedent agreement in 6 sentences":"pronoun"
};
var GRAMMAR_BANK = {
 pos:[
  {q:"In 'The happy child ran fast', which word is a NOUN?",options:["happy","child","ran","fast"],answer:1},
  {q:"In 'The happy child ran fast', which word is a VERB?",options:["happy","child","ran","fast"],answer:2},
  {q:"In 'The happy child ran fast', which word is an ADJECTIVE?",options:["happy","child","ran","fast"],answer:0},
  {q:"In 'A tall boy climbed the tree', which word is an ADJECTIVE?",options:["tall","boy","climbed","tree"],answer:0},
  {q:"In 'Birds sing sweetly', which word is a VERB?",options:["Birds","sing","sweetly","none"],answer:1},
  {q:"In 'The red car is fast', which word is a NOUN?",options:["red","car","is","fast"],answer:1}
 ],
 sva:[
  {q:"Choose the correct verb: 'She ___ to school every day.'",options:["go","goes","going","gone"],answer:1},
  {q:"Choose the correct verb: 'The dogs ___ loudly.'",options:["barks","bark","barking","is bark"],answer:1},
  {q:"Choose the correct verb: 'He ___ football on Fridays.'",options:["play","plays","playing","are play"],answer:1},
  {q:"Choose the correct verb: 'My friends ___ here.'",options:["is","am","are","was"],answer:2},
  {q:"Choose the correct verb: 'Each student ___ a book.'",options:["have","has","having","are"],answer:1},
  {q:"Choose the correct verb: 'There ___ many books on the shelf.'",options:["is","are","was","be"],answer:1}
 ],
 tense:[
  {q:"Past tense: 'Yesterday I ___ lunch.'",options:["eat","ate","eaten","eats"],answer:1},
  {q:"Future tense: 'Tomorrow she ___ to the park.'",options:["walk","walks","will walk","walked"],answer:2},
  {q:"Present continuous: 'Right now they ___ football.'",options:["play","plays","are playing","played"],answer:2},
  {q:"Past tense of 'go': 'We ___ to the market.'",options:["go","went","gone","goes"],answer:1},
  {q:"Past tense of 'run': 'He ___ very fast.'",options:["run","ran","runs","running"],answer:1},
  {q:"Correct form: 'She has ___ her homework.'",options:["do","did","done","doing"],answer:2}
 ],
 punct:[
  {q:"Which sentence is punctuated correctly?",options:["where are you going","Where are you going?","Where are you going","where are you going."],answer:1},
  {q:"Which end mark is needed? 'How old are you___'",options:[".","?","!",","],answer:1},
  {q:"Choose the correct sentence:",options:["i like tea","I like tea.","I like tea","i like tea."],answer:1},
  {q:"Which end mark best fits? 'What a lovely day___'",options:[".","?","!",","],answer:2},
  {q:"Which sentence is correct?",options:["we went home","We went home.","We went home","we went home."],answer:1},
  {q:"Which end mark is needed? 'Please close the door___'",options:[".","?","!",";"],answer:0}
 ],
 conj:[
  {q:"Choose the best joining word: 'I was tired, ___ I kept working.'",options:["so","but","or","because"],answer:1},
  {q:"Choose the best joining word: 'She stayed home ___ it was raining.'",options:["but","because","or","so"],answer:1},
  {q:"Choose the best joining word: 'Do you want tea ___ coffee?'",options:["and","but","or","so"],answer:2},
  {q:"Choose the best joining word: 'He studied hard, ___ he passed.'",options:["but","or","so","because"],answer:2},
  {q:"Choose the best joining word: 'I like apples ___ bananas.'",options:["but","so","and","because"],answer:2},
  {q:"Choose the best joining word: 'It was late, ___ we went home.'",options:["because","so","or","but"],answer:1}
 ],
 frag:[
  {q:"Which one is a COMPLETE sentence?",options:["Running to school.","The boy ran to school.","Because he was late.","In the morning."],answer:1},
  {q:"Which one is a FRAGMENT (not complete)?",options:["She sings.","After the game.","They left.","It rained."],answer:1},
  {q:"Choose the complete sentence:",options:["When I arrived.","I arrived early.","Arriving early.","To arrive early."],answer:1},
  {q:"Which one is complete?",options:["The tall tree.","The tall tree fell.","Falling down.","Very tall."],answer:1},
  {q:"Best way to fix the fragment 'Because it was cold.'",options:["Because it was cold.","We stayed inside because it was cold.","Cold weather today.","It cold."],answer:1},
  {q:"Which one is a sentence?",options:["Birds in the sky.","Birds fly in the sky.","Flying very high.","The blue sky."],answer:1}
 ],
 capital:[
  {q:"Which sentence has correct capital letters?",options:["we live in dubai.","We live in Dubai.","we live in Dubai.","We live in dubai."],answer:1},
  {q:"Which sentence is correct?",options:["i saw ali on monday.","I saw Ali on Monday.","I saw ali on monday.","i saw Ali on monday."],answer:1},
  {q:"Choose the correctly capitalised sentence:",options:["my friend is from egypt.","My friend is from Egypt.","my friend is from Egypt.","My friend is from egypt."],answer:1},
  {q:"Which is correct?",options:["she speaks arabic and english.","She speaks Arabic and English.","She speaks arabic and english.","she speaks Arabic and English."],answer:1},
  {q:"Choose the correct sentence:",options:["the river nile is long.","The River Nile is long.","the River nile is long.","The river nile is long."],answer:1},
  {q:"Which sentence is correct?",options:["ramadan begins next week.","Ramadan begins next week.","ramadan Begins next week.","Ramadan Begins Next Week."],answer:1}
 ],
 comma:[
  {q:"Choose the sentence with correct commas:",options:["I bought apples oranges and pears.","I bought apples, oranges and pears.","I bought, apples oranges pears.","I, bought apples oranges pears."],answer:1},
  {q:"Where does the comma go? Choose the correct sentence.",options:["After lunch we played.","After lunch, we played.","After lunch we, played.","After lunch we played,"],answer:1},
  {q:"Choose the correct sentence:",options:["Yes I agree.","Yes, I agree.","Yes I, agree.","Yes I agree,"],answer:1},
  {q:"Choose the correct sentence:",options:["We visited Cairo Egypt.","We visited Cairo, Egypt.","We visited, Cairo Egypt.","We, visited Cairo Egypt."],answer:1},
  {q:"Choose the sentence with a correct comma:",options:["My brother who is ten likes football.","My brother, who is ten, likes football.","My brother who is, ten likes football.","My, brother who is ten likes football."],answer:1},
  {q:"Choose the correct sentence:",options:["Before we eat we wash our hands.","Before we eat, we wash our hands.","Before, we eat we wash our hands.","Before we eat we wash, our hands."],answer:1}
 ],
 voice:[
  {q:"Change to ACTIVE voice: 'The ball was kicked by Ali.'",options:["Ali kicks the ball.","Ali kicked the ball.","The ball kicked Ali.","Ali is kicking."],answer:1},
  {q:"Change to ACTIVE voice: 'The cake was eaten by the boy.'",options:["The boy eats the cake.","The boy ate the cake.","The cake ate the boy.","The boy is eaten."],answer:1},
  {q:"Change to ACTIVE voice: 'The letter was written by Sara.'",options:["Sara writes the letter.","Sara wrote the letter.","The letter wrote Sara.","Sara is written."],answer:1},
  {q:"Which sentence is in the ACTIVE voice?",options:["The window was broken.","The window was broken by Sam.","Sam broke the window.","The window broke was."],answer:2},
  {q:"Change to ACTIVE voice: 'The song was sung by the class.'",options:["The class sings the song.","The class sang the song.","The song sang the class.","The class is sung."],answer:1},
  {q:"Change to ACTIVE voice: 'The house was built by workers.'",options:["Workers build the house.","Workers built the house.","The house built workers.","The house is worker."],answer:1}
 ],
 apos:[
  {q:"Choose the correct sentence:",options:["Its raining today.","It's raining today.","Its' raining today.","It raining's today."],answer:1},
  {q:"Show possession: 'the ___ tail' (belonging to one dog)",options:["dogs","dog's","dogs'","dog"],answer:1},
  {q:"Choose the correct sentence:",options:["That is Saras book.","That is Sara's book.","That is Saras' book.","That is Sara book's."],answer:1},
  {q:"What does 'the girls' bags' mean?",options:["bags of one girl","bags of many girls","one girl bag","no bags"],answer:1},
  {q:"Choose the correct contraction of 'do not':",options:["dont","do'nt","don't","don,t"],answer:2},
  {q:"Choose the correct sentence:",options:["Whos there?","Who's there?","Whos' there?","Who is's there?"],answer:1}
 ],
 clause:[
  {q:"In 'When it rains, we stay in', the DEPENDENT clause is:",options:["we stay in","When it rains","rains","stay"],answer:1},
  {q:"A phrase does NOT have:",options:["words","a subject and a verb together","meaning","nouns"],answer:1},
  {q:"In 'She smiled because she won', the MAIN clause is:",options:["because she won","She smiled","she won","won"],answer:1},
  {q:"Which group of words is a CLAUSE?",options:["in the garden","the tall boy","he runs","under the table"],answer:2},
  {q:"Which group of words is a PHRASE (not a clause)?",options:["the dog barked","on the table","they left","I sleep"],answer:1},
  {q:"In 'After we ate, we slept', which part is the dependent clause?",options:["After we ate","we slept","ate","slept"],answer:0}
 ],
 pronoun:[
  {q:"Choose the correct pronoun: 'Each boy brought ___ bag.'",options:["their","his","them","its"],answer:1},
  {q:"Choose the correct pronoun: 'The girls finished ___ work.'",options:["her","his","their","its"],answer:2},
  {q:"Choose the correct pronoun: 'The cat licked ___ paw.'",options:["their","his","its","her"],answer:2},
  {q:"Choose the correct pronoun: 'Ali and I did ___ homework.'",options:["my","his","our","their"],answer:2},
  {q:"Choose the correct pronoun: 'Sara lost ___ pen.'",options:["his","her","their","its"],answer:1},
  {q:"Choose the correct pronoun: 'The students raised ___ hands.'",options:["his","her","its","their"],answer:3}
 ]
};

/* ---------- VOCABULARY: activity -> sub-skill, and questions per sub-skill ---------- */
var VOCAB_ACT = {
  "Learn 5 new academic words and use each in a sentence":"academic",
  "Match 8 synonyms and 8 antonyms":"synant",
  "Break 5 words into prefix / root / suffix and give meanings":"affix",
  "Use context clues to define 5 unknown words":"context",
  "Identify and explain 6 examples of figurative language":"figurative",
  "Sort 10 words by connotation (positive / negative / neutral)":"connotation",
  "Make a word web for 5 new words (synonyms, antonyms, examples)":"synant",
  "Use 6 new words correctly in a short paragraph":"academic",
  "Find 5 words with the same root and explain the link":"root",
  "Replace 8 weak words with stronger, more precise choices":"precise",
  "Make flashcards for 10 subject-specific words":"academic",
  "Find the multiple meanings of 5 common words":"multiple"
};
var VOCAB_BANK = {
 academic:[
  {q:"What does 'benefit' mean?",options:["harm","advantage","mistake","delay"],answer:1},
  {q:"What does 'rapid' mean?",options:["slow","fast","quiet","late"],answer:1},
  {q:"What does 'observe' mean?",options:["to watch carefully","to shout","to run","to forget"],answer:0},
  {q:"What does 'essential' mean?",options:["necessary","extra","broken","empty"],answer:0},
  {q:"What does 'reduce' mean?",options:["increase","make less","repeat","colour"],answer:1},
  {q:"What does 'accurate' mean?",options:["wrong","correct","funny","heavy"],answer:1}
 ],
 synant:[
  {q:"Choose a SYNONYM for 'happy':",options:["sad","glad","angry","tired"],answer:1},
  {q:"Choose an ANTONYM for 'big':",options:["large","huge","small","tall"],answer:2},
  {q:"Choose a SYNONYM for 'fast':",options:["slow","quick","late","heavy"],answer:1},
  {q:"Choose an ANTONYM for 'begin':",options:["start","open","end","run"],answer:2},
  {q:"Choose a SYNONYM for 'smart':",options:["clever","lazy","weak","loud"],answer:0},
  {q:"Choose an ANTONYM for 'hot':",options:["warm","cold","sunny","dry"],answer:1}
 ],
 affix:[
  {q:"The prefix 'un-' in 'unhappy' means:",options:["very","not","again","before"],answer:1},
  {q:"The prefix 're-' in 'redo' means:",options:["not","again","before","after"],answer:1},
  {q:"The suffix '-ful' in 'helpful' means:",options:["without","full of","small","before"],answer:1},
  {q:"The prefix 'pre-' in 'preview' means:",options:["after","before","not","again"],answer:1},
  {q:"The suffix '-less' in 'hopeless' means:",options:["full of","without","more","small"],answer:1},
  {q:"In 'teacher', the suffix '-er' means:",options:["one who does something","not","again","before"],answer:0}
 ],
 context:[
  {q:"'The arid desert had no water for miles.' 'Arid' means:",options:["wet","dry","cold","green"],answer:1},
  {q:"'He was so fatigued that he fell asleep.' 'Fatigued' means:",options:["hungry","tired","happy","angry"],answer:1},
  {q:"'The generous man gave food to everyone.' 'Generous' means:",options:["giving","mean","quiet","rich"],answer:0},
  {q:"'The path was so narrow only one person could pass.' 'Narrow' means:",options:["wide","thin","long","dark"],answer:1},
  {q:"'She felt anxious before the big test.' 'Anxious' means:",options:["calm","worried","bored","sleepy"],answer:1},
  {q:"'The ancient ruins were thousands of years old.' 'Ancient' means:",options:["new","very old","small","broken"],answer:1}
 ],
 figurative:[
  {q:"'The stars danced in the sky.' This is:",options:["a simile","a metaphor","personification","a fact"],answer:2},
  {q:"'As brave as a lion' is a:",options:["metaphor","simile","personification","idiom"],answer:1},
  {q:"'Time is money' is a:",options:["simile","metaphor","fact","question"],answer:1},
  {q:"'It's raining cats and dogs' is an:",options:["idiom","fact","simile","metaphor"],answer:0},
  {q:"'The wind whispered through the trees.' This is:",options:["a simile","personification","a fact","a metaphor"],answer:1},
  {q:"'He runs like the wind.' This is a:",options:["metaphor","idiom","simile","fact"],answer:2}
 ],
 connotation:[
  {q:"Which word has a POSITIVE feeling?",options:["cheap","thrifty","stingy","mean"],answer:1},
  {q:"Which word sounds NEGATIVE?",options:["confident","proud","arrogant","sure"],answer:2},
  {q:"Which word is more POSITIVE?",options:["skinny","slim","bony","scrawny"],answer:1},
  {q:"Which word is NEUTRAL (no strong feeling)?",options:["home","mansion","shack","dump"],answer:0},
  {q:"Which word has a NEGATIVE connotation?",options:["relaxed","lazy","calm","easy-going"],answer:1},
  {q:"Which word has a POSITIVE connotation?",options:["nosy","curious","prying","meddling"],answer:1}
 ],
 precise:[
  {q:"A stronger word for 'said angrily' is:",options:["whispered","shouted","asked","replied"],answer:1},
  {q:"A more precise word for 'walked slowly' is:",options:["strolled","ran","jumped","drove"],answer:0},
  {q:"Choose a stronger word than 'big':",options:["nice","enormous","small","good"],answer:1},
  {q:"A stronger word for 'happy' is:",options:["okay","delighted","fine","calm"],answer:1},
  {q:"A more precise word for tasty food is:",options:["nice","delicious","big","fast"],answer:1},
  {q:"A stronger word for 'looked' is:",options:["saw","stared","had","went"],answer:1}
 ],
 root:[
  {q:"Which word shares the root 'port' (to carry) with 'transport'?",options:["import","garden","happy","quickly"],answer:0},
  {q:"'Telephone' and 'television' share 'tele-', which means:",options:["near","far","sound","see"],answer:1},
  {q:"Which word shares the root 'aud' (to hear) with 'audible'?",options:["audience","garden","running","table"],answer:0},
  {q:"'Biology' and 'biography' share 'bio-', which means:",options:["earth","life","water","light"],answer:1},
  {q:"Which word shares the root 'dict' (to say) with 'dictionary'?",options:["predict","painting","flower","jump"],answer:0},
  {q:"'Spectator' and 'inspect' share 'spect', which means:",options:["hear","look","run","write"],answer:1}
 ],
 multiple:[
  {q:"'Bat' can mean a flying animal and also:",options:["a fruit","sports equipment","a colour","a drink"],answer:1},
  {q:"'Bark' can mean the sound a dog makes and also:",options:["a tree's outer layer","a car","a book","a shoe"],answer:0},
  {q:"'Trunk' can mean part of a tree and also:",options:["a hat","an elephant's nose","a river","a song"],answer:1},
  {q:"'Ring' can mean jewellery and also:",options:["to make a sound","to sleep","to eat","to read"],answer:0},
  {q:"'Light' can mean 'not heavy' and also:",options:["brightness","water","food","music"],answer:0},
  {q:"'Watch' can mean 'to look' and also:",options:["a clock you wear","a chair","a river","a plant"],answer:0}
 ]
};
