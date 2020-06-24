// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Reference Activity 10.20 & 21

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
