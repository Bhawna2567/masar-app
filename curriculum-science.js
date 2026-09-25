/* Adeptly — Science curriculum. Grades 3-8 translated from the official Arabic MOE Bridge
   (Basic track) scope & sequence; Grade 9 General from the Integrated Science scope & sequence.
   Merges into CURRICULUM[grade][term]["Science"][strand] = [outcomes].
   Strands: Life Science, Physical Science, Earth & Space Science, Scientific Inquiry & Technology.
   Load AFTER curriculum.js. */
if (typeof CURRICULUM === "undefined") { var CURRICULUM = {}; }
(function(){
  var STR=["Life Science","Physical Science","Earth & Space Science","Scientific Inquiry & Technology"];
  function add(grade, byTerm){
    CURRICULUM[grade]=CURRICULUM[grade]||{};
    for(var t in byTerm){
      CURRICULUM[grade][t]=CURRICULUM[grade][t]||{};
      var base={}; STR.forEach(function(s){ base[s]=[]; });
      CURRICULUM[grade][t]["Science"]=Object.assign(base, byTerm[t]);
    }
  }

  add("3", {
    "1":{ "Life Science":["A Look at Living Things — living things and their needs; living things; animals and their parts; classifying animals.","Living Things Grow and Change — plant life cycles; animal life cycles; from parents to offspring; food chains and food webs."],
          "Scientific Inquiry & Technology":["Be a Scientist — the scientific method.","Technology and Design — technology; the design process; technology and the environment."] },
    "2":{ "Earth & Space Science":["Changes to Earth — Earth's features; sudden changes to Earth; weathering and erosion.","Weather Changes — weather; the water cycle."],
          "Physical Science":["Matter — properties of matter; measuring matter; solids, liquids and gases."] },
    "3":{ "Physical Science":["Changes in Matter — changes of state; physical changes; chemical changes.","Force and Motion — position and motion; forces; using simple machines.","Forms of Energy — work and energy; heat; electricity."] }
  });

  add("4", {
    "1":{ "Scientific Inquiry & Technology":["Be a Scientist — the scientific method."],
          "Life Science":["Kingdoms of Life — cells; classifying living things.","The Animal Kingdom — systems in animals; the animal life cycle.","Adaptation and Survival — animal adaptations; plants and their adaptations; changes in ecosystems.","Health of Living Things — choosing healthy foods; maintaining health, fitness and safety."] },
    "2":{ "Physical Science":["Matter and Its Changes — describing matter; measurement; properties of water; mixtures.","Energy — heat; sound; light."] },
    "3":{ "Physical Science":["Energy — electricity; using electrical energy; magnetism and electricity.","Motion, Forces and Design — changing motion; forces and transport; technology and design."],
          "Earth & Space Science":["Weather and Climate — air and weather; water; tracking weather; climate.","The Solar System and Beyond — Earth and the Sun; Earth and the Moon; the solar system; stars and constellations."] }
  });

  add("5", {
    "1":{ "Scientific Inquiry & Technology":["Becoming a Great Scientist — becoming a scientist; the scientific method; a scientist's tools; taking measurements."],
          "Life Science":["Parents and Offspring — reproduction; the plant life cycle; animal life cycles.","Interactions in Ecosystems — photosynthesis; energy flow in ecosystems; relationships in ecosystems; adaptation and survival."] },
    "2":{ "Earth & Space Science":["Using Earth's Resources — natural resources; uses of resources; cycles in ecosystems."],
          "Physical Science":["Comparing Types of Matter — elements; metals, nonmetals and metalloids.","Chemical and Physical Changes — mixtures; compounds and chemical changes; acids, bases and salts."] },
    "3":{ "Physical Science":["Using Forces — motion; forces and motion; work and energy.","Using Energy — sound; light."],
          "Earth & Space Science":["Minerals, Rocks and Soil — minerals; rocks; soil."],
          "Scientific Inquiry & Technology":["Technology and Design — technology and your life; technology and nature; the design process."] }
  });

  add("6", {
    "1":{ "Scientific Inquiry & Technology":["Methods of Science — case study; Saruq Al Hadid.","Technology and the Design Process — tools of technology; materials and their properties; the design process; technological systems."],
          "Physical Science":["Matter and Atoms — chemicals and mixtures; atomic structure.","Matter: Properties and Changes — matter and its properties; matter and its changes.","Solubility and Acidic/Basic Solutions — properties of solutions; acidic and basic solutions."] },
    "2":{ "Physical Science":["Energy, Work and Simple Machines — forms of energy; energy transformations and work; machines."],
          "Life Science":["Exploring Life and Classifying Living Things — characteristics of life; classifying living things; exploring life."],
          "Earth & Space Science":["Our Planet Earth — Earth's systems; interactions of Earth's systems."] },
    "3":{ "Life Science":["Cell Structure and Function — cells and life; the cell; cell transport; cells and energy."],
          "Earth & Space Science":["Earth in Space — the Sun-Earth-Moon system; the solar system; stars, galaxies and the universe.","Natural Resources — energy resources; renewable energy resources; land resources; air and water resources.","Environmental Impacts — humans and the environment; impacts on land; impacts on water; impacts on the atmosphere."] }
  });

  add("7", {
    "1":{ "Scientific Inquiry & Technology":["Scientific Explanations — understanding science; measurement and scientific tools; case study."],
          "Physical Science":["Foundations of Chemistry — classifying matter; physical properties; physical changes; chemical properties and changes.","Understanding the Atom — discovering the parts of the atom; protons, neutrons and electrons — how atoms differ.","The Periodic Table — using the periodic table; metals; nonmetals and metalloids.","Motion, Forces and Newton's Laws — describing motion; forces; Newton's laws of motion."] },
    "2":{ "Physical Science":["Waves, Light and Sound — waves; light; sound."],
          "Life Science":["Introduction to Animals — what are animals?; invertebrates; chordates.","Animal Behavior and Reproduction — types of behavior; interacting with other animals; animal reproduction and development."] },
    "3":{ "Life Science":["Introduction to Plants — plant diversity; plant reproduction; plant processes; plant responses."],
          "Earth & Space Science":["Exploring Space — observing the universe; early history of space exploration; current and future space missions.","Earth's Changing Surface — plate tectonics; earthquakes and volcanoes; weathering, erosion and deposition.","Weather and Its Effects — the atmosphere; weather; severe weather.","Climate — Earth's climate; climate cycles; recent climate change."] }
  });

  add("8", {
    "1":{ "Physical Science":["Thermal Energy — thermal energy, temperature and heat; transfer of thermal energy; using thermal energy.","Elements and Chemical Bonds — electrons and energy levels; compounds, chemical formulas and covalent bonds; ionic and metallic bonds.","Chemical Reactions and Equations — understanding chemical reactions; types of chemical reactions; chemical reactions and energy changes.","Electricity and Magnetism — electric charges and forces; electric current and circuits; magnetism."] },
    "2":{ "Physical Science":["Mirrors and Lenses — mirrors; lenses; optical instruments."],
          "Life Science":["Digestion and Excretion — nutrition; the digestive system; the excretory system.","Circulatory and Respiratory Systems — the circulatory system; the respiratory system."] },
    "3":{ "Life Science":["Heredity and Adaptations — heredity and inherited traits; adaptations of a species."],
          "Earth & Space Science":["Earthquakes and Volcanoes — earthquakes; volcanoes.","Evidence of Earth's Past — fossils; relative-age dating; absolute-age dating.","Evidence of Geologic Time — geologic history and the evolution of life; the Paleozoic era; the Mesozoic era; the Cenozoic era."] }
  });

  /* Grade 9 General — Integrated Science */
  add("9G", {
    "1":{ "Scientific Inquiry & Technology":["A Physics Toolkit — methods of science; mathematics and physics; measurement; graphing data."],
          "Physical Science":["Representing Motion — picturing motion; where and when; position-time graphs; how fast?","Accelerated Motion — acceleration; motion with constant acceleration; free fall."] },
    "2":{ "Physical Science":["Forces in One Dimension — force and motion; weight and drag force; Newton's third law.","Displacement and Force in Two Dimensions — vectors; friction; forces in two dimensions."] },
    "3":{ "Physical Science":["Work, Energy and Machines — work and energy; machines.","Vibrations and Waves — periodic motion; wave properties; wave behavior.","Solids, Liquids and Gases — matter and thermal energy; properties of fluids; behavior of gases.","Matter — Properties and Change — properties of matter; changes in matter; elements and compounds; mixtures and matter."] }
  });

  /* Grade 10 General — Science (Term 3 provided; atomic-structure / chemistry strand) */
  add("10G", {
    "3":{ "Physical Science":[
            "Atomic Structure — early ideas about the atom; defining the atom; how atoms differ; unstable nuclei and radioactive decay.",
            "Electrons in the Atom — light and quantum energy; quantum theory and the atom; electron configuration.",
            "The Periodic Table — development of the modern periodic table; classification of the elements; periodic trends."] }
  });
})();


