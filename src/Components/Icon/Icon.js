import React from 'react';

import { Box } from 'grommet';

export function Icon({ src }) {
  return (
    <Box>
      <img
        style={{ width: 'auto', height: '24px' }}
        src={src}
        alt="technology logo"
      />
    </Box>
  );
}
