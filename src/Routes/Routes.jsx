import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Category from "../Pages/Category";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Premium from "../Pages/Premium";
import Profile from "../Pages/Profile";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "courses",
        loader: () => fetch("https://edu-flash-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "course/:id",
        loader: ({ params }) => {
          return fetch(`https://edu-flash-server.vercel.app/course/${params.id}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/category/:catId",
        loader: ({ params }) => {
          return fetch(`https://edu-flash-server.vercel.app/category/${params.catId}`);
        },
        element: <Category></Category>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "premium",
        element: (
          <PrivetRoute>
            <Premium></Premium>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
