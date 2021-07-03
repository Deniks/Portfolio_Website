import React from 'react'

import { Header as GrommetHeader, Anchor, Nav } from "grommet";

import { Github, Linkedin } from "grommet-icons";

export function Header() {
    return (
        <GrommetHeader gap="medium" justify="end">
            <Nav direction="row" pad="small" gap="xsmall">
                <Anchor icon={<Github />} hoverIndicator />
                <Anchor icon={<Linkedin/>} />
            </Nav>

        </GrommetHeader>
    )
}
