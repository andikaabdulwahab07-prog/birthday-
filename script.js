
window.addEventListener('load', () => {
  setTimeout(() => {
    startConfetti();
  }, 5000);
});

function startConfetti() {
  const container = document.createElement('div');
  container.id = 'confetti-container';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
    z-index: 9999;
  `;
  document.body.appendChild(container);

  const colors = ['#f2d74e','#95c3de','#ff9a91','#a4ffc4','#ffffff'];

  for (let i = 0; i < 200; i++) {
    const dot = document.createElement('div');
    const size = Math.random() * 8 + 4;
    const delay = Math.random() * 5;

    dot.style.cssText = `
      position:absolute;
      width:${size}px;
      height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      top:-20px;
      left:${Math.random()*100}vw;
      border-radius:50%;
      opacity:${Math.random()};
      animation:confettiFall ${Math.random()*3+3}s linear ${delay}s infinite;
    `;

    container.appendChild(dot);
  }

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes confettiFall {
      0% { transform:translateY(0); opacity:1; }
      100% { transform:translateY(110vh); opacity:0; }
    }
  `;
  document.head.appendChild(style);

const btn = document.getElementById("music-toggle");
const music = document.getElementById("bg-music");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "⏸";
    isPlaying = true;
  } else {
    music.pause();
    btn.textContent = "♪";
    isPlaying = false;
  }
});



document.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().catch(()=>{});
    btn.textContent = "⏸";
    isPlaying = true;
  }
}, { once: true });
