import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./../index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./menu.jsx";
import Body from "./body.jsx";
import ItemRes from "./itemRes.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
