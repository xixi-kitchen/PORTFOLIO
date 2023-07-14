import React from "react";
// import Ttt from "./Ttt";
// import Tcc from "./Tcc";
// import Splines from "./Splines";
// import Scene from "./Splinefibe";
// import Excali from "./Excali";
import "tailwindcss/tailwind.css";
import RouterView from "./router/RouterView";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Link } from "react-router-dom";



function App() {
  return (
    <div className="flex w-screen ">
      <div className="top-30 mx-auto basis-[1000px]">
        <nav className=" inline-flex w-full flex-row flex-nowrap justify-between text-2xl">
          <Link to="/" className="ml-2">
            Homepage
          </Link>
          <div className="flex-row space-x-5">
            <Link to="/project" className="ml-2">
              Project
            </Link>
            <Link to="/monomer" className="ml-2">
              Monomer
            </Link>
            <Link to="/blog" className="ml-2">
              Blog
            </Link>
            {/* <Link to="/teamwork" className="ml-2">
              Teamwork
            </Link> */}
            <Link to="/aboutus" className="ml-2">
              Aboutus
            </Link>
          </div>
        </nav>
        <RouterView />
      </div>
    </div>
  );
}

export default App;
