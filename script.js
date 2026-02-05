/* ===========================
   PRELOADER WITH POLAROIDS
=========================== */
window.addEventListener("load", () => {
  const polaroids = document.querySelectorAll(".polaroid");
  const preloader = document.getElementById("preloader");
  const music = document.getElementById("bgMusic");

  let index = 0;

  function showNext() {
    if (index > 0) {
      polaroids[index - 1].style.opacity = 0;
    }

    if (index < polaroids.length) {
      const current = polaroids[index];
      current.style.opacity = 1;
      current.style.transform = "scale(1)";

      // Start music immediately with the first image
      if (index === 0) {
        music.play().catch(() => {
          // some browsers block autoplay, start on first click instead
          document.body.addEventListener("click", () => music.play(), { once: true });
        });
      }

      index++;
      setTimeout(showNext, 2500); // slower pace
    } else {
      setTimeout(() => {
        preloader.style.transition = "opacity 1s ease";
        preloader.style.opacity = 0;
        setTimeout(() => preloader.remove(), 1000);
      }, 800);
    }
  }

  showNext();
});

/* ===========================
   MAIN ENVELOPE INTERACTION
=========================== */
const envelope = document.getElementById("envelope");
const messageBox = document.getElementById("message");
const music = document.getElementById("bgMusic");

const messages = [
  "My angel princess",
  "Entering our first Valentine's Day together,",
  "an eternity to go.",
  "Fake size 4 wearer.",
  "There is something I need to ask you…"
];

let step = 0;

envelope.addEventListener("click", () => {
  if (step < messages.length) {
    messageBox.textContent = messages[step];
    messageBox.classList.remove("hidden");

    envelope.style.top = Math.random() * 70 + "vh";
    envelope.style.left = Math.random() * 70 + "vw";

    step++;
  } else {
    // Final Valentine prompt with typewriter effect
    messageBox.innerHTML = `
      <h2 id="valentine-text"></h2>
      <button onclick="yes()">YES 💗</button>
      <button id="noBtn">No 😅</button>
    `;

    setTimeout(runNoButton, 100);

    const valentineText = document.getElementById("valentine-text");
    typeWriter("Will you be my Valentine? 💗", valentineText, 60);
  }
});

/* ===========================
   TYPEWRITER FUNCTION
=========================== */
function typeWriter(text, element, speed = 60) {
  let i = 0;
  element.textContent = "";

  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* ===========================
   NO BUTTON RUNAWAY
=========================== */
function runNoButton() {
  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "vh";
    noBtn.style.left = Math.random() * 80 + "vw";
  });
}

/* ===========================
   YES BUTTON FINAL MESSAGE
=========================== */
function yes() {
  const finalSentences = [
    "It’s been a little over a year since I first laid eyes on you and I’m yet to grow tired of your eyes resting on mine.",
    "You are my wildest dream come true.",
    "From how you stay calm when it’s all falling apart, to the way your voice sounds when you’re merely speaking.",
    "Everything about you draws me in.",
    "I know God loves me so much he blessed me with you.",
    "You are so deeply adored my angel.",
    "By me, by the God who made you, by my heart that grows soft for you.",
    "I thank God for you, the woman you are and the man I am becoming because of you.",
    "I’ve found my good thing 💗"
  ];

  // Hide everything else instead of removing the body
  document.getElementById("preloader")?.remove(); // remove preloader
  document.getElementById("envelope").style.display = "none";
  document.getElementById("message").style.display = "none";

  // Add final screen without touching audio
  const finalScreen = document.createElement("div");
  finalScreen.id = "finalScreen";
  finalScreen.innerHTML = `
    <h1>YOU SAID YES 💗</h1>
    <div id="final-message"></div>
  `;
  document.body.appendChild(finalScreen);

  const finalMessage = document.getElementById("final-message");

  // Type line by line
  function typeLineByLine(lines, el, lineSpeed = 25, delayBetween = 700) {
    let lineIndex = 0;

    function typeSentence() {
      if (lineIndex >= lines.length) return;

      const line = document.createElement("p");
      el.appendChild(line);

      let charIndex = 0;
      const interval = setInterval(() => {
        line.textContent += lines[lineIndex].charAt(charIndex);
        charIndex++;
        if (charIndex >= lines[lineIndex].length) {
          clearInterval(interval);
          lineIndex++;
          setTimeout(typeSentence, delayBetween); // pause before next line
        }
      }, lineSpeed);
    }

    typeSentence();
  }

  typeLineByLine(finalSentences, finalMessage, 25, 700);
}


/* ===========================
   FLOATING HEARTS
=========================== */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);
