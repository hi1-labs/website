const burger = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');
const nav = document.querySelector('.nav-transparent');

function updateNav(): void {
  if (!nav) return;
  nav.classList.toggle('nav-scrolled', window.scrollY > 16);
}

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
