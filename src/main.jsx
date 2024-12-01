import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEnvelopePage from "./components/CreateEnvelope.jsx";
import createEnvelopeAction from "./action.js";
import SuccessPage from "./components/SuccessPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  { path: "/", element: <App /> },
  {
    path: "/envelope/create",
    element: <CreateEnvelopePage />,
    action: createEnvelopeAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "/envelope/create/success",
    element: <SuccessPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
