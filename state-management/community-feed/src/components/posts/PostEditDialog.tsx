import { useState } from "react";

import type { Post } from "@/types/post.types";

import { useUpdatePostMutation } from "@/services/api-slice";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type PostEditDialogProps = {
  post: Post;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PostEditDialog({
  post,
  open,
  onOpenChange,
}: PostEditDialogProps) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [tags, setTags] = useState(post.tags.join(", "));

  const [updatePost, { isLoading, isError }] = useUpdatePostMutation();

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const updatedPost = await updatePost({
        id: post.id,
        body: {
          title,
          body,
          tags: tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        },
      }).unwrap();

      console.log(updatedPost);
      onOpenChange(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit post</DialogTitle>
          <DialogDescription>
            Make changes to your post below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Field>
            <FieldLabel htmlFor="post-title">Title</FieldLabel>
            <Input
              id="post-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="post-body">Content</FieldLabel>
            <Textarea
              id="post-body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              className="min-h-32 resize-y"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="post-tags">Tags</FieldLabel>
            <Input
              id="post-tags"
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              placeholder="technology, programming"
            />
            <FieldDescription>
              Separate tags with commas.
            </FieldDescription>
          </Field>

          {isError && (
            <p role="alert" className="text-sm text-destructive">
              Failed to update the post. Please try again.
            </p>
          )}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}