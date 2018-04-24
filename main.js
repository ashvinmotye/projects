window.onload = init();

window.addEventListener('resize', function() {
  var columns = determineColumns(getWindowSize());
  var currentColumnNumber = this.document.querySelectorAll('.col').length;

  if(currentColumnNumber !== columns) {
    populateProjects(columns);
  }
});

document.querySelector('#category').addEventListener('change', function () {
  var currentColumnNumber = document.querySelectorAll('.col').length;
  populateProjects(currentColumnNumber);
});

// FUNCTIONS
function init() {
  var windowSize = getWindowSize();
  var columns = determineColumns(windowSize);
  populateSelectOptions();
  populateProjects(columns);
}

function populateProjects(col) {
  var categoryNeeded = getCategory();
  var projectsNeeded = getProjects(categoryNeeded);
  var columnElements = createColumns(col);
  createProjectCards(columnElements, projectsNeeded);
}

function createProjectCards(columnElements, projectsNeeded) {
  var columnsLength = columnElements.length;

  for(var i=0; i<projectsNeeded.length; i++) {
    var projectNumber = projectsNeeded.length - i;

    if (columnsLength === 1) {
      createCards(projectNumber, projectsNeeded[i] ,columnElements[0]);
    }

    else {
      createCards(projectNumber, projectsNeeded[i] ,columnElements[i%columnsLength]);
    }
  }
}

function createCards(projectNumber, project, column) {
  var card = document.createElement('div');
  card.classList.add('card');

  var anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.href = project.link;

  var anchorH1 = document.createElement('h1');
  anchorH1.classList.add('project');
  anchorH1.innerHTML = project.name;

  anchor.appendChild(anchorH1);

  var descriptionPara = document.createElement('p');
  descriptionPara.innerHTML = project.description;

  var datePara = document.createElement('p');
  datePara.innerHTML = project.created;

  var tagDiv = document.createElement('div');
  tagDiv.classList.add('tag');

  var categorySpan = document.createElement('span');
  categorySpan.classList.add(project.category);
  categorySpan.innerHTML = project.category;

  tagDiv.appendChild(categorySpan);

  var countH1 = document.createElement('h1');
  countH1.classList.add('count');
  countH1.innerHTML = projectNumber;

  card.appendChild(anchor);
  card.appendChild(descriptionPara);
  card.appendChild(datePara);
  card.appendChild(tagDiv);
  card.appendChild(countH1);

  column.appendChild(card);
}

function createColumns(col) {
  var container = document.querySelector('.container');
  container.innerHTML = '';

  for(var i=0; i<col; i++) {
    var colElement = document.createElement('div');
    colElement.classList.add('col');
    container.appendChild(colElement);
  }

  return document.querySelectorAll('.col');
}

function getProjects(categoryNeeded) {
  if(categoryNeeded === 'all') {
    return projects;
  }

  var selectedProjects = [];

  for(var i=0; i<projects.length; i++) {
    if(projects[i].category === categoryNeeded) {
      selectedProjects.push(projects[i]);
    }
  }

  return selectedProjects;
}

function getCategory() {
  return document.querySelector('#category').value;
}

function populateSelectOptions() {
  var select = document.querySelector('#category');

  for(var i=0; i<categoriesArray.length; i++) {
    var optionElement = document.createElement('option');
    optionElement.value = categoriesArray[i];
    optionElement.innerHTML = categoriesArray[i];
    select.appendChild(optionElement);
  }
}

function getWindowSize() {
  return document.documentElement.offsetWidth;
}

function determineColumns(size) {
  if(size > 800) {
    return 3;
  }

  else if(size <= 800 && size > 600) {
    return 2;
  }

  else {
    return 1;
  }
}