import React, { useState, useContext, Suspense, lazy } from 'react';

import { Grid, ResponsiveContext } from 'grommet';

import { projectsData } from './seed';
import { AnimateCatalog } from './AnimateCatalog';
import { CardSkelton } from '../ProjectCard/CardSkelton';

const ProjectCard = lazy(() => import('../ProjectCard'));

export function ProjectCatalog() {
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
      <AnimateCatalog>
        {projectsData.map(({ name, image, description, stack, links }, i) => (
          <Suspense key={i} fallback={<CardSkelton />}>
            <ProjectCard
              title={name}
              image={image}
              description={description}
              stack={stack}
              links={links}
              id={i}
            />
          </Suspense>
        ))}
      </AnimateCatalog>
    </Grid>
  );
}
