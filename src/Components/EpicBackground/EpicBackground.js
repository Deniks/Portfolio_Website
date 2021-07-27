import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import { Box } from 'grommet';
// import { useControls } from 'leva';
import { Flex } from '@react-three/flex';

import Effects from './Effects';
import OpenTagModel from '../FBX/Model3/openTag';
import CloseTagModel from '../FBX/Model3/closeTag';
import { useStore } from '../VPButton/store';

import { useLocation } from 'react-router';

export function EpicBackground() {
  const mainButtonIsHovered = useStore((state) => state.isHovered);
  const mainButtonColor = useStore((state) => state.buttonColor);

  // const { pointLightX, pointLightY, pointLightZ, tagRotation } = useControls({
  //   pointLightX: 10,
  //   pointLightY: 100,
  //   pointLightZ: 100,
  //   tagRotation: 0,
  // });
  const mouse = useRef([0, 0]);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

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
          position={[10, 100, 100]}
          intensity={mainButtonIsHovered ? 7.5 : 1}
          color={mainButtonIsHovered ? mainButtonColor : 'white'}
        />
        {isHomePage ? (
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            plane="xy"
            size={[10, 10, 0]}
            position={[-5, isMobile ? 3.5 : 4, 0]}
            justifyContent={isMobile ? 'center' : 'space-between'}
            alignContent="space-between"
          >
            <OpenTagModel />
            <CloseTagModel marginTop={isMobile ? 6.5 : 5} />
          </Flex>
        ) : null}

        <Particles count={isMobile ? 1600 : 5000} mouse={mouse} />
        <Effects />
      </Canvas>
    </Box>
  );
}
