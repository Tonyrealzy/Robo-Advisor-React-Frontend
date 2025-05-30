import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Error404 from "../pages/Error404";
import SuspenseWrapper from "./SuspenseWrapper";
import LoggedInLayout from "../layout/LoggedInLayout";

const HomeOutlet = lazy(() => import("../layout/HomeOutlet"));
const AuthOutlet = lazy(() => import("../layout/AuthOutlet"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const Result = lazy(() => import("../components/screens/Result"));
const History = lazy(() => import("../components/screens/History"));
const DynamicForm = lazy(() => import("../components/screens/DynamicForm"));
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
    element: (
      <SuspenseWrapper>
        <HomeOutlet />
      </SuspenseWrapper>
    ),
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
            element: (
              <SuspenseWrapper>
                <Login />
              </SuspenseWrapper>
            ),
          },
          {
            path: "signup",
            element: (
              <SuspenseWrapper>
                <Signup />
              </SuspenseWrapper>
            ),
          },
          {
            path: "reset",
            element: (
              <SuspenseWrapper>
                <ResetPassword />
              </SuspenseWrapper>
            ),
          },
          {
            path: "password",
            element: (
              <SuspenseWrapper>
                <ChangePassword />
              </SuspenseWrapper>
            ),
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
      {
        path: "",
        element: (
          <SuspenseWrapper>
            <LoggedInLayout />
          </SuspenseWrapper>
        ),
        children: [
          {
            path: "dashboard",
            element: (
              <SuspenseWrapper>
                <HomePage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "forms",
            element: (
              <SuspenseWrapper>
                <DynamicForm />
              </SuspenseWrapper>
            ),
          },
          {
            path: "result",
            element: (
              <SuspenseWrapper>
                <Result />
              </SuspenseWrapper>
            ),
          },
          // {
          //   path: "history",
          //   element: (
          //     <SuspenseWrapper>
          //       <History />
          //     </SuspenseWrapper>
          //   ),
          // },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
