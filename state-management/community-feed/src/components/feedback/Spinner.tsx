import { LoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <LoaderCircle className="size-8 animate-spin text-primary" />
    </div>
  );
}