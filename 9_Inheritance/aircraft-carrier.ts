'use strict';
// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/inheritance/aircraft-carrier/ts.md

class Aircraft {
  private _maxAmmo: number;
  private _baseDamage: number;
  private _ammo: number;

  constructor(maxAmmo: number, baseDamage: number) {
    this._maxAmmo = maxAmmo;
    this._baseDamage = baseDamage;
    this._ammo = 0;
  }

  public get MaxAmmo() {
    return this._maxAmmo;
  }

  public get BaseDamage() {
    return this._baseDamage;
  }

  public get Ammo() {
    return this._ammo;
  }

  public get Damage(): number {
    return this._baseDamage * this._ammo;
  }

  public fight(): number {
    let ammoTemp: number = this._ammo;
    this._ammo = 0;
    return this._baseDamage * ammoTemp;
  }

  public refillAmmo(amount: number): number {
    const remainingAmmo = Math.max(0, amount - (this._maxAmmo - this._ammo));
    this._ammo = Math.min(amount, this._maxAmmo);
    return remainingAmmo;
  }

  public getType(): string {
    return this.constructor.name;
  }

  public getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this._ammo}, Base Damage: ${
      this._baseDamage
    }, All Damage: ${this._ammo * this._baseDamage}`;
  }

  public isPriority(): boolean {
    return this.getType() === 'F35';
  }
}

class F16 extends Aircraft {
  constructor() {
    super(8, 30);
  }
}

class F35 extends Aircraft {
  constructor() {
    super(12, 50);
  }
}

class Carrier {
  private _aircrafts: Aircraft[] = [];
  private _ammoStorage: number;
  private _healthPoints: number;

  constructor(ammoStorage: number, healthPoints: number) {
    this._ammoStorage = ammoStorage;
    this._healthPoints = healthPoints;
  }

  public add(aircraft: Aircraft) {
    this._aircrafts.push(aircraft);
  }

  public get HealthPoints() {
    return this._healthPoints;
  }

  private getNeededAmmo(): number {
    return this._aircrafts.reduce(
      (total, aircraft) => total + (aircraft.MaxAmmo - aircraft.Ammo),
      0,
    );
  }

  private getPriorityAircrafts(): Aircraft[] {
    return this._aircrafts.filter((aircraft) => aircraft.isPriority());
  }

  private getNonPriorityAircrafts(): Aircraft[] {
    return this._aircrafts.filter((aircraft) => !aircraft.isPriority());
  }

  public fill(): void {
    if (this._ammoStorage === 0) {
      throw new Error('No ammo available.');
    }

    const priorityAircrafts = this.getPriorityAircrafts();
    const nonPriorityAircrafts = this.getNonPriorityAircrafts();

    priorityAircrafts.forEach((aircraft) => {
      this._ammoStorage = aircraft.refillAmmo(this._ammoStorage);
    });

    nonPriorityAircrafts.forEach((aircraft) => {
      this._ammoStorage = aircraft.refillAmmo(this._ammoStorage);
    });
  }

  public totalDamage(): number {
    let allDamage = 0;
    for (let aircraft of this._aircrafts) {
      allDamage += aircraft.Damage;
    }
    return allDamage;
  }

  public fight(enemyCarrier: Carrier): void {
    let allDamage = 0;
    for (let aircraft of this._aircrafts) {
      allDamage += aircraft.fight();
    }
    enemyCarrier._healthPoints = Math.max(
      0,
      enemyCarrier._healthPoints - allDamage,
    );
  }

  public getStatus(): string {
    if (this._healthPoints <= 0) {
      return "It's dead, Jim :(";
    }

    const aircraftStatus = this._aircrafts
      .map((aircraft) => aircraft.getStatus())
      .join('\n');

    return `HP: ${this._healthPoints}, Aircraft count: ${
      this._aircrafts.length
    }, Ammo Storage: ${
      this._ammoStorage
    }, Total damage: ${this.totalDamage()}\nAircrafts:\n${aircraftStatus}\n`;
  }
}

export { Aircraft, F16, F35, Carrier };

const carrierA = new Carrier(80, 2500);
carrierA.add(new F35());
carrierA.add(new F16());
carrierA.add(new F35());
carrierA.add(new F35());
carrierA.add(new F16());

const carrierB = new Carrier(100, 3500);

carrierA.fill();

console.log(carrierA.getStatus());
carrierA.fight(carrierB);
console.log(carrierB.getStatus());

if (carrierB.HealthPoints > 0) {
  carrierA.fill();

  console.log(carrierA.getStatus());
  carrierA.fight(carrierB);
  console.log(carrierB.getStatus());
}
