import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimateSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scroll={4}>
      <MeshDistortMaterial color="#8352fd" distort={0.4} speed={2} roughness={1}/>
    </Sphere>
  );
};

export default AnimateSphere;
