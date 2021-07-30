import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import { Box } from 'grommet';
// import { useControls } from 'leva';
import { Flex } from '@react-three/flex';

import Effects from './Effects';
import OpenTagModel from '../FBX/Model3/openTag';
import CloseTagModel from '../FBX/Model3/closeTag';
import { useStore } from '../VPButton/store';

import { useLocation, useRouteMatch } from 'react-router-dom';
import Robot404 from '../FBX/Robot404';
import { useControls } from 'leva';
import {
  PerspectiveCamera,
  CameraShake,
  OrbitControls,
} from '@react-three/drei';
export function EpicBackground() {
  const mainButtonIsHovered = useStore((state) => state.isHovered);
  const mainButtonColor = useStore((state) => state.buttonColor);

  const {
    pointLightX,
    pointLightY,
    pointLightZ,
    lightIntensityManual,
    cameraX,
    cameraY,
    cameraZ,
    fov,
  } = useControls({
    pointLightX: 10,
    pointLightY: 100,
    pointLightZ: 100,
    lightIntensityManual: 1,
    cameraX: 0,
    cameraY: 1,
    cameraZ: 40,
    fov: 40,
  });
  const mouse = useRef([0, 0]);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [lightIntensity, setLightIntensity] = useState(1000);
  const [lightColor, setLightColor] = useState();
  const [pointLightPosition, setPointLightPosition] = useState([]);
  const [sceneCameraPosition, setSceneCameraPosition] = useState([0, 1, 40]);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isPageUndefined = useRouteMatch('/page-not-found');

  const sceneCamera = useRef();
  const OrbitControlsRef = useRef();

  useEffect(() => {
    if (mainButtonIsHovered && isHomePage) {
      // home page
      setLightIntensity(7.5);
      setLightColor(mainButtonColor);
    } else {
      setLightIntensity(2);
      setLightColor('white');
    }
    if (isPageUndefined) {
      setPointLightPosition([45, 70, 55]);
      setLightIntensity(2.5);
    } else {
      setPointLightPosition([10, 100, 100]);
    }
  });
  return (
    <Box fill>
      <Canvas
        linear
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.setClearColor(new THREE.Color('#020207'));
        }}
      >
        <fog attach="fog" args={['white', 50, 190]} />
        <pointLight
          position={pointLightPosition}
          intensity={lightIntensity}
          color={lightColor}
        />
        <PerspectiveCamera
          fov={fov}
          makeDefault
          position={sceneCameraPosition}
          ref={sceneCamera}
        />
        <OrbitControls ref={OrbitControlsRef} camera={sceneCamera.current} />
        <CameraShake intensity={0.3} controls={OrbitControlsRef.current} />
        {isPageUndefined && (
          <Flex position={[0, 2, 25]}>
            <Robot404 />
          </Flex>
        )}
        {isHomePage ? (
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            plane="xy"
            size={[!isMobile ? 5 : 10, 10, 0]}
            position={[!isMobile ? -2.5 : -5, isMobile ? 3.5 : 4, 5]}
            justifyContent={isMobile ? 'center' : 'space-between'}
            alignContent="space-between"
          >
            <OpenTagModel />
            <CloseTagModel marginTop={5} />
          </Flex>
        ) : null}

        <Particles count={isMobile ? 1600 : 5000} mouse={mouse} />
        <Effects />
      </Canvas>
    </Box>
  );
}
