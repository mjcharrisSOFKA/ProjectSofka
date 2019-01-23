
'use strict';

let projectCards = document.getElementById('projects')

function findByName(name, projectsArray) {
  try {
    for (let i = 0; i < projectsArray.length; i++) {
      if (name.toLowerCase() === projectsArray[i].name) {
        return projectsArray[i];
      } else {
        showAlertNotFound();
      }
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

function findByDate(date, projectsArray){
  try {
    for (let i = 0; i < projectsArray.length; i++) {
      if (date === projectsArray[i].startDate || date === projectsArray[i].endDate) {
        return projectsArray[i];
      } else {
        showAlertNotFound();
      }
    }
  } catch (error) {
    console.log("Error: " + error);
  }
}

function showAlertNotFound() {
  let div = document.createElement('div');
  div.classList.add('alert', 'alert-primary');
  div.role = "alert";
  div.innerText = "Proyecto no encontrado";
  projectCards.appendChild(div);
}


module.exports = { findByName, findByDate };