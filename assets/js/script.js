// Array of project data
const projects = [
  { title: "AI Chatbot", 
    description: "A chatbot using NLP in Python." 
  },
  {
    title: "E-Commerce Website",
    description: "Full-stack online shop with React & Node.js.",
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio built with HTML, CSS, JS.",
  },
  {
    title: "IoT Home Automation",
    description: "Smart home system with Raspberry Pi and sensors.",
  },
];

// DOM elements
const container = document.getElementById("recent-projects-container");
const loadMoreBtn = document.getElementById("load-more");

// Track how many projects are displayed
let displayedCount = 0;
const projectsPerLoad = 1; // show one at a time

// Function to render projects
function loadProjects() {
  const nextProjects = projects.slice(
    displayedCount,
    displayedCount + projectsPerLoad
  );

  nextProjects.forEach((project) => {
    const sizeDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    container.appendChild(projectDiv);
  });

  displayedCount += projectsPerLoad;

  // Hide button if no more projects
  if (displayedCount >= projects.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Load the first project when the page loads
loadProjects();

// Add event listener for "Load More" button
loadMoreBtn.addEventListener("click", loadProjects);
