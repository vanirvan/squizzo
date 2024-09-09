import { expect, test, describe } from "vitest";

import { upperCaseFirstLetter } from "../../lib/utils/uppercase-first-letter";

describe("Transform first letter of a single word to upper case", () => {
  test("should convert first letter of a single word to upper case", () => {
    const input = "hello";
    const expectedOutput = "Hello";
    expect(upperCaseFirstLetter(input)).toBe(expectedOutput);
  });

  test("should not change the first letter if it is already upper case", () => {
    const input = "Hello";
    const expectedOutput = "Hello";
    expect(upperCaseFirstLetter(input)).toBe(expectedOutput);
  });

  test("should change the first letter it string is more than one words", () => {
    const input = "lorem ipsum dolor sit amet";
    const expectedOutput = "Lorem ipsum dolor sit amet";
    expect(upperCaseFirstLetter(input)).toBe(expectedOutput);
  });

  test("should change all the first letters of each words if string contains more than one words", () => {
    const input = "lorem ipsum dolor sit amet";
    const expectedOutput = "Lorem Ipsum Dolor Sit Amet";
    expect(upperCaseFirstLetter(input, { allWords: true })).toBe(
      expectedOutput,
    );
  });
});
