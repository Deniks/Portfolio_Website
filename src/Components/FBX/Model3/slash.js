/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/3DModels/3dcode-slash.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Text001.geometry}
        material={materials['Material.001']}
        position={[0, 0, 25]}
      />
    </group>
  );
}

useGLTF.preload('/3DModels/3dcode-slash.gltf');
