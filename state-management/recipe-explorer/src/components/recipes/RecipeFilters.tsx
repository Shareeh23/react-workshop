import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type RecipeFiltersProps = {
  cuisines: string[];
  onCuisineChange: (cuisine: string) => void;
};

export default function RecipeFilters({
  cuisines,
  onCuisineChange,
}: RecipeFiltersProps) {
  return (
    <Select
      onValueChange={(value) => {
        if (value !== null) {
          onCuisineChange(value);
        }
      }}
      defaultValue="all"
    >
      <SelectTrigger className="w-50">
        <SelectValue placeholder="Filter by cuisine" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All cuisines</SelectItem>

        {cuisines.map((cuisine) => (
          <SelectItem key={cuisine} value={cuisine}>
            {cuisine}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
