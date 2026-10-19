import { useGetPostsQuery } from "@/services/api-slice";

import ErrorState from "@/components/feedback/ErrorState";
import Spinner from "@/components/feedback/Spinner";
import PostCard from "./PostCard";

export default function FeedGrid() {
  const { isError, isFetching, error, data, refetch } = useGetPostsQuery();

  if (isFetching && !data) {
    return <Spinner />;
  }

  if (isError && !data) {
    const message =
      "error" in error
        ? error.error
        : "data" in error
          ? typeof error.data === "string"
            ? error.data
            : JSON.stringify(error.data)
          : "An unexpected error occurred.";

    return <ErrorState message={message} onRetry={refetch} />;
  }

  const posts = data?.posts ?? [];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
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

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
