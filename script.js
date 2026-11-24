/* =====================================================================
   STEP 1: CUSTOMIZE YOUR BOOK HERE (Title, Song, Photos, Lyrics & Times)
   ===================================================================== */
const BOOK_CONFIG = {
  coverTitle: "For You, On Your Birthday",
  coverSubtitle: "Every chapter, every melody, every memory with you",
  coverDate: "Happy Birthday, My Love",

  backCoverTitle: "Here's to All Our Tomorrows",
  backCoverMessage:
    "Thank you for being my favorite song, my best friend, and the brightest part of every single day. Wishing you the happiest birthday.",
  backCoverSignature: "Forever yours ♥",
  backCoverBouquet: "./assets/delphinium-bouquet.png",

  // Text shown directly below the bouquet when you click it on the back cover
  bouquetBloomTitle: "Delphiniums for My Dearest 🩵",
  bouquetBloomMessage:
    "A symbol of pure joy, warmth, and every bright chapter ahead of us. Happy Birthday, my love ♥",

  // Configured specifically for LANY - ILYSB (STRIPPED)
  audioSrc: "./assets/ilysb.mp3",
  songTitle: "ILYSB - STRIPPED",
  songArtist: "LANY",
  lyricOffset: 0, // Nudge in seconds if needed (e.g., -1.5 if lyrics are late, +1.5 if early)

  // Folder containing photo1.jpg, photo2.jpg, ...
  photoFolder: "./assets/pictures",

  // Duration (in seconds) used if falling back to the built-in demo melody
  demoDuration: 36,

  // Initial placeholder spread (replaced automatically once lyrics load)
  spreads: [
    {
      timestamp: 0,
      photoSrc: "./assets/pictures/photo1.jpg",
      polaroidCaption: '"Loading..."',
      lyrics: ["Loading ILYSB (STRIPPED) lyrics..."]
    }
  ]
};

/* =====================================================================
   ILLUSTRATED POLAROID ARTWORK (Shown automatically if a photo fails/is empty)
   ===================================================================== */
const FALLBACK_ARTWORKS = [
  `<svg viewBox="0 0 300 300" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1f1c38"/>
        <stop offset="100%" stop-color="#5b3754"/>
      </linearGradient>
    </defs>
    <rect width="300" height="300" fill="url(#sky0)"/>
    <circle cx="220" cy="74" r="26" fill="#f7e2a6"/>
    <circle cx="231" cy="68" r="23" fill="#2c2342"/>
    <circle cx="68" cy="62" r="2.2" fill="#fff3c4"/>
    <circle cx="115" cy="45" r="1.8" fill="#fff3c4"/>
    <circle cx="156" cy="86" r="2.5" fill="#fff3c4"/>
    <circle cx="88" cy="118" r="1.6" fill="#fff3c4"/>
    <circle cx="255" cy="130" r="2" fill="#fff3c4"/>
    <path d="M0 225 Q90 185 180 218 T300 205 L300 300 L0 300 Z" fill="#23172b"/>
    <path d="M0 248 Q120 220 230 250 T300 242 L300 300 L0 300 Z" fill="#150d1a"/>
  </svg>`,
  `<svg viewBox="0 0 300 300" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="warm1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f6d5b8"/>
        <stop offset="100%" stop-color="#d98b7c"/>
      </linearGradient>
    </defs>
    <rect width="300" height="300" fill="url(#warm1)"/>
    <circle cx="150" cy="110" r="68" fill="#fff2dc" opacity="0.55"/>
    <path d="M98 165 h104 v32 a34 34 0 0 1 -34 34 h-36 a34 34 0 0 1 -34 -34 z" fill="#fffaf3"/>
    <path d="M202 175 h16 a14 14 0 0 1 0 28 h-16" fill="none" stroke="#fffaf3" stroke-width="8"/>
    <ellipse cx="150" cy="165" rx="52" ry="10" fill="#8b5542"/>
    <path d="M132 136 Q124 118 135 102" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
    <path d="M162 132 Q154 114 165 96" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
    <rect x="0" y="231" width="300" height="69" fill="#6d3e3b"/>
  </svg>`,
  `<svg viewBox="0 0 300 300" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunset2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f2a679"/>
        <stop offset="58%" stop-color="#c95d6d"/>
        <stop offset="100%" stop-color="#482947"/>
      </linearGradient>
    </defs>
    <rect width="300" height="300" fill="url(#sunset2)"/>
    <circle cx="150" cy="168" r="46" fill="#ffe6a3"/>
    <rect x="0" y="172" width="300" height="128" fill="#3a233d"/>
    <path d="M25 198 Q85 190 145 198 T275 198" fill="none" stroke="#f5b982" stroke-width="3" stroke-linecap="round" opacity="0.65"/>
    <path d="M55 224 Q115 216 175 224 T260 224" fill="none" stroke="#f5b982" stroke-width="2.5" stroke-linecap="round" opacity="0.45"/>
    <path d="M85 250 Q150 244 215 250" fill="none" stroke="#f5b982" stroke-width="2" stroke-linecap="round" opacity="0.35"/>
  </svg>`,
  `<svg viewBox="0 0 300 300" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow3" cx="50%" cy="38%" r="55%">
        <stop offset="0%" stop-color="#5a2c3d"/>
        <stop offset="100%" stop-color="#22121a"/>
      </radialGradient>
    </defs>
    <rect width="300" height="300" fill="url(#glow3)"/>
    <circle cx="150" cy="112" r="54" fill="#f7cf78" opacity="0.16"/>
    <circle cx="150" cy="112" r="30" fill="#f7cf78" opacity="0.26"/>
    <path d="M150 86 C162 104 162 120 150 126 C138 120 138 104 150 86 Z" fill="#ffd97d"/>
    <path d="M150 97 C155 107 155 117 150 121 C145 117 145 107 150 97 Z" fill="#fff9e6"/>
    <rect x="137" y="130" width="26" height="92" rx="5" fill="#f9efe3"/>
    <path d="M137 152 L163 164 M137 176 L163 188 M137 200 L163 212" stroke="#d47a8c" stroke-width="4"/>
    <ellipse cx="150" cy="226" rx="78" ry="16" fill="#8f4558"/>
    <circle cx="84" cy="84" r="2.5" fill="#f7cf78"/>
    <circle cx="216" cy="92" r="2.5" fill="#f7cf78"/>
    <circle cx="96" cy="162" r="2" fill="#f7cf78"/>
    <circle cx="206" cy="154" r="2" fill="#f7cf78"/>
  </svg>`,
  `<svg viewBox="0 0 300 300" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dawn4" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f5d0c5"/>
        <stop offset="50%" stop-color="#e39d99"/>
        <stop offset="100%" stop-color="#8b5a7c"/>
      </linearGradient>
    </defs>
    <rect width="300" height="300" fill="url(#dawn4)"/>
    <path d="M35 235 Q105 220 145 162" fill="none" stroke="#fff8f0" stroke-width="2" stroke-dasharray="5 6" opacity="0.7"/>
    <path d="M62 256 Q138 242 186 188" fill="none" stroke="#fff8f0" stroke-width="2" stroke-dasharray="5 6" opacity="0.7"/>
    <polygon points="145,162 115,148 164,132" fill="#ffffff"/>
    <polygon points="145,162 135,172 164,132" fill="#e6d5cf"/>
    <polygon points="186,188 158,176 206,160" fill="#ffffff"/>
    <polygon points="186,188 176,198 206,160" fill="#e6d5cf"/>
    <path d="M216 92 C216 84 226 80 232 87 C238 80 248 84 248 92 C248 103 232 113 232 113 C232 113 216 103 216 92 Z" fill="#fff5eb" opacity="0.85"/>
  </svg>`
];

