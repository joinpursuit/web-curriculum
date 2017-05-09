const Robot = require('./robot');

class Drone extends Robot {
  constructor(type, serial_number, name, home_base_location, current_location) {
    super(type, serial_number, name);
    this.home_base_location = home_base_location;
    this.current_location = current_location || home_base_location;
  }

  fly(new_location) {
    console.log(`${this.name} flying from ${this.current_location} to ${new_location}`);
    this.current_location = new_location;
  }

  returnHome() {
    console.log(`${this.name} flying home to ${this.home_base_location}`);
    this.current_location = this.home_base_location;
  }

  speak() {
    super.speak();
    console.log(`My home base is ${this.home_base_location} and my current location is ${this.current_location}.`);
  }
}

module.exports = Drone;
