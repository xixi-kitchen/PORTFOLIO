import React from "react";

import "tailwindcss/tailwind.css";
import RouterView from "./router/RouterView";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className=" relative top-0 containter w-[1440px] mx-auto">
      <nav className=" flex  flex-row justify-between w-full  h-12 text-xl font-bold no-underline bg-zinc-1000 items-center sticky">
        <Link to="/" className="mx-8 no-underline">
          Homepage
        </Link>
        <div>
          <Link to="/project" className="mx-8 no-underline">
            Project
          </Link>
          <Link to="/monomer" className="mx-8 no-underline">
            Monomer
          </Link>
          <Link to="/blog" className="mx-8 no-underline">
            Blog
          </Link>
          {/* <Link to="/teamwork" className="">
              Teamwork
            </Link> */}
          <Link to="/aboutus" className="mx-8 no-underline">
            Aboutus
          </Link>
        </div>
      </nav>
      <RouterView />
    </div>
  );
}

export default App;
