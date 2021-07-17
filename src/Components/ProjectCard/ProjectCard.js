import { Image, Box, Grid } from 'grommet';
import React from 'react';
import { StyledCard } from './StyledCard';
import { StyledTitle } from './StyledTitle';

import './styles.css';

export function ProjectCard({ title, image }) {
  return (
    <StyledCard>
      <Grid
        style={{ maxHeight: '100vh', height: '100vh' }}
        rows={['auto', 'auto', 'auto', 'auto']}
        columns={['auto', 'auto']}
        areas={[
          { name: 'title', start: [0, 0], end: [1, 0] },
          { name: 'image', start: [0, 0], end: [1, 1] },
          { name: 'links', start: [0, 2], end: [1, 2] },
          { name: 'description', start: [0, 2], end: [0, 2] },
          { name: 'stack', start: [0, 3], end: [0, 3] },
          { name: 'links', start: [0, 3], end: [0, 3] },
        ]}
      >
        <StyledTitle>{title}</StyledTitle>
        <Box fill>
          <Image src={image} />
        </Box>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </Grid>
    </StyledCard>
  );
}
