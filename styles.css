/* Editá únicamente este bloque para personalizar la invitación. */
const INVITATION = {
  names: "VALEN & JUANI",
  weddingDate: "2027-05-07T19:00:00-03:00",
  dateLabel: "7 DE MAYO 2027",
  venue: "SALÓN LA GUADALUPE, LULUNTA, MAIPÚ",
  links: { map: "https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n+La+Guadalupe%2C+Lulunta%2C+Maip%C3%BA%2C+Mendoza", album: "#", gift: "#" },
  googleFormAction: "https://docs.google.com/forms/d/e/1FAIpQLSd9ZTevViuHTSpcHsspT_hT8-7my2PINSS59RJSjbnlO-Be8A/formResponse",
  photos: [
    "https://latarjetadigital.com.ar/wp-content/uploads/2026/04/B-LUANAYNAZA2-819x1024.webp",
    "https://latarjetadigital.com.ar/wp-content/uploads/2026/04/B-LUANAYNAZA4-819x1024.webp",
    "https://latarjetadigital.com.ar/wp-content/uploads/2026/04/B-LUANAYNAZA5-819x1024.webp"
  ],
  itinerary: [
    { title: "CEREMONIA", time: "17:30 HS" },
    { title: "CIVIL", time: "19:00 HS" },
    { title: "CENA", time: "20:00 HS" },
    { title: "FIESTA", time: "22:00 HS" }
  ]
};

document.querySelectorAll('[data-content="names"]').forEach(el => el.textContent = INVITATION.names);
document.querySelector('[data-content="dateLabel"]').textContent = INVITATION.dateLabel;
document.querySelector('[data-content="venue"]').textContent = INVITATION.venue;
document.querySelectorAll('[data-link]').forEach(el => el.href = INVITATION.links[el.dataset.link]);
document.querySelectorAll('[data-photo]').forEach(el => el.src = INVITATION.photos[Number(el.dataset.photo)]);

const timeline = document.querySelector('#timeline');
const itineraryIcons = [
  "https://latarjetadigital.com.ar/wp-content/uploads/2024/11/2e2e2e-gris-oscuro-icono-11.gif",
  "https://latarjetadigital.com.ar/wp-content/uploads/2024/11/2e2e2e-gris-oscuro-icono-19.gif",
  "https://latarjetadigital.com.ar/wp-content/uploads/2024/11/2e2e2e-gris-oscuro-icono-16.gif",
  "https://latarjetadigital.com.ar/wp-content/uploads/2024/11/2e2e2e-gris-oscuro-icono-25.gif"
];
INVITATION.itinerary.forEach((item, index) => timeline.insertAdjacentHTML('beforeend', `<article class="timeline__item reveal"><img class="line-icon" src="${itineraryIcons[index]}" alt=""><h3>${item.title}</h3><p>${item.time}</p></article>`));

const entrance = document.querySelector('#entrance');
const backgroundMusic = document.querySelector('#backgroundMusic');
const soundButton = document.querySelector('#soundButton');
backgroundMusic.volume = 0.55;
document.querySelector('#enterButton').addEventListener('click', () => {
  entrance.classList.add('is-hidden'); document.body.classList.remove('locked');
  document.querySelector('#content').setAttribute('aria-hidden', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  calendarDay.textContent = '1';
  calendarObserver.observe(document.querySelector('.calendar-icon'));
  backgroundMusic.play().then(() => {
    soundButton.textContent = 'Ⅱ';
    soundButton.setAttribute('aria-label', 'Pausar música');
  }).catch(() => {
    soundButton.textContent = '♪';
    soundButton.setAttribute('aria-label', 'Reproducir música');
  });
});

const calendarDay = document.querySelector('#calendarDay');
let calendarAnimated = false;
const calendarObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting || calendarAnimated) return;
  calendarAnimated = true;
  const calendarIcon = document.querySelector('.calendar-icon');
  calendarIcon.classList.add('is-animating');
  let day = 1;
  const turnPage = setInterval(() => {
    calendarDay.classList.add('is-flipping');
    setTimeout(() => {
      day += 1;
      calendarDay.textContent = day;
      calendarDay.classList.remove('is-flipping');
      if (day === 7) { clearInterval(turnPage); calendarIcon.classList.remove('is-animating'); }
    }, 220);
  }, 620);
  calendarObserver.disconnect();
}), { threshold: .9 });

