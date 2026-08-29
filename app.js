/* ============================================================
   O LEVEL HUB — SHARED APP LOGIC
   ============================================================ */

/* ---- storage: uses browser storage, falls back to memory ---- */
const _mem = {};
const store = {
  get(k) {
    try { const v = localStorage.getItem(k); return v !== null ? v : (_mem[k] ?? null); }
    catch (e) { return _mem[k] ?? null; }
  },
  set(k, v) {
    _mem[k] = v;
    try { localStorage.setItem(k, v); } catch (e) {}
  }
};

function getProgress(subjectId) {
  try { return JSON.parse(store.get("ol:" + subjectId) || "{}"); }
  catch (e) { return {}; }
}
function saveProgress(subjectId, obj) {
  store.set("ol:" + subjectId, JSON.stringify(obj));
}

/* count total sub-topics for a subject */
function totalSubs(subject) {
  return subject.topics.reduce((n, t) => n + t.subs.length, 0);
}
function doneSubs(subject) {
  const p = getProgress(subject.id);
  return Object.values(p).filter(Boolean).length;
}
function pctDone(subject) {
  const tot = totalSubs(subject);
  return tot ? Math.round(doneSubs(subject) / tot * 100) : 0;
}

/* days until an exam sitting (exams start early May) */
function daysUntil(year) {
  if (!year) return null;
  const exam = new Date(year, 4, 1);
  return Math.max(0, Math.ceil((exam - new Date()) / 86400000));
}
function monthsUntil(year) {
  const d = daysUntil(year);
  return d === null ? null : Math.round(d / 30.44);
}

/* two big exam countdowns for the home page */
function renderCountdowns(el) {
  if (!el) return;
  const sets = [
    { year: 2028, label: "Urdu · Pak Studies · Islamiyat", colour: "#E11D48" },
    { year: 2029, label: "English · Maths · Physics · Chemistry · ICT", colour: "#0D9488" }
  ];
  el.innerHTML = sets.map(s => {
    const d = daysUntil(s.year), m = monthsUntil(s.year);
    return `
      <div class="cdcard" style="--cd:${s.colour}">
        <span class="cdyear">May ${s.year}</span>
        <b class="cddays">${d.toLocaleString()}</b>
        <span class="cdlabel">days to go · about ${m} months</span>
        <span class="cdsubs">${s.label}</span>
      </div>`;
  }).join("");
}

/* one subject card */
function subjectCard(s) {
  const pct = pctDone(s);
  let qtot = 0;
  s.topics.forEach((t, i) => qtot += qcount(s.id, i));
  let rtot = 0;
  try { if (typeof realTotal === "function") rtot = realTotal(s.id); } catch (e) {}
  const badge = s.qual === "IGCSE"
    ? '<span class="qualbadge igcse">IGCSE</span>'
    : '<span class="qualbadge olevel">O LEVEL</span>';
  return `
    <a class="scard" href="subject.html?s=${s.id}" style="--sc:${s.colour}">
      <div class="scard-top">
        <div class="ico" style="background:${s.tint};color:${s.colour}">${s.emoji}</div>
        ${badge}
      </div>
      <h3>${s.name}</h3>
      <span class="code">${s.code} · syllabus ${s.syllabusYears}</span>
      <p>${s.oneLine}</p>
      <div class="scard-bar"><span style="width:${pct}%;background:${s.colour}"></span></div>
      <div class="meta">
        <span>${s.topics.length} topics${rtot ? " · " + rtot + " real Qs" : qtot ? " · " + qtot + " Qs" : ""}</span>
        <span class="pill" style="background:${s.tint};color:${s.colour}">${pct}%</span>
      </div>
    </a>`;
}

