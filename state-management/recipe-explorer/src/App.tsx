import { useState } from "react";

import Header from "@/components/layout/Header";
import RecipeGrid from "@/components/recipes/RecipeGrid";
import RecipeFilters from "@/components/recipes/RecipeFilters";
import RecipeDetails from "@/components/recipes/RecipeDetails";

export default function App() {
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [isRecipeDetailsOpen, setIsRecipeDetailsOpen] = useState(false);

  const cuisines = ["Italian", "Asian", "Mexican", "Indian"];

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6">
      <Header />

      <div className="flex items-center justify-between gap-4 pt-8">
        <p className="text-sm text-muted-foreground">
          Discover your next favorite meal.
        </p>

        <RecipeFilters
          cuisines={cuisines}
          onCuisineChange={setSelectedCuisine}
        />
      </div>

      <RecipeGrid />

      <RecipeDetails
        open={isRecipeDetailsOpen}
        onOpenChange={setIsRecipeDetailsOpen}
      />
    </main>
  );
}