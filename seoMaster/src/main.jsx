import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Services from "./pages/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
