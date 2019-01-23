
const fs = require('fs');

const fileContents = fs.readFileSync('../../data/ProjectData.json');

var objectsProyect = JSON.parse(fileContents);
