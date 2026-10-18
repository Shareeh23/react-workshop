import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store/store";
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
import { addFavorite, removeFavorite } from "@/store/favoriteSlice";

export default function RecipeCard({
  recipe,
  handleViewRecipe,
}: {
  recipe: Recipe;
  handleViewRecipe: (recipe: Recipe) => void;
}) {
  const favorites = useSelector((state: RootState) => state.favorites);

  const dispatch = useDispatch();

  const isFavorite = favorites.includes(recipe.id);

  function handleToggle() {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.id));
    } else {
      dispatch(addFavorite(recipe.id));
    }
  }

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

        <Button
          variant="ghost"
          size="icon"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={handleToggle}
        >
          <Heart
            className={`size-5 ${isFavorite ? "fill-current text-red-500" : ""}`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
