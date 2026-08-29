/* ============================================================
   O LEVEL HUB — SYLLABUS DATA
   All topics taken from official Cambridge syllabus documents.
   Exam year: 2027
   ============================================================ */

/* ------------------------------------------------------------
   LINK HELPERS
   We deliberately use *search* links instead of fixed URLs.
   Fixed links die: GCE Guide's domain expired and was taken over
   by a gambling site in 2026. A search link can never expire and
   always shows current results.
   ------------------------------------------------------------ */

/* Video lessons for a topic */
function yt(subject, code, topic) {
  return "https://www.youtube.com/results?search_query=" +
    encodeURIComponent("O Level " + subject + " " + code + " " + topic);
}

/* Notes for a topic */
function notesLink(subject, code, topic) {
  return "https://www.google.com/search?q=" +
    encodeURIComponent("O Level " + subject + " " + code + " " + topic + " notes");
}

/* Topical past-paper questions for a topic */
function topicalLink(subject, code, topic) {
  return "https://www.google.com/search?q=" +
    encodeURIComponent(subject + " " + code + " topical past papers " + topic);
}

/* Working past-paper archives, checked August 2026.
   NOTE: GCE Guide is deliberately NOT listed. Its domain expired and
   now redirects to a gambling site. Do not add it back. */
const ARCHIVES = [
  { name: "PapaCambridge", what: "Yearly AND topical past papers by syllabus code. Topical is what you want for single-topic practice.", url: "https://pastpapers.papacambridge.com/papers/caie/o-level", emoji: "📚" },
  { name: "PastPapers.co", what: "Clean, fast archive of question papers, mark schemes and examiner reports.", url: "https://pastpapers.co/cie/?dir=O-Level", emoji: "🗂️" },
  { name: "XtremePapers", what: "The oldest and most reliable mirror. Rarely goes down. Every session, every variant.", url: "https://papers.xtremepape.rs/index.php?dirpath=.%2FCAIE%2FO+Level%2F&order=0", emoji: "📄" },
  { name: "CaieFinder", what: "Type any phrase from a question and it finds the exact paper and its mark scheme. Brilliant for checking answers.", url: "https://caiefinder.com/", emoji: "🔎" },
  { name: "Dynamic Papers", what: "Another working mirror. Useful backup when others are slow.", url: "https://dynamicpapers.com/", emoji: "⚡" }
];

