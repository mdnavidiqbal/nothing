const startDate = new Date(2024, 10, 3, 0, 0, 0);

function updateCounter() {
  const now = new Date();
  let difference = Math.max(0, now - startDate);

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

// MODALS

function openModal(id) {
  document.getElementById(id).classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
  document.body.style.overflow = "";
}

// Click outside modal to close

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
});

// MUSIC

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

async function toggleMusic() {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.classList.add("playing");
    } catch (error) {
      alert("Please add your music.mp3 file to the project folder.");
    }
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
}

// FINAL SURPRISE

let heartInterval;

function openSurprise() {
  const overlay = document.getElementById("surpriseOverlay");

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  createHearts();

  heartInterval = setInterval(createHearts, 500);
}

function closeSurprise() {
  document.getElementById("surpriseOverlay").classList.remove("active");
  document.body.style.overflow = "";

  clearInterval(heartInterval);
}

function createHearts() {
  const container = document.getElementById("surpriseHearts");

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 15 + Math.random() * 30 + "px";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8500);
  }
}

// ROSE PETAL EFFECT

function createPetal() {
  const petal = document.createElement("span");

  petal.className = "petal";
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = 12 + Math.random() * 15 + "px";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.getElementById("petals").appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 1200);

// ESCAPE KEY

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal.show").forEach((modal) => {
      modal.classList.remove("show");
    });

    closeSurprise();
    document.body.style.overflow = "";
  }
});
