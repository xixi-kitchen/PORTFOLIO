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

import Abspace from "../project/Abspace";
import { Tour } from "../project/Tour";
import { General } from "../project/General";
import { Practice } from "../project/Practice";
import { Vectorscopedevice } from "../project/VectorscopeDevice";
import { Onesurfboard } from "../project/Onesurfboard";
import { Saintlancnce } from "../project/SaintLancnce";
import { MissCalender } from "../project/MissCalender";
import { MigicComb } from "../project/MigicComb";
import { TwoFaceplate } from "../project/TwoFaceplate";
import { EscortBoat } from "../project/EscortBoat";
import { EscortBoatplus } from "../project/EscortBoatplus";
import { Aerobic } from "../project/Aerobic";
import { NotLack } from "../project/NotLack";

const RouterView = () => {
  const appRoutesElement = useRoutes([
  
  //导航路由
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

    //project的内容路由
    //交互专辑的路由
    {
      path: "/Abspace",
      element: <Abspace />,
      children: [],
    },
    {
      path: "/Tour",
      element: <Tour />,
      children: [],
    },
    {
      path: "/General",
      element: <General />,
      children: [],
    },
    {
      path: "/Practice",
      element: <Practice />,
      children: [],
    },
    //工业设计内容的路由
    {
      path: "/Vector",
      element: <Vectorscopedevice />,
      children: [],
    },

    {
      path: "/One",
      element: <Onesurfboard />,
      children: [],
    },
    {
      path: "/Saint",
      element: <Saintlancnce />,
      children: [],
    },
    {
      path: "/Miss",
      element: <MissCalender />,
      children: [],
    },
    {
      path: "/Migiccomb",
      element: <MigicComb />,
      children: [],
    },
    {
      path: "/Twoface",
      element: <TwoFaceplate />,
      children: [],
    },
    {
      path: "/Escort",
      element: <EscortBoat />,
      children: [],
    },
    {
      path: "/Escortplus",
      element: <EscortBoatplus />,
      children: [],
    },
    {
      path: "/Aerobic",
      element: <Aerobic />,
      children: [],
    },
    {
      path: "/Notlack",
      element: <NotLack />,
      children: [],
    },
  ]);
  return appRoutesElement;
};
export default RouterView;
