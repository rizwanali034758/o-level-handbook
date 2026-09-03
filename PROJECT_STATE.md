# PROJECT STATE — O Level Pakistan

Last updated: 3 September 2026
Read this file at the start of every chat. Update it at the end of every chat that changes something.

---

## 1. WHAT THIS IS

**O Level Pakistan** — a free, public study site for Cambridge O Level and IGCSE students in Pakistan, built by the project owner starting as a personal tool for his niece Horia, now expanding into something bigger.

**Live site:** https://olevelpakistan.com (also: https://rizwanali034758.github.io/o-level-handbook/)
**GitHub repo:** rizwanali034758/o-level-handbook — this is the ONLY real copy of the site. Not any chat, not any zip. The repo.
**Hosting:** GitHub Pages, static HTML, no build step, no dependencies.

### The one-sentence pitch
Every topic from the real Cambridge syllabus, practice questions with the marks explained, and — the thing nobody else offers — step-by-step guidance on how to actually write an answer that scores.

---

## 2. HOW WORK ACTUALLY HAPPENS (read this before starting any task)

1. A new chat starts inside this Project.
2. Claude reads this file first.
3. Claude fetches the CURRENT live files directly from GitHub (`raw.githubusercontent.com/rizwanali034758/o-level-handbook/main/...`) — no zip upload needed to start.
4. Claude does ONE focused task (e.g. "Chemistry how-to guides" or "index ICT past papers").
5. Claude gives back a zip — ideally just the changed files, clearly labelled.
6. Owner uploads it to GitHub, overwriting the old files.
7. That becomes the new live version. Next chat repeats from step 1.

**Golden rule: finish and upload one chat's work before starting a task in another chat.** Running two build chats at once risks one overwriting the other's changes.

**Why separate chats at all:** long chats get expensive fast — every reply reprocesses the entire history above it. One focused task per chat keeps costs down. This file is what lets a brand new chat pick up instantly with zero re-explaining.

---

## 3. THE STUDENT THIS STARTED FOR

- **Horia**, niece of the project owner. Pre-O Level at Tall Pines School, Sheikhupura, Pakistan. Started 2025.
- Her name and school are **not mentioned anywhere on the public site** — removed for privacy once the site went semi-public (classmates now use it).
- Her own English/Urdu level has not yet been measured. The Starting Point Check exists for this but she hasn't taken it. Still the single biggest open unknown about the *original* goal — now secondary to the platform goal below.
- Owner took the English Starting Point Check himself as a benchmark: Level 4/5 (74%), confirmed the test is calibrated correctly (Level 5 misses were fair — science-exam vocabulary, not general fluency).

### Her confirmed subjects and timeline (from Tall Pines, not to be re-guessed)
| Subject | Code | Qualification | Sits |
|---|---|---|---|
| Urdu (Second Language) | 0539 | **IGCSE** | May 2028 |
| Pakistan Studies | 2059 | O Level | May 2028 |
| Islamiyat | 2058 | O Level | May 2028 |
| English Language | 1123 | O Level | May 2029 |
| Mathematics D | 4024 | O Level | May 2029 |
| Physics | 5054 | O Level | May 2029 |
| Chemistry | 5070 | O Level | May 2029 |
| ICT | 0417 | **IGCSE** | May 2029 |

Physics and Chemistry: **Paper 4 (Alternative to Practical)**, not the hands-on Paper 3 — this is what most Pakistani schools enter students for, stated as general guidance on the public site (not framed as "confirmed for her" anymore, since the site is now public).

**Not her subjects:** Biology, Additional Maths. Content for these exists in the build (kept as general reference, tucked into a collapsed "other subjects" section) but is not part of the main plan.

---

## 4. THE GOAL — HAS CHANGED, READ THIS CAREFULLY

**Original goal:** help one struggling student pass her exams.
**Current goal:** build a genuinely useful, original, public study platform for O Level/IGCSE students across Pakistan — "something big," in the owner's words.

This is not abandoning Horia — the site still works for her — but scope, tone, and design decisions should now be made for **a general 14-year-old Pakistani student audience**, not one specific advanced reader.

### Non-negotiable content rules
1. **Never reproduce real Cambridge exam questions, mark schemes, or examiner report text.** Reference real questions by paper/session/number/marks/command word, described in our own words. This is both a legal necessity (copyright) and now enforced sitewide since the site is public.
2. **Never claim affiliation with Cambridge.** `legal.html` and `about.html` state independence clearly. Keep this framing in any new content.
3. All practice questions, "how to answer" guides, and analysis are **original content, written by the project**, explicitly labelled as such (not attributed to Cambridge).

