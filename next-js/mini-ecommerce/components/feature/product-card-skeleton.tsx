import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto space-y-6 px-6 py-12">
      <div className="space-y-2">
        <Skeleton className="h-9 w-36" />
        <Skeleton className="h-5 w-64" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <Skeleton className="aspect-square w-full rounded-none" />

            <CardHeader>
              <Skeleton className="h-7 w-3/4" />
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-4 w-12" />
              </div>

              <Skeleton className="h-9 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
