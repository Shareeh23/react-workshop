import { useState, useEffect } from "react";

import type { APIResponse, RecipeCollection } from "./types/recipe";

import { getUniqueCuisines, getFilteredRecipes } from "./utils/recipe-utils";

import Header from "@/components/layout/Header";
import RecipeGrid from "@/components/recipes/RecipeGrid";
import RecipeFilters from "@/components/recipes/RecipeFilters";
import RecipeDetails from "@/components/recipes/RecipeDetails";

const URL = "https://dummyjson.com/recipes?limit=15";

export default function App() {
  const [recipes, setRecipes] = useState<RecipeCollection>([]);
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [isRecipeDetailsOpen, setIsRecipeDetailsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRecipes() {
      try {
        const response = await fetch(URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Unable to fetch results");
        }

        const data: APIResponse = await response.json();

        setRecipes(data.recipes);
        return;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        console.error(err);
      }
    }

    fetchRecipes();

    return () => controller.abort();
  }, []);

  const cuisines = getUniqueCuisines(recipes);

  const filteredRecipes = getFilteredRecipes(selectedCuisine, recipes);

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

      <RecipeGrid filteredRecipes={filteredRecipes} />

      <RecipeDetails
        open={isRecipeDetailsOpen}
        onOpenChange={setIsRecipeDetailsOpen}
      />
    </main>
  );
}
