const sections = document.querySelectorAll('.section');
const music = document.getElementById('bg-music');
const clickSound = document.getElementById('click-sound');

// Pesan cinta (MUDAH DIEDIT ❤️)
const loveMessage = `
Aku mungkin tidak sempurna,
tapi mencintaimu adalah hal paling indah
yang pernah aku lakukan.

Terima kasih sudah hadir,
tertawa bersamaku,
dan tetap di sampingku.

Aku sayang kamu, selalu. ❤️
`;

let current = 0;

// Pindah halaman
function showNext() {
  sections[current].classList.remove('active');
  current++;
  sections[current].classList.add('active');
}

// Start
function startLove() {
  clickSound.play();
  music.play();
  showNext();
  typeText();
  setTimeout(showNext, 6000);
}

// Efek typing
function typeText() {
  const el = document.getElementById('typing-text');
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += loveMessage.charAt(i);
    i++;
    if (i >= loveMessage.length) clearInterval(interval);
  }, 50);
}

// Tombol NO kabur 😆
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', () => {
  noBtn.style.position = 'absolute';
  noBtn.style.top = Math.random() * 80 + '%';
  noBtn.style.left = Math.random() * 80 + '%';
});

// Final screen
function finalScreen() {
  clickSound.play();
  showNext();
  startHearts();
}

// Hearts animation
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function startHearts() {
  setInterval(() => {
    hearts.push({
      x: Math.random() * canvas.width,
      y: canvas.height,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1
    });
  }, 300);
  animateHearts();
}

function animateHearts() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach((h, i) => {
    ctx.font = h.size + "px Arial";
    ctx.fillText("❤️", h.x, h.y);
    h.y -= h.speed;
    if (h.y < 0) hearts.splice(i,1);
  });
  requestAnimationFrame(animateHearts);
}
