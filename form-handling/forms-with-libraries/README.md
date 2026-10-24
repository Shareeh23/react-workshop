# Forms with Libraries

A React form-handling practice project built with **React Hook Form**, **Zod**, and **shadcn/ui**. This project builds on the native form-handling exercise by exploring how libraries simplify form state management, validation, and error handling.

## Tech Stack

* React
* TypeScript
* React Hook Form
* Zod
* `@hookform/resolvers`
* shadcn/ui
* Tailwind CSS
* Vite

## What I've Practised

### 1. Form State Management with React Hook Form

* Initialize forms using `useForm()`.
* Register input fields using `register()`.
* Handle form submissions using `handleSubmit()`.
* Configure validation behavior using `mode: "onBlur"`.
* Access form state through `formState`.

### 2. Schema Validation with Zod

* Define a validation schema using `z.object()`.
* Validate usernames using `.trim()` and `.min()`.
* Validate email addresses using `z.email()`.
* Validate password length using `.min()`.
* Compare password and confirmation fields using `.refine()`.
* Associate validation errors with specific fields using `path`.

### 3. Integrating React Hook Form with Zod

* Connect a Zod schema to React Hook Form using `zodResolver()`.
* Validate form inputs against a centralized schema.
* Infer TypeScript types from a Zod schema using `z.infer<typeof schema>`.
* Use the inferred form type with `useForm()` and the submission handler.

### 4. Validation Feedback

* Access field errors through `formState.errors`.
* Display field-specific validation messages.
* Use `aria-invalid` to communicate invalid field states.
* Display contextual descriptions when fields have no validation errors.
* Disable native browser validation with `noValidate` to rely on the configured validation flow.

### 5. Reusable UI Components

* Build the signup form using shadcn/ui components.
* Compose the form using reusable cards, inputs, labels, fields, and buttons.
* Associate labels with inputs using `htmlFor` and `id`.
* Display submission feedback using `formState.isSubmitting`.

### 6. Input Handling

* Trim usernames and email addresses before using their validated values.
* Preserve password values without trimming them.
* Validate password confirmation against the original password.

## What to Practise Later

The following topics are opportunities for further practice, not features currently implemented in this project.

### 1. Additional Form State

Explore other properties exposed through `formState`:

* `isDirty` and `dirtyFields` — track whether form values have changed.
* `isValid` — determine whether the form currently passes validation.
* `touchedFields` — track which fields have been interacted with.

### 2. Additional React Hook Form Methods

* `watch()` — observe form values as they change.
* `getValues()` — retrieve current form values.
* `setValue()` — update individual fields programmatically.
* `reset()` — reset the form and its state.
* `setError()` — set validation errors programmatically.
* `clearErrors()` — clear existing errors.

### 3. Dynamic and Controlled Inputs

* Use `Controller` to integrate controlled third-party components.
* Use `useFieldArray()` to manage dynamic lists of fields.
* Practise conditional fields that appear based on other input values.

### 4. Advanced Zod Validation

* Explore `.superRefine()` for more complex validation rules.
* Validate conditional fields and related values.
* Learn about schema transformations and defaults.
* Explore the distinction between `z.input<typeof schema>` and `z.output<typeof schema>` when schemas transform data.

### 5. Form Submission and Server Integration

* Replace the current `console.log()` submission handler with an asynchronous operation.
* Handle successful submissions and server-side errors.
* Display loading states and prevent duplicate submissions.
* Reset the form after successful submission.
* Handle server-side validation errors.

### 6. More Complex Form Workflows

* Build a multi-step form.
* Preserve form values while navigating between steps.
* Implement dependent fields and conditional validation.
* Create reusable form components for different forms.

### 7. Accessibility

* Associate validation messages with their corresponding inputs.
* Use `aria-describedby` where appropriate.
* Improve keyboard navigation and focus management.
* Consider how validation errors should be announced to assistive technologies.

## Current Limitations

* The form does not create an account or communicate with a backend.
* Submission currently logs the validated form data to the console.
* Validation is performed on the client; no server-side validation is implemented.
* Advanced React Hook Form features have not yet been explored.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the TypeScript checks:

```bash
npm run typecheck
```

Run ESLint:

```bash
npm run lint
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Purpose

The purpose of this project is to practise form handling with React Hook Form and schema-based validation with Zod, while comparing this approach with the native React form-handling implementation in the `forms` project.
