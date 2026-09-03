O LEVEL PAKISTAN — Islamiyat build, 3 September 2026
====================================================
Upload ALL files in this folder to the root of the GitHub repo,
overwriting the old versions. No build step. No new files to create.

WHAT CHANGED
------------
NEW CONTENT (Islamiyat 2058, verified against the 2028 syllabus)
  howto.js          + 8 topics of "how to answer" guides (24 answer patterns)
  questions.js      + 48 original practice questions (324 marks) across 8 topics
  realquestions.js  + the complete May-June 2026 session indexed:
                      2058/11, 2058/12, 2058/21, 2058/22 = 20 questions, 256 marks
                      Every entry links straight to the paper AND the mark scheme PDF.

FIXES
  test.html         Mark scheme button now opens the actual mark scheme FILE
                    when we have its link, instead of dumping you in a folder.
                    (Islamiyat has file links. Physics still falls back to the
                    folder until its 14 mark-scheme IDs are added — see
                    PROJECT_STATE.md section 8.)
  data.js / app.js  Biology and Additional Maths are HIDDEN, not deleted.
                    They carry hidden:true and are filtered out of the home grid,
                    the "other subjects" block, and subject-page cross-links.
                    To bring one back: delete its hidden:true line. That's it.
  data.js           Islamiyat copy rewritten for a 14-year-old, and the paper
                    descriptions now state the mark split (Q1 = 8, Q2-5 = 14,
                    made of 10 for part (a) + 4 for part (b)).
  guide.html        Removed a Biology mention.
  all .html         Cache version bumped ?v=12 -> ?v=13 so students actually
                    get the new files instead of a stale cached copy.

PROJECT_STATE.md    Updated. Replace the copy in your Claude Project too.

TESTED (not just eyeballed)
---------------------------
Ran every affected page in a real browser at 390px width:
  index, practice, subject?s=islamiyat, test?s=islamiyat (t=0,2,6,7),
  test?s=physics, today
Result: zero JavaScript errors, zero horizontal overflow on all pages,
no "Horia", no Biology/Add Maths/Computer Science leaking into any view,
all 20 Islamiyat paper references resolve to a real PAPERS entry, and
every mark scheme mark-point count matches its stated mark total.

COPYRIGHT
---------
No Cambridge question text, mark scheme wording or examiner-report wording
is reproduced anywhere. Real questions are referenced by paper, number, marks
and command word, described in our own words. The Qur'an passages and Hadiths
printed in the syllabus are referred to by reference and summarised, never
copied.
