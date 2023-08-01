import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Services from "./pages/Services/Services.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import About from "./pages/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
