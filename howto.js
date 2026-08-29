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
}

};

function howtoFor(subjectId, topicIndex) {
  var s = HOWTO[subjectId];
  return (s && s[topicIndex]) ? s[topicIndex] : null;
}
