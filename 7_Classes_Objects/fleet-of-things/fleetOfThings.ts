import { Thing } from './thing';
import { Fleet } from './fleet';

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

const fleet = new Fleet();
// the `Thing` class
let milk = new Thing('Get milk');
let obstacles = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
let eatLunch = new Thing('Eat lunch');
standUp.complete();
eatLunch.complete();
// the `Fleet` class
fleet.add(milk);
fleet.add(obstacles);
fleet.add(standUp);
fleet.add(eatLunch);

console.log(fleet.toString());
