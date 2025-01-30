import Gameboard from "./Gameboard.js";
describe("Gameboard public functions", () => {
  let gb;
  beforeEach(() => {
    gb = new Gameboard();
  });
  test("placeShip should place ship and return true and checkOccupied should return true for all of the ship coordinates", () => {
    expect(gb.placeShip(0, 0, "h", gb.s5_0)).toBe(true);
    expect(gb.checkOccupied([[0, 0]])).toBe(true);
    expect(gb.checkOccupied([[0, 1]])).toBe(true);
    expect(gb.checkOccupied([[0, 2]])).toBe(true);
    expect(gb.checkOccupied([[0, 3]])).toBe(true);
    expect(gb.checkOccupied([[0, 4]])).toBe(true);
  });
  test("placeShip should return false and checkOccupied should return false", () => {
    expect(gb.placeShip(9, 0, "v", gb.s5_0)).toBe(false);
    expect(gb.checkOccupied([[9, 0]])).toBe(false);
  });
  test("receiveAttack should return ")
});
