/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Robot404(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/3DModels/3dbot404.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -3.07, 0]}>
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials.sy_steel_mat}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials['CW-Plastic-Dapple']}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={materials.sy_red_matte}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/3DModels/3dbot404.gltf');
