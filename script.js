// Projects data (dynamic fetching can be used here)
const projects = [
  { title: "Project One", description: "A cool project.", link: "#" },
  { title: "Project Two", description: "Another awesome project.", link: "#" },
  { title: "Project Three", description: "Yet another project.", link: "#" },
];

// Typing Animation
const words = [
  "A Web Developer",
  "crafting",
  "beautiful experiences",
  "for the web.",
];
let i = 0, j = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
  if (i < words[j].length) {
    dynamicText.textContent += words[j].charAt(i);
    i++;
    setTimeout(typeEffect, 100); // Speed of typing
  } else {
    setTimeout(() => {
      i = 0;
      j = (j + 1) % words.length;
      dynamicText.textContent = "";
      typeEffect();
    }, 1000); // Pause before switching words
  }
}

typeEffect();

// Dynamically load projects
const projectContainer = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" class="btn" target="_blank">View Project</a>
  `;
  projectContainer.appendChild(card);
});

// Handle contact form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
});
