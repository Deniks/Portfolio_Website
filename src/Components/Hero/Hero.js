import React from 'react'

import { Box, Image } from 'grommet';

import logo from '../../Assets/logo.png';

const style = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    zIndex: "-1"
};
export function Hero() {
    return (
            <Image style={style} fit="cover" src={logo} />
    )
}
