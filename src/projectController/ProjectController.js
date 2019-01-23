
import projectImport from "../model/ProjectClass";

let projectsArray = [];
const fileContents = require('../data/ProjectData.json');

let jsonArrayLength = fileContents.projects.length;
let projectObject;

for (let index = 0; index < jsonArrayLength; index++) {
  projectObject = new projectImport();
  projectObject.setName(fileContents.projects[index].name);
  projectsArray.push(projectObject);
  console.log(projectObject, projectsArray);
}

let title = document.getElementById('projectName');
console.log(projectsArray[0].getName());

title.innerText = projectsArray[0].getName();
