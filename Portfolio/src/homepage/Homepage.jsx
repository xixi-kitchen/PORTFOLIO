import React from "react";
import Tcc from "../Tcc";
import Ttt from "../Ttt";

const Homepage = () => {
  return (
    <div>
      <Ttt />
      <Tcc />
      <h1 className="bg-yellow-900 text-3xl font-bold text-yellow-200 underline">
        Hello world!
      </h1>
    </div>
  );
};

export default Homepage;