function updateCountdown() {
  const distance = Math.max(0, new Date(INVITATION.weddingDate) - new Date());
  const values = { days: Math.floor(distance / 86400000), hours: Math.floor(distance / 3600000) % 24, minutes: Math.floor(distance / 60000) % 60, seconds: Math.floor(distance / 1000) % 60 };
  Object.entries(values).forEach(([unit, value]) => document.querySelector(`[data-unit="${unit}"]`).textContent = String(value).padStart(unit === 'days' ? 3 : 2, '0'));
  const secondsElement = document.querySelector('[data-unit="seconds"]');
  secondsElement.classList.remove('is-ticking');
  requestAnimationFrame(() => secondsElement.classList.add('is-ticking'));
}
updateCountdown();
setInterval(updateCountdown, 1000);

const track = document.querySelector('#carouselTrack');
const dots = document.querySelector('#carouselDots');
INVITATION.photos.forEach((src, i) => {
  track.insertAdjacentHTML('beforeend', `<figure class="carousel__slide"><img src="${src}" alt="Fotografía ${i + 1} de Valen y Juani" draggable="false"></figure>`);
  dots.insertAdjacentHTML('beforeend', `<button class="carousel__dot${i === 0 ? ' is-active' : ''}" aria-label="Ver fotografía ${i + 1}" data-index="${i}"></button>`);
});
let current = 0, startX = 0, deltaX = 0, autoplay;
function showSlide(index) { current = (index + INVITATION.photos.length) % INVITATION.photos.length; track.style.transform = `translateX(-${current * 100}%)`; dots.querySelectorAll('button').forEach((dot, i) => dot.classList.toggle('is-active', i === current)); }
function restartAutoplay() { clearInterval(autoplay); autoplay = setInterval(() => showSlide(current + 1), 5000); }
document.querySelectorAll('[data-carousel]').forEach(button => button.addEventListener('click', () => { showSlide(current + (button.dataset.carousel === 'next' ? 1 : -1)); restartAutoplay(); }));
dots.addEventListener('click', event => { const dot = event.target.closest('button'); if (!dot) return; showSlide(Number(dot.dataset.index)); restartAutoplay(); });
const carousel = document.querySelector('#carousel');
carousel.addEventListener('pointerdown', event => { startX = event.clientX; deltaX = 0; carousel.setPointerCapture(event.pointerId); clearInterval(autoplay); });
carousel.addEventListener('pointermove', event => { if (!startX) return; deltaX = event.clientX - startX; });
carousel.addEventListener('pointerup', () => { if (Math.abs(deltaX) > 45) showSlide(current + (deltaX < 0 ? 1 : -1)); startX = 0; restartAutoplay(); });
restartAutoplay();