/* ================= Grade 9 General — Integrated Science (Physics bridge) =================
   Embedded in full from "G09 GEN_ SCOPE AND SEQUENCE_BRIDGE_2025-2026.xlsx" (all 3 terms, every
   lesson, with the Required / Enrichment notes). Filed under BOTH Science and Physics so a Grade 9
   General class shows it whichever subject it uses. Replaces the earlier short summary. */
(function(){
  var PHYS={
 "1": {
  "Measurement & Units": [
   "A Physics Toolkit (Chapter 1) — Methods of Science",
   "A Physics Toolkit (Chapter 1) — Mathematics and Physics",
   "A Physics Toolkit (Chapter 1) — Measurement",
   "A Physics Toolkit (Chapter 1) — Graphing Data · For enrichment: Non-linear relationships p: 21-22"
  ],
  "Motion & Forces": [
   "Representing Motion (Chapter 2) — Picturing Motion",
   "Representing Motion (Chapter 2) — Where and When?",
   "Representing Motion (Chapter 2) — Position-Time Graphs",
   "Representing Motion (Chapter 2) — How Fast?",
   "Accelerated Motion (Chapter 3) — Acceleration",
   "Accelerated Motion (Chapter 3) — Motion with Constant Acceleration · Required: \"Velocity with Average Acceleration\" p: 69 For enrichment: remaining content of the lesson",
   "Accelerated Motion (Chapter 3) — Free-Fall · Required: “Galileo’s Discovery” p: 75 – “Free-Fall Acceleration” p: 76 (conceptual understanding for the case when an object is dropped and when it is thrown upward) For enrichment: remaining content of the lesson"
  ]
 },
 "2": {
  "Motion & Forces": [
   "Forces in One Dimension (Chapter 4) — Force and Motion",
   "Forces in One Dimension (Chapter 4) — Weight and Drag Force · For enrichment:\"Drag force\" p: 104-105",
   "Forces in One Dimension (Chapter 4) — Newton's Third Law",
   "Displacement and Force in Two Dimensions (Chapter 5) — Vectors · For enrichment",
   "Displacement and Force in Two Dimensions (Chapter 5) — Friction",
   "Displacement and Force in Two Dimensions (Chapter 5) — Forces in Two Dimensions · For enrichment"
  ]
 },
 "3": {
  "Motion & Forces": [
   "Work, Energy, and Machines (Chapter 6) — Work and Energy · Stick to one dimension only - don’t involve trigonometry and vector projection - Calculation of work is required only for the cases when force is in the same direction of motion, opposite to the direction of motion, or perpendicular to the direction of motion.",
   "Work, Energy, and Machines (Chapter 6) — Machines · For enrichment"
  ],
  "Waves & Sound": [
   "Vibrations and Waves (Chapter 7) — Periodic Motion · Required: Definitions of periodic motion, period, and amplitude only - p:234. For enrichment: remaining content of the lesson.",
   "Vibrations and Waves (Chapter 7) — Wave Properties",
   "Vibrations and Waves (Chapter 7) — Wave Behavior · For enrichment"
  ],
  "Matter & Thermal Energy": [
   "Solids, Liquids, and Gases (Chapter 8) — Matter and Thermal Energy",
   "Solids, Liquids, and Gases (Chapter 8) — Properties of Fluids",
   "Solids, Liquids, and Gases (Chapter 8) — Behavior of Gases",
   "Matter - Properties and change (Chapter 9) — Properties of Matter",
   "Matter - Properties and change (Chapter 9) — Changes in Matter",
   "Matter - Properties and change (Chapter 9) — Elements and compounds · Required: - Law of Definite Proportion with calculation. - Law of Multiple Proportion just conceptual (without calculation and without comparing the ratio of Mass between the different compounds).",
   "Matter - Properties and change (Chapter 9) — Mixture and Matter · For enrichment: Separating Mixtures"
  ]
 }
}, SCI={
 "1": {
  "Scientific Inquiry & Technology": [
   "A Physics Toolkit (Chapter 1) — Methods of Science",
   "A Physics Toolkit (Chapter 1) — Mathematics and Physics",
   "A Physics Toolkit (Chapter 1) — Measurement",
   "A Physics Toolkit (Chapter 1) — Graphing Data · For enrichment: Non-linear relationships p: 21-22"
  ],
  "Physical Science": [
   "Representing Motion (Chapter 2) — Picturing Motion",
   "Representing Motion (Chapter 2) — Where and When?",
   "Representing Motion (Chapter 2) — Position-Time Graphs",
   "Representing Motion (Chapter 2) — How Fast?",
   "Accelerated Motion (Chapter 3) — Acceleration",
   "Accelerated Motion (Chapter 3) — Motion with Constant Acceleration · Required: \"Velocity with Average Acceleration\" p: 69 For enrichment: remaining content of the lesson",
   "Accelerated Motion (Chapter 3) — Free-Fall · Required: “Galileo’s Discovery” p: 75 – “Free-Fall Acceleration” p: 76 (conceptual understanding for the case when an object is dropped and when it is thrown upward) For enrichment: remaining content of the lesson"
  ]
 },
 "2": {
  "Physical Science": [
   "Forces in One Dimension (Chapter 4) — Force and Motion",
   "Forces in One Dimension (Chapter 4) — Weight and Drag Force · For enrichment:\"Drag force\" p: 104-105",
   "Forces in One Dimension (Chapter 4) — Newton's Third Law",
   "Displacement and Force in Two Dimensions (Chapter 5) — Vectors · For enrichment",
   "Displacement and Force in Two Dimensions (Chapter 5) — Friction",
   "Displacement and Force in Two Dimensions (Chapter 5) — Forces in Two Dimensions · For enrichment"
  ]
 },
 "3": {
  "Physical Science": [
   "Work, Energy, and Machines (Chapter 6) — Work and Energy · Stick to one dimension only - don’t involve trigonometry and vector projection - Calculation of work is required only for the cases when force is in the same direction of motion, opposite to the direction of motion, or perpendicular to the direction of motion.",
   "Work, Energy, and Machines (Chapter 6) — Machines · For enrichment",
   "Vibrations and Waves (Chapter 7) — Periodic Motion · Required: Definitions of periodic motion, period, and amplitude only - p:234. For enrichment: remaining content of the lesson.",
   "Vibrations and Waves (Chapter 7) — Wave Properties",
   "Vibrations and Waves (Chapter 7) — Wave Behavior · For enrichment",
   "Solids, Liquids, and Gases (Chapter 8) — Matter and Thermal Energy",
   "Solids, Liquids, and Gases (Chapter 8) — Properties of Fluids",
   "Solids, Liquids, and Gases (Chapter 8) — Behavior of Gases",
   "Matter - Properties and change (Chapter 9) — Properties of Matter",
   "Matter - Properties and change (Chapter 9) — Changes in Matter",
   "Matter - Properties and change (Chapter 9) — Elements and compounds · Required: - Law of Definite Proportion with calculation. - Law of Multiple Proportion just conceptual (without calculation and without comparing the ratio of Mass between the different compounds).",
   "Matter - Properties and change (Chapter 9) — Mixture and Matter · For enrichment: Separating Mixtures"
  ]
 }
};
  var PSTR=["Measurement & Units","Motion & Forces","Waves & Sound","Light & Optics","Matter & Thermal Energy"];
  var SSTR=["Life Science","Physical Science","Earth & Space Science","Scientific Inquiry & Technology"];
  CURRICULUM["9G"]=CURRICULUM["9G"]||{};
  ["1","2","3"].forEach(function(t){
    CURRICULUM["9G"][t]=CURRICULUM["9G"][t]||{};
    var p={}, s={};
    PSTR.forEach(function(k){ if(PHYS[t][k]||k!=="Matter & Thermal Energy") p[k]=PHYS[t][k]||[]; });
    SSTR.forEach(function(k){ s[k]=SCI[t][k]||[]; });
    CURRICULUM["9G"][t]["Physics"]=p;
    CURRICULUM["9G"][t]["Science"]=s;
  });
})();
