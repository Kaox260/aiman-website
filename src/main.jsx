import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // Correction ici
import Homepage from "./pages/Homepage.jsx";
import Contactpage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Conceptpage from "./pages/Conceptpage.jsx";
import AboutPages from "./pages/AboutPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/contact",
    element: <Contactpage />
  },
  {
    path: "/projets",
    element: <ProjectsPage />
  },
  {
    path: "/concept",
    element: <Conceptpage />
  },
  {
    path: "/about",
    element: <AboutPages />
  },
  {
    path: "/404",
    element: <ErrorPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}