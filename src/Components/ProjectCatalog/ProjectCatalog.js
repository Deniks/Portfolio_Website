import React, { useContext, Suspense, lazy } from 'react';

import { Grid, ResponsiveContext } from 'grommet';

import { projectsData } from '../../Global/seed';
import { CardSkelton } from '../ProjectCard/Contents/CardSkelton';
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
      {projectsData.map(
        ({ name, image, description, stack, links, elaboration }, i) => (
          <Suspense key={i} fallback={<CardSkelton />}>
            <ProjectCard
              title={name}
              image={image}
              description={description}
              stack={stack}
              links={links}
              elaboration={elaboration}
            />
          </Suspense>
        )
      )}
    </Grid>
  );
}
