(function () {
    /* ===== Theme Toggle ===== */
    const STORAGE_KEY = 'hi1-theme';
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');

    function getCurrentTheme() {
        const explicit = root.getAttribute('data-theme');
        if (explicit) return explicit;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            const current = getCurrentTheme();
            const next = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem(STORAGE_KEY, next);
        });
    }

    /* ===== Transparent Nav on Scroll ===== */
    const nav = document.querySelector('.nav-transparent');
    const SCROLL_THRESHOLD = 16;

    function updateNav() {
        if (!nav) return;
        nav.classList.toggle('nav-scrolled', window.scrollY > SCROLL_THRESHOLD);
    }

    if (nav) {
        updateNav();
        window.addEventListener('scroll', updateNav, { passive: true });
    }

    /* ===== Mobile Menu ===== */
    const burger = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');

    if (burger && menu) {
        burger.addEventListener('click', function () {
            const isOpen = burger.classList.toggle('is-open');
            menu.classList.toggle('is-open', isOpen);
            burger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';

            if (nav) {
                if (isOpen) {
                    nav.classList.add('nav-scrolled');
                } else {
                    updateNav();
                }
            }
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
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
})();
