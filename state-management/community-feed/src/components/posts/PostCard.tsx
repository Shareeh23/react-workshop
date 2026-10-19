import {
  Eye,
  MessageCircle,
  Pencil,
  ThumbsDown,
  ThumbsUp,
  Trash2,
} from "lucide-react";

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
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
          <button
            type="button"
            aria-label={`Edit post ${post.id}`}
            title="Edit post"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Pencil className="size-4" />
          </button>

          <button
            type="button"
            aria-label={`Delete post ${post.id}`}
            title="Delete post"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Trash2 className="size-4" />
          </button>
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

        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <MessageCircle className="size-3.5" />
          Comments
        </button>
      </div>
    </article>
  );
}
