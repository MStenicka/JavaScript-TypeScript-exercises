import { Car } from './car';
import { Station } from './station';

// Implement the Car and Station classes based on the following specification
//
// Car:
//  - it stores how much gas is available in the gasAmount property as a number
//  - it stores its tank capacity in a capacity property, which is also a number
//  - all cars start with 0 as gasAmount and 100 as capacity when instantiated
// Station:
//  - it stores how much gas is available in the gasAmount property as a number
//  - takes a number in the constructor which will be stored as the gasAmount
//  - has a refill method which takes a car instance and does the following:
//     - decreases the station's gasAmount by the car's capacity
//       (we're assuming a car goes to the station when its tank is empty)
//     - increase the car's gasAmount by the amount the gas station can give
//
// If the station has less than what a car needs, then only give whatever the
// station has, a station can't have negative gasAmount!

const car1 = new Car();
const car2 = new Car();
const car3 = new Car();

const station = new Station(276);

console.log('Car 1 gas: ' + car1.gasAmount + 'l.');
console.log('Car 1 capacity: ' + car1.capacity + 'l.');
station.refill(car1);
console.log('Car 1 gas (after refilling): ' + car1.gasAmount + 'l.');
console.log('Station gas: ' + station.gasAmount + 'l.');
station.refill(car2);
console.log('Car 2 gas: ' + car2.gasAmount + 'l.');
console.log('Station gas: ' + station.gasAmount + 'l.');
station.refill(car3);
console.log('Car 3 gas: ' + car3.gasAmount + 'l.');
console.log('Station gas: ' + station.gasAmount + 'l.');
