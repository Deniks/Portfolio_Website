import React, { useState } from 'react';

import { Box, Heading, Image, Grid } from 'grommet';
import ProjectCard from '../../Components/ProjectCard';
import DebitAnimation from '../../Components/DebitAnimation';

import { projectsData } from './seed';

export function ProjectsPage() {
  const minimalAnimationDelay = 150;
  const [isExpanded, setExpansion] = useState({ id: null, active: false });
  return (
    <div>
      <Box fill>
        <DebitAnimation delay={minimalAnimationDelay}>
          <Heading>Projects</Heading>
        </DebitAnimation>
        <Grid
          rows={['auto', 'auto']}
          columns={['auto', 'auto']}
          gap="small"
          style={{ overflow: 'hidden' }}
        >
          {projectsData.map(({ name, image, description, stack, links }, i) => (
            <ProjectCard
              title={name}
              image={image}
              description={description}
              stack={stack}
              links={links}
              key={i}
              id={i}
              expanded={isExpanded}
              setExpansion={setExpansion}
            />
          ))}
        </Grid>
        <ProjectCard title="Landing" />
      </Box>
    </div>
  );
}
