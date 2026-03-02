(function () {
    var carousel = document.getElementById('apps-carousel');
    if (!carousel) return;

    var track = carousel.querySelector('.apps-carousel-track');
    var viewport = carousel.querySelector('.apps-carousel-viewport');
    var dotsContainer = carousel.querySelector('.carousel-dots');
    var prevBtn = carousel.querySelector('.carousel-prev');
    var nextBtn = carousel.querySelector('.carousel-next');
    var cards = track.querySelectorAll('.app-card');
    var cardCount = cards.length;

    if (!cardCount) return;

    var currentIndex = 0;

    function isMobile() { return window.innerWidth <= 768; }

    /* --- Dots --- */
    cards.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Go to app ' + (i + 1));
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
        if (nextBtn) nextBtn.disabled = currentIndex === cardCount - 1;
    }

    function getSlideOffset(index) {
        if (!cards[index]) return 0;
        var viewportWidth = viewport.offsetWidth;
        var cardLeft = cards[index].offsetLeft;
        var cardWidth = cards[index].offsetWidth;
        var offset = cardLeft - (viewportWidth / 2) + (cardWidth / 2);
        var maxOffset = track.scrollWidth - viewportWidth;
        return Math.max(0, Math.min(offset, maxOffset));
    }

    function goToSlide(index) {
        if (index < 0 || index >= cardCount) return;
        currentIndex = index;
        updateDots();
        updateArrows();

        if (isMobile()) {
            cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            var offset = getSlideOffset(index);
            track.style.transform = 'translateX(' + (-offset) + 'px)';
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) goToSlide(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (currentIndex < cardCount - 1) goToSlide(currentIndex + 1);
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
            if (touchDeltaX < 0 && currentIndex < cardCount - 1) {
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

            cards.forEach(function (card, i) {
                var rect = card.getBoundingClientRect();
                var cardCenter = rect.left + rect.width / 2;
                var dist = Math.abs(cardCenter - viewportCenter);
                if (dist < closestDist) { closestDist = dist; closestIndex = i; }
            });

            currentIndex = closestIndex;
            updateDots();
            updateArrows();
        }, 60);
    }, { passive: true });

    /* --- Resize --- */
    var resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            if (!isMobile()) goToSlide(currentIndex);
        }, 150);
    });

    updateArrows();
})();
