$(document).ready(function() {
  const music = document.getElementById('birthdayMusic');
  const playPauseBtn = document.getElementById('playPauseBtn');
  
  // MUSIC CONTROL
  playPauseBtn.addEventListener('click', function() {
    if (music.paused) {
      music.play();
      playPauseBtn.classList.add('playing');
    } else {
      music.pause();
      playPauseBtn.classList.remove('playing');
    }
  });
  
  // AUTO PLAY MUSIC (opsional - beberapa browser block autoplay)
  // music.play().catch(e => console.log('Autoplay blocked'));
  
  // CONFETTI EFFECT
  function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = confetti.style.width;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
      confetti.style.top = '-10px';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '5';
      confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
      
      confettiContainer.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  }
  
  // CONFETTI CSS ANIMATION (tambahkan di CSS)
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // TRIGGER CONFETTI SAAT ANIMASI KUE SELESAI
  setTimeout(createConfetti, 5000);
  
  // ULANG CONFETTI
  setInterval(createConfetti, 8000);
});
