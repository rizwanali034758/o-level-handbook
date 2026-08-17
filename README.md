# O Level Hub

A free Cambridge O Level study site. Every topic from the official syllabus, the right textbooks, free notes, past papers and video lessons — with progress tracking.

Built for the **2027** exam series. Made with students in Pakistan in mind.

## What's inside

- **10 subjects** — Maths D, Additional Maths, Physics, Chemistry, Biology, Computer Science, English, Urdu, Pakistan Studies, Islamiyat
- **99 topics** and **570 sub-topics**, taken directly from the official Cambridge syllabus documents
- A tickable checklist for every sub-topic, with progress saved in your browser
- A "where the marks are" tip for every topic
- Paper structure, timings and marks for each subject
- The Cambridge-endorsed textbook for each subject (and an honest warning where none exists)
- Links to free notes, past papers and video lessons per topic
- A plain-English guide to *how* to study

## Files

| File | What it does |
|---|---|
| `index.html` | Home page — subject grid, progress, free resources |
| `subject.html` | Subject page — loads via `?s=physics` etc. |
| `guide.html` | How-to-study guide |
| `data.js` | All syllabus data. **Edit this to update content.** |
| `app.js` | Rendering and progress-tracking logic |
| `style.css` | All styling |

## Hosting it

Upload every file to a GitHub repo, then turn on **Settings → Pages → Deploy from a branch → main → / (root)**. `index.html` becomes your home page automatically.

## Updating the content

Almost everything lives in `data.js`. To add a topic, find the subject and add to its `topics` array:

```js
{ t: "Topic name", subs: ["Sub-topic 1", "Sub-topic 2"], tip: "Where marks are won or lost." }
```

No build step, no dependencies. Edit, commit, done.

## Honest notes on sources

- Topic lists come from official Cambridge International syllabus PDFs, linked on each subject page.
- Notes and past-paper links point to **independent community sites** (GCE Guide, PapaCambridge, PastPapers.co, ZNotes, Mega Lecture, Mojza). These are free and widely used, but **not affiliated with Cambridge**.
- Real exam questions are **not** reproduced here — Cambridge owns that copyright. Instead each topic links to the archives where you can get the questions *and* the official mark schemes.
- Video links are YouTube **search** links, not fixed videos, so they never break and always show current content.
- Syllabus versions, textbook editions and registration deadlines change. Always confirm on the official Cambridge and British Council sites.

## Licence

Free to use, fork and adapt for your own studies.
