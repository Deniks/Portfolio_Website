import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
//   background-color: #17141d;

export const StyledCard = styled(animated.div)`
  display: flex;
  height: 400px;
  width: 300px;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  overflow: hidden;
`;
