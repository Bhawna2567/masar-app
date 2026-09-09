/* Adeptly — Physics curriculum (Advanced stream), MOE Term-1 2026-27 (current year).
   Merges into CURRICULUM[grade]["1"]["Physics"][strand] = [outcomes].
   Keyed by the four physics strands (same pattern as Math), so BOTH the Curriculum
   Browser AND the Gap Analysis (which looks up outcomes per skill) work like English/Math.
   The unit/module each outcome belongs to is named in the text so nothing is lost.
   Load AFTER curriculum.js. Term 1 only for now. */
if (typeof CURRICULUM === "undefined") { var CURRICULUM = {}; }
(function(){
  function add(grade, physics){
    CURRICULUM[grade]=CURRICULUM[grade]||{};
    CURRICULUM[grade]["1"]=CURRICULUM[grade]["1"]||{};
    // keep all four strands present (empty arrays render as "—") so the Gap Analysis cards line up
    CURRICULUM[grade]["1"]["Physics"]=Object.assign(
      {"Measurement & Units":[],"Motion & Forces":[],"Waves & Sound":[],"Light & Optics":[]},
      physics);
  }

  /* Grade 9 Advanced — Unit: Mechanics in One Dimension */
  add("9A", {
    "Measurement & Units":[
      "A Physics Toolkit — Methods of Science: describe physics and the scientific method and use physical models.",
      "A Physics Toolkit — Mathematics and Physics: classify base and derived quantities with SI units; check equations are dimensionally correct.",
      "A Physics Toolkit — Measurement: measure with suitable tools, use significant figures, and distinguish precision from accuracy.",
      "A Physics Toolkit — Graphing Data: plot data and interpret the relationship between variables."
    ],
    "Motion & Forces":[
      "Representing Motion — Picturing Motion / Where and When: use motion diagrams; describe position, distance and displacement; distinguish scalars and vectors.",
      "Representing Motion — Position–Time Graphs / How Fast?: interpret position–time graphs and calculate speed and velocity.",
      "Accelerated Motion — Acceleration: define acceleration and interpret velocity–time graphs.",
      "Accelerated Motion — Constant Acceleration / Free Fall: use the equations of motion and describe free fall (g ≈ 9.8 m/s²)."
    ]
  });

  /* Grade 10 Advanced — Unit: Waves and Light */
  add("10A", {
    "Light & Optics":[
      "Reflection and Refraction — Reflection of Light: state and apply the laws of reflection; distinguish specular and diffuse reflection.",
      "Reflection and Refraction — Curved Mirrors: use ray diagrams and the mirror and magnification equations.",
      "Reflection and Refraction — Refraction of Light: apply Snell's law; explain the critical angle and total internal reflection.",
      "Reflection and Refraction — Convex and Concave Lenses: form and describe images using lenses.",
      "Interference and Diffraction — Interference / Diffraction: explain interference and diffraction of light as evidence of its wave nature."
    ]
  });

  /* Grade 11 Advanced — Units: Mechanics in Two Dimensions, Momentum and Energy */
  add("11A", {
    "Motion & Forces":[
      "Rotational Motion — Describing Rotational Motion: use angular displacement, angular velocity and angular acceleration.",
      "Rotational Motion — Rotational Dynamics: relate torque, moment of inertia and angular acceleration.",
      "Rotational Motion — Equilibrium: apply the conditions for translational and rotational equilibrium.",
      "Momentum and Its Conservation — Impulse and Momentum: apply the impulse–momentum theorem.",
      "Momentum and Its Conservation — Conservation of Momentum: analyse collisions and explosions using conservation of momentum."
    ]
  });

  /* Grade 12 General — Physics: Electricity & Magnetism (Terms 1-3).
     Keeps the four base strands present (empty → "—") for card alignment,
     and adds an "Electricity & Magnetism" strand carrying the General-stream units. */
  function addTerm(grade, term, physics){
    CURRICULUM[grade]=CURRICULUM[grade]||{};
    CURRICULUM[grade][term]=CURRICULUM[grade][term]||{};
    CURRICULUM[grade][term]["Physics"]=Object.assign(
      {"Measurement & Units":[],"Motion & Forces":[],"Waves & Sound":[],"Light & Optics":[],"Electricity & Magnetism":[]},
      physics);
  }
  addTerm("12G","1",{ "Electricity & Magnetism":[
    "Static Electricity — Electric Charge: describe charging by friction, conduction and induction; electric forces between charges.",
    "Static Electricity — Electric Fields: describe the electric field around a charge and represent it with field lines; electric potential."
  ]});
  addTerm("12G","2",{ "Electricity & Magnetism":[
    "Current and Circuits — Current and Resistance: define electric current, potential difference and resistance; apply Ohm's law.",
    "Current and Circuits — Electrical Energy and Power: calculate electrical energy and power in circuits."
  ]});
  addTerm("12G","3",{ "Electricity & Magnetism":[
    "Simple Circuits — Series and Parallel: analyse series and parallel resistor circuits.",
    "Applications of Circuits — Household Circuits and Safety: describe practical circuits, fuses and safety devices.",
    "Understanding Magnetism — Magnets and Magnetic Fields: describe magnetic fields and the field around a current-carrying conductor.",
    "Applying Magnetic Forces — Forces and Motors: describe the force on a current in a magnetic field and its use in motors; electromagnetic induction."
  ]});

  /* Grade 12 Advanced — Units: Momentum and Energy, Subatomic Physics */
  add("12A", {
    "Motion & Forces":[
      "Energy and Its Conservation — Work and Energy: define work and kinetic energy and apply the work–energy theorem.",
      "Energy and Its Conservation — The Many Forms of Energy: describe kinetic, gravitational and elastic potential energy.",
      "Energy and Its Conservation — Conservation of Energy: apply conservation of energy to mechanical systems.",
      "Energy and Its Conservation — Machines: analyse simple machines, mechanical advantage and efficiency."
    ],
    "Waves & Sound":[
      "Quantum Theory and The Atom — A Particle Model of Waves: describe the photoelectric effect and photons (E = hf).",
      "Quantum Theory and The Atom — Matter Waves: describe the wave nature of particles (de Broglie wavelength).",
      "Quantum Theory and The Atom — Bohr's Model of the Atom: explain energy levels and atomic spectra.",
      "Quantum Theory and The Atom — The Quantum Model of the Atom: outline the quantum-mechanical model of the atom."
    ]
  });
})();
