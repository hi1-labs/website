(function () {
    const track = document.getElementById('screenshots-track');
    const dotsContainer = document.getElementById('screenshots-dots');

    if (!track || !dotsContainer) return;

    const frames = track.querySelectorAll('.screenshot-frame');

    frames.forEach(function (_, i) {
        const dot = document.createElement('button');
        dot.className = 'screenshots-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Go to screenshot ' + (i + 1));
        dot.addEventListener('click', function () {
            frames[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.screenshots-dot');
    let scrollTimeout;

    track.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            const trackRect = track.getBoundingClientRect();
            const trackCenter = trackRect.left + trackRect.width / 2;
            let closestIndex = 0;
            let closestDist = Infinity;

            frames.forEach(function (frame, i) {
                const rect = frame.getBoundingClientRect();
                const frameCenter = rect.left + rect.width / 2;
                const dist = Math.abs(frameCenter - trackCenter);
                if (dist < closestDist) { closestDist = dist; closestIndex = i; }
            });

            dots.forEach(function (d, i) {
                d.classList.toggle('is-active', i === closestIndex);
            });
        }, 50);
    }, { passive: true });
})();
