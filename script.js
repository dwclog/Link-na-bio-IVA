// Instituto Vida Ativa — microinterações
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), i * 40);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: reveal everything immediately
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
});