/* =====================================================================
   BUILT-IN WEB AUDIO MUSIC BOX ENGINE
   ===================================================================== */
class MusicBoxSynth {
  constructor(durationSec = 36) {
    this.duration = durationSec;
    this.ctx = null;
    this.isPlaying = false;
    this.elapsed = 0;
    this.lastTick = 0;
    this.nextNoteIndex = 0;
    this.timerId = null;

    const N = {
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, Bb4: 466.16,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
    };

    this.notes = [
      [0.2, N.C4, 0.45], [0.7, N.C4, 0.35], [1.15, N.D4, 0.9], [2.15, N.C4, 0.9], [3.15, N.F4, 0.9], [4.15, N.E4, 1.6],
      [1.15, N.F4 * 0.5, 1.8], [3.15, N.C4 * 0.5, 2.2],
      [7.1, N.C4, 0.45], [7.6, N.C4, 0.35], [8.05, N.D4, 0.9], [9.05, N.C4, 0.9], [10.05, N.G4, 0.9], [11.05, N.F4, 1.7],
      [8.05, N.G4 * 0.5, 1.8], [10.05, N.F4 * 0.5, 2.2],
      [14.1, N.C4, 0.45], [14.6, N.C4, 0.35], [15.05, N.C5, 0.95], [16.1, N.A4, 0.95], [17.15, N.F4, 0.85], [18.1, N.E4, 0.85], [19.05, N.D4, 1.5],
      [15.05, N.A4 * 0.5, 2.0], [17.15, N.D4 * 0.5, 2.4],
      [21.1, N.Bb4, 0.45], [21.6, N.Bb4, 0.35], [22.05, N.A4, 0.95], [23.1, N.F4, 0.95], [24.15, N.G4, 0.95], [25.2, N.F4, 1.9],
      [22.05, N.F4 * 0.5, 1.9], [24.15, N.C4 * 0.5, 2.5],
      [28.1, N.F4, 1.1], [28.8, N.A4, 1.1], [29.5, N.C5, 1.2], [30.3, N.F5, 1.6],
      [31.4, N.E5, 1.1], [32.2, N.C5, 1.1], [33.0, N.A4, 1.3], [33.9, N.C5, 2.0],
      [28.1, N.F4 * 0.5, 3.0], [33.9, N.F4 * 0.5, 2.1]
    ].sort((a, b) => a[0] - b[0]);
  }

  _ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  _pluckBell(freq, dur) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const overtone = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const overtoneGain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    overtone.type = "triangle";
    overtone.frequency.setValueAtTime(freq * 2, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.11, now + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur + 0.45);

    overtoneGain.gain.setValueAtTime(0.0001, now);
    overtoneGain.gain.exponentialRampToValueAtTime(0.025, now + 0.01);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    osc.connect(gain);
    overtone.connect(overtoneGain);
    overtoneGain.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    overtone.start(now);
    osc.stop(now + dur + 0.5);
    overtone.stop(now + 0.35);
  }

  play() {
    this._ensureContext();
    if (this.elapsed >= this.duration - 0.1) this.seek(0);
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.lastTick = performance.now();

    this.timerId = setInterval(() => {
      if (!this.isPlaying) return;
      const now = performance.now();
      const dt = (now - this.lastTick) / 1000;
      this.lastTick = now;
      this.elapsed += dt;

      while (this.nextNoteIndex < this.notes.length && this.notes[this.nextNoteIndex][0] <= this.elapsed) {
        const [, freq, dur] = this.notes[this.nextNoteIndex];
        this._pluckBell(freq, dur);
        this.nextNoteIndex++;
      }

      if (this.elapsed >= this.duration) {
        this.elapsed = this.duration;
        this.pause();
        if (typeof this.onEnded === "function") this.onEnded();
      }
      if (typeof this.onTimeUpdate === "function") {
        this.onTimeUpdate(this.elapsed, this.duration);
      }
    }, 60);
  }

  pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  seek(sec) {
    this.elapsed = Math.max(0, Math.min(this.duration, sec));
    this.nextNoteIndex = this.notes.findIndex((n) => n[0] >= this.elapsed);
    if (this.nextNoteIndex === -1) this.nextNoteIndex = this.notes.length;
    if (typeof this.onTimeUpdate === "function") {
      this.onTimeUpdate(this.elapsed, this.duration);
    }
  }
}

/* =====================================================================
   MAIN APPLICATION STATE & BOOK ENGINE
   ===================================================================== */
const state = {
  pageFlip: null,
  isPortrait: false,
  autoSync: true,
  useRealAudio: false,
  isPlaying: false,
  currentPage: 0,
  lastTargetPage: -1,
  isFlipping: false,
  synth: new MusicBoxSynth(BOOK_CONFIG.demoDuration)
};

const dom = {
  flipbook: document.getElementById("flipbook"),
  songAudio: document.getElementById("songAudio"),
  playPauseBtn: document.getElementById("playPauseBtn"),
  playIcon: document.getElementById("playIcon"),
  pauseIcon: document.getElementById("pauseIcon"),
  progressSlider: document.getElementById("progressSlider"),
  timeDisplay: document.getElementById("timeDisplay"),
  audioSourceLabel: document.getElementById("audioSourceLabel"),
  autoSyncToggle: document.getElementById("autoSyncToggle"),
  syncDot: document.getElementById("syncDot"),
  syncStateText: document.getElementById("syncStateText"),
  spreadBadge: document.getElementById("spreadBadge"),
  prevPageBtn: document.getElementById("prevPageBtn"),
  nextPageBtn: document.getElementById("nextPageBtn"),
  openCustomizerBtn: document.getElementById("openCustomizerBtn"),
  closeCustomizerBtn: document.getElementById("closeCustomizerBtn"),
  customizerDrawer: document.getElementById("customizerDrawer"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  localAudioInput: document.getElementById("localAudioInput"),
  photoInputsContainer: document.getElementById("photoInputsContainer"),
  quickTitleInput: document.getElementById("quickTitleInput"),
  quickSubtitleInput: document.getElementById("quickSubtitleInput"),
  lyricsStatusContainer: document.getElementById("lyricsStatusContainer"),
  lyricsStatusText: document.getElementById("lyricsStatusText"),
  lyricsManualSearch: document.getElementById("lyricsManualSearch"),
  searchTrackInput: document.getElementById("searchTrackInput"),
  searchArtistInput: document.getElementById("searchArtistInput"),
  searchLyricsBtn: document.getElementById("searchLyricsBtn"),
  flowerOverlay: document.getElementById("flowerOverlay"),
  closeOverlayBtn: document.getElementById("closeOverlayBtn")
};

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* =====================================================================
   HERO BOUQUET FLY-TO-CENTER + CAPTION + FULL-SCREEN DELPHINIUM BLOOM
   ===================================================================== */
let flowInterval = null;

function initBloomOverlay() {
  const overlay = dom.flowerOverlay;
  const closeBtn = dom.closeOverlayBtn;
  if (!overlay) return null;

  if (closeBtn && !closeBtn.dataset.bound) {
    closeBtn.dataset.bound = "true";
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      stopDelphiniumBloom();
    });
  }

  if (!overlay.dataset.backdropBound) {
    overlay.dataset.backdropBound = "true";
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        stopDelphiniumBloom();
      }
    });
  }

  return overlay;
}

