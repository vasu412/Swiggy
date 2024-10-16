import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./../index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./menu.jsx";
import Body from "./body.jsx";
import ItemRes from "./itemRes.jsx";
import Search from "./search.jsx";
import SearchDish from "./searchDish.jsx";
import { Provider } from "react-redux";
import { store } from "../APIs/store.js";
import Cart from "./cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "menu/:id",
        element: <Menu />,
      },

      {
        path: "food/:id",
        element: <ItemRes />,
      },
      {
        path: "food/:id/menu/:id",
        element: <Menu />,
      },
      {
        path: "search/",
        element: <Search />,
        children: [{ path: "search/:input", element: <SearchDish /> }],
      },
      { path: "search/search/:input/menu/:id", element: <Menu /> },
    ],
  },
  {
    path: "cart/",
    element: <Cart />,
  },
  {
    path: "menu/:id/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
