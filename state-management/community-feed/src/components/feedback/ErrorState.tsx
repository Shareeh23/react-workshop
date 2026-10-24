import { AlertCircle, RefreshCw } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  message: string;
  onRetry?: () => void;
};

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex min-h-64 items-center justify-center">
      <Alert variant="destructive" className="max-w-lg">
        <AlertCircle className="size-4" />

        <AlertTitle>Something went wrong</AlertTitle>

        <AlertDescription className="mt-2 flex flex-col items-start gap-4">
          <p>{message}</p>

          {onRetry && (
            <Button variant="outline" size="sm" onClick={onRetry}>
              <RefreshCw className="mr-2 size-4" />
              Try again
            </Button>
          )}
        </AlertDescription>
      </Alert>
    </div>
  );
}
