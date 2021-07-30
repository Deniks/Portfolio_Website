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
    opacity: loop ? (trigger && isPageEntered ? 1 : 0) : 1,
    translateX: loop ? (trigger && isPageEntered ? '0px' : '-50px') : '0px',
    delay,
    config: config.molasses,
  };

  const yTransition = {
    opacity: loop ? (trigger && isPageEntered ? 1 : 0) : 1,
    translateY: loop ? (trigger && isPageEntered ? '0px' : '50px') : '0px',
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
