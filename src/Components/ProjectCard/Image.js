import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Image as GrommetImage } from 'grommet';

const AnimatedImage = animated(GrommetImage);
const Image = ({ src, zoom }) => {
  const imageStyles = useSpring({
    transform: zoom ? 'scale(1.2)' : 'scale(1.05)',
    config: config.stiff,
  });
  return <AnimatedImage style={imageStyles} alt="hey" src={src} />;
};
export default Image;
