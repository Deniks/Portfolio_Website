import React, { useState, useRef } from 'react'

import { useGLTF } from "@react-three/drei";

import { useSpring, animated } from '@react-spring/three'
import { useGesture } from "react-use-gesture";


export function Model2(props) {
    const [isHovered, setHover] = useState(false);
    const { scale } = useSpring({ scale: isHovered ? 5.5 : 1 })

    useGesture({
        onMouseOver: ({ down, offset: [x, y],  }) => {
            setHover(down)
        }
    });
    const group = useRef()
    const { nodes, materials } = useGLTF('/shape01.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
            <animated.mesh
                onClick={() => setHover(true)}
                scale={scale}
                geometry={nodes.Cube001.geometry}
                material={materials['CW-Gunmetal']}   />
      </group>
    )
  }
  
  useGLTF.preload('/shape01.gltf')