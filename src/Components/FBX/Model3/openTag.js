import { Box } from '@react-three/flex';
import React from 'react';

import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';

export default function openTag(props) {
  return (
    <Box centerAnchor {...props}>
      <LeftArrow />
      <RightArrow />
    </Box>
  );
}
