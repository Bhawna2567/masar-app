/* Adeptly — High-school Maths question pools (Advanced stream), aligned to the MOE curriculum.
   These OVERRIDE the parametric generator for grades that have a pool, so diagnostics reflect
   the real grade content. A class is diagnosed on the PREVIOUS grade:
     Grade 10A class -> tests "9A"  (linear equations, functions, inequalities, slope, sequences)
     Grade 11A class -> tests "10A" (polynomials, factoring, quadratics, similarity, right-triangle trig)
     Grade 12A class -> tests "11A" (exponentials, logarithms, rational functions, trig functions, series, statistics)
   Skills use the four Maths strands: "Number & Operations","Algebra","Geometry","Data & Probability".
   Each item: {skill, level(F/C/H), sub, q, options[4], answer(index)}. */
if (typeof QUESTION_POOL === "undefined") { var QUESTION_POOL = {}; }
(function(){
  function put(grade, list){ QUESTION_POOL[grade]=QUESTION_POOL[grade]||{}; QUESTION_POOL[grade]["Math"]=list; }

  /* ---------------- Grade 9 Advanced (for a Grade 10A class) ---------------- */
  put("9A", [
   {skill:"Algebra",level:"F",sub:"One/two-step equations",q:"Solve: 2x + 5 = 13.",options:["9","4","6","3"],answer:1},
   {skill:"Algebra",level:"F",sub:"Slope",q:"What is the slope of the line y = 3x + 2?",options:["2","3","-3","1/3"],answer:1},
   {skill:"Algebra",level:"F",sub:"One-step equations",q:"Solve: x - 7 = 10.",options:["3","17","-3","70"],answer:1},
   {skill:"Algebra",level:"F",sub:"Arithmetic sequences",q:"In the sequence 2, 5, 8, 11, ..., the common difference is:",options:["2","3","5","-3"],answer:1},
   {skill:"Geometry",level:"F",sub:"Distance",q:"What is the distance between (0, 0) and (3, 4)?",options:["7","5","6","12"],answer:1},
   {skill:"Number & Operations",level:"F",sub:"Absolute value",q:"Evaluate |-8|.",options:["-8","8","0","16"],answer:1},
   {skill:"Algebra",level:"F",sub:"Solving equations",q:"Solve: 3x = 21.",options:["7","18","24","3"],answer:0},
   {skill:"Algebra",level:"F",sub:"Slope-intercept form",q:"A line has slope 2 and y-intercept 5. Its equation is:",options:["y = 2x + 5","y = 5x + 2","y = 2x - 5","y = 7x"],answer:0},
   {skill:"Geometry",level:"F",sub:"Angles",q:"Two angles are complementary. One is 35°. The other is:",options:["145°","55°","65°","35°"],answer:1},
   {skill:"Number & Operations",level:"F",sub:"Order of operations",q:"Evaluate 3 + 4 × 2.",options:["14","11","10","24"],answer:1},
   {skill:"Algebra",level:"C",sub:"Variable on both sides",q:"Solve: 4x - 3 = 2x + 9.",options:["3","6","12","-6"],answer:1},
   {skill:"Algebra",level:"C",sub:"Inequalities",q:"Solve the inequality: x + 4 > 9.",options:["x > 5","x > 13","x < 5","x > 4"],answer:0},
   {skill:"Algebra",level:"C",sub:"Arithmetic sequences",q:"What is the 6th term of the sequence 3, 7, 11, 15, ...?",options:["23","24","21","27"],answer:0},
   {skill:"Algebra",level:"C",sub:"Two-step equations",q:"Solve: 2(x + 3) = 16.",options:["5","8","11","6"],answer:0},
   {skill:"Geometry",level:"C",sub:"Angles",q:"Two angles are supplementary. One is 110°. The other is:",options:["70°","80°","90°","110°"],answer:0},
   {skill:"Data & Probability",level:"C",sub:"Mean",q:"What is the mean of 4, 8, 10, 6, 12?",options:["8","9","10","7"],answer:0},
   {skill:"Algebra",level:"H",sub:"Systems of equations",q:"Solve the system x + y = 10 and x - y = 2. What is x?",options:["6","4","8","5"],answer:0},
   {skill:"Algebra",level:"H",sub:"Absolute value equations",q:"Solve |x| = 7 (give the positive value).",options:["7","-7","14","0"],answer:0},
   {skill:"Algebra",level:"H",sub:"Slope from points",q:"Find the slope of the line through (1, 2) and (4, 11).",options:["3","2","9","1/3"],answer:0},
   {skill:"Geometry",level:"H",sub:"Coordinate geometry",q:"What is the midpoint of (2, 3) and (8, 7)?",options:["(5, 5)","(6, 4)","(10, 10)","(4, 5)"],answer:0}
  ]);

  /* ---------------- Grade 10 Advanced (for a Grade 11A class) ---------------- */
  put("10A", [
   {skill:"Algebra",level:"F",sub:"Adding polynomials",q:"Simplify: (2x + 3) + (x - 5).",options:["3x - 2","3x + 8","2x - 2","x - 2"],answer:0},
   {skill:"Algebra",level:"F",sub:"Multiplying polynomials",q:"Expand: 2x(x + 3).",options:["2x² + 6x","2x² + 3","2x + 6","x² + 6x"],answer:0},
   {skill:"Geometry",level:"F",sub:"Angles of polygons",q:"The sum of the interior angles of a quadrilateral is:",options:["360°","180°","540°","270°"],answer:0},
   {skill:"Geometry",level:"F",sub:"Pythagorean theorem",q:"A right triangle has legs 6 and 8. The hypotenuse is:",options:["10","12","14","48"],answer:0},
   {skill:"Algebra",level:"F",sub:"Factoring trinomials",q:"Factor: x² + 5x + 6.",options:["(x + 2)(x + 3)","(x + 1)(x + 6)","(x + 2)(x + 4)","(x - 2)(x - 3)"],answer:0},
   {skill:"Geometry",level:"F",sub:"Similar triangles",q:"Two triangles with equal corresponding angles are always:",options:["similar","congruent","right-angled","isosceles"],answer:0},
   {skill:"Number & Operations",level:"F",sub:"Roots",q:"Simplify √49.",options:["7","9","24.5","14"],answer:0},
   {skill:"Algebra",level:"F",sub:"Degree of a polynomial",q:"What is the degree of 3x³ + 2x - 1?",options:["3","2","1","6"],answer:0},
   {skill:"Number & Operations",level:"F",sub:"Index laws",q:"Simplify x · x².",options:["x³","x²","x","2x²"],answer:0},
   {skill:"Geometry",level:"F",sub:"Parallelograms",q:"In a parallelogram, opposite sides are:",options:["equal and parallel","perpendicular","never equal","always vertical"],answer:0},
   {skill:"Algebra",level:"C",sub:"Multiplying binomials",q:"Expand: (x + 4)(x - 2).",options:["x² + 2x - 8","x² - 2x - 8","x² + 6x - 8","x² + 2x + 8"],answer:0},
   {skill:"Algebra",level:"C",sub:"Difference of squares",q:"Factor: x² - 16.",options:["(x - 4)(x + 4)","(x - 4)²","(x - 8)(x + 2)","(x - 16)(x + 1)"],answer:0},
   {skill:"Geometry",level:"C",sub:"Trigonometry",q:"In a right triangle, sin θ equals opposite divided by:",options:["hypotenuse","adjacent","opposite","perimeter"],answer:0},
   {skill:"Geometry",level:"C",sub:"Special right triangles",q:"In a 45°-45°-90° triangle with legs of length 1, the hypotenuse is:",options:["√2","2","1","√3"],answer:0},
   {skill:"Algebra",level:"C",sub:"Solving quadratics",q:"Solve x² = 25 (give the positive value).",options:["5","25","10","±5"],answer:0},
   {skill:"Data & Probability",level:"C",sub:"Probability",q:"A fair die is rolled. What is the probability of an even number?",options:["1/2","1/3","1/6","2/3"],answer:0},
   {skill:"Algebra",level:"H",sub:"Factoring",q:"Factor: 2x² + 7x + 3.",options:["(2x + 1)(x + 3)","(2x + 3)(x + 1)","(2x - 1)(x - 3)","(x + 7)(x + 3)"],answer:0},
   {skill:"Geometry",level:"H",sub:"Similarity ratios",q:"Two similar triangles have side ratio 2 : 3. The ratio of their areas is:",options:["4 : 9","2 : 3","6 : 9","8 : 27"],answer:0},
   {skill:"Geometry",level:"H",sub:"Special right triangles",q:"In a 30°-60°-90° triangle, the side opposite 30° is 5. The hypotenuse is:",options:["10","5√3","15","5√2"],answer:0},
   {skill:"Algebra",level:"H",sub:"Quadratic equations",q:"Solve x² - 5x + 6 = 0. The smaller root is:",options:["2","3","6","1"],answer:0}
  ]);

  /* ---------------- Grade 11 Advanced (for a Grade 12A class) ---------------- */
  put("11A", [
   {skill:"Algebra",level:"F",sub:"Logarithms",q:"What is log₂ 8?",options:["2","3","4","8"],answer:1},
   {skill:"Algebra",level:"F",sub:"Exponents",q:"What is the value of 5⁰?",options:["0","1","5","25"],answer:1},
   {skill:"Number & Operations",level:"F",sub:"Rational exponents",q:"Evaluate 16^(1/2).",options:["4","8","2","32"],answer:0},
   {skill:"Algebra",level:"F",sub:"Logarithms",q:"What is log₁₀ 1000?",options:["2","3","4","1"],answer:1},
   {skill:"Algebra",level:"F",sub:"Index laws",q:"Simplify x⁵ · x³.",options:["x⁸","x¹⁵","x²","x¹⁶"],answer:0},
   {skill:"Geometry",level:"F",sub:"Radian measure",q:"Convert 180° to radians.",options:["π","π/2","2π","π/3"],answer:0},
   {skill:"Geometry",level:"F",sub:"Trigonometric values",q:"What is cos 0°?",options:["1","0","0.5","-1"],answer:0},
   {skill:"Data & Probability",level:"F",sub:"Normal distribution",q:"In a normal distribution, the mean, median and mode are:",options:["all equal","all different","the mean is largest","the mode is largest"],answer:0},
   {skill:"Algebra",level:"F",sub:"Geometric sequences",q:"In the geometric sequence 3, 6, 12, 24, ..., the common ratio is:",options:["2","3","6","4"],answer:0},
   {skill:"Number & Operations",level:"F",sub:"Rational exponents",q:"Evaluate 27^(1/3).",options:["3","9","6","27"],answer:0},
   {skill:"Data & Probability",level:"F",sub:"Sampling",q:"A sample in which every member of the population has an equal chance of selection is a:",options:["random sample","biased sample","convenience sample","quota sample"],answer:0},
   {skill:"Algebra",level:"C",sub:"Logarithms",q:"What is log₃ 81?",options:["3","4","9","27"],answer:1},
   {skill:"Algebra",level:"C",sub:"Exponential equations",q:"Solve 2ˣ = 32.",options:["4","5","6","16"],answer:1},
   {skill:"Algebra",level:"C",sub:"Rational expressions",q:"Simplify (x² - 9)/(x - 3), for x ≠ 3.",options:["x + 3","x - 3","x + 9","x - 9"],answer:0},
   {skill:"Algebra",level:"C",sub:"Properties of logarithms",q:"Evaluate log₁₀ 2 + log₁₀ 5.",options:["1","2","10","0"],answer:0},
   {skill:"Geometry",level:"C",sub:"Trigonometric values",q:"What is tan 45°?",options:["1","0","0.5","√3"],answer:0},
   {skill:"Geometry",level:"C",sub:"Radian measure",q:"Convert 90° to radians.",options:["π/2","π","π/4","2π"],answer:0},
   {skill:"Data & Probability",level:"C",sub:"Normal distribution",q:"About what percentage of data lies within 1 standard deviation of the mean?",options:["68%","95%","50%","99%"],answer:0},
   {skill:"Algebra",level:"H",sub:"Exponential equations",q:"Solve 3ˣ = 1/9.",options:["-2","2","-3","9"],answer:0},
   {skill:"Algebra",level:"H",sub:"Logarithmic equations",q:"Solve log₂ x = 5.",options:["32","25","10","16"],answer:0},
   {skill:"Algebra",level:"H",sub:"Infinite geometric series",q:"Find the sum to infinity of 8 + 4 + 2 + 1 + ...",options:["16","15","20","32"],answer:0},
   {skill:"Number & Operations",level:"H",sub:"Rational exponents",q:"Evaluate 8^(2/3).",options:["4","6","16","2"],answer:0}
  ]);
})();
