/* ============================================================
   STARTING POINT CHECK — DIAGNOSTIC ASSESSMENT ENGINE
   ------------------------------------------------------------
   This is NOT an IQ test and NOT a pass/fail exam.
   It finds out which specific sub-skills are strong and which
   are not yet built, so the study plan can target them.

   Every item is tagged with:
     lvl   1..5  difficulty band
     skill        which sub-skill it measures

   Levels mean:
     1  Beginner        — basic words and simple sentences
     2  Building        — everyday English, simple paragraphs
     3  Developing      — can follow normal school text
     4  Exam-ready      — handles academic and science text
     5  A* candidate    — precise, exam-standard language
   ============================================================ */

const LEVELS = {
  1: { name: "Beginner",    colour: "#E11D48", tint:"#FEE9EE",
       what: "Reading a page of English is hard work right now. That is a starting point, not a verdict — and it is fixable with daily practice." },
  2: { name: "Building",    colour: "#EA580C", tint:"#FEF0E6",
       what: "Everyday English is coming along. Academic and exam English is still out of reach, and that is the gap to close." },
  3: { name: "Developing",  colour: "#D97706", tint:"#FEF3E2",
       what: "Normal school text is manageable. Precise exam wording and longer written answers still need work." },
  4: { name: "Exam-ready",  colour: "#0D9488", tint:"#E3F7F5",
       what: "Strong. Academic text is understood. Now it is about precision and exam technique." },
  5: { name: "A* candidate",colour: "#16A34A", tint:"#E8F7EC",
       what: "Excellent control of English. The language will not hold back any subject." }
};

