import React from 'react';

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { RequStatus } from './MonoStatus'

import { PropellerModel } from './PropellerModel'

export default function Propeller() {
  return (
    <div className="relative h-screen w-screen bg-[#ffffff]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 75 }}
        className=" relative flex-1 self-stretch bg-[#d5d5d5]"
      >
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[-2, 3, 5]} intensity={2} />
        <Suspense fallback={null}>
          <PropellerModel />
        </Suspense>
        <OrbitControls 
            enableZoom={false}
            autoRotateSpeed={0.5} 
            autoRotate />
      </Canvas>

      <div className="absolute left-0 top-[845px] flex w-[1440px] flex-col items-start justify-start gap-0 pl-[200px] pr-[200px]">
        <div
          className="relative text-left text-[#000000]"
          style={{ font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)" }}
        >
          Design instructions
        </div>

        <div
          className="relative text-left text-[#000000]"
          style={{ font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)" }}
        >
          Design instructions
        </div>
      </div>

      <div className="absolute left-0 top-[929px] flex w-[1440px] flex-col items-start justify-start gap-0 pl-[200px] pr-[200px]">
        <div
          className="relative text-left text-[#000000]"
          style={{ font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)" }}
        >
          设计说明
        </div>

        <div
          className="relative text-left text-[#000000]"
          style={{ font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)" }}
        >
          设计说明
        </div>
      </div>

      <div className="absolute left-0 right-0 top-0 flex flex-row items-center justify-between pl-[200px] pr-[200px]">
        <div
          className="relative text-left text-[#202020]"
          style={{ font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)" }}
        >
          Propeller
        </div>

        <div className="relative flex shrink-0 flex-row items-start justify-start gap-[69px]">
          <div className="relative flex shrink-0 flex-col items-start justify-start">
            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Production time: 2017.02
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                margin: "-4px 0 0 0",
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              制作时间：2017.02
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col items-start justify-start">
            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Degree of completion: 100%
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                margin: "-4px 0 0 0",
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              完成度：100%
            </div>
          </div>

          < RequStatus />
        </div>
      </div>
    </div>
  )
}


