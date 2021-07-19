import React from 'react';

import { Box, Heading, Image, Grid } from 'grommet';
import ProjectCard from '../../Components/ProjectCard';
import img from '../../Assets/logo.png';
import { PrepareDescription } from '../../Components/ProjectCard/PrepareDescription';
import DebitAnimation from '../../Components/DebitAnimation';
const projectsData = [
  {
    name: 'Landing',
    image: img,
    description:
      'This is a landing page for my college Web Developement module closure. The aim is to apply design principles such as responsive, adaptive, functional UI, wise colour scheme whlist considering SEO principles such as correct html tagging, meta descriptions, load time, markup validation.',
    stack: ['Node.js', 'Css Grid', 'Express'],
    links: [
      'https://hot-beans.herokuapp.com/',
      'https://github.com/Deniks/hot-beans',
    ],
  },
  // {
  //   name: 'E-commerce',
  //   description: '',
  //   stack: ['Node.js', 'Css Grid', 'Express'],
  //   image: null,
  // },
  // {
  //   name: 'BMI Calculator',
  //   description: '',
  //   stack: ['Node.js', 'Css Grid', 'Express'],
  //   image: null,
  // },
  // {
  //   name: 'Music Suggester',
  //   description: '',
  //   stack: ['Node.js', 'Css Grid', 'Express'],
  //   image: null,
  // },
  // {
  //   name: 'Real Estate',
  //   description: '',
  //   stack: ['Node.js', 'Css Grid', 'Express'],
  //   image: null,
  // },
  // {
  //   name: 'Reflectively.log',
  //   description: '',
  //   stack: ['Node.js', 'Css Grid', 'Express'],
  //   image: null,
  // },
];
export function ProjectsPage() {
  const minimalAnimationDelay = 150;
  return (
    <div>
      <Box fill>
        <DebitAnimation delay={minimalAnimationDelay}>
          <Heading>Projects</Heading>
        </DebitAnimation>
        <Grid rows={['auto', 'auto']} columns={['auto', 'auto']} gap="small">
          {projectsData.map(({ name, image, description, stack, links }, i) => (
            <ProjectCard
              title={name}
              image={image}
              description={description}
              stack={stack}
              links={links}
              key={i}
            />
          ))}
        </Grid>
        <ProjectCard title="Landing" />
      </Box>
    </div>
  );
}
