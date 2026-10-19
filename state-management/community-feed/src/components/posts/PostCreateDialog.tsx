import { useState } from "react";

import type { AddPostRequest } from "@/types/post-api.types";
import { useAddPostMutation } from "@/services/api-slice";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type PostCreateDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PostCreateDialog({
  open,
  onOpenChange,
}: PostCreateDialogProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const [addPost, { isLoading, isError }] = useAddPostMutation();

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const newPost: AddPostRequest = {
      title: title.trim(),
      body: body.trim(),
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      userId: 1,
    };

    try {
      const createdPost = await addPost(newPost).unwrap();

      console.log(createdPost);
      onOpenChange(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
          <DialogDescription>
            Share an idea or start a conversation with the community.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Field>
            <FieldLabel htmlFor="post-title">Title</FieldLabel>
            <Input
              id="post-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Give your post a title"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="post-body">Content</FieldLabel>
            <Textarea
              id="post-body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="What would you like to share?"
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
            <FieldDescription>Separate tags with commas.</FieldDescription>
          </Field>

          {isError && (
            <p role="alert" className="text-sm text-destructive">
              Failed to create the post. Please try again.
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
              {isLoading ? "Creating..." : "Create Post"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