/* ---------------- ENGLISH ITEMS ---------------- */
const ENGLISH_ITEMS = [

/* --- A. Word knowledge (vocabulary) --- */
{ sec:"vocab", skill:"Vocabulary", lvl:1,
  q:"Which word means the same as <b>big</b>?",
  opts:["large","small","slow","dark"], a:0 },
{ sec:"vocab", skill:"Vocabulary", lvl:1,
  q:"Which word means the opposite of <b>hot</b>?",
  opts:["warm","cold","dry","fast"], a:1 },
{ sec:"vocab", skill:"Vocabulary", lvl:2,
  q:"The water <b>disappeared</b> from the plate. This means the water:",
  opts:["became dirty","went away","became cold","spilled"], a:1 },
{ sec:"vocab", skill:"Vocabulary", lvl:2,
  q:"Which word means <b>almost the same as</b> 'quickly'?",
  opts:["rapidly","rarely","roughly","recently"], a:0 },
{ sec:"vocab", skill:"Vocabulary", lvl:3,
  q:"The temperature <b>decreased</b>. This means it:",
  opts:["went up","stayed the same","went down","changed colour"], a:2 },
{ sec:"vocab", skill:"Vocabulary", lvl:3,
  q:"Something that happens <b>gradually</b> happens:",
  opts:["suddenly","slowly, over time","only once","by accident"], a:1 },
{ sec:"vocab", skill:"Vocabulary", lvl:4,
  q:"In science, <b>particles</b> means:",
  opts:["very small pieces of matter","pieces of equipment","kinds of energy","types of liquid"], a:0 },
{ sec:"vocab", skill:"Vocabulary", lvl:4,
  q:"If two things are <b>proportional</b>, then when one doubles the other:",
  opts:["halves","also doubles","stays the same","disappears"], a:1 },
{ sec:"vocab", skill:"Vocabulary", lvl:5,
  q:"A <b>reliable</b> result in an experiment is one that:",
  opts:["is close to the true value","gives the same answer when repeated","was measured quickly","looks correct on a graph"], a:1 },
{ sec:"vocab", skill:"Vocabulary", lvl:5,
  q:"If a gas is <b>compressed</b>, its volume is:",
  opts:["increased","made smaller","kept constant","turned into a liquid"], a:1 },

/* --- B. Grammar and sentence control --- */
{ sec:"grammar", skill:"Grammar", lvl:1,
  q:"Choose the correct sentence:",
  opts:["She go to school every day.","She goes to school every day.","She going to school every day.","She gone to school every day."], a:1 },
{ sec:"grammar", skill:"Grammar", lvl:1,
  q:"Choose the correct word: The books ___ on the table.",
  opts:["is","am","are","was"], a:2 },
{ sec:"grammar", skill:"Grammar", lvl:2,
  q:"Choose the correct sentence:",
  opts:["Yesterday I am going to the market.","Yesterday I went to the market.","Yesterday I will go to the market.","Yesterday I go to the market."], a:1 },
{ sec:"grammar", skill:"Grammar", lvl:2,
  q:"Choose the correct word: The water was hot, ___ I did not touch it.",
  opts:["so","but","or","although"], a:0 },
{ sec:"grammar", skill:"Grammar", lvl:3,
  q:"Choose the correct sentence:",
  opts:["The metal expands because it is heated.","The metal expands because of it is heated.","The metal expands, because heated.","The metal is expand because heated."], a:0 },
{ sec:"grammar", skill:"Grammar", lvl:3,
  q:"Which sentence uses <b>however</b> correctly?",
  opts:["The gas expanded however the liquid did not.","The gas expanded. However, the liquid did not.","However the gas expanded the liquid did not.","The gas however expanded not the liquid."], a:1 },
{ sec:"grammar", skill:"Grammar", lvl:4,
  q:"Choose the best sentence for an exam answer:",
  opts:["The particles move faster and hit the wall more.","The particles move faster, so they collide with the walls more frequently.","Particles fast, hitting wall more times.","Because particles faster so more hitting."], a:1 },
{ sec:"grammar", skill:"Grammar", lvl:5,
  q:"Which sentence is written in correct scientific style?",
  opts:["I saw the liquid go up when I heated it.","The liquid expanded when it was heated.","The liquid was going up because of heat.","Heat made the liquid to expand."], a:1 },

/* --- C. Reading: simple passage --- */
{ sec:"read1", skill:"Reading (simple)", lvl:2, passage:1,
  q:"Read the passage. <b>Why did Ali open the window?</b>",
  opts:["Because it was raining","Because the room was too hot","Because he heard a noise","Because his mother told him to"], a:1 },
{ sec:"read1", skill:"Reading (simple)", lvl:2, passage:1,
  q:"<b>What happened after he opened the window?</b>",
  opts:["The room became cooler","The room became hotter","He closed the door","He went outside"], a:0 },
{ sec:"read1", skill:"Reading (simple)", lvl:3, passage:1,
  q:"<b>The word 'stuffy' in the passage means:</b>",
  opts:["bright and open","hot with no fresh air","cold and windy","noisy and crowded"], a:1 },
{ sec:"read1", skill:"Reading (simple)", lvl:3, passage:1,
  q:"<b>How do we know Ali was uncomfortable?</b>",
  opts:["He was shouting","He could not concentrate on his book","He fell asleep","He left the house"], a:1 },

/* --- D. Reading: academic passage --- */
{ sec:"read2", skill:"Reading (academic)", lvl:4, passage:2,
  q:"<b>According to the passage, why does the liquid rise in the tube?</b>",
  opts:["The particles get bigger","The particles move further apart","The tube becomes narrower","New particles are added"], a:1 },
{ sec:"read2", skill:"Reading (academic)", lvl:4, passage:2,
  q:"<b>What stays the same when the liquid is heated?</b>",
  opts:["The volume","The temperature","The number of particles","The space between particles"], a:2 },
{ sec:"read2", skill:"Reading (academic)", lvl:5, passage:2,
  q:"<b>The passage says expansion is 'not caused by the particles themselves growing'. This tells us the writer wants to:",
  opts:["correct a common misunderstanding","introduce a new experiment","describe the equipment","give a definition of heat"], a:0 },
{ sec:"read2", skill:"Reading (academic)", lvl:5, passage:2,
  q:"<b>Which statement would the writer agree with?</b>",
  opts:["Heating always makes particles larger.","Expansion happens because particles gain energy and move apart.","Liquids cannot expand, only gases can.","The number of particles increases with temperature."], a:1 },

/* --- E. Command words (O Level specific) --- */
{ sec:"command", skill:"Exam command words", lvl:3,
  q:"If a question says <b>State</b>, you should:",
  opts:["give a short answer with no explanation","write a long paragraph","give reasons for your answer","draw a diagram"], a:0 },
{ sec:"command", skill:"Exam command words", lvl:4,
  q:"If a question says <b>Explain</b>, you must:",
  opts:["list the facts","say what happened","give the reason why or how","name the equipment"], a:2 },
{ sec:"command", skill:"Exam command words", lvl:4,
  q:"A question worth <b>[3]</b> marks usually needs:",
  opts:["one word","three separate points","three paragraphs","a diagram only"], a:1 },
{ sec:"command", skill:"Exam command words", lvl:5,
  q:"If a question says <b>Describe</b>, you should:",
  opts:["say what happens, without giving reasons","give reasons why it happens","give your own opinion","compare two things"], a:0 },
{ sec:"command", skill:"Exam command words", lvl:5,
  q:"A question says <b>Evaluate</b>. The best answer:",
  opts:["gives only the advantages","gives both sides, then a reasoned judgement","lists facts in order","repeats the question"], a:1 }
];

