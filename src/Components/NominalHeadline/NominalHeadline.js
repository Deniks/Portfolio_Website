import React from 'react';

import { Link } from 'react-router-dom';

import { Box, Heading } from 'grommet';
import VPButton from '../VPButton';
import DebitAnimation from '../DebitAnimation';

export default function NominalHeadline() {
  return (
    <Box align="center" fill>
      <DebitAnimation delay={350}>
        <Heading margin="none" style={{ fontWeight: 'bold' }}>
          Hi, I'm Deniss
        </Heading>
      </DebitAnimation>

      <DebitAnimation delay={700}>
        <Heading level={3} margin="none">
          I develop full-stack desktop software, websites and mobile
          applications
        </Heading>
      </DebitAnimation>

      <Box margin="large">
        <Link to="/projects">
          <DebitAnimation delay={1300}>
            <VPButton />
          </DebitAnimation>
        </Link>
      </Box>
    </Box>
  );
}
