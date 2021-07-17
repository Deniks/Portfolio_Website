import React, { useState, useRef, Suspense } from 'react'

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Environment, SpotLight } from "@react-three/drei";

import Model1 from '../FBX/Model1';
import Model2 from '../FBX/Model2';


export function InteractiveBackground() {
    const myCamera = useRef();

    return (
        <div style={{height: "600px"}}>
        <Canvas>
                <Suspense fallback={null}>
                        <Model1 />
                    <SpotLight intensity={1} />
                    <OrbitControls/>
        </Suspense>
      </Canvas>
        </div>

    )
}
