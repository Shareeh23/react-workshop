import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-[70svh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-medium text-muted-foreground">404 Error</p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        Sorry, we couldn't find the page you're looking for. It may have been
        moved or doesn't exist.
      </p>
      <Button nativeButton={false} render={<Link href="/" />}>
        Return Home
      </Button>
    </main>
  );
}
