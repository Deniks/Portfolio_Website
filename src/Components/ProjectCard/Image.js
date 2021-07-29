import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Image as GrommetImage } from 'grommet';
import styled from 'styled-components';

const StyledImage = styled(GrommetImage)`
  max-width: 100% !important;
`;
const AnimatedImage = animated(StyledImage);
const Image = ({ src, zoom }) => {
  const imageStyles = useSpring({
    transform: zoom ? 'scale(1.2)' : 'scale(1.05)',
    config: config.stiff,
  });
  return <AnimatedImage style={imageStyles} alt="hey" src={src} />;
};
export default Image;
