import { test } from "vitest";
import { validateForm } from "./../../src/utils/validationutils.JS";

test("validateForm", () => {
  // Test with valid data
  const validData = {
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    password: "Password123!",
    confirmPassword: "Password123!",
    terms: true,
  };
  let result = validateForm(validData);
  expect(result.valid).toBe(true);
  expect(result.errors).toEqual({});

  // Test with missing name
  const missingName = { ...validData, name: "" };
  result = validateForm(missingName);
  expect(result.valid).toBe(false);
  expect(result.errors).toEqual({ name: "Name is required" });

  // Test with invalid email
  const invalidEmail = { ...validData, email: "invalid" };
  result = validateForm(invalidEmail);
  expect(result.valid).toBe(false);
  expect(result.errors).toEqual({ email: "Email is invalid" });

  // Test with short password
  const shortPassword = { ...validData, password: "Short1!" };
  result = validateForm(shortPassword);
  expect(result.valid).toBe(false);
  expect(result.errors).toEqual({
    password: "Password must be at least 8 characters",
  });

  // Test with mismatched passwords
  const mismatchedPasswords = { ...validData, confirmPassword: "Different1!" };
  result = validateForm(mismatchedPasswords);
  expect(result.valid).toBe(false);
  expect(result.errors).toEqual({ confirmPassword: "Passwords must match" });

  // Test with terms not agreed
  const termsNotAgreed = { ...validData, terms: false };
  result = validateForm(termsNotAgreed);
  expect(result.valid).toBe(false);
  expect(result.errors).toEqual({
    terms: "You must agree to the terms and conditions",
  });
});
