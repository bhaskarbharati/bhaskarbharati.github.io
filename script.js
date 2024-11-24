// Load projects dynamically
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const projectContainer = document.getElementById("projects-container");
    data.projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn" target="_blank">View Project</a>
      `;
      projectContainer.appendChild(projectCard);
    });
  })
  .catch(error => console.error('Error loading projects:', error));

// Handle contact form
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Your message has been sent!");
});
