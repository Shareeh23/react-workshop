import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import type { RecipeCollection } from "@/types/recipe";
import type { RootState } from "@/store/store";

import { removeFavorite } from "@/store/favoriteSlice";

import { ChefHat, Heart, Clock, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header({ recipes }: { recipes: RecipeCollection }) {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const favorites = useSelector((state: RootState) => state.favorites);

  const dispatch = useDispatch();

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id),
  );

  return (
    <>
      <header className="flex items-center justify-between gap-6 border-b py-5">
        <div className="flex items-center gap-3">
          <ChefHat className="size-7" />
          <h1 className="font-serif text-2xl font-bold">Recipe Explorer</h1>
        </div>

        <Input
          type="search"
          placeholder="Search recipes..."
          className="max-w-sm"
        />

        <Button variant="outline" onClick={() => setIsFavoritesOpen(true)}>
          <Heart className="mr-2 size-4" />
          Favorites
        </Button>
      </header>

      <Sheet open={isFavoritesOpen} onOpenChange={setIsFavoritesOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Favorite Recipes ({favoriteRecipes.length})</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-4 overflow-y-auto px-4 py-4">
            {favoriteRecipes.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                You haven't added any favorite recipes yet.
              </p>
            ) : (
              favoriteRecipes.map((recipe) => (
                <div key={recipe.id} className="flex items-center gap-3">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="size-16 rounded-md object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{recipe.name}</p>

                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="size-3" />
                      {recipe.cookTimeMinutes} minutes
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`Remove ${recipe.name} from favorites`}
                    onClick={() => dispatch(removeFavorite(recipe.id))}
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