function getVisibleBackCoverBouquet() {
  const candidates = Array.from(document.querySelectorAll("#backCoverBouquet, .back-cover-bouquet"));
  for (const el of candidates) {
    const r = el.getBoundingClientRect();
    if (r.width > 10 && r.height > 10) {
      return { el, rect: r };
    }
  }
  return { el: candidates[0] || null, rect: null };
}

function hideClickMeHint() {
  const hint = document.querySelector(".click-me-hint");
  if (!hint || hint.classList.contains("hidden")) return;
  hint.style.animation = "none";
  hint.style.transition = "opacity 0.3s ease";
  hint.style.opacity = "0";
  setTimeout(() => hint.classList.add("hidden"), 300);
}

function makeFlowerParticle() {
  const overlay = dom.flowerOverlay;
  if (!overlay) return;

  const flowerImg = BOOK_CONFIG.backCoverBouquet || "./assets/delphinium-bouquet.png";
  const el = document.createElement("div");
  el.className = "falling-delphinium";
  el.style.backgroundImage = `url('${flowerImg}')`;

  const size = Math.floor(Math.random() * 95) + 45;
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.left = `${Math.random() * 100}vw`;

  el.style.setProperty("--scale-final", (Math.random() * 0.75 + 0.5).toFixed(2));
  el.style.setProperty("--max-opacity", (Math.random() * 0.4 + 0.6).toFixed(2));
  el.style.setProperty("--rot-start", `${Math.random() * 180 - 90}deg`);
  el.style.setProperty("--rot-mid", `${Math.random() * 360}deg`);
  el.style.setProperty("--rot-end", `${Math.random() * 720}deg`);
  el.style.setProperty("--dx-mid", `${Math.random() * 240 - 120}px`);
  el.style.setProperty("--dx-end", `${Math.random() * 440 - 220}px`);
  el.style.setProperty("--fall-dur", `${(Math.random() * 2.2 + 4.4).toFixed(2)}s`);

  overlay.appendChild(el);
  setTimeout(() => el.remove(), 6800);
}

function launchHeroBouquetToCenter() {
  const overlay = dom.flowerOverlay;
  if (!overlay) return;

  document.getElementById("heroCenterBouquet")?.remove();
  document.getElementById("heroBouquetCaption")?.remove();

  const { rect } = getVisibleBackCoverBouquet();
  const flowerImg = BOOK_CONFIG.backCoverBouquet || "./assets/delphinium-bouquet.png";

  const startRect = rect || {
    left: window.innerWidth / 2 - 44,
    top: window.innerHeight / 2 - 44,
    width: 88,
    height: 88
  };

  const targetWidth = Math.min(250, Math.round(window.innerWidth * 0.48), Math.round(window.innerHeight * 0.32));
  const targetCenterY = Math.round(window.innerHeight * 0.36);

  const hero = document.createElement("img");
  hero.id = "heroCenterBouquet";
  hero.src = flowerImg;
  hero.alt = "Blooming Delphinium Bouquet";
  hero.className = "hero-center-bouquet";

  hero.style.left = `${startRect.left + startRect.width / 2}px`;
  hero.style.top = `${startRect.top + startRect.height / 2}px`;
  hero.style.width = `${Math.max(64, startRect.width)}px`;
  hero.style.height = "auto";
  hero.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)";

  const caption = document.createElement("div");
  caption.id = "heroBouquetCaption";
  caption.className = "hero-bouquet-caption";
  caption.innerHTML = `
    <div class="hero-bouquet-card">
      <h3 class="hero-bouquet-title">
        ${escapeHtml(BOOK_CONFIG.bouquetBloomTitle || "Delphiniums for You")}
      </h3>
      <p class="hero-bouquet-msg">
        ${escapeHtml(BOOK_CONFIG.bouquetBloomMessage || "")}
      </p>
    </div>
  `;

  document.querySelectorAll("#backCoverBouquet, .back-cover-bouquet").forEach((b) => {
    b.style.opacity = "0";
  });

  overlay.appendChild(hero);
  overlay.appendChild(caption);

  void hero.offsetWidth;
  requestAnimationFrame(() => {
    hero.style.left = "50vw";
    hero.style.top = `${targetCenterY}px`;
    hero.style.width = `${targetWidth}px`;
    hero.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)";
  });

  setTimeout(() => {
    if (document.body.contains(caption)) {
      caption.classList.add("is-visible");
    }
  }, 420);

  setTimeout(() => {
    if (document.body.contains(hero)) {
      hero.classList.add("is-floating");
    }
  }, 980);
}

function triggerDelphiniumBloom() {
  const overlay = initBloomOverlay();
  if (!overlay) return;

  hideClickMeHint();
  overlay.classList.add("show");
  clearInterval(flowInterval);

  launchHeroBouquetToCenter();

  for (let i = 0; i < 35; i++) {
    setTimeout(makeFlowerParticle, Math.random() * 500);
  }

  flowInterval = setInterval(makeFlowerParticle, 110);
}

function stopDelphiniumBloom() {
  clearInterval(flowInterval);
  flowInterval = null;

  if (dom.flowerOverlay) {
    dom.flowerOverlay.classList.remove("show");
    dom.flowerOverlay.querySelectorAll(".falling-delphinium").forEach((el) => el.remove());
  }

  document.getElementById("heroCenterBouquet")?.remove();
  document.getElementById("heroBouquetCaption")?.remove();

  document.querySelectorAll("#backCoverBouquet, .back-cover-bouquet").forEach((b) => {
    b.style.opacity = "1";
  });
}

