import React from 'react';

import { Text, Box } from 'grommet';
const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
};
export function Footer() {
  return (
    <Box align="center" justify="end" fill>
      <Box align="center">
        <a href="tel: +371 27739868" style={linkStyle}>
          <Text color="#8f9aa7">+371 27739868</Text>
        </a>
      </Box>
      <Box align="center">
        <a href="mailto: deniss.rezanovics@gmail.com" style={linkStyle}>
          <Text color="#8f9aa7">deniss.rezanovics@gmail.com</Text>
        </a>
      </Box>
      <Text style={{ fontSize: '11pt' }} color="#8f9aa7">
        © 2021 Deniss Rezanovics made in Latvia
      </Text>
    </Box>
  );
}
