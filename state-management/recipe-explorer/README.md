# Recipe Explorer

A recipe discovery application built with React and TypeScript. Explore recipes, search by name, filter by cuisine, view recipe details, and manage favourite recipes using Redux Toolkit.

## Features

- **Browse Recipes** — Fetch and display recipes from the DummyJSON Recipes API.
- **Search Recipes** — Search for recipes by name.
- **Filter by Cuisine** — Filter recipes by cuisine using dynamically generated options.
- **Combined Search and Filtering** — Search for recipes while a cuisine filter is active.
- **Recipe Details** — View recipe information, including ingredients, instructions, preparation time, cooking time, servings, and ratings.
- **Manage Favourites** — Add recipes to or remove them from your favourites.
- **Favourites Panel** — View saved recipes in a side panel and remove favourites directly from it.
- **Loading and Error States** — Display loading indicators and error messages when fetching recipes.
- **Retry Requests** — Retry failed API requests.
- **Empty States** — Display appropriate messages when no recipes match the selected criteria or when no favourites have been saved.

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

### State Management
- React `useState` — Manage local UI state, search queries, cuisine selection, and recipe selection.
- React `useEffect` — Fetch recipes from the API.
- Redux Toolkit — Manage favourite recipes.
- React Redux — Connect React components to the Redux store.

### API
- [DummyJSON Recipes API](https://dummyjson.com/recipes?limit=15)

## Key Concepts Practiced

- Defining TypeScript types for API responses and application data.
- Fetching API data with `fetch` and `useEffect`.
- Managing loading, error, and retry states.
- Using `AbortController` to cancel requests when necessary.
- Passing data and event handlers through component props.
- Managing local state with React hooks.
- Creating Redux slices and actions with Redux Toolkit.
- Configuring a Redux store with `configureStore`.
- Using `useSelector` and `useDispatch`.
- Preventing duplicate favourites.
- Deriving displayed recipes from search queries and cuisine filters.
- Separating local UI state from shared application state.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd state-management/recipe-explorer
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

> These commands assume the project uses npm and defines a `dev` script in `package.json`.

## API

Recipe data is retrieved from the DummyJSON Recipes API:

```text
https://dummyjson.com/recipes?limit=15
```

The application uses recipe information such as:

- ID
- Name
- Image
- Cuisine
- Rating
- Preparation and cooking times
- Ingredients
- Instructions

## Project Structure

The application separates its UI components, recipe types, Redux store, and recipe utility functions.

```text
recipe-explorer/
└── src/
    ├── components/
    │   ├── layout/
    │   │   └── Header.tsx
    │   ├── recipes/
    │   │   ├── RecipeCard.tsx
    │   │   ├── RecipeDetails.tsx
    │   │   ├── RecipeFilters.tsx
    │   │   ├── RecipeGrid.tsx
    │   │   └── RecipeSearch.tsx
    │   └── ui/
    ├── store/
    │   ├── favoriteSlice.ts
    │   └── store.ts
    ├── types/
    │   └── recipe.ts
    ├── utils/
    │   └── recipe-utils.ts
    ├── App.tsx
    └── main.tsx
```

## Purpose

This project serves as a practical exercise in React, TypeScript, and Redux Toolkit. It focuses on fetching and displaying API data, managing shared state, composing components, and deriving displayed data from multiple filters.