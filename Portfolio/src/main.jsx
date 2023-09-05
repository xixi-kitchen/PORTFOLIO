import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, HashRouter, createHashRouter } from "react-router-dom";

import "tailwindcss/tailwind.css";
import RouterView from "./router/RouterView";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Homepage from "./homepage/Homepage";
//const Homepage = lazy(() => import("./homepage/Homepage"));
//import Homepage_text from "../homepage/Homepage_text";
//import Project from "../project/Project";
const Project = lazy(() => import("./project/Project"));
const Monomer = lazy(() => import("./monomer/Monomer"));
const Blog = lazy(() => import("./blog/Blog"));
const Teamwork = lazy(() => import("./teamwork/Teamwork"));
const Aboutus = lazy(() => import("./aboutus/Aboutus"));

const Abspace = lazy(() => import("./project/Abspace"));

const Tour = lazy(() => import("./project/Tour"));
//从这开始该Susp
//import { General } from "../project/General";
const General = lazy(() => import("./project/General"));
//import { Practice } from "./project/Practice";
const Practice = lazy(() => import("./project/Practice"));

//import { Vectorscopedevice } from "./project/VectorscopeDevice";
const Vectorscopedevice = lazy(() => import("./project/VectorscopeDevice"));
//import { Onesurfboard } from "./project/Onesurfboard";
const Onesurfboard = lazy(() => import("./project/Onesurfboard"));
//import { Saintlancnce } from "./project/SaintLancnce";
const Saintlancnce = lazy(() => import("./project/SaintLancnce"));
//import { MissCalender } from "./project/MissCalender";
const MissCalender = lazy(() => import("./project/MissCalender"));
//import { MigicComb } from "./project/MigicComb";
const MigicComb = lazy(() => import("./project/MigicComb"));
//import { TwoFaceplate } from "./project/TwoFaceplate";
const TwoFaceplate = lazy(() => import("./project/TwoFaceplate"));
//import { EscortBoat } from "./project/EscortBoat";
const EscortBoat = lazy(() => import("./project/EscortBoat"));
//import { EscortBoatplus } from "./project/EscortBoatplus";
const EscortBoatplus = lazy(() => import("./project/EscortBoatplus"));
//import { Aerobic } from "./project/Aerobic";
const Aerobic = lazy(() => import("./project/Aerobic"));
//import { NotLack } from "./project/NotLack";
const NotLack = lazy(() => import("./project/NotLack"));

//monomer的路由
//import { Innologo } from "./monomer/Innologo";
const Innologo = lazy(() => import("./monomer/Innologo"));
//import { Hours } from "./monomer/Hours";
const Hours = lazy(() => import("./monomer/Hours"));
//import { Typography } from "./monomer/Typography";
const Typography = lazy(() => import("./monomer/Typography"));
//import { Wallpaper } from "./monomer/Wallpaper";
const Wallpaper = lazy(() => import("./monomer/Wallpaper"));
//import { Fablabvi } from "./monomer/Fablabvi";
const Fablabvi = lazy(() => import("./monomer/Fablabvi"));
//import { Cacup } from "./monomer/Cacup";
const Cacup = lazy(() => import("./monomer/Cacup"));
//import { Endtables } from "./monomer/Endtables";
const Endtables = lazy(() => import("./monomer/Endtables"));
//import { Bowlmats } from "./monomer/Bowlmats";
const Bowlmats = lazy(() => import("./monomer/Bowlmats"));
//import { Countbuckets } from "./monomer/Countbuckets";
const Countbuckets = lazy(() => import("./monomer/Countbuckets"));
//import { Cabinets } from "./monomer/Cabinets";
const Cabinets = lazy(() => import("./monomer/Cabinets"));
//import { Jiaolong } from "./monomer/Jiaolong";
const Jiaolong = lazy(() => import("./monomer/Jiaolong"));
//import { Magnetic } from "./monomer/Magnetic";
const Magnetic = lazy(() => import("./monomer/Magnetic"));
//import { Propeller } from "./monomer/Propeller";
const Propeller = lazy(() => import("./monomer/Propeller"));
//import { Reticule } from "./monomer/Reticule";
const Reticule = lazy(() => import("./monomer/Reticule"));
//import { Reversecar } from "./monomer/Reversecar";
const Reversecar = lazy(() => import("./monomer/Reversecar"));
//import { Rollin } from "./monomer/Rollin";
const Rollin = lazy(() => import("./monomer/Rollin"));
//import { Sunwardred } from "./monomer/Sunwardred";
const Sunwardred = lazy(() => import("./monomer/Sunwardred"));
//import { Willinsert } from "./monomer/Willinsert";
const Willinsert = lazy(() => import("./monomer/Willinsert"));

const appRoutesElement = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [],
  },
  {
    path: "project",
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div>
      <nav className=" fixed  z-10 flex h-12  w-full flex-row items-center justify-between bg-indigo-50 text-xl font-bold no-underline ">
        <Link to="/" className="mx-8 no-underline hover:text-[#8158fc]">
          Homepage
        </Link>
        <div>
          <Link
            to="/project"
            className="mx-8 no-underline hover:text-[#8158fc]"
          >
            Project
          </Link>
          <Link
            to="/monomer"
            className="mx-8 no-underline hover:text-[#8158fc]"
          >
            Monomer
          </Link>
          <Link to="/blog" className="mx-8 no-underline hover:text-[#8158fc]">
            Blog
          </Link>
           <Link to="/teamwork" className="">
              Teamwork
            </Link> 
          <Link
            to="/aboutus"
            className="mx-8 no-underline hover:text-[#8158fc]"
          >
            Aboutus
          </Link>
        </div>
      </nav>
      <div className=" containter scrollbar relative top-[48px] mx-auto flex w-[1440px]  flex-col items-center">
        <RouterProvider router={appRoutesElement} />
      </div>
    </div> */}
    <HashRouter>
      <nav className=" fixed  z-20 flex h-12  w-full flex-row items-center justify-between bg-indigo-50 text-xl font-bold no-underline ">
        <Link
          to="/"
          reloadDocument
          className="mx-8 text-blue-600 no-underline flex flex-row gap-2 place-items-center hover:text-[#8158fc]"
        ><img className="h-8 w-8" src="system-outline-45-category.gif"></img>
          Human Design Studio
        </Link>
        <div>
          <Link
            to="/project"
            reloadDocument
            className="mx-8 text-blue-600 no-underline hover:text-[#8158fc]"
          >
            Project
          </Link>
          <Link
            to="/monomer"
            reloadDocument
            className="mx-8 text-blue-600 no-underline hover:text-[#8158fc]"
          >
            Monomer
          </Link>
          <Link
            to="/blog"
            reloadDocument
            className="mx-8 text-blue-600 no-underline hover:text-[#8158fc]"
          >
            Blog
          </Link>
          {/* <Link to="/teamwork" reloadDocument className="">
            Teamwork
          </Link> */}
          <Link
            to="/aboutus"
            reloadDocument
            className="mx-8 text-blue-600 no-underline hover:text-[#8158fc]"
          >
            Aboutus
          </Link>
        </div>
      </nav>
    </HashRouter>
    <div className=" containter  absolute top-[48px] mx-auto flex w-screen  flex-col items-center">
      <RouterProvider router={appRoutesElement} />
    </div>
  </React.StrictMode>
);
