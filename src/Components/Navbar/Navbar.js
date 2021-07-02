import React from 'react'

import { Link } from 'react-router-dom';

import { Sidebar, Nav, Button } from "grommet";

import { Home, Projects, Inbox  } from "grommet-icons";

export function Navbar() {
    return (
        <Sidebar round="small" >
            <Nav gap="small">
                <Link to="/">
                    <Button icon={<Home />} hoverIndicator />
                </Link>
                <Link to="/projects">
                    <Button icon={<Projects />} hoverIndicator />
                </Link>
                <Link to="/contacts">
                    <Button icon={<Inbox />} hoverIndicator />
                </Link>
        </Nav>
    </Sidebar>
    )
}
