import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'courses',
            loader: ()=> fetch("http://localhost:5000/courses"),
            element: <Courses></Courses>
        },
        {
            path: "course/:id",
            loader: ({params}) => {
                return fetch(`http://localhost:5000/course/${params.id}`);
            },
            element: <CourseDetails></CourseDetails>
        },
        {
            path: 'login',
            element:<Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        }
    ]
}]) 