import React, { useState, useRef, Suspense } from 'react'

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Sky, useFBX } from "@react-three/drei";

import BoxMesh from "../BoxMesh";

const style = {
    position: "absolute",
    width: "100vw",
    height: "100vh",

};


export function InteractiveBackground() {

    const model1 = useFBX('/3d-logo.fbx');

    return (
        <div style={style}>
        <Canvas>
        <Suspense fallback={null}>
                    <Sky layers={[11]} sunPosition={[Math.PI, 0, Math.PI / 2]} turbidity={8} rayleigh={6} mieCoefficient={0.0005} mieDirectionalG={0.8} />
                    <primitive object={model1} disp/>
                    <BoxMesh position={[-3, 0, 0]} />
                    <BoxMesh position={[3, 0, 0]} />

                    <OrbitControls />
                    <ambientLight />
        </Suspense>
      </Canvas>
        </div>

    )
}
