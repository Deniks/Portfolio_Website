import React from 'react';

import { Link } from 'react-router-dom';

import { Sidebar as GrommetSidebar, Nav, Button } from 'grommet';

import { Home, Projects, Inbox } from 'grommet-icons';

export function Sidebar() {
  return (
    <GrommetSidebar round="small">
      <Nav gap="medium">
        <Link to="/">
          <Button icon={<Home />} label="Home" color="transparent" />
        </Link>
        <Link to="/projects">
          <Button icon={<Projects />} label="Projects" color="transparent" />
        </Link>
        <Link to="/contacts">
          <Button icon={<Inbox />} label="Contacts" color="transparent" />
        </Link>
      </Nav>
    </GrommetSidebar>
  );
}
