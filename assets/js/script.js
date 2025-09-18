// Array of project data
const projects = [
  { title: "Robotic Hand Controlled by glove", description: "A person can move their hand wearing glove and the robotic hand will mimic the movement built using C & STM32." },
  { title: "Home Lab", description: "Using a mini-pc, deployed a home server with multple essential server such as Network-Attached Storage using SMB & Password Manager." },
  { title: "Garbage Classification ML model", description: "A Convolutional Neural Network Model Developed using Pytorch to classify picture of garbage" }
];

const fullProjects = [
  `<div class='col s12 m6 l4'>
            <div class='card'>
              <div class='card-image waves-effect waves-block waves-light'>
                <img alt='Screenshot of web app' src='/assets/img/robotic.jpeg'
                style='height: auto; width: 100%' class='activator' />
              </div>
              <div class='card-content'>
                <span class='card-title activator pink-text hoverline'>Robotic hand controlled by glove<i
                    class='mdi-navigation-more-vert right'></i></span>
                <p>
                  A person can move their hand wearing glove and the robotic hand will mimic the movement.
                </p>
              </div>
              <div class='card-reveal'>
                <!-- TODO: change this -- only close button -->
                <!-- <span class='card-title brown-text'>Accomplishments<i class='mdi-navigation-close right'></i></span> -->
                <span class='card-title pink-text'><small>Accomplishments</small><i
                    class='mdi-navigation-close right'></i></span>
                <ul>
                  <li><b>Tools:</b> I2C, C, STM32CUBE</li>
                  <li>Developed I2C drivers and Bluetooth communication using C achieving under 200 ms response time, enabling
smooth servo operation across 5 accelerometers and 5 servos</li>
                  <li>Configured I2C and PWM pins and peripherals in STM32Cube, generating HAL APIs for accurate setup and
accelerated development</li>
                  <li>Worked with Keil µVision and STM32Cube to efficiently compile and flash firmware onto microcontrollers</li>


                </ul>
                <div class='card-action'>
                  <a aria-label='Visit Blog website' href='https://flask-heroku-blog.herokuapp.com/' target='_blank' data-position='top'
                    data-tooltip='View Online'
                    class='btn-floating btn-large waves-effect waves-light blue-grey tooltipped'><i
                      class='fa fa-external-link'></i></a>
                  <a aria-label='Visit the GitHub repo for  project' href='https://github.com/varadbhogayata/flask-blog'
                    target='_blank' data-position='top' data-tooltip='View Source'
                    class='btn-floating btn-large waves-effect waves-light blue-grey tooltipped'><i
                      class='fa fa-github'></i></a>
                </div>
              </div>
            </div>
          </div>`,
  `<div class="col s12 m6 l4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of  web app" src="/assets/img/project-aim_bert-bias.png" style="height: auto; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator pink-text hoverline">Home Lab<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  Using a mini-pc, deployed a home server with multple essential server such as Network-Attached Storage using SMB & Password Manager.
                </p>
              </div>
              <div class="card-reveal">
                <!-- TODO: change this -- only close button -->
                <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                <span class="card-title pink-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li>Built a secure home lab environment using Docker for hosting self-managed services with high availability</li>
                  <li>Configured Nginx Proxy Manager with reverse proxy rules and an internal DNS resolver to route domains to
correct internal IPs and enable HTTPS connections</li>
                  <li>Integrated Tailscale VPN to allow secure, remote access from any device outside the local network</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit the GitHub repo for  project"
                    href="https://github.com/varadbhogayata/visual-question-answering" target="_blank"
                    data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>`,
  `<div class="col s12 m6 l4">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of  web app" src="/assets/img/computer-vision-v2-04.png" style="height: auto; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator pink-text hoverline">Garbage Classification ML model <i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  A Convolutional Neural Network Model Developed using Pytorch to classify picture of garbage
                </p>
              </div>
              <div class="card-reveal">
                <!-- TODO: change this -- only close button -->
                <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                <span class="card-title brown-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li>Tools: Python, PyTorch, Pandas, NumPy </li>
                  <li>Built and tuned CNN using PyTorch achieving 95% accuracy, outperforming baseline by 10%</li>
                  <li>Preprocessed datasets with Python, removing 20% low-quality images and augmenting data to increase training
samples by 50%</li>
              <li>Utilized NumPy and Pandas to efficiently organize, categorize, and preprocess datasets for optimized CNN
training</li>

                </ul>
                <!-- TODO: UPLOAD THIS PROJECT ON GITHUB -->
                <div class="card-action">
                  <a aria-label="Visit the GitHub repo for  project" href="https://github.com/varadbhogayata/"
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>`
];

// DOM elements
const container = document.getElementById("recent-projects-container");
const loadMoreBtn = document.getElementById("load-more");

// Track how many projects are displayed
let displayedCount = 0;
const projectsPerLoad = 1; // show one at a time

// Function to render projects
function loadProjects() {
  const nextProjects = fullProjects.slice(displayedCount, displayedCount + projectsPerLoad);

  nextProjects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = project;
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