/* Build all DOM pages (Front Cover + N*2 Spread Pages + Back Cover) */
function buildBookPages() {
  dom.flipbook.innerHTML = "";

  // --- PAGE 0: FRONT HARDCOVER ---
  const frontCover = document.createElement("div");
  frontCover.className = "page page-hardcover front-cover";
  frontCover.setAttribute("data-density", "hard");
  frontCover.innerHTML = `
    <div class="gold-frame"></div>
    <div class="relative z-10 h-full w-full flex flex-col items-center justify-between px-7 sm:px-10 py-10 sm:py-12 text-center">
      <div class="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#dfc078]/80 font-display">
        ${escapeHtml(BOOK_CONFIG.coverDate)}
      </div>

      <div class="my-auto space-y-4">
        <div class="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#dfc078]/40 text-[#dfc078] mb-1">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        <h1 id="coverTitleEl" class="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-snug gold-emboss">
          ${escapeHtml(BOOK_CONFIG.coverTitle)}
        </h1>

        <div class="w-16 h-[1px] bg-[#dfc078]/45 mx-auto"></div>

        <p id="coverSubtitleEl" class="text-xs sm:text-sm italic text-[#f3dfba]/85 max-w-xs mx-auto leading-relaxed">
          ${escapeHtml(BOOK_CONFIG.coverSubtitle)}
        </p>
      </div>

      <button
        type="button"
        data-action="start-book"
        class="btn-gold-foil px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm inline-flex items-center gap-2"
      >
        <span>Open Book & Play</span>
        <span>♪</span>
      </button>
    </div>
  `;
  dom.flipbook.appendChild(frontCover);

  // --- INNER SPREAD PAGES ---
  BOOK_CONFIG.spreads.forEach((spread, idx) => {
    const leftPageNum = idx * 2 + 1;
    const rightPageNum = idx * 2 + 2;
    const fallbackSvg = FALLBACK_ARTWORKS[idx % FALLBACK_ARTWORKS.length];

    const leftPage = document.createElement("div");
    leftPage.className = "page page-paper page-left";
    leftPage.innerHTML = `
      <div class="h-full w-full flex flex-col items-center justify-between px-5 sm:px-8 py-6 sm:py-8">
        <div class="w-full flex items-center justify-end text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8a7278]">
          <span>${formatTime(spread.timestamp)}</span>
        </div>

        <div class="my-auto flex flex-col items-center w-full">
          <div class="polaroid-card">
            <div class="washi-tape"></div>
            <div class="relative w-full aspect-square bg-[#efe5d8] overflow-hidden rounded-[2px]">
              <div class="polaroid-fallback w-full h-full ${spread.photoSrc ? "hidden" : ""}">
                ${fallbackSvg}
              </div>
              <img
                data-spread-img="${idx}"
                src="${escapeHtml(spread.photoSrc || "")}"
                alt="${escapeHtml(spread.polaroidCaption)}"
                class="w-full h-full object-cover ${spread.photoSrc ? "" : "hidden"}"
                onerror="this.classList.add('hidden'); this.previousElementSibling.classList.remove('hidden');"
              />
            </div>
            <p class="font-handwriting text-xl sm:text-2xl text-[#3b2c31] text-center mt-2.5 leading-none">
              ${escapeHtml(spread.polaroidCaption)}
            </p>
          </div>
        </div>

        <div class="w-full flex justify-start text-[11px] text-[#9b848a] font-display italic">
          <span>${leftPageNum}</span>
        </div>
      </div>
    `;
    dom.flipbook.appendChild(leftPage);

    const rightPage = document.createElement("div");
    rightPage.className = "page page-paper page-right";
    const lyricsHtml = spread.lyrics
      .map(
        (line, lineIdx) => `
          <p
            data-spread-line="${idx}-${lineIdx}"
            class="lyric-line text-base sm:text-lg md:text-[19px] leading-relaxed sm:leading-loose font-normal"
          >
            ${escapeHtml(line)}
          </p>
        `
      )
      .join("");

    rightPage.innerHTML = `
      <div class="h-full w-full flex flex-col items-center justify-between px-6 sm:px-9 py-6 sm:py-8">
        <div class="text-[#b85d6f]/55 text-xs tracking-[0.35em]">✦ ✦ ✦</div>

        <div class="lyric-ruled-area my-auto w-full py-4 flex flex-col items-center justify-center text-center space-y-2.5 sm:space-y-3.5">
          ${lyricsHtml}
        </div>

        <div class="w-full flex items-center justify-between text-[11px] text-[#9b848a] font-display italic">
          <span class="text-[10px] not-italic tracking-wider uppercase text-[#b85d6f]/70">
            Spread ${idx + 1} of ${BOOK_CONFIG.spreads.length}
          </span>
          <span>${rightPageNum}</span>
        </div>
      </div>
    `;
    dom.flipbook.appendChild(rightPage);
  });

  // --- FINAL PAGE: BACK HARDCOVER ---
  const backCover = document.createElement("div");
  backCover.className = "page page-hardcover back-cover";
  backCover.setAttribute("data-density", "hard");
  backCover.innerHTML = `
    <div class="gold-frame"></div>
    <div class="relative z-10 h-full w-full flex flex-col items-center justify-between px-7 sm:px-10 py-8 sm:py-10 text-center">
      <div class="text-xs tracking-[0.3em] text-[#dfc078]/70">♥</div>

      <div class="my-auto space-y-3 max-w-xs flex flex-col items-center">
        <h2 class="font-display text-2xl sm:text-3xl font-bold gold-emboss">
          ${escapeHtml(BOOK_CONFIG.backCoverTitle)}
        </h2>
        <div class="w-12 h-[1px] bg-[#dfc078]/40 mx-auto"></div>
        <p class="text-xs sm:text-sm text-[#f5e6cc]/90 leading-relaxed italic">
          "${escapeHtml(BOOK_CONFIG.backCoverMessage)}"
        </p>
        <p class="font-handwriting text-2xl sm:text-3xl text-[#dfc078] pt-0.5">
          ${escapeHtml(BOOK_CONFIG.backCoverSignature)}
        </p>

        <div class="relative inline-flex items-center justify-center my-4">
          <button
            id="bouquet-btn"
            type="button"
            class="cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
            aria-label="Click bouquet"
          >
            <img
              id="backCoverBouquet"
              src="${escapeHtml(BOOK_CONFIG.backCoverBouquet || "./assets/delphinium-bouquet.png")}"
              class="back-cover-bouquet mt-1"
              alt="Click to scatter flowers"
              title="Tap to make it bloom!"
            />
          </button>
          <span
            class="click-me-hint pointer-events-none absolute left-full ml-3 whitespace-nowrap flex items-center gap-1 font-handwriting text-lg sm:text-xl text-[#e4c580]/90 -rotate-6"
          >
            <span class="text-xs font-sans">←</span> click me!
          </span>
        </div>
      </div>

      <button
        type="button"
        data-action="replay-book"
        class="btn-gold-foil px-6 py-2.5 rounded-full text-xs sm:text-sm inline-flex items-center gap-2"
      >
        <span>↺</span>
        <span>Replay from Beginning</span>
      </button>
    </div>
  `;
  dom.flipbook.appendChild(backCover);
}

