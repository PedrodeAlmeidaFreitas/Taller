const licenseKeyFormating = require("./../index.js");

describe("LicenseKeyFormating function", () => {
  test("testing S = “5F3Z-2e-9-w”, K = 4", () => {
    expect(licenseKeyFormating("5F3Z-2e-9-w", 4)).toBe("5F3Z-2E9W");
  });

  test("testing S = “2-5g-3-J”, K = 2", () => {
    expect(licenseKeyFormating("2-5g-3-J", 2)).toBe("2-5G-3J");
  });

  test("should throw an error for invalid string input", () => {
    expect(() => licenseKeyFormating(123, 4)).toThrowError(
      "Invalid input. Please provide a valid string (S) and a positive integer (K)."
    );
  });

  test("should throw an error for invalid K input", () => {
    expect(() => licenseKeyFormating("5F3Z-2e-9-w", -1)).toThrowError(
      "Invalid input. Please provide a valid string (S) and a positive integer (K)."
    );
  });

  test("should throw an error for missing K input", () => {
    expect(() => licenseKeyFormating("5F3Z-2e-9-w")).toThrowError(
      "Invalid input. Please provide a valid string (S) and a positive integer (K)."
    );
  });
});
