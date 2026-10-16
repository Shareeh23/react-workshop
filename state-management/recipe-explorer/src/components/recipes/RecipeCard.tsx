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

export default function RecipeCard() {
  return (
    <Card className="overflow-hidden">
      <img
        src="https://cdn.dummyjson.com/recipe-images/1.webp"
        alt="Classic Margherita Pizza"
        className="aspect-4/3 w-full object-cover"
      />

      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">Italian</Badge>
          <span className="flex items-center gap-1 font-mono text-sm">
            <Star className="size-4 fill-current" />
            4.6
          </span>
        </div>

        <CardTitle className="font-serif text-xl">
          Classic Margherita Pizza
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4" />
          25 minutes
        </p>
      </CardContent>

      <CardFooter className="justify-between">
        <Button variant="outline">View Recipe</Button>

        <Button variant="ghost" size="icon" aria-label="Add to favorites">
          <Heart className="size-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