function bindGlobalBookInteractions() {
  if (document.body.dataset.globalBookBound) return;
  document.body.dataset.globalBookBound = "true";

  const isPointInsideRect = (x, y, rect, pad = 12) =>
    rect &&
    rect.width > 0 &&
    x >= rect.left - pad &&
    x <= rect.right + pad &&
    y >= rect.top - pad &&
    y <= rect.bottom + pad;

  const findMatchingAction = (ev) => {
    if (ev.target && ev.target.closest) {
      if (ev.target.closest("#bouquet-btn, #backCoverBouquet, .back-cover-bouquet")) {
        return "bouquet";
      }
      const actionBtn = ev.target.closest("[data-action]");
      if (actionBtn) {
        return actionBtn.getAttribute("data-action");
      }
    }

    const clientX =
      ev.clientX ??
      (ev.touches && ev.touches[0] && ev.touches[0].clientX) ??
      (ev.changedTouches && ev.changedTouches[0] && ev.changedTouches[0].clientX);
    const clientY =
      ev.clientY ??
      (ev.touches && ev.touches[0] && ev.touches[0].clientY) ??
      (ev.changedTouches && ev.changedTouches[0] && ev.changedTouches[0].clientY);

    if (typeof clientX === "number" && typeof clientY === "number") {
      const totalPages = BOOK_CONFIG.spreads.length * 2 + 2;
      if (state.currentPage >= totalPages - 1) {
        const { rect } = getVisibleBackCoverBouquet();
        if (isPointInsideRect(clientX, clientY, rect, 16)) {
          return "bouquet";
        }
      }
      for (const btn of document.querySelectorAll("[data-action]")) {
        const r = btn.getBoundingClientRect();
        if (isPointInsideRect(clientX, clientY, r, 6)) {
          return btn.getAttribute("data-action");
        }
      }
    }

    return null;
  };

  ["mousedown", "touchstart", "pointerdown"].forEach((evtName) => {
    document.addEventListener(
      evtName,
      (ev) => {
        const matched = findMatchingAction(ev);
        if (matched) ev.stopPropagation();
      },
      true
    );
  });

  document.addEventListener(
    "click",
    (ev) => {
      const matched = findMatchingAction(ev);
      if (!matched) return;
      ev.preventDefault();
      ev.stopPropagation();

      if (matched === "bouquet") {
        triggerDelphiniumBloom();
      } else if (matched === "start-book") {
        startExperience();
      } else if (matched === "replay-book") {
        replayExperience();
      }
    },
    true
  );
}

function initPageFlip(preservePage = 0) {
  if (state.pageFlip) {
    try {
      state.pageFlip.destroy();
    } catch {
      // Ignore destroy cleanup errors
    }
    state.pageFlip = null;
  }

  const bookWrapper = document.getElementById("bookWrapper");
  if (bookWrapper) {
    bookWrapper.innerHTML = "";
    const cleanFlipbook = document.createElement("div");
    cleanFlipbook.id = "flipbook";
    bookWrapper.appendChild(cleanFlipbook);
    dom.flipbook = cleanFlipbook;
  }

  buildBookPages();
  bindGlobalBookInteractions();

  const mobilePortrait = window.innerWidth < 768;
  state.isPortrait = mobilePortrait;

  const totalPages = BOOK_CONFIG.spreads.length * 2 + 2;
  const safeStartPage = Math.max(0, Math.min(totalPages - 1, preservePage));
  state.currentPage = safeStartPage;

  state.pageFlip = new St.PageFlip(dom.flipbook, {
    width: mobilePortrait ? 340 : 440,
    height: mobilePortrait ? 470 : 560,
    size: "stretch",
    minWidth: 270,
    maxWidth: 480,
    minHeight: 390,
    maxHeight: 610,
    maxShadowOpacity: 0.48,
    showCover: true,
    mobileScrollSupport: false,
    usePortrait: mobilePortrait,
    flippingTime: 480,
    startPage: safeStartPage
  });

  state.pageFlip.loadFromHTML(dom.flipbook.querySelectorAll(".page"));

  state.pageFlip.on("flip", (e) => {
    state.currentPage = e.data;
    state.isFlipping = false;
    updateSpreadBadge(e.data);
  });

  state.pageFlip.on("changeState", (e) => {
    state.isFlipping = e.data === "flipping" || e.data === "user_fold";
  });

  updateSpreadBadge(safeStartPage);
}

function updateSpreadBadge(pageIndex) {
  const totalPages = BOOK_CONFIG.spreads.length * 2 + 2;
  if (pageIndex === 0) {
    dom.spreadBadge.textContent = "Front Cover";
  } else if (pageIndex >= totalPages - 1) {
    dom.spreadBadge.textContent = "Back Cover";
  } else {
    const spreadNum = Math.floor((pageIndex - 1) / 2) + 1;
    dom.spreadBadge.textContent = `Spread ${spreadNum} / ${BOOK_CONFIG.spreads.length}`;
  }
}

function turnToPage(targetPage) {
  if (!state.pageFlip) return;
  const totalPages = BOOK_CONFIG.spreads.length * 2 + 2;
  targetPage = Math.max(0, Math.min(totalPages - 1, targetPage));

  if (targetPage === state.currentPage) return;
  if (state.isFlipping && state.lastTargetPage === targetPage) return;

  state.lastTargetPage = targetPage;
  state.isFlipping = true;

  try {
    state.pageFlip.flip(targetPage);
  } catch {
    state.isFlipping = false;
  }
}

