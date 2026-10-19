import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import PostCreateDialog from "./PostCreateDialog";

export default function FeedHeader() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            The Community
          </p>

          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Latest discussions
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Ideas, stories, and conversations shared by the community.
          </p>
        </div>

        <Button
          type="button"
          onClick={() => setIsCreateOpen(true)}
          className="shrink-0"
        >
          <Plus className="size-4" />
          Create Post
        </Button>
      </div>

      {isCreateOpen && (
        <PostCreateDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />
      )}
    </>
  );
}
