import React from 'react';

import { Link } from 'react-router-dom';

import { Nav, Button } from 'grommet';

import { Home, Projects, Inbox } from 'grommet-icons';

export function Navbar() {
  return (
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
  );
}
