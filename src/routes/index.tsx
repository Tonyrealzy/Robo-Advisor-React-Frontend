import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Error404 from "../pages/Error404";
import SuspenseWrapper from "./SuspenseWrapper";
import LoginPage from "../pages/LoginPage";
const LandingPage = lazy(() => import("../pages/LandingPage"));
const NotLoggedInOutlet = lazy(() => import("../layout/NotLoggedInOutlet"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NotLoggedInOutlet />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <LandingPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/about",
        element: (
          <SuspenseWrapper>
            <AboutUsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/faq",
        element: (
          <SuspenseWrapper>
            <FaqPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/contact",
        element: (
          <SuspenseWrapper>
            <ContactUsPage />
          </SuspenseWrapper>
        ),
      },
      // {
      //   path: "/login",
      //   element: (
      //     <SuspenseWrapper>
      //       <LoginPage />
      //     </SuspenseWrapper>
      //   ),
      // },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);
