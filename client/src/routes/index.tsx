import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SuspenseLoader from "../components/SuspenseLoader";
import BaseLayout from "../components/BaseLayout";
import SidebarLayout from "../components/SidebarLayout";
import React from "react";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

//Pages
const Landing = Loader(lazy(() => import("../pages/landing")));
const About = Loader(lazy(() => import("../pages/aboutus")));
const Faq = Loader(lazy(() => import("../pages/faq")));
const ContactUs = Loader(lazy(() => import("../pages/contactus")));
const Login = Loader(lazy(() => import("../pages/login")));
const Register = Loader(lazy(() => import("../pages/register")));

//Admin Pages
const AdminDashboard = Loader(lazy(() => import("../pages/admin/dashboard")));
const ManageResult = Loader(lazy(() => import("../pages/admin/ManageResult")));
const PrintResult = Loader(
  lazy(() => import("../pages/admin/views/PrintResult"))
);
const ManageTest = Loader(lazy(() => import("../pages/admin/ManageTest")));

//Component

const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "dashboard",
        element: <Navigate to="/admin/dashboard" replace />,
      },
    ],
  },
  {
    path: "admin",
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        // element: <SidebarLayout />,
        children: [
          {
            path: "",
            element: <AdminDashboard />,
          },
          {
            path: "result",
            element: <ManageResult />,
          },
          {
            path: "print",
            element: <PrintResult />,
          },
          {
            path: "test",
            element: <ManageTest />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
