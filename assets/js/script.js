// Array of project data
const projects = [
  { title: "Robotic Hand Controlled by glove", description: "A person can move their hand wearing glove and the robotic hand will mimic the movement built using C & STM32." },
  { title: "Home Lab", description: "Using a mini-pc, deployed a home server with multple essential server such as Network-Attached Storage using SMB & Password Manager." },
  { title: "Garbage Classification ML model", description: "A Convolutional Neural Network Model Developed using Pytorch to classify picture of garbage" }
];

// DOM elements
const container = document.getElementById("recent-projects-container");
const loadMoreBtn = document.getElementById("load-more");

// Track how many projects are displayed
let displayedCount = 0;
const projectsPerLoad = 1; // show one at a time

// Function to render projects
function loadProjects() {
  const nextProjects = projects.slice(displayedCount, displayedCount + projectsPerLoad);

  nextProjects.forEach(project => {
    const projectDiv = document.createElement("div");
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
