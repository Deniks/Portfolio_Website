import * as THREE from 'three';
import React, { Suspense, useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Text from './Text';
import Effects from './Effects';
import Sparks from './Sparks';
import Particles from './Particles';
import { Box } from 'grommet';
import { useControls } from 'leva';
import './styles.css';
import Model1 from '../FBX/Model1';
import Model2 from '../FBX/Model2';
import Model3 from '../FBX/Model3/leftArrow';
import Model4 from '../FBX/Model3/rightArrow';
import Model5 from '../FBX/Model3/slash';

import Cursor from '../Cursor';

function Ellipse(props) {
  const geometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 10, 3, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(50);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);
  return (
    <line geometry={geometry} {...props}>
      <meshBasicMaterial />
    </line>
  );
}

function ReactAtom(props) {
  return (
    <group {...props}>
      <Ellipse />
      <Ellipse rotation={[0, 0, Math.PI / 3]} />
      <Ellipse rotation={[0, 0, -Math.PI / 3]} />
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </group>
  );
}

function Number({ hover }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = THREE.MathUtils.lerp(
        ref.current.position.x,
        state.mouse.x * 2,
        0.1
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        state.mouse.y / 2,
        0.1
      );
      ref.current.rotation.y = 0.8;
    }
  });
  return (
    <Suspense fallback={null}>
      <group ref={ref}>
        <Text
          size={7}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          4
        </Text>
        <ReactAtom position={[35, -20, 0]} scale={[1, 0.5, 1]} />
      </group>
    </Suspense>
  );
}

export function EpicBackground() {
  const { pointLightX, pointLightY, pointLightZ, pointLightIntentsity } =
    useControls({
      pointLightX: 10,
      pointLightY: 100,
      pointLightZ: 100,
      pointLightIntentsity: 1,
    });

  const [hovered, hover] = useState(false);
  const mouse = useRef([0, 0]);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : console.log('hovered');
  }, [hovered]);

  return (
    <Box fill>
      <Canvas
        linear
        dpr={[1, 2]}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.setClearColor(new THREE.Color('#020207'));
        }}
      >
        <fog attach="fog" args={['white', 50, 190]} />
        <pointLight
          position={[pointLightX, pointLightY, pointLightZ]}
          intensity={pointLightIntentsity}
          color="white"
        />
        <Model3 />
        <Model4 />
        <Model5 />
        <Particles count={isMobile ? 5000 : 600} mouse={mouse} />
        <Effects />
      </Canvas>
    </Box>
  );
}
