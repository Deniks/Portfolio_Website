import React from 'react';
import { Box, Spinner } from 'grommet';

export const ImageLoader = () => {
  return (
    <Box
      justify="center"
      alignContent="center"
      align="center"
      alignSelf="center"
      style={{ height: '200px' }}
    >
      <Spinner />
    </Box>
  );
};
