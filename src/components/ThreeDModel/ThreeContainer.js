import React, { useRef, useEffect, useState } from "react";
import { RectAreaLightUniformsLib } from "./file";

// Three imports
import { Physics } from "@react-three/cannon";
import { MapControls } from "@react-three/drei";
import { Sky, Cloud } from "@react-three/drei";

// import Model from "./Compressed_collegealag";
// import Model from "./Temp";
import Model from "./Compressed_newcollege";

// Styles
import "../../styles/ThreeContainer.scss";

import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import CameraControls from "camera-controls";
import { useHistory } from "react-router";

CameraControls.install({ THREE });

function Box({ history }) {
  return (
    <>
      {/* <GodRays
        sun={sunRef}
        blendFunction={BlendFunction.Screen} // The blend function of this effect.
        samples={60} // The number of samples per pixel.
        density={0.96} // The density of the light rays.
        decay={0.9} // An illumination decay factor.
        weight={0.4} // A light ray weight factor.
        exposure={0.6} // A constant attenuation coefficient.
        clampMax={1} // An upper bound for the saturation of the overall effect.
        width={200} // Render width.
        height={500} // Render height.
        kernelSize={KernelSize.SMALL} // The blur kernel size. Has no effect if blur is disabled.
        blur={false} // Whether the god rays should be blurred to reduce artifacts.
      /> */}

      <mesh position={[200, 0, 0]} onClick={() => history.push("/events/vsm")}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color="hotpink"
          emmissive={"0x000000"}
        />
      </mesh>
      {/* <GodRays /> */}
    </>
  );
}

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[150, -2, 100]}>
      <planeBufferGeometry attach="geometry" args={[1100, 1100]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}

function Controls() {
  const camera = useThree((state) => state.camera);
  const controlsRef = useRef();

  useEffect(() => {
    var minPan = new THREE.Vector3(-100, -2, -300);
    var maxPan = new THREE.Vector3(500, 2, 400);
    var _v = new THREE.Vector3();
    controlsRef.current.addEventListener("change", function () {
      _v.copy(this.target);
      this.target.clamp(minPan, maxPan);
      _v.sub(this.target);
      camera.position.sub(_v);
    });
  }, []);

  return (
    <MapControls
      ref={controlsRef}
      enableZoom={false}
      enableRotate={true}
      maxPolarAngle={1.5}
      minPolarAngle={0.9}
      maxDistance={300}
    />
  );
}

// const RectArealightWithHelper = () => {
//   const { scene } = useThree();

//   RectAreaLightUniformsLib.init();

//   const rectLight = new THREE.RectAreaLight("red", 5, 4, 10);

//   rectLight.position.set([-5, 5, 5]);
//   scene.add(rectLight);
//   scene.add(new RectAreaLightHelper(rectLight));

//   return null;
// };

