// CONFETTI
window.addEventListener('load', () => {
  setTimeout(startConfetti, 5000);
});

// AUTOPLAY (butuh tap sekali)
document.addEventListener("click", () => {
  const music = document.getElementById("bgm");
  music.play();
}, { once: true });

function startConfetti() {
  const container = document.getElementById('confetti-container');

  for (let i = 0; i < 100; i++) {
    const el = document.createElement('div');
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

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
