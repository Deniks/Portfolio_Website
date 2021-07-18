import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  height: 400px;
  width: 300px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  overflow: hidden;
  &:not(:first-child) {
    margin-left: -50px;
  }

  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }

  &:hover ~ .card {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }
`;