function handlePlaybackProgress(currentTime, duration) {
  dom.progressSlider.max = duration || BOOK_CONFIG.demoDuration;
  dom.progressSlider.value = currentTime;
  dom.timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;

  const spreads = BOOK_CONFIG.spreads;
  if (!spreads.length) return;

  const syncedTime = Math.max(0, currentTime + (BOOK_CONFIG.lyricOffset || 0));

  let activeSpreadIdx = 0;
  for (let i = 0; i < spreads.length; i++) {
    if (syncedTime >= spreads[i].timestamp) {
      activeSpreadIdx = i;
    } else {
      break;
    }
  }

  const spreadStart = spreads[activeSpreadIdx].timestamp;
  const spreadEnd =
    activeSpreadIdx < spreads.length - 1
      ? spreads[activeSpreadIdx + 1].timestamp
      : Math.max(duration - 1.5, spreadStart + 4);
  const spreadSpan = Math.max(1, spreadEnd - spreadStart);
  const progressInSpread = Math.max(0, Math.min(0.999, (syncedTime - spreadStart) / spreadSpan));

  const lines = spreads[activeSpreadIdx].lyrics;
  const lineTimes = spreads[activeSpreadIdx].lineTimestamps;
  let activeLineIdx = 0;

  if (Array.isArray(lineTimes) && lineTimes.length === lines.length) {
    for (let i = 0; i < lineTimes.length; i++) {
      if (syncedTime >= lineTimes[i]) {
        activeLineIdx = i;
      } else {
        break;
      }
    }
  } else {
    activeLineIdx = Math.floor(progressInSpread * lines.length);
  }

  document.querySelectorAll(".lyric-line.is-active").forEach((el) => {
    el.classList.remove("is-active");
  });
  const currentLineEl = document.querySelector(
    `[data-spread-line="${activeSpreadIdx}-${activeLineIdx}"]`
  );
  if (currentLineEl) {
    currentLineEl.classList.add("is-active");
  }

  if (!state.autoSync || !state.isPlaying) return;

  if (duration > 0 && currentTime >= duration - 0.6) {
    const backCoverIndex = spreads.length * 2 + 1;
    turnToPage(backCoverIndex);
    return;
  }

  const flipTime = syncedTime + 0.55;
  let flipSpreadIdx = 0;
  for (let i = 0; i < spreads.length; i++) {
    if (flipTime >= spreads[i].timestamp) {
      flipSpreadIdx = i;
    } else {
      break;
    }
  }

  let targetPage = flipSpreadIdx * 2 + 1;
  if (state.isPortrait && progressInSpread >= 0.45) {
    targetPage = flipSpreadIdx * 2 + 2;
  }

  turnToPage(targetPage);
}

function playAudio() {
  state.isPlaying = true;
  updatePlayPauseUI();

  if (state.useRealAudio) {
    dom.songAudio.play().catch(() => {
      state.isPlaying = false;
      updatePlayPauseUI();
    });
  } else {
    state.synth.play();
  }
}

function pauseAudio() {
  state.isPlaying = false;
  updatePlayPauseUI();

  if (state.useRealAudio) {
    dom.songAudio.pause();
  } else {
    state.synth.pause();
  }
}

function seekAudio(seconds) {
  if (state.useRealAudio) {
    dom.songAudio.currentTime = seconds;
    handlePlaybackProgress(dom.songAudio.currentTime, dom.songAudio.duration || 0);
  } else {
    state.synth.seek(seconds);
  }
}

function updatePlayPauseUI() {
  if (state.isPlaying) {
    dom.playIcon.classList.add("hidden");
    dom.pauseIcon.classList.remove("hidden");
  } else {
    dom.playIcon.classList.remove("hidden");
    dom.pauseIcon.classList.add("hidden");
  }
}

function startExperience() {
  if (state.currentPage === 0) turnToPage(1);
  playAudio();
}

function replayExperience() {
  stopDelphiniumBloom();
  state.autoSync = true;
  updateAutoSyncUI();
  seekAudio(0);
  turnToPage(1);
  playAudio();
}

function updateAutoSyncUI() {
  dom.syncStateText.textContent = state.autoSync ? "ON" : "OFF";
  if (state.autoSync) {
    dom.autoSyncToggle.className =
      "px-2.5 py-1.5 rounded-full text-[11px] font-medium border transition flex items-center gap-1.5 bg-[#dfc078]/20 border-[#dfc078]/50 text-[#f7e5b4]";
    dom.syncDot.className = "w-1.5 h-1.5 rounded-full bg-[#dfc078]";
  } else {
    dom.autoSyncToggle.className =
      "px-2.5 py-1.5 rounded-full text-[11px] font-medium border transition flex items-center gap-1.5 bg-white/5 border-white/15 text-[#e8d8c8]/65";
    dom.syncDot.className = "w-1.5 h-1.5 rounded-full bg-white/40";
  }
}

function renderPhotoInputs() {
  if (!dom.photoInputsContainer) return;
  dom.photoInputsContainer.innerHTML = BOOK_CONFIG.spreads
    .map(
      (_, i) => `
      <div class="flex items-center justify-between gap-2 text-xs">
        <span class="text-[#e8d8c8]/80 shrink-0">Spread ${i + 1}:</span>
        <input
          type="file"
          accept="image/*"
          data-photo-idx="${i}"
          class="block w-full text-[11px] text-[#e8d8c8] file:mr-2 file:py-1 file:px-2.5 file:rounded-full file:border-0 file:text-[11px] file:bg-white/15 file:text-[#f7efe6] hover:file:bg-white/25 cursor-pointer"
        />
      </div>
    `
    )
    .join("");

  dom.photoInputsContainer.querySelectorAll("input[type='file']").forEach((input) => {
    input.addEventListener("change", (e) => {
      const idx = Number(input.getAttribute("data-photo-idx"));
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const imgUrl = URL.createObjectURL(file);
      if (BOOK_CONFIG.spreads[idx]) {
        BOOK_CONFIG.spreads[idx].photoSrc = imgUrl;
      }

      const imgEl = document.querySelector(`[data-spread-img="${idx}"]`);
      if (imgEl) {
        imgEl.src = imgUrl;
        imgEl.classList.remove("hidden");
        if (imgEl.previousElementSibling) {
          imgEl.previousElementSibling.classList.add("hidden");
        }
      }
    });
  });
}

function parseLrc(lrcText) {
  if (!lrcText || typeof lrcText !== "string") return [];
  const lines = lrcText.split("\n");
  const result = [];
  const timeRegex = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;

  for (const line of lines) {
    timeRegex.lastIndex = 0;
    const matches = [...line.matchAll(timeRegex)];
    if (!matches.length) continue;

    const text = line.replace(timeRegex, "").trim();
    if (!text) continue;

    for (const match of matches) {
      const minutes = parseInt(match[1], 10);
      const seconds = parseInt(match[2], 10);
      const msPart = match[3] ? parseFloat("0." + match[3]) : 0;
      const totalSec = minutes * 60 + seconds + msPart;
      result.push({ time: Math.round(totalSec * 100) / 100, text });
    }
  }

  return result.sort((a, b) => a.time - b.time);
}

function parseSongFilename(filename) {
  const base = filename.replace(/\.[^/.]+$/, "");
  const separators = [" - ", " – ", " — ", "_", "-"];
  for (const sep of separators) {
    if (base.includes(sep)) {
      const parts = base.split(sep).map((p) => p.trim()).filter(Boolean);
      if (parts.length >= 2) {
        return { artist: parts[0], title: parts.slice(1).join(" ") };
      }
    }
  }
  return { artist: "", title: base };
}

function readAudioTags(file) {
  return new Promise((resolve) => {
    if (typeof window.jsmediatags === "undefined" || !window.jsmediatags.read) {
      resolve(null);
      return;
    }
    try {
      window.jsmediatags.read(file, {
        onSuccess: (tag) => resolve(tag.tags || null),
        onError: () => resolve(null)
      });
    } catch {
      resolve(null);
    }
  });
}

