import expect from "expect";
import Ship from "./Ship.js";

describe("Ship public functions", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(4);
  });
  test("isSunk method should return false", () => {
    expect(ship.isSunk()).toBe(false);
  });
  test("isSunk method should return false after being hit once", () => {
    expect(ship.hit()).toBeUndefined();
    expect(ship.isSunk()).toBe(false);
  });
  test("isSunk method should return true after being hit 4 times", () => {
    expect(ship.hit()).toBeUndefined();
    expect(ship.hit()).toBeUndefined();
    expect(ship.hit()).toBeUndefined();
    expect(ship.hit()).toBeUndefined();
    expect(ship.isSunk()).toBe(true);
  });
});
