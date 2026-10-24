"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProductsErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ reset }: ProductsErrorProps) {
  return (
    <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
          <CardDescription>
            We couldn&apos;t load the products. Please try again.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            An unexpected error occurred. Please try again in a moment.
          </p>
        </CardContent>

        <CardFooter>
          <Button onClick={reset}>Try again</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
