import React from 'react';

import { Box, Heading, Image, Grid } from 'grommet';
import ProjectCard from '../../Components/ProjectCard';
import img from '../../Assets/logo.png';

const projectsData = [
  {
    name: 'Landing',
    description: '',
    stack: ['Node.js', 'Css Grid', 'Express'],
    image: img,
  },
  {
    name: 'E-commerce',
    description: '',
    stack: ['Node.js', 'Css Grid', 'Express'],
    image: img,
  },
  {
    name: 'BMI Calculator',
    description: '',
    stack: ['Node.js', 'Css Grid', 'Express'],
    image: img,
  },
  {
    name: 'Music Suggester',
    description: '',
    stack: ['Node.js', 'Css Grid', 'Express'],
    image: img,
  },
  {
    name: 'Real Estate',
    description: '',
    stack: ['Node.js', 'Css Grid', 'Express'],
    image: img,
  },
  {
    name: 'Reflectively.log',
    description: '',
    stack: ['Node.js', 'Css Grid', 'Express'],
    image: img,
  },
];
export function ProjectsPage() {
  return (
    <div>
      <Box fill>
        <Grid
          style={{ maxHeight: '100vh', height: '100vh' }}
          rows={['30vh', 'auto']}
          columns={['auto']}
          gap="small"
        >
          {projectsData.map(({ name, description, stack, image }) => (
            <ProjectCard title={name} image={image} />
          ))}
        </Grid>
        <ProjectCard title="Landing" />
      </Box>
    </div>
  );
}
