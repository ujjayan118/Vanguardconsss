// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 200,
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Parallax Effect (Optional Enhancement)
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(el => {
    el.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
});