/* ---- build the subject grid, grouped by exam sitting ---- */
function renderSubjectGrid(el) {
  const groups = [
    { year: 2028, title: "May 2028", sub: "The language and writing set — all answered in English" },
    { year: 2029, title: "May 2029", sub: "The science, maths and ICT set" }
  ];
  let html = "";
  groups.forEach(g => {
    const subs = SUBJECTS.filter(s => s.sitting === g.year);
    if (!subs.length) return;
    const d = daysUntil(g.year), m = monthsUntil(g.year);
    html += `
      <div class="sitting">
        <div class="sitting-head">
          <div>
            <h3>${g.title}</h3>
            <p>${g.sub}</p>
          </div>
          <div class="countdown-chip">
            <b>${d.toLocaleString()}</b><span>days left · about ${m} months</span>
          </div>
        </div>
        <div class="subjects">${subs.map(subjectCard).join("")}</div>
      </div>`;
  });

  const others = SUBJECTS.filter(s => s.notHers);
  if (others.length) {
    html += `
      <details class="othersubs">
        <summary>Other subjects (not on this study plan) — ${others.length}</summary>
        <p class="sub" style="margin:12px 0">These were built earlier and are kept as general reference. They are <b>not</b> part of the current study plan, so skip them unless your school says otherwise.</p>
        <div class="subjects">${others.map(subjectCard).join("")}</div>
      </details>`;
  }
  el.innerHTML = html;
}

/* ---- overall progress across all subjects ---- */
function renderOverall(el) {
  let tot = 0, done = 0;
  SUBJECTS.forEach(s => { tot += totalSubs(s); done += doneSubs(s); });
  const pct = tot ? Math.round(done / tot * 100) : 0;
  el.innerHTML = `
    <div class="progtop">
      <b>Your overall progress</b>
      <span class="pct" style="color:var(--brand)">${pct}%</span>
    </div>
    <div class="track"><div class="fill" style="width:${pct}%;background:linear-gradient(90deg,var(--brand),var(--brand-2))"></div></div>
    <p class="hint">${done} of ${tot} sub-topics ticked off. Saved in this browser only — it will not follow you to another phone.</p>`;
}

/* ---- build the resource cards ---- */
function renderResources(el) {
  el.innerHTML = RESOURCES.map(r => `
    <div class="card">
      <h4>${r.emoji} ${r.name} ${r.official ? '<span class="pill" style="background:#E9F8EF;color:#16A34A">OFFICIAL</span>' : ''}</h4>
      <p>${r.what}</p>
      <p style="margin-top:9px"><a href="${r.url}" target="_blank" rel="noopener">Open site →</a></p>
    </div>`).join("");
}

