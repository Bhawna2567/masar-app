/* Adeptly — matched practice bank.
   Each weekly activity maps to an exercise that EXACTLY matches its skill/sub-skill:
   - Writing  : a specific topic/question (student knows what to write about)
   - Reading  : a real passage + multiple-choice comprehension questions
   - Grammar  : multiple-choice questions on that exact grammar point
   - Vocabulary: multiple-choice questions on that exact vocabulary sub-skill
   Answers are the INDEX (0-based) of the correct option.
   Each bank holds MULTIPLE variants so a different one can be shown each week. */

/* ---------- WRITING: specific topics per activity (5 variants each) ---------- */
var WRITING_TOPICS = {
  "Write a full response (8–10 sentences) to a given writing prompt": [
    "Write 8–10 sentences about the most memorable day of your life. What happened, and why do you remember it?",
    "Write 8–10 sentences about a person you admire. Who are they, and why do you look up to them?",
    "Write 8–10 sentences about your dream job. What is it, and why would you enjoy it?",
    "Write 8–10 sentences about a time you helped someone. What did you do, and how did it feel?",
    "Write 8–10 sentences about your favourite place in your city. Describe it and say why you like it."
  ],
  "Write a paragraph with a topic sentence, 3 details, and a conclusion": [
    "Write one paragraph about why reading books is useful. Begin with a topic sentence, give 3 details, and end with a conclusion.",
    "Write one paragraph about why exercise is good for you. Begin with a topic sentence, give 3 details, and end with a conclusion.",
    "Write one paragraph about why water is important. Begin with a topic sentence, give 3 details, and end with a conclusion.",
    "Write one paragraph about why friends are important. Begin with a topic sentence, give 3 details, and end with a conclusion.",
    "Write one paragraph about why your favourite hobby is fun. Begin with a topic sentence, give 3 details, and end with a conclusion."
  ],
  "Add transition words to a paragraph to improve its flow": [
    "Write a paragraph describing your morning routine. Use these transition words: first, next, then, after that, and finally.",
    "Write a paragraph explaining how to make a sandwich. Use these transition words: first, next, then, after that, and finally.",
    "Write a paragraph about how you get ready for a football match. Use these transition words: first, next, then, after that, and finally.",
    "Write a paragraph describing a school day from start to end. Use these transition words: first, next, then, later, and finally.",
    "Write a paragraph explaining how to plant a seed. Use these transition words: first, next, then, after that, and finally."
  ],
  "Revise a paragraph for punctuation, capitals, and run-ons": [
    "Rewrite this paragraph with correct capital letters, full stops and commas: “my friend and i went to the park we played football then we ate lunch it was a great day”.",
    "Rewrite this paragraph with correct capital letters, full stops and commas: “on saturday we visited my grandmother she made lunch we watched a film it was fun”.",
    "Rewrite this paragraph with correct capitals and punctuation: “ahmed likes science he wants to be a doctor he studies every night his dream is big”.",
    "Rewrite this paragraph with correct capitals, full stops and commas: “the dog ran fast it jumped the fence then it barked we laughed a lot”.",
    "Rewrite this paragraph with correct capitals and punctuation: “i woke up late i missed the bus i ran to school my teacher was kind”."
  ],
  "Plan and draft a short multi-paragraph piece from an outline": [
    "Write TWO short paragraphs about your favourite festival. Paragraph 1: what the festival is. Paragraph 2: why you enjoy it.",
    "Write TWO short paragraphs about your school. Paragraph 1: what your school is like. Paragraph 2: what you like best about it.",
    "Write TWO short paragraphs about a country you want to visit. Paragraph 1: the country. Paragraph 2: why you want to go.",
    "Write TWO short paragraphs about your family. Paragraph 1: who is in your family. Paragraph 2: what you do together.",
    "Write TWO short paragraphs about a sport you like. Paragraph 1: the rules. Paragraph 2: why you enjoy it."
  ],
  "Write an opinion with a clear claim and two supporting reasons": [
    "Do you think students should wear a school uniform? State your opinion clearly and give two reasons.",
    "Should children have mobile phones at school? State your opinion clearly and give two reasons.",
    "Is it better to live in a city or a village? State your opinion clearly and give two reasons.",
    "Should the school day be shorter? State your opinion clearly and give two reasons.",
    "Are books better than films? State your opinion clearly and give two reasons."
  ],
  "Combine 6 short sentences into smoother, varied sentences": [
    "Rewrite these six short sentences as 2–3 smooth sentences: “The cat was black. The cat was small. The cat sat on the mat. The mat was red. The cat slept. The room was quiet.”",
    "Rewrite these six short sentences as 2–3 smooth sentences: “The boy was tall. The boy was kind. He had a dog. The dog was brown. They walked. The park was near.”",
    "Rewrite these six short sentences as 2–3 smooth sentences: “The car was old. The car was blue. It was slow. My father drove it. We went to town. The town was busy.”",
    "Rewrite these six short sentences as 2–3 smooth sentences: “The girl was happy. She had a book. The book was new. She read it. The story was funny. She smiled.”",
    "Rewrite these six short sentences as 2–3 smooth sentences: “The sun was hot. The beach was full. We swam. The water was cool. We ate lunch. We felt tired.”"
  ],
  "Write a descriptive paragraph using 5 sensory details": [
    "Write a descriptive paragraph about a busy market. Include 5 sensory details — what you SEE, HEAR, SMELL, TASTE and TOUCH.",
    "Write a descriptive paragraph about a rainy day. Include 5 sensory details — what you see, hear, smell, taste and touch.",
    "Write a descriptive paragraph about your favourite meal. Include 5 sensory details — what you see, hear, smell, taste and touch.",
    "Write a descriptive paragraph about a school sports day. Include 5 sensory details — what you see, hear, smell, taste and touch.",
    "Write a descriptive paragraph about a night by the sea. Include 5 sensory details — what you see, hear, smell, taste and touch."
  ],
  "Write a 5-sentence summary of something you read this week": [
    "In exactly 5 sentences, summarise a book, article or story you read this week. Include the main idea and two key points.",
    "In exactly 5 sentences, summarise a film or TV show you watched this week. Include the main idea and two key points.",
    "In exactly 5 sentences, summarise a news story you heard this week. Include the main idea and two key points.",
    "In exactly 5 sentences, summarise your favourite fairy tale. Include the main idea and two key points.",
    "In exactly 5 sentences, summarise a lesson you learned in class this week. Include the main idea and two key points."
  ],
  "Draft an email or letter for a real purpose": [
    "Write a short, polite email to your teacher asking permission to submit your project two days late. Give a clear reason.",
    "Write a short, polite email to a friend inviting them to your birthday party. Give the date, time and place.",
    "Write a short, polite letter to your head teacher suggesting a new club for the school. Give one clear reason.",
    "Write a short, polite email to a shop asking why your order has not arrived. Give the order details.",
    "Write a short, polite thank-you letter to a relative who sent you a gift. Say what it was and why you liked it."
  ],
  "Write a counter-argument to a given opinion": [
    "Someone says: “Homework should be banned.” Write a counter-argument explaining why homework can be helpful. Give two reasons.",
    "Someone says: “Children should not play sport at school.” Write a counter-argument explaining why sport is good. Give two reasons.",
    "Someone says: “Reading books is a waste of time.” Write a counter-argument explaining why reading is helpful. Give two reasons.",
    "Someone says: “Students should not learn a second language.” Write a counter-argument explaining why it is useful. Give two reasons.",
    "Someone says: “School trips are not important.” Write a counter-argument explaining why they are valuable. Give two reasons."
  ],
  "Edit a sample paragraph and suggest 3 improvements": [
    "Rewrite this weak paragraph to make it better, then list 3 improvements you made: “The movie was good. It was really good. I liked it a lot because it was good and fun.”",
    "Rewrite this weak paragraph to make it better, then list 3 improvements you made: “My holiday was nice. It was very nice. We did nice things. It was a nice time.”",
    "Rewrite this weak paragraph to make it better, then list 3 improvements you made: “The food was good. The food was really good. I ate a lot because it was good.”",
    "Rewrite this weak paragraph to make it better, then list 3 improvements you made: “The game was fun. It was so fun. We had fun. Everyone had fun playing.”",
    "Rewrite this weak paragraph to make it better, then list 3 improvements you made: “The dog was big. It was very big. It ran big. The big dog was big.”"
  ],
  "Expand a single sentence into a full paragraph": [
    "Expand this sentence into a full paragraph of 6–8 sentences: “The storm arrived suddenly.”",
    "Expand this sentence into a full paragraph of 6–8 sentences: “The old house stood at the end of the street.”",
    "Expand this sentence into a full paragraph of 6–8 sentences: “She opened the door and could not believe her eyes.”",
    "Expand this sentence into a full paragraph of 6–8 sentences: “The market was crowded that morning.”",
    "Expand this sentence into a full paragraph of 6–8 sentences: “The little boat sailed far from shore.”"
  ],
  "Write a short narrative with a clear beginning, middle, and end": [
    "Write a short story about a student who finds a mysterious key. Include a clear beginning, middle and end.",
    "Write a short story about a child who finds a lost dog. Include a clear beginning, middle and end.",
    "Write a short story about a team that wins an important game. Include a clear beginning, middle and end.",
    "Write a short story about a family that goes on a surprise trip. Include a clear beginning, middle and end.",
    "Write a short story about a girl who learns to ride a bike. Include a clear beginning, middle and end."
  ]
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
  {q:"In 'The red car is fast', which word is a NOUN?",options:["red","car","is","fast"],answer:1},
  {q:"In 'The old dog sleeps quietly', which word is a NOUN?",options:["old","dog","sleeps","quietly"],answer:1},
  {q:"In 'A bright star shines', which word is an ADJECTIVE?",options:["bright","star","shines","A"],answer:0},
  {q:"In 'The children play games', which word is a VERB?",options:["children","play","games","The"],answer:1},
  {q:"In 'A cold wind blew hard', which word is a NOUN?",options:["cold","wind","blew","hard"],answer:1},
  {q:"In 'The clever girl solved it', which word is an ADJECTIVE?",options:["clever","girl","solved","it"],answer:0},
  {q:"In 'Fish swim in water', which word is a VERB?",options:["Fish","swim","water","in"],answer:1}
 ],
 sva:[
  {q:"Choose the correct verb: 'She ___ to school every day.'",options:["go","goes","going","gone"],answer:1},
  {q:"Choose the correct verb: 'The dogs ___ loudly.'",options:["barks","bark","barking","is bark"],answer:1},
  {q:"Choose the correct verb: 'He ___ football on Fridays.'",options:["play","plays","playing","are play"],answer:1},
  {q:"Choose the correct verb: 'My friends ___ here.'",options:["is","am","are","was"],answer:2},
  {q:"Choose the correct verb: 'Each student ___ a book.'",options:["have","has","having","are"],answer:1},
  {q:"Choose the correct verb: 'There ___ many books on the shelf.'",options:["is","are","was","be"],answer:1},
  {q:"Choose the correct verb: 'The cat ___ on the sofa.'",options:["sit","sits","sitting","are sit"],answer:1},
  {q:"Choose the correct verb: 'My brothers ___ tall.'",options:["is","am","are","was"],answer:2},
  {q:"Choose the correct verb: 'She ___ her homework now.'",options:["do","does","doing","done"],answer:1},
  {q:"Choose the correct verb: 'The children ___ in the garden.'",options:["plays","play","is playing","was play"],answer:1},
  {q:"Choose the correct verb: 'One of the boys ___ late.'",options:["are","were","is","have"],answer:2},
  {q:"Choose the correct verb: 'My mother ___ dinner every evening.'",options:["cook","cooks","cooking","are cook"],answer:1}
 ],
 tense:[
  {q:"Past tense: 'Yesterday I ___ lunch.'",options:["eat","ate","eaten","eats"],answer:1},
  {q:"Future tense: 'Tomorrow she ___ to the park.'",options:["walk","walks","will walk","walked"],answer:2},
  {q:"Present continuous: 'Right now they ___ football.'",options:["play","plays","are playing","played"],answer:2},
  {q:"Past tense of 'go': 'We ___ to the market.'",options:["go","went","gone","goes"],answer:1},
  {q:"Past tense of 'run': 'He ___ very fast.'",options:["run","ran","runs","running"],answer:1},
  {q:"Correct form: 'She has ___ her homework.'",options:["do","did","done","doing"],answer:2},
  {q:"Past tense: 'Last night we ___ a film.'",options:["watch","watched","watches","watching"],answer:1},
  {q:"Future tense: 'Next week they ___ their grandmother.'",options:["visit","visits","will visit","visited"],answer:2},
  {q:"Present continuous: 'Look! The baby ___ now.'",options:["sleep","sleeps","is sleeping","slept"],answer:2},
  {q:"Past tense of 'see': 'I ___ a rainbow yesterday.'",options:["see","saw","seen","sees"],answer:1},
  {q:"Past tense of 'buy': 'She ___ a new bag.'",options:["buy","buyed","bought","buys"],answer:2},
  {q:"Future tense: 'I ___ you tomorrow.'",options:["call","called","will call","calling"],answer:2}
 ],
 punct:[
  {q:"Which end mark best completes the sentence? 'How old are you___'",options:[".","?","!",","],answer:1},
  {q:"Which end mark best completes the sentence? 'What a lovely day___'",options:[".","?","!",","],answer:2},
  {q:"Which end mark best completes the sentence? 'Please close the door___'",options:[".","?","!",";"],answer:0},
  {q:"Which end mark best completes the sentence? 'Where is my bag___'",options:[".","?","!",","],answer:1},
  {q:"Which end mark best completes the sentence? 'Watch out___'",options:[".","?","!",","],answer:2},
  {q:"Which end mark best completes the sentence? 'I am so happy___'",options:[".","?","!",";"],answer:2},
  {q:"Which end mark best completes the sentence? 'The sky is blue___'",options:[".","?","!",","],answer:0},
  {q:"Which end mark best completes the sentence? 'Do you like tea___'",options:[".","?","!",","],answer:1},
  {q:"Which end mark best completes the sentence? 'Stop right now___'",options:[".","?","!",";"],answer:2},
  {q:"Which end mark best completes the sentence? 'She reads every day___'",options:[".","?","!",","],answer:0},
  {q:"Which end mark best completes the sentence? 'Are you coming with us___'",options:[".","?","!",","],answer:1},
  {q:"Which end mark best completes the sentence? 'We won the game___'",options:[".","?","!",";"],answer:2}
 ],
 conj:[
  {q:"Choose the best joining word: 'I was tired, ___ I kept working.'",options:["so","but","or","because"],answer:1},
  {q:"Choose the best joining word: 'She stayed home ___ it was raining.'",options:["but","because","or","so"],answer:1},
  {q:"Choose the best joining word: 'Do you want tea ___ coffee?'",options:["and","but","or","so"],answer:2},
  {q:"Choose the best joining word: 'He studied hard, ___ he passed.'",options:["but","or","so","because"],answer:2},
  {q:"Choose the best joining word: 'I like apples ___ bananas.'",options:["but","so","and","because"],answer:2},
  {q:"Choose the best joining word: 'It was late, ___ we went home.'",options:["because","so","or","but"],answer:1},
  {q:"Choose the best joining word: 'I was hungry, ___ I ate an apple.'",options:["but","so","or","because"],answer:1},
  {q:"Choose the best joining word: 'He is small ___ strong.'",options:["so","because","but","or"],answer:2},
  {q:"Choose the best joining word: 'We can walk ___ take the bus.'",options:["and","or","so","because"],answer:1},
  {q:"Choose the best joining word: 'She was sad ___ she lost her toy.'",options:["but","or","so","because"],answer:3},
  {q:"Choose the best joining word: 'I like tea ___ I do not like coffee.'",options:["so","but","because","or"],answer:1},
  {q:"Choose the best joining word: 'It was sunny, ___ we went outside.'",options:["because","so","but","or"],answer:1}
 ],
 frag:[
  {q:"Which one is a COMPLETE sentence?",options:["Running to school.","The boy ran to school.","Because he was late.","In the morning."],answer:1},
  {q:"Which one is a FRAGMENT (not complete)?",options:["She sings.","After the game.","They left.","It rained."],answer:1},
  {q:"Choose the complete sentence:",options:["When I arrived.","I arrived early.","Arriving early.","To arrive early."],answer:1},
  {q:"Which one is complete?",options:["The tall tree.","The tall tree fell.","Falling down.","Very tall."],answer:1},
  {q:"Best way to fix the fragment 'Because it was cold.'",options:["Because it was cold.","We stayed inside because it was cold.","Cold weather today.","It cold."],answer:1},
  {q:"Which one is a sentence?",options:["Birds in the sky.","Birds fly in the sky.","Flying very high.","The blue sky."],answer:1},
  {q:"Which one is a COMPLETE sentence?",options:["Under the big tree.","The girl read a book.","Playing all day.","On a hot morning."],answer:1},
  {q:"Which one is a FRAGMENT (not complete)?",options:["We ran.","When the bell rang.","She smiled.","Birds sing."],answer:1},
  {q:"Choose the complete sentence:",options:["Before the film started.","The film started at six.","Starting the film.","To watch the film."],answer:1},
  {q:"Which one is complete?",options:["A very long road.","The road was long.","Going down the road.","Long and empty."],answer:1},
  {q:"Best way to fix the fragment 'After we ate lunch.'",options:["After we ate lunch.","After we ate lunch, we rested.","Lunch was nice.","Ate lunch we."],answer:1},
  {q:"Which one is a sentence?",options:["A cat on the wall.","The cat sat on the wall.","Sitting on the wall.","The high wall."],answer:1}
 ],
 capital:[
  {q:"Which word is a NAME and needs a capital letter? 'we met hassan at the shop.'",options:["we","met","hassan","shop"],answer:2},
  {q:"Which word is a PLACE and needs a capital letter? 'i travel to dubai by car.'",options:["travel","dubai","car","by"],answer:1},
  {q:"Which word is a NAME and needs a capital letter? 'my friend fatima is kind.'",options:["friend","fatima","kind","my"],answer:1},
  {q:"Which word is a PLACE and needs a capital letter? 'we live near the nile.'",options:["live","near","nile","the"],answer:2},
  {q:"Which word is a LANGUAGE and needs a capital letter? 'she speaks arabic well.'",options:["speaks","arabic","well","she"],answer:1},
  {q:"Which word is a PLACE and needs a capital letter? 'they visited paris last year.'",options:["visited","paris","year","last"],answer:1},
  {q:"Which word is a NAME and needs a capital letter? 'omar plays very fast.'",options:["omar","plays","very","fast"],answer:0},
  {q:"Which word is a FESTIVAL and needs a capital letter? 'we celebrate eid together.'",options:["celebrate","eid","together","we"],answer:1},
  {q:"Which word is a NAME and needs a capital letter? 'ali swims very well.'",options:["ali","swims","very","well"],answer:0},
  {q:"Which word is a PLACE and needs a capital letter? 'my school is in ajman.'",options:["school","ajman","my","in"],answer:1},
  {q:"Which word is a special book and needs a capital letter? 'we read the quran daily.'",options:["read","quran","daily","we"],answer:1},
  {q:"Which word is a PLACE and needs a capital letter? 'she is from morocco.'",options:["she","from","morocco","is"],answer:2}
 ],
 comma:[
  {q:"In 'After lunch we played', a comma is needed after which word?",options:["After","lunch","we","played"],answer:1},
  {q:"In 'Yes I agree', a comma is needed after which word?",options:["Yes","I","agree","played"],answer:0},
  {q:"In 'Before we eat we wash', a comma is needed after which word?",options:["Before","eat","we","wash"],answer:1},
  {q:"In 'When it rained we ran inside', a comma is needed after which word?",options:["When","rained","we","inside"],answer:1},
  {q:"In 'No I do not agree', a comma is needed after which word?",options:["No","do","not","agree"],answer:0},
  {q:"In 'After school we play', a comma is needed after which word?",options:["After","school","we","play"],answer:1},
  {q:"In 'We visited Cairo Egypt', a comma is needed after which word?",options:["We","visited","Cairo","Egypt"],answer:2},
  {q:"In 'In the morning we run', a comma is needed after which word?",options:["In","morning","we","run"],answer:1},
  {q:"In 'Well I am not sure', a comma is needed after which word?",options:["Well","I","am","sure"],answer:0},
  {q:"In 'Because it was late we left', a comma is needed after which word?",options:["Because","was","late","left"],answer:2},
  {q:"In 'We flew to Rome Italy', a comma is needed after which word?",options:["We","flew","Rome","Italy"],answer:2},
  {q:"In 'If you help we finish faster', a comma is needed after which word?",options:["If","you","help","faster"],answer:2}
 ],
 voice:[
  {q:"Change to ACTIVE voice: 'The ball was kicked by Ali.'",options:["Ali kicks the ball.","Ali kicked the ball.","The ball kicked Ali.","Ali is kicking."],answer:1},
  {q:"Change to ACTIVE voice: 'The cake was eaten by the boy.'",options:["The boy eats the cake.","The boy ate the cake.","The cake ate the boy.","The boy is eaten."],answer:1},
  {q:"Change to ACTIVE voice: 'The letter was written by Sara.'",options:["Sara writes the letter.","Sara wrote the letter.","The letter wrote Sara.","Sara is written."],answer:1},
  {q:"Which sentence is in the ACTIVE voice?",options:["The window was broken.","The window was broken by Sam.","Sam broke the window.","The window broke was."],answer:2},
  {q:"Change to ACTIVE voice: 'The song was sung by the class.'",options:["The class sings the song.","The class sang the song.","The song sang the class.","The class is sung."],answer:1},
  {q:"Change to ACTIVE voice: 'The house was built by workers.'",options:["Workers build the house.","Workers built the house.","The house built workers.","The house is worker."],answer:1},
  {q:"Change to ACTIVE voice: 'The door was opened by Sam.'",options:["Sam opens the door.","Sam opened the door.","The door opened Sam.","Sam is opened."],answer:1},
  {q:"Change to ACTIVE voice: 'The apple was eaten by Nora.'",options:["Nora eats the apple.","Nora ate the apple.","The apple ate Nora.","Nora is eaten."],answer:1},
  {q:"Which sentence is in the ACTIVE voice?",options:["The wall was painted.","The wall was painted by Ali.","Ali painted the wall.","The wall painted was."],answer:2},
  {q:"Change to ACTIVE voice: 'The picture was drawn by Maryam.'",options:["Maryam draws the picture.","Maryam drew the picture.","The picture drew Maryam.","Maryam is drawn."],answer:1},
  {q:"Change to ACTIVE voice: 'The bread was baked by the cook.'",options:["The cook bakes the bread.","The cook baked the bread.","The bread baked the cook.","The cook is baked."],answer:1},
  {q:"Change to ACTIVE voice: 'The game was won by our team.'",options:["Our team wins the game.","Our team won the game.","The game won our team.","Our team is won."],answer:1}
 ],
 apos:[
  {q:"'the girls' bags' means the bags belong to:",options:["one girl","many girls","a shop","no one"],answer:1},
  {q:"'the boy's ball' means the ball belongs to:",options:["one boy","many boys","the team","no one"],answer:0},
  {q:"'It's' is the short form of which two words?",options:["it is","the cat","many its","was not"],answer:0},
  {q:"Which shows that ONE cat owns the toy?",options:["the cat's toy","the cats toy","the cats' toy","the cat toy"],answer:0},
  {q:"Which shows that MANY students own the bags?",options:["the students' bags","the student's bags","the students bags","the student bag"],answer:0},
  {q:"The short form of 'cannot' is:",options:["can't","cannot's","cant'","canot"],answer:0},
  {q:"The short form of 'they are' is:",options:["they're","their","there","theyre"],answer:0},
  {q:"In 'The dog ate its food', why is there NO apostrophe in 'its'?",options:["it shows belonging, not 'it is'","it is plural","it is a name","it is a spelling error"],answer:0},
  {q:"'Ali's book' tells us the book belongs to:",options:["Ali","many people","a library","no one"],answer:0},
  {q:"The short form of 'we will' is:",options:["we'll","well","wewill","we'l"],answer:0},
  {q:"'The children's toys' means the toys belong to:",options:["the children","one child only","the shop","no one"],answer:0},
  {q:"Which sentence is written correctly?",options:["I don't know the answer.","I do'nt know the answer.","I dont know the answer.","I don,t know the answer."],answer:0}
 ],
 clause:[
  {q:"In 'When it rains, we stay in', the DEPENDENT clause is:",options:["we stay in","When it rains","rains","stay"],answer:1},
  {q:"A phrase does NOT have:",options:["words","a subject and a verb together","meaning","nouns"],answer:1},
  {q:"In 'She smiled because she won', the MAIN clause is:",options:["because she won","She smiled","she won","won"],answer:1},
  {q:"Which group of words is a CLAUSE?",options:["in the garden","the tall boy","he runs","under the table"],answer:2},
  {q:"Which group of words is a PHRASE (not a clause)?",options:["the dog barked","on the table","they left","I sleep"],answer:1},
  {q:"In 'After we ate, we slept', which part is the dependent clause?",options:["After we ate","we slept","ate","slept"],answer:0},
  {q:"In 'Before we sleep, we read', the DEPENDENT clause is:",options:["we read","Before we sleep","read","sleep"],answer:1},
  {q:"A clause always has:",options:["only a noun","a subject and a verb","no verb","only adjectives"],answer:1},
  {q:"In 'He laughed because it was funny', the MAIN clause is:",options:["because it was funny","He laughed","it was funny","funny"],answer:1},
  {q:"Which group of words is a CLAUSE?",options:["near the door","the small cat","she sang","behind the wall"],answer:2},
  {q:"Which group of words is a PHRASE (not a clause)?",options:["the bird flew","in the box","we ran","I read"],answer:1},
  {q:"In 'If it rains, we stay home', which part is the dependent clause?",options:["If it rains","we stay home","rains","home"],answer:0}
 ],
 pronoun:[
  {q:"Choose the correct pronoun: 'Each boy brought ___ bag.'",options:["their","his","them","its"],answer:1},
  {q:"Choose the correct pronoun: 'The girls finished ___ work.'",options:["her","his","their","its"],answer:2},
  {q:"Choose the correct pronoun: 'The cat licked ___ paw.'",options:["their","his","its","her"],answer:2},
  {q:"Choose the correct pronoun: 'Ali and I did ___ homework.'",options:["my","his","our","their"],answer:2},
  {q:"Choose the correct pronoun: 'Sara lost ___ pen.'",options:["his","her","their","its"],answer:1},
  {q:"Choose the correct pronoun: 'The students raised ___ hands.'",options:["his","her","its","their"],answer:3},
  {q:"Choose the correct pronoun: 'Every girl brought ___ lunch.'",options:["their","her","them","its"],answer:1},
  {q:"Choose the correct pronoun: 'The boys cleaned ___ room.'",options:["his","her","their","its"],answer:2},
  {q:"Choose the correct pronoun: 'The dog wagged ___ tail.'",options:["their","his","its","her"],answer:2},
  {q:"Choose the correct pronoun: 'My sister and I finished ___ project.'",options:["my","his","our","their"],answer:2},
  {q:"Choose the correct pronoun: 'Omar forgot ___ keys.'",options:["her","his","their","its"],answer:1},
  {q:"Choose the correct pronoun: 'The players wore ___ uniforms.'",options:["his","her","its","their"],answer:3}
 ]
};

