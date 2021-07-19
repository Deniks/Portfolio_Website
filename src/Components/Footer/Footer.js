import React from 'react';

import { Text, Box } from 'grommet';

export function Footer() {
  return (
    <Box align="center" justify="end" fill>
      <Box align="center">
        <Text color="#a9a9a9">rezanovich.denis@gmail.com</Text>
        <Text color="#a9a9a9">+371 27739868</Text>
      </Box>
      <Text style={{ fontSize: '10pt' }} color="#8f9aa7">
        © 2021 Deniss Rezanovics made in Latvia
      </Text>
    </Box>
  );
}