const ENGLISH_PASSAGES = {
1: { title:"Passage 1",
     text:"The room was small and <b>stuffy</b>. Ali had been sitting at his desk for an hour, but he could not concentrate on his book. His shirt stuck to his back. He put down his pen, walked across the room and opened the window. Cool air moved in from the garden. Within a few minutes the room felt fresh again, and Ali went back to his desk." },
2: { title:"Passage 2",
     text:"When a liquid is heated, it expands. This can be seen clearly in a thermometer, where the liquid rises up the narrow tube. The expansion is <b>not</b> caused by the particles themselves growing larger. The number of particles does not change, and each particle stays the same size. Instead, the particles gain energy and vibrate more strongly, which pushes them slightly further apart. Because the particles occupy more space, the volume of the liquid increases and the level in the tube rises." }
};

/* ---------------- WRITING TASKS ---------------- */
const ENGLISH_WRITING = {
  prompt: "Write about <b>your daily routine</b> — what you do from morning until night. Write at least 5 sentences. Take about 5 minutes.",
  hint: "Do not worry about mistakes. Just write as much as you can, in your own words."
};

const URDU_WRITING = {
  script: { prompt:"اپنے پسندیدہ دن کے بارے میں لکھیں۔ کم از کم پانچ جملے لکھیں۔", hint:"غلطیوں کی فکر نہ کریں۔ جتنا لکھ سکتی ہیں لکھیں۔" },
  roman:  { prompt:"Apne pasandeeda din ke baare mein likhein. Kam az kam paanch jumlay likhein.", hint:"Ghaltiyon ki fikar na karein. Jitna likh sakti hain likhein." }
};

