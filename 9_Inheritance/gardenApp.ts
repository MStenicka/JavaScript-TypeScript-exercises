'use strict';
class Garden {
  private plants: (Flower | Tree)[];

  constructor() {
    this.plants = [];
  }

  public addPlant(plant: Flower | Tree) {
    this.plants.push(plant);
  }

  public waterGarden(amount: number) {
    const plantsNeedingWater = this.plants.filter((plant) =>
      plant.needsWater(),
    );

    if (plantsNeedingWater.length === 0) {
      console.log('No plants need water.');
      return;
    }

    const waterPerPlant = amount / plantsNeedingWater.length;

    plantsNeedingWater.forEach((plant) => {
      plant.water(waterPerPlant);
    });

    console.log(`Watering with ${amount}`);
    this.printGardenStatus();
  }

  public printGardenStatus() {
    this.plants.forEach((plant) => {
      if (plant instanceof Flower) {
        if (plant.needsWater()) {
          console.log(`The ${plant.getColor()} Flower needs water`);
        } else {
          console.log(`The ${plant.getColor()} Flower doesn't need water`);
        }
      } else if (plant instanceof Tree) {
        if (plant.needsWater()) {
          console.log(`The ${plant.getColor()} Tree needs water`);
        } else {
          console.log(`The ${plant.getColor()} Tree doesn't need water`);
        }
      }
    });
    console.log();
  }
}

abstract class Plant {
  protected color: string;
  protected waterAmount: number;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
  }

  protected abstract needsWater(): boolean;

  protected water(amount: number) {
    this.waterAmount += amount;
  }

  public getColor(): string {
    return this.color;
  }
}

class Flower extends Plant {
  constructor(color: string) {
    super(color);
  }

  public needsWater(): boolean {
    return this.waterAmount < 5;
  }

  public water(amount: number) {
    super.water(amount * 0.75);
  }
}

class Tree extends Plant {
  constructor(color: string) {
    super(color);
  }

  public needsWater(): boolean {
    return this.waterAmount < 10;
  }

  public water(amount: number) {
    super.water(amount * 0.4);
  }
}

// Create a garden
const garden = new Garden();

const yellowFlower = new Flower('yellow');
const blueFlower = new Flower('blue');
const purpleTree = new Tree('purple');
const orangeTree = new Tree('orange');

garden.addPlant(yellowFlower);
garden.addPlant(blueFlower);
garden.addPlant(purpleTree);
garden.addPlant(orangeTree);

console.log('Initial garden status:');
garden.printGardenStatus();

// Water the garden twice
garden.waterGarden(40);
garden.waterGarden(70);
