/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ zoomToView }) {
  const group = useRef();
  const group2 = useRef();
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   // group.current.rotation.y += 0.02;
  //   group.current.rotation.x = 0;
  //   group.current.rotation.y += 0.002;
  //   // ref.current.rotation.x = Math.cos(t / 4) / 8;
  //   // ref.current.rotation.y = Math.sin(t / 4) / 8;
  //   // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });
  const { nodes, materials } = useGLTF("/man.glb");
  return (
    <>
      <group
        ref={group}
        dispose={null}
        position={[-10, 0, 0]}
        // onClick={(e) => {
        //   console.log(e.object.position);
        //   zoomToView(e.object.position);
        // }}
      >
        {/* <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        onClick={(e) => {
          console.log(e.object.position);
          zoomToView(e.object.position);
        }}
      /> */}
        <mesh
          position={[0, 0, 5]}
          // onClick={(e) => zoomToView(e.object.position)}
        >
          <boxGeometry args={[0.1, 0.08, 0.003]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh
          geometry={nodes.Mesh_0.geometry}
          material={nodes.Mesh_0.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0001.geometry}
          material={nodes.Mesh_0001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0002.geometry}
          material={nodes.Mesh_0002.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0003.geometry}
          material={nodes.Mesh_0003.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0004.geometry}
          material={nodes.Mesh_0004.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0005.geometry}
          material={nodes.Mesh_0005.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0006.geometry}
          material={nodes.Mesh_0006.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0007.geometry}
          material={nodes.Mesh_0007.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0008.geometry}
          material={nodes.Mesh_0008.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0009.geometry}
          material={nodes.Mesh_0009.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane_1.geometry}
            material={nodes.Plane_1.material}
          />
          <mesh
            geometry={nodes.Plane_2.geometry}
            material={nodes.Plane_2.material}
          />
          <mesh
            geometry={nodes.Plane_3.geometry}
            material={materials.BricksPaintedWhite001_3K}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube_Cube001_1.geometry}
            material={nodes.Cube_Cube001_1.material}
          />
          <mesh
            geometry={nodes.Cube_Cube001_2.geometry}
            material={nodes.Cube_Cube001_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube001_Cube002_1.geometry}
            material={nodes.Cube001_Cube002_1.material}
          />
          <mesh
            geometry={nodes.Cube001_Cube002_2.geometry}
            material={nodes.Cube001_Cube002_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Circle_1.geometry}
            material={nodes.Circle_1.material}
          />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={nodes.Circle_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          rotation={[Math.PI / 2, 0, 0]}
          onClick={() => console.log("gfdgfdsgfgsgfg")}
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
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube002_Cube003_1.geometry}
            material={nodes.Cube002_Cube003_1.material}
          />
          <mesh
            geometry={nodes.Cube002_Cube003_2.geometry}
            material={nodes.Cube002_Cube003_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube003_Cube004_1.geometry}
            material={nodes.Cube003_Cube004_1.material}
          />
          <mesh
            geometry={nodes.Cube003_Cube004_2.geometry}
            material={materials.yellow}
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
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube005_Cube006.geometry}
          material={materials.metal_white}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Circle055.geometry}
          material={nodes.Circle055.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder001_Cylinder003_1.geometry}
            material={nodes.Cylinder001_Cylinder003_1.material}
          />
          <mesh
            geometry={nodes.Cylinder001_Cylinder003_2.geometry}
            material={nodes.Cylinder001_Cylinder003_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder002_Cylinder013_1.geometry}
            material={nodes.Cylinder002_Cylinder013_1.material}
          />
          <mesh
            geometry={nodes.Cylinder002_Cylinder013_2.geometry}
            material={nodes.Cylinder002_Cylinder013_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder003_Cylinder014_1.geometry}
            material={nodes.Cylinder003_Cylinder014_1.material}
          />
          <mesh
            geometry={nodes.Cylinder003_Cylinder014_2.geometry}
            material={nodes.Cylinder003_Cylinder014_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder004_Cylinder015_1.geometry}
            material={nodes.Cylinder004_Cylinder015_1.material}
          />
          <mesh
            geometry={nodes.Cylinder004_Cylinder015_2.geometry}
            material={nodes.Cylinder004_Cylinder015_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder005_Cylinder016_1.geometry}
            material={materials.brown}
          />
          <mesh
            geometry={nodes.Cylinder005_Cylinder016_2.geometry}
            material={nodes.Cylinder005_Cylinder016_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder006_Cylinder017_1.geometry}
            material={nodes.Cylinder006_Cylinder017_1.material}
          />
          <mesh
            geometry={nodes.Cylinder006_Cylinder017_2.geometry}
            material={nodes.Cylinder006_Cylinder017_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder007_Cylinder018_1.geometry}
            material={nodes.Cylinder007_Cylinder018_1.material}
          />
          <mesh
            geometry={nodes.Cylinder007_Cylinder018_2.geometry}
            material={nodes.Cylinder007_Cylinder018_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Stairs_Stairs001.geometry}
          material={materials.Stairs_material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Windows_Sill.geometry}
          material={materials.Sill_material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.CTRL_Hole.geometry}
          material={materials.hidden_material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube004_Cube005.geometry}
          material={materials.None}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Stairs001_Stairs002.geometry}
          material={nodes.Stairs001_Stairs002.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported"].geometry}
          material={nodes["m31-5kexported"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported001"].geometry}
          material={nodes["m31-5kexported001"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported002"].geometry}
          material={nodes["m31-5kexported002"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported003"].geometry}
          material={nodes["m31-5kexported003"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported004"].geometry}
          material={nodes["m31-5kexported004"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported005"].geometry}
          material={nodes["m31-5kexported005"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported006"].geometry}
          material={nodes["m31-5kexported006"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported007"].geometry}
          material={nodes["m31-5kexported007"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported008"].geometry}
          material={nodes["m31-5kexported008"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported009"].geometry}
          material={nodes["m31-5kexported009"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported010"].geometry}
          material={nodes["m31-5kexported010"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported011"].geometry}
          material={nodes["m31-5kexported011"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported012"].geometry}
          material={nodes["m31-5kexported012"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported013"].geometry}
          material={nodes["m31-5kexported013"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported014"].geometry}
          material={nodes["m31-5kexported014"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported015"].geometry}
          material={nodes["m31-5kexported015"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported016"].geometry}
          material={nodes["m31-5kexported016"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported017"].geometry}
          material={nodes["m31-5kexported017"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported018"].geometry}
          material={nodes["m31-5kexported018"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        ref={group2}
        dispose={null}
        position={[0, 0, 30]}
        onClick={(e) => {
          console.log("Second: ", e.object.scale, e);
          zoomToView(e.object.position);
        }}
        scale={[2, 2, 2]}
      >
        {/* <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        onClick={(e) => {
          console.log(e.object.position);
          zoomToView(e.object.position);
        }}
      /> */}
        <mesh
          position={[0, 0, 5]}
          // onClick={(e) => zoomToView(e.object.position)}
        >
          <boxGeometry args={[0.1, 0.08, 0.003]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh
          geometry={nodes.Mesh_0.geometry}
          material={nodes.Mesh_0.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0001.geometry}
          material={nodes.Mesh_0001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0002.geometry}
          material={nodes.Mesh_0002.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0003.geometry}
          material={nodes.Mesh_0003.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0004.geometry}
          material={nodes.Mesh_0004.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0005.geometry}
          material={nodes.Mesh_0005.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0006.geometry}
          material={nodes.Mesh_0006.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0007.geometry}
          material={nodes.Mesh_0007.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0008.geometry}
          material={nodes.Mesh_0008.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Mesh_0009.geometry}
          material={nodes.Mesh_0009.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane_1.geometry}
            material={nodes.Plane_1.material}
          />
          <mesh
            geometry={nodes.Plane_2.geometry}
            material={nodes.Plane_2.material}
          />
          <mesh
            geometry={nodes.Plane_3.geometry}
            material={materials.BricksPaintedWhite001_3K}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube_Cube001_1.geometry}
            material={nodes.Cube_Cube001_1.material}
          />
          <mesh
            geometry={nodes.Cube_Cube001_2.geometry}
            material={nodes.Cube_Cube001_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube001_Cube002_1.geometry}
            material={nodes.Cube001_Cube002_1.material}
          />
          <mesh
            geometry={nodes.Cube001_Cube002_2.geometry}
            material={nodes.Cube001_Cube002_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Circle_1.geometry}
            material={nodes.Circle_1.material}
          />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={nodes.Circle_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          rotation={[Math.PI / 2, 0, 0]}
          onClick={() => console.log("gfdgfdsgfgsgfg")}
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
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube002_Cube003_1.geometry}
            material={nodes.Cube002_Cube003_1.material}
          />
          <mesh
            geometry={nodes.Cube002_Cube003_2.geometry}
            material={nodes.Cube002_Cube003_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube003_Cube004_1.geometry}
            material={nodes.Cube003_Cube004_1.material}
          />
          <mesh
            geometry={nodes.Cube003_Cube004_2.geometry}
            material={materials.yellow}
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
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube005_Cube006.geometry}
          material={materials.metal_white}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Circle055.geometry}
          material={nodes.Circle055.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder001_Cylinder003_1.geometry}
            material={nodes.Cylinder001_Cylinder003_1.material}
          />
          <mesh
            geometry={nodes.Cylinder001_Cylinder003_2.geometry}
            material={nodes.Cylinder001_Cylinder003_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder002_Cylinder013_1.geometry}
            material={nodes.Cylinder002_Cylinder013_1.material}
          />
          <mesh
            geometry={nodes.Cylinder002_Cylinder013_2.geometry}
            material={nodes.Cylinder002_Cylinder013_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder003_Cylinder014_1.geometry}
            material={nodes.Cylinder003_Cylinder014_1.material}
          />
          <mesh
            geometry={nodes.Cylinder003_Cylinder014_2.geometry}
            material={nodes.Cylinder003_Cylinder014_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder004_Cylinder015_1.geometry}
            material={nodes.Cylinder004_Cylinder015_1.material}
          />
          <mesh
            geometry={nodes.Cylinder004_Cylinder015_2.geometry}
            material={nodes.Cylinder004_Cylinder015_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder005_Cylinder016_1.geometry}
            material={materials.brown}
          />
          <mesh
            geometry={nodes.Cylinder005_Cylinder016_2.geometry}
            material={nodes.Cylinder005_Cylinder016_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder006_Cylinder017_1.geometry}
            material={nodes.Cylinder006_Cylinder017_1.material}
          />
          <mesh
            geometry={nodes.Cylinder006_Cylinder017_2.geometry}
            material={nodes.Cylinder006_Cylinder017_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder007_Cylinder018_1.geometry}
            material={nodes.Cylinder007_Cylinder018_1.material}
          />
          <mesh
            geometry={nodes.Cylinder007_Cylinder018_2.geometry}
            material={nodes.Cylinder007_Cylinder018_2.material}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Stairs_Stairs001.geometry}
          material={materials.Stairs_material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
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
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Windows_Sill.geometry}
          material={materials.Sill_material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.CTRL_Hole.geometry}
          material={materials.hidden_material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube004_Cube005.geometry}
          material={materials.None}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Stairs001_Stairs002.geometry}
          material={nodes.Stairs001_Stairs002.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported"].geometry}
          material={nodes["m31-5kexported"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported001"].geometry}
          material={nodes["m31-5kexported001"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported002"].geometry}
          material={nodes["m31-5kexported002"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported003"].geometry}
          material={nodes["m31-5kexported003"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported004"].geometry}
          material={nodes["m31-5kexported004"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported005"].geometry}
          material={nodes["m31-5kexported005"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported006"].geometry}
          material={nodes["m31-5kexported006"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported007"].geometry}
          material={nodes["m31-5kexported007"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported008"].geometry}
          material={nodes["m31-5kexported008"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported009"].geometry}
          material={nodes["m31-5kexported009"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported010"].geometry}
          material={nodes["m31-5kexported010"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported011"].geometry}
          material={nodes["m31-5kexported011"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported012"].geometry}
          material={nodes["m31-5kexported012"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported013"].geometry}
          material={nodes["m31-5kexported013"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported014"].geometry}
          material={nodes["m31-5kexported014"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported015"].geometry}
          material={nodes["m31-5kexported015"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported016"].geometry}
          material={nodes["m31-5kexported016"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported017"].geometry}
          material={nodes["m31-5kexported017"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["m31-5kexported018"].geometry}
          material={nodes["m31-5kexported018"].material}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/man.glb");