### Tone rules (from this session — apply to ALL new and rewritten content)
- Write for a **14-year-old**, not an adult. Short sentences. Common words.
- Cut filler sections, decorative cards, and repeated explanations. If a paragraph doesn't help a student directly, remove it.
- No walls of text. Long disclaimers get shortened to 1–2 sentences with a link, not a paragraph.

---

## 5. WHAT'S LIVE ON THE SITE RIGHT NOW

### Pages (13 total)
| File | Purpose |
|---|---|
| `index.html` | Home — subject grid by exam sitting, countdowns, resources |
| `today.html` | Daily 3-task study ritual with streak tracking |
| `practice.html` | **NEW** — hub listing all subjects/topics with test links, replaces the old Starting Point nav item |
| `subject.html` | Per-subject page, loads via `?s=physics` |
| `test.html` | Practice questions + real question index + "how to answer" guide, loads via `?s=physics&t=0` |
| `assessment.html` | Starting Point Check (English + Urdu diagnostic) — **removed from main nav**, linked only from the footer now |
| `guide.html` | How-to-study guide |
| `about.html` | Why the site exists, what makes it different, credibility |
| `legal.html` | Terms, Privacy, Copyright — non-affiliation statement, no-data-collection statement |
| `404.html` | Not-found page, branded |
| `logos.html` | **Internal only — delete before wider launch.** Shows 4 logo options for the owner to pick from. |

### Core JS/data files
| File | Purpose |
|---|---|
| `data.js` | 10 subjects in the data, **8 shown** — Biology and Add Maths carry `hidden: true` and are filtered out of every view. Data kept so they can be restored by deleting one flag. |
| `app.js` | Rendering logic, progress tracking, countdowns, mobile menu hooks |
| `ui.js` | Mobile hamburger menu behaviour |
| `questions.js` | **218** original practice questions with mark schemes (Physics 6 topics / 60, Chemistry 11 topics / 110, **Islamiyat 8 topics / 48**) |
| `realquestions.js` | Real past-paper index (Physics: 128 q / 1085 marks / 14 papers 2023–2026. **Islamiyat: 20 q / 256 marks / 4 papers, the complete May-June 2026 session**) + Physics mark-loss analysis (50 notes, original content) |
| `howto.js` | "How to answer" step-by-step guides. Physics: 18 patterns / 6 topics. **Islamiyat: 24 patterns / 8 topics.** |
| `assess.js` | Starting Point Check scoring engine |

### Branding
- **Logo: not finalised.** 4 options built in `logos.html` (bar chart / open book / OL monogram / star badge). Bar chart (Option A) is the current default everywhere but the owner has not confirmed this is the final pick. **Ask before doing more branded work.**
- Colours: Study Violet `#6366F1`, Warm Coral `#FF7A59` accent, Mint `#10B981` success, Amber `#F59E0B` caution.
- Fonts: Baloo 2 (headings), Nunito (body).
- Mobile: hamburger menu, zero horizontal overflow verified via Playwright screenshots at 390px width. Tested, not just assumed.

### Google Drive archive (connector authorised)
Folder: `Cambridge_Archive_2022-2026`. Contains ~830 past papers across all 8 confirmed subjects, 2022–2026 (2024/2025 Oct-Nov sessions missing for some subjects — not fatal, other sessions cover it). **ICT and Urdu had zero papers before this archive — now have ~226 between them.** A `.rar` version also exists in Drive; ignore it, use the folder version only.

**Efficiency finding this session:** papers sourced from PapaCambridge carry ~524 characters of repeated boilerplate per page (margin warnings, watermark, trace ID) — about 35–40% of raw extracted text is noise. A working Python cleaner (regex-based, tested against a real Physics paper, verified it removes zero real content) exists — rebuild it fresh each session by asking Claude to write `clean_papacambridge.py` again, or store it as a Drive file if the owner wants it kept.

---

## 6. WHAT'S DONE vs WHAT'S NOT — BE HONEST ABOUT THIS TO THE USER

