import * as THREE from 'three';
import React, {
  Suspense,
  useState,
  useEffect,
  useRef,
  useMemo,
  useContext,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/three';
import Text from './Text';
import Effects from './Effects';
import Sparks from './Sparks';
import Particles from './Particles';
import { Box } from 'grommet';
import { useControls } from 'leva';
import { Flex, Box as FLBox } from '@react-three/flex';
import './styles.css';
import Model1 from '../FBX/Model1';
import Model2 from '../FBX/Model2';
import Model3 from '../FBX/Model3/leftArrow';
import Model4 from '../FBX/Model3/rightArrow';
import Model5 from '../FBX/Model3/slash';
import OpenTagModel from '../FBX/Model3/openTag';
import CloseTagModel from '../FBX/Model3/closeTag';
import { useStore } from '../VPButton/store';

import { useLocation } from 'react-router';
import Cursor from '../Cursor';
import { props } from 'bluebird';

export function EpicBackground() {
  const projectButtonIsHovered = useStore((state) => state.isHovered);

  const { pointLightX, pointLightY, pointLightZ, tagRotation } = useControls({
    pointLightX: 10,
    pointLightY: 100,
    pointLightZ: 100,
    tagRotation: 0,
  });
  const [hovered, hover] = useState(false);
  const mouse = useRef([0, 0]);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const { pathname } = useLocation();

  const { spring } = useSpring({
    spring: pathname === '/projects',
  });

  const modelPosition = spring.to([0, 1], [0, -5]);
  useEffect(() => {
    console.log(pathname);
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
          intensity={projectButtonIsHovered ? 7.5 : 1}
          color={'white'}
        />

        <Flex
          flexDirection="row"
          flexWrap="wrap"
          plane="xy"
          size={[10, 10, 0]}
          position={[-5, pathname === '/projects' ? 12 : 4, 0]}
          justifyContent="space-between"
          alignContent="space-between"
        >
          <OpenTagModel rotation={[tagRotation, tagRotation, tagRotation]} />
          <CloseTagModel marginTop={5} />
        </Flex>

        <Particles count={isMobile ? 600 : 5000} mouse={mouse} />
        <Effects />
      </Canvas>
    </Box>
  );
}
