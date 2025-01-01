// // Create object to store data needed for the this branch feature
const projects = [
  {
    name: 'Trainings',
    number: 1,
    description: [`- Scientific Baccalaureate (2019/2020)`,`
- PASS (physics option - 2020/2021)`,`
- Bachelor's degree in Health Science (Accès Santé - 2021/2024)`,
`- Master 1 Data science (2024/2025)`],
  },
  {
    name: 'Internships',
    number: 2,
    description: `- Quality Internship (sterilization department at the hospital): Creation of a quality manual (2 months)
- Clinical Research Associate Internship (infectious diseases department at the hospital - 2 months)`,
  },
  {
    name: 'University projects',
    number: 3,
    description: `- Principal component analysis: Application of a PCA on the mtcars dataset using Rstudio.
- Data management with SQL: Modeling a database for optimized storage of information on scientific journals.
- Linear and logistic regression: Analysis of the impact of risk factors on atherosclerosis.
- Bibliometric review on neurodiversity: Exploring the evolution of scientific publications on autism and neurodiversity.`,
  },
];

// Create the cards section dynamically using string literals
function createCard1(project) {
  const cardString = `<section class="work-container">
  <article class="cards-container reverse-div${project.number} display-flex">
    <div class="details-div display-flex">
      <div class="cards-header display-flex">
        <h3 class="style">${project.name}</h3>
      </div>
      <div class="card-info">
        <p class="style">
        ${project.description}
        </p>
      </div>
    </div>
  </article>
</section>`;
  return cardString;
}

function createModal(project) {
  const modalInner = `
    <div class="pop-up-container display-flex" id="modal${project.number}">
    <img class="closing-button" src="./Images/Closing-Icon.png" alt="Closing Icon">
      <div class="modal-window modal${project.number}">
        <div class="title-container display-flex style">
          <h2>${project.name}</h2>
        </div>
        <div class="card-description display-flex">
          <p class="card-text style">${project.description}</p>
        </div>
      </div>
    </div>`;
  return modalInner;
}

const projectContainer = document.querySelector('main');

projects.forEach((card) => {
  projectContainer.innerHTML += createCard1(card);
});

const modalContainer = document.getElementById('modal-container');

projects.forEach((modal) => {
  modalContainer.innerHTML += createModal(modal);
});

// Create functions that opens and close the popup window when see-project button is clicked
const projectButtons = document.querySelectorAll('.see-project');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = document.getElementById(button.dataset.target);
    const modalWindows = document.querySelectorAll('.modal-window');
    currentModal.classList.add('active');
    modalWindows.forEach((window) => {
      window.classList.remove('remove-zoom');
      window.classList.add('add-zoom');
    });
    currentModal.style.display = 'flex';
  });
});

const closingButtons = document.querySelectorAll('.closing-button');

closingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = document.querySelector('.active');
    const modalWindows = document.querySelectorAll('.modal-window');
    modalWindows.forEach((window) => {
      window.classList.remove('add-zoom');
      window.classList.add('remove-zoom');
    });
    setTimeout(() => {
      currentModal.classList.remove('active');
      currentModal.style.display = 'none';
    }, 1000);
  });
});