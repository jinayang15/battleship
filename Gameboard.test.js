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
  test("receiveAttack should return the ship", () => {
    expect(gb.placeShip(4, 1, "h", gb.s5_0)).toBe(true);
    expect(gb.receiveAttack(4, 3)).toBe(gb.s5_0);
    expect(gb.receiveAttack(4, 5)).toBe(gb.s5_0);
    expect(gb.receiveAttack(4, 1)).toBe(gb.s5_0);
  });
  test("receiveAttack should return false", () => {
    expect(gb.placeShip(4, 1, "h", gb.s5_0)).toBe(true);
    expect(gb.receiveAttack(5, 1)).toBe(false);
    expect(gb.receiveAttack(0, 0)).toBe(false);
    expect(gb.receiveAttack(4, 0)).toBe(false);
    expect(gb.receiveAttack(3, 2)).toBe(false);
  });
  test("checkValidMove should return true", () => {
    expect(gb.placeShip(4, 1, "h", gb.s5_0)).toBe(true);
    expect(gb.receiveAttack(4, 3)).toBe(gb.s5_0);
    expect(gb.receiveAttack(4, 5)).toBe(gb.s5_0);
    expect(gb.receiveAttack(4, 1)).toBe(gb.s5_0);
    expect(gb.receiveAttack(5, 1)).toBe(false);
    expect(gb.receiveAttack(0, 0)).toBe(false);
    expect(gb.receiveAttack(4, 0)).toBe(false);
    expect(gb.receiveAttack(3, 2)).toBe(false);
    expect(gb.checkValidMove(6, 0)).toBe(true);
    expect(gb.checkValidMove(0, 1)).toBe(true);
    expect(gb.checkValidMove(5, 5)).toBe(true);
    expect(gb.checkValidMove(9, 7)).toBe(true);
  });
  test("checkValidMove should return false", () => {
    expect(gb.placeShip(4, 1, "h", gb.s5_0)).toBe(true);
    expect(gb.receiveAttack(4, 3)).toBe(gb.s5_0);
    expect(gb.receiveAttack(4, 5)).toBe(gb.s5_0);
    expect(gb.receiveAttack(4, 1)).toBe(gb.s5_0);
    expect(gb.receiveAttack(5, 1)).toBe(false);
    expect(gb.receiveAttack(0, 0)).toBe(false);
    expect(gb.receiveAttack(4, 0)).toBe(false);
    expect(gb.receiveAttack(3, 2)).toBe(false);
    expect(gb.checkValidMove(3, 2)).toBe(false);
    expect(gb.checkValidMove(0, 0)).toBe(false);
    expect(gb.checkValidMove(5, 1)).toBe(false);
    expect(gb.checkValidMove(4, 3)).toBe(false);
  });
});
