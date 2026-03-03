function initDownloadBanner(): void {
  const banner = document.getElementById('download-banner');
  if (!banner) return;

  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);

  const iosBtn = banner.querySelector<HTMLElement>('.download-banner-ios');
  const androidBtn = banner.querySelector<HTMLElement>('.download-banner-android');

  if (isIOS) {
    iosBtn?.removeAttribute('hidden');
  } else if (isAndroid) {
    androidBtn?.removeAttribute('hidden');
  } else {
    iosBtn?.removeAttribute('hidden');
    androidBtn?.removeAttribute('hidden');
  }

  const hero = document.querySelector('.app-hero');
  if (!hero) return;

  const observer = new IntersectionObserver(([entry]) => {
    banner.classList.toggle('is-visible', !entry.isIntersecting);
  }, { threshold: 0 });

  observer.observe(hero);
  banner.removeAttribute('hidden');

  /* Reserve space so the footer isn't hidden behind the fixed banner */
  document.body.style.paddingBottom = `${banner.offsetHeight}px`;
}

export { initDownloadBanner };
