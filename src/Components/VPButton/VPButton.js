import React from 'react';

import { Button, Box } from 'grommet';

import { FormNextLink } from 'grommet-icons';
import { StyledButton } from './StyledButton';
import { StyledIcon } from './StyledIcon';

export function VPButton() {
  return (
    <StyledButton>
      <Box
        style={{ alignItems: 'center' }}
        direction="row"
        alignContent="center"
      >
        View Projects
      </Box>
    </StyledButton>
  );
}
