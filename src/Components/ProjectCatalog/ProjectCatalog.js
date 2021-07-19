import React, { useState, useContext } from 'react';

import { Grid, ResponsiveContext } from 'grommet';
import ProjectCard from '../ProjectCard';

import { projectsData } from './seed';

export function ProjectCatalog() {
  const [isExpanded, setExpansion] = useState({ id: null, active: false });

  const size = useContext(ResponsiveContext);
  const columns =
    size === 'large'
      ? ['auto', 'auto', 'auto']
      : size === 'medium'
      ? ['auto', 'auto']
      : ['auto'];

  const rows =
    size === 'large'
      ? ['auto', 'auto', 'auto']
      : size === 'medium'
      ? ['auto', 'auto']
      : ['auto'];
  return (
    <Grid rows={rows} columns={columns} gap="small" justify="center">
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
  );
}
