import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import BookShelf from "../Pages/BookShelf/BookShelf";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import AddBook from "../Pages/AddBook/AddBook"
import MyBook from "../Pages/MyBook/MyBook"
import Profile from "../Pages/Profile/Profile"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement :<Error/>,
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
      },
      {
        path: '/bookshelf',
        loader : () =>fetch(`http://localhost:3000/books`),
        Component : BookShelf
      },
      {
        path: '/addbook',
        element:<PrivateRoutes><AddBook></AddBook></PrivateRoutes>
      },
      {
        path: '/mybook',
        element:<PrivateRoutes><MyBook></MyBook></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);