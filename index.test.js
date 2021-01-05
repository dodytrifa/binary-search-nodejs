const main = require("./index.js");

describe("Test Binary Search", () => {
  describe("Release 0", () => {
    test("test array 1", () => {
      const test_array = [1, 2, 3, 4, 5];
      expect(main(3, test_array)).toBe(2);
    });
    test("test array 2", () => {
      const test_array = [13, 19, 24, 29, 32, 37, 43];
      expect(main(35, test_array)).toBe(-1);
    });
    test("test array 3", () => {
      const test_array = [100, 120, 130, 135, 150, 170];
      expect(main(135, test_array)).toBe(3);
    });
  });
  describe("Release 1", () => {
    test("test array 4", () => {
      const test_array = [13, 19, 24, 29, 32, 37, 43];
      expect(main(32, test_array)).toBe(4);
    });
  });
});
