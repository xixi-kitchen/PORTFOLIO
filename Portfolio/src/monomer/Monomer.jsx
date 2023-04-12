import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Mug } from "./cup/Mug";
import Box from "../homepage/Box.jsx";

const Monomer = () => {
  return (
    <div>
      单体
      <div className="h-[400px]">
        <Canvas className="] bg-gray-400">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.1} />
          <directionalLight
            color="white"
            position={[0, 0, 5]}
            intensity={0.5}
          />
          <Suspense fallback="null">
            <Mug />
            <Box />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Monomer;
