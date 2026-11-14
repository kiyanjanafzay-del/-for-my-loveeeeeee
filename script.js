/* ============ CONFIG — change texts, dates, lyrics, pictures here ============ */
const CONFIG = {
  name: "Aynaz",
  metDate: "2024-08-09",
  welcome: { title: "FOR MY PRINCESS ♡", sub: "Hey, my favorite princess ♡", shout: "LOVEEEEEE YOUUUU", button: "Open ♡" },
  menuTitle: "Choose where to go, my love ♡",
  music: { volume: 0.4, fadeMs: 2000 },
  floatingLines: [
    "You are my favorite place, my love ♡",
    "Every little detail leads back to you ♡",
    "My heart found its home in you, darling ♡",
    "FOR MY PRINCESS. LOVEEEEEE YOUUUU ♡",
    "Even the darkest night is soft with you, honey ♡"
  ],
  pages: [
    { id: "met", icon: "🌹", name: "The Day We Met", anim: "fadeUp",
      bg: "linear-gradient(160deg,rgba(18,4,11,.9),rgba(255,160,200,.4)),url(us.jpg) center/cover",
      slides: [
        { t: "August 9, 2024.\nA day that looked so ordinary,\nand quietly changed my whole life.", img: "us.jpg" },
        { t: "I didn't know it yet, but I had just met my favorite person in the world.\n\nSince then, {days} days have passed, my princess, and I'd choose you in every single one." },
        { t: "You came into my life softly, like a light turned on in a dark room.\nAnd suddenly everything made sense, darling." }
      ] },
    { id: "fav", icon: "💌", name: "Your Favorite Day", anim: "zoom",
      bg: "linear-gradient(200deg,#ffd1e3 -20%,#5a0f2b 60%,#12040b)",
      slides: [
        { t: "Now it's your turn, my love.\nLook back at everything we lived together…" },
        { q: "Which was your favorite day with me?", ph: "Tell me why, my love…", reply: "I'm keeping every word of this, my princess ♡",
          options: ["The day we met (9 Aug 2024)", "A night walk with you", "The first time we held hands", "A random ordinary day", "Today ♡"] }
      ] },
    { id: "song", icon: "🎵", name: "Our Song", anim: "blur", auto: 7000,
      bg: "radial-gradient(circle at 70% 20%,rgba(255,143,189,.55),transparent 55%),linear-gradient(#12040b,#2b0a1c)",
      slides: [
        { title: "FOR MY LOVE ♡", t: "A song I wrote\nwith you in my heart" },
        { rtl: 1, t: "میخونم برات تا صبح الان\nمی‌خوام بمونم تو بغلت\nولت نمیکنم مثل قبلا ای\nمیگیرمت اگر بکنی خودت پرت باز" },
        { rtl: 1, t: "نمیزارم ی زخم بیوفته رو دلت\nتو بهترین منی\nکه میمیرم برات\nحتی فکرشم نکن که بزنی تو رگات" },
        { rtl: 1, t: "میمیرم اگه نباشی ی شب پیشم\nکش موت تو دستمه مثل همیشه هم\nاگه خسته ای سرتو بزار رو شونم\nاگر خواستی برات تا صبح میخونم" },
        { rtl: 1, t: "بزار خوابم ببره با صدات\nمیخوابم راحت باهات\nتو مال منی\nنمیزارم از بغلم بری" },
        { rtl: 1, t: "ما همیشگی می‌مونیم\nهمیشه تو بغلم میمونی\nمن که گفتم نکن اصن\nچرا برگشتی باز؟" },
        { rtl: 1, t: "چشاتو نمیره از یادم هر چقدرم باز\nآرزومه هر وقت میخوابم شبا\nببینمت هر شب دیگه تو خوابام\nهوا سرده بندر هنوز" },
        { rtl: 1, t: "منم و یدونه\nکشت موت تو دستم نمیخوامش دیگه\nمونده حرفات تو دلم\nدروغ چرا دیگه بگم" },
        { rtl: 1, t: "دلم تنگ شده برات دیگه خوشگلم\nچرا بد شدی دیگه تو باهام نشو سرد باهام\nدوستت دارم برا همیشه هم که میمونم\nقهرتم که قشنگه وای خندت ی چیز دیگس" }
      ] },
    { id: "moments", icon: "📸", name: "Little Moments", anim: "slide",
      bg: "linear-gradient(160deg,rgba(18,4,11,.9),rgba(255,170,205,.35)),url(collage.jpg) center/cover",
      slides: [
        { img: "hands.jpg", t: "Your hand in mine,\nand the whole dark night feels safe.\nNo words needed, honey." },
        { img: "collage.jpg", t: "Your eyes, your smile, the little things only I know.\nI keep every one of them like treasure ♡" },
        { img: "baby1.jpg", t: "Smiles like this one remind me how pure happiness is.\nThat's the kind of happiness you give me." },
        { img: "baby2.jpg", t: "Soft little smile, soft little heart.\nI want to protect that smile forever." }
      ] },
    { id: "promise", icon: "🤍", name: "My Promises", anim: "flip",
      bg: "linear-gradient(130deg,#12040b 20%,#7a1a47 70%,#ffb3d1 130%)",
      slides: [
        { t: "I promise to hold your hand through the quiet nights and the loud days, my love." },
        { t: "If you ever tried to fall,\nI would catch you anytime in my arms." },
        { t: "You will never be alone with your worries, honey.\nTell me everything. I'll listen until morning." },
        { t: "You're my home, my calm, my favorite person.\n\nFOR MY PRINCESS.\nLOVEEEEEE YOUUUU ♡" }
      ] },
    { id: "note", icon: "💖", name: "A Note For You", anim: "rise", locked: true,
      bg: "radial-gradient(circle at 50% 0%,rgba(255,143,189,.5),transparent 60%),linear-gradient(#12040b,#3a0a1d)",
      slides: [
        { final: 1, title: "My princess Aynaz,",
          t: "I wrote songs and built this little world, and still nothing is big enough to say what you mean to me.\n\nThank you for your smile, your patience and your heart. I'm here tonight, tomorrow and always, whatever the weather, wherever life takes us.\n\nI love you more than words, darling.",
          imgs: ["us.jpg", "hands.jpg", "collage.jpg"], sign: "You're all mine", from: "— Your chocolate ♡" }
      ] }
  ]
};
/* =============================================================================== */

