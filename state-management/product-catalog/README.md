# Product Catalog

A product catalog application built with React and TypeScript, featuring product browsing and an interactive shopping cart. This project focuses on practising React state management, component composition, and sharing state across components.

## Features

- **Product Listing** — Fetch and display products from the DummyJSON API.
- **Product Grid** — Display product information, including titles, descriptions, prices, and thumbnails.
- **Shopping Cart** — Add products to the cart and manage selected items.
- **Quantity Management** — Increase or decrease the quantity of individual cart items.
- **Cart Controls** — Remove individual products or clear the entire cart.
- **Cart Summary** — Calculate the number of unique products, total item quantity, and total price.
- **Shared State** — Keep product and cart interactions synchronised using React Context.
- **Responsive Layout** — Arrange the product catalog and shopping cart for different screen sizes.
- **Theme Support** — Use a theme provider for application-wide appearance settings.

## Tech Stack

- **React** — Component-based user interface development.
- **TypeScript** — Static typing for components, product data, cart state, and actions.
- **Vite** — Development server and production build tooling.
- **Tailwind CSS** — Utility-first styling.
- **shadcn/ui** — Reusable UI components.
- **Lucide React** — Icons.
- **DummyJSON** — Product data API.

## React Concepts Practised

- **State Management** — Managing component state with `useState`.
- **Side Effects** — Fetching product data with `useEffect`.
- **Reducer Pattern** — Managing cart operations with `useReducer`.
- **Context API** — Sharing cart state across components without prop drilling.
- **Custom Hooks** — Encapsulating context access in a reusable `useCart` hook.
- **TypeScript** — Defining product types, cart state, and discriminated union action types.
- **Component Composition** — Separating the product grid, product cards, and cart sidebar into reusable components.
- **Utility Functions** — Extracting cart calculations and operations into separate functions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a recent LTS version is recommended).
- npm, included with Node.js.
- Git.

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd react-workshop/state-management/product-catalog
```

Install the dependencies:

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
product-catalog/
├── public/
├── src/
│   ├── components/
│   │   ├── cart/
│   │   │   └── CartSidebar.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductGrid.tsx
│   │   └── ui/
│   ├── context/
│   │   ├── cart-context.ts
│   │   └── cart-provider.tsx
│   ├── hooks/
│   │   └── use-cart.ts
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── reducer/
│   │   └── cart-reducer.ts
│   ├── types/
│   │   ├── cart.ts
│   │   └── products.ts
│   ├── utils/
│   │   └── cart.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Cart State Architecture

The shopping cart uses React's reducer and context patterns to manage shared state.

```text
                    CartProvider
                         |
                    useReducer
                         |
                    CartContext
                         |
                      useCart
                     /       \
              ProductCard   CartSidebar
                   |             |
               Add product   Cart controls
                   |             |
                   +------dispatch
```

### How It Works

1. **CartProvider** initialises the cart state with `useReducer` and makes the state and dispatch function available to descendant components.
2. **CartContext** provides access to the shared cart state and dispatch function.
3. **useCart** is a custom hook that allows components to access the context.
4. **ProductCard** dispatches an action when a product is added to the cart.
5. **CartSidebar** displays the current cart contents and dispatches actions to update quantities, remove products, or clear the cart.
6. **cart-reducer.ts** determines how each action changes the cart state.
7. **cart.ts** contains utility functions for locating cart items and calculating quantities and totals.

### Cart Actions

| Action | Description |
|---|---|
| `ADD_PRODUCT` | Adds a product or increases its quantity if it already exists in the cart. |
| `INCREASE_QUANTITY` | Increases the quantity of an existing cart item. |
| `DECREASE_QUANTITY` | Decreases the quantity of an existing cart item. |
| `REMOVE_PRODUCT` | Removes a product from the cart. |
| `CLEAR_CART` | Removes all items from the cart. |

## Product Data

Product information is retrieved from the [DummyJSON Products API](https://dummyjson.com/docs/products).

The application fetches product data when the component mounts and displays the returned products in the catalog.

An `AbortController` is used to cancel the fetch request when the effect is cleaned up.

## Future Improvements

- Add product search and category filtering.
- Implement sorting by price, rating, or title.
- Add product detail pages.
- Persist cart state across page reloads.
- Add loading, empty, and error states for product fetching.
- Write unit tests for the cart reducer and utility functions.

## License

This project was created for learning and practice. Add a license if you intend to distribute it for reuse.