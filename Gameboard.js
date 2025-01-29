export default class Gameboard {
  constructor() {
    this.board_size = 10;
    this.attacks = [];
    this.ships = new Map();
  }
  // passes an array of [row,col]
  // returns true if any of the coords are occupied by a ship
  checkOccupied(arr) {
    const ships_json = JSON.stringify(this.ships);
    for (const coords of arr) {
      if (ships_json.includes(JSON.stringify(coords))) {
        return true;
      }
    }
    return false;
  }
  checkValidMove(row, col) {
    const attacks_json = JSON.stringify(this.attacks);
    for (const atk of this.attacks) {
      if (attacks_json.includes(JSON.stringify(atk))) return false;
    }
    return true;
  }
  checkHit(row, col) {
    const ships_json = JSON.stringify(this.ships);
    return ships_json.includes(JSON.stringify([row, col]));
  }
  placeShip(row, col, direction, ship) {}
  receiveAttack() {}
}
