import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/universe.css";
import "./styles/stars.css";
import "./styles/planets.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);