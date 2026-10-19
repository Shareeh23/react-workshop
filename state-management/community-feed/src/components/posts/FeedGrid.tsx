import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
    views: 305,
    userId: 121,
  },
  {
    id: 2,
    title: "The art of seeing things differently",
    body: "Sometimes the smallest change in perspective can transform the way we understand a problem. What once seemed impossible becomes manageable when we take a step back and consider another point of view.",
    tags: ["life", "perspective", "growth"],
    reactions: {
      likes: 87,
      dislikes: 6,
    },
    views: 412,
    userId: 45,
  },
  {
    id: 3,
    title: "Why curiosity matters more than certainty",
    body: "The most interesting conversations often begin when someone admits they don't know the answer. Curiosity encourages us to ask better questions, challenge our assumptions, and discover ideas we might otherwise overlook.",
    tags: ["philosophy", "learning", "discussion"],
    reactions: {
      likes: 146,
      dislikes: 12,
    },
    views: 628,
    userId: 78,
  },
  {
    id: 4,
    title: "Finding time to do meaningful work",
    body: "We often fill our days with tasks that feel urgent but contribute very little to what matters to us. Taking time to identify our priorities can help us focus our attention on work that feels worthwhile.",
    tags: ["productivity", "work", "habits"],
    reactions: {
      likes: 64,
      dislikes: 4,
    },
    views: 237,
    userId: 93,
  },
  {
    id: 5,
    title: "Books that change the way you think",
    body: "Some books entertain us for a few hours, while others leave us thinking about their ideas for years. The best reading experiences don't always provide answers. Sometimes they give us better questions to live with.",
    tags: ["books", "reading", "ideas"],
    reactions: {
      likes: 213,
      dislikes: 9,
    },
    views: 891,
    userId: 56,
  },
  {
    id: 6,
    title: "Learning something new, one day at a time",
    body: "Progress rarely arrives as one dramatic breakthrough. More often, it comes from showing up consistently, making mistakes, and being willing to try again. Small improvements accumulate into meaningful change.",
    tags: ["learning", "motivation", "growth"],
    reactions: {
      likes: 104,
      dislikes: 7,
    },
    views: 376,
    userId: 112,
  },
];

export default function FeedGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Section Header */}
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

      {/* Post Grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
