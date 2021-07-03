import React, {useRef} from 'react';

import { useGLTF } from '@react-three/drei';

export function Model1(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/denix_logo.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['CW-Plastic- matte']} position={[0, 0.01, 0]} />
      <mesh geometry={nodes.Text.geometry} material={materials['CP-Ferrari Red']} position={[-0.6, 0.19, 0]} />
    </group>
  )
}

useGLTF.preload('/denix_logo.gltf')
