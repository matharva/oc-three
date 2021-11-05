import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

export default function Shoe() {
  const { nodes, materials } = useGLTF("shoe-draco.glb");

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
      />
    </group>
  );
}

// export default function Trial() {
//   return (
//     <>
//       <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
//         <ambientLight intensity={0.7} />
//         <spotLight
//           intensity={0.5}
//           angle={0.1}
//           penumbra={1}
//           position={[10, 15, 10]}
//           castShadow
//         />
//         <Suspense fallback={null}>
//           <Shoe />
//           <Environment preset="city" />
//           <ContactShadows
//             rotation-x={Math.PI / 2}
//             position={[0, -0.8, 0]}
//             opacity={0.25}
//             width={10}
//             height={10}
//             blur={1.5}
//             far={0.8}
//           />
//         </Suspense>
//         <OrbitControls
//           minPolarAngle={Math.PI / 2}
//           maxPolarAngle={Math.PI / 2}
//           enableZoom={false}
//           enablePan={false}
//         />
//       </Canvas>
//     </>
//   );
// }