const SUBJECTS = [

/* ---------------------------------------------------------- MATHS D */
{
  id: "maths",
  qual: "O Level",
  sitting: 2029,
  name: "Mathematics D",
  code: "4024",
  emoji: "📐",
  colour: "#4F46E5",
  tint: "#EEF0FF",
  syllabusYears: "2025–2027",
  syllabusUrl: "https://www.cambridgeinternational.org/Images/662480-2025-2027-syllabus.pdf",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-mathematics-syllabus-d-4024/",
  oneLine: "The subject you get better at by solving, not by watching.",
  papers: [
    { name: "Paper 1", time: "2 hours", marks: "100 marks · 50%", what: "No calculator allowed. Short and structured questions." },
    { name: "Paper 2", time: "2 hours", marks: "100 marks · 50%", what: "Calculator allowed. Longer, structured questions." }
  ],
  book: { title: "The D1–D4 series is standard in Pakistani classrooms", author: "No single book is required by Cambridge. Check the edition with your teacher.", endorsed: false },
  howToStudy: [
    "Do questions every day. Even 20 minutes beats none.",
    "Redo worked examples with the book closed before starting the exercise.",
    "Keep one formula sheet. Add to it as you learn.",
    "Mark your own work the same day you do it."
  ],
  topics: [
    { t: "Number", subs: ["Types of number, sets and Venn diagrams", "Powers, roots and standard form", "Fractions, decimals and percentages", "Ratio, rate and proportion", "Rounding, estimation and limits of accuracy", "Money, interest and exponential growth"], tip: "This topic hides inside every other topic. If your basic number work is slow, everything else feels harder than it is." },
    { t: "Algebra and graphs", subs: ["Expressions, expanding and factorising", "Linear and quadratic equations", "Simultaneous equations", "Inequalities", "Sequences", "Graphs of functions and their properties", "Proportion and variation"], tip: "The biggest topic on both papers. Factorising quadratics must become automatic — practise until you stop thinking about it." },
    { t: "Coordinate geometry", subs: ["Gradient of a straight line", "Equation of a straight line, y = mx + c", "Parallel and perpendicular lines", "Length and midpoint of a line segment"], tip: "Small topic, easy marks. Learn the four formulas properly and you will not lose a single mark here." },
    { t: "Geometry", subs: ["Geometrical terms and shapes", "Angle properties of lines, triangles and polygons", "Circle theorems", "Symmetry", "Similarity and congruence", "Constructions and scale drawings"], tip: "Circle theorems are pure memory work. Draw each one on a card, then practise spotting them in questions." },
    { t: "Mensuration", subs: ["Perimeter and area of 2D shapes", "Circles, arcs and sectors", "Surface area and volume of solids", "Compound shapes and solids"], tip: "Marks are lost on units, not on method. Write the unit every single time — cm, cm², cm³." },
    { t: "Trigonometry", subs: ["Pythagoras' theorem", "Sine, cosine and tangent in right-angled triangles", "Sine rule and cosine rule", "Area of a triangle using ½ab sin C", "Bearings and 3D problems"], tip: "Always draw the triangle first. Most mistakes happen because students label the sides wrong before they even start." },
    { t: "Transformations and vectors", subs: ["Reflection, rotation, translation and enlargement", "Describing transformations fully", "Vector notation and vector arithmetic", "Magnitude of a vector"], tip: "To describe a transformation you must give every detail asked for — a rotation needs angle, direction and centre. Miss one and you lose the mark." },
    { t: "Probability", subs: ["Probability of single events", "Relative frequency", "Combined events, tree diagrams and Venn diagrams", "Probability without replacement"], tip: "Draw the tree diagram even when the question does not ask for one. It turns a confusing question into an easy one." },
    { t: "Statistics", subs: ["Collecting and displaying data", "Mean, median, mode and range", "Grouped data and estimated mean", "Bar charts, pie charts and histograms", "Cumulative frequency and box plots", "Scatter diagrams and correlation"], tip: "Reading graphs accurately is the skill being tested. Use a ruler on cumulative frequency curves — guessing loses marks." }
  ]
},

/* ---------------------------------------------------------- ADD MATHS */
{
  id: "addmaths",
  qual: "O Level",
  sitting: 0,
  notHers: true,
  name: "Additional Mathematics",
  code: "4037",
  emoji: "🧮",
  colour: "#7C3AED",
  tint: "#F3EEFF",
  syllabusYears: "Current",
  syllabusUrl: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-additional-mathematics-4037/",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-additional-mathematics-4037/",
  oneLine: "Only take this if your Maths D is genuinely strong. It assumes it.",
  papers: [
    { name: "Paper 1", time: "2 hours", marks: "80 marks · 50%", what: "Structured questions. Scientific calculator allowed." },
    { name: "Paper 2", time: "2 hours", marks: "80 marks · 50%", what: "Structured questions. Scientific calculator allowed." }
  ],
  book: { title: "New Additional Mathematics", author: "Ho Soo Thong & Khor Nyak Hiong (Marshall Cavendish) — also the Cambridge coursebook from CUP", endorsed: true },
  howToStudy: [
    "Master Maths D algebra first. This course does not slow down for you.",
    "Calculus is the biggest section — start it early, not in the last months.",
    "Every worked example should be redone closed-book before the exercise.",
    "Expect to be slow at first. That is normal and it passes."
  ],
  topics: [
    { t: "Functions", subs: ["Domain and range", "Composite functions", "Inverse functions", "Graphs of functions and inverses", "Modulus functions"], tip: "Get the notation exactly right. f⁻¹ and 1/f are completely different things and examiners test that." },
    { t: "Quadratic functions", subs: ["Completing the square", "Maximum and minimum values", "The discriminant and nature of roots", "Quadratic inequalities", "Roots and intersections"], tip: "The discriminant appears every session. Learn what b² − 4ac tells you in all three cases." },
    { t: "Equations, inequalities and graphs", subs: ["Solving equations with modulus", "Solving cubic equations", "Graphs of cubic polynomials", "Graphical solution of inequalities"], tip: "Sketching first often shows you the answer before you calculate anything." },
    { t: "Indices and surds", subs: ["Laws of indices", "Simplifying surds", "Rationalising the denominator"], tip: "Pure practice topic. Twenty minutes a week keeps it sharp." },
    { t: "Factors of polynomials", subs: ["Factor theorem", "Remainder theorem", "Solving cubic equations by factorising"], tip: "Always test the simple values first (±1, ±2). Examiners choose numbers that work nicely." },
    { t: "Simultaneous equations", subs: ["One linear and one non-linear equation", "Solving graphically and algebraically"], tip: "Substitute the linear into the non-linear, never the other way round." },
    { t: "Logarithmic and exponential functions", subs: ["Laws of logarithms", "Solving exponential equations", "Graphs of log and exponential functions", "Converting to linear form"], tip: "Reducing to linear form (y = mx + c) is a favourite exam question. Practise it specifically." },
    { t: "Straight line graphs", subs: ["Gradient, midpoint and length", "Parallel and perpendicular lines", "Perpendicular bisectors", "Areas of rectilinear figures"], tip: "Easy marks if you are careful. Draw a rough sketch before calculating." },
    { t: "Coordinate geometry of the circle", subs: ["Equation of a circle", "Centre and radius", "Intersections with lines"], tip: "Completing the square converts the expanded form back to centre-radius form. Practise both directions." },
    { t: "Circular measure", subs: ["Radians", "Arc length", "Area of a sector and segment"], tip: "Switch your calculator to radians and remember to switch back. This causes more lost marks than the maths does." },
    { t: "Trigonometry", subs: ["Trig ratios of any angle", "Graphs of sine, cosine and tangent", "Trigonometric identities", "Solving trigonometric equations"], tip: "Solving trig equations means finding ALL solutions in the given range, not just the first one." },
    { t: "Permutations and combinations", subs: ["Factorial notation", "Permutations (order matters)", "Combinations (order does not matter)", "Arrangement problems"], tip: "Ask one question first: does order matter? Get that right and the rest follows." },
    { t: "Series", subs: ["Binomial expansion", "Arithmetic progressions", "Geometric progressions", "Sum to infinity"], tip: "Learn which formula belongs to AP and which to GP. Mixing them up is the most common error here." },
    { t: "Vectors in two dimensions", subs: ["Vector notation and magnitude", "Addition and scalar multiples", "Position vectors", "Relative velocity"], tip: "Draw the diagram. Vector questions become obvious once you can see them." },
    { t: "Differentiation and integration", subs: ["Differentiation of standard functions", "Chain, product and quotient rules", "Tangents, normals and rates of change", "Stationary points, maxima and minima", "Integration as the reverse of differentiation", "Definite integrals and area under a curve", "Kinematics: displacement, velocity, acceleration"], tip: "The largest and most valuable section of the course. If you are short on time, this is where your hours should go." }
  ]
},

/* ---------------------------------------------------------- PHYSICS */
{
  id: "physics",
  qual: "O Level",
  sitting: 2029,
  name: "Physics",
  code: "5054",
  emoji: "⚛️",
  colour: "#0284C7",
  tint: "#E7F4FE",
  syllabusYears: "2026–2028",
  syllabusUrl: "https://www.cambridgeinternational.org/Images/697324-2026-2028-syllabus.pdf",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-physics-5054/",
  oneLine: "Understand the relationship, then the formula. Not the other way round.",
  papers: [
    { name: "Paper 1: Multiple Choice", time: "1 hour", marks: "40 marks · 30%", what: "40 four-option multiple choice questions." },
    { name: "Paper 2: Theory", time: "1 hour 45 minutes", marks: "80 marks · 50%", what: "Short answer and structured questions." },
    { name: "Paper 4: Alternative to Practical", time: "1 hour", marks: "40 marks · 20%", what: "The written practical paper — not the hands-on Paper 3. Tests experiment design, readings, graphs and conclusions on paper. Check which one your school enters you for." }
  ],
  book: { title: "Cambridge O Level Physics Coursebook", author: "Heather Kennett — Cambridge University Press", endorsed: true },
  howToStudy: [
    "Draw every diagram yourself from memory — circuits, ray diagrams, field lines.",
    "Do numerical questions with units written at every step.",
    "Learn definitions word-perfect. 'Almost right' earns zero.",
    "Practise the practical paper too — it is a full 20% of your grade."
  ],
  topics: [
    { t: "Motion, forces and energy", subs: ["Physical quantities and measurement techniques", "Motion: speed, velocity, acceleration and graphs", "Mass and weight", "Density", "Forces, friction, springs and circular motion", "Moments and centre of gravity", "Momentum and impulse", "Energy, work, power and efficiency", "Pressure"], tip: "The biggest topic in the course. Reading distance–time and speed–time graphs comes up almost every session — practise until it is instant." },
    { t: "Thermal physics", subs: ["Kinetic particle model of matter", "Gas pressure, volume and temperature", "Thermal expansion", "Specific heat capacity", "Melting, boiling and evaporation", "Conduction, convection and radiation"], tip: "Nearly every question here says 'explain'. That means talking about particles — their spacing, movement and energy." },
    { t: "Waves", subs: ["General properties of waves", "Reflection of light", "Refraction and total internal reflection", "Thin lenses and ray diagrams", "Dispersion of light", "The electromagnetic spectrum", "Sound and ultrasound"], tip: "Ray diagrams must be drawn with a ruler and arrows on the rays. The EM spectrum uses and dangers are pure memory — make cards." },
    { t: "Electricity and magnetism", subs: ["Magnetism and magnetic fields", "Electric charge and electric fields", "Current, e.m.f., potential difference and resistance", "Circuit diagrams and components", "Series and parallel circuits", "Potential dividers, thermistors and LDRs", "Practical electricity and safety", "Electromagnetic induction and the a.c. generator", "The d.c. motor and the transformer", "The oscilloscope"], tip: "The most calculation-heavy topic. Get series and parallel circuit rules completely solid before you touch induction — everything later depends on them." },
    { t: "Nuclear physics", subs: ["The nuclear model of the atom", "Nuclide notation and isotopes", "Detecting radioactivity and background radiation", "Alpha, beta and gamma radiation", "Radioactive decay equations", "Fission and fusion", "Half-life and its uses", "Radiation safety"], tip: "Half-life calculations and decay equations are the two things tested every single session. Drill both weekly." },
    { t: "Space physics", subs: ["The Earth and the Solar System", "Orbits and orbital speed", "The Sun as a star", "The life cycle of a star", "Galaxies, redshift and the Big Bang"], tip: "Mostly description and recall. Learn the star life-cycle sequence in order and the redshift explanation for the Big Bang." }
  ]
},

/* ---------------------------------------------------------- CHEMISTRY */
{
  id: "chemistry",
  qual: "O Level",
  sitting: 2029,
  name: "Chemistry",
  code: "5070",
  emoji: "🧪",
  colour: "#0D9488",
  tint: "#E3F7F5",
  syllabusYears: "2026–2028",
  syllabusUrl: "https://www.cambridgeinternational.org/Images/697326-2026-2028-syllabus.pdf",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-chemistry-5070/",
  oneLine: "Chemistry punishes vague answers. Be specific about particles.",
  papers: [
    { name: "Paper 1: Multiple Choice", time: "1 hour", marks: "40 marks", what: "40 multiple choice questions. Periodic Table provided." },
    { name: "Paper 2: Theory", time: "1 hour 30 minutes", marks: "75 marks", what: "Section A compulsory. Section B: answer 3 of 4 questions." },
    { name: "Paper 4: Alternative to Practical", time: "1 hour", marks: "Scaled to 30", what: "The written practical paper — not the hands-on Paper 3. Tests apparatus, observations, tables and graphs on paper. Check which one your school enters you for." }
  ],
  book: { title: "Cambridge O Level Chemistry", author: "Bryan Earl & Doug Wilford — Hodder Education", endorsed: true },
  howToStudy: [
    "Write chemical equations by hand. Reading them builds nothing.",
    "Keep a table of every test and its exact observed result.",
    "Do mole calculations daily, not just before a test.",
    "For 'explain' questions, always mention the particles involved."
  ],
  topics: [
    { t: "Experimental chemistry", subs: ["Experimental design and apparatus", "Purification: filtration, crystallisation, distillation", "Paper chromatography and Rf values", "Tests for cations (using NaOH and ammonia)", "Tests for anions", "Tests for gases"], tip: "The ion and gas tests are examined directly in the practical paper and indirectly everywhere else. Memorise every colour and every precipitate." },
    { t: "The particulate nature of matter", subs: ["Kinetic particle theory and diffusion", "Atomic structure, isotopes, protons and neutrons", "Elements, compounds and mixtures", "Ionic bonding and giant lattices", "Covalent bonding and dot-and-cross diagrams", "Metallic bonding"], tip: "Practise dot-and-cross diagrams from memory. Then practise linking structure to properties — that is the reasoning examiners want." },
    { t: "Formulae, stoichiometry and the mole", subs: ["Writing formulae and balanced equations", "Ionic equations and state symbols", "Relative atomic and molecular mass", "Empirical and molecular formulae", "Reacting masses and gas volumes", "Concentration and titration calculations", "Percentage yield and percentage purity"], tip: "The most calculation-heavy topic in the course. If moles are shaky, half the paper becomes impossible. Fix this first." },
    { t: "Electrolysis", subs: ["Electrolysis of molten compounds", "Electrolysis of aqueous solutions and selective discharge", "Electrode equations", "Extraction of aluminium", "Purification of copper and electroplating", "Simple cells"], tip: "Most marks lost here come from predicting the wrong product at an electrode. Learn the selective discharge rules cold." },
    { t: "Energy from chemicals", subs: ["Exothermic and endothermic reactions", "Energy profile diagrams and activation energy", "Bond breaking and bond making", "Fuels, hydrogen fuel cells and photosynthesis"], tip: "Bond breaking absorbs energy, bond making releases it. Write your explanation in full sentences — fragments lose marks." },
    { t: "Chemical reactions", subs: ["Rate of reaction and collision theory", "Catalysts and enzymes", "Redox in terms of oxygen and electrons", "Oxidising and reducing agent tests", "Reversible reactions and equilibrium"], tip: "A full collision-theory answer mentions both how often particles collide AND how much energy they have. Missing one costs you half the marks." },
    { t: "Acids, bases and salts", subs: ["Properties of acids and alkalis, the pH scale", "Strong and weak acids", "Neutralisation and soil pH", "Acidic, basic and amphoteric oxides", "Preparing soluble and insoluble salts", "Solubility rules", "Ammonia and the Haber process", "Sulfuric acid and the Contact process"], tip: "Match the right salt-preparation method to the solubility case — precipitation, titration, or acid plus excess solid. This is a classic multi-mark question." },
    { t: "The Periodic Table", subs: ["Arrangement by proton number", "Trends across periods and down groups", "Group I: the alkali metals", "Group VII: the halogens", "Group VIII: the noble gases", "Transition elements"], tip: "Build one comparison table of Group I versus Group VII. It answers most questions on this whole topic." },
    { t: "Metals", subs: ["Physical properties of metals and alloys", "The reactivity series", "Extraction of metals from ores", "Iron, steel and the blast furnace", "Rusting and its prevention", "Aluminium and its uses", "Recycling metals"], tip: "Link the extraction method directly to the metal's position in the reactivity series. Examiners test that connection constantly." },
    { t: "Atmosphere and environment", subs: ["Composition of clean dry air", "Air pollutants and their sources", "Acid rain, catalytic converters", "The ozone layer and CFCs", "The carbon cycle and greenhouse gases", "Water pollution and water treatment"], tip: "Almost all recall. Make one table: pollutant → source → harmful effect → solution. Revise it as a whole." },
    { t: "Organic chemistry", subs: ["Homologous series and isomerism", "Alkanes", "Alkenes and cracking", "Alcohols and fermentation", "Carboxylic acids and esters", "Addition polymers", "Condensation polymers: nylon and Terylene", "Natural polymers: proteins, carbohydrates, fats"], tip: "Draw structural formulae from memory for every family. Naming and isomer questions become free marks once you can do this." }
  ]
},

/* ---------------------------------------------------------- BIOLOGY */
{
  id: "biology",
  qual: "O Level",
  sitting: 0,
  notHers: true,
  name: "Biology",
  code: "5090",
  emoji: "🧬",
  colour: "#16A34A",
  tint: "#E8F7EC",
  syllabusYears: "2026–2028",
  syllabusUrl: "https://www.cambridgeinternational.org/Images/697330-2026-2028-syllabus.pdf",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-biology-5090/",
  oneLine: "Lots of content — but precise words matter more than long answers.",
  papers: [
    { name: "Paper 1: Multiple Choice", time: "1 hour", marks: "40 marks · 30%", what: "40 four-option multiple choice questions." },
    { name: "Paper 2: Theory", time: "1 hour 45 minutes", marks: "80 marks · 50%", what: "Short answer and structured questions." },
    { name: "Paper 3 or 4: Practical", time: "1h 30m or 1h", marks: "40 marks · 20%", what: "Paper 3 is a lab test. Paper 4 is the written alternative." }
  ],
  book: { title: "Cambridge O Level Biology", author: "D. G. Mackean & Dave Hayward — Hodder Education", endorsed: true },
  howToStudy: [
    "Redraw every labelled diagram from memory each week.",
    "Build comparison tables as you learn, not at revision time.",
    "Use the exact biological word. 'Wrong word' means 'wrong answer'.",
    "Flashcards genuinely work for this subject — use them."
  ],
  topics: [
    { t: "Cells", subs: ["Animal, plant and bacterial cell structure", "Functions of cell structures", "Specialised cells, tissues and organs", "Magnification calculations"], tip: "The magnification formula is easy marks. Practise rearranging it in all three directions." },
    { t: "Classification", subs: ["Classification systems and binomial naming", "Dichotomous keys", "The five kingdoms", "Groups of vertebrates and arthropods", "Features of viruses"], tip: "Dichotomous keys look hard but are pure logic. Practise five and you will never lose marks on them." },
    { t: "Movement into and out of cells", subs: ["Diffusion and factors affecting it", "Osmosis and water potential", "Turgor, plasmolysis and flaccidity", "Active transport"], tip: "Osmosis definitions must include 'partially permeable membrane' and 'water potential'. Missing words cost marks." },
    { t: "Biological molecules", subs: ["Elements in carbohydrates, lipids, proteins and DNA", "Large molecules from small molecules", "Food tests: starch, glucose, protein, lipids"], tip: "Learn every food test with its exact colour change. These appear in both theory and practical papers." },
    { t: "Enzymes", subs: ["Enzymes as biological catalysts", "Active site and lock-and-key hypothesis", "Effect of temperature on enzyme activity", "Effect of pH on enzyme activity", "Denaturation"], tip: "'Denatured' means the shape of the active site changes — not that the enzyme is 'killed'. Examiners reject 'killed'." },
    { t: "Plant nutrition", subs: ["Photosynthesis and its equations", "Uses and storage of carbohydrates", "Limiting factors of photosynthesis", "Investigating photosynthesis", "Leaf structure and adaptations", "Mineral nutrition: nitrates and magnesium"], tip: "Limiting factor graphs come up constantly. Practise explaining every part of the curve, not just the flat bit." },
    { t: "Transport in flowering plants", subs: ["Root hair cells and water uptake", "Pathway of water through the plant", "Transpiration and factors affecting it", "How water moves up the xylem", "Translocation in the phloem", "Structure of xylem vessels"], tip: "Know the difference between transpiration and translocation completely — students mix these up under exam pressure." },
    { t: "Human nutrition", subs: ["Balanced diet, vitamins and minerals", "Deficiency diseases", "The digestive system and its regions", "Physical and chemical digestion", "Teeth", "Digestive enzymes and their products", "Bile and its role", "Absorption, villi and assimilation"], tip: "Make one enzyme table: enzyme → substrate → product → where it works. It answers a huge number of questions." },
    { t: "Human gas exchange", subs: ["Features of gas exchange surfaces", "Inspired versus expired air", "Structure of the breathing system", "Mechanism of breathing", "Effect of exercise on breathing", "Goblet cells, cilia and mucus"], tip: "Explain breathing using volume and pressure changes. That is what earns the marks, not just naming muscles." },
    { t: "Respiration", subs: ["Respiration and uses of energy", "Aerobic respiration and its equations", "Anaerobic respiration in humans and yeast", "Lactic acid and oxygen debt"], tip: "Respiration is not breathing. Examiners see this confusion every year — be precise." },
    { t: "Transport in humans", subs: ["The circulatory system and double circulation", "Structure and function of the heart", "Coronary heart disease and risk factors", "Arteries, veins and capillaries", "Blood components and their functions"], tip: "Learn why the left ventricle wall is thicker. It is a favourite 'explain' question." },
    { t: "Disease and immunity", subs: ["Pathogens and transmissible disease", "Body defences against pathogens", "Malaria and the mosquito vector", "HIV and AIDS", "Cholera", "Effects of alcohol and tobacco smoke", "Antibiotics and resistance", "Active and passive immunity", "Vaccination"], tip: "Vaccination is a step-by-step process. Learn the sequence in order: antigen → lymphocytes → antibodies → memory cells." },
    { t: "Excretion", subs: ["Excretion and waste products", "The urinary system", "Structure and function of a nephron", "Deamination in the liver"], tip: "Filtration then reabsorption. Know which substances are filtered and which are taken back." },
    { t: "Coordination and control", subs: ["The nervous system, CNS and PNS", "Neurones and the reflex arc", "Synapses and neurotransmitters", "The eye and its functions", "Pupil reflex and accommodation", "Hormones and endocrine glands", "Homeostasis and negative feedback", "Temperature control", "Blood glucose control and diabetes"], tip: "Homeostasis questions always follow the same shape: change detected → response → returns to set point. Use that structure every time." },
    { t: "Coordination and response in plants", subs: ["Gravitropism", "Phototropism", "The role of auxin in shoot growth"], tip: "Small topic, reliable marks. Learn how auxin becomes unequally distributed." },
    { t: "Development of organisms and continuity of life", subs: ["Chromosomes, genes and DNA", "Mitosis and its role", "Stem cells", "Meiosis and gametes", "Asexual and sexual reproduction", "Flower structure and pollination", "Fertilisation, seeds and dispersal", "Germination", "Human reproductive systems", "Sperm and egg cells", "The menstrual cycle and its hormones", "Pregnancy, placenta and amniotic sac"], tip: "The largest topic in the course. Mitosis versus meiosis is guaranteed to appear — make a comparison table." },
    { t: "Inheritance", subs: ["Continuous and discontinuous variation", "Structure of DNA and base pairing", "Genes and protein production", "Alleles, dominant and recessive", "Punnett squares and monohybrid crosses", "Codominance and blood groups", "Sex determination", "Gene and chromosome mutations", "Natural selection", "Artificial selection"], tip: "Set out genetic diagrams fully — parents, gametes, offspring, ratio. Marks are given for the working, not just the answer." },
    { t: "Biotechnology and genetic modification", subs: ["Yeast in bread and ethanol production", "Why bacteria are useful in biotechnology", "Fermenters and controlled conditions", "Enzymes in industry", "Genetic modification and insulin", "GM crops: advantages and risks"], tip: "For 'discuss' questions, give both sides and then a conclusion. One-sided answers cap your marks." },
    { t: "Organisms and their environment", subs: ["Energy flow and food chains", "Food webs and trophic levels", "Pyramids of numbers, biomass and energy", "The carbon cycle", "The nitrogen cycle", "Populations, communities and ecosystems", "Deforestation and its consequences", "Water and air pollution, eutrophication", "Conservation and sustainable resources"], tip: "Eutrophication is a chain of events. Learn every step in order — partial answers get partial marks." }
  ]
},

/* ---------------------------------------------------------- COMPUTER SCIENCE */
{
  id: "ict",
  name: "ICT",
  code: "0417",
  qual: "IGCSE",
  sitting: 2029,
  emoji: "\ud83d\udcbb",
  colour: "#0891B2",
  tint: "#E4F6FA",
  syllabusYears: "2026\u20132028",
  syllabusUrl: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-information-and-communication-technology-0417/",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-information-and-communication-technology-0417/",
  oneLine: "Two thirds of this grade is hands-on software skill, not theory. You have to actually use the software.",
  papers: [
    { name: "Paper 1: Theory", time: "1 hour 30 minutes", marks: "80 marks \u00b7 40%", what: "Multiple choice, short answer and structured questions on all 21 sections." },
    { name: "Paper 2: Document Production, Databases and Presentations", time: "2 hours 15 minutes", marks: "30%", what: "Practical test at a computer. No internet or email allowed." },
    { name: "Paper 3: Data Analysis and Website Authoring", time: "2 hours 15 minutes", marks: "30%", what: "Practical test: spreadsheets and building web pages." }
  ],
  book: { title: "Cambridge IGCSE ICT 0417 coursebook \u2014 NOT a Computer Science book", author: "This is IGCSE ICT, a completely different subject from O Level Computer Science 2210. ICT is about using software well. Computer Science is about programming. Do not buy a 2210 book.", endorsed: true },
  howToStudy: [
    "60% of your grade is two practical exams. You cannot pass by reading \u2014 you must sit at a computer and do the tasks.",
    "Practise in whatever office software you have. The exam is software-agnostic, so the skills transfer.",
    "Learn keyboard efficiency. Both practical papers are a race against the clock.",
    "Always save with the exact filename the question asks for. Wrong filename can mean zero for that task."
  ],
  topics: [
    { t: "Types and components of computer systems", subs: ["Hardware and software", "Main components of a computer system", "Operating systems and user interfaces", "Types of computer: desktop, laptop, tablet, smartphone", "Emerging technologies: AI, augmented reality"], tip: "Definitions carry the marks here. Learn hardware vs software and the interface types precisely." },
    { t: "Input and output devices", subs: ["Input devices and their uses", "Direct data entry devices", "Output devices and their uses", "Sensors and control applications", "Choosing the right device for a task"], tip: "Questions usually ask you to justify a choice \u2014 name the device AND give a reason it suits that situation." },
    { t: "Storage devices and media", subs: ["Backing up data and why it matters", "Magnetic, optical and solid state storage", "Cloud storage", "Comparing capacity, speed and portability"], tip: "Learn one advantage and one disadvantage for each storage type. That is the standard question shape." },
    { t: "Networks and the effects of using them", subs: ["LAN, WLAN and WAN", "Network hardware: routers, hubs, switches, NIC", "The internet, intranet and extranet", "Network security: passwords, authentication, firewalls", "Video, audio and web conferencing"], tip: "LAN vs WAN vs WLAN is examined every session. Know exactly what distinguishes each one." },
    { t: "The effects of using IT", subs: ["Microprocessor-controlled devices in the home", "Effects on employment and working patterns", "Health and safety issues", "Repetitive strain injury and eye strain and how to prevent them"], tip: "Health issues need the problem AND the prevention. Half answers get half marks." },
    { t: "ICT applications", subs: ["Communication: newsletters, posters, websites", "Data handling: surveys, address books, tuck shop records", "Measurement and control systems", "Modelling applications", "Banking, retail, medicine, libraries, expert systems", "School management, online booking, recognition systems"], tip: "The single biggest theory section. Learn a real example for each application area \u2014 generic answers score badly." },
    { t: "The systems life cycle", subs: ["Analysis: researching the current system", "Design: file structures, forms, reports, validation", "Development and testing, with test data types", "Implementation methods: direct, parallel, pilot, phased", "Documentation: technical and user", "Evaluation"], tip: "Implementation methods come up constantly. Learn all four with one advantage and one drawback each." },
    { t: "Safety and security", subs: ["Physical safety hazards and prevention", "eSafety: personal data, internet, email, social media", "Security of data: hacking, phishing, smishing, vishing", "Pharming, viruses, card fraud", "Protecting data: firewalls, encryption, biometrics, two-factor"], tip: "Each threat needs a definition and a prevention. Make one card per threat with both halves." },
    { t: "Audience and communication", subs: ["Audience appreciation and needs", "Copyright and legal issues", "Software copyright", "Communication with an audience", "Email: netiquette, groups, CC and BCC, spam"], tip: "Copyright and netiquette are easy recall marks that students skip because they seem boring." },
    { t: "File management", subs: ["Managing files effectively", "Generic file formats: css, csv, gif, htm, jpg, pdf, png, rtf, txt, zip, rar", "File compression and why it is used", "Saving and exporting in required formats"], tip: "Know what each file extension is for. This is directly examined and directly needed in the practical papers." },
    { t: "Images", subs: ["Placing and resizing images", "Maintaining aspect ratio", "Cropping and rotating", "Text wrap around images"], tip: "In the practical papers, distorted images lose marks. Always hold the corner handle to keep the ratio." },
    { t: "Layout", subs: ["Page setup: size, orientation, margins", "Headers and footers", "Columns and tables", "Page, section and column breaks", "Widows and orphans"], tip: "Headers and footers with automatic fields (filename, date, page number) are asked for in almost every practical paper." },
    { t: "Styles and proofing", subs: ["Creating and applying corporate house styles", "Font types, sizes, alignment and spacing", "Bullets and numbering", "Spell check and grammar check", "Proofreading against the original text"], tip: "Applying a consistent house style is worth a lot of marks and is easy to lose through carelessness." },
    { t: "Graphs and charts", subs: ["Bar charts, pie charts and line graphs", "Choosing the right chart for the data", "Chart titles, axis labels and legends", "Selecting non-contiguous data ranges", "Secondary axes"], tip: "Choosing the wrong chart type loses all the marks even if it looks neat. Match the chart to the data." },
    { t: "Document production (Paper 2)", subs: ["Importing and formatting text", "Setting page layout to a specification", "Mail merge: master document and data source", "Inserting fields and merging", "Producing documents to an exact brief"], tip: "Mail merge is the most commonly failed practical task. Practise it until you can do it without thinking." },
    { t: "Databases (Paper 2)", subs: ["Creating a database structure and setting field types", "Primary keys and relationships", "Importing data from csv", "Searching with AND, OR, NOT and wildcards", "Sorting on multiple fields", "Calculated fields and summaries", "Producing reports with headers and totals"], tip: "Search criteria must be exact. A single wrong operator returns the wrong records and loses every mark for that task." },
    { t: "Presentations (Paper 2)", subs: ["Master slides and consistent formatting", "Adding text, images and charts", "Speaker notes and audience handouts", "Transitions and animations", "Printing in the required format"], tip: "The master slide is where the marks are. Format it once rather than editing each slide individually." },
    { t: "Data analysis / spreadsheets (Paper 3)", subs: ["Creating and formatting a spreadsheet", "Formulae and cell references", "Absolute and relative referencing", "Functions: SUM, AVERAGE, COUNT, COUNTIF, IF, LOOKUP, VLOOKUP, ROUND, MAX, MIN", "Nested functions", "Sorting, filtering and testing the model", "Displaying formulae for printing"], tip: "Absolute vs relative referencing is the single most examined skill in this whole subject. If you learn one thing, learn dollar signs." },
    { t: "Website authoring (Paper 3)", subs: ["Web development layers: content, presentation, behaviour", "HTML structure, tables and lists", "Inserting images, hyperlinks and anchors", "Attaching stylesheets", "CSS: colours, fonts, alignment, backgrounds", "Testing that a website works"], tip: "You must hand-write HTML and CSS in the exam. Learn the tags properly \u2014 there is no drag-and-drop." }
  ]
},

/* ---------------------------------------------------------- ENGLISH */
{
  id: "english",
  qual: "O Level",
  sitting: 2029,
  name: "English Language",
  code: "1123",
  emoji: "✍️",
  colour: "#D97706",
  tint: "#FEF3E2",
  syllabusYears: "Current",
  syllabusUrl: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-english-language-1123/",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-english-language-1123/",
  oneLine: "The one subject you cannot cram. Start now, improve slowly, finish strong.",
  papers: [
    { name: "Paper 1: Writing", time: "1 hour 30 minutes", marks: "60 marks", what: "Directed Writing plus one composition from a choice." },
    { name: "Paper 2: Reading", time: "1 hour 45 minutes", marks: "50 marks", what: "Comprehension and summary based on two passages." }
  ],
  book: { title: "Cambridge O Level English Language Coursebook", author: "Elsdon, Rees-Bidder, Toner & Creamer — Cambridge University Press", endorsed: true },
  howToStudy: [
    "Read good English 20–30 minutes every day. This compounds over a year.",
    "Write one full piece a week and get it marked by someone competent.",
    "Keep a vocabulary notebook — new word, meaning, your own sentence.",
    "Practise summary writing separately. It is a skill, not general reading."
  ],
  topics: [
    { t: "Directed Writing", subs: ["Understanding the task, audience and purpose", "Letters (formal and informal)", "Speeches and talks", "Reports and articles", "Using all the given bullet points", "Matching tone to audience"], tip: "You must cover every bullet point given. Missing one is an automatic loss of marks, no matter how good your English is." },
    { t: "Composition: narrative and descriptive", subs: ["Planning before writing", "Openings that work", "Building description with the five senses", "Structuring a narrative", "Strong endings", "Paragraphing"], tip: "Spend five minutes planning. Unplanned stories drift and lose structure marks — the most common cause of an average grade." },
    { t: "Composition: argumentative and discursive", subs: ["Building a clear argument", "Supporting points with examples", "Considering the other side", "Linking words and paragraph flow", "Writing a conclusion"], tip: "A one-sided argument caps your mark. Always give the opposing view before your conclusion." },
    { t: "Grammar and accuracy", subs: ["Sentence structure and variety", "Tenses and agreement", "Punctuation", "Spelling", "Common errors made by Pakistani students", "Register and formality"], tip: "Accuracy carries real marks. Reread your work for five minutes at the end — you will catch errors you did not know you made." },
    { t: "Reading comprehension", subs: ["Reading for detail", "Understanding words in context", "Inference questions", "Writer's use of language", "Answering in your own words", "Using the right number of marks as a guide"], tip: "The mark number tells you how many points to make. A 3-mark question needs three separate ideas." },
    { t: "Summary writing", subs: ["Identifying relevant content points", "Selecting only what the question asks for", "Writing in your own words", "Staying inside the word limit", "Linking points into fluent prose"], tip: "Copying phrases from the passage loses marks. Rewriting in your own words is exactly what is being tested." }
  ]
},

/* ---------------------------------------------------------- URDU */
{
  id: "urdu",
  name: "Urdu (Second Language)",
  code: "0539",
  qual: "IGCSE",
  sitting: 2028,
  emoji: "🕌",
  colour: "#E11D48",
  tint: "#FEE9EE",
  syllabusYears: "2028–2029",
  syllabusUrl: "https://www.cambridgeinternational.org/Images/745678-2028-2029-syllabus.pdf",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-urdu-as-a-second-language-0539/",
  oneLine: "Speaking Urdu fluently and passing an Urdu exam are two different skills.",
  papers: [
    { name: "Paper 1: Reading and Writing", time: "2 hours", marks: "60 marks · 67%", what: "Comprehension exercises and writing tasks. All questions and answers in Urdu." },
    { name: "Paper 2: Listening", time: "Approx. 35–45 minutes", marks: "30 marks · 33%", what: "Recorded Urdu audio with questions. A whole third of your grade." },
    { name: "Paper 3: Speaking (optional)", time: "Approx. 10–12 minutes", marks: "Separately graded 1–5", what: "Presentation plus conversation. Does not count towards the A*–G grade." }
  ],
  book: { title: "IGCSE 0539-specific materials — NOT O Level 3248 books", author: "This is Cambridge IGCSE, not O Level. Books written for O Level Urdu 3247/3248 do not cover the listening paper. Check the code on the cover before buying.", endorsed: false },
  howToStudy: [
    "Listening is 33% of your grade and cannot be crammed. Start it in the first month, not the last.",
    "Listen to Urdu news bulletins and podcasts — real speech at real speed, not slow classroom Urdu.",
    "Learn the exact format for letters and reports. Format marks are given before content is read.",
    "Practise handwriting speed. Many students know the answer but run out of time."
  ],
  topics: [
    { t: "Listening (Paper 2) — 33% of the grade", subs: ["Listening for specific details and facts", "Understanding gist and main ideas", "Identifying opinions, attitudes and feelings", "Understanding what is implied but not said directly", "Following longer talks and interviews", "Note-taking while listening"], tip: "This paper did not exist in the old O Level course, so most students prepare for it far too late. You cannot revise listening the night before — it needs weeks of exposure to spoken Urdu." },
    { t: "Reading and comprehension", subs: ["Reading passages for specific detail", "Understanding gist and writer's purpose", "Inference — what is implied but not stated", "Vocabulary in context", "Answering accurately in Urdu"], tip: "Answer in complete Urdu sentences. Fragments lose marks even when the idea is right." },
    { t: "Writing and composition", subs: ["Formal and informal letters (khat)", "Reports and articles", "Essay writing (mazmoon)", "Dialogue writing", "Planning before you write", "Matching tone to the audience"], tip: "Learn each format exactly. Format marks are awarded before the examiner even reads your content." },
    { t: "Grammar (Qawaid)", subs: ["Parts of speech", "Tenses and agreement", "Sentence construction", "Idioms and proverbs (muhavare aur zarb-ul-amsal)", "Correct spelling (imla)"], tip: "Idioms and proverbs are pure memory work with guaranteed marks attached. Learn a few every week." },
    { t: "Summary and translation", subs: ["Summarising a passage (khulasa)", "Selecting only relevant points", "Translation accuracy", "Staying within word limits"], tip: "Translation is marked on accuracy, not beauty. Translate the meaning faithfully, sentence by sentence." }
  ]
},

/* ---------------------------------------------------------- PAKISTAN STUDIES */
{
  id: "pakstudies",
  qual: "O Level",
  sitting: 2028,
  name: "Pakistan Studies",
  code: "2059",
  emoji: "🇵🇰",
  colour: "#059669",
  tint: "#E4F6EF",
  syllabusYears: "2028–2030",
  syllabusUrl: "https://www.cambridgeinternational.org/Images/743607-2028-2030-syllabus.pdf",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-pakistan-studies-2059/",
  oneLine: "Two papers, two totally different skills. Treat them as separate subjects.",
  papers: [
    { name: "Paper 1: History & Culture", time: "1 hour 30 minutes", marks: "75 marks · 50%", what: "Section A: source questions (25). Section B: 2 essays from 4 (50)." },
    { name: "Paper 2: The Environment", time: "1 hour 30 minutes", marks: "75 marks · 50%", what: "Answer 3 questions from 5, each worth 25 marks." }
  ],
  book: { title: "Two books needed: 'The History and Culture of Pakistan' and 'The Environment of Pakistan'", author: "Nigel Kelly (Paper 1) · Huma Naz Sethi (Paper 2)", endorsed: true },
  howToStudy: [
    "Paper 1 needs causes, events, results and significance for every topic.",
    "Paper 2 needs map skills, data reading and real examples.",
    "The 14-mark essay needs a judgement, not just a list of facts.",
    "Spend about 30 minutes per question — practise with a clock."
  ],
  topics: [
    { t: "P1 · Background to the Pakistan Movement", subs: ["Shah Waliullah and his religious reforms", "Syed Ahmad Barelvi and the Jihad movement", "Haji Shariatullah and the Faraizi Movement", "Decline of the Mughal Empire: internal causes", "Decline of the Mughal Empire: external causes and British expansion", "The War of Independence 1857–58: causes and consequences", "Sir Syed Ahmad Khan, the Aligarh Movement and the Two-Nation Theory", "Urdu as national language and regional languages"], tip: "Key Question 4 (Sir Syed) is one of the most frequently examined topics in the whole paper. Know it deeply." },
    { t: "P2 · The emergence of Pakistan 1906–47", subs: ["Partition of Bengal, Simla Deputation and founding of the Muslim League", "Morley–Minto Reforms and the Lucknow Pact", "Rowlatt Act, Amritsar Massacre, Montagu–Chelmsford Reforms", "The Khilafat Movement and the Hijrat Movement", "Simon Commission, Nehru Report and Jinnah's 14 Points", "Round Table Conferences and the Government of India Act 1935", "Congress Rule 1937–39 and the Day of Deliverance", "Pakistan Resolution 1940, Cripps Mission, Cabinet Mission Plan", "June 3 Plan, Radcliffe Award and Independence 1947", "Contributions of Jinnah, Allama Iqbal and Rahmat Ali"], tip: "Learn the events in date order. Many students know the facts but place them in the wrong decade, which destroys an essay." },
    { t: "P3 · Nationhood 1947–99", subs: ["Problems at independence and Jinnah as Governor-General", "The Canal Water Dispute and Kashmir", "Governments 1948–58 and the Decade of Progress", "Constitutions of 1956, 1962 and 1973", "East Pakistan and the creation of Bangladesh", "Zulfikar Ali Bhutto 1971–77", "Zia-ul-Haq and Islamisation 1977–88", "Benazir Bhutto and Nawaz Sharif in the 1990s", "Pakistan as a nuclear power", "Foreign relations: India, Afghanistan, China, USA, USSR, Iran, UN"], tip: "Key Question 16 (foreign relations) links to nearly every other topic. Study it last, once the rest makes sense." },
    { t: "P2 · The land of Pakistan", subs: ["Location, borders and neighbouring countries", "Administrative areas and named cities", "Mountains, plateaus, rivers and deserts", "Climate: monsoon, depressions, convectional rain", "Arid, semi-arid, humid and highland regions", "How climate affects people and the economy"], tip: "You must be able to label a blank map. Practise drawing rivers, ranges and cities from memory every week." },
    { t: "P2 · Natural resources", subs: ["Water: dams, barrages and the Indus Water Treaty", "Water supply problems and solutions", "Forests: types, locations and deforestation", "Mineral resources and extraction", "Fishing: methods, ports and problems"], tip: "Always link a resource back to sustainability and development — that is the theme running through the whole paper." },
    { t: "P2 · Power", subs: ["Non-renewable sources: coal, oil, natural gas", "How fuels are extracted and transported", "Renewable sources: hydel, wind, solar", "Multi-purpose hydel schemes", "Why electricity supply is unreliable"], tip: "Learn real examples — named dams, named gas fields. Generic answers score low." },
    { t: "P2 · Agricultural development", subs: ["Subsistence, cash crop and livestock farming systems", "Cotton, rice, sugar cane and wheat", "Livestock and their products", "Natural factors: climate, soil, topography", "Human factors: capital, labour, holdings", "Irrigation types: canal, karez, tubewell, Persian wheel", "Waterlogging and salinity", "Government action to increase production"], tip: "Kharif versus rabi crops must be completely clear in your head. This distinction appears every session." },
    { t: "P2 · Industrial development", subs: ["Key terms: raw materials, value-added, infrastructure", "Primary, secondary and tertiary industry", "Cotton, cement, sugar, fertiliser, iron and steel", "Crafts, sports goods and surgical instruments", "Large-scale, small-scale and cottage industry", "Formal and informal sectors", "Export processing zones", "Tourism as a developing industry"], tip: "Location factors are the core of this topic: capital, raw materials, power, water, labour, transport, government policy." },
    { t: "P2 · Trade", subs: ["Main exports and imports", "GNP and GDP and the difference between them", "Balance of trade", "Pakistan's trading partners", "Trade barriers, trading blocs and exchange rates"], tip: "Learn why a developing country struggles to grow its share of world trade. It is a common 'explain' question." },
    { t: "P2 · Transport and telecommunications", subs: ["Road, rail and air networks within Pakistan", "Factors affecting transport development", "International transport: ports and border crossings", "Dry ports and why they exist", "Telecommunications and development"], tip: "Know the named ports — Keamari, Qasim, Gwadar — and be able to place them on a map." },
    { t: "P2 · Population and employment", subs: ["Population structure and population pyramids", "Birth rates, death rates and natural increase", "Causes and problems of population growth", "Migration: push and pull factors", "Rural–urban migration and shanty towns", "Distribution and density of population", "Primary, secondary and tertiary employment", "Unemployment and underemployment", "Literacy, education and training"], tip: "Population pyramid interpretation is a guaranteed skill question. Practise describing shape, then explaining what causes it." }
  ]
},

/* ---------------------------------------------------------- ISLAMIYAT */
{
  id: "islamiyat",
  qual: "O Level",
  sitting: 2028,
  name: "Islamiyat",
  code: "2058",
  emoji: "🕋",
  colour: "#9333EA",
  tint: "#F4EBFE",
  syllabusYears: "2028",
  syllabusUrl: "https://www.cambridgeinternational.org/Images/744846-2028-syllabus.pdf",
  subjectPage: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-islamiyat-2058/",
  oneLine: "Not judged on how much you write, but on answering the actual question.",
  papers: [
    { name: "Paper 1", time: "1 hour 30 minutes", marks: "50 marks · 50%", what: "The Qur'an, the life of the Prophet (pbuh), the first Islamic community." },
    { name: "Paper 2", time: "1 hour 30 minutes", marks: "50 marks · 50%", what: "Hadith, the Rightly Guided Caliphs, Articles of Faith and Pillars of Islam." }
  ],
  book: { title: "Islamiyat: a core text for Cambridge O Level / Farkhanda Noor Muhammad's Islamiat for Students", author: "David Thomas & Mustafa Draper (OUP) · Farkhanda Noor Muhammad (Ferozsons)", endorsed: true },
  howToStudy: [
    "Every question has a part (a) knowledge and a part (b) evaluation. Practise both.",
    "Support points with a relevant Qur'anic verse or Hadith wherever you can.",
    "Build one topic sheet per theme, then answer real past questions on it.",
    "Part (b) asks for your reasoned view — not a repeat of part (a)."
  ],
  topics: [
    { t: "P1 · Major themes of the Qur'an", subs: ["Passages on God in Himself", "Passages on God's relationship with the created world", "Passages on God's Messengers", "Explaining the theme of each passage", "Applying the themes to Muslim life today"], tip: "Do not just translate the passage. Explain what it teaches and why it matters — that is where the marks are." },
    { t: "P1 · History and importance of the Qur'an", subs: ["Revelation of the Qur'an", "Compilation under Abu Bakr", "Standardisation under Uthman", "The importance of the Qur'an for Muslims"], tip: "The compilation story has a clear order of events. Learn who did what, and when." },
    { t: "P1 · Life and importance of the Prophet (pbuh)", subs: ["Life in Makkah before the revelation", "The first revelations and early preaching", "Opposition and persecution in Makkah", "The Hijra to Madinah", "The Constitution of Madinah", "The major battles: Badr, Uhud, Khandaq", "Treaty of Hudaibiya and conquest of Makkah", "The Farewell Pilgrimage and final years"], tip: "For each event learn: what happened, why it happened, and what it achieved. The third part is what separates grades." },
    { t: "P1 · The first Islamic community", subs: ["The Prophet's relations with other faiths", "Abu Bakr, Umar, Uthman and Ali during the Prophet's lifetime", "Other important companions", "The wives and family of the Prophet (pbuh)"], tip: "This section covers the four Caliphs only during the Prophet's lifetime. Their rule as Caliphs belongs to Paper 2." },
    { t: "P2 · Major teachings in the Hadiths", subs: ["Hadiths on individual conduct", "Hadiths on relations with others", "Hadiths on Muslim belief and worship", "Explaining and applying Hadith teachings"], tip: "Explain the meaning in your own words, then give a real example of it in daily life." },
    { t: "P2 · History and importance of Hadith", subs: ["Collection and transmission of Hadith", "Isnad and matn", "The major collections and their compilers", "Relationship of Hadith with the Qur'an, ijma' and qiyas"], tip: "Know how a Hadith is judged authentic. It comes up regularly and most students prepare it poorly." },
    { t: "P2 · The Rightly Guided Caliphs", subs: ["Abu Bakr: election, wars of apostasy, achievements", "Umar: expansion, administration and reforms", "Uthman: compilation of the Qur'an, opposition and death", "Ali: challenges, civil war and significance", "Their importance as examples for later times"], tip: "For each Caliph learn their main problems AND how they solved them. Questions are usually framed that way." },
    { t: "P2 · Articles of Faith and Pillars of Islam", subs: ["Belief in God (Tawhid)", "Angels, Books and Prophets", "Resurrection and the Last Day", "Predestination (Qadr)", "Shahada and Salat", "Zakat and Sawm", "Hajj", "Jihad in its full range of meanings"], tip: "Do not just describe a pillar. Explain its spiritual purpose and its effect on the individual and community." }
  ]
}

];

