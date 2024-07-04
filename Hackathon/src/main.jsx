import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Accueil from "./components/Accueil.jsx";
import Offre from "./components/Offre.jsx";
import OffresDuMoment from "./components/OffresDuMoment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/OffreEmplois",
        element: <Offre />,
      },
      {
        path: "/offresDuMoment",
        element: <OffresDuMoment />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
