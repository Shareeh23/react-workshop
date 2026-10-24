import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "@/schemas/signup-schema";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/field";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const { register, handleSubmit, formState } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  function onSubmit(data: SignupFormData) {
    console.log(data);
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="John Doe"
                aria-invalid={!!formState.errors.username}
                {...register("username")}
                required
              />
              {formState.errors.username && (
                <FieldError>{formState.errors.username?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                aria-invalid={!!formState.errors.email}
                {...register("email")}
                required
              />
              {formState.errors.email ? (
                <FieldError>{formState.errors.email.message}</FieldError>
              ) : (
                <FieldDescription>
                  We'll use this to contact you. We will not share your email
                  with anyone else.
                </FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                aria-invalid={!!formState.errors.password}
                {...register("password")}
                required
              />
              {formState.errors.password ? (
                <FieldError>{formState.errors.password.message}</FieldError>
              ) : (
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                aria-invalid={!!formState.errors.confirmPassword}
                {...register("confirmPassword")}
                required
              />
              {formState.errors.confirmPassword ? (
                <FieldError>
                  {formState.errors.confirmPassword.message}
                </FieldError>
              ) : (
                <FieldDescription>
                  Please confirm your password.
                </FieldDescription>
              )}
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">
                  {formState.isSubmitting
                    ? "Setting things up..."
                    : "Create Account"}
                </Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