### Fully done
- **Physics**: real question index complete (14 papers, 2023–2026, both variants), mark-loss analysis complete, practice questions complete (6 topics), how-to-answer guides complete (6 topics)
- **Islamiyat** (built 3 Sep 2026): practice questions complete (8 topics / 48 questions / 324 marks), how-to-answer guides complete (8 topics / 24 patterns), real question index covers the **whole May-June 2026 session** (2058/11, /12, /21, /22 — 20 questions, 256 marks). Verified against the official 2058 syllabus for 2028 (version 2, April 2026). Earlier sessions (2022–2025) not yet indexed — papers are in Drive and ready.

### Partially done
- **Chemistry**: practice questions complete (11 topics, 170 total combined with Physics), real question index NOT started (14 papers available in Drive, none read yet), how-to-answer guides NOT started

### Not started
- **How-to-answer guides**: 6 of 8 subjects have none (Physics and Islamiyat done)
- **Real question indexing**: 6 of 8 subjects have none (Physics full, Islamiyat 2026 only)
- **ICT and Urdu**: topic breakdowns exist in `data.js` but zero questions, zero real-question index, zero how-to guides — biggest content gap on the site, and now has the most source material (226 papers) of any unindexed subject
- **Maths D, English, Pakistan Studies**: practice questions and how-to guides not started

### AGREED NEXT PRIORITY (do not deviate without asking)
**Owner changed the order on 3 Sep 2026: Islamiyat was built ahead of Chemistry.** Reasoning accepted at the time — Islamiyat sits in the May 2028 window (before Physics/Chemistry in 2029), it is pure text so it is far cheaper to build well, and the (a)/(b) mark split is a genuine gap no other Pakistani site explains.

**The cost of that choice: Chemistry is still half-built and visibly so** — 110 practice questions live, but no real-question index and no how-to guides. A student opening Chemistry sees a subject that looks abandoned. Next chats, in order:
1. **Chemistry real question index** — 14 papers sitting in Drive, none read yet.
2. **Chemistry how-to-answer guides** — 11 topics.
3. Physics mark-scheme direct links (see below).
4. Islamiyat 2022–2025 index backfill (optional, additive).

---

## 7. HARD RULES — DO NOT BREAK

1. **Never reproduce Cambridge question text, mark schemes, or examiner report wording.** Reference by fact (paper/number/marks), describe in our own words.
2. **GCE Guide is banned.** Domain expired, now redirects to a gambling site. Never link it.
3. **Use search links, not fixed URLs**, for third-party notes/videos — fixed links die.
4. **Never invent question numbers, references, or statistics.** If a paper hasn't been read, say so plainly.
5. **Always verify BOTH syllabus year AND qualification type** (O Level vs IGCSE) before building content. Similar names can be different subjects entirely — this exact mistake was made once already (Urdu 3248→0539, "Computer Science" 2210→ICT 0417).
6. **Test before shipping.** Actually run the pages (Playwright/jsdom), don't just eyeball code. Screenshot at mobile width (390px) for any layout change — code review alone missed real bugs this session.
7. **Deliver as a zip** for GitHub upload. Prefer small, labelled zips of just the changed files over full-site zips once the site is large.
8. **No personal names on the public site.** Check for "Horia" or "her/she" language referring to a specific student before shipping any page — this leaked through twice already and had to be caught after the fact.
9. **Write for a 14-year-old.** Check tone before shipping, not after.

---

## 8. OPEN QUESTIONS

### Mark scheme links — half fixed
`test.html` now renders the mark-scheme button from `PAPERS[x].ms` (a direct Drive file link) and only falls back to `.folder` when `ms` is missing. **Islamiyat's 4 papers have `ms` set. Physics' 14 papers do not** — they still drop the student in a folder. The fix is data-only now: pull the 14 Physics mark-scheme file IDs from Drive and add an `ms:` line to each `PAPERS` entry. No code change needed.

### Still open

- [ ] **Which logo?** Options A–D built in `logos.html`. Waiting on owner's pick.
- [ ] Should the mark-loss analysis / paper cleaner script be saved permanently somewhere (e.g. a Drive file) instead of being rebuilt each session?
- [ ] Horia's own Starting Point Check result — still not taken. Lower priority now than the platform work, but not forgotten.
- [ ] At what point does "we" in the site copy need a real identity (owner name, contact method) for student trust? Raised, not resolved.
- [ ] 2024/2025 Oct-Nov sessions missing from the archive for some subjects — worth backfilling later, not urgent (other sessions provide enough coverage).
