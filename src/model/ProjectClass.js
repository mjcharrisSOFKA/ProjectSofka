
class Project {
  constructor(name, status, startDate, endDate, image, client, tech, sofkianos) {
    this.name = name;
    this.status = status;
    this.startDate = startDate;
    this.endDate = endDate;
    this.image = image;
    this.client = client;
    this.technologies = tech;
    this.sofkianos = sofkianos;
  }
}

Project.prototype.setProperty = (property, value) => {
  let project = new Project();
  project[property] = value;
  return project;
}

module.exports = { Project };