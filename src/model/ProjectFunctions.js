
function findByName(name, projectsArray) {
  console.log("Finding by name...")
  try {
    for (let index = 0; index < projectsArray.length; index++) {
      if (name.toLowerCase() === projectsArray[index].name) {
        console.log(projectsArray[index]);
        console.log("Found!");
        return projectsArray[index];
      } else {
        alert("DEJE DE BUSCAR ESTUPIDECES!!!")
        console.log("Project not found!")
      }
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

function update(id) { };
function erase(id) { };
function showAll() { };

module.exports = { findByName, update, erase, showAll };