/* ---------------- URDU ITEMS ---------------- */
/* Each item has both script and roman versions so she can choose. */
const URDU_ITEMS = [
{ sec:"vocab", skill:"Vocabulary", lvl:1,
  q:{script:"<b>خوش</b> کا متضاد کیا ہے؟", roman:"<b>Khush</b> ka mutazad (opposite) kya hai?"},
  opts:{script:["غمگین","بڑا","تیز","سفید"], roman:["Ghamgeen","Bara","Tez","Safaid"]}, a:0 },
{ sec:"vocab", skill:"Vocabulary", lvl:2,
  q:{script:"<b>محنت</b> کا مطلب کیا ہے؟", roman:"<b>Mehnat</b> ka matlab kya hai?"},
  opts:{script:["سستی","کوشش اور کام","آرام","کھیل"], roman:["Susti","Koshish aur kaam","Aaraam","Khail"]}, a:1 },
{ sec:"vocab", skill:"Vocabulary", lvl:3,
  q:{script:"<b>ترقی</b> کا مطلب کیا ہے؟", roman:"<b>Taraqqi</b> ka matlab kya hai?"},
  opts:{script:["آگے بڑھنا","پیچھے ہٹنا","رک جانا","بھول جانا"], roman:["Aagay barhna","Peechay hatna","Ruk jana","Bhool jana"]}, a:0 },
{ sec:"vocab", skill:"Vocabulary", lvl:4,
  q:{script:"<b>اتفاق</b> کا مطلب کیا ہے؟", roman:"<b>Ittefaq</b> ka matlab kya hai?"},
  opts:{script:["جھگڑا","ایک رائے ہونا","جلدی کرنا","الگ ہونا"], roman:["Jhagra","Aik raaye hona","Jaldi karna","Alag hona"]}, a:1 },
{ sec:"grammar", skill:"Grammar (Qawaid)", lvl:1,
  q:{script:"درست جملہ منتخب کریں:", roman:"Durust jumla muntakhib karein:"},
  opts:{script:["میں اسکول جاتی ہوں۔","میں اسکول جاتا ہیں۔","میں اسکول جاتی ہیں۔","میں اسکول جاؤں ہوں۔"],
        roman:["Main school jaati hoon.","Main school jaata hain.","Main school jaati hain.","Main school jaaun hoon."]}, a:0 },
{ sec:"grammar", skill:"Grammar (Qawaid)", lvl:2,
  q:{script:"<b>کتاب</b> کی جمع کیا ہے؟", roman:"<b>Kitaab</b> ki jama (plural) kya hai?"},
  opts:{script:["کتابیں","کتابی","کتابہ","کتابوں"], roman:["Kitaabein","Kitaabi","Kitaaba","Kitaabon"]}, a:0 },
{ sec:"grammar", skill:"Grammar (Qawaid)", lvl:3,
  q:{script:"خالی جگہ پُر کریں: وہ بیمار تھی، ___ وہ اسکول آئی۔", roman:"Khaali jagah pur karein: Woh beemar thi, ___ woh school aayi."},
  opts:{script:["پھر بھی","کیونکہ","اور","یا"], roman:["Phir bhi","Kyunke","Aur","Ya"]}, a:0 },
{ sec:"grammar", skill:"Grammar (Qawaid)", lvl:4,
  q:{script:"کون سا جملہ درست ہے؟", roman:"Kaun sa jumla durust hai?"},
  opts:{script:["اس نے محنت کی، اس لیے وہ کامیاب ہوئی۔","اس نے محنت کی، کیونکہ وہ کامیاب ہوئی۔","اس نے محنت کی، لیکن وہ کامیاب ہوئی۔","اس نے محنت کی، اگرچہ کامیاب ہوئی۔"],
        roman:["Us ne mehnat ki, is liye woh kaamyaab hui.","Us ne mehnat ki, kyunke woh kaamyaab hui.","Us ne mehnat ki, lekin woh kaamyaab hui.","Us ne mehnat ki, agarche kaamyaab hui."]}, a:0 },
{ sec:"idiom", skill:"Idioms (Muhavare)", lvl:3,
  q:{script:"<b>آنکھ کا تارا</b> کا مطلب:", roman:"<b>Aankh ka taara</b> ka matlab:"},
  opts:{script:["بہت پیارا","بہت دور","بہت روشن","بہت مشکل"], roman:["Bohat pyara","Bohat door","Bohat roshan","Bohat mushkil"]}, a:0 },
{ sec:"idiom", skill:"Idioms (Muhavare)", lvl:4,
  q:{script:"<b>ہاتھ پاؤں پھول جانا</b> کا مطلب:", roman:"<b>Haath paon phool jana</b> ka matlab:"},
  opts:{script:["گھبرا جانا","خوش ہونا","تھک جانا","بیمار ہونا"], roman:["Ghabra jana","Khush hona","Thak jana","Beemar hona"]}, a:0 },
{ sec:"read", skill:"Reading", lvl:3, passage:true,
  q:{script:"عبارت پڑھیں۔ <b>سلمیٰ روز صبح کیا کرتی تھی؟</b>", roman:"Ibaarat parhein. <b>Salma roz subah kya karti thi?</b>"},
  opts:{script:["باغ میں پودوں کو پانی دیتی تھی","بازار جاتی تھی","کھیلتی تھی","سوتی رہتی تھی"],
        roman:["Baagh mein paudon ko paani deti thi","Bazaar jaati thi","Khelti thi","Soti rehti thi"]}, a:0 },
{ sec:"read", skill:"Reading", lvl:4, passage:true,
  q:{script:"<b>عبارت سے کیا سبق ملتا ہے؟</b>", roman:"<b>Ibaarat se kya sabaq milta hai?</b>"},
  opts:{script:["مسلسل محنت کا پھل ملتا ہے","جلدی کام کرنا چاہیے","دوستوں کی مدد کرنی چاہیے","صبح جلدی اٹھنا چاہیے"],
        roman:["Musalsal mehnat ka phal milta hai","Jaldi kaam karna chahiye","Doston ki madad karni chahiye","Subah jaldi uthna chahiye"]}, a:0 }
];

