import type { SignupFormProps } from "../types/signup-form-types";

export default function SignupForm({
  handleSubmit,
  enteredValues,
  didEdit,
  handleOnChange,
  handleOnBlur,
  getInputClass,
  usernameIsInvalid,
  emailIsInvalid,
  passwordIsInvalid,
  confirmPasswordIsInvalid,
}: SignupFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-7 rounded-2xl border border-white/8 bg-[#101221] p-6 shadow-2xl shadow-black/20 sm:p-8"
    >
      {/* Personal Information */}
      <fieldset className="space-y-5">
        <legend className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
          Personal Information
        </legend>

        {/* Username */}
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-slate-300"
          >
            Username
          </label>

          <input
            type="text"
            name="username"
            id="username"
            value={enteredValues.username}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            placeholder="John Doe"
            className={getInputClass("username", usernameIsInvalid)}
          />

          {didEdit.username && usernameIsInvalid && (
            <p className="text-xs leading-5 text-rose-400">
              Username must contain at least 3 characters.
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email address
          </label>

          <input
            type="email"
            name="email"
            id="email"
            value={enteredValues.email}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            placeholder="john@example.com"
            className={getInputClass("email", emailIsInvalid)}
          />

          {didEdit.email && emailIsInvalid && (
            <p className="text-xs leading-5 text-rose-400">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </fieldset>

      <hr className="border-white/8" />

      {/* Account Security */}
      <fieldset className="space-y-5">
        <legend className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
          Account Security
        </legend>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-300"
          >
            Password
          </label>

          <input
            type="password"
            name="password"
            id="password"
            value={enteredValues.password}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            placeholder="At least 8 characters"
            className={getInputClass("password", passwordIsInvalid)}
          />

          {didEdit.password && passwordIsInvalid && (
            <p className="text-xs leading-5 text-rose-400">
              Password must contain at least 8 characters.
            </p>
          )}

          <p className="text-xs text-slate-500">Use at least 8 characters.</p>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-slate-300"
          >
            Confirm password
          </label>

          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={enteredValues.confirmPassword}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            placeholder="Re-enter your password"
            className={getInputClass(
              "confirmPassword",
              confirmPasswordIsInvalid,
            )}
          />

          {didEdit.confirmPassword && confirmPasswordIsInvalid && (
            <p className="text-xs leading-5 text-rose-400">
              Passwords must match.
            </p>
          )}
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-violet-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition duration-200 hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101221] active:scale-[0.99]"
      >
        Create Account
      </button>

      <p className="text-center text-xs text-slate-500">
        All fields are required.
      </p>
    </form>
  );
}