function groupLyricsIntoSpreads(parsedLines) {
  if (!parsedLines.length) return [];
  const linesPerSpread = 4;
  const folder = (BOOK_CONFIG.photoFolder || "./assets/pictures").replace(/\/$/, "");
  const spreads = [];

  for (let i = 0; i < parsedLines.length; i += linesPerSpread) {
    const chunk = parsedLines.slice(i, i + linesPerSpread);
    const spreadIndex = Math.floor(i / linesPerSpread);
    const lines = chunk.map((c) => c.text);
    const existing = BOOK_CONFIG.spreads[spreadIndex] || {};

    spreads.push({
      timestamp: chunk[0].time,
      lineTimestamps: chunk.map((c) => c.time),
      photoSrc: existing.photoSrc || `${folder}/photo${spreadIndex + 1}.jpg`,
      polaroidCaption: lines[0] ? `"${lines[0]}"` : "A cherished memory",
      lyrics: lines
    });
  }

  return spreads;
}

function groupPlainLyricsIntoSpreads(plainText, totalDuration) {
  const lines = plainText
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith("["));

  if (!lines.length) return [];
  const linesPerSpread = 4;
  const numSpreads = Math.ceil(lines.length / linesPerSpread);
  const dur = totalDuration > 10 ? totalDuration : 244;
  const timeStep = Math.max(10, dur - 10) / numSpreads;
  const folder = (BOOK_CONFIG.photoFolder || "./assets/pictures").replace(/\/$/, "");
  const spreads = [];

  for (let i = 0; i < lines.length; i += linesPerSpread) {
    const chunk = lines.slice(i, i + linesPerSpread);
    const spreadIdx = Math.floor(i / linesPerSpread);
    const existing = BOOK_CONFIG.spreads[spreadIdx] || {};

    spreads.push({
      timestamp: Math.round((5 + spreadIdx * timeStep) * 10) / 10,
      photoSrc: existing.photoSrc || `${folder}/photo${spreadIdx + 1}.jpg`,
      polaroidCaption: chunk[0] ? `"${chunk[0]}"` : "A cherished memory",
      lyrics: chunk
    });
  }

  return spreads;
}

async function queryLrclib(title, artist, durationSec) {
  const targetDuration = durationSec > 0 ? durationSec : 244;

  if (artist && title) {
    try {
      const getUrl = new URL("https://lrclib.net/api/get");
      getUrl.searchParams.set("track_name", title);
      getUrl.searchParams.set("artist_name", artist);
      getUrl.searchParams.set("duration", Math.round(targetDuration));
      const res = await fetch(getUrl.toString(), {
        headers: { "Lrclib-Client": "BirthdayBookKeepsake/1.0" }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.syncedLyrics) return data;
      }
    } catch {
      // Continue to search endpoint
    }
  }

  try {
    const searchUrl = new URL("https://lrclib.net/api/search");
    searchUrl.searchParams.set("q", `${title} ${artist}`.trim());
    const res = await fetch(searchUrl.toString(), {
      headers: { "Lrclib-Client": "BirthdayBookKeepsake/1.0" }
    });
    if (res.ok) {
      const results = await res.json();
      if (Array.isArray(results) && results.length > 0) {
        const synced = results.filter((r) => r.syncedLyrics && r.syncedLyrics.trim().length > 0);
        if (synced.length > 0) {
          synced.sort(
            (a, b) =>
              Math.abs((a.duration || targetDuration) - targetDuration) -
              Math.abs((b.duration || targetDuration) - targetDuration)
          );
          return synced[0];
        }
        return results[0];
      }
    }
  } catch (err) {
    console.warn("LRCLIB search request failed:", err);
  }
  return null;
}

function applyGeneratedSpreads(newSpreads, songTitle, artistName) {
  if (!newSpreads || !newSpreads.length) return false;

  BOOK_CONFIG.spreads = newSpreads;

  if (songTitle) {
    const subtitleText = `Featuring "${songTitle}"${artistName ? ` by ${artistName}` : ""}`;
    if (dom.quickSubtitleInput) dom.quickSubtitleInput.value = subtitleText;
    BOOK_CONFIG.coverSubtitle = subtitleText;
    const el = document.getElementById("coverSubtitleEl");
    if (el) el.textContent = BOOK_CONFIG.coverSubtitle;
  }

  initPageFlip(state.currentPage);
  renderPhotoInputs();
  return true;
}

function updateLyricsStatus(msg, type = "loading", showManualSearch = false) {
  if (!dom.lyricsStatusContainer) return;
  dom.lyricsStatusContainer.classList.remove("hidden");

  let dotColor = "bg-[#dfc078]";
  let pulseClass = "animate-ping";
  if (type === "success") {
    dotColor = "bg-emerald-400";
    pulseClass = "";
  } else if (type === "error") {
    dotColor = "bg-rose-400";
    pulseClass = "";
  }

  dom.lyricsStatusText.innerHTML = `
    <span class="inline-block w-2 h-2 rounded-full ${dotColor} ${pulseClass} shrink-0"></span>
    <span class="flex-1">${escapeHtml(msg)}</span>
  `;

  if (dom.lyricsManualSearch) {
    dom.lyricsManualSearch.classList.toggle("hidden", !showManualSearch);
  }
}

async function fetchAndApplyLyrics(title, artist, durationSec) {
  updateLyricsStatus(`Searching online lyrics for "${title}"...`, "loading", true);

  const result = await queryLrclib(title, artist, durationSec);

  if (result && result.syncedLyrics) {
    const parsed = parseLrc(result.syncedLyrics);
    if (parsed.length >= 4) {
      const spreads = groupLyricsIntoSpreads(parsed);
      applyGeneratedSpreads(spreads, result.trackName || title, result.artistName || artist);
      updateLyricsStatus(
        `✓ Found timed lyrics for "${result.trackName || title}" (${spreads.length} spreads created)`,
        "success",
        false
      );
      return true;
    }
  }

  if (result && result.plainLyrics) {
    const spreads = groupPlainLyricsIntoSpreads(result.plainLyrics, durationSec || result.duration || 244);
    applyGeneratedSpreads(spreads, result.trackName || title, result.artistName || artist);
    updateLyricsStatus(
      `✓ Found plain lyrics for "${result.trackName || title}" (${spreads.length} spreads created)`,
      "success",
      false
    );
    return true;
  }

  updateLyricsStatus(
    `Could not automatically find lyrics for "${title}". Try adjusting title & artist below:`,
    "error",
    true
  );
  return false;
}

