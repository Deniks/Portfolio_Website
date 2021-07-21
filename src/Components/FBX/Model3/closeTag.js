import { Box } from '@react-three/flex';
import React from 'react';

import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';
import Slash from './slash';

export default function closeTag(props) {
  return (
    <Box centerAnchor {...props}>
      <LeftArrow />
      <Slash />
      <RightArrow />
    </Box>
  );
}
