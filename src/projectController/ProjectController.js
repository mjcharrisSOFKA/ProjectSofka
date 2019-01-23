
import projectImport from "../model/ProjectClass";
import { findByName, update, erase, showAll } from "./../model/ProjectFunctions"

const fileContents = require('../data/ProjectData.json');
let projectCards = document.getElementById('projects')
let projectsArray = [];
let jsonArrayLength = fileContents.projects.length;
let projectObject;

try {
  createProjectObjects();
} catch (error) {
  console.log("Error: " + error);
}

(function searchByName() {
  try {
    document.getElementById('search-trigger').addEventListener('click', () => {
      let searchingParameter = document.getElementById('searching-parameter');
      let foundBy = findByName(searchingParameter.value, projectsArray);
      projectCards.innerText = " ";
      addDivCard(foundBy.image, foundBy.name, foundBy.description)
    });

  } catch (error) {
    console.log("Error: " + error);

  }
}());

function printProjects() {
  for (let index = 0; index < jsonArrayLength; index++) {
    addDivCard(projectsArray[index].getImg(),
      projectsArray[index].getName(),
      projectsArray[index].getDescription());
  }
};

function createProjectObjects() {
  for (let index = 0; index < jsonArrayLength; index++) {
    let object = fileContents.projects[index];
    projectObject = new projectImport();
    projectObject.setImg(object.img);
    projectObject.setName(object.name);
    projectObject.setDescription(object.description);
    projectObject.setStatus(object.status);
    projectObject.setStartDate(object.startDate);
    projectObject.setEndDate(object.endDate);
    projectsArray.push(projectObject);
  }
};

function addDivCard(image, title, description) {
  let div = document.createElement('div');

  div.className = 'card';
  div.style = 'width: 18rem';
  div.innerHTML = "<img src=" + image + " class='card-img-top'>"
    + "<div class='card-body'>"
    + "<h5 class='card-title'> " + title + " </h5> "
    + "<p class='card-text'> " + description + " </p>";

  projectCards.appendChild(div);
}
