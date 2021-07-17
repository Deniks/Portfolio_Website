import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 15px 35px;
  position: relative;
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 2px;
  box-sizing: inherit;
  cursor: pointer;
  display: inline-block;
  font-size: 13pt;
  transition: all 0.3s ease;
  background: transparent;
  color: #fff;
  overflow: hidden;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #e0e5ec;
    transition: all 0.7s ease;
  }
  &:hover {
    color: #000;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;
