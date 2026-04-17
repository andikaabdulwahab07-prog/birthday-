
document.addEventListener('DOMContentLoaded', function() {
  
  // 🎵 ELEMENTS
  const audio = document.getElementById('birthdayMusic');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const playBtn = document.getElementById('playMusic');
  
  // Set volume 50%
  if (audio) audio.volume = 0.5;
  
  // Toggle Music Function
  window.toggleMusic = function() {
    if (audio.paused) {
      audio.play().then(() => {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
        playBtn.style.background = 'linear-gradient(45deg, #4caf50, #8bc34a)';
      }).catch(() => {
        console.log('User harus klik dulu');
      });
    } else {
      audio.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
      playBtn.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  };
  
  
  document.addEventListener('click', function() {
    if (audio && audio.paused) {
      audio.play().catch(() => {});
    }
  }, { once: true });

  setTimeout(() => {
    startConfetti();
  }, 5000);
});


function startConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  const colors = ['#ff9a91', '#f2d74e', '#a4ffc4', '#fecfef', '#ff6b9d', '#c2185b'];

  for (let i = 0; i < 150; i++) {
    const dot = document.createElement('div');
    const size = Math.random() * 10 + 4;
    const delay = Math.random() * 3;
    
    dot.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      top: -20px;
      left: ${Math.random() * 100}vw;
      border-radius: 50%;
      opacity: ${0.7 + Math.random() * 0.3};
      animation: confettiFall ${3 + Math.random() * 3}s linear ${delay}s infinite;
    `;
    container.appendChild(dot);
  }
}
