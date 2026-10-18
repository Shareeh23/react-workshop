import type { Recipe } from "@/types/recipe";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock, CookingPot, Users, Flame } from "lucide-react";

type RecipeDetailsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipe: Recipe | null;
};

export default function RecipeDetails({
  open,
  onOpenChange,
  recipe,
}: RecipeDetailsProps) {
  if (!recipe) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-2xl">
        {/* Recipe image */}
        <div className="relative h-56 sm:h-72">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="h-full w-full object-cover"
          />

          <Badge className="absolute left-5 top-5">{recipe.cuisine}</Badge>
        </div>

        <div className="space-y-8 px-6 pb-6">
          {/* Header */}
          <DialogHeader className="space-y-3 text-left">
            <DialogTitle className="font-serif text-3xl font-bold">
              {recipe.name}
            </DialogTitle>

            <DialogDescription className="text-sm leading-relaxed">
              A delicious {recipe.cuisine.toLowerCase()} recipe to try at home.
            </DialogDescription>
          </DialogHeader>

          {/* Recipe summary */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4 text-center">
              <Clock className="size-5 text-primary" />
              <span className="text-xs text-muted-foreground">Prep Time</span>
              <span className="font-semibold">
                {recipe.prepTimeMinutes} min
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4 text-center">
              <CookingPot className="size-5 text-primary" />
              <span className="text-xs text-muted-foreground">Cook Time</span>
              <span className="font-semibold">
                {recipe.cookTimeMinutes} min
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4 text-center">
              <Users className="size-5 text-primary" />
              <span className="text-xs text-muted-foreground">Servings</span>
              <span className="font-semibold">{recipe.servings}</span>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4 text-center">
              <Flame className="size-5 text-primary" />
              <span className="text-xs text-muted-foreground">Calories</span>
              <span className="font-semibold">{recipe.caloriesPerServing} kcal</span>
            </div>
          </div>

          {/* Ingredients */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Ingredients</h3>

            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={`${ingredient}-${index}`}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Instructions</h3>

            <ol className="space-y-5">
              {recipe.instructions.map((instruction, index) => (
                <li
                  key={`${index}-${instruction.slice(0, 20)}`}
                  className="flex items-start gap-4"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-7 text-muted-foreground">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
