import React, { useRef, useEffect, useState } from "react";
import { RectAreaLightUniformsLib } from "./file";

// Three imports
import { Physics } from "@react-three/cannon";
import { MapControls } from "@react-three/drei";
import { Sky, Cloud } from "@react-three/drei";

import Model from "./Compressed_collegealag";
// import Model from "./Temp";
// import Model from "./Compressed_withoutgrass";

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
      <pointLight position={[0, 20, 0]} />

      <mesh position={[200, 2, 0]} onClick={() => history.push("/events/vsm")}>
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
  const [data, setData] = useState(true);

  return (
    <>
      {data ? (
        <div id="magic" style={{ height: "100%" }}>
          {/* Hello */}
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              backgroundColor: "transparent",
              transform: "translateX(-50%)",
              borderRadius: "20px",
              border: "1px solid white",
              padding: "1.5%",
            }}
            // className="loader-div"
          >
            {loading ? (
              <button
                disabled
                onClick={() => {
                  console.log("Not loaded: ", loading);
                }}
              >
                Go To College
              </button>
            ) : (
              <button
                // disabled={!loading}
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
      <Canvas camera={{ fov: 75, position: [107, 34, 234] }}>
        <color attach="background" args={["#FFffff"]} />
        {/* <spotLight
          position={[100, 2500, 100]}
          angle={0.7}
          color={"#FFFFFF"}
          castShadow={true}
        />*/}
        <ambientLight intensity={0.1} />

        {/* <pointLight />  */}
        {/* <rectAreaLight
          height={2}
          width={20}
          intensity={1}
          position={[0, 6, 0]}
          color={"red"}
        /> */}
        {/* <RectArealightWithHelper /> */}
        <Physics>
          {/* <Sky
            distance={450000}
            sunPosition={[5, 1, 0]}
            inclination={0}
            azimuth={0.15}
            turbidity={9.4}
          /> */}
          <Cloud
            opacity={0.5}
            speed={0.4} // Rotation speed
            width={10} // Width of the full cloud
            depth={1.5} // Z-dir depth
            segments={20} // Number of particles
          />
          {/* <Model setLoading={setLoading} /> */}

          <Plane />

          <Box history={history} />

          <Controls />
        </Physics>
      </Canvas>
    </>
  );
};

export default ThreeContainer;
