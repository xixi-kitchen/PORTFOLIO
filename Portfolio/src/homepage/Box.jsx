import React from "react";
import { BoxGeometry, Material } from "three";

export default function Box() {
  return (
    <>
      {/* 组件网格模型 */}
      <mesh rotation={[90, 0, 40]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
