import React from 'react';

import { useTransition, animated, config } from 'react-spring';

export function AnimateCatalog({ children }) {
  const transitions = useTransition(children, {
    from: { opacity: 0, translateY: '50px' },
    enter: { opacity: 1, translateY: '0' },
    leave: { opacity: 0, translateY: '50px' },
    delay: 200,
    config: config.molasses,
  });
  return transitions(({ opacity, translateY }, item) => (
    <animated.div
      style={{
        translateY,
        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
      }}
    >
      {item}
    </animated.div>
  ));
}
