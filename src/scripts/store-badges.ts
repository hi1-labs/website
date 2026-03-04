import { isIOS, isAndroid } from './platform';

function initStoreBadges(): void {
  const container = document.querySelector('.store-badges');
  if (!container) return;

  const iosBadge = container.querySelector<HTMLElement>('[data-platform="ios"]');
  const androidBadge = container.querySelector<HTMLElement>('[data-platform="android"]');

  if (isIOS) {
    iosBadge?.classList.add('store-badge--visible');
  } else if (isAndroid) {
    androidBadge?.classList.add('store-badge--visible');
  } else {
    container.classList.add('store-badges--ready');
  }
}

export { initStoreBadges };
