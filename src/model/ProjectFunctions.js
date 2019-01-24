
'use strict';

let projectCards = document.getElementById('projects')

function createProjectObjects(jsonArray) {
  let projectsArray = [];
  for (let index = 0; index < jsonArray.length; index++) {
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

function showAllProjects(jsonArray) {
  for (let index = 0; index < jsonArray.length; index++) {
    printCardHtml(jsonArray[index].img,
      jsonArray[index].name,
      jsonArray[index].description);
  }
};

function printSearchResults(resultsArray) {
  for (let i = 0; i < resultsArray.length; i++) {
    printCardHtml(resultsArray[i].img, resultsArray[i].name, resultsArray[i].description);
  }
}

function getCheckedRadioButton(radioButtons) {
  for (let index = 0; index < radioButtons.length; index++) {
    if (radioButtons[index].checked) {
      return radioButtons[index].value;
    }
  }
}


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

module.exports = { findValueByAnyAttributeInArray, showAllProjects, printSearchResults, getCheckedRadioButton };
