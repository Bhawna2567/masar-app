/* Adeptly — Chemistry curriculum (Grades 9-12), from the official MOE scope & sequence.
   Stream-specific where the ministry differentiates Advanced (A) and General (G).
   Merges into CURRICULUM[grade][term]["Chemistry"][strand] = [outcomes].
   Strands: Matter & Atomic Structure, Bonding & Compounds, Reactions & Stoichiometry,
            States, Solutions & Organic.  Load AFTER curriculum.js. */
if (typeof CURRICULUM === "undefined") { var CURRICULUM = {}; }
(function(){
  var STR=["Matter & Atomic Structure","Bonding & Compounds","Reactions & Stoichiometry","States, Solutions & Organic"];
  function addKey(grade, byTerm){
    CURRICULUM[grade]=CURRICULUM[grade]||{};
    for(var t in byTerm){
      CURRICULUM[grade][t]=CURRICULUM[grade][t]||{};
      var base={}; STR.forEach(function(s){ base[s]=[]; });
      CURRICULUM[grade][t]["Chemistry"]=Object.assign(base, byTerm[t]);
    }
  }
  function addBoth(num, byTerm){ addKey(num+"A", byTerm); addKey(num+"G", byTerm); }

  /* ---- Grade 9 (both streams) ---- */
  addBoth("9", {
    "1":{ "Matter & Atomic Structure":[
            "The Central Science — what is chemistry; measurement; uncertainty in data; representing data.",
            "Matter: Properties and Change — properties of matter; changes in matter; elements and compounds; mixtures.",
            "The Structure of the Atom — early ideas about matter; defining the atom; how atoms differ; unstable nuclei and radioactive decay.",
            "Electrons in Atoms — light and quantum energy; quantum theory and atoms; electron configuration."] },
    "2":{ "Reactions & Stoichiometry":["Radioactivity and Nuclear Reactions — the nucleus; nuclear decays and reactions; radiation technologies and applications."],
          "States, Solutions & Organic":["Solids, Liquids and Gases — matter and thermal energy; properties of fluids; behavior of gases."] },
    "3":{ "States, Solutions & Organic":["Gases — the gas laws and the behavior of gases."] }
  });

  /* ---- Grade 10 Advanced ---- */
  addKey("10A", {
    "1":{ "Matter & Atomic Structure":["Electrons in Atoms — light and quantum energy; quantum theory and atoms; electron configuration.","The Periodic Table and Periodic Law — development of the modern periodic table; classification of the elements; periodic trends."],
          "Bonding & Compounds":["Ionic Compounds and Metals — ion formation; ionic bonds and compounds; names and formulas for ionic compounds; metallic bonds and the properties of metals.","Covalent Bonding — the covalent bond; naming molecules; molecular structures and shapes; electronegativity and polarity."] },
    "2":{ "Reactions & Stoichiometry":["Chemical Reactions — reactions and equations; classifying reactions; reactions in aqueous solutions.","The Mole — measuring matter; mass and the mole; moles of compounds; empirical and molecular formulas; formulas of hydrates."] },
    "3":{ "Reactions & Stoichiometry":["Stoichiometry — defining stoichiometry; stoichiometric calculations; limiting reactants; percent yield."],
          "States, Solutions & Organic":["States of Matter — gases; forces of attraction; liquids and solids; phase changes.","Gases — the gas laws; the ideal gas law; gas stoichiometry.","Mixtures and Solutions — types of mixtures; solution concentration; factors affecting solvation; colligative properties.","Nuclear Chemistry — nuclear radiation; radioactive decay; nuclear reactions; applications and effects."] }
  });
  /* Grade 10 General — no separate chemistry file; mirrors the Advanced sequence at a General level */
  addKey("10G", {
    "1":{ "Matter & Atomic Structure":["Electrons in Atoms — light and quantum energy; quantum theory; electron configuration.","The Periodic Table and Periodic Law — development of the modern periodic table; classification of the elements; periodic trends."],
          "Bonding & Compounds":["Ionic Compounds and Metals — ion formation; ionic bonds and compounds.","Covalent Bonding — the covalent bond; naming molecules; molecular shapes; electronegativity and polarity."] },
    "2":{ "Reactions & Stoichiometry":["Chemical Reactions — reactions and equations; classifying reactions; reactions in aqueous solutions.","The Mole — measuring matter; mass and the mole; moles of compounds."] },
    "3":{ "Reactions & Stoichiometry":["Stoichiometry — defining stoichiometry; stoichiometric calculations; limiting reactants."] }
  });

  /* ---- Grade 11 Advanced (Elective Scenario 1) ---- */
  addKey("11A", {
    "1":{ "Reactions & Stoichiometry":["Energy and Chemical Change — energy; heat; thermochemical equations; calculating enthalpy change; reaction spontaneity.","Reaction Rates — a model for reaction rates; factors affecting reaction rates; reaction rate laws; reaction mechanisms.","Chemical Equilibrium — a state of dynamic balance; factors affecting equilibrium."] },
    "2":{ "Reactions & Stoichiometry":["Chemical Equilibrium — using equilibrium constants.","Acids and Bases — introduction to acids and bases; strengths of acids and bases; hydrogen ions and pH; neutralization.","Redox Reactions — oxidation and reduction; balancing redox equations."] },
    "3":{ "Reactions & Stoichiometry":["Electrochemistry — voltaic cells; batteries; electrolysis."],
          "States, Solutions & Organic":["Hydrocarbons — introduction to hydrocarbons; alkanes; alkenes and alkynes; isomers; aromatic hydrocarbons.","Substituted Hydrocarbons and Their Reactions — alkyl and aryl halides; alcohols, ethers and amines; carbonyl compounds; polymers."] }
  });

  /* ---- Grade 11 General (Elective Scenario 1) ---- */
  addKey("11G", {
    "1":{ "Matter & Atomic Structure":["Electrons in Atoms — light and quantum energy; quantum theory and atoms; electron configuration.","The Periodic Table and Periodic Law — development of the modern periodic table; classification of the elements; periodic trends."],
          "Bonding & Compounds":["Ionic Compounds and Metals — ion formation; ionic bonds and ionic compounds."] },
    "2":{ "Bonding & Compounds":["Ionic Compounds and Metals — names and formulas for ionic compounds; metallic bonds and the properties of metals.","Covalent Bonding — the covalent bond; naming molecules; molecular structures and shapes; electronegativity and polarity."] },
    "3":{ "Reactions & Stoichiometry":["Chemical Reactions — reactions and equations; classifying reactions; reactions in aqueous solutions."] }
  });

  /* ---- Grade 12 (both streams) ---- */
  addBoth("12", {
    "1":{ "Reactions & Stoichiometry":["Energy and Chemical Change — energy; heat; thermochemical equations; enthalpy change; reaction spontaneity.","Reaction Rates — a model for reaction rates; factors affecting rates; rate laws; reaction mechanisms.","Chemical Equilibrium — a state of dynamic balance; factors affecting equilibrium; using equilibrium constants.","Redox Reactions and Electrochemistry — oxidation and reduction; balancing redox equations; voltaic cells; batteries; electrolysis."],
          "States, Solutions & Organic":["Organic Compounds — simple organic compounds; substituted hydrocarbons; petroleum; biological compounds."] },
    "2":{ "Reactions & Stoichiometry":["Acids and Bases — introduction to acids and bases; strengths; hydrogen ions and pH; neutralization.","Redox Reactions and Electrochemistry — oxidation and reduction; balancing redox equations; voltaic cells; electrolysis."],
          "States, Solutions & Organic":["Hydrocarbons — introduction to hydrocarbons; alkanes; alkenes and alkynes; isomers; aromatic hydrocarbons.","Substituted Hydrocarbons — alkyl and aryl halides; alcohols, ethers and amines; carbonyl compounds; polymers."] },
    "3":{ "States, Solutions & Organic":["The Chemistry of Life — proteins; carbohydrates; lipids; nucleic acids; metabolism.","Nuclear Chemistry — nuclear radiation; radioactive decay; nuclear reactions; applications and effects."] }
  });
})();
