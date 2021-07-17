import React, {useRef} from 'react';

import { useGLTF } from '@react-three/drei';

export function Model1(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shape01.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Text003.geometry} material={materials['CP-Ferrari Red']} position={[0,0,25]} />
    </group>
  )
}

useGLTF.preload('/shape01.gltf')
