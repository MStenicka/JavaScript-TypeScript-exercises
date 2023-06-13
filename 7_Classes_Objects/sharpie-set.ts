import { listenerCount } from 'process';
import { Sharpie } from './sharpie';

export class SharpieSet {
  listOfSharpies: Sharpie[] = [];

  add(sharpie: Sharpie): void {
    this.listOfSharpies.push(sharpie);
  }

  countUsable(): number {
    let count: number = 0;
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].ink >= 10) {
        count += 1;
      }
    }
    return count;
  }

  removeTrash(): string {
    let numberOfRemoveSharpie: number = 0;
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].ink < 10) {
        this.listOfSharpies.splice(i, 1);
        numberOfRemoveSharpie += 1;
      }
    }
    const removeInfo: string = `Number of remove sharpies: ${numberOfRemoveSharpie}`;
    console.log(removeInfo);
    return removeInfo;
  }
}

const fullSharpie = new Sharpie('orange', 4);

const emptySharpie = new Sharpie('green', 3);
do {
  emptySharpie.use();
} while (emptySharpie.ink > 0);

const sharpies = new SharpieSet();
sharpies.add(fullSharpie);
sharpies.add(emptySharpie);

// Expected output: "usable sharpies: 1 out of 2"
console.log(
  `usable sharpies: ${sharpies.countUsable()} out of ${
    sharpies.listOfSharpies.length
  }`,
);

sharpies.removeTrash();

// Expected output: "usable sharpies: 1 out of 1"
console.log(
  `usable sharpies: ${sharpies.countUsable()} out of ${
    sharpies.listOfSharpies.length
  }`,
);
