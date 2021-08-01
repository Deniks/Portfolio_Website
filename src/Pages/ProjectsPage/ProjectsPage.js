import React from 'react';

import { Box, Heading } from 'grommet';

import ProjectCatalog from '../../Components/ProjectCatalog';
import DebitAnimation from '../../Components/DebitAnimation';

export function ProjectsPage() {
  const minimalAnimationDelay = 150;
  return (
    <div>
      <Box fill>
        <DebitAnimation delay={minimalAnimationDelay}>
          <Heading>Projects</Heading>
        </DebitAnimation>
        <ProjectCatalog />
      </Box>
    </div>
  );
}