/* ---- build a full subject page ---- */
function renderSubjectPage(subject) {
  document.title = subject.name + " " + subject.code + " — O Level Hub";

  /* hero */
  const hero = document.getElementById("subhero");
  hero.style.background = `linear-gradient(135deg,${subject.colour},${shade(subject.colour, -22)})`;
  const d = daysUntil(subject.sitting);
  const m = monthsUntil(subject.sitting);
  hero.innerHTML = `
    <span class="bigico">${subject.emoji}</span>
    <h1>${subject.name}</h1>
    <div class="codeline">
      <span>${subject.qual || "O Level"} ${subject.code}</span>
      <span>Syllabus ${subject.syllabusYears}</span>
      <span>${subject.topics.length} topics</span>
      ${subject.sitting ? `<span class="hot">Exam May ${subject.sitting}</span>` : ""}
    </div>
    <p>${subject.oneLine}</p>
    ${d !== null && subject.sitting ? `
      <div class="herocount">
        <b>${d.toLocaleString()}</b> days until the exam <span>· about ${m} months</span>
      </div>` : ""}
    <a class="syllink" href="${subject.syllabusUrl}" target="_blank" rel="noopener"
       style="color:${subject.colour}">📥 Get the official syllabus</a>`;

  /* subject-specific warnings */
  const warnEl = document.getElementById("subwarn");
  if (warnEl) {
    let w = "";
    if (subject.notHers) {
      w = `<div class="notice"><b>⚠️ Not on this study plan</b>
        This was built earlier and is kept as general reference only. This is not part of the current study plan — don't spend time here.</div>`;
    } else if (subject.id === "urdu") {
      w = `<div class="notice"><b>🎧 Careful — this is IGCSE 0539, not O Level Urdu</b>
        A third of this grade is a <b>listening exam</b>, which the old O Level Urdu course did not have.
        Books and past papers labelled 3247 or 3248 will not prepare you for it. Start listening practice early — it is the one skill that cannot be crammed.</div>`;
    } else if (subject.id === "ict") {
      w = `<div class="notice"><b>💻 This is ICT 0417, not Computer Science 2210</b>
        Different subject, despite the similar sound. ICT is about <b>using software well</b> — documents, spreadsheets, databases, presentations, websites.
        Computer Science is about programming. <b>60% of this grade is two hands-on practical exams</b>, so reading alone will not work.</div>`;
    } else if (subject.id === "physics" || subject.id === "chemistry") {
      w = `<div class="notice green"><b>✅ Which practical paper?</b>
        Most Pakistani schools enter students for <b>Paper 4, the written Alternative to Practical</b> — not the hands-on Paper 3. It still tests experiments, but on paper: apparatus, readings, tables, graphs and conclusions.</div>`;
    }
    warnEl.innerHTML = w;
  }

  /* papers */
  document.getElementById("papers").innerHTML = subject.papers.map(p => `
    <div class="paper" style="border-left-color:${subject.colour}">
      <h4>${p.name}</h4>
      <div class="pmeta">${p.time} · ${p.marks}</div>
      <p>${p.what}</p>
    </div>`).join("");

  /* book */
  document.getElementById("book").innerHTML = `
    <div class="card">
      <h4>📗 Your main book</h4>
      <p style="color:var(--ink);font-weight:800;margin-bottom:4px">${subject.book.title}</p>
      <p>${subject.book.author}</p>
      <p style="margin-top:9px">${subject.book.endorsed
        ? '<span class="pill" style="background:#E9F8EF;color:#16A34A">✓ Cambridge-endorsed</span>'
        : '<span class="pill" style="background:#FFF8E6;color:#B45309">⚠ Not officially endorsed — check locally</span>'}</p>
    </div>
    <div class="card">
      <h4>🎯 How to study this subject</h4>
      <ul class="ticks">${subject.howToStudy.map(h => `<li>${h}</li>`).join("")}</ul>
    </div>`;

  /* progress bar */
  const prog = document.getElementById("prog");
  function paintProgress() {
    const pct = pctDone(subject);
    prog.innerHTML = `
      <div class="progtop">
        <b>${subject.name} progress</b>
        <span class="pct" style="color:${subject.colour}">${pct}%</span>
      </div>
      <div class="track"><div class="fill" style="width:${pct}%;background:${subject.colour}"></div></div>
      <p class="hint">${doneSubs(subject)} of ${totalSubs(subject)} sub-topics done. Tick them as you finish each one.</p>`;
  }
  paintProgress();

  /* examiner key messages for the whole subject */
  const exs = (typeof EXAMINER !== "undefined") ? EXAMINER[subject.id] : null;
  const exBox = document.getElementById("exkeys");
  if (exs && exBox) {
    exBox.hidden = false;
    exBox.innerHTML =
      '<h2>How to not lose easy marks</h2>' +
      '<p class="sub">Written by us, from ' + exs.source + '. These apply to every question in the paper.</p>' +
      '<div class="excard"><ul>' + exs.keyMessages.map(m => "<li>" + m + "</li>").join("") + "</ul></div>";
  }

  /* topics */
  const progress = getProgress(subject.id);
  const wrap = document.getElementById("topics");
  wrap.innerHTML = subject.topics.map((t, ti) => {
    const done = t.subs.filter((_, si) => progress[ti + "-" + si]).length;
    return `
    <details class="topic" ${ti === 0 ? "open" : ""}>
      <summary>
        <span class="chev" style="background:${subject.colour}">+</span>
        <span class="tname">${t.t}</span>
        <span class="tcount" data-c="${ti}">${done}/${t.subs.length}</span>
      </summary>
      <div class="tbody">
        ${t.subs.map((s, si) => `
          <div class="subrow">
            <input type="checkbox" class="box" id="c${ti}-${si}" data-t="${ti}" data-s="${si}"
              ${progress[ti + "-" + si] ? "checked" : ""}>
            <label for="c${ti}-${si}">${s}</label>
          </div>`).join("")}
        <div class="tiprow"><b>💡 Where the marks are</b>${t.tip}</div>
        <div class="linkrow">
          <a class="linkbtn test" href="test.html?s=${subject.id}&t=${ti}"
             style="background:${subject.colour};color:#fff;border-color:${subject.colour}">
             🧠 Test${testLabel(subject.id, ti)}</a>
          <a class="linkbtn" target="_blank" rel="noopener"
             href="${yt(subject.name, subject.code, t.t)}">▶️ Video lessons</a>
          <a class="linkbtn" target="_blank" rel="noopener"
             href="${notesLink(subject.name, subject.code, t.t)}">📝 Notes</a>
          <a class="linkbtn" target="_blank" rel="noopener"
             href="${topicalLink(subject.name, subject.code, t.t)}">📄 Past papers</a>
        </div>
      </div>
    </details>`;
  }).join("");

  /* checkbox behaviour */
  wrap.querySelectorAll("input.box").forEach(cb => {
    cb.addEventListener("change", () => {
      const ti = cb.dataset.t, si = cb.dataset.s;
      progress[ti + "-" + si] = cb.checked;
      saveProgress(subject.id, progress);
      const t = subject.topics[ti];
      const done = t.subs.filter((_, j) => progress[ti + "-" + j]).length;
      wrap.querySelector(`[data-c="${ti}"]`).textContent = done + "/" + t.subs.length;
      paintProgress();
    });
  });

  /* reset */
  const reset = document.getElementById("resetBtn");
  if (reset) {
    reset.addEventListener("click", () => {
      if (!confirm("Clear all your ticks for " + subject.name + "? This cannot be undone.")) return;
      saveProgress(subject.id, {});
      location.reload();
    });
  }

  /* other subjects strip */
  const others = document.getElementById("others");
  if (others) {
    others.innerHTML = SUBJECTS.filter(s => s.id !== subject.id).map(s => `
      <a class="scard" href="subject.html?s=${s.id}">
        <div class="ico" style="background:${s.tint};color:${s.colour}">${s.emoji}</div>
        <h3>${s.name}</h3>
        <span class="code">${s.code}</span>
      </a>`).join("");
  }
}

/* darken/lighten a hex colour */
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + amt, g = ((n >> 8) & 0xff) + amt, b = (n & 0xff) + amt;
  r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* how many practice questions exist for a topic (0 if none written yet) */
function qcount(subjectId, topicIndex) {
  try {
    if (typeof QUESTIONS === "undefined") return 0;
    const s = QUESTIONS[subjectId];
    return (s && s[topicIndex]) ? s[topicIndex].length : 0;
  } catch (e) { return 0; }
}

/* label for the Test button: practice + real question counts */
function testLabel(subjectId, topicIndex) {
  const p = qcount(subjectId, topicIndex);
  let r = 0;
  try { if (typeof realCount === "function") r = realCount(subjectId, topicIndex); } catch (e) { r = 0; }
  if (!p && !r) return "";
  const bits = [];
  if (p) bits.push(p + " practice");
  if (r) bits.push(r + " real");
  return " (" + bits.join(" + ") + ")";
}

/* read ?s= from the URL */
function currentSubject() {
  const id = new URLSearchParams(location.search).get("s");
  return SUBJECTS.find(s => s.id === id) || null;
}
