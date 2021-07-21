/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3dcode-right-arrow.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Text002.geometry} material={materials.cw_blink} />
    </group>
  )
}

useGLTF.preload('/3dcode-right-arrow.gltf')
