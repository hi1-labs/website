import { SCROLL_THRESHOLD, LANG_STORAGE_KEY } from '../data/site';

const nav = document.querySelector('.nav-transparent');
const burger = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

function updateNav(): void {
  if (!nav) return;
  nav.classList.toggle('nav-scrolled', window.scrollY > SCROLL_THRESHOLD);
}

/* ---- Scroll behaviour (transparent nav only) ---- */

if (nav) {
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

/* ---- Language switcher: persist choice ---- */

document.querySelectorAll<HTMLAnchorElement>('.lang-dropdown-item').forEach((link) => {
  link.addEventListener('click', () => {
    const match = link.getAttribute('href')?.match(/^\/(\w{2})\//);
    if (match) {
      localStorage.setItem(LANG_STORAGE_KEY, match[1]);
    }
  });
});

/* ---- Mobile menu ---- */

if (burger && menu) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('is-open');
    menu.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (nav) {
      if (isOpen) {
        nav.classList.add('nav-scrolled');
      } else {
        updateNav();
      }
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open');
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';

      if (nav) {
        updateNav();
      }
    });
  });
}
