
              import projectImport from "../model/ProjectClass";
import { findValueByAnyAttributeInArray, showAllProjects, printSearchResults, getCheckedRadioButton } from "./../model/ProjectFunctions"

const fileContents = require('../data/ProjectData.json');
let jsonProjects = fileContents.projects;
let projectCards = document.getElementById('projects')
let projectsSearched = [];

document.getElementById('searching-trigger').addEventListener('click', () => {
  let value = document.getElementById('search-by').value;
  let radioButtons = document.getElementsByName('search');
  let checkedRadioButtonValue = getCheckedRadioButton(radioButtons);
  projectsSearched = findValueByAnyAttributeInArray(value, checkedRadioButtonValue, jsonProjects);
  projectCards.innerHTML = "";
  printSearchResults(projectsSearched);
});

document.getElementById('show-all-projects').addEventListener('click', () => {
  projectCards.innerHTML = "";
  showAllProjects(jsonProjects);
});
