// Example: Dynamically add projects
const projects = [
  { title: "Portfolio Website", description: "A dynamic portfolio site.", link: "#" },
  { title: "JavaScript Game", description: "A fun browser game.", link: "#" },
];

const projectContainer = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectContainer.appendChild(card);
});

// Example: Simple contact form submission (for EmailJS)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
});
