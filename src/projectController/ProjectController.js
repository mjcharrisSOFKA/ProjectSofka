
import projectImport from "../model/ProjectClass";
import { findByName, update, erase, showAll } from "./../model/ProjectFunctions"

const fileContents = require('../data/ProjectData.json');
let projectCards = document.getElementById('projects')
let projectsArray = [];
let jsonArrayLength = fileContents.projects.length;
let projectObject;
let foundByName = new projectImport();

try {
  foundByName = findByName(prompt("¿Qué empresa desea buscar?"), fileContents.projects);
  addDivCard(foundByName.img, foundByName.name, foundByName.description);
} catch (error) {
  console.log("Error: " + error);
}


(function printProjects() {
  for (let index = 0; index < jsonArrayLength; index++) {
    createObject(index);
    //addDivCard(projectsArray[index].getImg(),
    //  projectsArray[index].getName(),
    //  projectsArray[index].getDescription());
  }
}());

function createObject(index) {
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
