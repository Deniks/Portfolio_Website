import React from 'react';

import { Text, Box } from 'grommet';
import { StyledLink } from './Styles/StyledLink';
const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
};
export function Footer() {
  return (
    <Box align="center" justify="end" fill>
      <Box align="center">
        <StyledLink href="tel: +371 27739868">+371 27739868</StyledLink>
      </Box>
      <Box align="center">
        <StyledLink href="mailto: deniss.rezanovics@gmail.com">
          deniss.rezanovics@gmail.com
        </StyledLink>
      </Box>
      <Text style={{ fontSize: '11pt' }} color="#8f9aa7">
        © 2021 Deniss Rezanovics made in Latvia
      </Text>
    </Box>
  );
}