const URDU_PASSAGE = {
  script:"سلمیٰ کو پودے بہت پسند تھے۔ وہ روز صبح اٹھ کر باغ میں جاتی اور ہر پودے کو پانی دیتی۔ شروع میں پودے چھوٹے اور کمزور تھے۔ کچھ لوگوں نے کہا کہ یہ پودے کبھی نہیں بڑھیں گے۔ لیکن سلمیٰ نے ہمت نہ ہاری اور روز ان کی دیکھ بھال کرتی رہی۔ ایک سال بعد باغ پھولوں سے بھر گیا۔",
  roman:"Salma ko paudey bohat pasand thay. Woh roz subah uth kar baagh mein jaati aur har paudey ko paani deti. Shuru mein paudey chotay aur kamzor thay. Kuch logon ne kaha ke ye paudey kabhi nahi barhein ge. Lekin Salma ne himmat na haari aur roz un ki dekh bhaal karti rahi. Aik saal baad baagh phoolon se bhar gaya."
};

/* ============================================================
   SCORING
   ============================================================ */

/* Work out a level 1-5 from a set of answered items */
function scoreItems(items, answers) {
  const bySkill = {};
  let correct = 0, total = 0;
  let highestPassed = 0;
  const byLevel = {1:{c:0,t:0},2:{c:0,t:0},3:{c:0,t:0},4:{c:0,t:0},5:{c:0,t:0}};

  items.forEach((it, i) => {
    const got = answers[i] === it.a;
    total++; if (got) correct++;
    byLevel[it.lvl].t++; if (got) byLevel[it.lvl].c++;
    if (!bySkill[it.skill]) bySkill[it.skill] = { c:0, t:0 };
    bySkill[it.skill].t++; if (got) bySkill[it.skill].c++;
  });

  /* level = highest band where she got at least 60% right */
  for (let L = 1; L <= 5; L++) {
    if (byLevel[L].t > 0 && (byLevel[L].c / byLevel[L].t) >= 0.6) highestPassed = L;
  }
  if (highestPassed === 0) highestPassed = 1;

  const pct = total ? Math.round(correct / total * 100) : 0;
  return { correct, total, pct, level: highestPassed, bySkill, byLevel };
}

/* Analyse a piece of writing — objective measures, no AI needed */
function analyseWriting(text) {
  const clean = (text || "").trim();
  if (!clean) return null;
  const words = clean.split(/\s+/).filter(Boolean);
  const sentences = clean.split(/[.!?۔]+/).map(s=>s.trim()).filter(s=>s.length>1);
  const unique = new Set(words.map(w => w.toLowerCase().replace(/[^\w\u0600-\u06FF]/g,"")));
  const longWords = words.filter(w => w.replace(/[^\w\u0600-\u06FF]/g,"").length >= 7);
  const avgSent = sentences.length ? (words.length / sentences.length) : words.length;
  return {
    words: words.length,
    sentences: sentences.length,
    avgSentence: Math.round(avgSent * 10) / 10,
    variety: words.length ? Math.round(unique.size / words.length * 100) : 0,
    longWordPct: words.length ? Math.round(longWords.length / words.length * 100) : 0
  };
}

/* Benchmarks so the numbers mean something */
function writingVerdict(m) {
  if (!m) return [];
  const out = [];
  if (m.words < 40) out.push(["low","Very short. Under 40 words suggests writing feels difficult right now — building writing stamina is a priority."]);
  else if (m.words < 80) out.push(["mid","A reasonable amount written. Aim to build up to 100+ words comfortably."]);
  else out.push(["good","Good length. She can produce a decent amount of writing."]);

  if (m.sentences < 3) out.push(["low","Fewer than 3 sentences. Sentence separation and full stops need direct work."]);
  else if (m.sentences >= 5) out.push(["good","Used 5 or more sentences — good structure."]);
  else out.push(["mid","A few sentences used. Aim for 5 or more."]);

  if (m.avgSentence < 6) out.push(["low","Very short sentences. Next step: joining ideas with 'because', 'so' and 'which'."]);
  else if (m.avgSentence > 25) out.push(["low","Very long sentences — likely run-on sentences without full stops. Work on breaking ideas up."]);
  else out.push(["good","Sentence length is in a healthy range (6–25 words)."]);

  if (m.variety < 40) out.push(["low","Words are repeated a lot. Vocabulary range needs building."]);
  else out.push(["good","Good variety of words used."]);
  return out;
}

