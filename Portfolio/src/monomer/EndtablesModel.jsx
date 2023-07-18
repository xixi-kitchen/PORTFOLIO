
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function EndtablesModel(props) {
  const { nodes, materials } = useGLTF("/mono_endtables.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={424.655}
        near={244.427}
        fov={39.598}
        position={[-0.233, 0.125, 0.278]}
        rotation={[-0.336, -0.67, -0.214]}
        scale={0.001}
      />
      <group scale={0.03}>
        <group position={[0, 20, -28.262]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(378F442E-B8F6-4DA6-A489-21BC5167D319)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(75B78BC6-9E6F-4444-A0E9-1A72FAB17BA3)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(FEAE0D5B-5CC2-456D-BB69-FB2E4FD26D19)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(0219ACEE-2327-4822-9578-8AC7DBAD5751)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(CA1E6511-3683-4342-A318-4BB93C1E3C01)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(C040736C-1710-4C0A-AD40-8E2A0242B332)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(C48DE38F-1EA2-4A15-AEC0-01C577423D00)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["电视柜(9F8E7790-CF2A-4C48-A20F-145E6BDDB6EC)"].geometry
            }
            material={materials["Paint Matte White #1"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono_endtables.glb");
