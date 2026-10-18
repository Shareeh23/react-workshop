import { ChefHat, LoaderCircle, RefreshCw } from "lucide-react";

import type { Recipe, RecipeCollection } from "@/types/recipe";

import { Button } from "@/components/ui/button";
import RecipeCard from "./RecipeCard";

type RecipeGridProps = {
  displayedRecipes: RecipeCollection;
  isLoading: boolean;
  error: string;
  onRetry: () => void;
  handleViewRecipe: (recipe: Recipe) => void;
};

export default function RecipeGrid({
  displayedRecipes,
  isLoading,
  error,
  onRetry,
  handleViewRecipe,
}: RecipeGridProps) {
  if (isLoading) {
    return (
      <section className="space-y-6 py-8">
        <h2 className="font-serif text-3xl font-bold">Discover Recipes</h2>

        <div
          className="flex min-h-72 flex-col items-center justify-center gap-5"
          role="status"
          aria-live="polite"
        >
          <div className="relative flex size-16 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-primary/15" />
            <LoaderCircle className="size-16 animate-spin text-primary" />
            <ChefHat className="absolute size-6 text-primary" />
          </div>

          <div className="space-y-1 text-center">
            <p className="font-medium">Preparing your recipe collection</p>
            <p className="text-sm text-muted-foreground">
              Finding something delicious...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="space-y-6 py-8">
        <h2 className="font-serif text-3xl font-bold">Discover Recipes</h2>

        <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-destructive/20 bg-destructive/5 px-6 py-16 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-destructive/10">
            <ChefHat className="size-7 text-destructive" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Something went wrong</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              {error} Please check your connection and try again.
            </p>
          </div>

          <Button onClick={onRetry} variant="outline" className="gap-2">
            <RefreshCw className="size-4" />
            Try again
          </Button>
        </div>
      </section>
    );
  }

  if (displayedRecipes.length === 0) {
    return (
      <section className="space-y-6 py-8">
        <h2 className="font-serif text-3xl font-bold">Discover Recipes</h2>

        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed px-6 py-16 text-center">
          <ChefHat className="size-10 text-muted-foreground" />
          <h3 className="text-lg font-semibold">No recipes found</h3>
          <p className="text-sm text-muted-foreground">
            Try a different search term or cuisine.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6 py-8">
      <div>
        <h2 className="font-serif text-3xl font-bold">Discover Recipes</h2>
        <p className="mt-2 text-muted-foreground">
          Find something delicious to make.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedRecipes.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            handleViewRecipe={handleViewRecipe}
          />
        ))}
      </div>
    </section>
  );
}
