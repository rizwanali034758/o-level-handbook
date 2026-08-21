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

/* ---- build the subject grid on the home page ---- */
function renderSubjectGrid(el) {
  el.innerHTML = SUBJECTS.map(s => {
    const pct = pctDone(s);
    let qtot = 0;
    s.topics.forEach((t, i) => qtot += qcount(s.id, i));
    return `
    <a class="scard" href="subject.html?s=${s.id}" style="border-color:${pct > 0 ? s.colour + '40' : 'transparent'}">
      <div class="ico" style="background:${s.tint};color:${s.colour}">${s.emoji}</div>
      <h3>${s.name}</h3>
      <span class="code">SYLLABUS ${s.code}</span>
      <p>${s.oneLine}</p>
      <div class="meta">
        <span>${s.topics.length} topics${qtot ? " · " + qtot + " questions" : ""}</span>
        <span class="pill" style="background:${s.tint};color:${s.colour}">${pct}% done</span>
      </div>
    </a>`;
  }).join("");
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
  hero.innerHTML = `
    <span class="bigico">${subject.emoji}</span>
    <h1>${subject.name}</h1>
    <div class="codeline">
      <span>Code ${subject.code}</span>
      <span>Syllabus ${subject.syllabusYears}</span>
      <span>${subject.topics.length} topics</span>
    </div>
    <p>${subject.oneLine}</p>
    <a class="syllink" href="${subject.syllabusUrl}" target="_blank" rel="noopener"
       style="color:${subject.colour}">📥 Get the official syllabus</a>`;

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
      '<h2>What examiners want from you</h2>' +
      '<p class="sub">From Cambridge\'s own <b>' + exs.source + '</b>. These apply to every question in the paper.</p>' +
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
