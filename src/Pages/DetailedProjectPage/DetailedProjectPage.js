import React, { useState, useEffect } from 'react';

import { Box, Text } from 'grommet';
import { Heading } from './StyledHeading';
import { useParams } from 'react-router-dom';

import { detailedProjectData } from '../../Global/seed';
export const DetailedProjectPage = () => {
  let { title } = useParams();
  const [project, setProjects] = useState(null);

  useEffect(() => {
    detailedProjectData.forEach(
      (project) => project.name === title && setProjects(project)
    );
  }, []);

  return project ? (
    <Box style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Box margin="medium">
        <Heading textAlign="center" level={1}>
          {title}
        </Heading>
      </Box>

      <Box>
        <Box>
          <Heading level={2}>Features</Heading>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>
                <Text>{feature}</Text>
              </li>
            ))}
          </ul>
        </Box>

        <Box>
          <Heading level={2}>My Role</Heading>
          <Text>{project.role}</Text>
        </Box>

        <Box>
          <Heading level={2}>Difficulties</Heading>
          <Text>{project.difficulties}</Text>
        </Box>

        <Box>
          <Heading level={2}>Solution</Heading>
          <Text>{project.solution}</Text>
        </Box>
      </Box>
    </Box>
  ) : null;
};
