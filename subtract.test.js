const subtract = require('./subtract');

test("properly subtract two numbers", () => {
  expect(subtract(2,5)).toBe(-3)
})