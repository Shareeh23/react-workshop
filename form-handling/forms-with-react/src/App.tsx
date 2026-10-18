import { useState } from "react";

import type { FormValues } from "./types/signup-form-types";

import {
  usernameIsInvalid as validateUsername,
  emailIsInvalid as validateEmail,
  passwordIsInvalid as validatePassword,
  confirmPasswordIsInvalid as validateConfirmPassword,
} from "./utils/validation-utils";

import SuccessMessage from "./components/SuccessMessage";
import SignupForm from "./components/SignupForm";

const initialEnteredValues: FormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialDidEdit = {
  username: false,
  email: false,
  password: false,
  confirmPassword: false,
};

function App() {
  const [enteredValues, setEnteredValues] =
    useState<FormValues>(initialEnteredValues);

  const [didEdit, setDidEdit] = useState(initialDidEdit);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const usernameInvalid = validateUsername(enteredValues.username);
  const emailInvalid = validateEmail(enteredValues.email);
  const passwordInvalid = validatePassword(enteredValues.password);
  const confirmPasswordInvalid = validateConfirmPassword(enteredValues);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitted(false);
    setDidEdit({
      username: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (
      usernameInvalid ||
      emailInvalid ||
      passwordInvalid ||
      confirmPasswordInvalid
    ) {
      return;
    }

    setEnteredValues(initialEnteredValues);
    setDidEdit(initialDidEdit);
    setIsSubmitted(true);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setEnteredValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleOnBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name } = e.target;

    setDidEdit((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  const inputBaseClass =
    "w-full rounded-xl border bg-[#0c0e1c] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition duration-200";

  const inputNeutralClass =
    "border-white/10 focus:border-violet-400/60 focus:ring-4 focus:ring-violet-400/10";

  const inputValidClass =
    "border-emerald-500/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10";

  const inputInvalidClass =
    "border-rose-500/70 focus:border-rose-400 focus:ring-4 focus:ring-rose-400/10";

  function getInputClass(field: keyof FormValues, isInvalid: boolean) {
    if (!didEdit[field]) {
      return `${inputBaseClass} ${inputNeutralClass}`;
    }

    return `${inputBaseClass} ${
      isInvalid ? inputInvalidClass : inputValidClass
    }`;
  }

  return (
    <main className="min-h-screen bg-[#080914] px-4 py-16 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-lg">
        <header className="mb-10">
          <span className="mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-300">
            GET STARTED
          </span>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Create your account<span className="text-violet-400">.</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            A few details and you're good to go.
          </p>
        </header>

        {isSubmitted && <SuccessMessage />}

        <SignupForm
          handleSubmit={handleSubmit}
          enteredValues={enteredValues}
          didEdit={didEdit}
          handleOnChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          getInputClass={getInputClass}
          usernameIsInvalid={usernameInvalid}
          emailIsInvalid={emailInvalid}
          passwordIsInvalid={passwordInvalid}
          confirmPasswordIsInvalid={confirmPasswordInvalid}
        />

        <p className="mt-6 text-center text-xs text-slate-600">
          Your information stays yours.
        </p>
      </div>
    </main>
  );
}

export default App;
