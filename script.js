const envelope = document.getElementById("envelope");
const messageBox = document.getElementById("message");
const music = document.getElementById("bgMusic");

const HER_NAME = "My Angel Princess"; // change name

const messages = [
  `Hey ${HER_NAME} 💕`,
  "I just wanted to say…",
  "Entering our first Valentines together, an eternity to go🌸",
  "Fake size 4 wearer",
  "There’s something important I need to ask you…"
];

let step = 0;

// start music on first tap
document.body.addEventListener("click", () => {
  music.play();
  document.getElementById("musicHint").style.display = "none";
}, { once: true });

envelope.addEventListener("click", () => {
  if (step < messages.length) {
    messageBox.textContent = messages[step];
    messageBox.classList.remove("hidden");

    envelope.style.top = Math.random() * 70 + "vh";
    envelope.style.left = Math.random() * 70 + "vw";

    step++;
  } else {
    messageBox.innerHTML = `
      <h2>Will you be my Valentine? 💖</h2>
      <button onclick="yes()">YES YES YES 💕</button>
      <button id="noBtn">NO 😅</button>
    `;
    setTimeout(runNoButton, 100);
  }
});

function runNoButton() {
  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "vh";
    noBtn.style.left = Math.random() * 80 + "vw";
  });
}

function yes() {
  document.body.innerHTML = `
    <h1 style="text-align:center;margin-top:40vh;color:#ff4d88;">
      It's been a little over a year since I first laid eyes on you and I'm yet to grow tired of your eyes resting on mine.
      You are my wildest dream come true.
      From how you stay calm when it's all falling apart, to the way your voice sounds when you're merely speaking.
      Everything about you draws me in.
      I know GOD loves me so much HE blessing me with you.
      You are deeply adored my angel.
      By me, by the GOD who made you, by my heart that grows soft for you. 
      I thank GOD for you, the woman you are and the man I am because of you.
      I've found my good thing💖
    </h1>
  `;
}

// floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);