const $ = s => document.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = { get(k){ try { return localStorage.getItem(k); } catch { return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch {} } };
const readJSON = (k, d) => { try { return JSON.parse(store.get(k)) ?? d; } catch { return d; } };
const days = Math.max(0, Math.floor((Date.now() - new Date(CONFIG.metDate + "T00:00:00")) / 864e5));
const P = CONFIG.pages, W = CONFIG.welcome;
const DEFAULT_BG = "linear-gradient(160deg,#12040b 10%,#4a1030 55%,#ffb3d1 150%)";
let visited = new Set(readJSON("visited", [])), view = "welcome", idx = 0, timer = null, muted = false;

const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const allDone = () => P.every(p => p.locked || visited.has(p.id));
function setBg(b){ const e = $("#bg"); e.style.opacity = 0; setTimeout(() => { e.style.background = b; e.style.opacity = 1; }, reduce ? 0 : 350); }
function lines(cls, text, rtl){
  const p = el("p", cls); if (rtl) p.dir = "rtl";
  text.replace("{days}", days).split("\n").forEach((l, n) => { const s = el("span", 0, l || "&nbsp;"); s.style.setProperty("--d", n); p.append(s); });
  return p;
}
const pic = src => { const i = el("img"); i.src = src; i.alt = "A memory of us"; return i; };
const go = (v, i = 0) => { clearInterval(timer); view = v; idx = i; if (song.paused) playMusic(); render(); };

function render(){
  const st = $("#stage"); st.replaceChildren();
  const box = el("section", "slide");
  $("#back").hidden = view === "welcome"; $("#home").hidden = view === "welcome" || view === "menu";
  $("#prog").textContent = view === "welcome" ? "" : `${visited.size}/${P.length} ♡`;

  if (view === "welcome") {
    setBg(DEFAULT_BG); box.dataset.anim = "zoom";
    const b = el("button", "btn", W.button); b.onclick = () => go("menu");
    box.append(el("h1", 0, W.title), el("p", "sub", W.sub), el("p", "shout", W.shout), b);
  } else if (view === "menu") {
    setBg(DEFAULT_BG); box.dataset.anim = "fadeUp"; box.append(el("h2", 0, CONFIG.menuTitle));
    const g = el("div", "grid");
    P.forEach((p, k) => { const lock = p.locked && !allDone(); const b = el("button", "opt", `<span>${lock ? "🔒" : p.icon}</span>${p.name}`); b.disabled = lock; b.onclick = () => go(k); g.append(b); });
    box.append(g);
    if (!allDone()) box.append(el("p", "hint", "The last note opens after you explore everything ♡"));
  } else {
    const p = P[view], s = p.slides[idx], last = idx === p.slides.length - 1;
    setBg(p.bg); box.dataset.anim = p.anim;
    if (last) { visited.add(p.id); store.set("visited", JSON.stringify([...visited])); $("#prog").textContent = `${visited.size}/${P.length} ♡`; }
    if (s.title) box.append(el("h2", 0, s.title));
    if (s.q) {
      box.append(el("h2", 0, s.q));
      const saved = readJSON("fav", {}); let pick = saved.day || null; const o = el("div", "grid");
      s.options.forEach(x => { const b = el("button", "opt" + (pick === x ? " sel" : ""), ""); b.textContent = x;
        b.onclick = () => { pick = x; o.querySelectorAll(".opt").forEach(n => n.classList.toggle("sel", n === b)); }; o.append(b); });
      const ta = el("textarea"); ta.rows = 3; ta.placeholder = s.ph; ta.value = saved.note || ""; ta.setAttribute("aria-label", "Your comment");
      const rep = el("p", "hint"), sv = el("button", "btn small", "Save my answer ♡"), cp = el("button", "btn small ghost", "Copy to send me");
      sv.onclick = () => { if (!pick) { rep.textContent = "Pick a day first, princess ♡"; return; } store.set("fav", JSON.stringify({ day: pick, note: ta.value })); rep.textContent = s.reply; };
      cp.onclick = async () => { try { await navigator.clipboard.writeText(`${CONFIG.name}'s favorite day: ${pick || "-"}\n"${ta.value}"`); cp.textContent = "Copied ♡"; } catch { cp.textContent = "Copy not available"; } };
      box.append(o, ta, sv, cp, rep);
    } else {
      if (s.img) box.append(pic(s.img));
      if (s.t) box.append(lines(s.rtl ? "lyric" : "text", s.t, s.rtl));
      if (s.final) {
        const row = el("div", "pics"); s.imgs.forEach(src => row.append(pic(src)));
        box.append(row, el("p", "sign", s.sign), el("p", "from", s.from));
      }
    }
    const nav = el("div", "nav"), dots = el("div", "dots");
    p.slides.forEach((_, k) => dots.append(el("i", k === idx ? "on" : "")));
    const nx = el("button", "btn", last ? "Back to menu ♡" : "Next ›"); nx.onclick = () => last ? go("menu") : go(view, idx + 1);
    nav.append(dots, nx); box.append(nav);
    if (p.auto && !last) timer = setInterval(() => go(view, idx + 1), p.auto);
  }
  st.append(box);
}
$("#back").onclick = () => { if (typeof view === "number" && idx > 0) go(view, idx - 1); else go(view === "menu" ? "welcome" : "menu"); };
$("#home").onclick = () => go("menu");

/* Music (starts on her first tap, fades in softly) */
const song = $("#song"); let fadeT;
function fadeTo(v, done){
  clearInterval(fadeT); const step = (v - song.volume) / (CONFIG.music.fadeMs / 50);
  fadeT = setInterval(() => { song.volume = Math.min(1, Math.max(0, song.volume + step));
    if (Math.abs(song.volume - v) <= Math.abs(step) + .001) { song.volume = v; clearInterval(fadeT); done && done(); } }, 50);
}
function playMusic(){ if (muted) return; song.volume = 0; song.play().then(() => { fadeTo(CONFIG.music.volume); $("#music").setAttribute("aria-pressed", true); }).catch(() => {}); }
$("#music").onclick = () => { if (song.paused) { muted = false; playMusic(); } else { muted = true; fadeTo(0, () => { song.pause(); $("#music").setAttribute("aria-pressed", false); }); } };

/* Floating hearts + rotating love lines */
if (!reduce) {
  const H = $("#hearts"), cols = ["#ff8fbd", "#ffd1e3", "#f0cf8b", "#fff"];
  setInterval(() => { if (H.childElementCount > 22) return;
    const h = el("i", 0, ["♥", "♡", "✦"][Math.random() * 3 | 0]);
    h.style.cssText = `left:${Math.random() * 100}vw;font-size:${12 + Math.random() * 18}px;animation-duration:${7 + Math.random() * 6}s;color:${cols[Math.random() * 4 | 0]}`;
    H.append(h); h.onanimationend = () => h.remove(); }, 800);
}
let li = 0; const tag = $("#tag"); tag.textContent = CONFIG.floatingLines[0];
setInterval(() => { tag.style.opacity = 0; setTimeout(() => { tag.textContent = CONFIG.floatingLines[++li % CONFIG.floatingLines.length]; tag.style.opacity = 1; }, 600); }, 6000);

render();