/* Turn results into an actual plan */
function buildPlan(eng, urd) {
  const plan = [];
  const L = eng ? eng.level : null;

  if (L !== null) {
    if (L <= 2) {
      plan.push({ icon:"📖", title:"English reading — every single day, 15 minutes",
        why:"This is the highest-value thing on the whole list. At this level, English is limiting every other subject, including Pak Studies and Islamiyat.",
        how:"Short, easy texts she can almost read alone. Same text twice: once for meaning, once for fluency. Never a long passage." });
      plan.push({ icon:"🗂️", title:"Build a personal word bank",
        why:"Weak vocabulary is the main reason a page feels impossible.",
        how:"Every unknown word: word, Urdu meaning, and her own sentence. 5 new words a day, reviewed daily." });
      plan.push({ icon:"✍️", title:"Sentence-building before paragraph-writing",
        why:"Writing paragraphs is too big a jump right now.",
        how:"Give her sentence frames to complete: 'The water evaporated because ______.' Fill-in first, free writing later." });
    } else if (L === 3) {
      plan.push({ icon:"📖", title:"Move reading to school-level texts",
        why:"She can handle normal text. The gap now is academic and exam language.",
        how:"Read the actual textbook pages, not simplified versions. Underline every unknown word." });
      plan.push({ icon:"🔬", title:"Learn science vocabulary as English",
        why:"Words like 'decrease', 'proportional', 'particles' carry marks in every science paper.",
        how:"A running glossary of exam words with Urdu meanings, reviewed weekly." });
      plan.push({ icon:"✍️", title:"Paragraph practice with structure",
        why:"She can write, but not yet to exam structure.",
        how:"Point → reason → example. One paragraph a day, marked against that structure." });
    } else {
      plan.push({ icon:"🎯", title:"Precision, not fluency",
        why:"English is no longer the barrier. Marks are now lost on exact wording.",
        how:"Study mark schemes. Compare her sentence to the mark scheme sentence and find the missing word." });
      plan.push({ icon:"⏱️", title:"Timed written answers",
        why:"At this level the constraint becomes speed under pressure.",
        how:"Past-paper questions with a clock from now on." });
    }
  }

  if (eng && eng.bySkill) {
    const weakest = Object.entries(eng.bySkill)
      .map(([k,v]) => [k, v.t ? v.c/v.t : 0])
      .sort((a,b) => a[1]-b[1])[0];
    if (weakest && weakest[1] < 0.6) {
      plan.push({ icon:"⚠️", title:"Weakest area: " + weakest[0],
        why:"This scored lowest of all sections, so it is the bottleneck to attack first.",
        how:"Give this 10 minutes daily on its own, separate from general reading." });
    }
  }

  if (urd && urd.level >= 3 && eng && eng.level <= 2) {
    plan.push({ icon:"🌉", title:"Use Urdu as the bridge",
      why:"Her Urdu is clearly stronger than her English. That is an asset, not a problem.",
      how:"Learn every new concept in Urdu FIRST, then learn to say it in English. Understanding and language are two separate jobs — do not make her do both at once." });
  }
  if (urd && urd.level <= 2) {
    plan.push({ icon:"📕", title:"Urdu needs work too",
      why:"Urdu is an exam subject in May 2027 and cannot be assumed. Speaking Urdu is not the same as writing exam Urdu.",
      how:"Daily Urdu reading and weekly written practice, treated like any other subject." });
  }
  return plan;
}

/* Save / load results */
function saveResult(key, obj) {
  try { localStorage.setItem("assess:" + key, JSON.stringify(obj)); } catch(e) {}
}
function loadResult(key) {
  try { const v = localStorage.getItem("assess:" + key); return v ? JSON.parse(v) : null; }
  catch(e) { return null; }
}
