import React, { useState, useEffect } from 'react';

import { animated, useSpring, config } from 'react-spring';

export function DebitAnimation({ delay = 0, children }) {
  const [isPageEntered, setPageEntered] = useState(false);
  const [isPageLeft, setPageLeft] = useState(false);

  const style = useSpring({
    opacity: isPageLeft ? 0 : isPageEntered ? 1 : 0,
    translateY: isPageEntered ? '0px' : '50px',
    delay,
    config: config.molasses,
  });

  useEffect(() => {
    setPageEntered(true);
    window.onbeforeunload = () => setPageLeft(true);
  });
  return <animated.div style={style}>{children}</animated.div>;
}
