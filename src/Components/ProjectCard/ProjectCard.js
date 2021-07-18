import React from 'react';

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
  Heading,
} from 'grommet';

import { StyledCard } from './StyledCard';
import { StyledTitle } from './StyledTitle';
import { PrepareDescription } from './PrepareDescription';
//import './styles.css';

export function ProjectCard({ title, image, description, stack, links }) {
  return stack ? (
    <StyledCard>
      <Grid
        rows={['auto', 'auto', 'auto', 'auto', 'auto']}
        columns={['auto', 'auto']}
        areas={[
          { name: 'title', start: [0, 0], end: [1, 0] },
          { name: 'image', start: [0, 0], end: [1, 1] },
          { name: 'description', start: [0, 2], end: [1, 2] },
          { name: 'stack', start: [0, 3], end: [0, 3] },
          { name: 'links', start: [0, 4], end: [1, 4] },
        ]}
      >
        <Box gridArea="title">
          <StyledTitle>{title}</StyledTitle>
        </Box>
        <Box gridArea="image">
          <Image src={image} />
        </Box>
        <Box style={{ marginTop: '20px' }} gridArea="description">
          {PrepareDescription(description)}
        </Box>

        <Box gridArea="stack">
          <Heading level="5" margin="none">
            Technology used:{' '}
          </Heading>
          <ul>
            {stack.map((technology, i) => (
              <li key={i}>{technology}</li>
            ))}
          </ul>
        </Box>

        <Box gridArea="links">
          {links.map((link, i) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={i}>
              {link}
            </a>
          ))}
        </Box>
      </Grid>
    </StyledCard>
  ) : (
    <Spinner />
  ); // instead of null there should be sceleton or loader.
}
