import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
//   background-color: #17141d;

// ${({ size }) => {
//   console.log(size);
//   if (size === 'large') {
//     return css`
//       width: 100%;
//     `;
//   }
//   if (size === 'medium') {
//     return css`
//       width: 500px;
//     `;
//   }
//   if (size === 'small') {
//     console.log('now');
//     return css`
//       width: 400px;
//     `;
//   }
// }}
export const StyledCard = styled(animated.div)`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: transparent;
  &:hover {
    backdrop-filter: blur(5px);
  }
  border-radius: 5px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  overflow: hidden;
`;
