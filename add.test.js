const add = require("./add");

test("properly add two numbers", () => {
  expect(add(2, 5)).toBe(7);
});
