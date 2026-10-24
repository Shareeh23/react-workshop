import type { RecipeCollection } from "@/types/recipe";

export function getUniqueCuisines(recipes: RecipeCollection) {
  const cuisines = recipes.map((recipe) => recipe.cuisine);
  return [...new Set(cuisines)];
}

export function getFilteredRecipes(
  selectedCuisine: string,
  recipes: RecipeCollection,
) {
  return selectedCuisine === "all"
    ? recipes
    : recipes.filter((recipe) => recipe.cuisine === selectedCuisine);
}
