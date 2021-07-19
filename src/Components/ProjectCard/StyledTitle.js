import styled, { css } from 'styled-components';

export const StyledTitle = styled.h3`
  color: white;
  font-weight: 300;
  ${({ expanded }) =>
    expanded
      ? css`
          position: relative;
          font-size: 30px;
        `
      : css`
          position: absolute;
          left: 20px;
          top: 15px;
        `}
`;
