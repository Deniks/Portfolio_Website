import React, { useState, useEffect } from 'react';

import { animated, useSpring, config } from 'react-spring';

export function DebitAnimation({
  trigger = true,
  direction = 'y',
  delay = 0,
  children,
  continuous = false,
}) {
  const [isPageEntered, setPageEntered] = useState(false);
  const [isPageLeft, setPageLeft] = useState(false);

  const [loop, setLoop] = useState(true);

  const xTransition = {
    opacity: isPageLeft || !trigger ? 0 : isPageEntered ? 1 : 0,
    translateX: isPageEntered && trigger ? '0px' : '-50px',
    delay,
    config: config.stiff,
  };

  const yTransition = {
    opacity: loop ? (trigger ? 1 : 0) : 1,
    translateY: loop ? (trigger ? '0px' : '50px') : '0px',
    delay,
    config: config.molasses,
    onStart: () => !continuous && setLoop(false),
  };
  const style = useSpring(direction === 'y' ? yTransition : xTransition);

  useEffect(() => {
    setPageEntered(true);
    window.onbeforeunload = () => setPageLeft(true);
  });
  return <animated.div style={style}>{children}</animated.div>;
}
