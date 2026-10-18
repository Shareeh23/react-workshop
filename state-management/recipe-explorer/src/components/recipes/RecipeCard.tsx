import type { Recipe } from "@/types/recipe";

import { Heart, Clock, Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function RecipeCard({
  recipe,
  handleViewRecipe,
}: {
  recipe: Recipe;
  handleViewRecipe: (recipe: Recipe) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="aspect-4/3 w-full object-cover"
      />

      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{recipe.cuisine}</Badge>
          <span className="flex items-center gap-1 font-mono text-sm">
            <Star className="size-4 fill-current" />
            {recipe.rating}
          </span>
        </div>

        <CardTitle className="font-serif text-xl">{recipe.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4" />
          {recipe.cookTimeMinutes} minutes
        </p>
      </CardContent>

      <CardFooter className="justify-between">
        <Button variant="outline" onClick={() => handleViewRecipe(recipe)}>
          View Recipe
        </Button>

        <Button variant="ghost" size="icon" aria-label="Add to favorites">
          <Heart className="size-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
