'use strict';

// # Reservations

// - Create a `Reservation` class which implements the `Booking` interface.
// - Note that the reservation code should automatically generated
//   by the constructor and shouls contain 8 random characters, each being
//   either a number or an uppercase character.
// - The day of week should also be randomly picked from the 3 letter
//   representaion of the english day names (like MON, TUE, WED, etc.)
// - Don't forget to export the Reservation class

interface IBooking {
  getDayOfWeek(): string;
  getCode(): string;
}

class Reservation implements IBooking {
  private _dayOfWeek: string;
  private _code: string;

  constructor() {
    this._dayOfWeek = this.getRandomDayOfWeek();
    this._code = this.generateRandomCode();
  }

  private getRandomDayOfWeek(): string {
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const randomIndex = Math.floor(Math.random() * daysOfWeek.length);
    return daysOfWeek[randomIndex];
  }

  private generateRandomCode(): string {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  }

  public getDayOfWeek(): string {
    return this._dayOfWeek;
  }

  public getCode(): string {
    return this._code;
  }
}

const reservations: Reservation[] = [];
for (let i = 0; i < 10; i++) {
  reservations.push(new Reservation());
}

for (let reservation of reservations) {
  console.log(
    `Booking #${reservation.getCode()} for ${reservation.getDayOfWeek()}`,
  );
}

export { Reservation };
