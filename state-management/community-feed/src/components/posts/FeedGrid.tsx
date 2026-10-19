import { useGetPostsQuery } from "@/services/api-slice";

import ErrorState from "@/components/feedback/ErrorState";
import Spinner from "@/components/feedback/Spinner";

import FeedHeader from "./FeedHeader";
import PostCard from "./PostCard";

export default function FeedGrid() {
  const { isLoading, isError, isFetching, error, data, refetch } =
    useGetPostsQuery();

  if (isLoading) {
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
      <FeedHeader />

      {isFetching && (
        <p
          role="status"
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span className="size-3 animate-spin rounded-full border-2 border-current border-r-transparent" />
          Refreshing posts...
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
