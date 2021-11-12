import React, { Suspense, useRef } from "react";

// Three imports
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

// 3 Model
// import Model from "./Mandir";
import Model from "./Man";
import Watch from "./Watchman";
// Styles
import "../styles/ThreeContainer.scss";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));

  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
        console.log("dard");
      }}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const group = useRef(null);
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   // group.current.rotation.y += 0.02;
  //   group.current.rotation.x = 0;
  //   group.current.rotation.y += 0.002;
  //   // group.current.rotation.x = -0.2;
  //   // ref.current.rotation.x = Math.cos(t / 4) / 8;
  //   // ref.current.rotation.y = Math.sin(t / 4) / 8;
  //   // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });
  return (
    <mesh ref={group} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

const ThreeContainer = () => {
  const ref = useRef(null);

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <ambientLight intensity={0.5} />
      <Physics>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Plane />
        {console.log("Before loading model")}
        <Model />
        <Watch />
        {console.log("After loading model")}
      </Physics>
      {/* <Suspense fallback={null}> */}
      {/* <Box /> */}
      {/* </Suspense> */}
    </Canvas>
  );
};

export default ThreeContainer;
