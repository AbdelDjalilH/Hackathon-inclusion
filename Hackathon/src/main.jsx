import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Accueil from "./components/Accueil.jsx";
import Offre from "./components/Offre.jsx";
import OffresDuMoment from "./components/OffresDuMoment.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Connecter from "./components/Connecter.jsx";

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
      {
        path: "/nousContacter",
        element: <ContactUs />,
      },
      {
        path: "/connecter",
        element: <Connecter />,
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
