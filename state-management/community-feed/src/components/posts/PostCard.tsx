import { useState } from "react";

import {
  Eye,
  LoaderCircle,
  MessageCircle,
  Pencil,
  ThumbsDown,
  ThumbsUp,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useDeletePostMutation } from "@/services/api-slice";
import PostEditDialog from "./PostEditDialog";
import type { Post } from "@/types/post.types";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [deletePost, { isLoading }] = useDeletePostMutation();

  async function handleDelete() {
    try {
      const deletedPost = await deletePost({ id: post.id }).unwrap();
      console.log(deletedPost);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md sm:p-6">
      {/* Post Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold text-secondary-foreground">
            {post.userId}
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              User {post.userId}
            </p>
            <p className="text-xs text-muted-foreground">Post #{post.id}</p>
          </div>
        </div>

        {/* CRUD Actions */}
        <div className="flex shrink-0 items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Edit post ${post.id}`}
            title="Edit post"
            onClick={() => setIsEditOpen(true)}
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Delete post ${post.id}`}
            title="Delete post"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              <Trash2 className="size-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Post Content */}
      <div className="flex-1">
        <h2 className="font-serif text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
          {post.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {post.body}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Post Footer */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <ThumbsUp className="size-3.5" />
            {post.reactions.likes}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <ThumbsDown className="size-3.5" />
            {post.reactions.dislikes}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Eye className="size-3.5" />
            {post.views}
          </span>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="gap-1.5 text-xs text-muted-foreground hover:text-primary"
        >
          <MessageCircle className="size-3.5" />
          Comments
        </Button>
      </div>

      {/* Edit Dialog */}
      {isEditOpen && (
        <PostEditDialog
          post={post}
          open={isEditOpen}
          onOpenChange={setIsEditOpen}
        />
      )}
    </article>
  );
}
