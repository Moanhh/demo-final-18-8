import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

const RegistrationApp = lazy(() => import("../loginApp/Registration"));

const LoginApp = lazy(() => import("../loginApp/Login"))
/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const QuickCardApp = lazy(() => import("../views/QuickCard/qApp"));


const LoginForms = lazy(() => import("../loginApp/pages/LoginForm"));
const RegistrationForm = lazy(() => import("../loginApp/pages/RegistrationForm"));
const Login = lazy(() => import("../loginApp/Login"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/Starter", exact: true, element: <Starter /> },
      { path: "/About", exact: true, element: <About /> },
      { path: "/Alerts", exact: true, element: <Alerts /> },
      { path: "/QuickCard", exact: true, element: <QuickCardApp />}
    ],
  },
  {
    path: "/",
    element: <RegistrationApp />, 
    children:[
      { path:"/RegistrationForm", exact: true, element: <RegistrationForm />},
      
      { path:"/RegistrationApp", exact: true, element: <RegistrationApp />},
      
    ]
  },
  { 
    path:"/",
    element: <LoginApp />,
    children: [
      { path:"/LoginForm", exact: true, element: <LoginForms />},
      { path:"/LoginApp", exact: true, element: <LoginApp />}

    ]
  }
];

export default ThemeRoutes;
