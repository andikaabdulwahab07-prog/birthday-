// script.js

// Wait until the page and animations are done
window.addEventListener('load', () => {
    // Delay the confetti start until the cake/candle animations are finished
    setTimeout(() => {
        startConfetti();
    }, 5000); // Adjust delay if animations are longer
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

    const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#a4ffc4', '#ffffff'];

    // Create hundreds of confetti dots
    for (let i = 0; i < 200; i++) {
        const dot = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 5; // stagger start
        dot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -20px;
            left: ${Math.random() * 100}vw;
            border-radius: 50%;
            opacity: ${Math.random()};
            transform: translateY(0) rotate(${Math.random() * 360}deg);
            animation: confettiFall ${Math.random() * 3 + 3}s linear ${delay}s infinite;
        `;
        container.appendChild(dot);
    }

    // Add CSS for the fall animation dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

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
setTimeout(typeWriter, 500);

}

