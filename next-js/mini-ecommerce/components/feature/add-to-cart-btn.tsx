"use client";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

type AddToCartButtonProps = {
  productId: number;
  className: string;
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
};

export function AddToCartButton({
  productId,
  className,
  size = "default",
  disabled = false,
}: AddToCartButtonProps) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  function handleAddToCart() {
    if (!session) {
      const callbackURL = `/products?addToCart=${productId}`;

      router.push(`/login?callbackURL=${encodeURIComponent(callbackURL)}`);

      return;
    }

    // We'll implement the authenticated cart operation next.
    console.log("Add product to cart:", productId);
  }

  return (
    <Button
      className={className}
      size={size}
      disabled={isPending || disabled}
      onClick={handleAddToCart}
    >
      {isPending ? "Checking session..." : "Add to Cart"}
    </Button>
  );
}
