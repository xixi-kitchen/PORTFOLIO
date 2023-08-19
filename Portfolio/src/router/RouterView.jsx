import React, { Suspense, lazy } from "react";
// import {
//   BrowserRouter,
//   HashRouter as Router,
//   Route,
//   Link,
//   Routes,
//   useRoutes,
// } from "react-router-dom";

import * as ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

//const ManageAll =lazy(()=> import("../pages/Conf/ManageAll"))

import Homepage from "../homepage/Homepage";
//const Homepage = lazy(() => import("../homepage/Homepage"));
//import Homepage_text from "../homepage/Homepage_text";
//import Project from "../project/Project";
const Project = lazy(() => import("../project/Project"));
const Monomer = lazy(() => import("../monomer/Monomer"));
const Blog = lazy(() => import("../blog/Blog"));
const Teamwork = lazy(() => import("../teamwork/Teamwork"));
const Aboutus = lazy(() => import("../aboutus/Aboutus"));

// import Monomer from "../monomer/Monomer";
// import Blog from "../blog/Blog";
// import Teamwork from "../teamwork/Teamwork";
// import Aboutus from "../aboutus/Aboutus";
// import Bs from "../blog/Bs";

//import Abspace from "../project/Abspace";
const Abspace = lazy(() => import("../project/Abspace"));
//import { Tour } from "../project/Tour";
const Tour = lazy(() => import("../project/Tour"));
//从这开始该Susp
//import { General } from "../project/General";
const General = lazy(() => import("../project/General"));
//import { Practice } from "../project/Practice";
const Practice = lazy(() => import("../project/Practice"));

//import { Vectorscopedevice } from "../project/VectorscopeDevice";
const Vectorscopedevice = lazy(() => import("../project/VectorscopeDevice"));
//import { Onesurfboard } from "../project/Onesurfboard";
const Onesurfboard = lazy(() => import("../project/Onesurfboard"));
//import { Saintlancnce } from "../project/SaintLancnce";
const Saintlancnce = lazy(() => import("../project/SaintLancnce"));
//import { MissCalender } from "../project/MissCalender";
const MissCalender = lazy(() => import("../project/MissCalender"));
//import { MigicComb } from "../project/MigicComb";
const MigicComb = lazy(() => import("../project/MigicComb"));
//import { TwoFaceplate } from "../project/TwoFaceplate";
const TwoFaceplate = lazy(() => import("../project/TwoFaceplate"));
//import { EscortBoat } from "../project/EscortBoat";
const EscortBoat = lazy(() => import("../project/EscortBoat"));
//import { EscortBoatplus } from "../project/EscortBoatplus";
const EscortBoatplus = lazy(() => import("../project/EscortBoatplus"));
//import { Aerobic } from "../project/Aerobic";
const Aerobic = lazy(() => import("../project/Aerobic"));
//import { NotLack } from "../project/NotLack";
const NotLack = lazy(() => import("../project/NotLack"));

