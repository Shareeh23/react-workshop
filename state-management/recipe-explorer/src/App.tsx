import { useState, useEffect } from "react";

import type { Recipe, APIResponse, RecipeCollection } from "./types/recipe";

import { getUniqueCuisines, getFilteredRecipes } from "./utils/recipe-utils";

import Header from "@/components/layout/Header";
import RecipeGrid from "@/components/recipes/RecipeGrid";
import RecipeFilters from "@/components/recipes/RecipeFilters";
import RecipeDetails from "@/components/recipes/RecipeDetails";

const URL = "https://dummyjson.com/recipes?limit=15";

export default function App() {
  const [recipes, setRecipes] = useState<RecipeCollection>([]);
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isRecipeDetailsOpen, setIsRecipeDetailsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRecipes() {
      try {
        setIsLoading(true);

        setError("");

        const response = await fetch(URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Unable to fetch results");
        }

        const data: APIResponse = await response.json();

        setRecipes(data.recipes);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(
          err instanceof Error ? err.message : "Unexpected error occurred",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchRecipes();

    return () => controller.abort();
  }, [retry]);

  const cuisines = getUniqueCuisines(recipes);

  const filteredRecipes = getFilteredRecipes(selectedCuisine, recipes);

  const onRetry = () => setRetry((prev) => !prev);

  function handleViewRecipe(recipe: Recipe) {
    setSelectedRecipe(recipe);
    setIsRecipeDetailsOpen(true);
  }

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

      <RecipeGrid
        filteredRecipes={filteredRecipes}
        isLoading={isLoading}
        error={error}
        onRetry={onRetry}
        handleViewRecipe={handleViewRecipe}
      />

      <RecipeDetails
        open={isRecipeDetailsOpen}
        onOpenChange={(open) => {
          setIsRecipeDetailsOpen(open);
          if (!open) setSelectedRecipe(null);
        }}
        recipe={selectedRecipe}
      />
    </main>
  );
}
