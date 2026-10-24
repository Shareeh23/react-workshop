# Community Feed

A React and TypeScript application for exploring community posts and practicing CRUD operations with Redux Toolkit Query (RTK Query).

The application fetches posts from the DummyJSON API and provides interfaces for creating, editing, and deleting posts. It demonstrates API integration, mutation handling, cache invalidation, and loading and error states.

## Features

- **Fetch Posts** — Retrieve and display community posts from the DummyJSON API.
- **Create Posts** — Create posts with a title, content, and tags.
- **Edit Posts** — Update a post's title, content, and tags.
- **Delete Posts** — Trigger deletion requests for individual posts.
- **Loading States** — Display loading indicators during initial requests and mutations.
- **Error Handling** — Display error messages and provide a retry option when fetching posts fails.
- **Cache Invalidation** — Automatically refetch posts when mutations invalidate the `Posts` cache tag.
- **Revalidation Feedback** — Display an indicator when cached posts are being refetched.
- **Responsive UI** — Use Tailwind CSS and shadcn/ui components to build the interface.

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- RTK Query
- Tailwind CSS
- shadcn/ui
- Lucide React
- Vite
- DummyJSON API

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd react-workshop/state-management/community-feed
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Project Structure

```text
src/
├── components/
│   ├── feedback/
│   │   ├── ErrorState.tsx
│   │   └── Spinner.tsx
│   ├── posts/
│   │   ├── FeedGrid.tsx
│   │   ├── FeedHeader.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostCreateDialog.tsx
│   │   └── PostEditDialog.tsx
│   └── ui/
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── field.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── services/
│   └── api-slice.ts
├── types/
│   ├── post-api.types.ts
│   └── post.types.ts
├── store/
│   └── store.ts
├── index.css
└── main.tsx
```

*The structure above highlights the main application components. Other configuration and supporting files are omitted.*

## API Integration

The application uses the DummyJSON API:

`https://dummyjson.com`

The API slice defines the following endpoints:

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Fetch posts | GET | `/posts` |
| Create a post | POST | `/posts/add` |
| Update a post | PUT | `/posts/:id` |
| Delete a post | DELETE | `/posts/:id` |

The posts query requests a limited collection of posts.

### RTK Query

The API slice uses `createApi` and `fetchBaseQuery` to define endpoints and generate React hooks.

The application uses the following hooks:

- `useGetPostsQuery`
- `useAddPostMutation`
- `useUpdatePostMutation`
- `useDeletePostMutation`

The Redux store registers the API reducer and middleware, enabling RTK Query to manage request state and cached responses.

### Cache Invalidation and Revalidation

The API slice uses a `Posts` cache tag.

- The posts query provides the `Posts` tag.
- Create, update, and delete mutations invalidate the `Posts` tag.
- When an active query is affected by invalidation, RTK Query refetches the data.
- The interface uses `isLoading` for the initial loading state and `isFetching` to indicate ongoing requests, including background refetching.

This demonstrates how RTK Query keeps cached server data synchronized with mutation activity.

## Important Note About DummyJSON

DummyJSON simulates create, update, and delete operations but does not permanently persist these changes on the server.

Consequently:

- **Create:** The API returns a simulated creation response, but the new post is not permanently stored.
- **Update:** The API returns an updated representation, but the original server data remains unchanged.
- **Delete:** The API returns a deletion response, but the original post remains available on subsequent requests.

The application logs mutation responses to the browser console so that the returned objects can be inspected.

For example, the deletion response includes properties such as `isDeleted` and `deletedOn`.

Because the server data remains unchanged, a subsequent refetch can return the original posts. This is expected behavior from the API rather than a failure of RTK Query's cache invalidation.

## Learning Objectives

This project provides practical experience with:

- Integrating REST APIs into React applications.
- Managing server state with Redux Toolkit Query.
- Defining API request and response types with TypeScript.
- Using generated query and mutation hooks.
- Handling asynchronous requests and mutation errors.
- Implementing loading and error states.
- Invalidating cached data after mutations.
- Understanding cache revalidation and automatic refetching.
- Building reusable components with React.
- Using shadcn/ui components and Tailwind CSS.

## License

This project was created for learning and practice purposes.