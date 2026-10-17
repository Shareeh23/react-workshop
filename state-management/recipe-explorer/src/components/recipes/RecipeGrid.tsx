import type { RecipeCollection } from "@/types/recipe";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ filteredRecipes }: { filteredRecipes: RecipeCollection }) {
  return (
    <section className="space-y-6 py-8">
      <div>
        <h2 className="font-serif text-3xl font-bold">Discover Recipes</h2>
        <p className="mt-2 text-muted-foreground">
          Find something delicious to make.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
