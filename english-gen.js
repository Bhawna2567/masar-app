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
    {subj:"the water cycle",where:"the sky and the land",f1:"moves water between the sea, the clouds and the ground",f2:"includes water rising, forming clouds, and falling as rain",extra:"gives us the fresh water we need"},
    {subj:"the falcon",where:"deserts and open country",f1:"is one of the fastest animals when it dives for prey",f2:"has very sharp eyesight that spots small animals far away",extra:"has been trained by people in the Gulf for hundreds of years"},
    {subj:"the coral reef",where:"warm, shallow seas",f1:"is built by tiny animals called coral polyps",f2:"gives shelter and food to thousands of kinds of sea life",extra:"is harmed when the sea becomes too warm"},
    {subj:"the date palm",where:"oases and farms across the Gulf",f1:"gives sweet fruit that has fed desert peoples for centuries",f2:"can grow in hot, dry places where few plants survive",extra:"provides shade, wood and material for weaving"},
    {subj:"the desert at night",where:"dry lands far from cities",f1:"becomes much cooler once the Sun goes down",f2:"comes alive with animals that hide from the daytime heat",extra:"offers some of the clearest views of the stars"},
    {subj:"the human heart",where:"the centre of the chest",f1:"pumps blood to every part of the body",f2:"beats about one hundred thousand times each day",extra:"works harder when we exercise"},
    {subj:"volcanoes",where:"where the Earth's plates meet",f1:"form when melted rock rises to the surface",f2:"can build new islands and rich farming soil",extra:"are watched closely by scientists to keep people safe"},
    {subj:"the wind",where:"all around the planet",f1:"is moving air caused by the Sun heating the Earth unevenly",f2:"can be used to turn turbines and make electricity",extra:"shapes deserts, seas and weather"},
    {subj:"bees and pollination",where:"gardens, farms and wild land",f1:"carry pollen from flower to flower as they feed",f2:"help fruits, vegetables and nuts to form",extra:"are vital to much of the food we grow"},
    {subj:"the pearl divers of the Gulf",where:"the coastal waters of the Emirates",f1:"once dived deep without modern equipment to find pearls",f2:"formed the backbone of the region's economy long ago",extra:"passed down songs and skills still remembered today"},
    {subj:"glaciers",where:"high mountains and polar regions",f1:"are huge, slow-moving rivers of ice",f2:"store much of the world's fresh water",extra:"are shrinking as the climate warms"},
    {subj:"the internet",where:"almost every country on Earth",f1:"links billions of computers and phones together",f2:"lets people share information in seconds",extra:"has changed how we learn, work and talk"},
    {subj:"migrating birds",where:"skies across whole continents",f1:"travel thousands of kilometres between seasons",f2:"use the Sun, stars and Earth's magnetism to find their way",extra:"return to the same places year after year"},
    {subj:"the mangrove",where:"muddy coastlines and river mouths",f1:"grows in salty water where most trees cannot live",f2:"protects the shore from storms and waves",extra:"shelters young fish and many birds"},
    {subj:"antibiotics",where:"hospitals and homes worldwide",f1:"are medicines that fight infections caused by bacteria",f2:"have saved millions of lives since they were discovered",extra:"can stop working if they are used carelessly"}
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

  /* ===================== READING: advanced builder (band D, grades 10-12) ===================== */
  // Grade 11-level analytical passages: abstract topics, complex sentences, academic vocabulary,
  // and questions weighted toward inference / attitude / purpose (medium & hard). Each q = [stem, correct, [distractors], level].
  var ADV_PACKS=[
    {title:"The Grip of Habit",
     passage:"Psychologists estimate that almost half of our daily behaviour is not the product of conscious decision but of habit. Once a routine is established, the brain automates it to conserve mental effort, freeing attention for less predictable tasks. This efficiency comes at a price: because habitual actions no longer depend on motivation, they are notoriously difficult to break by willpower alone. Researchers therefore argue that the most reliable way to change a habit is not to resist it directly, but to redesign the cues and surroundings that trigger it in the first place.",
     qs:[
      ["Which statement best expresses the main idea?","Habits are automatic and are changed most effectively by altering their triggers",["Willpower is the only way to break a habit","Habits play a minor role in daily life","People make most decisions consciously"],"C"],
      ["According to the passage, why does the brain turn routines into habits?","to save mental effort for less predictable tasks",["to make people more emotional","to slow down reactions","to increase motivation"],"C"],
      ["The phrase “comes at a price” suggests that this efficiency:","has a drawback as well as a benefit",["is completely free of problems","cannot be measured","is admired by everyone"],"H"],
      ["What can be inferred about relying on willpower to change habits?","It is often ineffective on its own",["It always succeeds quickly","It is the method researchers recommend","It removes the need to change surroundings"],"H"],
      ["The writer's attitude toward changing habits is best described as:","analytical and evidence-based",["angry and dismissive","uncertain and confused","light-hearted and joking"],"H"],
      ["Why does the author mention cues and surroundings?","to explain a more effective strategy for changing habits",["to prove habits cannot be changed","to describe a scientist's daily routine","to criticise psychologists"],"C"],
      ["In this passage, “notoriously” most nearly means:","widely known to be (in a bad way)",["surprisingly easy","secretly","only sometimes"],"H"]
     ]},
    {title:"The Promise and Price of Renewables",
     passage:"As anxieties about climate change have intensified, renewable sources such as solar and wind have moved from the margins of energy policy to its centre. Their appeal is clear: they generate electricity without the carbon emissions that accompany coal and gas, and their costs have fallen dramatically over the past decade. Critics, however, point to a stubborn weakness — the sun does not always shine and the wind does not always blow — which makes supply less predictable. In response, engineers are racing to develop cheaper, longer-lasting batteries, so that the debate is no longer whether renewables work, but how quickly they can replace older sources.",
     qs:[
      ["What is the central argument of the passage?","Renewables are now mainstream, and the key question is how fast they can expand",["Renewable energy has been proven not to work","Coal and gas produce no emissions","Batteries have made renewables unnecessary"],"C"],
      ["Which reason do supporters give for renewables?","they generate electricity without carbon emissions",["they are the cheapest option in every case","they never need storage","they work only at night"],"C"],
      ["The “stubborn weakness” critics mention is that renewable supply is:","less predictable because sun and wind vary",["too expensive to build","harmful to breathe","impossible to store forever"],"C"],
      ["What does the passage imply about the future of renewables?","Their expansion is expected to continue",["They will soon be abandoned","They cannot be improved","They will never need batteries"],"H"],
      ["The writer presents the topic in a way that is:","balanced, giving both benefits and drawbacks",["one-sided and emotional","fearful and alarmed","mocking of engineers"],"H"],
      ["The word “intensified” most nearly means:","grown stronger",["disappeared","stayed the same","became simpler"],"H"],
      ["Why does the author mention batteries?","to show how engineers are addressing the reliability problem",["to argue renewables are useless","to sell a product","to change the subject"],"C"]
     ]},
    {title:"Attention in the Age of the Feed",
     passage:"Social media platforms are engineered to capture and hold attention, and in that narrow aim they are remarkably successful. Every notification, autoplaying video and endless scroll is designed to exploit the brain's appetite for novelty. The consequences, researchers warn, are not trivial: fragmented concentration, shallower reading, and a restlessness that makes sustained thought harder. Yet the technology is not inevitable in its effects. Users who deliberately curate their feeds, silence non-essential alerts and set boundaries around their use report a striking recovery of focus, suggesting that the problem lies less in the tools themselves than in how thoughtlessly we tend to use them.",
     qs:[
      ["Which best states the main idea?","Social media is designed to capture attention, but mindful use can restore focus",["Social media has no effect on concentration","Notifications improve deep reading","Technology cannot be controlled by users"],"C"],
      ["According to the passage, what are platforms designed to exploit?","the brain's appetite for novelty",["the need for sleep","the desire to read long books","a fear of technology"],"C"],
      ["Which consequence is NOT mentioned?","improved long-term memory",["fragmented concentration","shallower reading","restlessness"],"C"],
      ["What does the writer suggest by saying the technology is “not inevitable in its effects”?","its harm depends on how it is used",["it always harms everyone equally","it cannot influence anyone","its effects are impossible to change"],"H"],
      ["The author's tone is best described as:","concerned but constructive",["furious and hopeless","amused and careless","neutral and uninterested"],"H"],
      ["The word “curate” in this passage most nearly means:","carefully select and manage",["delete entirely","ignore completely","copy exactly"],"H"],
      ["The final sentence mainly serves to:","locate the real problem in our habits, not the tools",["prove social media is harmless","introduce a new platform","criticise researchers"],"C"]
     ]},
    {title:"The True Cost of Fast Fashion",
     passage:"Clothing has never been cheaper or more disposable. Fast-fashion retailers release new designs at a dizzying pace, encouraging shoppers to treat garments as almost single-use. The hidden costs, however, accumulate far from the shop floor. Producing cheap clothes consumes vast quantities of water and energy, and the mountains of discarded textiles now rank among the fastest-growing categories of waste. Defenders of the industry argue that it makes fashion affordable and creates jobs in developing economies. Increasingly, though, consumers are questioning whether a low price at the till is worth so high a cost to the environment.",
     qs:[
      ["What is the main idea of the passage?","Fast fashion is cheap but carries serious environmental costs",["Clothing has become too expensive","Textile waste is shrinking rapidly","Fashion has no effect on the environment"],"C"],
      ["Which hidden cost does the passage mention?","large use of water and energy",["higher prices in shops","a shortage of designs","slower production"],"C"],
      ["How do defenders of the industry justify it?","it makes fashion affordable and creates jobs",["it reduces all waste","it uses no resources","it lowers water use"],"C"],
      ["What can be inferred about the writer's view of fast fashion?","they are sceptical of its low prices given the environmental harm",["they strongly recommend buying more of it","they believe it has no drawbacks","they think it is too expensive"],"H"],
      ["The phrase “hidden costs” refers to:","harms that are not obvious at the point of sale",["secret discounts","the price on the label","transport fees"],"H"],
      ["The word “accumulate” most nearly means:","build up over time",["disappear",'stay fixed',"become cheaper"],"H"],
      ["The writer's purpose is mainly to:","make readers weigh price against environmental impact",["advertise a clothing brand","explain how to sew","praise disposable clothes"],"C"]
     ]},
    {title:"Living with Artificial Intelligence",
     passage:"Few technologies have inspired such a mixture of hope and unease as artificial intelligence. Optimists highlight its capacity to automate tedious work, accelerate scientific discovery and widen access to expertise once reserved for specialists. Sceptics counter with warnings of disrupted labour markets, biases quietly embedded in the data, and a dangerous reliance on systems that few people truly understand. What most analysts agree on is more subtle than either extreme: AI is unlikely to replace human workers wholesale, but it will reshape the skills that jobs demand. Those who flourish, they suggest, will be the ones who learn to collaborate with these tools rather than compete against them.",
     qs:[
      ["Which statement best captures the main idea?","AI will reshape the skills jobs require rather than simply replace workers",["AI will replace all workers within a year","AI has no risks worth discussing","AI cannot perform any useful task"],"C"],
      ["Which benefit do optimists mention?","widening access to expertise",["guaranteed job losses","hidden bias","total human control"],"C"],
      ["What concern do sceptics raise?","bias embedded in the data",["that AI is too slow","that AI is too cheap","that AI cannot automate anything"],"C"],
      ["The phrase “more subtle than either extreme” suggests the balanced view:","lies between the optimists and the sceptics",["agrees only with optimists","agrees only with sceptics","rejects all analysis"],"H"],
      ["What can be inferred about workers who will “flourish”?","they will adapt by working alongside AI",["they will avoid technology entirely","they will refuse to learn","they will compete directly with machines"],"H"],
      ["The word “unease” most nearly means:","worry or discomfort",["excitement","certainty","boredom"],"H"],
      ["The passage as a whole is best described as:","a balanced discussion of AI's promise and risks",["an advertisement for AI","a warning to ban AI","a personal story about a robot"],"C"]
     ]},
    {title:"The Uses of Failure",
     passage:"We are taught from an early age to fear failure, yet a growing body of research suggests that setbacks may be among our most valuable teachers. When a plan succeeds, we rarely examine why; when it collapses, we are forced to analyse each step and confront our mistaken assumptions. Psychologists note that people who treat failure as information rather than as a verdict on their worth tend to recover faster and improve more. The danger, then, lies not in failing itself but in the shame that discourages us from studying what went wrong.",
     qs:[
      ["Which statement best expresses the main idea?","Failure can teach us more than success if we study it instead of fearing it",["Failure should always be avoided","Success teaches us nothing at all","Shame is the best motivator"],"C"],
      ["According to the passage, why does success teach us less than failure?","we rarely stop to examine why success happened",["success never happens","success is always accidental","we analyse success too closely"],"C"],
      ["What distinguishes people who recover well from setbacks?","they treat failure as information, not a judgement of their worth",["they never make mistakes","they ignore their mistakes completely","they blame others"],"H"],
      ["The writer suggests the real danger of failure is:","the shame that stops us learning from it",["the loss of money","the passing of time","the opinion of strangers"],"H"],
      ["The author's attitude toward failure is best described as:","thoughtful and encouraging",["fearful and discouraging","mocking and dismissive","angry and bitter"],"H"],
      ["The phrase “a verdict on their worth” refers to seeing failure as:","a final judgement about how good a person is",["a helpful piece of advice","a small and temporary problem","a reason to try again"],"C"],
      ["The word “confront” most nearly means:","face directly",["hide from","forget","enjoy"],"H"]
     ]},
    {title:"The Quiet Value of Green Spaces",
     passage:"As cities swell, planners increasingly treat parks and gardens not as luxuries but as necessities. Studies have linked access to green space with lower stress, better concentration and even faster recovery from illness. The benefits are not only personal: trees cool overheated streets, absorb rainfall that would otherwise flood drains, and filter pollutants from the air. Critics sometimes object that land in crowded cities is too valuable to leave unbuilt, yet the evidence suggests that the long-term savings in health and climate resilience may far outweigh the short-term cost.",
     qs:[
      ["What is the central argument of the passage?","Urban green spaces bring health and environmental benefits that outweigh their cost",["Parks are a waste of valuable land","Cities should stop growing","Trees have no effect on cities"],"C"],
      ["Which personal benefit of green space is mentioned?","better concentration",["higher wages","faster internet","cheaper housing"],"C"],
      ["According to the passage, how do trees help during heavy rain?","they absorb rainfall that would otherwise flood drains",["they stop the rain falling","they warm the streets","they block sunlight"],"C"],
      ["What objection to green space does the writer mention?","city land is too valuable to leave unbuilt",["parks are dangerous at night","trees spread disease","people dislike parks"],"H"],
      ["How does the writer respond to that objection?","by arguing the long-term savings outweigh the short-term cost",["by agreeing that parks should be removed","by ignoring it","by saying cost does not matter"],"H"],
      ["The word “resilience” most nearly means:","ability to recover and cope",["weakness","confusion","decoration"],"H"],
      ["The writer's overall stance toward green spaces is:","supportive, backed by evidence",["hostile","uncertain","indifferent"],"C"]
     ]},
    {title:"Why We Put Things Off",
     passage:"Procrastination is often mistaken for laziness, but researchers describe it as a failure of mood management rather than of time management. When a task feels threatening or dull, the mind reaches for the immediate relief of a more pleasant activity, trading a small comfort now for a larger cost later. Because the reward is instant and the penalty distant, the habit is easy to repeat. Studies show that the most effective remedies do not rely on guilt, which tends to deepen avoidance, but on shrinking the task into a first step small enough to begin without dread.",
     qs:[
      ["Which best states the main idea?","Procrastination is about managing mood, and is eased by starting small rather than feeling guilty",["Procrastination is simply laziness","Guilt is the best cure for delay","Tasks should always be avoided"],"C"],
      ["How do researchers redefine procrastination?","as a failure of mood management rather than time management",["as a kind of illness","as a lack of intelligence","as a moral weakness"],"C"],
      ["Why is the habit easy to repeat, according to the passage?","the reward is instant while the penalty is distant",["the task disappears","the reward is delayed","there is no penalty at all"],"H"],
      ["What does the passage say about using guilt to fight procrastination?","it tends to deepen avoidance",["it always works quickly","it is the recommended method","it has no effect either way"],"H"],
      ["Which remedy does the writer favour?","breaking the task into a very small first step",["waiting until the deadline","punishing yourself","ignoring the task"],"C"],
      ["The phrase “trading a small comfort now for a larger cost later” describes:","choosing short-term relief despite a bigger future problem",["a wise long-term plan","a fair exchange of money","a way to save time"],"H"],
      ["The word “dread” most nearly means:","strong fear or reluctance",["mild interest","great joy","quiet calm"],"H"]
     ]},
    {title:"The Reinvention of Reading",
     passage:"For most of history, reading was a scarce and demanding skill, practised slowly and often aloud. The printing press made texts abundant, and mass education made readers of whole populations. Now the screen has changed the act again. We read more words than any generation before us, yet much of that reading is rapid, fragmented and easily interrupted. Some scholars fear that the deep, patient attention demanded by a long book is being eroded. Others reply that reading has always adapted to its tools, and that the human capacity for focus can be trained back whenever we choose to protect it.",
     qs:[
      ["What is the main idea of the passage?","Reading keeps changing with technology, and today's screens raise questions about our attention",["Reading has never changed","Books are now useless","Screens have destroyed reading forever"],"C"],
      ["What effect did the printing press have, according to the passage?","it made texts abundant",["it made reading illegal","it slowed reading down","it ended education"],"C"],
      ["What worry do some scholars express about screen reading?","deep, patient attention is being eroded",["people read too few words","books have become too long","reading aloud has returned"],"H"],
      ["How do other scholars respond to that worry?","reading has always adapted, and focus can be trained back",["reading cannot change","attention is fixed forever","screens should be banned"],"H"],
      ["The passage suggests the human ability to focus is:","something that can be lost but also rebuilt",["completely unchangeable","already gone","unrelated to reading"],"C"],
      ["The word “eroded” most nearly means:","worn away gradually",["strengthened","invented","measured"],"H"],
      ["The writer presents the debate in a way that is:","balanced, giving both concerns and replies",["one-sided against screens","mocking of readers","fearful and hopeless"],"H"]
     ]},
    {title:"The Economics of Water",
     passage:"In much of the world water flows so cheaply from the tap that we scarcely think of its price, yet in arid regions its true cost is impossible to ignore. Producing fresh water in a desert nation may mean removing salt from seawater, a process that demands large amounts of energy and money. Because the supply is precious, small savings multiply: a leaking pipe or a wasteful habit that seems trivial becomes, across a whole city, an enormous loss. Managing water wisely is therefore less about a single dramatic solution than about countless careful decisions repeated every day.",
     qs:[
      ["Which statement best captures the main idea?","In dry regions water is costly, so wise use depends on many small careful decisions",["Water is free everywhere","Only one solution can fix water shortages","Water has no real cost"],"C"],
      ["Why is fresh water expensive in a desert nation, according to the passage?","removing salt from seawater takes a lot of energy and money",["there is too much rain","pipes are cheap","people do not need it"],"C"],
      ["What does the writer mean by saying 'small savings multiply'?","minor savings add up to large amounts across a whole city",["saving is pointless","water cannot be saved","leaks do not matter"],"H"],
      ["What can be inferred about a single leaking pipe?","it can waste a large amount when repeated across a city",["it saves water","it has no effect","it lowers the cost of water"],"H"],
      ["The writer suggests managing water well depends mainly on:","many repeated careful decisions",["one dramatic invention","ignoring the problem","using more energy"],"C"],
      ["The word “arid” most nearly means:","very dry",["very wet","very cold","very crowded"],"H"],
      ["The writer's tone is best described as:","practical and measured",["panicked","careless","humorous"],"H"]
     ]},
    {title:"The Puzzle of Sleep",
     passage:"We spend roughly a third of our lives asleep, and for centuries this seemed a waste of precious time. Modern science tells a different story. During sleep the brain does not switch off but goes quietly to work, sorting the day's experiences, strengthening useful memories and clearing away waste products that build up while we are awake. People deprived of sleep struggle to concentrate, regulate their emotions and fight off illness. Far from being idle, sleep now appears to be one of the most active and essential things the body does.",
     qs:[
      ["What is the central idea of the passage?","Sleep is not wasted time but an active, essential process for the brain and body",["Sleep is a waste of time","The brain shuts down during sleep","People need very little sleep"],"C"],
      ["According to the passage, what does the brain do during sleep?","sort experiences and strengthen useful memories",["stop all activity","forget everything","grow larger"],"C"],
      ["Which is a stated effect of losing sleep?","difficulty concentrating",["improved memory","better health","faster reactions"],"C"],
      ["What can be inferred about the old view of sleep?","it wrongly saw sleep as unproductive",["it was completely correct","it valued sleep highly","it studied the brain carefully"],"H"],
      ["The phrase “goes quietly to work” suggests that during sleep the brain is:","busy though we are unaware of it",["completely inactive","damaged","awake and alert"],"H"],
      ["The word “deprived” most nearly means:","kept without",["given plenty of","tired of","cured of"],"H"],
      ["The writer's purpose is mainly to:","correct a mistaken view of sleep with scientific evidence",["advertise a sleep product","tell a bedtime story","warn against sleeping"],"C"]
     ]},
    {title:"The Spread of Misinformation",
     passage:"False information has always existed, but the speed at which it now travels is new. A striking rumour can circle the globe before a careful correction has finished being written. Researchers find that surprising or emotional claims are shared far more readily than sober facts, because they capture attention and feel urgent. The remedy is not simply more information, since a flood of it can overwhelm rather than inform. What helps most, studies suggest, is the habit of pausing before sharing — a brief moment in which readers ask whether a claim is likely to be true and where it came from.",
     qs:[
      ["Which best states the main idea?","Misinformation spreads fast, and pausing to check before sharing helps most",["False information is a new invention","More information always solves the problem","Emotional claims are usually true"],"C"],
      ["Why do surprising or emotional claims spread so readily?","they capture attention and feel urgent",["they are always accurate","they are written slowly","they are boring"],"C"],
      ["Why is 'more information' not a full solution, according to the passage?","a flood of information can overwhelm rather than inform",["information is never useful","facts are always false","people cannot read"],"H"],
      ["What habit does the writer recommend?","pausing to question a claim before sharing it",["sharing everything quickly","ignoring all news","believing emotional claims"],"C"],
      ["What can be inferred about corrections to false claims?","they often spread more slowly than the rumours they answer",["they always arrive first","they are never needed","they stop all rumours"],"H"],
      ["The word “sober” most nearly means:","calm and serious",["drunk","colourful","exciting"],"H"],
      ["The writer's overall tone is:","concerned but constructive",["amused","hopeless","indifferent"],"H"]
     ]},
    {title:"The Long Road of the Camel Caravan",
     passage:"Long before highways crossed the deserts of Arabia, trade moved on the backs of camels. These caravans linked distant cities, carrying not only goods such as spices, cloth and incense but also ideas, languages and beliefs. A journey that now takes hours could then take weeks, and its success depended on deep knowledge of wells, weather and the stars. When faster ships and, later, motor vehicles arrived, the caravans faded from daily life. Yet the routes they wore into the land shaped where towns grew, and the traditions of hospitality they demanded still echo in the region today.",
     qs:[
      ["What is the main idea of the passage?","Camel caravans carried goods and ideas and left a lasting mark on the region",["Caravans were unimportant","Deserts had no trade","Camels were never used for travel"],"C"],
      ["Besides goods, what else did caravans carry, according to the passage?","ideas, languages and beliefs",["only water","only gold","nothing at all"],"C"],
      ["On what did the success of a journey depend?","knowledge of wells, weather and the stars",["the price of spices","the number of cities","the speed of ships"],"C"],
      ["Why did the caravans fade from daily life?","faster ships and motor vehicles arrived",["camels disappeared","the deserts flooded","people stopped trading"],"H"],
      ["What lasting effects of the caravans does the writer mention?","the routes shaped where towns grew and traditions of hospitality remain",["there were no lasting effects","the deserts became forests","the cities vanished"],"H"],
      ["The word “faded” most nearly means:","gradually disappeared",["suddenly grew","became brighter","stayed the same"],"H"],
      ["The passage as a whole is best described as:","an informative account of a historical trade network",["a warning about deserts","an advertisement for camels","a personal diary"],"C"]
     ]},
    {title:"The Cost and Promise of Space Exploration",
     passage:"Sending machines and people beyond the Earth is extraordinarily expensive, and critics reasonably ask whether the money might be better spent on urgent needs at home. Supporters answer that the returns, though indirect, are real. Technologies first developed for space — from water-purification systems to advances in medical imaging — now serve millions who will never leave the ground. Beyond the practical gains, they argue, exploration answers a deep human curiosity and unites people around a shared endeavour. The debate is unlikely to end, but it is rarely as simple as choosing between the stars and the street.",
     qs:[
      ["Which statement best captures the main idea?","Space exploration is costly, but supporters argue its indirect returns and inspiration justify it",["Space exploration is cheap and simple","Space research helps no one","The money should clearly go elsewhere"],"C"],
      ["What reasonable objection to space spending does the writer note?","the money might be better spent on urgent needs at home",["space is too far away","rockets are too slow","astronauts dislike travel"],"C"],
      ["Which practical benefit of space technology is mentioned?","advances in medical imaging",["cheaper spaceflight","longer holidays","faster cars"],"C"],
      ["What non-practical benefit do supporters claim?","it satisfies curiosity and unites people around a shared goal",["it lowers taxes","it ends all conflict","it replaces schools"],"H"],
      ["What does the final sentence suggest about the debate?","the choice is more complex than 'the stars versus the street'",["the debate is already settled","space should be abandoned","home needs do not matter"],"H"],
      ["The word “indirect” most nearly means:","not immediate or obvious",["quick and clear","free of cost","impossible"],"H"],
      ["The writer presents the topic in a way that is:","balanced, weighing both sides",["one-sided and emotional","mocking of scientists","fearful"],"C"]
     ]},
    {title:"The Meaning of Deadlines",
     passage:"A deadline can feel like an enemy, yet its effect on human effort is remarkably useful. Given unlimited time, most people expand a task to fill whatever hours are available, polishing endlessly or delaying the start. A clear cut-off concentrates attention, forcing choices about what truly matters and what can be left undone. The danger appears only when deadlines are too many or too tight, so that the pressure that once sharpened work begins instead to exhaust it. Used with judgement, a deadline is less a threat than a tool for turning good intentions into finished work.",
     qs:[
      ["Which best states the main idea?","Deadlines, used wisely, help concentrate effort and finish work",["Deadlines are always harmful","Unlimited time produces the best work","Deadlines have no effect on people"],"C"],
      ["What does the passage say people do given unlimited time?","they expand a task to fill the available hours",["they finish early","they refuse to work","they plan perfectly"],"C"],
      ["How does a clear deadline help, according to the writer?","it forces choices about what truly matters",["it removes all effort","it slows the work down","it adds more tasks"],"H"],
      ["When do deadlines become harmful?","when they are too many or too tight",["when they are clear","when work is finished","when they are removed"],"H"],
      ["The phrase “turning good intentions into finished work” suggests deadlines can:","help people actually complete what they mean to do",["stop people working","waste time","lower the quality of ideas"],"C"],
      ["The word “concentrates” most nearly means:","focuses",["scatters","weakens","hides"],"H"],
      ["The writer's overall view of deadlines is:","that they are useful when used with judgement",["that they should be abolished","that they are purely negative","that they never matter"],"H"]
     ]}
  ];
  function buildAdvanced(r){
    var p=pick(r,ADV_PACKS);
    var comp=p.qs.map(function(q){ return mc(r,"Reading",q[3]||"C","comprehension",q[0],q[1],q[2]); });
    return {title:p.title, passage:p.passage, comp:comp};
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
    "honey":["a sweet food made by bees","a kind of stone","a cold drink","a type of cloth","F"],
    "automate":["make something happen without effort or thought","make something harder","slow something down","hide something","H"],
    "conserve":["save or use carefully","waste","destroy","reveal","H"],
    "efficiency":["doing something well without waste","doing something slowly","making mistakes","using more than needed","H"],
    "willpower":["self-control to do something difficult","physical strength","good luck","free time","H"],
    "reliable":["able to be trusted or depended on","easily broken","rarely true","very rare","C"],
    "emissions":["gases released into the air","kinds of food","types of soil","sources of light","C"],
    "dramatically":["by a very large amount","only slightly","not at all","very slowly","H"],
    "predictable":["able to be known in advance","impossible to guess","completely random","very rare","C"],
    "intensified":["became stronger","became weaker","disappeared","stayed the same","H"],
    "novelty":["the quality of being new","old age","great cost","a loud noise","H"],
    "fragmented":["broken into small pieces","joined smoothly","made larger","kept whole","H"],
    "sustained":["kept going for a long time","stopped at once","done quickly","forgotten","H"],
    "inevitable":["certain to happen and unavoidable","easy to prevent","very unlikely","optional","H"],
    "consequences":["results or effects of an action","causes","questions","rewards only","C"],
    "disposable":["meant to be used once and thrown away","built to last forever","very expensive","hard to find","C"],
    "accumulate":["build up over time","disappear","stay fixed","become cheaper","H"],
    "discarded":["thrown away","carefully kept","newly bought","repaired","C"],
    "affordable":["cheap enough to buy","far too expensive","free of charge always","impossible to sell","C"],
    "embedded":["fixed firmly inside something","floating on top","clearly visible","removed","H"],
    "collaborate":["work together","compete against","work alone","give up","C"],
    "subtle":["not obvious; needing careful thought","very loud","completely clear","extremely large","H"],
    "flourish":["do very well; thrive","fail badly","stay still","shrink","H"],
    "exploit":["make full use of (often unfairly)","ignore","protect","waste","H"],
    "deliberately":["on purpose","by accident","very slowly","secretly","C"]
  };
  var SYN=[["happy",["glad","cheerful"]],["big",["large","huge"]],["small",["little","tiny"]],["fast",["quick"]],["begin",["start"]],["end",["finish"]],["help",["assist"]],["scared",["afraid"]],["quiet",["silent"]],["easy",["simple"]],["hard",["difficult"]],["beautiful",["lovely"]],["cold",["chilly"]],["tired",["sleepy"]]];
  var VOCAB_DISTRACT=["river","table","garden","yellow","market","window","forest","letter","summer","pocket","corner","bottle","candle","ladder"];
  function passageVocab(passage, r, n){
    var text=" "+String(passage).toLowerCase()+" ", words=Object.keys(VOCAB_GLOSS);
    var found=shuffle(r, words.filter(function(w){ return text.indexOf(w.trim().toLowerCase())>=0; }).map(function(w){return w.trim();}));
    var used={}, out=[], seenStem={};
    function pushUnique(it){ var k=String(it.q).trim().toLowerCase(); if(seenStem[k])return false; seenStem[k]=1; out.push(it); return true; }
    for(var i=0;i<found.length && out.length<n;i++){ var w=found[i]; if(used[w])continue; used[w]=1; var g=VOCAB_GLOSS[w]||VOCAB_GLOSS[w+" "]; if(!g)continue;
      pushUnique(mc(r,"Vocabulary",g[4]||"C","word from the passage","In the passage, the word “"+w+"” means:",g[0],[g[1],g[2],g[3]])); }
    // Fall back to synonym items, but never repeat the same head word (that was the source of duplicates).
    var usedSyn={}, guard=0;
    while(out.length<n && guard<120){ guard++; var it=pick(r,SYN); if(usedSyn[it[0]])continue; usedSyn[it[0]]=1; var syn=pick(r,it[1]);
      pushUnique(mc(r,"Vocabulary","F","word meaning","Which word means about the same as “"+it[0]+"”?",syn,distinct(r,VOCAB_DISTRACT,syn,3,it[1].concat([it[0]])))); }
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
    // Difficulty mix shifts up with the grade band: lower grades lean easy, higher grades lean hard.
    var want;
    if(band<=2)      want={F:Math.max(1,Math.round(count*0.5)),  C:Math.max(1,Math.round(count*0.35))};
    else if(band===3)want={F:Math.max(1,Math.round(count*0.3)),  C:Math.max(1,Math.round(count*0.4))};
    else             want={F:Math.max(1,Math.round(count*0.15)), C:Math.max(1,Math.round(count*0.4))}; // band D: mostly medium/hard
    want.H=Math.max(1,count-want.F-want.C);
    var out=[], seen={};
    ["F","C","H"].forEach(function(lv){ var pool=byLv[lv].length?byLv[lv]:G, need=want[lv], guard=0;
      while(need>0 && guard<200){ guard++; var t=pick(r,pool), it=t.fn(r), key=String(it.q).trim().toLowerCase(); if(seen[key])continue; seen[key]=1; out.push(it); need--; } });
    var guard=0; while(out.length<count && guard<200){ guard++; var t=pick(r,G), it=t.fn(r), key=String(it.q).trim().toLowerCase(); if(seen[key])continue; seen[key]=1; out.push(it); }
    var rank={F:0,C:1,H:2}; out.sort(function(a,b){ return (rank[a.level]||1)-(rank[b.level]||1); });
    return out.slice(0,count);
  }
  // Reading comprehension (first) + vocabulary drawn from the passage (second). Default 7 + 5 = 12.
  function reading(grade, seedStr){
    var band=bandOf(grade), r=rng("READ|"+grade+"|"+seedStr);
    // Passage difficulty rises with the band: narrative (A/B), factual (C), analytical Grade 10-12 (D).
    var built = band<=2 ? buildNarrative(r) : (band===3 ? buildFactual(r) : buildAdvanced(r));
    var comp = built.comp.slice(0,7);
    var vocab = passageVocab(built.passage, r, 12-comp.length);
    // Final guarantee: no two questions in one reading block share a stem.
    var seen={}, qs=[]; comp.concat(vocab).forEach(function(q){ var k=String(q.q).trim().toLowerCase(); if(seen[k])return; seen[k]=1; qs.push(q); });
    return { title:built.title, passage:built.passage, qs:qs };
  }
  function writing(grade, seedStr){ return buildWriting(rng("WRITE|"+grade+"|"+seedStr), bandOf(grade)); }

  var api={ items:items, reading:reading, writing:writing, _band:bandOf };
  if(typeof window!=="undefined") window.ENG_GEN=api;
  if(typeof globalThis!=="undefined") globalThis.ENG_GEN=api;
})();
