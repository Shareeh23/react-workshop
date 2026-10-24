"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { authClient } from "@/lib/auth-client";
import { loginSchema, type LoginFormValues } from "@/lib/schemas/auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [authError, setAuthError] = useState("");

  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    setAuthError("");

    const { error } = await authClient.signIn.email({
      email: values.email,
      password: values.password,
      callbackURL: callbackURL,
    });

    if (error) {
      setAuthError(error.message ?? "Unable to sign in. Please try again.");
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            {authError && (
              <p role="alert" className="text-sm text-destructive">
                {authError}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4 mt-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
