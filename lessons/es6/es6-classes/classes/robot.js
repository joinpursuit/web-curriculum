class Robot {
  constructor(type, serial_number, name) {
    this.type = type;
    this.serial_number = serial_number;
    this.name = name;
  }

  powerOn() {
    console.log(`${this.name} powering on.`);
  }

  powerOff() {
    console.log(`${this.name} powering off.`);
  }

  speak() {
    console.log(`Hi I'm ${this.name}, a ${this.type} robot.`)
  }
}

module.exports = Robot;
