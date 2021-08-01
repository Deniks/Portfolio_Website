import React, { useRef } from 'react';

import styled from 'styled-components';
import { useOnScreen } from '../../Hooks/useOnScreen';
import { Heading as GrommetHeading } from 'grommet';
import DebitAnimation from '../../Components/DebitAnimation';
const StyledHeading = styled(GrommetHeading)`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-size: ${({ fontSize }) => fontSize};
`;

export const Heading = ({
  level,
  animationDelay = 100,
  textAlign,
  fontSize,
  children,
}) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <DebitAnimation trigger={isVisible} delay={animationDelay}>
      <StyledHeading
        ref={ref}
        level={level}
        textAlign={textAlign}
        fontSize={fontSize}
      >
        {children}
      </StyledHeading>
    </DebitAnimation>
  );
};
