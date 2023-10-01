import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./MainLayout/Home";
import AppliedJobs from "./MainLayout/AppliedJobs";
import Blog from "./MainLayout/Blog";
import Banner from "./MainLayout/Banner";
import JobsList from "./MainLayout/JobsList";
import FeaturedJobs from "./MainLayout/FeaturedJobs";
import JobDetails from "./MainLayout/JobDetails";
import Register from "./authentications/Register";
import LogIn from "./authentications/LogIn";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Banner></Banner>,
          },
          {
            path: "/",
            element: <JobsList></JobsList>,
          },
          {
            path: "/",
            element: <FeaturedJobs></FeaturedJobs>,
          },
        ],
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

export default myCreatedRouter;