const ThreeContainer = ({ loading, setLoading }) => {
  const history = useHistory();
  // const data = true;
  const [data, setData] = useState(true);

  return (
    <>
      {data ? (
        <div id="magic" style={{ height: "100%", zIndex: "10" }}>
          {/* Hello */}
          <div
            // style={{
            //   position: "absolute",
            //   top: "70%",
            //   left: "50%",
            //   backgroundColor: "transparent",
            //   transform: "translateX(-50%)",
            //   borderRadius: "20px",
            //   border: "1px solid white",
            //   padding: "1.5%",
            // }}
            className={!loading ? "testDiv" : ""}
            // id="testDiv"
          >
            {loading ? (
              // <button
              //   // disabled
              //   className="testDiv-btn"
              //   onClick={() => {
              //     console.log("Not loaded: ", loading);
              //     // setData(false);
              //   }}
              // >
              //   Go To College
              // </button>
              <></>
            ) : (
              <button
                // disabled={!loading}
                className="testDiv-btn"
                onClick={() => {
                  console.log("loaded");
                  setData(false);
                }}
              >
                Go To College
              </button>
            )}
          </div>
        </div>
      ) : null}
      <div className={data ? " canvaDiv canvaBefore" : "canvaDiv canvaAfter"}>
        <Canvas
          camera={{ fov: 75, position: [107, 34, 234] }}
          onClick={(e) => console.log("Location: ", e)}
        >
          {data ? (
            <color attach="background" args={["black"]} />
          ) : (
            <color attach="background" args={["black"]} />
            // <></>
          )}
          {/* <ambientLight intensity={1} color={"#ffe692"} /> */}
          {/*  /////////////////////////// EVENTS //////////////////////////////////////*/}
          {/* IPL  */}
          {/* <pointLight
            position={[165, 50, 100]}
            distance={50}
            intensity={3}
            color={"#ffe692"}
          /> */}
          {/* IPL  */}
          {/* VSM */}
          {/* <pointLight
            position={[45, 10, 220]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* VSM */}

          {/* OCL  */}
          {/* <pointLight
            intensity={1}
            distance={40}
            position={[170, 1, -20]}
            color={"red"}
          /> */}
          {/* OCL  */}

          {/* Sabhagruha */}
          <pointLight
            intensity={3}
            position={[0, 10, 40]}
            distance={120}
            color={"#ffe692"}
          />
          {/* <pointLight
            intensity={10}
            position={[47, 10, 40]}
            distance={20}
            color={"#ffe692"}
          /> */}
          {/* Sabhagruha */}

          {/*  /////////////////////////// EVENTS //////////////////////////////////////*/}
          {/* Street Lights */}

          {/* College Right */}
          {/* <pointLight
            intensity={2}
            position={[60, 10, -70]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[10, 10, -70]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-40, 10, -70]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* College Right */}

          {/* College Front */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, -60]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, -10]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, 40]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, 90]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* College Front */}

          {/* College Left */}
          {/* <pointLight
            intensity={2}
            position={[60, 10, 140]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[10, 10, 140]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-40, 10, 140]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, 140]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* College Left */}

          {/* Cabin and gate */}
          {/* <pointLight
            intensity={3}
            position={[240, 10, 430]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[300, 10, 430]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[240, 10, 480]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[300, 10, 480]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[240, 10, 530]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[300, 10, 530]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* Cabin and gate */}

          {/** College Building behind concert */}

          {/* <pointLight
            intensity={2}
            position={[100, 20, -150]}
            distance={50}
            color={"#ffe692"}
          /> */}

          {/** Mandir Right Lamps */}
          {/** test wala */}
          <pointLight
            intensity={2}
            position={[300, 20, -50]}
            distance={100}
            color={"red"}
          />

          {/* Mandir Right Concert*/}

          {/* <pointLight
            intensity={2}
            position={[300, 20, -150]}
            distance={50}
            color={"red"}
          /> */}

          {/**test wala */}
          <pointLight
            intensity={2}
            position={[300, 20, -150]}
            distance={100}
            color={"red"}
          />
          {/* <pointLight
            intensity={2}
            position={[300, 20, -170]}
            distance={50}
            color={"red"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[270, 20, -170]}
            distance={100}
            color={"red"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[280, 20, -150]}
            distance={50}
            color={"blue"}
          /> */}
          {/** Test wala */}
          <pointLight
            intensity={2}
            position={[280, 20, -150]}
            distance={100}
            color={"blue"}
          />
          {}
          {/* <pointLight
            intensity={2}
            position={[280, 20, -170]}
            distance={50}
            color={"blue"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[280, 20, -150]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/**test wala */}
          <pointLight
            intensity={4}
            position={[-30, 20, -150]}
            distance={150}
            color={"#ffe692"}
          />

          <pointLight
            intensity={5}
            position={[80, 20, -260]}
            distance={100}
            color={"lightgreen"}
          />

          {}

          {/* Mandir Straight */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 70]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 120]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 170]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 220]}
            distance={100}
            color={"#ffe692"}
          /> */}

          {/* <pointLight
            intensity={2}
            position={[230, 10, 270]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[230, 10, 320]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[230, 10, 370]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[200, 10, 370]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* Mandir Straight */}

          {/* Mandir Left */}
          {/* <pointLight
            intensity={2}
            position={[205, 10, 20]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[165, 10, 20]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[125, 10, 20]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* Mandir Left */}

          {/* College Straight Line */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, -30]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 20]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 70]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 120]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 170]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 220]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[135, 10, 240]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[165, 10, 260]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[195, 10, 280]}
            distance={100}
            color={"#ffe692"}
          /> */}

          {/** Test lights */}
          <pointLight
            intensity={5}
            position={[25, 10, 225]}
            distance={250}
            color={"#ffe692"}
          />

          <pointLight
            intensity={4}
            position={[170, 10, 125]}
            distance={150}
            color={"#0357a6"}
          />

          <pointLight
            intensity={4}
            position={[305, 10, 205]}
            distance={150}
            color={"#ffe692"}
          />

          <pointLight
            intensity={5}
            position={[305, 10, 505]}
            distance={250}
            color={"#0357a6"}
          />

          <pointLight
            intensity={4}
            position={[190, 10, -10]}
            distance={150}
            color={"#ffe692"}
          />

          <pointLight
            intensity={9}
            position={[190, 400, -10]}
            distance={700}
            color={"#0357a6"}
          />

          {/* College Straight Line */}
          {/* Street Lights */}

          {/* <RectArealightWithHelper /> */}
          <Physics>
            {/* <Sky
              distance={450000}
              sunPosition={[5, 1, 0]}
              inclination={0}
              azimuth={0.15}
              turbidity={9.4}
            /> */}
            {/* <pointLight position={[200, 0, 0]} /> */}
            <Cloud
              opacity={0.5}
              speed={0.4} // Rotation speed
              width={10} // Width of the full cloud
              depth={1.5} // Z-dir depth
              segments={20} // Number of particles
            />
            <Model setLoading={setLoading} />

            {/* <Plane /> */}

            <Box history={history} />

            <Controls />
          </Physics>
        </Canvas>
      </div>
    </>
  );
};

export default ThreeContainer;

{
  /* <iframe
  src={"https://oculus2021-c12c7.web.app/"}
  height={"100%"}
  width={"100%"}
  zIndex={-1}
></iframe>; */
}
