import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";
import "./app/layout/styles.css";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {" "}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
