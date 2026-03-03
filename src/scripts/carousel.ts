interface CarouselOptions {
  carouselId: string;
  trackSelector: string;
  itemSelector: string;
}

function initCarousel({ carouselId, trackSelector, itemSelector }: CarouselOptions): void {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const track = carousel.querySelector<HTMLElement>(trackSelector);
  const viewport = carousel.querySelector<HTMLElement>('.carousel-viewport, .apps-carousel-viewport');
  const dotsContainer = carousel.querySelector<HTMLElement>('.carousel-dots');
  const prevBtn = carousel.querySelector<HTMLButtonElement>('.carousel-prev');
  const nextBtn = carousel.querySelector<HTMLButtonElement>('.carousel-next');

  if (!track || !viewport || !dotsContainer) return;

  const items = track.querySelectorAll<HTMLElement>(itemSelector);
  const itemCount = items.length;
  if (!itemCount) return;

  let currentIndex = 0;

  function isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  /* --- Dots --- */
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.carousel-dot');

  function updateDots(): void {
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === currentIndex);
    });
  }

  function updateArrows(): void {
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === itemCount - 1;
  }

  function getSlideOffset(index: number): number {
    if (!items[index]) return 0;
    const viewportWidth = viewport!.offsetWidth;
    const itemLeft = items[index].offsetLeft;
    const itemWidth = items[index].offsetWidth;
    const offset = itemLeft - viewportWidth / 2 + itemWidth / 2;
    const maxOffset = track!.scrollWidth - viewportWidth;
    return Math.max(0, Math.min(offset, maxOffset));
  }

  function goToSlide(index: number): void {
    if (index < 0 || index >= itemCount) return;
    currentIndex = index;
    updateDots();
    updateArrows();

    if (isMobile()) {
      items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      const offset = getSlideOffset(index);
      track!.style.transform = `translateX(${-offset}px)`;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) goToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < itemCount - 1) goToSlide(currentIndex + 1);
    });
  }

  /* --- Touch swipe --- */
  let touchStartX = 0;
  let touchDeltaX = 0;
  const SWIPE_THRESHOLD = 50;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (isMobile()) return;
    if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
      if (touchDeltaX < 0 && currentIndex < itemCount - 1) {
        goToSlide(currentIndex + 1);
      } else if (touchDeltaX > 0 && currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    }
  });

  /* --- Mobile scroll sync --- */
  let scrollTimeout: ReturnType<typeof setTimeout>;
  viewport.addEventListener('scroll', () => {
    if (!isMobile()) return;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const viewportRect = viewport!.getBoundingClientRect();
      const viewportCenter = viewportRect.left + viewportRect.width / 2;
      let closestIndex = 0;
      let closestDist = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(itemCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });

      currentIndex = closestIndex;
      updateDots();
      updateArrows();
    }, 60);
  }, { passive: true });

  /* --- Keyboard --- */
  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < itemCount - 1) {
      goToSlide(currentIndex + 1);
    }
  });

  /* --- Resize --- */
  let resizeTimeout: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (!isMobile()) goToSlide(currentIndex);
    }, 150);
  });

  updateArrows();
}

export { initCarousel };
export type { CarouselOptions };
