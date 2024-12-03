document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded');

  // Typewriter Effect
  const text = "I am an Aspiring Software Engineer|Web Developer|Data Analyst";
  const typewriterElement = document.getElementById('typewriter');
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // Adjust typing speed here (in ms)
    } else {
      setTimeout(() => {
        typewriterElement.textContent = ""; // Clear text after a delay
        index = 0; // Reset index
        typeEffect(); // Restart typing
      }, 1500); // Pause before restarting
    }
  }

  typeEffect(); // Start the typewriter effect
});
