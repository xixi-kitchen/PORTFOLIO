

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function RollinModel(props) {
  const { nodes, materials } = useGLTF("/mono_rollin.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={1314.465}
        near={1010.56}
        fov={39.598}
        position={[-1.029, 0.331, 0.353]}
        rotation={[-0.557, -1.186, -0.524]}
        scale={0.001}
      />
      <group scale={0.013}>
        <group position={[-72.06, -60, 78.884]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["外皮(596721A1-1A6A-441A-A5C1-5A926B2B2C8D)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["外皮(C57528D0-6075-4C4A-9827-301F40939F5D)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(AB062E96-7C7B-4711-A039-9AE0B7BEB400)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(B2E3FBB8-FEF3-4D5D-8382-CAC3A46A8080)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(DC34425A-E468-4CB5-A4E9-0B5E2936654F)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(19BF35D5-A4C7-4D65-9BCB-8266C59C32DA)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(8D1B541C-AD34-46EC-AF4A-3BB8F173C5BC)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(00E0F6CD-3AF1-4748-A0D9-C2F7E17C07F8)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(12030ECB-89F5-46BB-9DE6-2E839FEEA9D0)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(EA7C6226-63C4-4BD4-A688-717F2FF38505)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(8CFDFDA8-8DA2-4725-801F-79B89054D157)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(A2957C22-0335-4CB0-AF63-AFA1A0CBEB62)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(7339496B-EE2B-46E3-8557-31D0C430117B)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(D80FA588-B3B1-416C-890C-46418C044015)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(E64A63DB-0071-4293-B01C-6D6AD730B177)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(A24ED304-9CFB-4BAE-85C4-5A1A170BE46B)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(05515F33-FAFD-493E-B6CA-0D2985993863)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(BDB76778-6484-41F4-8554-507D2A80642C)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(3440E6AF-B6EE-4D41-A0AD-7692B9936C51)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(06A51781-6811-4AC7-B2EA-3820CBD18519)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(3DBF98F1-F156-4CA1-821B-4C9A836065DD)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["内里(96D21794-1915-4A35-92AD-1986240FC97E)"].geometry
            }
            material={materials["Paint Matte White #2"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono_rollin.glb");
