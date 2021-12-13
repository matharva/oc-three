import React, { useRef, useEffect } from "react";

// Three imports
import { Physics } from "@react-three/cannon";
import { MapControls } from "@react-three/drei";
import { Sky, Cloud } from "@react-three/drei";

// import Model from "./Compressed_clg2";
import Model from "./Compressed_withoutgrass";

// Styles
import "../../styles/ThreeContainer.scss";

import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import CameraControls from "camera-controls";
import { useHistory } from "react-router";

CameraControls.install({ THREE });

function Box({ history }) {
  return (
    <mesh position={[200, 2, 0]} onClick={() => history.push("/events/vsm")}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
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

const ThreeContainer = ({ setLoading }) => {
  const history = useHistory();
  const data = true;

  return (
    <>
      {data ? (
        <div id="magic" style={{ height: "100%" }}></div>
      ) : (
        <Canvas camera={{ fov: 75, position: [107, 34, 234] }}>
          <color attach="background" args={["#FFffff"]} />
          <spotLight
            position={[100, 2500, 100]}
            angle={0.7}
            color={"#FFFFFF"}
            castShadow={true}
          />
          <ambientLight intensity={0.5} />
          <Physics>
            <Sky
              distance={450000}
              sunPosition={[5, 1, 0]}
              inclination={0}
              azimuth={0.15}
              turbidity={9.4}
              // mieDirectionalG={0.83}
            />
            <Cloud
              opacity={0.5}
              speed={0.4} // Rotation speed
              width={10} // Width of the full cloud
              depth={1.5} // Z-dir depth
              segments={20} // Number of particles
            />
            <Model setLoading={setLoading} />

            <Plane />
            <Box history={history} />

            <Controls />
          </Physics>
        </Canvas>
      )}
    </>
  );
};

export default ThreeContainer;
