// script.js

// ===== TYPEWRITER =====
const loveText = document.getElementById("love-text");

const fullText = "my dearest love, i don’t think words will ever be enough to explain how much you truly mean to me. on your birthday, i just want you to know how grateful i am to have you in my life. you bring a kind of warmth and calm that i didn’t even realize i needed before i met you. everything just feels better with you around. i’m really proud of you of the person you are. your independence, the way you work so hard, how simple and genuine you are, and how incredibly patient you’ve always been with me. it’s something i admire more than you probably realize. i adore your kindness, your maturity, and the way you always understand me, even when i’m being a little childish. i’m sorry if i annoy you sometimes, it’s just my way of showing how much i care about you. i miss you more than i can put into words, and i really hope we can meet soon. i can’t wait for the day i get to hold you close and spend real and many moments with you. i love you, always. happy birthday, sayaang ❤️";

let index = 0;

function typeWriter(){
  if(index < fullText.length){
    loveText.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}


// ===== CONFETTI =====
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

    const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#a4ffc4', '#ffffff'];

    for (let i = 0; i < 200; i++) {
        const dot = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 5;

        dot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -20px;
            left: ${Math.random() * 100}vw;
            border-radius: 50%;
            opacity: ${Math.random()};
            animation: confettiFall ${Math.random() * 3 + 3}s linear ${delay}s infinite;
        `;

        container.appendChild(dot);
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes confettiFall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(110vh); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}


// ===== START SEMUA =====
window.addEventListener('load', () => {
    // mulai ngetik
    setTimeout(typeWriter, 500);

    // confetti belakangan biar dramatis dikit
    setTimeout(startConfetti, 5000);
});
