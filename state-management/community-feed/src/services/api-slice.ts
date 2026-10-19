import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  GetPostResponse,
  AddPostRequest,
  AddPostResponse,
  UpdatePostRequest,
  UpdatePostResponse,
  DeletePostRequest,
  DeletePostResponse,
} from "@/types/post-api.types";

export const postApi = createApi({
  reducerPath: "postsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),

  tagTypes: ["Posts"],

  endpoints: (build) => ({
    getPosts: build.query<GetPostResponse, void>({
      query: () => ({
        url: "/posts",
        params: {
          limit: 10,
        },
      }),

      providesTags: ["Posts"],
    }),

    addPost: build.mutation<AddPostResponse, AddPostRequest>({
      query: (post) => ({
        url: "/posts/add",
        method: "POST",
        body: post,
      }),

      invalidatesTags: ["Posts"],
    }),

    updatePost: build.mutation<UpdatePostResponse, UpdatePostRequest>({
      query: ({ id, body }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body,
      }),

      invalidatesTags: ["Posts"],
    }),

    deletePost: build.mutation<DeletePostResponse, DeletePostRequest>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Posts"],
    }),
  }),
});
