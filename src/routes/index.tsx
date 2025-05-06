import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Error404 from "../pages/Error404";
import SuspenseWrapper from "./SuspenseWrapper";
const LandingPage = lazy(() => import("../pages/LandingPage"));

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <Error404 />,
  },
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <LandingPage />
      </SuspenseWrapper>
    ),
  },
]);
