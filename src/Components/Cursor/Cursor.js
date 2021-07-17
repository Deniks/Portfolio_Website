import React, { useEffect, useState } from 'react'

import { StyledCursor } from './StyledCursor';

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

export function Cursor() {
    if (typeof navigator !== "undefined" && isMobile()) {
        return null;
    }

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };
    const [hoveredElProps, setHoveredElProps] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    const handleLinkHoverEvents = () => {
        document.querySelectorAll("button, a").forEach((el) => {
            el.addEventListener("mouseover", () => {
                setLinkHovered(true)
                setHoveredElProps({
                    width: el.clientWidth,
                    height: el.clientHeight,
                    left: el.offsetLeft,
                    top: el.offsetTop
                })
            });
            el.addEventListener("mouseout", () => {
                setLinkHovered(false);
            });
        });
    };

    return (
        <StyledCursor
            x={position.x}
            y={position.y}
            clicked={clicked}
            hidden={hidden}
            hovered={linkHovered}
            hoveredElProps={hoveredElProps}
        />
    );
}

