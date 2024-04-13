import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import PrivateRoutes from "./PrivateRoutes";
import EstateDetails from "../pages/EstateDetails";
import UpdatePro from "../pages/UpdatePro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoutes>
            <EstateDetails></EstateDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update",
        element: (
          <PrivateRoutes>
            <UpdatePro></UpdatePro>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
