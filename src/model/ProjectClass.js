
class project {
  constructor() {
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }
  getStartDate() {
    return this.startDate;
  }
  setStartDate(startDate) {
    this.startDate = startDate;
  }
  getEndDate() {
    return this.endDate;
  }
  setEndDate(endDate) {
    this.endDate = endDate;
  }
  getImg() {
    return this.image;
  }
  setImg(image) {
    this.image = image;
  }
}

module.exports = project;