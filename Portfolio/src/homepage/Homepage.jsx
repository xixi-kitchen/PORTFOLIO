import React from "react";

import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

import Tcc from "../Tcc";
import Ttt from "../Ttt";
import Box from "./Box";
import AnimateSphere from "./AnimateSphere";
import { Model } from "./Draco";
import { Suspense } from "react";
import { Boot } from "./Boot";
import { Fangzi } from "./Mini_room_art_copy";

const Homepage = () => {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象
  const goBlog = () => {
    goNavigate("/blog");
  }; //onClick不能直接传参数，所以在这个函数中赋值

  return (
    <div>
      <Ttt />
      <Tcc />
      <h1 className="bg-yellow-900 text-3xl font-bold text-yellow-200 underline">
        Hello world!
      </h1>
      <h1 className="font-mono ">
        Quizzed the use of reuse styles to modify existing tags
      </h1>
      <button
        className=" bg-yellow-300 px-9 transition delay-150 duration-200  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 "
        onClick={goBlog}
      >
        GoBlog
      </button>
      <div id="canvas-container" className=" h-[400px] bg-slate-400">
        <Canvas className="">
          {/* 添加控制器 */}
          <OrbitControls enableZoom={false} />
          {/* 添加环境光 */}
          <ambientLight intensity={0.1} />
          {/* 添加点光源 */}
          <directionalLight color="blue" position={[0, 0, 5]} intensity={0.5} />
          {/* 添加网格模型 */}
          <Suspense>
            <Box />
          </Suspense>
        </Canvas>
        <Canvas className="">
          {/* 添加控制器 */}
          <OrbitControls enableZoom={false} />
          {/* 添加环境光 */}
          <ambientLight intensity={0.1} />
          {/* 添加点光源 */}
          <directionalLight
            color="white"
            position={[0, 0, 5]}
            intensity={0.5}
          />
          {/* 添加网格模型 */}
          <AnimateSphere />
        </Canvas>
        <Canvas className="">
          {/* 添加控制器 */}
          <OrbitControls enableZoom={false} />
          {/* 添加环境光 */}
          <ambientLight intensity={0.1} />
          {/* 添加点光源 */}
          <directionalLight
            color="white"
            position={[0, 0, 5]}
            intensity={0.5}
          />
          {/* 添加网格模型 */}
          <Suspense fallback="null">
            <Model />
          </Suspense>
        </Canvas>
        <Canvas className="">
          {/* 添加控制器 */}
          <OrbitControls enableZoom={false} />
          {/* 添加环境光 */}
          <ambientLight intensity={0.1} />
          {/* 添加点光源 */}
          <directionalLight
            color="white"
            position={[0, 0, 5]}
            intensity={0.5}
          />
          {/* 添加网格模型 */}
          <Suspense fallback="null">
            <Boot />
          </Suspense>
        </Canvas>
        <Canvas className="">
          {/* 添加控制器 */}
          <OrbitControls enableZoom={false} />
          {/* 添加环境光 */}
          <ambientLight intensity={0.1} />
          {/* 添加点光源 */}
          <directionalLight
            color="white"
            position={[0, 0, 5]}
            intensity={0.5}
          />
          {/* 添加网格模型 */}
          <Suspense fallback="null">
            <Fangzi />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Homepage;
