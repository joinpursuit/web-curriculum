const Robot = require('./classes/robot');
const Drone = require('./classes/drone');

/////
// Robots
/////
const r2d2 = new Robot('Droid', 'r3r3ksdj', 'R2D2');
const c3po = new Robot('Humanoid', 'c3450st@r', 'C3PO');
const wall_e = new Robot('Droid', 'kas8ueva0', 'Wall-E');
const dolores = new Robot('Host', 'w3S7w0R7D', 'Dolores');

console.log(`\nROBOTS:\n`);
dolores.powerOn();
dolores.speak();
dolores.powerOff();
c3po.powerOn();

/////
// Drones
/////
const dji_phantom = new Drone('Drone', '982jd22', 'DJI Phantom', 'Long Island City');
const parrot_quadcopter = new Drone('Drone', '1f2g721', 'Parrot Quadcopter', 'Long Island City');

console.log(`\nDRONES:\n`);
dji_phantom.speak();
parrot_quadcopter.fly('Brooklyn');
parrot_quadcopter.speak();

module.exports = {
  robots: [r2d2, c3po, wall_e, dolores],
  drones: [dji_phantom, parrot_quadcopter]
};
