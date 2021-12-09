/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/compressed_withoutgrass.glb");

  useEffect(() => {
    props.setLoading(false);
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 19, 0]} scale={[22, 15, 13]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={nodes.Cube001_1.material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={nodes.Cube001_2.material}
        />
        <mesh
          geometry={nodes.Cube001_3.geometry}
          material={nodes.Cube001_3.material}
        />
        <mesh
          geometry={nodes.Cube001_4.geometry}
          material={nodes.Cube001_4.material}
        />
        <mesh
          geometry={nodes.Cube001_5.geometry}
          material={nodes.Cube001_5.material}
        />
        <mesh
          geometry={nodes.Cube001_6.geometry}
          material={nodes.Cube001_6.material}
        />
        <mesh
          geometry={nodes.Cube001_7.geometry}
          material={materials.Plastic}
        />
        <mesh
          geometry={nodes.Cube001_8.geometry}
          material={nodes.Cube001_8.material}
        />
        <mesh
          geometry={nodes.Cube001_9.geometry}
          material={nodes.Cube001_9.material}
        />
      </group>
      <group position={[-0.06, -1.28, 9.32]} scale={[50.55, 3.56, 72.62]}>
        <mesh
          geometry={nodes.Plane_1.geometry}
          material={nodes.Plane_1.material}
        />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.ground} />
      </group>
      <group position={[55.02, 15.98, -2.25]} scale={[19.97, 17.31, 17.31]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={nodes.Cube_2.material}
        />
      </group>
      <group position={[-50.31, 15.98, -2.25]} scale={[19.97, 17.31, 17.31]}>
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={nodes.Cube002_1.material}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={nodes.Cube002_2.material}
        />
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={nodes.Cube002_3.material}
        />
      </group>
      <group position={[0, 13, 53.81]} scale={[-77.13, 14.09, 38.69]}>
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={nodes.Cube003_1.material}
        />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.stage} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.roof} />
      </group>
      <mesh
        geometry={nodes.watchmann.geometry}
        material={nodes.watchmann.material}
        position={[331.25, 18.89, 455.59]}
        scale={[31.51, 20.43, 35.09]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[303.78, 0, -178.46]}
        scale={[90.42, 12.41, 90.42]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-59.27, -1.8, -86.91]}
        scale={[31.89, 56.89, 18.43]}
      />
      <mesh
        geometry={nodes.achole.geometry}
        material={nodes.achole.material}
        position={[-18.08, 45.32, -7.09]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.achole001.geometry}
        material={nodes.achole001.material}
        position={[-10.66, 45.32, -7.09]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.achole002.geometry}
        material={nodes.achole002.material}
        position={[-18.46, 45.32, 9.33]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.achole003.geometry}
        material={nodes.achole003.material}
        position={[-11.05, 45.32, 9.33]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.achole004.geometry}
        material={nodes.achole004.material}
        position={[15.36, 45.32, 9.33]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.achole005.geometry}
        material={nodes.achole005.material}
        position={[22.78, 45.32, 9.33]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.achole006.geometry}
        material={nodes.achole006.material}
        position={[15.87, 45.32, -7.09]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.achole007.geometry}
        material={nodes.achole007.material}
        position={[23.29, 45.32, -7.09]}
        scale={[22, 15, 13]}
      />
      <mesh
        geometry={nodes.Grid.geometry}
        material={nodes.Grid.material}
        position={[-70.29, 2.73, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 3.1]}
      />
      <mesh
        geometry={nodes.Grid001.geometry}
        material={nodes.Grid001.material}
        position={[-84.89, 2.73, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 3.1]}
      />
      <mesh
        geometry={nodes.Grid002.geometry}
        material={nodes.Grid002.material}
        position={[-84.89, 11.67, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 3.47]}
      />
      <mesh
        geometry={nodes.Grid003.geometry}
        material={nodes.Grid003.material}
        position={[-70.28, 11.67, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 3.47]}
      />
      <mesh
        geometry={nodes.Grid004.geometry}
        material={nodes.Grid004.material}
        position={[-70.28, 20.36, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 3.11]}
      />
      <mesh
        geometry={nodes.Grid005.geometry}
        material={nodes.Grid005.material}
        position={[-84.9, 20.36, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 3.11]}
      />
      <mesh
        geometry={nodes.Grid006.geometry}
        material={nodes.Grid006.material}
        position={[-84.9, 28.26, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 2.67]}
      />
      <mesh
        geometry={nodes.Grid007.geometry}
        material={nodes.Grid007.material}
        position={[-70.28, 28.26, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 2.67]}
      />
      <mesh
        geometry={nodes.Grid008.geometry}
        material={nodes.Grid008.material}
        position={[-70.28, 36.07, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 2.77]}
      />
      <mesh
        geometry={nodes.Grid009.geometry}
        material={nodes.Grid009.material}
        position={[-84.83, 36.07, -23.39]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.44, 1.96, 2.77]}
      />
      <group position={[-44.58, 15.92, -19.44]} scale={[12.77, 8.71, 3.86]}>
        <mesh
          geometry={nodes.Cube015_1.geometry}
          material={nodes.Cube015_1.material}
        />
        <mesh
          geometry={nodes.Cube015_2.geometry}
          material={nodes.Cube015_2.material}
        />
      </group>
      <group position={[-48.27, 15.92, -19.44]} scale={[12.77, 8.71, 3.86]}>
        <mesh
          geometry={nodes.Cube017_1.geometry}
          material={nodes.Cube017_1.material}
        />
        <mesh
          geometry={nodes.Cube017_2.geometry}
          material={nodes.Cube017_2.material}
        />
      </group>
      <group position={[-44.58, 21.21, -19.44]} scale={[12.77, 8.71, 3.86]}>
        <mesh
          geometry={nodes.Cube018_1.geometry}
          material={nodes.Cube018_1.material}
        />
        <mesh
          geometry={nodes.Cube018_2.geometry}
          material={nodes.Cube018_2.material}
        />
      </group>
      <group position={[-48.27, 21.21, -19.44]} scale={[12.77, 8.71, 3.86]}>
        <mesh
          geometry={nodes.Cube019_1.geometry}
          material={nodes.Cube019_1.material}
        />
        <mesh
          geometry={nodes.Cube019_2.geometry}
          material={nodes.Cube019_2.material}
        />
      </group>
      <group position={[-67.8, 9.02, -23.24]} scale={[12.77, 8.71, 3.86]}>
        <mesh
          geometry={nodes.Cube020_1.geometry}
          material={nodes.Cube020_1.material}
        />
        <mesh
          geometry={nodes.Cube020_2.geometry}
          material={nodes.Cube020_2.material}
        />
      </group>
      <group position={[-67.82, 10.49, -23.24]} scale={[12.77, 8.71, 3.86]}>
        <mesh
          geometry={nodes.Cube021_1.geometry}
          material={nodes.Cube021_1.material}
        />
        <mesh
          geometry={nodes.Cube021_2.geometry}
          material={nodes.Cube021_2.material}
        />
      </group>
      <group position={[0, 0, -51.53]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.road} />
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={nodes.Plane003_1.material}
        />
      </group>
      <mesh
        geometry={nodes.Mesh_0.geometry}
        material={nodes.Mesh_0.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0001.geometry}
        material={nodes.Mesh_0001.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0002.geometry}
        material={nodes.Mesh_0002.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0003.geometry}
        material={nodes.Mesh_0003.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0004.geometry}
        material={nodes.Mesh_0004.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0005.geometry}
        material={nodes.Mesh_0005.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0006.geometry}
        material={nodes.Mesh_0006.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0007.geometry}
        material={nodes.Mesh_0007.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0008.geometry}
        material={nodes.Mesh_0008.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Mesh_0009.geometry}
        material={nodes.Mesh_0009.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Plane004_1.geometry}
          material={nodes.Plane004_1.material}
        />
        <mesh
          geometry={nodes.Plane004_2.geometry}
          material={nodes.Plane004_2.material}
        />
        <mesh
          geometry={nodes.Plane004_3.geometry}
          material={materials.BricksPaintedWhite001_3K}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cube_Cube001_1.geometry}
          material={nodes.Cube_Cube001_1.material}
        />
        <mesh
          geometry={nodes.Cube_Cube001_2.geometry}
          material={nodes.Cube_Cube001_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cube001_Cube002_1.geometry}
          material={nodes.Cube001_Cube002_1.material}
        />
        <mesh
          geometry={nodes.Cube001_Cube002_2.geometry}
          material={nodes.Cube001_Cube002_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={nodes.Circle_1.material}
        />
        <mesh
          geometry={nodes.Circle_2.geometry}
          material={nodes.Circle_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={nodes.Circle001_1.material}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={nodes.Circle001_2.material}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={nodes.Circle001_3.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.upper_Plane003_1.geometry}
          material={nodes.upper_Plane003_1.material}
        />
        <mesh
          geometry={nodes.upper_Plane003_2.geometry}
          material={materials["brown.001"]}
        />
        <mesh
          geometry={nodes.upper_Plane003_3.geometry}
          material={materials.black}
        />
        <mesh
          geometry={nodes.upper_Plane003_4.geometry}
          material={materials.white}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cube002_Cube003_1.geometry}
          material={nodes.Cube002_Cube003_1.material}
        />
        <mesh
          geometry={nodes.Cube002_Cube003_2.geometry}
          material={nodes.Cube002_Cube003_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cube003_Cube004_1.geometry}
          material={nodes.Cube003_Cube004_1.material}
        />
        <mesh
          geometry={nodes.Cube003_Cube004_2.geometry}
          material={materials["yellow.001"]}
        />
        <mesh
          geometry={nodes.Cube003_Cube004_3.geometry}
          material={nodes.Cube003_Cube004_3.material}
        />
        <mesh
          geometry={nodes.Cube003_Cube004_4.geometry}
          material={nodes.Cube003_Cube004_4.material}
        />
      </group>
      <mesh
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Cube005_Cube006.geometry}
        material={materials.metal_white}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Circle055.geometry}
        material={nodes.Circle055.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder001_Cylinder003_1.geometry}
          material={nodes.Cylinder001_Cylinder003_1.material}
        />
        <mesh
          geometry={nodes.Cylinder001_Cylinder003_2.geometry}
          material={nodes.Cylinder001_Cylinder003_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder002_Cylinder013_1.geometry}
          material={nodes.Cylinder002_Cylinder013_1.material}
        />
        <mesh
          geometry={nodes.Cylinder002_Cylinder013_2.geometry}
          material={nodes.Cylinder002_Cylinder013_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder003_Cylinder014_1.geometry}
          material={nodes.Cylinder003_Cylinder014_1.material}
        />
        <mesh
          geometry={nodes.Cylinder003_Cylinder014_2.geometry}
          material={nodes.Cylinder003_Cylinder014_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder004_Cylinder015_1.geometry}
          material={nodes.Cylinder004_Cylinder015_1.material}
        />
        <mesh
          geometry={nodes.Cylinder004_Cylinder015_2.geometry}
          material={nodes.Cylinder004_Cylinder015_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder005_Cylinder016_1.geometry}
          material={materials.brown}
        />
        <mesh
          geometry={nodes.Cylinder005_Cylinder016_2.geometry}
          material={nodes.Cylinder005_Cylinder016_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder006_Cylinder017_1.geometry}
          material={nodes.Cylinder006_Cylinder017_1.material}
        />
        <mesh
          geometry={nodes.Cylinder006_Cylinder017_2.geometry}
          material={nodes.Cylinder006_Cylinder017_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder007_Cylinder018_1.geometry}
          material={nodes.Cylinder007_Cylinder018_1.material}
        />
        <mesh
          geometry={nodes.Cylinder007_Cylinder018_2.geometry}
          material={nodes.Cylinder007_Cylinder018_2.material}
        />
      </group>
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.Cylinder008_Cylinder019_1.geometry}
          material={nodes.Cylinder008_Cylinder019_1.material}
        />
        <mesh
          geometry={nodes.Cylinder008_Cylinder019_2.geometry}
          material={nodes.Cylinder008_Cylinder019_2.material}
        />
      </group>
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials["Material.002"]}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Stairs_Stairs001.geometry}
        material={materials.Stairs_material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.WindowL_1.geometry}
          material={nodes.WindowL_1.material}
        />
        <mesh
          geometry={nodes.WindowL_2.geometry}
          material={nodes.WindowL_2.material}
        />
      </group>
      <mesh
        geometry={nodes.Handle.geometry}
        material={nodes.Handle.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <group
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      >
        <mesh
          geometry={nodes.WindowR_1.geometry}
          material={nodes.WindowR_1.material}
        />
        <mesh
          geometry={nodes.WindowR_2.geometry}
          material={nodes.WindowR_2.material}
        />
      </group>
      <mesh
        geometry={nodes.Handle001.geometry}
        material={nodes.Handle001.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Windows_Sill.geometry}
        material={materials.Sill_material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.CTRL_Hole.geometry}
        material={materials.hidden_material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Cube004_Cube005.geometry}
        material={materials.None}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Stairs001_Stairs002.geometry}
        material={nodes.Stairs001_Stairs002.material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported"].geometry}
        material={nodes["m31-5kexported"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported001"].geometry}
        material={nodes["m31-5kexported001"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported002"].geometry}
        material={nodes["m31-5kexported002"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported003"].geometry}
        material={nodes["m31-5kexported003"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported004"].geometry}
        material={nodes["m31-5kexported004"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported005"].geometry}
        material={nodes["m31-5kexported005"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported006"].geometry}
        material={nodes["m31-5kexported006"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported007"].geometry}
        material={nodes["m31-5kexported007"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported008"].geometry}
        material={nodes["m31-5kexported008"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported009"].geometry}
        material={nodes["m31-5kexported009"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported010"].geometry}
        material={nodes["m31-5kexported010"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported011"].geometry}
        material={nodes["m31-5kexported011"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported012"].geometry}
        material={nodes["m31-5kexported012"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported013"].geometry}
        material={nodes["m31-5kexported013"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported014"].geometry}
        material={nodes["m31-5kexported014"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported015"].geometry}
        material={nodes["m31-5kexported015"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported016"].geometry}
        material={nodes["m31-5kexported016"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported017"].geometry}
        material={nodes["m31-5kexported017"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes["m31-5kexported018"].geometry}
        material={nodes["m31-5kexported018"].material}
        position={[262.93, 1.89, 12.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.81}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[92.54, 0.83, 159.31]}
        rotation={[0, -0.1, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[89.02, 0.83, 200.66]}
        rotation={[0, -0.1, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[112.63, 0.83, 177.57]}
        rotation={[Math.PI, -0.1, Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[233.67, 0.83, -16.37]}
        rotation={[0, -1.56, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[242.79, 0.83, -16.37]}
        rotation={[0, -1.56, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[251.86, 0.83, -16.37]}
        rotation={[0, -1.56, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[234.2, 0.83, 43.24]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[111.41, 0.83, 42.78]}
        rotation={[Math.PI, -0.01, Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[111.41, 0.83, 52.02]}
        rotation={[Math.PI, -0.01, Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[93.37, 0.83, 83.55]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[93.37, 0.83, 92.79]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[245.61, 0.83, 131.91]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[245.61, 0.83, 141.15]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[278.11, 0.83, 170.42]}
        rotation={[-Math.PI, -0.01, -Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[278.11, 0.83, 179.66]}
        rotation={[-Math.PI, -0.01, -Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[366.92, 0.83, 77.33]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[366.92, 0.83, 86.57]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[366.92, 0.83, 251.44]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[366.92, 0.83, 260.68]}
        rotation={[0, 0.01, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[238.38, 0.83, 249.5]}
        rotation={[0, -0.39, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[234.99, 0.83, 258.35]}
        rotation={[0, -0.39, 0]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={nodes.Cube022.material}
        position={[266.3, 0.83, 266.98]}
        rotation={[-Math.PI, 0.39, -Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
      <mesh
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[262.9, 0.83, 275.83]}
        rotation={[-Math.PI, 0.39, -Math.PI]}
        scale={[1, 0.33, 4.28]}
      />
    </group>
  );
}

useGLTF.preload("/compressed_withoutgrass.glb");
