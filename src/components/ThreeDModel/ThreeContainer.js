import React, { Suspense, useRef, useEffect } from "react";

// Three imports
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { MapControls, Stats } from "@react-three/drei";
import { DragControls } from "three/examples/jsm/controls/DragControls";

// 3 Model
// import Model from "./Mandir";
// import Model from "./Man";
// import Model2 from "./Clg";
// import Model3 from "./Clg2";
// import Model4 from "./Clg3";
// import Model5 from "./Clg4";
// import Model6 from "./Clg5";
// import Model from "./Final";
import Model from "./Compressed10_clg5";
// import Model from "./Clg5";

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
    <mesh ref={group} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeBufferGeometry attach="geometry" args={[1300, 1000]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}
const deg2rad = (degrees) => degrees * (Math.PI / 180);

function Controls({
  zoom,
  focus,
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
}) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);
  const [mouseDown, setMouseDown] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);
  const [cameraPos, setCameraPos] = useState(0);

  useEffect(() => {
    // var mousePos = [0, 0];
    // var cameraPos = 0;

    document.addEventListener("mousedown", onMouseDown, false);
    function onMouseDown(event) {
      // semouseDown = true;
      // mousePos = [event.offsetX, event.offsetY];
      // cameraPos = camera.position;
      console.log("In mouse down");
      console.log("Priotam ", camera.position);
      setMouseDown(true);
      setMousePos([event.offsetX, event.offsetY]);
      setCameraPos(camera.position);
    }
    document.addEventListener("mouseup", onMouseUp, false);
    function onMouseUp(event) {
      console.log("In mouse up");
      // mouseDown = false;
      setMouseDown(false);
    }
    document.addEventListener("mousemove", onMouseMove, false);
    function onMouseMove(event) {
      // console.log("Priotam ", camera.position);
      if (mouseDown) {
        console.log("In mouse over");
        // scale factor takes into account the current FOV
        let scale = Math.tan(((camera.fov / 2) * Math.PI) / 180) / 1.5;
        let dx = mousePos[0] - event.offsetX;
        let dz = mousePos[1] - event.offsetY;
        let x = cameraPos.x + scale * dx;
        let z = cameraPos.z - scale * dz;
        camera.position.x = x;
        camera.position.z = z;
        // mousePos = [event.offsetX, event.offsetY];
        // cameraPos = camera.position;
        setMousePos([event.offsetX, event.offsetY]);
        setCameraPos(camera.position);
      }
    }

    controls.setLookAt(
      camera.position.x,
      camera.position.y,
      camera.position.z,
      100,
      100,
      40,
      true
    );
  }, []);
  return useFrame((state, delta) => {
    // zoom ? pos.set(focus.x, focus.y, focus.z) : pos.set(-50, 0, 0);
    // console.log("pritam");
    // // zoom ? pos.set(-20, 0, 0) : pos.set(-50, 0, 0);
    // // zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 4);
    // state.camera.position.lerp(pos, 0.1);
    // state.camera.updateProjectionMatrix();
    // // console.log(delta);
    // controls.setLookAt(
    //   state.camera.position.x,
    //   state.camera.position.y,
    //   state.camera.position.z,
    //   look.x,
    //   look.y,
    //   look.z,
    //   true
    // );
    // return controls.update(delta);
  });
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
    <Canvas camera={{ fov: 75, position: [-100, 10, 20] }}>
      <color attach="background" args={["#ffffffde"]} />

      {/* <OrbitControls /> */}
      <MapControls />
      {/* <Plane /> */}

      {/* <Stars /> */}
      <spotLight position={[100, 150, 100]} angle={0.3} />
      <ambientLight intensity={0.5} />
      <Physics>
        <Model />
        {/* <Model2 /> */}
        <Plane />
        {/* <Box /> */}
        {/* <Model
          zoomToView={(focusRef) => {
            console.log(focusRef);
            setZoom(!zoom);
            setFocus(focusRef);
          }}
        /> */}

        <Controls zoom={zoom} focus={focus} />
      </Physics>
    </Canvas>
  );
};

export default ThreeContainer;

// const ref = useRef(null);
