const STORAGE_KEY = 'hi1-theme';
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function getCurrentTheme(): string {
  const explicit = root.getAttribute('data-theme');
  if (explicit) return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const current = getCurrentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}
