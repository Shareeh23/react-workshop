import type React from "react";

export type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignupFormProps = {
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  enteredValues: FormValues;
  didEdit: Record<keyof FormValues, boolean>;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  getInputClass: (field: keyof FormValues, isInvalid: boolean) => string;
  usernameIsInvalid: boolean;
  emailIsInvalid: boolean;
  passwordIsInvalid: boolean;
  confirmPasswordIsInvalid: boolean;
};
