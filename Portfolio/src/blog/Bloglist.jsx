import * as React from "react";
import tubiao from ".././assets/Vector.svg";

export default function Bloglist() {
  return (
    <div className="max-w-fall flex flex-col items-center justify-center ">
      <div className="w-fall flex max-w-full flex-row items-start justify-start self-stretch rounded-[5px] bg-black p-[10px] text-left text-[96px] tracking-[0%] text-white dark:bg-white dark:text-black">
        idea
      </div>
      <h1>hffffff</h1>
      <h2>hffffff</h2>
      <h3>hffffff</h3>
      <h4>jhuhhi</h4>

      <div className="w-fall flex max-w-full flex-col items-center justify-start self-stretch rounded-[5px] border border-solid border-black px-[6px] pb-[8px] pt-[20px] dark:border-white">
        <div className="w-fall flex max-w-full flex-row items-center justify-between self-stretch rounded-[5px] border border-solid border-black p-[10px] dark:border-white">
          <div className="max-w-[176px] text-left text-[16px] tracking-[0%] text-[rgba(30,30,30,1)] dark:text-white">
            设计自己的一套标识系统
          </div>
          <img src={tubiao} alt="some_text"></img>
        </div>
      </div>
    </div>
  );
}
