(function () {
    var carousel = document.getElementById('screenshots-carousel');
    if (!carousel) return;

    var track = carousel.querySelector('.carousel-track');
    var viewport = carousel.querySelector('.carousel-viewport');
    var dotsContainer = carousel.querySelector('.carousel-dots');
    var prevBtn = carousel.querySelector('.carousel-prev');
    var nextBtn = carousel.querySelector('.carousel-next');
    var frames = track.querySelectorAll('.screenshot-frame');
    var frameCount = frames.length;

    if (!frameCount) return;

    var currentIndex = 0;

    function isMobile() { return window.innerWidth <= 768; }

    /* --- Dots --- */
    frames.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Go to screenshot ' + (i + 1));
        dot.addEventListener('click', function () { goToSlide(i); });
        dotsContainer.appendChild(dot);
    });

    var dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateDots() {
        dots.forEach(function (d, i) {
            d.classList.toggle('is-active', i === currentIndex);
        });
    }

    function updateArrows() {
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === frameCount - 1;
    }

    /* --- Slide navigation (desktop) --- */
    function getSlideOffset(index) {
        if (!frames[index]) return 0;
        var viewportWidth = viewport.offsetWidth;
        var frameLeft = frames[index].offsetLeft;
        var frameWidth = frames[index].offsetWidth;
        var offset = frameLeft - (viewportWidth / 2) + (frameWidth / 2);
        var maxOffset = track.scrollWidth - viewportWidth;
        return Math.max(0, Math.min(offset, maxOffset));
    }

    function goToSlide(index) {
        if (index < 0 || index >= frameCount) return;
        currentIndex = index;
        updateDots();
        updateArrows();

        if (isMobile()) {
            frames[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            var offset = getSlideOffset(index);
            track.style.transform = 'translateX(' + (-offset) + 'px)';
        }
    }

    /* --- Arrow clicks --- */
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) goToSlide(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (currentIndex < frameCount - 1) goToSlide(currentIndex + 1);
        });
    }

    /* --- Touch swipe --- */
    var touchStartX = 0;
    var touchDeltaX = 0;
    var SWIPE_THRESHOLD = 50;

    viewport.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
        touchDeltaX = 0;
    }, { passive: true });

    viewport.addEventListener('touchmove', function (e) {
        touchDeltaX = e.touches[0].clientX - touchStartX;
    }, { passive: true });

    viewport.addEventListener('touchend', function () {
        if (isMobile()) return;
        if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
            if (touchDeltaX < 0 && currentIndex < frameCount - 1) {
                goToSlide(currentIndex + 1);
            } else if (touchDeltaX > 0 && currentIndex > 0) {
                goToSlide(currentIndex - 1);
            }
        }
    });

    /* --- Mobile scroll sync --- */
    var scrollTimeout;
    viewport.addEventListener('scroll', function () {
        if (!isMobile()) return;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            var viewportRect = viewport.getBoundingClientRect();
            var viewportCenter = viewportRect.left + viewportRect.width / 2;
            var closestIndex = 0;
            var closestDist = Infinity;

            frames.forEach(function (frame, i) {
                var rect = frame.getBoundingClientRect();
                var frameCenter = rect.left + rect.width / 2;
                var dist = Math.abs(frameCenter - viewportCenter);
                if (dist < closestDist) { closestDist = dist; closestIndex = i; }
            });

            currentIndex = closestIndex;
            updateDots();
            updateArrows();
        }, 60);
    }, { passive: true });

    /* --- Keyboard --- */
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < frameCount - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    /* --- Resize --- */
    var resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            if (!isMobile()) goToSlide(currentIndex);
        }, 150);
    });

    /* --- Init --- */
    updateArrows();
})();
