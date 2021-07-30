import React from 'react';

import { Link } from 'react-router-dom';

import { Box, Heading } from 'grommet';
import VPButton from '../VPButton';
import DebitAnimation from '../DebitAnimation';
export default function NominalHeadline() {
  return (
    <Box align="center" fill>
      <DebitAnimation delay={450}>
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

      <Box margin="large" gap="medium" style={{ textAlign: 'center' }}>
        <Box>
          <Link to="/projects">
            <DebitAnimation delay={1300}>
              <VPButton color="#e0e5ec" text="View Projects" />
            </DebitAnimation>
          </Link>
        </Box>

        <Box>
          <Link to="/resume" target="_blank" rel="noopener noreferrer">
            <DebitAnimation delay={1900}>
              <VPButton
                color="#FFD64D"
                borderColor="#F4CC70"
                text="Open Resume"
              />
            </DebitAnimation>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

//D09683
//F4CC70
//FFBB00
//E6DF44
//FFD64D
