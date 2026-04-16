document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("birthdayMusic");
  const btn = document.getElementById("playPauseBtn");

  btn.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      btn.textContent = "⏸";
    } else {
      music.pause();
      btn.textContent = "▶";
    }
  });

  function createConfetti() {
    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 30; i++) {
      const el = document.createElement("div");
      el.style.position = "fixed";
      el.style.top = "-10px";
      el.style.left = Math.random() * 100 + "vw";
      el.style.width = "6px";
      el.style.height = "6px";
      el.style.background = "white";
      el.style.animation = "fall 3s linear forwards";

      container.appendChild(el);

      setTimeout(() => el.remove(), 3000);
    }
  }

  setInterval(createConfetti, 3000);
});

/* animasi */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
