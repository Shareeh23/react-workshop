import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export default async function CartPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?callbackURL=/cart");
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Your Cart</h1>

      <p className="mt-2 text-muted-foreground">
        Your cart is currently empty.
      </p>
    </div>
  );
}
