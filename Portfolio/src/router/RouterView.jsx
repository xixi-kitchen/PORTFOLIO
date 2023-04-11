import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useRoutes,
} from "react-router-dom";

import Homepage from "../homepage/Homepage";
import Project from "../project/Project";
import Monomer from "../monomer/Monomer";
import Blog from "../blog/Blog";
import Teamwork from "../teamwork/Teamwork";
import Aboutus from "../aboutus/Aboutus";
// import Bs from "../blog/Bs";

const RouterView = () => {
  const appRoutesElement = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/project",
      element: <Project />,
      children: [],
    },
    {
      path: "/monomer",
      element: <Monomer />,
      children: [],
    },
    {
      path: "/blog",
      element: <Blog />,
      children: [
        // {
        //   path: "/blog/bs",
        //   element: <Bs />,
        // },
      ],
    },

    {
      path: "/teamwork",
      element: <Teamwork />,
      children: [],
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
      children: [],
    },
  ]);
  return appRoutesElement;
};
export default RouterView;