//monomer的路由
//import { Innologo } from "../monomer/Innologo";
const Innologo = lazy(() => import("../monomer/Innologo"));
//import { Hours } from "../monomer/Hours";
const Hours = lazy(() => import("../monomer/Hours"));
//import { Typography } from "../monomer/Typography";
const Typography = lazy(() => import("../monomer/Typography"));
//import { Wallpaper } from "../monomer/Wallpaper";
const Wallpaper = lazy(() => import("../monomer/Wallpaper"));
//import { Fablabvi } from "../monomer/Fablabvi";
const Fablabvi = lazy(() => import("../monomer/Fablabvi"));
//import { Cacup } from "../monomer/Cacup";
const Cacup = lazy(() => import("../monomer/Cacup"));
//import { Endtables } from "../monomer/Endtables";
const Endtables = lazy(() => import("../monomer/Endtables"));
//import { Bowlmats } from "../monomer/Bowlmats";
const Bowlmats = lazy(() => import("../monomer/Bowlmats"));
//import { Countbuckets } from "../monomer/Countbuckets";
const Countbuckets = lazy(() => import("../monomer/Countbuckets"));
//import { Cabinets } from "../monomer/Cabinets";
const Cabinets = lazy(() => import("../monomer/Cabinets"));
//import { Jiaolong } from "../monomer/Jiaolong";
const Jiaolong = lazy(() => import("../monomer/Jiaolong"));
//import { Magnetic } from "../monomer/Magnetic";
const Magnetic = lazy(() => import("../monomer/Magnetic"));
//import { Propeller } from "../monomer/Propeller";
const Propeller = lazy(() => import("../monomer/Propeller"));
//import { Reticule } from "../monomer/Reticule";
const Reticule = lazy(() => import("../monomer/Reticule"));
//import { Reversecar } from "../monomer/Reversecar";
const Reversecar = lazy(() => import("../monomer/Reversecar"));
//import { Rollin } from "../monomer/Rollin";
const Rollin = lazy(() => import("../monomer/Rollin"));
//import { Sunwardred } from "../monomer/Sunwardred";
const Sunwardred = lazy(() => import("../monomer/Sunwardred"));
//import { Willinsert } from "../monomer/Willinsert";
const Willinsert = lazy(() => import("../monomer/Willinsert"));

function RouterView() {
  const appRoutesElement = createHashRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [],
    },
    {
      path: "/project",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Project />
        </Suspense>
      ),
      children: [],
    },

    {
      path: "monomer",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Monomer />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "blog",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Blog />
        </Suspense>
      ),
      children: [
        // {
        //   path: "/blog/bs",
        //   element: <Bs />,
        // },
      ],
    },

    {
      path: "teamwork",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Teamwork />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "aboutus",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Aboutus />
        </Suspense>
      ),
      children: [],
    },

    //project的内容路由
    //交互专辑的路由
    {
      path: "abspace",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Abspace />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "tour",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Tour />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "general",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <General />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "practice",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Practice />
        </Suspense>
      ),
      children: [],
    },
    //工业设计内容的路由
    {
      path: "vector",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Vectorscopedevice />
        </Suspense>
      ),
      children: [],
    },

    {
      path: "one",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Onesurfboard />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "saint",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Saintlancnce />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "miss",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <MissCalender />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "migiccomb",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <MigicComb />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "twoface",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <TwoFaceplate />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "escort",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <EscortBoat />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "escortplus",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <EscortBoatplus />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "aerobic",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Aerobic />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "notlack",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <NotLack />
        </Suspense>
      ),
      children: [],
    },
    //Monomer单体内容路由
    //平面内容路由
    {
      path: "innologo",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Innologo />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "hours",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Hours />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "typography",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Typography />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "wallpaper",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Wallpaper />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "fablabvi",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Fablabvi />
        </Suspense>
      ),
      children: [],
    },
    //模型内容路由
    {
      path: "cacup",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Cacup />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "endtables",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Endtables />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "bowlmats",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Bowlmats />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "cabinets",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Cabinets />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "countbuckets",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Countbuckets />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "jiaolong",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Jiaolong />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "magnetic",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Magnetic />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "propeller",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Propeller />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "reticule",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Reticule />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "reversecar",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Reversecar />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "rollin",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Rollin />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "sunwardred",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Sunwardred />
        </Suspense>
      ),
      children: [],
    },
    {
      path: "willinsert",
      element: (
        <Suspense fallback={<div style={{ display: "none" }}>lodding</div>}>
          <Willinsert />
        </Suspense>
      ),
      children: [],
    },
    // {
    //   path: "/",
    //   element: <Homepage_text />,
    // },
  ]);
  return appRoutesElement;
}
export default RouterView;

// function RouterView() {
//   const appRoutesElement = useRoutes([
//     //导航路由
//   ]);
//   return appRoutesElement;
// }