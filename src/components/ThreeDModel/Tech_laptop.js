/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tech_laptop.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-88.87, 0, 54.17]} rotation={[-Math.PI / 2, 0, 0.41]}>
            <mesh geometry={nodes.Cube002_Keys_0.geometry} material={materials.Keys} />
            <mesh geometry={nodes.Cube002_Laptop_0.geometry} material={materials.Laptop} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tech_laptop.glb')
