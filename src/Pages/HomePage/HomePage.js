import React from 'react';
import EpicBackground from '../../Components/EpicBackground';

import InteractiveBackground from '../../Components/InteractiveBackground';
import NominalHeadline from '../../Components/NominalHeadline';

import { Box } from 'grommet';

export function HomePage() {
  return (
    <Box style={{ marginTop: '20vh' }}>
      <NominalHeadline />
    </Box>
  );
}