async function autoGenerateLyricsForFile(file) {
  updateLyricsStatus("Reading audio file & extracting metadata tags...", "loading", false);

  const tags = await readAudioTags(file);
  const parsedFilename = parseSongFilename(file.name);

  const title = (tags && tags.title ? tags.title.trim() : "") || parsedFilename.title;
  const artist = (tags && tags.artist ? tags.artist.trim() : "") || parsedFilename.artist;

  if (dom.searchTrackInput) dom.searchTrackInput.value = title;
  if (dom.searchArtistInput) dom.searchArtistInput.value = artist;

  if (tags && (tags.lyrics || (tags.unsyncedLyrics && tags.unsyncedLyrics.lyrics))) {
    const rawLyrics = tags.lyrics || tags.unsyncedLyrics.lyrics;
    const parsedLrc = parseLrc(rawLyrics);
    if (parsedLrc.length >= 4) {
      const spreads = groupLyricsIntoSpreads(parsedLrc);
      applyGeneratedSpreads(spreads, title, artist);
      updateLyricsStatus(`✓ Extracted embedded timed lyrics from file (${spreads.length} spreads)`, "success", false);
      return;
    } else {
      const spreads = groupPlainLyricsIntoSpreads(rawLyrics, dom.songAudio.duration || 244);
      applyGeneratedSpreads(spreads, title, artist);
      updateLyricsStatus(`✓ Extracted embedded lyrics from file (${spreads.length} spreads)`, "success", false);
      return;
    }
  }

  const duration = await waitForAudioMetadata(dom.songAudio, 5000);
  await fetchAndApplyLyrics(title, artist, duration);
}

function waitForAudioMetadata(audioEl, timeoutMs = 5000) {
  if (isFinite(audioEl.duration) && audioEl.duration > 0) {
    return Promise.resolve(audioEl.duration);
  }
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(0), timeoutMs);
    audioEl.addEventListener(
      "loadedmetadata",
      () => {
        clearTimeout(timer);
        resolve(audioEl.duration || 0);
      },
      { once: true }
    );
  });
}

function loadAudioSource(src, labelText) {
  pauseAudio();
  state.useRealAudio = true;
  dom.songAudio.src = src;
  dom.songAudio.load();
  dom.audioSourceLabel.textContent = `♪ ${labelText}`;
  dom.timeDisplay.textContent = "0:00 / --:--";
}

function setupCustomizerDrawer() {
  if (!dom.customizerDrawer) return;
  dom.quickTitleInput.value = BOOK_CONFIG.coverTitle;
  dom.quickSubtitleInput.value = BOOK_CONFIG.coverSubtitle;
  if (dom.searchTrackInput && BOOK_CONFIG.songTitle) {
    dom.searchTrackInput.value = BOOK_CONFIG.songTitle;
  }
  if (dom.searchArtistInput && BOOK_CONFIG.songArtist) {
    dom.searchArtistInput.value = BOOK_CONFIG.songArtist;
  }

  dom.quickTitleInput.addEventListener("input", (e) => {
    BOOK_CONFIG.coverTitle = e.target.value || "For You, On Your Birthday";
    const el = document.getElementById("coverTitleEl");
    if (el) el.textContent = BOOK_CONFIG.coverTitle;
  });

  dom.quickSubtitleInput.addEventListener("input", (e) => {
    BOOK_CONFIG.coverSubtitle = e.target.value;
    const el = document.getElementById("coverSubtitleEl");
    if (el) el.textContent = BOOK_CONFIG.coverSubtitle;
  });

  dom.localAudioInput.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const blobUrl = URL.createObjectURL(file);
    loadAudioSource(blobUrl, file.name);
    await autoGenerateLyricsForFile(file);
  });

  if (dom.searchLyricsBtn) {
    dom.searchLyricsBtn.addEventListener("click", () => {
      const track = dom.searchTrackInput.value.trim();
      const artist = dom.searchArtistInput.value.trim();
      if (!track) return;
      fetchAndApplyLyrics(track, artist, dom.songAudio.duration || 0);
    });
  }

  renderPhotoInputs();

  const openDrawer = () => dom.customizerDrawer.classList.remove("hidden");
  const closeDrawer = () => dom.customizerDrawer.classList.add("hidden");

  dom.openCustomizerBtn.addEventListener("click", openDrawer);
  dom.closeCustomizerBtn.addEventListener("click", closeDrawer);
  dom.drawerBackdrop.addEventListener("click", closeDrawer);
}

window.addEventListener("DOMContentLoaded", async () => {
  initBloomOverlay();

  state.synth.onTimeUpdate = (t, d) => handlePlaybackProgress(t, d);
  state.synth.onEnded = () => {
    state.isPlaying = false;
    updatePlayPauseUI();
  };

  dom.songAudio.addEventListener("loadedmetadata", () => {
    handlePlaybackProgress(0, dom.songAudio.duration);
  });
  dom.songAudio.addEventListener("timeupdate", () => {
    if (state.useRealAudio) {
      handlePlaybackProgress(dom.songAudio.currentTime, dom.songAudio.duration || 0);
    }
  });
  dom.songAudio.addEventListener("ended", () => {
    state.isPlaying = false;
    updatePlayPauseUI();
    if (state.autoSync) {
      turnToPage(BOOK_CONFIG.spreads.length * 2 + 1);
    }
  });

  if (BOOK_CONFIG.audioSrc && BOOK_CONFIG.audioSrc.trim() !== "") {
    const cleanName =
      BOOK_CONFIG.songTitle && BOOK_CONFIG.songArtist
        ? `${BOOK_CONFIG.songTitle} - ${BOOK_CONFIG.songArtist}`
        : BOOK_CONFIG.audioSrc.split("/").pop();
    loadAudioSource(BOOK_CONFIG.audioSrc, cleanName);
  }

  initPageFlip(0);
  setupCustomizerDrawer();

  if (BOOK_CONFIG.songTitle) {
    const duration = await waitForAudioMetadata(dom.songAudio, 5000);
    await fetchAndApplyLyrics(BOOK_CONFIG.songTitle, BOOK_CONFIG.songArtist || "", duration);
  }

  dom.playPauseBtn.addEventListener("click", () => {
    if (state.isPlaying) {
      pauseAudio();
    } else {
      if (state.currentPage === 0) turnToPage(1);
      playAudio();
    }
  });

  dom.progressSlider.addEventListener("input", (e) => {
    seekAudio(parseFloat(e.target.value));
  });

  dom.autoSyncToggle.addEventListener("click", () => {
    state.autoSync = !state.autoSync;
    updateAutoSyncUI();
  });

  dom.prevPageBtn.addEventListener("click", () => {
    if (state.pageFlip) state.pageFlip.flipPrev();
  });

  dom.nextPageBtn.addEventListener("click", () => {
    if (state.pageFlip) state.pageFlip.flipNext();
  });

  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight") {
      if (state.pageFlip) state.pageFlip.flipNext();
    } else if (e.key === "ArrowLeft") {
      if (state.pageFlip) state.pageFlip.flipPrev();
    } else if (e.key === " ") {
      e.preventDefault();
      state.isPlaying ? pauseAudio() : playAudio();
    } else if (e.key === "Escape") {
      stopDelphiniumBloom();
    }
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const nowPortrait = window.innerWidth < 768;
      if (nowPortrait !== state.isPortrait) {
        initPageFlip(state.currentPage);
      }
    }, 250);
  });
});