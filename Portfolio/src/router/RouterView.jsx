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
import { Innologo } from "../monomer/Innologo";
import { Hours } from "../monomer/Hours";
import { Typography } from "../monomer/Typography";
import { Wallpaper } from "../monomer/Wallpaper";
import { Fablabvi } from "../monomer/Fablabvi";
import { Cacup } from "../monomer/Cacup";
import { Endtables } from "../monomer/Endtables";
import {Bowlmats} from "../monomer/Bowlmats";
import {Countbuckets} from "../monomer/Countbuckets";
import { Cabinets } from "../monomer/Cabinets";
import {Jiaolong } from "../monomer/Jiaolong"
import {Magnetic } from "../monomer/Magnetic";
import {Propeller } from "../monomer/Propeller";
import {Reticule } from "../monomer/Reticule";
import {Reversecar} from "../monomer/Reversecar"
import {Rollin} from "../monomer/Rollin";
import {Sunwardred} from "../monomer/Sunwardred"
import {Willinsert} from "../monomer/Willinsert"


function RouterView() {
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
    //Monomer单体内容路由
    //平面内容路由
    {
      path: "/Innologo",
      element: <Innologo />,
      children: [],
    },
    {
      path: "/Hours",
      element: <Hours />,
      children: [],
    },
    {
      path: "/Typography",
      element: <Typography />,
      children: [],
    },
    {
      path: "/Wallpaper",
      element: <Wallpaper />,
      children: [],
    },
    {
      path: "/Fablabvi",
      element: <Fablabvi />,
      children: [],
    },
    //模型内容路由
    {
      path: "/Cacup",
      element: <Cacup />,
      children: [],
    },
    {
      path: "/Endtables",
      element: <Endtables />,
      children: [],
    },
    {
      path: "/Bowlmats",
      element: <Bowlmats />,
      children: [],
    },
    {
      path: "/Cabinets",
      element: <Cabinets />,
      children: [],
    },
    {
      path: "/Countbuckets",
      element: <Countbuckets />,
      children: [],
    },
    {
      path: "/Jiaolong",
      element: <Jiaolong />,
      children: [],
    },
    {
      path: "/Magnetic",
      element: <Magnetic />,
      children: [],
    },
    {
      path: "/Propeller",
      element: <Propeller />,
      children: [],
    },
    {
      path: "/Reticule",
      element: <Reticule />,
      children: [],
    },
    {
      path: "/Reversecar",
      element: <Reversecar />,
      children: [],
    },
    {
      path: "/Rollin",
      element: <Rollin />,
      children: [],
    },
    {
      path: "/Sunwardred",
      element: <Sunwardred />,
      children: [],
    },
    {
      path: "/Willinsert",
      element: <Willinsert />,
      children: [],
    },
  ]);
  return appRoutesElement;
}
export default RouterView;
