import * as React from "react";
import tubiao from ".././assets/Vector.svg";
import tubiaod from ".././assets/Vector-d.svg";


function liststyle(params, tubiao) {
  return (
    <div className="w-fall flex max-w-full flex-row items-center justify-between self-stretch rounded-[5px] border border-solid border-black p-[10px] dark:border-white">
      <div className="max-w-[176px] text-left text-[16px] tracking-[0%] text-[rgba(30,30,30,1)] dark:text-white">
        {params}
      </div>
      <img src={tubiao} alt="some_text"></img>
    </div>
  );
}
export default function Bloglist() {
  return (
    <div className="max-w-fall flex flex-col items-center justify-center space-y-1 ">
      <div className="w-fall flex max-w-full flex-row items-start justify-start self-stretch rounded-[5px] bg-black p-[10px] text-left text-[96px] tracking-[0%] text-white dark:bg-white dark:text-black">
        idea
      </div>
      <div className="w-fall flex max-w-full flex-col items-center justify-start self-stretch rounded-[5px] border border-solid border-black px-[6px] pb-[6px] pt-[6px] space-y-2 dark:border-white">
        {liststyle("设计一套自己的标识系统", tubiao)}
        {liststyle("一种全天候办公方式", tubiao)}
      </div>
    </div>
  );
}
