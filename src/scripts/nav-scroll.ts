const nav = document.querySelector('.nav-transparent');
const SCROLL_THRESHOLD = 16;

function updateNav(): void {
  if (!nav) return;
  nav.classList.toggle('nav-scrolled', window.scrollY > SCROLL_THRESHOLD);
}

if (nav) {
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}
