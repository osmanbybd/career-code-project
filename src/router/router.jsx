import {
  createBrowserRouter,
} from "react-router";
import MainLaout from "../pages/Layout/MainLaout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRaout";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/myApplication/MyApplication";
import AddJob from "../pages/addhJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import VewApplication from "../pages/MyPostedJobs/VewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLaout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: 'register',
            Component: Register
        },
        {
            path :'signIn',
            Component: SignIn
        },
        {
          path: 'jobs/:id',
          Component: JobDetails,
          loader: ({params})=> fetch(`https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app/jobs/${params.id}`)
        },
        {
          path: 'jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: 'myApplication',
          element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path: '/addJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'myPostedJobs',
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute> 
        },
        {
          path:'application/:id',
          element: <PrivateRoute><VewApplication></VewApplication></PrivateRoute>,
          loader:({params})=> fetch(`https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app/applications/job/${params.id}`)
        },
        
    ]
  },
]);

export default router;