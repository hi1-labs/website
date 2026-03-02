(function () {
    const observed = document.querySelectorAll('.animate-on-scroll');

    if (observed.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        observed.forEach(function (el) { observer.observe(el); });
    } else {
        observed.forEach(function (el) { el.classList.add('animate-in'); });
    }
})();