/* ---------- VOCABULARY: activity -> sub-skill, and questions per sub-skill ---------- */
var VOCAB_ACT = {
  "Learn 5 new academic words and use each in a sentence":"usage",
  "Match 8 synonyms and 8 antonyms":"synant",
  "Break 5 words into prefix / root / suffix and give meanings":"affix",
  "Use context clues to define 5 unknown words":"context",
  "Identify and explain 6 examples of figurative language":"figurative",
  "Sort 10 words by connotation (positive / negative / neutral)":"connotation",
  "Make a word web for 5 new words (synonyms, antonyms, examples)":"synant",
  "Use 6 new words correctly in a short paragraph":"usage",
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
  {q:"What does 'accurate' mean?",options:["wrong","correct","funny","heavy"],answer:1},
  {q:"What does 'increase' mean?",options:["make more","make less","stop","hide"],answer:0},
  {q:"What does 'similar' mean?",options:["different","almost the same","broken","empty"],answer:1},
  {q:"What does 'create' mean?",options:["to destroy","to make","to lose","to sleep"],answer:1},
  {q:"What does 'difficult' mean?",options:["easy","hard","funny","small"],answer:1},
  {q:"What does 'improve' mean?",options:["make worse","make better","copy","forget"],answer:1},
  {q:"What does 'require' mean?",options:["to need","to give","to drop","to laugh"],answer:0}
 ],
 usage:[
  {q:"Which sentence uses 'benefit' correctly?",options:["The rain will benefit the crops.","I benefit my shoes every day.","The benefit ran across the road.","She felt very benefit."],answer:0},
  {q:"Which sentence uses 'rapid' correctly?",options:["The rapid river flowed very quickly.","I rapid to school this morning.","He bought a rapid for lunch.","The wall was painted rapid."],answer:0},
  {q:"Which sentence uses 'observe' correctly?",options:["We observe the stars at night.","I observe a sandwich for lunch.","The observe is very tall.","She observed blue."],answer:0},
  {q:"Which sentence uses 'essential' correctly?",options:["Water is essential for life.","I essential the door shut.","He ran essential to the park.","The essential ate lunch."],answer:0},
  {q:"Which sentence uses 'reduce' correctly?",options:["Please reduce the noise in class.","I reduce to the shop each day.","The reduce is bright red.","She felt very reduce today."],answer:0},
  {q:"Which sentence uses 'accurate' correctly?",options:["Her answer was accurate and correct.","I accurate my bag this morning.","The accurate jumped over the fence.","We accurate our lunch quickly."],answer:0},
  {q:"Which sentence uses 'increase' correctly?",options:["Prices increase when things cost more.","I increase my shoes daily.","The increase ate lunch.","He felt very increase."],answer:0},
  {q:"Which sentence uses 'create' correctly?",options:["Artists create beautiful paintings.","I create to school each day.","The create is red.","She felt create."],answer:0},
  {q:"Which sentence uses 'similar' correctly?",options:["The twins look very similar.","I similar my bag.","He ran similar.","We similar lunch."],answer:0},
  {q:"Which sentence uses 'difficult' correctly?",options:["The test was long and difficult.","I difficult the door.","The difficult jumped up.","We difficult our food."],answer:0},
  {q:"Which sentence uses 'improve' correctly?",options:["Practice will improve your skills.","I improve to the shop.","The improve is bright.","She felt improve."],answer:0},
  {q:"Which sentence uses 'require' correctly?",options:["Plants require sunlight to grow.","I require to school daily.","The require is tall.","We require blue."],answer:0}
 ],
 synant:[
  {q:"Choose a SYNONYM for 'happy':",options:["sad","glad","angry","tired"],answer:1},
  {q:"Choose an ANTONYM for 'big':",options:["large","huge","small","tall"],answer:2},
  {q:"Choose a SYNONYM for 'fast':",options:["slow","quick","late","heavy"],answer:1},
  {q:"Choose an ANTONYM for 'begin':",options:["start","open","end","run"],answer:2},
  {q:"Choose a SYNONYM for 'smart':",options:["clever","lazy","weak","loud"],answer:0},
  {q:"Choose an ANTONYM for 'hot':",options:["warm","cold","sunny","dry"],answer:1},
  {q:"Choose a SYNONYM for 'begin':",options:["stop","start","close","rest"],answer:1},
  {q:"Choose an ANTONYM for 'happy':",options:["glad","cheerful","sad","kind"],answer:2},
  {q:"Choose a SYNONYM for 'small':",options:["tiny","huge","tall","wide"],answer:0},
  {q:"Choose an ANTONYM for 'day':",options:["morning","night","noon","light"],answer:1},
  {q:"Choose a SYNONYM for 'angry':",options:["calm","mad","happy","kind"],answer:1},
  {q:"Choose an ANTONYM for 'open':",options:["shut","wide","start","free"],answer:0}
 ],
 affix:[
  {q:"The prefix 'un-' in 'unhappy' means:",options:["very","not","again","before"],answer:1},
  {q:"The prefix 're-' in 'redo' means:",options:["not","again","before","after"],answer:1},
  {q:"The suffix '-ful' in 'helpful' means:",options:["without","full of","small","before"],answer:1},
  {q:"The prefix 'pre-' in 'preview' means:",options:["after","before","not","again"],answer:1},
  {q:"The suffix '-less' in 'hopeless' means:",options:["full of","without","more","small"],answer:1},
  {q:"In 'teacher', the suffix '-er' means:",options:["one who does something","not","again","before"],answer:0},
  {q:"The prefix 'dis-' in 'disagree' means:",options:["again","not or opposite","before","very"],answer:1},
  {q:"The suffix '-able' in 'readable' means:",options:["able to be","without","before","more"],answer:0},
  {q:"The prefix 'mis-' in 'misspell' means:",options:["wrongly","again","before","not at all"],answer:0},
  {q:"The suffix '-ly' in 'quickly' makes a word that tells:",options:["how something is done","a place","a person","a number"],answer:0},
  {q:"The prefix 'over-' in 'overeat' means:",options:["too much","not enough","before","again"],answer:0},
  {q:"In 'painter', the suffix '-er' means:",options:["one who paints","not paint","paint again","before paint"],answer:0}
 ],
 context:[
  {q:"'The arid desert had no water for miles.' 'Arid' means:",options:["wet","dry","cold","green"],answer:1},
  {q:"'He was so fatigued that he fell asleep.' 'Fatigued' means:",options:["hungry","tired","happy","angry"],answer:1},
  {q:"'The generous man gave food to everyone.' 'Generous' means:",options:["giving","mean","quiet","rich"],answer:0},
  {q:"'The path was so narrow only one person could pass.' 'Narrow' means:",options:["wide","thin","long","dark"],answer:1},
  {q:"'She felt anxious before the big test.' 'Anxious' means:",options:["calm","worried","bored","sleepy"],answer:1},
  {q:"'The ancient ruins were thousands of years old.' 'Ancient' means:",options:["new","very old","small","broken"],answer:1},
  {q:"'The huge, gigantic ship filled the harbour.' 'Gigantic' means:",options:["tiny","very big","fast","broken"],answer:1},
  {q:"'She was timid and afraid to speak.' 'Timid' means:",options:["brave","shy","loud","happy"],answer:1},
  {q:"'The soup was so bland it had no taste.' 'Bland' means:",options:["spicy","without flavour","hot","sweet"],answer:1},
  {q:"'He is a loyal friend who never lets me down.' 'Loyal' means:",options:["faithful","unkind","lazy","strange"],answer:0},
  {q:"'The room was spotless, without a speck of dust.' 'Spotless' means:",options:["dirty","very clean","dark","small"],answer:1},
  {q:"'The weather was dreadful, with storms all day.' 'Dreadful' means:",options:["lovely","very bad","warm","calm"],answer:1}
 ],
 figurative:[
  {q:"'The stars danced in the sky.' This is:",options:["a simile","a metaphor","personification","a fact"],answer:2},
  {q:"'As brave as a lion' is a:",options:["metaphor","simile","personification","idiom"],answer:1},
  {q:"'Time is money' is a:",options:["simile","metaphor","fact","question"],answer:1},
  {q:"'It's raining cats and dogs' is an:",options:["idiom","fact","simile","metaphor"],answer:0},
  {q:"'The wind whispered through the trees.' This is:",options:["a simile","personification","a fact","a metaphor"],answer:1},
  {q:"'He runs like the wind.' This is a:",options:["metaphor","idiom","simile","fact"],answer:2},
  {q:"'Her smile was as bright as the sun.' This is:",options:["a metaphor","a simile","personification","an idiom"],answer:1},
  {q:"'The classroom was a zoo.' This is:",options:["a simile","a metaphor","personification","a fact"],answer:1},
  {q:"'The old floor groaned under our feet.' This is:",options:["a simile","personification","a fact","a metaphor"],answer:1},
  {q:"'Break a leg!' before a show is an:",options:["idiom","simile","metaphor","fact"],answer:0},
  {q:"'He was as busy as a bee.' This is a:",options:["metaphor","idiom","simile","fact"],answer:2},
  {q:"'The sun smiled down on us.' This is:",options:["a simile","personification","a fact","an idiom"],answer:1}
 ],
 connotation:[
  {q:"Which word has a POSITIVE feeling?",options:["cheap","thrifty","stingy","mean"],answer:1},
  {q:"Which word sounds NEGATIVE?",options:["confident","proud","arrogant","sure"],answer:2},
  {q:"Which word is more POSITIVE?",options:["skinny","slim","bony","scrawny"],answer:1},
  {q:"Which word is NEUTRAL (no strong feeling)?",options:["home","mansion","shack","dump"],answer:0},
  {q:"Which word has a NEGATIVE connotation?",options:["relaxed","lazy","calm","easy-going"],answer:1},
  {q:"Which word has a POSITIVE connotation?",options:["nosy","curious","prying","meddling"],answer:1},
  {q:"Which word has a POSITIVE feeling?",options:["cheap","affordable","stingy","broke"],answer:1},
  {q:"Which word sounds NEGATIVE?",options:["young","childish","youthful","fresh"],answer:1},
  {q:"Which word is more POSITIVE?",options:["odd","unique","weird","strange"],answer:1},
  {q:"Which word is NEUTRAL (no strong feeling)?",options:["car","junker","clunker","wreck"],answer:0},
  {q:"Which word has a NEGATIVE connotation?",options:["smell","aroma","stink","scent"],answer:2},
  {q:"Which word has a POSITIVE connotation?",options:["cheap","bargain","tacky","shoddy"],answer:1}
 ],
 precise:[
  {q:"A stronger word for 'said angrily' is:",options:["whispered","shouted","asked","replied"],answer:1},
  {q:"A more precise word for 'walked slowly' is:",options:["strolled","ran","jumped","drove"],answer:0},
  {q:"Choose a stronger word than 'big':",options:["nice","enormous","small","good"],answer:1},
  {q:"A stronger word for 'happy' is:",options:["okay","delighted","fine","calm"],answer:1},
  {q:"A more precise word for tasty food is:",options:["nice","delicious","big","fast"],answer:1},
  {q:"A stronger word for 'looked' is:",options:["saw","stared","had","went"],answer:1},
  {q:"A stronger word for 'ran quickly' is:",options:["walked","sprinted","stood","sat"],answer:1},
  {q:"A more precise word for 'said quietly' is:",options:["shouted","whispered","yelled","cried"],answer:1},
  {q:"Choose a stronger word than 'sad':",options:["fine","miserable","calm","okay"],answer:1},
  {q:"A stronger word for 'cold' is:",options:["cool","freezing","mild","warm"],answer:1},
  {q:"A stronger word for a 'nice' view is:",options:["okay","breathtaking","fine","plain"],answer:1},
  {q:"A more precise word for 'went fast' is:",options:["moved","raced","stayed","waited"],answer:1}
 ],
 root:[
  {q:"Which word shares the root 'port' (to carry) with 'transport'?",options:["import","garden","happy","quickly"],answer:0},
  {q:"'Telephone' and 'television' share 'tele-', which means:",options:["near","far","sound","see"],answer:1},
  {q:"Which word shares the root 'aud' (to hear) with 'audible'?",options:["audience","garden","running","table"],answer:0},
  {q:"'Biology' and 'biography' share 'bio-', which means:",options:["earth","life","water","light"],answer:1},
  {q:"Which word shares the root 'dict' (to say) with 'dictionary'?",options:["predict","painting","flower","jump"],answer:0},
  {q:"'Spectator' and 'inspect' share 'spect', which means:",options:["hear","look","run","write"],answer:1},
  {q:"Which word shares the root 'graph' (to write) with 'autograph'?",options:["paragraph","garden","happy","table"],answer:0},
  {q:"'Microscope' and 'microphone' share 'micro-', which means:",options:["big","small","fast","round"],answer:1},
  {q:"Which word shares the root 'vis' (to see) with 'visible'?",options:["vision","garden","running","chair"],answer:0},
  {q:"'Thermometer' and 'thermal' share 'therm', which means:",options:["water","heat","light","sound"],answer:1},
  {q:"Which word shares the root 'struct' (to build) with 'construct'?",options:["structure","flower","jump","happy"],answer:0},
  {q:"'Century' and 'centimetre' share 'cent', which means:",options:["ten","hundred","half","two"],answer:1}
 ],
 multiple:[
  {q:"'Bat' can mean a flying animal and also:",options:["a fruit","sports equipment","a colour","a drink"],answer:1},
  {q:"'Bark' can mean the sound a dog makes and also:",options:["a tree's outer layer","a car","a book","a shoe"],answer:0},
  {q:"'Trunk' can mean part of a tree and also:",options:["a hat","an elephant's nose","a river","a song"],answer:1},
  {q:"'Ring' can mean jewellery and also:",options:["to make a sound","to sleep","to eat","to read"],answer:0},
  {q:"'Light' can mean 'not heavy' and also:",options:["brightness","water","food","music"],answer:0},
  {q:"'Watch' can mean 'to look' and also:",options:["a clock you wear","a chair","a river","a plant"],answer:0},
  {q:"'Park' can mean a green space and also:",options:["to leave a car somewhere","a type of food","a colour","a song"],answer:0},
  {q:"'Fly' can mean an insect and also:",options:["to move through the air","a chair","a river","a book"],answer:0},
  {q:"'Wave' can mean water in the sea and also:",options:["to move your hand","to sleep","to eat","to read"],answer:0},
  {q:"'Bank' can mean a place for money and also:",options:["the side of a river","a hat","a car","a fruit"],answer:0},
  {q:"'Star' can mean a light in the sky and also:",options:["a famous person","a chair","a river","a shoe"],answer:0},
  {q:"'Match' can mean a game and also:",options:["a small fire stick","a river","a hat","a plant"],answer:0}
 ]
};

