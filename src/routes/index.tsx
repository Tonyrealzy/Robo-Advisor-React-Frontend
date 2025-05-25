import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Error404 from "../pages/Error404";
import SuspenseWrapper from "./SuspenseWrapper";
import ResetPassword from "../components/screens/ResetPassword";
import ChangePassword from "../components/screens/ChangePassword";
import ConfirmSignup from "../components/screens/ConfirmSignup";
const HomeOutlet = lazy(() => import("../layout/HomeOutlet"));
const AuthOutlet = lazy(() => import("../layout/AuthOutlet"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const Signup = lazy(() => import("../components/screens/Signup"));
const Login = lazy(() => import("../components/screens/Login"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeOutlet />,
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
        path: "about",
        element: (
          <SuspenseWrapper>
            <AboutUsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "faq",
        element: (
          <SuspenseWrapper>
            <FaqPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "contact",
        element: (
          <SuspenseWrapper>
            <ContactUsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "",
        element: (
          <SuspenseWrapper>
            <AuthOutlet />
          </SuspenseWrapper>
        ),
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "reset",
            element: <ResetPassword />,
          },
          {
            path: "password",
            element: <ChangePassword />,
          },
          {
            path: "confirm-signup",
            element: <ConfirmSignup />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
