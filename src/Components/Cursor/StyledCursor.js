import styled, {css} from 'styled-components';

export const StyledCursor = styled.a`
    ${({ x, y }) => css`
        left: ${x}px;
        top: ${y}px;
    `}
    width: 40px;
    height: 40px;
    border: 2px solid #fefefe;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
    z-index: 9999;
    mix-blend-mode: difference;
    ${({ hidden }) => hidden && css`
        opacity: 0;
    `}
    
    ${({ clicked }) => clicked && css`
        transform: translate(-50%, -50%) scale(0.9);
    `}

    ${({ hovered, hoveredElProps }) => hovered && css`
        height: ${hoveredElProps.height}px;
        width: ${hoveredElProps.width}px;
        border-radius: 3px;
        transition: all 150ms ease;
        left: ${hoveredElProps.left}px;
        top: ${hoveredElProps.top}px;
    `}
`