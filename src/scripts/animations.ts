const observed = document.querySelectorAll('.animate-on-scroll');

if (observed.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  );

  observed.forEach((el) => observer.observe(el));
} else {
  observed.forEach((el) => el.classList.add('animate-in'));
}
