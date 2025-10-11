import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/signup',
        Component: SignUp
      }
    ]
  },
]);