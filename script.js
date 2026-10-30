// Teléfono: cámbialo aquí y se actualiza en toda la web
const PHONE = { raw: '+34669963439', pretty: '669 96 34 39' };

document.querySelectorAll('[data-phone]').forEach(a => a.setAttribute('href', 'tel:' + PHONE.raw));
document.querySelectorAll('[data-phone-text]').forEach(el => (el.textContent = PHONE.pretty));

// Nav: fondo al hacer scroll + menú móvil
const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');
const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('#links a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
}));

// Pestañas de la carta
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab, .panel').forEach(el => el.classList.remove('on'));
  tab.classList.add('on');
  document.getElementById(tab.dataset.tab).classList.add('on');
}));

// Aparición al hacer scroll
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Si no hay vídeo, que no se quede un hueco negro
const video = document.querySelector('.hero-video');
video.addEventListener('error', () => video.remove(), true);
video.querySelector('source').addEventListener('error', () => video.remove());
