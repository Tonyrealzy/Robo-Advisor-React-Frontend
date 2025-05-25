import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Error404 from "../pages/Error404";
import SuspenseWrapper from "./SuspenseWrapper";
const HomeOutlet = lazy(() => import("../layout/HomeOutlet"));
const AuthOutlet = lazy(() => import("../layout/AuthOutlet"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const Signup = lazy(() => import("../components/screens/Signup"));
const Login = lazy(() => import("../components/screens/Login"));
const ResetPassword = lazy(() => import("../components/screens/ResetPassword"));
const ChangePassword = lazy(
  () => import("../components/screens/ChangePassword")
);
const ConfirmSignupLink = lazy(
  () => import("../components/screens/ConfirmSignupLink")
);
const ResetPasswordLink = lazy(
  () => import("../components/screens/ResetPasswordLink")
);

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
        ],
      },
      {
        path: "confirm-signup",
        element: (
          <SuspenseWrapper>
            <ConfirmSignupLink />
          </SuspenseWrapper>
        ),
      },
      {
        path: "reset-password",
        element: (
          <SuspenseWrapper>
            <ResetPasswordLink />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
