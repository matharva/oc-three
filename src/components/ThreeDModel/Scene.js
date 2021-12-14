/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/laptop-free-a651092825974fc5a405129d4f50a7d2
title: Laptop (FREE)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[133.66, 0, -42.45]} rotation={[-Math.PI / 2, 0, -0.35]}>
            <mesh geometry={nodes.Cube000_Laptop_0.geometry} material={nodes.Cube000_Laptop_0.material} />
          </group>
          <group position={[-88.87, 0, 54.17]} rotation={[-Math.PI / 2, 0, 0.41]}>
            <mesh geometry={nodes.Cube002_Laptop_0.geometry} material={nodes.Cube002_Laptop_0.material} />
            <mesh geometry={nodes.Cube002_Keys_0.geometry} material={materials.Keys} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')