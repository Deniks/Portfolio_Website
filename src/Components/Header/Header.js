import React from 'react';

import { Link } from 'react-router-dom';

import { Header as GrommetHeader, Anchor, Nav, Heading, Box } from 'grommet';

import { Github, Linkedin } from 'grommet-icons';

export function Header() {
  return (
    <GrommetHeader gap="medium">
      <Box pad="xsmall" style={{ marginLeft: '15px' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Heading level="4">Deniss Rezanovics</Heading>
        </Link>
      </Box>

      <Nav direction="row" pad="small" gap="xsmall">
        <Anchor
          href="https://github.com/Deniks"
          target="_blank"
          icon={<Github />}
          hoverIndicator
        />
        <Anchor
          href="https://www.linkedin.com/in/deniss-rezanovics-600088173/"
          target="_blank"
          icon={<Linkedin />}
        />
      </Nav>
    </GrommetHeader>
  );
}
