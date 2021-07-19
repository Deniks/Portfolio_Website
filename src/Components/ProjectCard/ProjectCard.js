import React, { useState, useContext } from 'react';

import {
  Image,
  Box,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  List,
  Markdown,
  Spinner,
  Button,
  Heading,
  ResponsiveContext,
} from 'grommet';

import { useSpring, animated } from 'react-spring';
import { StyledCard } from './StyledCard';
import { StyledTitle } from './StyledTitle';
import { PrepareDescription } from './PrepareDescription';
//import './styles.css';

export function ProjectCard({
  title,
  image,
  description,
  stack,
  links,
  id,
  expanded,
  setExpansion,
}) {
  const viewportSize = useContext(ResponsiveContext);
  const isExpanded = false; //id === expanded.id && expanded.active;
  const styles = useSpring({
    width: isExpanded ? '100%' : '300px',
    height: isExpanded ? '100%' : '400px',
  });

  const handleCardExpansion = () => {
    setExpansion({ id, active: isExpanded ? !isExpanded.active : true });
  };

  return stack ? (
    <StyledCard size={viewportSize}>
      {' '}
      {/* style={styles} for StlyedCard, removed to setup responsiveness in styled-compinenst */}
      <Grid
        rows={['auto', 'auto']}
        columns={['auto', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [isExpanded ? 0 : 1, 1] },
          { name: 'body', start: isExpanded ? [1, 0] : [0, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header">
          {image ? (
            <Box gridArea="image" style={{ margin: 'auto 0' }}>
              <Image src={image} />
            </Box>
          ) : null}
        </Box>

        <Box gridArea="body" pad="small">
          <Box gridArea="title">
            <StyledTitle expanded={isExpanded}>{title}</StyledTitle>
          </Box>
          <Box gridArea="description">
            {isExpanded ? description : PrepareDescription(description)}
          </Box>
          <Box gridArea="stack">
            <Heading level="5" margin="none">
              Technology used:{' '}
            </Heading>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {stack.map((technology, i) => (
                <li key={i}>{technology}</li>
              ))}
            </ul>
          </Box>
          <Box gridArea="links">
            {links.map((link, i) => (
              <a
                style={{ color: 'inherit' }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                {link}
              </a>
            ))}
          </Box>
          <Button onClick={handleCardExpansion}>View</Button>
        </Box>
      </Grid>
    </StyledCard>
  ) : null; // instead of null there should be sceleton or loader.
}
