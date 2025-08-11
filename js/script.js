// Language content
const banglaContent = document.getElementById("content").innerHTML;

const englishContent = `
  <h1>🩸 ᴳᴿメʙʟᴏᴏᴅʟɪɴᴇ | Gladiator's Reborn Bloodline 🩸</h1>
  <p><em>“We don't die — We multiply.”</em></p>
  <p>Assalamu alaikum!</p>
  <p>Welcome to the ʙʟᴏᴏᴅʟɪɴᴇ family!</p>
  <p>We're not just a guild—we're a family built on love, respect, and rules that keep us united!</p>
  <p><strong>To be a permanent member, follow these rules:</strong></p>
  <p class="rule-number">1. Must change your in-game name with the ᴳᴿᴮ tag. (STRICT)</p>
  <p>- Before changing a name, you must use the name generator tool to obtain confirmation from the leader/officer and take instructions from the style guide.</p>
  <p class="rule-number">2. Be respectful to everyone—young or old.</p>
  <p>- Bad behavior = removal (with proof).</p>
  <p class="rule-number">3. Accept guild invitation immediately.</p>
  <p>- If you're not willing to play, inform squad before leaving.</p>
  <p class="rule-number">4. Want to invite someone? Ask permission.</p>
  <p>- If a full squad already has 4 guild players, do not replace without consent.</p>
  <p class="rule-number">5. Follow custom match rules. (OPTIONAL)</p>
  <p>- First round must be with Desert Eagle.</p>
  <p>- Vector is banned.</p>
  <p>- No LOL emotes after knockdown.</p>
  <p class="rule-number">6. Be active! (WARNING)</p>
  <p>- Minimum 1500 glory/dog-tag per week.</p>
  <p>- Daily presence is expected.</p>
  <p class="rule-number">7. Spend time with the guild.</p>
  <p>- Squad regularly. Support each other.</p>
  <p class="rule-number">8. Guild War is everyone's responsibility.</p>
  <p>- Held on <strong>Tuesday, Thursday, and Saturday</strong> weekly.</p>
  <p>- Everyone must participate with their assigned squad.</p>
  <p>- If unavailable, inform leader/officer in advance.</p>
  <p>- Unity & respect = participate in war.</p>
  <p class="rule-number">9. Breaking rules = removal, even for officers.</p>
  <p>If you believe in honor and love while gaming, ᴳᴿメʙʟᴏᴏᴅʟɪɴᴇ is your family!</p>
  <p>Join now and dominate the Free Fire battlefield!</p>
  <p><strong>– Leader, ᴳᴿメʙʟᴏᴏᴅʟɪɴᴇ</strong></p>

  <div class="faq">
    <h2>🧠 Questions & Answers (FAQ)</h2>
    <div class="faq-item">
      <strong>Q: I'm new to the game. Can I join?</strong>
      <p>A: Of course! If you follow rules and show respect, you're welcome!</p>
    </div>
    <div class="faq-item">
      <strong>Q: What happens if I don't hit 1500 Glory weekly?</strong>
      <p>A: If you have a reason, inform a leader or officer beforehand.</p>
    </div>
    <div class="faq-item">
      <strong>Q: What if someone breaks the rules?</strong>
      <p>A: Report it with proof. We'll handle it accordingly.</p>
    </div>
  </div>
`;

// State variables
let isBangla = true;
let themeMode = "system"; // dark, light, or system

// Language toggle function
function toggleLanguage() {
  const contentDiv = document.getElementById("content");
  const translateBtn = document.getElementById("translateBtn");
  const htmlTag = document.documentElement;

  if (isBangla) {
    contentDiv.innerHTML = englishContent;
    translateBtn.textContent = "বাংলা";
    htmlTag.lang = "en";
  } else {
    contentDiv.innerHTML = banglaContent;
    translateBtn.textContent = "English";
    htmlTag.lang = "bn";
  }
  isBangla = !isBangla;
}

// Theme functions
function applyTheme(mode) {
  const themeBtn = document.getElementById("themeBtn");
  const root = document.body;

  if (mode === "system") {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    themeBtn.textContent = "🖥️";
  } else {
    root.setAttribute("data-theme", mode);
    themeBtn.textContent = mode === "dark" ? "🌙" : "☀️";
  }

  themeMode = mode;
  localStorage.setItem("theme-mode", mode);
}

function toggleTheme() {
  const nextMode = themeMode === "dark" ? "light" :
                   themeMode === "light" ? "system" : "dark";
  applyTheme(nextMode);
}

function initTheme() {
  const saved = localStorage.getItem("theme-mode") || "system";
  applyTheme(saved);

  // Auto reapply system theme on system change
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (themeMode === "system") {
      applyTheme("system");
    }
  });
}

// Initialize theme when DOM is loaded
document.addEventListener("DOMContentLoaded", initTheme);

// Make functions available globally
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;
