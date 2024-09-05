import { expect, test, describe } from "vitest";

import { emailToUsername } from "../../lib/utils/email-to-username";

describe("Transform email string to username", () => {
  test("should convert email to username by replacing dots with dashes", () => {
    const email = "john.doe@example.com";
    const expectedUsername = "john-doe";
    expect(emailToUsername(email)).toBe(expectedUsername);
  });

  test("should return the same string if there are no dots in the local part", () => {
    const email = "johndoe@example.com";
    const expectedUsername = "johndoe";
    expect(emailToUsername(email)).toBe(expectedUsername);
  });

  test("should handle emails with multiple dots in the local part", () => {
    const email = "john.doe.smith@example.com";
    const expectedUsername = "john-doe-smith";
    expect(emailToUsername(email)).toBe(expectedUsername);
  });

  test("should handle emails with no local part", () => {
    const email = "@example.com";
    const expectedUsername = "";
    expect(emailToUsername(email)).toBe(expectedUsername);
  });
});
