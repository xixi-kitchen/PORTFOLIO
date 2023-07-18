

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function MagneticModel(props) {
  const { nodes, materials } = useGLTF("/mono_magnetic.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={1178.096}
        near={507.8}
        fov={54.432}
        position={[-0.756, 0.536, -0.57]}
        rotation={[-2.479, -0.776, -2.641]}
        scale={0.001}
      />
      <group scale={0.01}>
        <group position={[-150, 10.174, 25]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[300, 140, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.N_3.geometry}
              material={materials["N 255:0:0 #1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.S_3.geometry}
              material={materials["S 0:0:255 #1"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.N_1.geometry}
            material={materials["N 255:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.S_1.geometry}
            material={materials["S 0:0:255"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.N_5.geometry}
            material={materials["N 255:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.S_5.geometry}
            material={materials["S 0:0:255"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.N_7.geometry}
            material={materials["N 255:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.S_7.geometry}
            material={materials["S 0:0:255"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.N_9.geometry}
            material={materials["N 255:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.S_9.geometry}
            material={materials["S 0:0:255"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.N_11.geometry}
            material={materials["N 255:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.S_11.geometry}
            material={materials["S 0:0:255"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono_magnetic.glb");
