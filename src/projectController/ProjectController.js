
import projectImport from "../model/ProjectClass";
import { findValueByAnyAttributeInArray } from "./../model/ProjectFunctions"

const fileContents = require('../data/ProjectData.json');
let jsonProjects = fileContents.projects;
let projectCards = document.getElementById('projects')
let projectObject;
let projectsSearched = [];

document.getElementById('searching-trigger').addEventListener('click', search());

function search() {
  let value = document.getElementById('search-by-name-participant').value;
  let attribute = "status";
  projectsSearched = findValueByAnyAttributeInArray(value, attribute, jsonProjects);
};

printSearchResults(projectsSearched);

function showAllProjects() {
  for (let index = 0; index < jsonProjects.length; index++) {
    printCardHtml(jsonProjects[index].img,
      jsonProjects[index].name,
      jsonProjects[index].description);
  }
};

function printSearchResults(resultsArray) {
  for (let i = 0; i < resultsArray.length; i++) {
    printCardHtml(resultsArray[i].img, resultsArray[i].name, resultsArray[i].description);
  }
}

function createProjectObjects() {
  let projectsArray = [];
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
  projectsArray
};

function printCardHtml(image, title, description) {
  let div = document.createElement('div');

  div.className = 'card';
  div.style = 'width: 18rem; float: left';
  div.innerHTML = "<img src=" + image + " class='card-img-top'>"
    + "<div class='card-body'>"
    + "<h5 class='card-title'> " + title + " </h5> "
    + "<p class='card-text'> " + description + " </p>";

  projectCards.appendChild(div);
}
