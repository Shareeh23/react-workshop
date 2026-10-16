import RecipeCard from "./RecipeCard";

export default function RecipeGrid() {
  return (
    <section className="space-y-6 py-8">
      <div>
        <h2 className="font-serif text-3xl font-bold">Discover Recipes</h2>
        <p className="mt-2 text-muted-foreground">
          Find something delicious to make.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  );
}