/* ---------- READING: activity -> sub-skill, and a passage + matched questions per sub-skill ---------- */
var READING_ACT = {
  "Read a short text and write the main idea + 2 supporting details":"main_idea",
  "Highlight 3 pieces of evidence that support an inference":"inference",
  "Compare two short articles and note 2 similarities and 2 differences":"compare",
  "Summarise a one-page passage in 3–4 sentences":"summary",
  "Answer 5 comprehension questions on a levelled text":"comprehension",
  "Identify the author's purpose and tone in a short article":"purpose_tone",
  "Make 3 predictions about a story and check them after reading":"prediction",
  "Work out 5 unfamiliar words using context clues":"context",
  "Put the main events of a story in the correct order":"sequence",
  "Sort 4 facts from 4 opinions in a short text":"fact_opinion",
  "Write 3 questions about a passage, then find the answers in it":"comprehension",
  "Identify the cause and effect of 3 events in a text":"cause_effect",
  "Explain the theme of a short story in 2–3 sentences":"theme",
  "Make a story map: characters, setting, problem, solution":"story_elements",
  "Read a news article and summarise the 5 Ws (who, what, when, where, why)":"five_ws"
};
// Each value is a list of passages; each passage has questions that test THAT sub-skill.
var READING_BANK = {
 main_idea:[
  {title:"City Parks", text:"City parks give people a place to relax, exercise and meet friends. Trees in parks also clean the air and give shade on hot days. Many families visit parks at the weekend to play and enjoy nature.",
   qs:[
    {q:"What is the MAIN idea of the text?",options:["City parks are useful in many ways","Trees are green","Weekends are long","Friends are fun"],answer:0},
    {q:"Which is a SUPPORTING detail?",options:["Trees clean the air","Parks are boring","People hate parks","Parks have no trees"],answer:0},
    {q:"The BEST title for this text is:",options:["Why City Parks Matter","My Dog","A Rainy Day","Cars in the City"],answer:0},
    {q:"Which detail supports the main idea?",options:["Families visit parks to play","The sky is blue","Cars are fast","Books are heavy"],answer:0}
   ]},
  {title:"Recycling at Home", text:"Recycling helps our planet in simple ways. When we recycle paper, plastic and glass, less rubbish goes to landfill. It also saves energy and keeps our streets clean.",
   qs:[
    {q:"What is the MAIN idea?",options:["Recycling helps the planet in simple ways","Glass is heavy","Streets are long","Paper is white"],answer:0},
    {q:"Which is a SUPPORTING detail?",options:["Recycling saves energy","Recycling is boring","Rubbish is fun","Nobody recycles"],answer:0},
    {q:"The BEST title is:",options:["Why Recycling Helps","My Cat","A Cold Day","Fast Cars"],answer:0},
    {q:"Which detail supports the main idea?",options:["Less rubbish goes to landfill","The sky is grey","Cars are loud","Books are old"],answer:0}
   ]},
  {title:"A Healthy Breakfast", text:"Eating breakfast is good for your body and mind. It gives you energy for the morning and helps you think clearly at school. Children who eat breakfast often do better in class.",
   qs:[
    {q:"What is the MAIN idea?",options:["Breakfast is good for the body and mind","Cereal is sweet","Mornings are cold","Milk is white"],answer:0},
    {q:"Which is a SUPPORTING detail?",options:["Breakfast gives you energy","Breakfast is boring","Nobody eats breakfast","Breakfast is at night"],answer:0},
    {q:"The BEST title is:",options:["Why Breakfast Matters","My Bike","A Rainy Night","Big Trucks"],answer:0},
    {q:"Which detail supports the main idea?",options:["It helps you think clearly","The bus is late","Shoes are new","Grass is green"],answer:0}
   ]},
  {title:"The School Library", text:"The school library is a special place to learn. Students can borrow books, read quietly and find facts for their projects. A good library helps everyone become a better reader.",
   qs:[
    {q:"What is the MAIN idea?",options:["The library is a special place to learn","Books are heavy","Chairs are hard","Rooms are big"],answer:0},
    {q:"Which is a SUPPORTING detail?",options:["Students can borrow books","Libraries are scary","Nobody reads","Books are useless"],answer:0},
    {q:"The BEST title is:",options:["Why the Library Helps Us","My Shoes","A Hot Day","Fast Boats"],answer:0},
    {q:"Which detail supports the main idea?",options:["Students find facts for projects","The floor is clean","Cars are fast","Rain is wet"],answer:0}
   ]},
  {title:"Move Every Day", text:"Exercise keeps our bodies strong and healthy. Running, swimming and playing games make our hearts strong and give us energy. Even a short walk each day is good for us.",
   qs:[
    {q:"What is the MAIN idea?",options:["Exercise keeps us strong and healthy","Water is cold","Games are long","Shoes are white"],answer:0},
    {q:"Which is a SUPPORTING detail?",options:["Exercise makes our hearts strong","Exercise is boring","Nobody moves","Walking is bad"],answer:0},
    {q:"The BEST title is:",options:["Why We Should Exercise","My Pen","A Dark Room","Big Ships"],answer:0},
    {q:"Which detail supports the main idea?",options:["A short walk is good for us","The sky is blue","Cars are red","Books are thin"],answer:0}
   ]}
 ],
 inference:[
  {title:"The Wet Umbrella", text:"When Layla came into the classroom, her umbrella was dripping and her shoes left wet marks on the floor. She shivered and rubbed her cold hands together.",
   qs:[
    {q:"What can you INFER from the text?",options:["It was raining outside","It was a sunny day","Layla was at the beach","Layla was sleeping"],answer:0},
    {q:"Which detail is EVIDENCE that it was raining?",options:["Her umbrella was dripping","She smiled","The room was dark","She had a book"],answer:0},
    {q:"The text suggests Layla felt:",options:["cold","hot","hungry","angry"],answer:0},
    {q:"Which is another clue about the weather?",options:["Wet marks on the floor","A loud bell","A green door","A tall chair"],answer:0}
   ]},
  {title:"The Big Smile", text:"When Yousef saw the wrapped box on the table, his eyes grew wide and he jumped up and down. He hugged his mother tightly and could not stop grinning.",
   qs:[
    {q:"What can you INFER?",options:["Yousef was very happy about a gift","Yousef was angry","Yousef was ill","Yousef was asleep"],answer:0},
    {q:"Which detail is EVIDENCE that he was happy?",options:["He could not stop grinning","The box was square","The table was brown","It was night"],answer:0},
    {q:"The text suggests it was a special:",options:["day","test","chore","argument"],answer:0},
    {q:"Which is another clue about his feelings?",options:["He jumped up and down","The room was small","The door was shut","His bag was blue"],answer:0}
   ]},
  {title:"The Empty Plate", text:"Hana's stomach was making loud noises during the long lesson. She kept looking at the clock and thinking about lunch. When the bell finally rang, she ran straight to the canteen.",
   qs:[
    {q:"What can you INFER?",options:["Hana was very hungry","Hana was sleepy","Hana was cold","Hana was afraid"],answer:0},
    {q:"Which detail is EVIDENCE that she was hungry?",options:["Her stomach made loud noises","The lesson was short","The clock was new","Her pen was red"],answer:0},
    {q:"The text suggests Hana was waiting for:",options:["lunch","a bus","a friend","the rain"],answer:0},
    {q:"Which is another clue?",options:["She ran straight to the canteen","The room was warm","The door was open","The bag was heavy"],answer:0}
   ]},
  {title:"A Long Day", text:"After the football match, Sami's legs felt heavy and his eyes kept closing. He yawned again and again on the way home and fell asleep before dinner.",
   qs:[
    {q:"What can you INFER?",options:["Sami was very tired","Sami was hungry","Sami was excited","Sami was angry"],answer:0},
    {q:"Which detail is EVIDENCE that he was tired?",options:["His eyes kept closing","The ball was white","The road was long","His shirt was blue"],answer:0},
    {q:"The text suggests the match made Sami:",options:["exhausted","happy only","hungry only","scared"],answer:0},
    {q:"Which is another clue?",options:["He yawned again and again","The sky was clear","The gate was open","His bag was full"],answer:0}
   ]},
  {title:"Before the Stage", text:"Maha's hands were shaking and her mouth felt dry as she waited behind the curtain. She peeked at the large crowd and took a deep breath.",
   qs:[
    {q:"What can you INFER?",options:["Maha felt nervous","Maha felt sleepy","Maha felt bored","Maha felt cold"],answer:0},
    {q:"Which detail is EVIDENCE that she was nervous?",options:["Her hands were shaking","The curtain was red","The stage was wide","Her shoes were new"],answer:0},
    {q:"The text suggests Maha was about to:",options:["perform in front of people","eat dinner","go to sleep","play football"],answer:0},
    {q:"Which is another clue?",options:["Her mouth felt dry","The lights were bright","The floor was clean","Her bag was blue"],answer:0}
   ]}
 ],
 compare:[
  {title:"Two Short Articles", text:"Text 1: Cats make good pets. They are quiet, they clean themselves, and they do not need long walks.\nText 2: Dogs make good pets too. They are friendly and playful, but they need daily walks and lots of space.",
   qs:[
    {q:"What do BOTH texts say?",options:["The animal makes a good pet","The animal needs long walks","The animal is very quiet","The animal is large"],answer:0},
    {q:"One DIFFERENCE between the texts is:",options:["Dogs need walks but cats do not","Both animals are fish","Neither animal is a pet","Both need lots of space"],answer:0},
    {q:"According to Text 1, cats are:",options:["quiet and clean","loud and messy","big and slow","wild"],answer:0},
    {q:"According to Text 2, dogs need:",options:["daily walks and space","no care at all","to be alone","only a bath"],answer:0}
   ]},
  {title:"Two Seasons", text:"Text 1: Summer is warm and sunny. People swim at the beach and eat cold ice cream.\nText 2: Winter is cold and cloudy. People wear warm coats and drink hot tea.",
   qs:[
    {q:"What do BOTH texts describe?",options:["a season of the year","a swimming pool","a hot drink","a beach"],answer:0},
    {q:"One DIFFERENCE is:",options:["Summer is warm but winter is cold","Both seasons are cold","Both seasons are hot","Neither season has weather"],answer:0},
    {q:"According to Text 1, summer is:",options:["warm and sunny","cold and cloudy","dark and wet","windy and grey"],answer:0},
    {q:"According to Text 2, in winter people:",options:["wear warm coats","swim at the beach","eat ice cream","stay cold on purpose"],answer:0}
   ]},
  {title:"Two Ways to Travel", text:"Text 1: A bus can carry many people at once. It follows a set route and stops at bus stops.\nText 2: A bike carries one person. It can go almost anywhere and is good exercise.",
   qs:[
    {q:"What do BOTH texts describe?",options:["a way to travel","a type of food","a school subject","a sport only"],answer:0},
    {q:"One DIFFERENCE is:",options:["A bus carries many people but a bike carries one","Both carry many people","Both are food","Neither can move"],answer:0},
    {q:"According to Text 1, a bus:",options:["follows a set route","goes anywhere","carries one person","is exercise"],answer:0},
    {q:"According to Text 2, a bike is:",options:["good exercise","very large","for many people","only for buses"],answer:0}
   ]},
  {title:"Two Fruits", text:"Text 1: Apples are sweet and crunchy. They can be red or green and grow on trees.\nText 2: Oranges are juicy and a little sour. They are orange in colour and full of vitamin C.",
   qs:[
    {q:"What do BOTH texts describe?",options:["a kind of fruit","a vegetable","a drink","a tree only"],answer:0},
    {q:"One DIFFERENCE is:",options:["Apples are crunchy but oranges are juicy","Both are sour","Both are blue","Neither is a fruit"],answer:0},
    {q:"According to Text 1, apples can be:",options:["red or green","only orange","blue","black"],answer:0},
    {q:"According to Text 2, oranges are full of:",options:["vitamin C","water only","sugar only","seeds only"],answer:0}
   ]},
  {title:"In the Sky", text:"Text 1: The sun shines in the day. It gives us light and heat and helps plants grow.\nText 2: The moon shines at night. It gives soft light and changes shape through the month.",
   qs:[
    {q:"What do BOTH texts describe?",options:["something we see in the sky","a kind of food","a school","a car"],answer:0},
    {q:"One DIFFERENCE is:",options:["The sun shines in the day but the moon at night","Both shine at night","Both give strong heat","Neither gives light"],answer:0},
    {q:"According to Text 1, the sun helps:",options:["plants grow","cars move","clocks tick","fish swim"],answer:0},
    {q:"According to Text 2, the moon:",options:["changes shape through the month","gives strong heat","shines in the day","never moves"],answer:0}
   ]}
 ],
 summary:[
  {title:"The School Trip", text:"Last week, Class 6 visited a science museum. They saw a model of the solar system, watched a short film about space, and tried a fun experiment with magnets. Everyone said it was the best trip of the year.",
   qs:[
    {q:"Which is the BEST summary of the text?",options:["Class 6 enjoyed a science museum trip with space and magnet activities","Class 6 ate lunch together","The film was very long","Magnets are made of metal"],answer:0},
    {q:"Which detail is TOO SMALL to include in a short summary?",options:["The exact colour of the magnets","They visited a science museum","They watched a space film","They enjoyed the trip"],answer:0},
    {q:"A good summary should focus on:",options:["the main events","one tiny detail","the weather only","nothing at all"],answer:0},
    {q:"What is the main point of the text?",options:["The class had a great museum trip","Museums are far away","Space is very big","Class 6 is small"],answer:0}
   ]},
  {title:"A Day at the Zoo", text:"On Friday, the class went to the zoo. They saw tall giraffes, watched the monkeys play, and fed the goats. The children agreed it was a wonderful day.",
   qs:[
    {q:"Which is the BEST summary?",options:["The class had a great day seeing animals at the zoo","The goats were brown","The bus was blue","Monkeys are small"],answer:0},
    {q:"Which detail is TOO SMALL for a short summary?",options:["The exact colour of the goats","They went to the zoo","They saw giraffes","They enjoyed the day"],answer:0},
    {q:"A good summary should include:",options:["the main events","only one animal's colour","the weather only","nothing"],answer:0},
    {q:"What is the main point?",options:["The class enjoyed a zoo trip","Zoos are far","Giraffes are tall","The class is big"],answer:0}
   ]},
  {title:"Growing Tomatoes", text:"Grandpa planted tomato seeds in spring. He watered them every day and pulled out the weeds. By summer, the plants were full of red tomatoes.",
   qs:[
    {q:"Which is the BEST summary?",options:["Grandpa grew tomatoes by caring for the plants","The soil was dark","The sun was hot","Weeds are green"],answer:0},
    {q:"Which detail is TOO SMALL for a short summary?",options:["The exact colour of the soil","He planted seeds","He watered them daily","The plants grew tomatoes"],answer:0},
    {q:"A good summary focuses on:",options:["the main events","one tiny detail","the weather only","nothing"],answer:0},
    {q:"What is the main point?",options:["Care helped the tomatoes grow","Spring is short","Water is wet","Grandpa is tall"],answer:0}
   ]},
  {title:"The Night of the Storm", text:"A strong storm hit the town at night. The wind broke branches and the rain flooded the streets. In the morning, everyone helped to clean up the mess.",
   qs:[
    {q:"Which is the BEST summary?",options:["A storm caused damage and people cleaned up after","The wind was cold","The night was long","Rain is wet"],answer:0},
    {q:"Which detail is TOO SMALL for a short summary?",options:["The exact time the clock showed","A storm hit the town","The streets flooded","People cleaned up"],answer:0},
    {q:"A good summary should give:",options:["the main events","one small detail","only colours","nothing"],answer:0},
    {q:"What is the main point?",options:["A storm hit and people helped clean up","Storms are loud","Towns are big","Branches are brown"],answer:0}
   ]},
  {title:"The New Bakery", text:"A new bakery opened on our street. It sells fresh bread, sweet cakes and warm pies. Many neighbours visit every morning to buy breakfast.",
   qs:[
    {q:"Which is the BEST summary?",options:["A popular new bakery sells fresh food to neighbours","The door is brown","The street is long","Cakes are sweet"],answer:0},
    {q:"Which detail is TOO SMALL for a short summary?",options:["The exact colour of the door","A bakery opened","It sells bread and cakes","Neighbours visit often"],answer:0},
    {q:"A good summary should focus on:",options:["the main events","one tiny detail","the street name only","nothing"],answer:0},
    {q:"What is the main point?",options:["The new bakery is popular","Bread is white","Mornings are early","Streets are busy"],answer:0}
   ]}
 ],
 purpose_tone:[
  {title:"Save Water!", text:"Please remember to turn off the tap while brushing your teeth. Every drop counts! Together, we can protect our precious water and help our community.",
   qs:[
    {q:"The author's PURPOSE is to:",options:["persuade people to save water","tell a funny story","sell a new toy","describe a holiday"],answer:0},
    {q:"The TONE of the text is:",options:["encouraging","angry","bored","frightened"],answer:0},
    {q:"The writer mainly wants readers to:",options:["use less water","waste more water","buy bottled water","ignore the tap"],answer:0},
    {q:"Which word helps create the caring tone?",options:["precious","broken","boring","empty"],answer:0}
   ]},
  {title:"Plant a Tree", text:"Come and join our tree-planting day this Saturday! Bring your friends and help make our town greener and more beautiful. Together we can make a real difference.",
   qs:[
    {q:"The author's PURPOSE is to:",options:["persuade people to join a tree-planting day","tell a scary story","sell a phone","describe a maths lesson"],answer:0},
    {q:"The TONE of the text is:",options:["cheerful and inviting","angry","sad","bored"],answer:0},
    {q:"The writer mainly wants readers to:",options:["help plant trees","stay home","cut down trees","ignore the town"],answer:0},
    {q:"Which word helps create the friendly tone?",options:["join","broken","dull","empty"],answer:0}
   ]},
  {title:"How to Wash Your Hands", text:"Wet your hands with clean water. Rub soap over your hands for twenty seconds. Then rinse well and dry them with a clean towel.",
   qs:[
    {q:"The author's PURPOSE is to:",options:["explain how to do something","make people laugh","sell soap","tell a story"],answer:0},
    {q:"The TONE of the text is:",options:["clear and helpful","angry","excited","frightened"],answer:0},
    {q:"The writer wants readers to:",options:["learn the correct steps","buy a towel","feel afraid","go outside"],answer:0},
    {q:"This kind of text is written to:",options:["give instructions","entertain with jokes","frighten readers","advertise a toy"],answer:0}
   ]},
  {title:"The Dancing Robot", text:"Once upon a time, a small robot loved to dance. It spun and hopped across the kitchen floor, making the whole family laugh with joy.",
   qs:[
    {q:"The author's PURPOSE is to:",options:["entertain the reader with a fun story","give a warning","sell a robot","explain a science fact"],answer:0},
    {q:"The TONE of the text is:",options:["playful and happy","angry","serious and sad","frightening"],answer:0},
    {q:"The writer mainly wants readers to:",options:["enjoy the story","fix a robot","clean a kitchen","feel scared"],answer:0},
    {q:"Which word helps create the happy tone?",options:["laugh","broken","cruel","empty"],answer:0}
   ]},
  {title:"Careful by the Pool", text:"Please do not run near the swimming pool. The wet floor is slippery and you could fall and hurt yourself. Walk slowly to stay safe.",
   qs:[
    {q:"The author's PURPOSE is to:",options:["warn people to be careful","tell a funny joke","sell a pool","describe a holiday"],answer:0},
    {q:"The TONE of the text is:",options:["serious and caring","joyful","bored","silly"],answer:0},
    {q:"The writer wants readers to:",options:["stay safe near the pool","run fast","swim all day","ignore the floor"],answer:0},
    {q:"Which word shows the careful tone?",options:["safe","funny","boring","tasty"],answer:0}
   ]}
 ],
 prediction:[
  {title:"Dark Clouds", text:"Omar looked up at the sky. Dark grey clouds were gathering and the wind began to blow harder. He quickly picked up his bag and started walking faster towards home.",
   qs:[
    {q:"What will MOST LIKELY happen next?",options:["It will rain","The sun will come out","Omar will go swimming","Omar will fall asleep"],answer:0},
    {q:"Which clue best supports your prediction?",options:["Dark grey clouds were gathering","Omar smiled","The street was empty","His bag was red"],answer:0},
    {q:"Why did Omar walk faster?",options:["To get home before the rain","He was playing a game","He lost his bag","He was very tired"],answer:0},
    {q:"Based on the clues, the weather will probably:",options:["get worse","get sunnier","stay exactly the same","become very hot"],answer:0}
   ]},
  {title:"The Little Seed", text:"Amina planted a seed in a pot and put it on the sunny windowsill. She watered it a little each day and watched the soil carefully.",
   qs:[
    {q:"What will MOST LIKELY happen next?",options:["A plant will start to grow","The seed will fly away","The pot will melt","It will start to rain indoors"],answer:0},
    {q:"Which clue best supports your prediction?",options:["She watered it each day in the sun","The pot was round","The window was open","Her shirt was green"],answer:0},
    {q:"Why did Amina put the pot in the sun?",options:["Plants need light to grow","She wanted a snack","To hide it","To make it cold"],answer:0},
    {q:"Based on the clues, the seed will probably:",options:["sprout into a plant","disappear","turn to stone","stay a seed forever"],answer:0}
   ]},
  {title:"Dinner Time", text:"Dad put a pot of soup on the stove and turned on the heat. Soon small bubbles began to appear and steam rose into the air.",
   qs:[
    {q:"What will MOST LIKELY happen next?",options:["The soup will boil","The soup will freeze","The pot will fly","The stove will turn cold"],answer:0},
    {q:"Which clue best supports your prediction?",options:["Small bubbles and steam appeared","The pot was silver","The kitchen was big","Dad wore a hat"],answer:0},
    {q:"Why is steam rising from the pot?",options:["The soup is getting hot","The room is cold","The soup is frozen","The stove is off"],answer:0},
    {q:"Based on the clues, the soup will soon be:",options:["ready to eat","still cold","turned to ice","thrown away"],answer:0}
   ]},
  {title:"Sleepy Time", text:"The baby rubbed his eyes and gave a big yawn. His mother held him gently and began to sing a soft, slow song.",
   qs:[
    {q:"What will MOST LIKELY happen next?",options:["The baby will fall asleep","The baby will run outside","The baby will cook dinner","The baby will read a book"],answer:0},
    {q:"Which clue best supports your prediction?",options:["He yawned and rubbed his eyes","The song was loud","The room was bright","His toy was red"],answer:0},
    {q:"Why did the mother sing softly?",options:["To help the baby sleep","To wake him up","To play a game","To make noise"],answer:0},
    {q:"Based on the clues, the baby is feeling:",options:["sleepy","hungry only","angry","excited"],answer:0}
   ]},
  {title:"At the Starting Line", text:"The runners lined up on the track and bent down low. The man raised the whistle to his lips and everyone went quiet.",
   qs:[
    {q:"What will MOST LIKELY happen next?",options:["The race will begin","Everyone will go home","The runners will sleep","It will start to snow"],answer:0},
    {q:"Which clue best supports your prediction?",options:["The man raised the whistle to start","The track was long","The sky was blue","One runner had red shoes"],answer:0},
    {q:"Why did everyone go quiet?",options:["They were ready to start the race","They were bored","They were eating","They were leaving"],answer:0},
    {q:"Based on the clues, the runners will soon:",options:["run","sleep","eat","swim"],answer:0}
   ]}
 ],
 context:[
  {title:"The Brave Firefighter", text:"The firefighter was fearless as she ran into the burning building to rescue the trapped family. Afterwards, everyone praised her courage.",
   qs:[
    {q:"In the text, 'fearless' means:",options:["not afraid","very tired","very hungry","full of fear"],answer:0},
    {q:"'Rescue' means to:",options:["save","hide","break","paint"],answer:0},
    {q:"'Praised' means they:",options:["said good things about her","shouted at her","ignored her","paid her"],answer:0},
    {q:"'Courage' means:",options:["bravery","fear","speed","luck"],answer:0}
   ]},
  {title:"The Enormous Elephant", text:"The enormous elephant was so large that it blocked the whole path. The children stared up at the huge animal in wonder.",
   qs:[
    {q:"In the text, 'enormous' means:",options:["very big","very small","very fast","very old"],answer:0},
    {q:"'Blocked' the path means it:",options:["was in the way","cleaned it","painted it","opened it"],answer:0},
    {q:"'Stared' means they:",options:["looked for a long time","ran away","fell asleep","shouted"],answer:0},
    {q:"'Wonder' here means a feeling of:",options:["amazement","hunger","anger","fear"],answer:0}
   ]},
  {title:"A Delicious Meal", text:"The food smelled so delicious that everyone rushed to the table. They devoured the warm rice and tender meat until the plates were empty.",
   qs:[
    {q:"In the text, 'delicious' means:",options:["very tasty","very ugly","very cold","very loud"],answer:0},
    {q:"'Devoured' means they:",options:["ate it quickly","threw it away","cooked it","hid it"],answer:0},
    {q:"'Tender' meat is:",options:["soft and easy to eat","hard as stone","very cold","very old"],answer:0},
    {q:"'Rushed' to the table means they went:",options:["quickly","slowly","never","backwards"],answer:0}
   ]},
  {title:"The Ancient Castle", text:"The ancient castle had stood for a thousand years. Its walls were crumbling and moss covered the old grey stones.",
   qs:[
    {q:"In the text, 'ancient' means:",options:["very old","brand new","very clean","very small"],answer:0},
    {q:"'Crumbling' walls are:",options:["breaking into pieces","freshly painted","very tall","made of gold"],answer:0},
    {q:"'Moss' covered the stones, so the castle looked:",options:["old and green","new and shiny","warm and dry","bright and clean"],answer:0},
    {q:"'Stood for a thousand years' shows the castle was:",options:["very old","just built","very small","made of wood"],answer:0}
   ]},
  {title:"The Freezing Morning", text:"It was a freezing winter morning. Ice covered the windows and the children shivered as they waited for the bus.",
   qs:[
    {q:"In the text, 'freezing' means:",options:["very cold","very hot","very bright","very loud"],answer:0},
    {q:"'Shivered' means they:",options:["shook because of the cold","laughed","ran fast","fell asleep"],answer:0},
    {q:"The 'ice on the windows' is a clue that it was:",options:["very cold","very warm","very sunny","very windy only"],answer:0},
    {q:"'Waited for the bus' means they:",options:["stayed until it came","chased it","hid from it","drove it"],answer:0}
   ]}
 ],
 sequence:[
  {title:"Making Tea", text:"First, Sara boiled the water. Next, she put a tea bag in the cup. Then she poured the hot water over it. Finally, she added a little sugar and stirred.",
   qs:[
    {q:"What did Sara do FIRST?",options:["Boiled the water","Added the sugar","Poured the water","Stirred the tea"],answer:0},
    {q:"What did she do LAST?",options:["Added sugar and stirred","Boiled the water","Put in the tea bag","Filled the kettle"],answer:0},
    {q:"What came right AFTER boiling the water?",options:["Put a tea bag in the cup","Added the sugar","Drank the tea","Went to sleep"],answer:0},
    {q:"Which shows the correct order?",options:["Boil, tea bag, pour, sugar","Sugar, pour, boil, tea bag","Pour, boil, sugar, tea bag","Tea bag, sugar, boil, pour"],answer:0}
   ]},
  {title:"Getting Ready", text:"First, Omar woke up and washed his face. Next, he put on his uniform. Then he ate his breakfast. Finally, he picked up his bag and left for school.",
   qs:[
    {q:"What did Omar do FIRST?",options:["Woke up and washed his face","Ate breakfast","Put on his uniform","Left for school"],answer:0},
    {q:"What did he do LAST?",options:["Picked up his bag and left","Woke up","Washed his face","Ate breakfast"],answer:0},
    {q:"What came right AFTER he washed his face?",options:["Put on his uniform","Ate breakfast","Left for school","Went to bed"],answer:0},
    {q:"Which shows the correct order?",options:["Wake, dress, eat, leave","Eat, leave, wake, dress","Leave, eat, wake, dress","Dress, leave, eat, wake"],answer:0}
   ]},
  {title:"Planting a Flower", text:"First, Lina dug a small hole in the soil. Next, she dropped a seed inside. Then she covered it with earth. Finally, she watered it well.",
   qs:[
    {q:"What did Lina do FIRST?",options:["Dug a small hole","Watered the seed","Covered it with earth","Dropped the seed in"],answer:0},
    {q:"What did she do LAST?",options:["Watered it well","Dug the hole","Dropped the seed","Covered it"],answer:0},
    {q:"What came right AFTER she dug the hole?",options:["Dropped a seed inside","Watered it","Ate lunch","Went home"],answer:0},
    {q:"Which shows the correct order?",options:["Dig, drop seed, cover, water","Water, dig, drop, cover","Cover, water, dig, drop","Drop, water, cover, dig"],answer:0}
   ]},
  {title:"Making a Sandwich", text:"First, Sami took two slices of bread. Next, he spread butter on them. Then he added cheese in the middle. Finally, he cut the sandwich in half.",
   qs:[
    {q:"What did Sami do FIRST?",options:["Took two slices of bread","Cut it in half","Added cheese","Spread butter"],answer:0},
    {q:"What did he do LAST?",options:["Cut the sandwich in half","Took the bread","Spread butter","Added cheese"],answer:0},
    {q:"What came right AFTER he took the bread?",options:["Spread butter on them","Cut it in half","Ate it","Washed his hands"],answer:0},
    {q:"Which shows the correct order?",options:["Bread, butter, cheese, cut","Cut, cheese, butter, bread","Cheese, cut, bread, butter","Butter, cut, bread, cheese"],answer:0}
   ]},
  {title:"Time for Bed", text:"First, Nora brushed her teeth. Next, she put on her pyjamas. Then she read a short story. Finally, she turned off the light and slept.",
   qs:[
    {q:"What did Nora do FIRST?",options:["Brushed her teeth","Turned off the light","Read a story","Put on pyjamas"],answer:0},
    {q:"What did she do LAST?",options:["Turned off the light and slept","Brushed her teeth","Read a story","Put on pyjamas"],answer:0},
    {q:"What came right AFTER she brushed her teeth?",options:["Put on her pyjamas","Read a story","Ate dinner","Went outside"],answer:0},
    {q:"Which shows the correct order?",options:["Brush, pyjamas, read, sleep","Read, sleep, brush, pyjamas","Sleep, read, brush, pyjamas","Pyjamas, sleep, read, brush"],answer:0}
   ]}
 ],
 fact_opinion:[
  {title:"The Football Match", text:"The match started at 5 o'clock. The stadium held 20,000 people. I think football is the most exciting sport in the world, and everyone should watch it.",
   qs:[
    {q:"Which statement is a FACT?",options:["The match started at 5 o'clock","Football is the most exciting sport","Everyone should watch it","Football is simply the best"],answer:0},
    {q:"Which statement is an OPINION?",options:["Football is the most exciting sport","The stadium held 20,000 people","The match started at 5 o'clock","There was a stadium"],answer:0},
    {q:"'The stadium held 20,000 people' is a:",options:["fact","opinion","question","command"],answer:0},
    {q:"How do you know 'everyone should watch it' is an opinion?",options:["It is a personal belief, not proof","It contains numbers","It states a time","It names a place"],answer:0}
   ]},
  {title:"The New Library", text:"The library opened in 2020. It has more than five thousand books. I think it is the best building in our town, and everyone should visit it.",
   qs:[
    {q:"Which statement is a FACT?",options:["The library opened in 2020","It is the best building in town","Everyone should visit it","The library is wonderful"],answer:0},
    {q:"Which statement is an OPINION?",options:["It is the best building in our town","The library opened in 2020","It has five thousand books","There is a library"],answer:0},
    {q:"'It has more than five thousand books' is a:",options:["fact","opinion","question","command"],answer:0},
    {q:"How do you know 'everyone should visit it' is an opinion?",options:["It is a personal belief, not proof","It gives a date","It counts books","It names a year"],answer:0}
   ]},
  {title:"The School Garden", text:"Our school garden has ten fruit trees. The gardener waters them every morning. I believe gardening is the most relaxing hobby of all, and it is more fun than sport.",
   qs:[
    {q:"Which statement is a FACT?",options:["The garden has ten fruit trees","Gardening is the most relaxing hobby","It is more fun than sport","Gardening is the best"],answer:0},
    {q:"Which statement is an OPINION?",options:["Gardening is the most relaxing hobby","The garden has ten trees","The gardener waters them each morning","There is a garden"],answer:0},
    {q:"'The gardener waters them every morning' is a:",options:["fact","opinion","question","command"],answer:0},
    {q:"How do you know 'it is more fun than sport' is an opinion?",options:["It is a personal feeling, not proof","It counts trees","It states a time","It names a place"],answer:0}
   ]},
  {title:"The Camel Race", text:"The camel race takes place every winter. Thousands of people come to watch. In my opinion, camels are the most beautiful animals in the world.",
   qs:[
    {q:"Which statement is a FACT?",options:["The camel race takes place every winter","Camels are the most beautiful animals","Camels are lovely to look at","The race is the best"],answer:0},
    {q:"Which statement is an OPINION?",options:["Camels are the most beautiful animals","The race is in winter","Thousands come to watch","There is a race"],answer:0},
    {q:"'Thousands of people come to watch' is a:",options:["fact","opinion","question","command"],answer:0},
    {q:"How do you know the camel statement is an opinion?",options:["It uses 'in my opinion' and cannot be proven","It gives a season","It counts people","It names an animal"],answer:0}
   ]},
  {title:"The Old Bridge", text:"The old bridge is 200 metres long. It was built a hundred years ago. I think it is the prettiest bridge anyone has ever seen, and walking across it is wonderful.",
   qs:[
    {q:"Which statement is a FACT?",options:["The bridge is 200 metres long","It is the prettiest bridge ever","Walking across it is wonderful","It is a lovely bridge"],answer:0},
    {q:"Which statement is an OPINION?",options:["It is the prettiest bridge anyone has seen","The bridge is 200 metres long","It was built a hundred years ago","There is a bridge"],answer:0},
    {q:"'It was built a hundred years ago' is a:",options:["fact","opinion","question","command"],answer:0},
    {q:"How do you know 'it is the prettiest bridge' is an opinion?",options:["It is a personal belief, not proof","It gives a length","It gives an age","It names a place"],answer:0}
   ]}
 ],
 cause_effect:[
  {title:"The Broken Window", text:"Because the boys were playing football too close to the house, the ball hit the window and it broke. As a result, they had to pay for a new one.",
   qs:[
    {q:"WHY did the window break? (the cause)",options:["The ball hit it","It was very old","The wind blew hard","It was a hot day"],answer:0},
    {q:"What was the EFFECT of the broken window?",options:["They had to pay for a new one","They won a prize","They went swimming","Nothing happened"],answer:0},
    {q:"The window broke BECAUSE:",options:["the boys played too close","it was raining","it was night-time","the house was small"],answer:0},
    {q:"Which word signals cause and effect?",options:["Because","Happy","Blue","Slowly"],answer:0}
   ]},
  {title:"The Melted Ice Cream", text:"Because the sun was very hot, the ice cream melted quickly. As a result, it dripped all over Sara's hand.",
   qs:[
    {q:"WHY did the ice cream melt? (the cause)",options:["The sun was very hot","It was very old","The freezer was full","It was raining"],answer:0},
    {q:"What was the EFFECT of the melting?",options:["It dripped over Sara's hand","It turned blue","It flew away","Nothing happened"],answer:0},
    {q:"The ice cream melted BECAUSE:",options:["the sun was hot","it was night","it was frozen hard","it was small"],answer:0},
    {q:"Which word signals cause and effect?",options:["Because","Sweet","Round","Slowly"],answer:0}
   ]},
  {title:"The Wilted Plant", text:"Because no one watered the plant for a week, its leaves turned brown and dry. As a result, the plant began to die.",
   qs:[
    {q:"WHY did the leaves turn brown? (the cause)",options:["No one watered the plant","Too much water","It was too cold","It grew too fast"],answer:0},
    {q:"What was the EFFECT of the dry leaves?",options:["The plant began to die","The plant grew flowers","The plant moved","Nothing happened"],answer:0},
    {q:"The plant suffered BECAUSE:",options:["it had no water","it was watered daily","it had too many flowers","it was very young"],answer:0},
    {q:"Which word signals cause and effect?",options:["Because","Green","Tall","Quietly"],answer:0}
   ]},
  {title:"The Late Bus", text:"Because there was heavy traffic, the school bus arrived late. As a result, the students missed the first lesson.",
   qs:[
    {q:"WHY was the bus late? (the cause)",options:["There was heavy traffic","It ran out of fuel","The driver was ill","It was a holiday"],answer:0},
    {q:"What was the EFFECT of the late bus?",options:["Students missed the first lesson","Students got a prize","School closed early","Nothing happened"],answer:0},
    {q:"The bus was late BECAUSE:",options:["of heavy traffic","the school was closed","the students were early","the roads were empty"],answer:0},
    {q:"Which word signals cause and effect?",options:["Because","Yellow","Loud","Happily"],answer:0}
   ]},
  {title:"The Winning Goal", text:"Because Khalid practised every day, he became a strong player. As a result, he scored the winning goal in the final match.",
   qs:[
    {q:"WHY did Khalid become strong? (the cause)",options:["He practised every day","He was very tall","He ate a lot","He was lucky"],answer:0},
    {q:"What was the EFFECT of his hard work?",options:["He scored the winning goal","He lost the match","He stopped playing","Nothing happened"],answer:0},
    {q:"Khalid improved BECAUSE:",options:["he practised daily","he never played","he watched TV","he slept a lot"],answer:0},
    {q:"Which word signals cause and effect?",options:["Because","Green","Round","Softly"],answer:0}
   ]}
 ],
 theme:[
  {title:"The Ant and the Grain", text:"All summer the little ant worked hard to store grain, while the others only played. When winter came and food was scarce, only the ant had enough to eat. The others wished they had prepared too.",
   qs:[
    {q:"What is the THEME (message) of the story?",options:["Hard work and planning pay off","Winter is very cold","Ants are small","Games are fun"],answer:0},
    {q:"The story teaches us to:",options:["prepare for the future","never do any work","always play games","only eat grain"],answer:0},
    {q:"Which lesson fits best?",options:["Plan ahead","Be lazy","Waste your time","Ignore the winter"],answer:0},
    {q:"Why did only the ant have food in winter?",options:["It worked and prepared","It was simply lucky","It was the biggest","It stole the food"],answer:0}
   ]},
  {title:"The Two Friends", text:"Rami helped his friend carry a heavy bag up the hill, even though he was tired. Later, when Rami fell, his friend was there to help him up at once. They learned that kindness comes back to you.",
   qs:[
    {q:"What is the THEME (message)?",options:["Kindness is returned","Hills are steep","Bags are heavy","Friends are tall"],answer:0},
    {q:"The story teaches us to:",options:["help one another","never help","walk alone","carry nothing"],answer:0},
    {q:"Which lesson fits best?",options:["Be kind and others will be kind to you","Be selfish","Ignore your friends","Always rest"],answer:0},
    {q:"Why did the friend help Rami up?",options:["Rami had helped him first","He wanted a prize","He was told to","He was bored"],answer:0}
   ]},
  {title:"The Proud Rabbit", text:"A fast rabbit laughed at a slow turtle and boasted that no one could beat him. During the race, the rabbit stopped to rest, but the turtle kept going and won. The rabbit learned not to be too proud.",
   qs:[
    {q:"What is the THEME (message)?",options:["Do not be too proud; keep trying","Rabbits are fast","Turtles are green","Races are long"],answer:0},
    {q:"The story teaches us to:",options:["keep going steadily","give up early","boast a lot","sleep in races"],answer:0},
    {q:"Which lesson fits best?",options:["Slow and steady can win","Speed always wins","Never try","Rest is best"],answer:0},
    {q:"Why did the turtle win?",options:["It kept going without stopping","It was faster","It rested more","It cheated"],answer:0}
   ]},
  {title:"The Honest Boy", text:"Faris found a wallet full of money on the street. Although he wanted the money, he handed it to the police. The owner was very grateful, and Faris felt proud that he had done the right thing.",
   qs:[
    {q:"What is the THEME (message)?",options:["Honesty is the right choice","Money is heavy","Streets are long","Police are tall"],answer:0},
    {q:"The story teaches us to:",options:["be honest","keep what is not ours","tell lies","ignore others"],answer:0},
    {q:"Which lesson fits best?",options:["Always do the right thing","Take what you find","Never help","Hide the truth"],answer:0},
    {q:"Why did Faris feel proud?",options:["He did the honest thing","He kept the money","He ran away","He hid the wallet"],answer:0}
   ]},
  {title:"Never Give Up", text:"Dana tried many times to solve the hard puzzle and kept making mistakes. Instead of quitting, she practised again and again until, at last, she solved it. She learned that patience brings success.",
   qs:[
    {q:"What is the THEME (message)?",options:["Patience and effort bring success","Puzzles are easy","Mistakes are fun","Time is short"],answer:0},
    {q:"The story teaches us to:",options:["keep trying","give up quickly","never practise","stay angry"],answer:0},
    {q:"Which lesson fits best?",options:["Do not give up","Quit when it is hard","Avoid all puzzles","Rest instead of working"],answer:0},
    {q:"Why did Dana finally succeed?",options:["She kept practising","She was lucky","She copied someone","She stopped trying"],answer:0}
   ]}
 ],
 story_elements:[
  {title:"Nora and the Lost Key", text:"Nora was a curious girl who lived by the sea. One morning she could not find the key to her boat. She searched everywhere and, at last, found it under a pile of nets. Happily, she sailed out to fish.",
   qs:[
    {q:"Who is the MAIN character?",options:["Nora","the sea","the boat","a fish"],answer:0},
    {q:"Where does the story take place (the SETTING)?",options:["by the sea","in a big city","in a forest","in space"],answer:0},
    {q:"What is the PROBLEM in the story?",options:["Nora lost her boat key","The sea was too cold","The boat was old","Nora was hungry"],answer:0},
    {q:"How is the problem SOLVED?",options:["She finds the key under the nets","She buys a new boat","She goes back home","She calls a friend"],answer:0}
   ]},
  {title:"Sami and the Storm", text:"Sami was a brave boy who lived on a small farm. One night, a strong storm blew open the gate and the sheep ran out. Sami went into the rain and, one by one, led all the sheep safely back. Then he tied the gate shut.",
   qs:[
    {q:"Who is the MAIN character?",options:["Sami","the storm","a sheep","the gate"],answer:0},
    {q:"Where does the story take place (the SETTING)?",options:["on a small farm","in a city","in a school","at the sea"],answer:0},
    {q:"What is the PROBLEM?",options:["The sheep ran out in the storm","The farm was too big","Sami was hungry","The gate was new"],answer:0},
    {q:"How is the problem SOLVED?",options:["Sami leads the sheep back and ties the gate","He buys new sheep","He goes to sleep","He calls a friend"],answer:0}
   ]},
  {title:"The Lost Homework", text:"Maryam was a hard-working student at Green Valley School. One morning she could not find her homework anywhere. She searched her bag and, at last, found it inside a library book. She handed it in just in time.",
   qs:[
    {q:"Who is the MAIN character?",options:["Maryam","the teacher","a book","the school"],answer:0},
    {q:"Where does the story take place (the SETTING)?",options:["at Green Valley School","in a forest","at the beach","in space"],answer:0},
    {q:"What is the PROBLEM?",options:["Maryam lost her homework","The school was closed","She was late for lunch","Her bag was new"],answer:0},
    {q:"How is the problem SOLVED?",options:["She finds it inside a library book","She writes it again","She stays home","She asks a friend to do it"],answer:0}
   ]},
  {title:"The Thirsty Traveller", text:"A tired traveller walked across the hot desert. He was very thirsty and could find no water. At last, he saw a well near some palm trees, drew up fresh water, and drank happily.",
   qs:[
    {q:"Who is the MAIN character?",options:["the traveller","the desert","a palm tree","the well"],answer:0},
    {q:"Where does the story take place (the SETTING)?",options:["in a hot desert","in a cold city","in a school","by the sea"],answer:0},
    {q:"What is the PROBLEM?",options:["He was thirsty and had no water","He was too cold","He lost his shoes","He had too much water"],answer:0},
    {q:"How is the problem SOLVED?",options:["He finds a well and drinks water","He goes to sleep","He builds a house","He turns back"],answer:0}
   ]},
  {title:"The Broken Bike", text:"Zaid loved to cycle in his neighbourhood. One day the chain on his bike snapped and he could not ride. He asked his uncle, who showed him how to fix the chain. Soon Zaid was cycling again.",
   qs:[
    {q:"Who is the MAIN character?",options:["Zaid","the uncle","the bike","the street"],answer:0},
    {q:"Where does the story take place (the SETTING)?",options:["in Zaid's neighbourhood","in a jungle","at school","on a boat"],answer:0},
    {q:"What is the PROBLEM?",options:["The bike chain snapped","The road was closed","Zaid was hungry","The bike was new"],answer:0},
    {q:"How is the problem SOLVED?",options:["His uncle helps him fix the chain","He buys a car","He walks forever","He gives up cycling"],answer:0}
   ]}
 ],
 five_ws:[
  {title:"News: School Wins Prize", text:"Yesterday, Al Noor School in Ajman won the national science prize because its students built a clever solar robot. The award was given at a ceremony in Dubai.",
   qs:[
    {q:"WHO won the prize?",options:["Al Noor School","A famous singer","A football team","A big company"],answer:0},
    {q:"WHAT did they win?",options:["The national science prize","A new car","A free holiday","A story book"],answer:0},
    {q:"WHERE was the award given?",options:["Dubai","London","Cairo","Paris"],answer:0},
    {q:"WHY did they win?",options:["Students built a solar robot","They were lucky","They were the oldest","They paid money"],answer:0}
   ]},
  {title:"News: Beach Clean-Up", text:"On Saturday, students from Al Amal School cleaned Jumeirah Beach because they wanted to protect sea animals. They filled fifty bags with rubbish.",
   qs:[
    {q:"WHO cleaned the beach?",options:["Students from Al Amal School","A football team","Some tourists","Fishermen"],answer:0},
    {q:"WHAT did they do?",options:["Cleaned the beach","Built a school","Sold fish","Painted a wall"],answer:0},
    {q:"WHERE did this happen?",options:["Jumeirah Beach","A mountain","A library","A market"],answer:0},
    {q:"WHY did they clean the beach?",options:["To protect sea animals","To win money","To have a race","To sell rubbish"],answer:0}
   ]},
  {title:"News: A New Bridge", text:"Last month, the city of Sharjah opened a new bridge over the river so that traffic could move faster. Drivers were very pleased.",
   qs:[
    {q:"WHO opened the bridge?",options:["The city of Sharjah","A famous singer","A school class","A football team"],answer:0},
    {q:"WHAT did they open?",options:["A new bridge","A new shop","A new park","A new school"],answer:0},
    {q:"WHERE was the bridge built?",options:["Over the river","In the desert","On a mountain","Inside a mall"],answer:0},
    {q:"WHY was the bridge built?",options:["So traffic could move faster","To sell tickets","To hold a race","To store water"],answer:0}
   ]},
  {title:"News: The Science Fair", text:"On Wednesday, Al Falah School held a science fair in the main hall because the teachers wanted to show the students' projects. Many parents came to watch.",
   qs:[
    {q:"WHO held the science fair?",options:["Al Falah School","A hospital","A shop","A bank"],answer:0},
    {q:"WHAT did they hold?",options:["A science fair","A football match","A concert","A market"],answer:0},
    {q:"WHERE was it held?",options:["In the main hall","On the roof","In a garden","At the beach"],answer:0},
    {q:"WHY did they hold the fair?",options:["To show the students' projects","To sell food","To raise money","To close the school"],answer:0}
   ]},
  {title:"News: The Firefighters' Rescue", text:"Yesterday, firefighters in Abu Dhabi rescued a cat from a tall tree because a worried family had called for help. The cat was safe and well.",
   qs:[
    {q:"WHO rescued the cat?",options:["Firefighters in Abu Dhabi","A police officer","A teacher","A doctor"],answer:0},
    {q:"WHAT did they rescue?",options:["A cat","A dog","A bird","A child"],answer:0},
    {q:"WHERE was the cat?",options:["In a tall tree","On a boat","In a car","Under a bed"],answer:0},
    {q:"WHY did the firefighters come?",options:["A worried family called for help","They were passing by","They wanted the tree","They were lost"],answer:0}
   ]}
 ]
};
