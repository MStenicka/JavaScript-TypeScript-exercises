'use strict';
// Pirates
// Create a Pirate class. You can add other fields and methods, yet, you must have these methods:

// drinkSomeRum() - intoxicates the Pirate by one
// howsItGoingMate() - when called, the Pirate replies:
// if drinkSomeRun() was called less than 4 times:
// "Pour me anudder!"
// else:
// "Arghh, I'ma Pirate. How d'ya d'ink its goin?". Then the pirate passes out and sleeps it off (gets rid of the intoxication).
// If you manage to get this far, then you can try to do the following.

// brawl(pirate: Pirate) - where pirate fights another pirate (if both of them are alive):
// there is 1/3 chance that this dies, the other dies or they both pass out.
// die() - this kills off the pirate. When a pirate is dead, every method simply results in: he's dead.
// And... if you get that far...

// Add a parrot.

class Pirate {
  private _AlcoholIntoxication: number = 0;
  private _isAlive: boolean = true;

  drinkSomeRum(): void {
    if (this._isAlive) {
      this._AlcoholIntoxication++;
    } else {
      console.log("He's dead.");
    }
  }

  howsItGoingMate(): void {
    if (this._isAlive) {
      if (this._AlcoholIntoxication < 4) {
        console.log('Pour me anudder!');
      } else {
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        this.passOut; // pirate passes out and sleeps it off (gets rid of the intoxication).
      }
    } else {
      console.log("He's dead.");
    }
  }

  brawl(pirate: Pirate): void {
    if (this._isAlive && pirate._isAlive) {
      const fightResult = Math.floor(Math.random() * 3);
      if (fightResult === 0) {
        this.die();
      } else if (fightResult === 1) {
        pirate.die();
      } else {
        this.passOut();
        pirate.passOut();
      }
    } else {
      console.log('One of the pirates is already dead.');
    }
  }

  die(): void {
    this._isAlive = false;
    console.log("He's dead.");
  }

  private passOut(): void {
    this._AlcoholIntoxication = 0;
    console.log('He passed out.');
  }

  get isAlive() {
    return this._isAlive;
  }

  get alcoholIntoxication() {
    return this._AlcoholIntoxication;
  }
}

class Parrot {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  speak(): void {
    console.log(`Hello, I am parrot ${this._name}`);
  }
}

// The Pirate Ship
// The place for the Pirates

// Create a Ship class.
// The Ship stores Pirateinstances in a list as the crew and has one captain who is also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// fills the ship with a captain and a random (maximum 113) number of pirates
// Ships should be represented in a nice way on command line including information about
// rum consumed by the captain and its state (dead or alive)
// number of alive pirates in the crew
// Ships should have a method to battle other ships: ship.battle(otherShip: Ship)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculated score: Number of alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winning captain and crew has a party: everyone drinks a random number of rum :)
// BattleApp
// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!

class Ship {
  private _crew: Pirate[];
  private _captain: Pirate;

  constructor() {
    this._crew = [];
    this._captain = new Pirate();
  }

  fillShip(): void {
    const captain = new Pirate();
    captain.drinkSomeRum();
    this._captain = captain;

    const crewSize = Math.floor(Math.random() * 114);
    for (let i = 0; i < crewSize; i++) {
      const pirate = new Pirate();
      this._crew.push(pirate);
    }
  }

  alivePirates(): Pirate[] {
    return this._crew.filter((pirate) => pirate.isAlive);
  }

  battle(otherShip: Ship): boolean {
    const thisScore =
      this.alivePirates().length - this._captain.alcoholIntoxication;
    const otherScore =
      otherShip.alivePirates().length - otherShip._captain.alcoholIntoxication;

    if (thisScore > otherScore) {
      this.party();
      otherShip.lose();
      return true;
    } else if (thisScore < otherScore) {
      this.lose();
      otherShip.party();
      return false;
    } else {
      this.party();
      otherShip.lose();
      return true;
    }
  }

  private lose(): void {
    const losses = Math.floor(Math.random() * (this._crew.length + 1));
    for (let i = 0; i < losses; i++) {
      const pirate = this._crew[i];
      pirate.die();
    }
  }

  private party(): void {
    this._crew.forEach((pirate) => {
      const rumAmount = Math.floor(Math.random() * 4);
      for (let i = 0; i < rumAmount; i++) {
        pirate.drinkSomeRum();
      }
    });
    const captainRumAmount = Math.floor(Math.random() * 4);
    console.log(captainRumAmount);
    for (let i = 0; i < captainRumAmount; i++) {
      this._captain!.drinkSomeRum();
    }
  }

  toString(): string {
    const alivePirates = this.alivePirates().length;
    const captainState = this._captain!.isAlive ? 'alive' : 'dead';
    return `Captain state: ${captainState}, Rum consumed by captain: ${
      this._captain!.alcoholIntoxication
    }, Number of alive pirates: ${alivePirates}`;
  }
}

class BattleApp {
  private _ship1: Ship;
  private _ship2: Ship;

  constructor() {
    this._ship1 = new Ship();
    this._ship2 = new Ship();
  }

  fight(): void {
    this._ship1.fillShip();
    this._ship2.fillShip();

    console.log('Ship 1:');
    console.log(this._ship1.toString());
    console.log('Ship 2:');
    console.log(this._ship2.toString());

    const ship1Wins = this._ship1.battle(this._ship2);

    console.log('Battle result:');
    if (ship1Wins) {
      console.log('Ship 1 wins!');
    } else {
      console.log('Ship 2 wins!');
    }

    console.log('After the battle:');
    console.log('Ship 1:');
    console.log(this._ship1.toString());
    console.log('Ship 2:');
    console.log(this._ship2.toString());
  }
}

// Armada
// Create an Armada class
// Contains a list of Ship
// Have a armada.war(otherArmada: Armada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first one from the other
// the loser ship gets skipped so the next ship comes in play from the loser ship's armada
// it starts a battle with the first (not yet defeated) ship from the other armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner

class Armada {
  private ships: Ship[];

  constructor() {
    this.ships = [];
  }

  addShip(ship: Ship): void {
    this.ships.push(ship);
  }

  war(otherArmada: Armada): boolean {
    let thisDefeatedShips = 0;
    let otherDefeatedShips = 0;

    while (
      thisDefeatedShips < this.ships.length &&
      otherDefeatedShips < otherArmada.ships.length
    ) {
      const thisShip = this.ships[thisDefeatedShips];
      const otherShip = otherArmada.ships[otherDefeatedShips];

      const thisWins = thisShip.battle(otherShip);
      console.log(thisWins);
      if (thisWins) {
        otherDefeatedShips++;
      } else {
        thisDefeatedShips++;
      }
    }

    return thisDefeatedShips === this.ships.length;
  }
}

// WarApp
// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!

class WarApp {
  static battleArmadas(armada1: Armada, armada2: Armada): void {
    const armada1Wins = armada1.war(armada2);

    if (armada1Wins) {
      console.log('Armada 1 is the winner!');
    } else {
      console.log('Armada 2 is the winner!');
    }
  }
}

const battleApp = new BattleApp();
battleApp.fight();

// Start the war between the armadas
const armada1 = new Armada();
const armada2 = new Armada();

const ship1 = new Ship();
ship1.fillShip();
const ship2 = new Ship();
ship2.fillShip();
armada1.addShip(ship1);
armada1.addShip(ship2);

const ship3 = new Ship();
const ship4 = new Ship();
ship3.fillShip();
ship4.fillShip();
armada2.addShip(ship3);
armada2.addShip(ship4);

WarApp.battleArmadas(armada1, armada2);
