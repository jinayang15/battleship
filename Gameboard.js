import Ship from "./Ship.js";
export default class Gameboard {
  constructor() {
    this.board_size = 10;
    this.attacks = [];
    this.ships = new Map();
    this.s5_0 = new Ship(5);
    this.s4_0 = new Ship(4);
    this.s4_1 = new Ship(4);
    this.s3_0 = new Ship(3);
    this.s3_1 = new Ship(3);
    this.s3_2 = new Ship(3);
    this.s3_3 = new Ship(3);
    this.s3_4 = new Ship(3);
    this.s3_5 = new Ship(3);
    this.s2_0 = new Ship(2);
    this.s2_1 = new Ship(2);
    this.ships.set(this.s5_0, []);
    this.ships.set(this.s4_0, []);
    this.ships.set(this.s4_1, []);
    this.ships.set(this.s3_0, []);
    this.ships.set(this.s3_1, []);
    this.ships.set(this.s3_2, []);
    this.ships.set(this.s3_3, []);
    this.ships.set(this.s3_4, []);
    this.ships.set(this.s3_5, []);
    this.ships.set(this.s2_0, []);
    this.ships.set(this.s2_1, []);
  }
  // passes an array of [row,col]
  // returns true if any of the coords are occupied by a ship
  checkOccupied(arr) {
    const coords_json = JSON.stringify(Array.from(this.ships));
    for (const coords of arr) {
      if (coords_json.includes(JSON.stringify(coords))) return true;
    }
    return false;
  }
  // players cannot make the same move twice
  checkValidMove(row, col) {
    const attacks_json = JSON.stringify(this.attacks);
    if (attacks_json.includes(JSON.stringify([row, col]))) return false;
    return true;
  }
  // returns false if not hit, returns the ship if hit
  receiveAttack(row, col) {
    for (const [ship, coords] of this.ships) {
      for (const coord of coords) {
        if (row === coord[0] && col === coord[1]) {
          ship.hit();
          this.attacks.push([row, col]);
          return ship;
        }
      }
    }
    return false;
  }
  // return false if ship cannot be placed, otherwise return true
  placeShip(row, col, direction, ship) {
    const coords = [];
    for (let i = 0; i < ship.length; i++) {
      if (direction === "h") {
        if (col + i >= this.board_size) return false;
        coords.push([row, col + i]);
      } else if (direction === "v") {
        if (row + i >= this.board_size) return false;
        coords.push([row + i, col]);
      }
    }
    this.ships.set(ship, coords);
    return true;
  }
}
