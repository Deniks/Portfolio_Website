import React, { useState } from 'react';

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
} from 'grommet';

import { StyledCard } from './StyledCard';
import { StyledTitle } from './StyledTitle';
import { PrepareDescription } from './PrepareDescription';
//import './styles.css';

export function ProjectCard({ title, image, description, stack, links }) {
  const [viewMore, setViewMore] = useState(false);

  const handleButtonClick = () => {
    setViewMore(!viewMore);
  };
  return stack ? (
    <StyledCard>
      <Grid
        rows={['auto', 'auto']}
        columns={['auto', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [viewMore ? 0 : 1, 1] },
          { name: 'body', start: [viewMore ? 1 : 0, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header">
          <Box gridArea="title">
            <StyledTitle>{title}</StyledTitle>
          </Box>
          {image ? (
            <Box gridArea="image">
              <Image src={image} />
            </Box>
          ) : null}
        </Box>

        <Box gridArea="body" pad="small">
          <Box gridArea="description">{PrepareDescription(description)}</Box>
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
              <a href={link} target="_blank" rel="noopener noreferrer" key={i}>
                {link}
              </a>
            ))}
          </Box>
          <Button onClick={handleButtonClick}>View</Button>
        </Box>
      </Grid>
    </StyledCard>
  ) : (
    <Spinner />
  ); // instead of null there should be sceleton or loader.
}
