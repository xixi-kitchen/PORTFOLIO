import Ttt from "./Ttt";
import Tcc from "./Tcc";
// import Splines from "./Splines";
// import Scene from "./Splinefibe";
// import Excali from "./Excali";
import "tailwindcss/tailwind.css";
import Blog from "./blog/Blog";
import Homepage from "./homepage/Homepage";
import Project from "./project/Project";
import Monomer from "./monomer/Monomer";
import Teamwork from "./teamwork/Teamwork";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex w-screen ">
        <div className="top-30 mx-auto basis-[1000px]">
          <nav className="mx-auto flex-row text-2xl">
            <Link to="/" className="ml-2">
              Homepage
            </Link>
            <Link to="/project" className="ml-2">
              Project
            </Link>
            <Link to="/monomer" className="ml-2">
              Monomer
            </Link>
            <Link to="/blog" className="ml-2">
              Blog
            </Link>
            <Link to="/teamwork" className="ml-2">
              Teamwork
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/monomer" element={<Monomer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/teamwork" element={<Teamwork />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
