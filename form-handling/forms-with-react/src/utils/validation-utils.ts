import type { FormValues } from "../types/signup-form-types";

export function usernameIsInvalid(username: string) {
  return username.trim().length < 3;
}

export function emailIsInvalid(email: string) {
  return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function passwordIsInvalid(password: string) {
  return password.length < 8;
}

export function confirmPasswordIsInvalid(values: FormValues) {
  return (
    values.confirmPassword === "" || values.confirmPassword !== values.password
  );
}
