import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().trim().min(3, "Username must be at least 3 characters"),
    email: z.email("Enter a valid email address").trim(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>