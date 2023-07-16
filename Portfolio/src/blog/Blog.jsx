import React from "react";
import Bloglist from "./Bloglist";

const Blog = () => {
  return (
    <div className="dark:bg-gray-900">
      <h1 className="bg-green-400 text-3xl font-bold underline">
        Hello world!
      </h1>
      <Bloglist />
    </div>
  );
};

export default Blog;
