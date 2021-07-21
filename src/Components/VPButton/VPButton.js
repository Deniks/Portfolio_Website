import React, { useState } from 'react';

import { Button, Box } from 'grommet';

import { FormNextLink } from 'grommet-icons';
import { StyledButton } from './StyledButton';
import { StyledIcon } from './StyledIcon';

import { VPButtonContext } from './store';

import { useHover } from '@use-gesture/react';
import { useStore } from './store';
export function VPButton(props) {
  //const [isHovered, setHover] = useState(false);
  const setHover = useStore((state) => state.setHover);
  const removeHover = useStore((state) => state.removeHover);
  const isHovered = useStore((state) => state.isHovered);

  const bind = useHover(({ down, active }) => {
    if (active) {
      setHover();
    } else {
      removeHover();
    }
  });

  return (
    <StyledButton {...props} {...bind()}>
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
