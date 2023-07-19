

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Model_faceplate(props) {
  const { nodes, materials } = useGLTF("/model_faceplate.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={2065.965}
        near={894.254}
        fov={39.598}
        position={[-1.271, 0.614, 0.577]}
        rotation={[-0.734, -0.966, -0.638]}
        scale={0.001}
      />
      <group scale={0.007}>
        <group
          position={[19.361, 0, -15.954]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_1.geometry}
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_2.geometry}
            material={materials["Paint Matte White #19"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_3.geometry}
            material={materials["Aluminum Polished"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_4.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_5.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_6.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_7.geometry}
            material={materials["Aluminum Polished"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_8.geometry}
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_9.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_10.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_11.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_12.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_13.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_14.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_15.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_16.geometry}
            material={materials["Paint Matte White #19"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_17.geometry}
            material={materials["Paint Matte White #28"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_18.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_19.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_20.geometry}
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_21.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_22.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_23.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_24.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_25.geometry}
            material={materials["Paint Matte White #5"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_26.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_27.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_28.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_29.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_30.geometry}
            material={materials["Paint Matte White #19"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_31.geometry}
            material={materials["Aluminum Polished"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_32.geometry}
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_33.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_34.geometry}
            material={materials["Aluminum Polished"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_35.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_36.geometry}
            material={materials["Paint Matte White #19"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_37.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_38.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_39.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_40.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_41.geometry}
            material={materials["Paint Matte White"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.预设值_42.geometry}
            material={materials["Paint Matte White #6"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.图层_07_1.geometry}
            material={materials["Paint Matte White #5"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.图层_07_2.geometry}
            material={materials["Paint Matte White #5"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.图层_07_3.geometry}
            material={materials["Paint Matte White #5"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.图层_07_4.geometry}
            material={materials["Paint Matte White #5"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model_faceplate.glb");
