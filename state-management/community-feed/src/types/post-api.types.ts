import type { Post, PostsCollection } from "./post.types";

export type GetPostResponse = {
  posts: PostsCollection;
  total: number;
  skip: number;
  limit: number;
};

export type AddPostRequest = Pick<Post, "title" | "userId"> &
  Partial<Pick<Post, "body" | "tags">>;

export type AddPostResponse = Post;

export type UpdatePostRequest = {
  id: Post["id"];
  body: Partial<Pick<Post, "title" | "body" | "tags">>;
};

export type UpdatePostResponse = Post;

export type DeletePostRequest = {
  id: Post["id"];
};

export type DeletePostResponse = Post & {
  isDeleted: boolean;
  deletedOn: string;
};