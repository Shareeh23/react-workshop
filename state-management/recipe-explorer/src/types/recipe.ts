export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  cuisine: string;
  caloriesPerServing: number;
  image: string;
  rating: number;
}

export type RecipeCollection = Recipe[]

export type APIResponse = {
  recipes: RecipeCollection;
  total: number;
  skip?: number;
  limit?: number;
}