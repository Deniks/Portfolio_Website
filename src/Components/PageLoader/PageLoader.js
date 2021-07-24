import React from 'react';

import { Box, Spinner } from 'grommet';

export const PageLoader = () => {
  return (
    <Box
      style={{ height: '100vh', width: '100vw' }}
      justify="center"
      alignContent="center"
      align="center"
      alignSelf="center"
    >
      <Spinner />
      Loading
    </Box>
  );
};
