import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type RecipeDetailsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function RecipeDetails({
  open,
  onOpenChange,
}: RecipeDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Recipe Details
          </DialogTitle>

          <DialogDescription>
            Ingredients and cooking instructions will appear here.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
