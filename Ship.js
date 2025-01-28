export default class Ship {
  constructor(length) {
    this.length = length;
    this.num_hits = 0;
  }
  hit() {
    if (this.num_hits < this.length) {
      this.num_hits += 1;
    }
  }
  isSunk() {
    return this.num_hits == this.length;
  }
}
