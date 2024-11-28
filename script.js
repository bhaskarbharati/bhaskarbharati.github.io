document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded');

  // Typewriter Effect
  const text = "A Web Developer passionate about crafting beautiful web experiences";
  const typewriterElement = document.getElementById('typewriter');
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // Adjust speed here
    }
  }
  typeEffect();

  // Smooth Scroll for Navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    });
  });

  // Scroll-Based Animation
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});
