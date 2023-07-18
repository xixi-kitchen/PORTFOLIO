

import React, { useRef } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";

export function CabinetsModel(props) {
  const { nodes, materials } = useGLTF("/mono_cabinets.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={866.211}
        near={715.639}
        fov={26.991}
        position={[0.424, 0.195, 0.643]}
        rotation={[-0.19, 0.556, 0.101]}
        scale={0.001}
      />
     
      <group scale={0.025}>
        <group position={[0, 20, 8.382]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["预设值(8B946E54-E5B7-4B3C-B718-49E5579A1CDF)"].geometry
            }
            material={materials["预设值:0:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["预设值(E671314D-E563-4B19-9E0A-A07D60EC286B)"].geometry
            }
            material={materials["预设值:0:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["预设值(71141D79-7B98-408F-82E1-6E70A4AAAFE5)"].geometry
            }
            material={materials["预设值:0:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["预设值(07CB03B6-2BC2-46FC-B667-983DC1572776)"].geometry
            }
            material={materials["预设值:0:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["预设值(F6F18CD4-4A4A-4D45-BB38-427B5670AA77)"].geometry
            }
            material={materials["预设值:0:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["柜体(129FFD9C-928E-4B0D-BEC0-AA1C18F9C794)"].geometry
            }
            material={materials["柜体:200:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["柜体(E8BD83A0-7FA2-4AE8-8A50-2EB411E77748)"].geometry
            }
            material={materials["柜体:200:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["柜体(A3698F43-F492-4C82-8167-D6C361813437)"].geometry
            }
            material={materials["柜体:200:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["柜体(858CACB1-25FE-4582-838A-8338829547DA)"].geometry
            }
            material={materials["柜体:200:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["柜体(30786570-75C1-4966-8D15-8C717E01D7EA)"].geometry
            }
            material={materials["柜体:200:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["柜体(5344DC16-B910-480E-AE05-BDC756DAE325)"].geometry
            }
            material={materials["柜体:200:0:0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["柜体(B6D714A4-528F-4D0A-984F-0AF44C1794CD)"].geometry
            }
            material={materials["柜体:200:0:0"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mono_cabinets.glb");
