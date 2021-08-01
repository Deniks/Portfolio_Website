import React from 'react';

import { Box } from 'grommet';

import { StyledButton } from './Styles/StyledButton';

import { useGesture } from '@use-gesture/react';
import { useStore } from './store';
export function VPButton(props) {
  //const [isHovered, setHover] = useState(false);
  const setHover = useStore((state) => state.setHover);
  const removeHover = useStore((state) => state.removeHover);

  // const bind = useHover(({ active }) => {
  //   if (active) {
  //     setHover(props.color);
  //   } else {
  //     removeHover();
  //   }
  // });

  const bind = useGesture({
    onHover: ({ active }) => {
      if (active) {
        setHover(props.color);
      } else {
        removeHover();
      }
    },
    onDrag: () => {
      setHover(props.color);
    },
  });
  return (
    <StyledButton
      buttonColor={props.color}
      borderColor={props.borderColor}
      {...props}
      {...bind()}
    >
      <Box
        style={{ alignItems: 'center' }}
        direction="row"
        alignContent="center"
      >
        {props.text}
      </Box>
    </StyledButton>
  );
}
