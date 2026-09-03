/* ============================================================
   HOW TO ANSWER  —  original content, O Level Pakistan
   ------------------------------------------------------------
   This is the thing students normally pay a tutor for: not what
   the topic is, but HOW to write an answer that scores.
   Written by us from working through the real papers.
   Every word here is ours.
   ============================================================ */

const HOWTO = {

physics: {
  /* 0 — Motion, forces and energy */
  0: {
    intro: "Most marks in this topic come from graphs and calculations — not from memorising definitions. Examiners want to see your working, in order.",
    patterns: [
      { ask: "\"Describe the motion\" from a speed–time graph",
        steps: [
          "Split the graph into sections — one for each straight line or curve.",
          "For each section say whether speed is increasing, constant, or decreasing.",
          "Use the word <b>uniform</b> or <b>constant</b> if the line is straight. That word is often the mark.",
          "Never just say \"it speeds up then slows down\" — that skips the marks."
        ],
        example: "Correct: \"From 0 to 6 s the bus accelerates uniformly. From 6 to 10 s it travels at constant speed. From 10 to 12 s it decelerates uniformly until it stops.\"" },
      { ask: "\"Calculate the distance\" from a speed–time graph",
        steps: [
          "Distance = the <b>area under the graph</b>. Not speed × time.",
          "Split the shape into triangles and rectangles.",
          "Work out each area, then add them.",
          "Write the unit — metres."
        ],
        example: "Trap: if speed goes from 0 to 24 m/s in 8 s, distance is <b>not</b> 24 × 8. It is the average speed (12) × 8 = 96 m." },
      { ask: "Any F = ma calculation",
        steps: [
          "Find the <b>resultant</b> force first — push minus friction.",
          "Write the formula: F = ma.",
          "Substitute the numbers, then rearrange.",
          "Answer + unit."
        ],
        example: "150 N forwards, 30 N friction, mass 30 kg → resultant = 120 N → a = 120 ÷ 30 = 4.0 m/s²" }
    ]
  },

  /* 1 — Thermal physics */
  1: {
    intro: "Almost every question here says \"explain\". That means talk about <b>particles</b>. If your answer has no particles in it, you are probably losing marks.",
    patterns: [
      { ask: "\"Explain\" anything about gas pressure",
        steps: [
          "Say what happens to the particles' <b>speed</b> or <b>energy</b>.",
          "Say they hit the walls <b>more often</b> (or less often).",
          "Say they hit <b>harder</b> (if temperature changed).",
          "Finish with: so the force per unit area — the pressure — increases."
        ],
        example: "You need all the steps. \"The particles have more space\" on its own scores zero." },
      { ask: "\"Explain why evaporation causes cooling\"",
        steps: [
          "The <b>fastest</b> particles escape from the surface.",
          "So the average energy of the ones left behind drops.",
          "Lower average energy means lower temperature."
        ],
        example: "Saying \"the liquid loses heat\" is not enough. Name which particles leave and what that does to the average." },
      { ask: "Specific heat capacity calculations",
        steps: [
          "Write E = mcΔθ.",
          "Δθ means the <b>change</b> in temperature, not the final temperature.",
          "Check the mass is in kilograms.",
          "Answer in joules."
        ],
        example: "Heating water from 20 °C to 80 °C: Δθ = 60, not 80. This single mistake is very common." }
    ]
  },

  /* 2 — Waves */
  2: {
    intro: "This topic is half drawing, half calculation. Both need a ruler and care. Rushed diagrams lose easy marks.",
    patterns: [
      { ask: "Any ray diagram",
        steps: [
          "Use a ruler. Always.",
          "Draw the <b>normal</b> as a dashed line at 90° to the surface.",
          "Put <b>arrows</b> on every ray showing direction.",
          "Measure angles from the normal, never from the surface."
        ],
        example: "For a parallel-sided glass block, the ray coming out must be <b>parallel</b> to the ray going in. Examiners check this." },
      { ask: "Echo / ultrasound distance questions",
        steps: [
          "The sound travels there <b>and back</b>.",
          "So: distance = (speed × time) ÷ 2.",
          "Forgetting to halve is the most common error in this whole topic."
        ],
        example: "Sound takes 0.8 s to return, speed 1500 m/s → distance = (1500 × 0.8) ÷ 2 = 600 m" },
      { ask: "\"What happens when a wave enters a new material?\"",
        steps: [
          "Frequency <b>stays the same</b>. Always.",
          "Speed changes.",
          "So wavelength changes too.",
          "If you need to calculate, reuse the same frequency."
        ],
        example: "Students often say frequency changes. It does not. Learn this one line and you will never lose the mark." }
    ]
  },

  /* 3 — Electricity and magnetism */
  3: {
    intro: "The biggest topic on the paper and the most calculation-heavy. Get series and parallel rules solid before anything else — everything later depends on them.",
    patterns: [
      { ask: "Any circuit calculation",
        steps: [
          "Work out the <b>total</b> resistance first.",
          "Series: just add them. Parallel: 1/R = 1/R₁ + 1/R₂, then <b>flip it</b> at the end.",
          "Use V = IR with the total to find the current from the supply.",
          "Then work back to individual components."
        ],
        example: "Trap: never put the full battery voltage across just one resistor in a series circuit. Split it." },
      { ask: "e.m.f. versus potential difference",
        steps: [
          "e.m.f. = energy given <b>to</b> each coulomb by the source.",
          "p.d. = energy transferred <b>from</b> each coulomb in a component.",
          "Both are measured in volts, and both are per coulomb."
        ],
        example: "This exact difference is examined nearly every session. Learn both sentences word for word." },
      { ask: "\"Explain why a voltage is induced\"",
        steps: [
          "Say the magnetic field is <b>changing</b>.",
          "Say the conductor cuts through field lines.",
          "So an e.m.f. is induced.",
          "Faster movement = bigger e.m.f."
        ],
        example: "Never say current \"passes through the core\" of a transformer. It does not. It is a changing field." }
    ]
  },

  /* 4 — Nuclear physics */
  4: {
    intro: "Two things are tested nearly every session: half-life calculations and decay equations. Drill both until they are automatic.",
    patterns: [
      { ask: "Half-life with background radiation",
        steps: [
          "<b>Subtract</b> the background count first.",
          "Halve the corrected number, once per half-life.",
          "If the question asks what the <b>counter</b> reads, <b>add background back on</b> at the end."
        ],
        example: "420 counts, 20 background, 2 half-lives → 400 → 200 → 100 → add 20 back = 120 counts. Most students forget the last step." },
      { ask: "Balancing a decay equation",
        steps: [
          "Top numbers (nucleons) must add up on both sides.",
          "Bottom numbers (protons) must add up too.",
          "Alpha = ⁴₂He. Beta = ⁰₋₁e — note the minus one."
        ],
        example: "Check both rows every time. Beta is harder than alpha because of the −1." },
      { ask: "Which radiation to use?",
        steps: [
          "Alpha: stopped by paper and a few cm of air. Most ionising.",
          "Beta: stopped by a few mm of aluminium.",
          "Gamma: only reduced by thick lead — never fully stopped.",
          "Match the penetrating power to what the question needs."
        ],
        example: "A medical tracer needs gamma (it must escape the body) and a short half-life (so exposure is brief)." }
    ]
  },

  /* 5 — Space physics */
  5: {
    intro: "Mostly recall, so the marks are there if you learn the sequences properly. Two things catch people out: orbital speed and what a light-year is.",
    patterns: [
      { ask: "Calculating orbital speed",
        steps: [
          "Use the <b>circumference</b> of the orbit: 2πr.",
          "Divide by the time for one full orbit (in seconds).",
          "Convert hours or years to seconds first."
        ],
        example: "Using just r instead of 2πr is the most common error in this topic." },
      { ask: "Life cycle of a star",
        steps: [
          "Learn the two paths separately: Sun-sized, and much bigger.",
          "Sun-sized: nebula → protostar → main sequence → red giant → planetary nebula → white dwarf.",
          "Massive: nebula → protostar → main sequence → red supergiant → supernova → neutron star or black hole.",
          "Read the question to see which star you have."
        ],
        example: "The Sun will <b>not</b> become a supernova. Saying so loses the marks." },
      { ask: "Redshift and the Big Bang",
        steps: [
          "Light from distant galaxies is shifted to longer wavelength.",
          "That means they are moving away.",
          "Further galaxies show more redshift, so they move faster.",
          "So the Universe is expanding — meaning it started from one point."
        ],
        example: "Do not stop at \"the Universe is expanding\". Finish the logic back to the Big Bang." }
    ]
  }
},

islamiyat: {
  /* 0 — P1 · Major themes of the Qur'an  (Question 1, 8 marks) */
  0: {
    intro: "This is Question 1 on Paper 1. Three passages are printed. You pick <b>two</b>. Each one is worth 4 marks, so 8 marks total. Here is the thing that kills most students: they translate the passage back. The examiner already has the translation. He wants the <b>teaching</b>.",
    patterns: [
      { ask: "Any passage question in Question 1",
        steps: [
          "Name the theme in your first line. God's oneness. God's power. God's mercy. Prophethood. Say it straight away.",
          "Point to the words in the passage that show that theme. One or two is enough.",
          "Say what this teaches Muslims about God or about the Prophet (pbuh).",
          "Finish with one line on what a Muslim <b>does</b> because of it."
        ],
        example: "4 marks, 4 moves. Theme → evidence → teaching → effect on life. Do not write more. There are no marks past 4." },
      { ask: "Which two passages should I choose?",
        steps: [
          "Choose the two you can explain, not the two you can recite.",
          "Read all three before you write. Thirty seconds now saves you five minutes.",
          "If two passages have the same theme, pick the one with more to say about daily life.",
          "Never answer all three hoping for the best. You get no extra marks and you lose time on 14-mark questions."
        ],
        example: "The passages are fixed in Appendix 1 of the syllabus. There are 15 of them. Learn the theme of each one — that is a small, finishable job." },
      { ask: "\"Explain the importance of these themes for Muslims today\"",
        steps: [
          "Do not answer in the past tense. This question is about now.",
          "Give a real, ordinary example. Prayer. Honesty in business. How you treat your parents.",
          "Link it back to the passage in one clause: \"because the passage says God sees everything\".",
          "Keep it short. This is usually part of the 4, not a separate essay."
        ],
        example: "Weak: \"It is very important for all Muslims.\" Strong: \"A Muslim who believes God never sleeps does not cheat when nobody is watching.\"" }
    ]
  },

  /* 1 — P1 · History and importance of the Qur'an  (14 marks) */
  1: {
    intro: "Question 2 on Paper 1. Always 14 marks: <b>10 for part (a)</b> and <b>4 for part (b)</b>. Those two parts want completely different things. Mixing them up is the most expensive mistake in this whole subject.",
    patterns: [
      { ask: "Part (a) — 10 marks on the compilation of the Qur'an",
        steps: [
          "Go in order of time. Revelation → memorisation and writing in the Prophet's lifetime → Abu Bakr → Uthman.",
          "Name people. Zayd ibn Thabit. Umar. Hafsa. Names score.",
          "Give the reason for each step, not just the step. Why did Abu Bakr act? Because memorisers died at Yamama.",
          "Aim for six or seven developed points. Not twenty short ones."
        ],
        example: "10 marks does not mean 10 facts. It means about 6 points that each have a fact <b>and</b> a because." },
      { ask: "Part (b) — the 4-mark question",
        steps: [
          "This is asking for <b>your view, with reasons</b>. Not more facts.",
          "Take a clear position in the first sentence.",
          "Give two reasons. Two, not one.",
          "Mention the other side in one line, then say why you still hold your view."
        ],
        example: "Do not repeat part (a) in smaller words. Examiners see that constantly and it scores 1." },
      { ask: "\"Why is the Qur'an the highest authority in Islam?\"",
        steps: [
          "Say it is the direct word of God, unchanged.",
          "Rank the sources: Qur'an first, then Hadith, then consensus (ijma'), then analogy (qiyas).",
          "Say what that ranking means in practice — nothing may contradict the Qur'an.",
          "Give one example of it being used to settle a matter."
        ],
        example: "The four-source ranking is worth learning as one block. It comes up in this topic and again in the Hadith topic on Paper 2." }
    ]
  },

  /* 2 — P1 · Life and importance of the Prophet (pbuh)  (14 marks) */
  2: {
    intro: "The biggest topic on Paper 1 — one or two questions, 14 marks each. Students lose marks here by telling the story and stopping. The story is only worth part of part (a).",
    patterns: [
      { ask: "Any \"describe the events of...\" question",
        steps: [
          "Set the scene in one line: year, place, who was involved.",
          "Give the events in order. Use time words — then, after this, finally.",
          "Say the outcome. Who won, what changed, what was agreed.",
          "Add why it mattered for the Muslim community. This is where the top marks sit."
        ],
        example: "For every event learn three things: <b>what happened, why it happened, what it changed</b>. The third one is what separates a C from an A." },
      { ask: "\"Explain the importance of his actions as an example\"",
        steps: [
          "Name the quality — patience, forgiveness, fairness, courage.",
          "Prove it with one specific incident, not a general claim.",
          "Say what a Muslim today should copy.",
          "Support it with a verse or a Hadith if you know one. The mark scheme rewards this."
        ],
        example: "\"He was kind\" scores almost nothing. \"At the conquest of Makka he forgave the people who had driven him out\" scores." },
      { ask: "Part (b) on this topic",
        steps: [
          "The question is usually \"which was more important\" or \"do you agree\".",
          "Pick one. Sitting on the fence scores badly.",
          "Two reasons, both tied to the Prophet's own conduct.",
          "Four marks means about five or six sentences. Do not write a page."
        ],
        example: "Common trap: writing 300 words for a 4-mark (b) and then running out of time on a 14-mark question. Watch the clock." }
    ]
  },

  /* 3 — P1 · The first Islamic community  (14 marks) */
  3: {
    intro: "This topic is about the people <b>around</b> the Prophet (pbuh) during his lifetime. Careful: the four Caliphs appear here only as companions. Their actual rule belongs to Paper 2. Answering the wrong one wastes an entire question.",
    patterns: [
      { ask: "A question on a named companion or wife",
        steps: [
          "Who they were and how they came to Islam.",
          "Two or three specific things they did.",
          "Their relationship with the Prophet (pbuh).",
          "Why Muslims still remember them — the lesson, not just the fact."
        ],
        example: "Learn a small file on each major figure: Khadija, Aisha, Abu Bakr, Umar, Uthman, Ali, Bilal, Zayd. Four facts each is enough." },
      { ask: "\"Explain the importance of the Emigrants and the Helpers\"",
        steps: [
          "Explain who each group was in one line each.",
          "Describe the brotherhood the Prophet (pbuh) set up between them.",
          "Say what problem it solved — the Muhajirun arrived with nothing.",
          "Say what it shows about the Muslim community: loyalty above tribe."
        ],
        example: "This question is really about unity. Every point you make should push towards that word." },
      { ask: "Making sure you are on the right paper",
        steps: [
          "Abu Bakr choosing to go to the cave with the Prophet (pbuh) → Paper 1.",
          "Abu Bakr fighting the wars of apostasy as Caliph → Paper 2.",
          "Umar accepting Islam in Makka → Paper 1.",
          "Umar setting up the treasury and the calendar → Paper 2."
        ],
        example: "If the event happened while the Prophet (pbuh) was alive, it is Paper 1. That one test sorts almost every case." }
    ]
  },

  /* 4 — P2 · Major teachings in the Hadiths  (Question 1, 8 marks) */
  4: {
    intro: "Question 1 on Paper 2. Four Hadiths are printed, you answer on <b>two</b>, 4 marks each. Same trap as Paper 1: do not retell the Hadith. Explain what it asks a Muslim to do.",
    patterns: [
      { ask: "Any Hadith passage question",
        steps: [
          "Say what the Hadith is teaching, in your own words, in one sentence.",
          "Explain the key idea inside it — sincerity, brotherhood, charity, restraint.",
          "Give one real example of a Muslim living by it.",
          "Say whether it is about the individual or about life in the community. The syllabus splits them that way."
        ],
        example: "4 marks. Teaching → key idea → real example → who it applies to. Then stop." },
      { ask: "Choosing which two Hadiths to answer",
        steps: [
          "Pick the ones where you can name a concrete everyday example.",
          "Avoid a Hadith you only half remember. A wrong meaning loses all four marks.",
          "The set is fixed — 20 Hadiths in Appendix 2 of the syllabus.",
          "Learn them in the two groups: personal conduct, and life with others."
        ],
        example: "Twenty Hadiths, two lines of meaning each. That is one week of revision, and it is 8 guaranteed marks every session." },
      { ask: "Turning a Hadith into a modern example",
        steps: [
          "Use ordinary Pakistani life. School, family, shop, street, neighbours.",
          "Keep it concrete: giving up your seat, returning extra change, not sharing gossip.",
          "One example is enough. Two is padding.",
          "Do not moralise at the examiner. State it and move on."
        ],
        example: "\"A good word is charity\" → helping a classmate who is struggling, instead of laughing at them. That is a mark." }
    ]
  },

  /* 5 — P2 · History and importance of the Hadiths  (14 marks) */
  5: {
    intro: "Question 2 on Paper 2, 14 marks. Most students prepare this badly and it shows. Learn how a Hadith is tested for authenticity properly and you are ahead of most of the room.",
    patterns: [
      { ask: "\"How was the authenticity of a Hadith tested?\"",
        steps: [
          "Define <b>isnad</b> — the chain of people who passed it on.",
          "Define <b>matn</b> — the text itself.",
          "For isnad: were the narrators honest, was their memory sound, did they actually meet?",
          "For matn: does it contradict the Qur'an, or plain reason, or a better-attested Hadith?"
        ],
        example: "Isnad and matn are the two words this whole topic turns on. If they are not in your answer, you are guessing." },
      { ask: "\"Describe the work of the main collectors\"",
        steps: [
          "Name them. Al-Bukhari, Muslim, Abu Dawud, al-Tirmidhi, al-Nasa'i, Ibn Maja for the Sunni six.",
          "Say the difference between <b>musnad</b> (arranged by narrator) and <b>musannaf</b> (arranged by subject).",
          "Give one fact about how carefully they selected — the scale of what they rejected.",
          "Say why this mattered: it protected the Sunna from invention."
        ],
        example: "Do not invent numbers. If you are not certain how many Hadiths someone sifted, say \"a very large number\" and move on. A wrong figure looks worse than no figure." },
      { ask: "Hadith and the Qur'an together",
        steps: [
          "Hadith explains and applies the Qur'an. It never overrules it.",
          "Give an example: the Qur'an orders prayer, the Hadith shows how it is performed.",
          "Then place ijma' and qiyas after both.",
          "That ranking is the answer to a lot of part (b) questions on this topic."
        ],
        example: "Same four-source block as Paper 1. Learn it once, use it in two papers." }
    ]
  },

  /* 6 — P2 · The Rightly Guided Caliphs  (14 marks) */
  6: {
    intro: "One or two questions, 14 marks each. Cambridge almost always frames these as <b>problem and response</b>. If you only memorise achievements you will not answer the question that was asked.",
    patterns: [
      { ask: "\"Describe the difficulties faced by [Caliph] and how he dealt with them\"",
        steps: [
          "Name the difficulty plainly.",
          "Say why it was dangerous for the community.",
          "Say exactly what the Caliph did.",
          "Say the result. Solved, partly solved, or not solved — be honest, it scores either way."
        ],
        example: "Build a two-column sheet per Caliph: problem on the left, response on the right. That sheet answers nearly every question in this topic." },
      { ask: "\"Explain his main achievements\"",
        steps: [
          "Group them: expansion, administration, religion, welfare.",
          "Two or three per group, each with a short 'so what'.",
          "Do not list battles as a shopping list. Say what each one secured.",
          "Finish with the lasting effect on the Muslim state."
        ],
        example: "Umar's administrative reforms — provinces, judges, the treasury, the Hijri calendar — are worth more marks than another battle name." },
      { ask: "Part (b) — \"were they good models for leaders today?\"",
        steps: [
          "Take a side in your first sentence.",
          "Two reasons, each tied to something a Caliph actually did.",
          "One line acknowledging the difficulty — the civil wars were real, do not hide them.",
          "Return to your position and close."
        ],
        example: "An honest answer that admits the hard parts scores better than one that pretends the period was perfect." }
    ]
  },

  /* 7 — P2 · Articles of Faith and Pillars of Islam  (14 marks) */
  7: {
    intro: "One or two questions, 14 marks. The most-revised topic and the most badly answered, because students describe the ritual and stop. Describing is only half the marks. The other half is <b>significance</b>.",
    patterns: [
      { ask: "Any question on a Pillar",
        steps: [
          "Describe how it is performed — the actual steps, in order.",
          "State the conditions and who is exempt. That detail scores.",
          "Explain what it does for the individual: discipline, gratitude, self-control.",
          "Explain what it does for the community: equality, care for the poor, unity."
        ],
        example: "Every Pillar answer needs both halves — <b>the person</b> and <b>the community</b>. Two halves, roughly equal length." },
      { ask: "Any question on an Article of Faith",
        steps: [
          "State the belief clearly and simply.",
          "Give the Qur'anic basis if you know it.",
          "Say how it changes how a Muslim behaves day to day.",
          "For predestination (qadr), handle free will directly — do not dodge it."
        ],
        example: "Belief in the Last Day → a Muslim acts knowing every deed is recorded. Belief becomes behaviour. That link is the mark." },
      { ask: "\"Explain jihad in its full range of meanings\"",
        steps: [
          "Start with the root meaning: struggle or effort.",
          "The greater jihad — the struggle against your own selfishness.",
          "The struggle by tongue and by hand — speaking and acting against wrong.",
          "Armed struggle last, with its strict conditions and limits."
        ],
        example: "The syllabus asks for the <b>full range</b> — physical, mental and spiritual. An answer that covers only one meaning cannot reach the top level." }
    ]
  }
}

};

function howtoFor(subjectId, topicIndex) {
  var s = HOWTO[subjectId];
  return (s && s[topicIndex]) ? s[topicIndex] : null;
}