/* Free resource hubs used across all subjects.
   All checked working in August 2026. */
const RESOURCES = [
  { name: "Cambridge International", what: "The official site. Syllabus PDFs, specimen papers, grade thresholds. The final authority on everything.", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-o-level/", official: true, emoji: "🎓" },
  { name: "PapaCambridge", what: "Yearly and topical past papers plus free notes, organised by syllabus code. Best source of topical questions.", url: "https://pastpapers.papacambridge.com/papers/caie/o-level", official: false, emoji: "📚" },
  { name: "PastPapers.co", what: "Clean, fast archive of papers, mark schemes and examiner reports.", url: "https://pastpapers.co/cie/?dir=O-Level", official: false, emoji: "🗂️" },
  { name: "XtremePapers", what: "The oldest and most reliable past-paper mirror. Every session and variant.", url: "https://papers.xtremepape.rs/index.php?dirpath=.%2FCAIE%2FO+Level%2F&order=0", official: false, emoji: "📄" },
  { name: "CaieFinder", what: "Search any question phrase and it finds the exact paper plus its mark scheme.", url: "https://caiefinder.com/", official: false, emoji: "🔎" },
  { name: "Physics & Maths Tutor", what: "Strong notes and topic questions for Physics, Chemistry, Biology and Maths. Better coverage than most free sites.", url: "https://www.physicsandmathstutor.com/", official: false, emoji: "🔬" },
  { name: "Save My Exams", what: "Polished notes and worked questions. Written mainly for IGCSE, so check against your O Level syllabus.", url: "https://www.savemyexams.com/", official: false, emoji: "💡" },
  { name: "Mega Lecture", what: "Pakistan-based. Free notes and worksheets, including Pak Studies, Islamiyat and Urdu which most sites skip.", url: "https://megalecture.com/resources/", official: false, emoji: "🇵🇰" },
  { name: "Mojza", what: "Free Pakistani notes bank covering most O Level subjects.", url: "https://mojza.org/olevels/", official: false, emoji: "✨" },
  { name: "Khan Academy", what: "Not Cambridge-specific, but excellent for building Maths and Science understanding from zero. Free, no ads.", url: "https://www.khanacademy.org/", official: false, emoji: "🧠" },
  { name: "British Council Pakistan", what: "Where private candidates register for exams in Pakistan. Check every deadline here yourself.", url: "https://www.britishcouncil.pk/exam/international-schools-igcse-a-levels/private-candidates", official: true, emoji: "📋" }
];
