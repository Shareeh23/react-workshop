import { ChefHat, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 border-b py-5">
      <div className="flex items-center gap-3">
        <ChefHat className="size-7" />
        <h1 className="font-serif text-2xl font-bold">Recipe Explorer</h1>
      </div>

      <Input
        type="search"
        placeholder="Search recipes..."
        className="max-w-sm"
      />

      <Button variant="outline">
        <Heart className="mr-2 size-4" />
        Favorites
      </Button>
    </header>
  );
}
