
import projectImport from "../model/ProjectClass";
import { findByName, findByDate } from "./../model/ProjectFunctions"

const fileContents = require('../data/ProjectData.json');
let projectCards = document.getElementById('projects')
let projectsArray = [];
let jsonArrayLength = fileContents.projects.length;
let projectObject;
let foundByName = new projectImport();

try {
  createProjectObjects();
} catch (error) {
  console.log("Error: " + error);
}

document.getElementById('searching-name-trigger').onclick = function searchByName() {
  try {
    let searchByName = document.getElementById('search-by-name');
    
    foundByName = findByName(searchByName.value, projectsArray);
    projectCards.innerText = " ";
    if (foundByName !== undefined) {
      addDivCard(foundByName.image, foundByName.name, foundByName.description)
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

document.getElementById('searching-date-trigger').onclick = function searchByDate() {
  try {
    let searchByDate = document.getElementById('search-by-date');
    
    foundByName = findByDate(searchByDate.value, projectsArray);
    projectCards.innerText = " ";
    if (foundByName !== undefined) {
      addDivCard(foundByName.image, foundByName.name, foundByName.description)
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

(function printProjects() {
  for (let index = 0; index < jsonArrayLength; index++) {
    addDivCard(projectsArray[index].getImg(),
      projectsArray[index].getName(),
      projectsArray[index].getDescription());
  }
}());

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
