import React, { Suspense, useRef } from "react";

// Three imports
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

// 3 Model
// import Model from "./Mandir";
import Model from "./Man";
import Model2 from "./Clg";
import Model3 from "./Clg2";
import Model4 from "./Clg3";
import Model5 from "./Clg4";
// import Model from "./Final";

// import Watch from "./Watchman";
// import Compressed from "./Compressed";
// import CollegeBuilding from "./CollegeBuilding";
// Styles
import "../../styles/ThreeContainer.scss";

import * as THREE from "three";
import { useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import randomColor from "randomcolor";
import CameraControls from "camera-controls";

CameraControls.install({ THREE });
const randomPos = (min = 5, max = -5) => Math.random() * (max - min) + min;

function Controls({
  zoom,
  focus,
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
}) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);
  return useFrame((state, delta) => {
    zoom ? pos.set(focus.x, focus.y, focus.z) : pos.set(-50, 0, 0);
    // console.log(object)
    // zoom ? pos.set(-20, 0, 0) : pos.set(-50, 0, 0);
    // zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 4);

    state.camera.position.lerp(pos, 0.9);
    state.camera.updateProjectionMatrix();
    // console.log(delta);

    // controls.setLookAt(
    //   state.camera.position.x,
    //   state.camera.position.y,
    //   state.camera.position.z,
    //   look.x,
    //   look.y,
    //   look.z,
    //   true
    // );
    return controls.update(delta);
  });
}

function Cloud({ momentsData, zoomToView }) {
  return momentsData.map(({ position, color }, i) => (
    <mesh
      key={i}
      position={position}
      onClick={(e) => zoomToView(e.object.position)}
    >
      <boxGeometry args={[0.1, 0.08, 0.003]} />
      <meshStandardMaterial color={color} />
    </mesh>
  ));
}

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
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState({});
  // const momentsArray = useMemo(
  //   () =>
  //     Array.from({ length: 500 }, () => ({
  //       color: randomColor(),
  //       position: [randomPos(), randomPos(), randomPos()],
  //     })),
  //   []
  // );
  // return (
  //   <Canvas linear camera={{ position: [0, 0, 5] }}>
  //     <ambientLight />
  //     <directionalLight position={[150, 150, 150]} intensity={0.55} />
  //     {/* <Cloud
  //       momentsData={momentsArray}
  //       zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))}
  //     /> */}

  //     {/* <Model /> */}
  //     <Controls zoom={zoom} focus={focus} />
  //   </Canvas>
  // );

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <spotLight position={[100, 150, 100]} angle={0.3} />
      <ambientLight intensity={0.5} />
      <Physics>
        <Model5 />
        {/* <Model2 /> */}
        {/* <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Plane /> */}
        {console.log("Before loading model")}
        {/* <Model
          zoomToView={(focusRef) => {
            console.log(focusRef);
            setZoom(!zoom);
            setFocus(focusRef);
          }}
        /> */}

        <Controls zoom={zoom} focus={focus} />
        {/* <Watch /> */}
        {/* <Compressed /> */}
        {/* <CollegeBuilding /> */}
        {console.log("After loading model")}
      </Physics>
      {/* <Suspense fallback={null}> */}
      {/* <Box /> */}
      {/* </Suspense> */}
    </Canvas>
  );
};

export default ThreeContainer;

// const ref = useRef(null);
