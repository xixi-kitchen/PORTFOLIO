import React, { Suspense, lazy } from "react";

import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

//动画库
import { Animated } from "react-animated-css";
import { motion } from "framer-motion";
import { gsap } from "gsap";
// import Homepage_mononer from "./Homepage_mononer";

// import Homepage_interactive from "./Homepage_interactive";
// import Homepage_project from "./Homepage_project";
// import Homepageresume from "./Homepageresume";

const Homepage_resume = lazy(() => import("./Homepage_resume"));
const Homepage_project = lazy(() => import("./Homepage_project"));
const Homepage_interactive = lazy(() => import("./Homepage_interactive"));
const Homepage_classic = lazy(() => import("./Homepage_classic"));
const Homepage_mononer = lazy(() => import("./Homepage_mononer"));


function Homepage({ ...props }) {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象

  //项目内容

  // const goVector = () => {
  //   goNavigate("/Vector");
  // };
  // const goOne = () => {
  //   goNavigate("/One");
  // };
  


  return (
    <div className="relative h-[7500px] bg-[#ffffff]">
      <div className="scrollbar absolute left-0 right-0 top-[150px] flex h-[7140px] flex-col items-center justify-start gap-[258px]">
        <div className="relative flex w-[1022px] shrink-0 flex-col items-center justify-start gap-[61px]">
          <Animated
            animationIn="bounceInLeft"
            animationOut="bounceOutRight"
            animationInDuration="1000"
            isVisible={true}
          >
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Human Design Studio
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                [人类设计工作室]
              </div>
            </div>
          </Animated>

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--en, 600 16px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">
                  Human design studio is a virtual studio consisting of{" "}
                </span>
                <span className="text-[#8158FC]">
                  a designer who likes to do all kinds of novelty experiments
                </span>
                <span className="">, and an </span>
                <span className="text-[#8158FC]">
                  artificial intelligence (who is actually a person)
                </span>
                <span className="">
                  . When our design concept is unchanged, it is to make design
                  more in line with life, conducive to life, benefit life, and
                  let design serve human beings.
                </span>
              </span>
            </div>

            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--cn, 300 16px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">人类设计工作室是一个虚拟的工作室，由</span>
                <span className="text-[#8158FC]">
                  一个喜欢做各类新奇尝试的设计师
                </span>
                <span className="">和一个</span>
                <span className="text-[#8158FC]">
                  人工智能组成（其实就是一个人）
                </span>
                <span className="">
                  。但我们的设计理念是不变的，就是让设计能更加贴合生活，利于生活、造福生活，让设计服务于人类。
                </span>
              </span>
            </div>
          </div>

          <motion.div
            animate={{ x: [-50, 50] }}
            // transition={{ ease: "easeOut", duration: 2 }}
            transition={{
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              // type: 'spring'
            }}
            className="relative flex shrink-0 flex-col items-center justify-center gap-0.5 self-stretch"
          >
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5">
              <div
                className="relative text-left text-[#606060]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Design concept
              </div>

              <div
                className="relative text-left text-[#8158fc]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                |
              </div>

              <div
                className="relative text-left text-[#606060]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                设计理念
              </div>
            </div>

            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-2xl bg-[#8158fc] p-2.5 ">
              <div
                className="relative flex-1 text-center text-[#ffffff]"
                style={{
                  font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Design benefits humanbeings
              </div>
            </div>
          </motion.div>
        </div>
        <Animated
          animationIn="bounceInUp"
          animationOut="bounceOutRight"
          animationInDuration="4000"
          isVisible={true}
        >
          <Homepage_resume />
        </Animated>

        <div className="relative flex shrink-0 flex-col items-center justify-start gap-20">
        <Animated
          animationIn="bounceInUp"
          animationOut="bounceOutRight"
          animationInDuration="4000"
          isVisible={true}
        >
          <Homepage_project />
          </Animated>
          <Animated
          animationIn="bounceInUp"
          animationOut="bounceOutRight"
          animationInDuration="4000"
          isVisible={true}
        >
          <Homepage_interactive />
          </Animated>
          <Animated
          animationIn="bounceInUp"
          animationOut="bounceOutRight"
          animationInDuration="4000"
          isVisible={true}
        >
          <Homepage_classic />
          </Animated>
        </div>

        <Homepage_mononer />
      </div>
    </div>
  );
}

export default Homepage;
