/* Adeptly — Chemistry curriculum (Grades 9-12), from the official MOE scope & sequence.
   Merges into CURRICULUM[grade][term]["Chemistry"][strand] = [outcomes].
   Strands: Matter & Atomic Structure, Bonding & Compounds, Reactions & Stoichiometry,
            States, Solutions & Organic.
   Embedded for both Advanced (A) and General (G) streams of each grade. Load AFTER curriculum.js. */
if (typeof CURRICULUM === "undefined") { var CURRICULUM = {}; }
(function(){
  var STR=["Matter & Atomic Structure","Bonding & Compounds","Reactions & Stoichiometry","States, Solutions & Organic"];
  function add(gradeNum, byTerm){
    ["A","G"].forEach(function(stream){
      var grade=gradeNum+stream;
      CURRICULUM[grade]=CURRICULUM[grade]||{};
      for(var t in byTerm){
        CURRICULUM[grade][t]=CURRICULUM[grade][t]||{};
        var base={}; STR.forEach(function(s){ base[s]=[]; });
        CURRICULUM[grade][t]["Chemistry"]=Object.assign(base, byTerm[t]);
      }
    });
  }

  /* Grade 9 */
  add("9", {
    "1":{ "Matter & Atomic Structure":[
            "The Central Science — what is chemistry; measurement; uncertainty in data; representing data.",
            "Matter: Properties and Change — properties of matter; changes in matter; elements and compounds; mixtures.",
            "The Structure of the Atom — early ideas about matter; defining the atom; how atoms differ; unstable nuclei and radioactive decay.",
            "Electrons in Atoms — light and quantum energy; quantum theory and atoms; electron configuration."] },
    "2":{ "Reactions & Stoichiometry":["Radioactivity and Nuclear Reactions — the nucleus; nuclear decays and reactions; radiation technologies and applications."],
          "States, Solutions & Organic":["Solids, Liquids and Gases — matter and thermal energy; properties of fluids; behavior of gases."] },
    "3":{ "States, Solutions & Organic":["Gases — the gas laws and the behavior of gases."] }
  });

  /* Grade 10 */
  add("10", {
    "1":{ "Matter & Atomic Structure":["Electrons in Atoms — light and quantum energy; quantum theory; electron configuration.","The Periodic Table and Periodic Law — development of the modern periodic table; classification of the elements; periodic trends."],
          "Bonding & Compounds":["Ionic Compounds and Metals — ion formation; ionic bonds and compounds; names and formulas; metallic bonds and the properties of metals.","Covalent Bonding — the covalent bond; naming molecules; molecular structures and shapes; electronegativity and polarity."] },
    "2":{ "Reactions & Stoichiometry":["Chemical Reactions — reactions and equations; classifying reactions; reactions in aqueous solutions.","The Mole — measuring matter; mass and the mole; moles of compounds; empirical and molecular formulas.","Stoichiometry — defining stoichiometry; stoichiometric calculations; limiting reactants; percent yield."] },
    "3":{ "States, Solutions & Organic":["States of Matter — gases; forces of attraction; liquids and solids; phase changes.","Gases — the gas laws; the ideal gas law; gas stoichiometry.","Mixtures and Solutions — types of mixtures; solution concentration; factors affecting solvation; colligative properties.","Nuclear Chemistry — nuclear radiation; radioactive decay; nuclear reactions and their applications."] }
  });

  /* Grade 11 */
  add("11", {
    "1":{ "Matter & Atomic Structure":["The Periodic Table and Periodic Law — development of the modern periodic table; classification of the elements; periodic trends."],
          "Bonding & Compounds":["Ionic Compounds and Metals — ion formation; ionic bonds and compounds; naming ionic compounds; metallic bonds.","Covalent Bonding — the covalent bond; naming molecules; molecular structures and shapes; electronegativity and polarity."] },
    "2":{ "Reactions & Stoichiometry":["Chemical Reactions — reactions and equations; classifying reactions; reactions in aqueous solutions.","The Mole — measuring matter; mass and the mole; moles of compounds; empirical and molecular formulas."] },
    "3":{ "Reactions & Stoichiometry":["Stoichiometry — defining stoichiometry; stoichiometric calculations; limiting reactants; percent yield."],
          "States, Solutions & Organic":["Mixtures and Solutions — types of mixtures; solution concentration; factors affecting solvation; colligative properties."] }
  });

  /* Grade 12 */
  add("12", {
    "1":{ "Reactions & Stoichiometry":["Energy and Chemical Change — energy; heat; thermochemical equations; enthalpy change; reaction spontaneity.","Reaction Rates — a model for reaction rates; factors affecting rates; rate laws; reaction mechanisms.","Chemical Equilibrium — a state of dynamic balance; factors affecting equilibrium; using equilibrium constants.","Redox Reactions and Electrochemistry — oxidation and reduction; balancing redox equations; voltaic cells; batteries; electrolysis."],
          "States, Solutions & Organic":["Organic Compounds — simple organic compounds; substituted hydrocarbons; petroleum; biological compounds."] },
    "2":{ "Reactions & Stoichiometry":["Acids and Bases — introduction to acids and bases; strengths; hydrogen ions and pH; neutralization.","Redox Reactions and Electrochemistry — oxidation and reduction; balancing redox equations; voltaic cells; electrolysis."],
          "States, Solutions & Organic":["Hydrocarbons — introduction to hydrocarbons; alkanes; alkenes and alkynes; isomers; aromatic hydrocarbons.","Substituted Hydrocarbons — alkyl and aryl halides; alcohols, ethers and amines; carbonyl compounds; polymers."] },
    "3":{ "States, Solutions & Organic":["The Chemistry of Life — proteins; carbohydrates; lipids; nucleic acids; metabolism.","Nuclear Chemistry — nuclear radiation; radioactive decay; nuclear reactions; applications and effects."] }
  });
})();
