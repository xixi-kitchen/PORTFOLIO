

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function BowlmatsModel(props) {
  const { nodes, materials } = useGLTF("/mono_Bowlmats.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={317.917}
        near={192.768}
        fov={39.598}
        position={[-0.237, 0.052, 0.081]}
        rotation={[-0.557, -1.186, -0.524]}
        scale={0.001}
      />
      <group scale={0.05}>
        <group position={[0, 1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["底板(04D4FEB6-1EC4-4A79-BA5F-381D268A6864)"].geometry
            }
            material={materials["Paint Matte White #4"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["底板(251603C6-0564-42C8-8A42-B78E1F0DE9BC)"].geometry
            }
            material={materials["Paint Matte White #4"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["底板(92E5403F-4852-4E16-96EC-EC6D53DB86EC)"].geometry
            }
            material={materials["Paint Matte White #4"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["1(14851DF5-A980-4CC8-8CFC-C60D781A064A)"].geometry}
            material={materials["Paint Matte White #4"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["2(0B5D0B82-1D1C-4117-A177-1781DF2CF3AF)"].geometry}
            material={materials["Paint Matte White #4"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3(08E9C2AD-09DD-47F2-BB8D-8AEC6EC1ED3E)"].geometry}
            material={materials["Paint Matte White #4"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono_Bowlmats.glb");
