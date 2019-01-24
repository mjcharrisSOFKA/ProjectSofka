
'use strict';

let projectCards = document.getElementById('projects')

function findValueByAnyAttributeInArray(value, attribute, projects) {
  try {

    let results = [];
    Object.keys(projects).map(key => {
      if (projects[key][attribute] === value) {
        results.push(projects[key]);
      }
    });
    return results;

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

module.exports = { findValueByAnyAttributeInArray };