const giftToggle = document.querySelector('#giftToggle');
const bankData = document.querySelector('#bankData');
giftToggle.addEventListener('click', () => {
  const opening = bankData.hidden;
  bankData.hidden = false;
  requestAnimationFrame(() => bankData.classList.toggle('is-visible', opening));
  giftToggle.setAttribute('aria-expanded', String(opening));
  giftToggle.textContent = opening ? 'OCULTAR DATOS' : 'VER DATOS';
  if (!opening) setTimeout(() => { bankData.hidden = true; }, 380);
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const riceCanvas = document.querySelector('#riceToss');
const riceContext = riceCanvas.getContext('2d');
let riceGrains = [];
let riceFrame = 0;
let riceActive = false;

function sizeRiceCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  riceCanvas.width = Math.round(window.innerWidth * ratio);
  riceCanvas.height = Math.round(window.innerHeight * ratio);
  riceCanvas.style.width = `${window.innerWidth}px`;
  riceCanvas.style.height = `${window.innerHeight}px`;
  riceContext.setTransform(ratio, 0, 0, ratio, 0, 0);
}

class RiceGrain {
  constructor(side, delay) {
    this.delay = delay;
    this.age = 0;
    this.x = side === 'left' ? -18 : window.innerWidth + 18;
    this.y = window.innerHeight * (.66 + Math.random() * .24);
    this.vx = (side === 'left' ? 1 : -1) * (2.9 + Math.random() * 4.1);
    this.vy = -(7.5 + Math.random() * 9.5);
    this.gravity = .22 + Math.random() * .12;
    this.width = 1.6 + Math.random() * 1.5;
    this.length = 7 + Math.random() * 7;
    this.angle = Math.random() * Math.PI * 2;
    this.spin = (Math.random() - .5) * .24;
    this.opacity = .76 + Math.random() * .22;
  }
  update() {
    this.age += 1;
    if (this.age < this.delay) return;
    this.x += this.vx;
    this.vx *= .997;
    this.vy += this.gravity;
    this.y += this.vy;
    this.angle += this.spin;
  }
  draw() {
    if (this.age < this.delay) return;
    riceContext.save();
    riceContext.translate(this.x, this.y);
    riceContext.rotate(this.angle);
    riceContext.shadowColor = 'rgba(47, 65, 45, .22)';
    riceContext.shadowBlur = 4;
    riceContext.shadowOffsetY = 2;
    riceContext.fillStyle = `rgba(255, 253, 244, ${this.opacity})`;
    riceContext.beginPath();
    riceContext.ellipse(0, 0, this.width, this.length, 0, 0, Math.PI * 2);
    riceContext.fill();
    riceContext.restore();
  }
}

function animateRice() {
  riceContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  riceGrains.forEach(grain => { grain.update(); grain.draw(); });
  riceGrains = riceGrains.filter(grain => grain.age < grain.delay || grain.y < window.innerHeight + 35);
  if (riceActive || riceGrains.length) riceFrame = requestAnimationFrame(animateRice);
  else riceContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function throwRice() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  cancelAnimationFrame(riceFrame);
  sizeRiceCanvas();
  riceGrains = [];
  riceActive = true;
  riceCanvas.classList.add('is-visible');
  const amount = window.innerWidth < 640 ? 86 : 124;
  for (let index = 0; index < amount; index += 1) {
    const side = index % 2 === 0 ? 'left' : 'right';
    riceGrains.push(new RiceGrain(side, Math.floor(Math.random() * 62)));
  }
  animateRice();
  setTimeout(() => { riceActive = false; riceCanvas.classList.remove('is-visible'); }, 4300);
}

window.addEventListener('resize', () => { if (riceActive) sizeRiceCanvas(); });
document.querySelector('#rsvpForm').addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const message = document.querySelector('#formMessage');
  const formData = new FormData(form);
  const googleData = new URLSearchParams({
    'entry.1304339184': formData.get('fullName'),
    'entry.1447069796': formData.get('attendance'),
    'entry.588940469': formData.get('guests'),
    'entry.721034166': formData.get('food'),
    'entry.998629186': formData.get('message') || ''
  });
  button.disabled = true;
  button.textContent = 'ENVIANDO...';
  message.textContent = '';
  try {
    await fetch(INVITATION.googleFormAction, { method: 'POST', mode: 'no-cors', body: googleData });
    form.reset();
    message.textContent = '¡Gracias! Recibimos tu respuesta.';
    throwRice();
  } catch (error) {
    message.textContent = 'No pudimos enviar la respuesta. Por favor, intentá nuevamente.';
  } finally {
    button.disabled = false;
    button.textContent = 'CONFIRMAR';
  }
});
soundButton.addEventListener('click', async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      soundButton.textContent = 'Ⅱ';
      soundButton.setAttribute('aria-label', 'Pausar música');
    } catch (error) {
      soundButton.textContent = '♪';
    }
  } else {
    backgroundMusic.pause();
    soundButton.textContent = '♪';
    soundButton.setAttribute('aria-label', 'Reproducir música');
  }
});
