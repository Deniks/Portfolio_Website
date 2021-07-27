import React, { useState, useContext, Suspense, lazy } from 'react';

import { Box, Grid, Button, ResponsiveContext, Tip } from 'grommet';

import { useHover } from '@use-gesture/react';
import { StyledCard } from './Styles/StyledCard';
import { StyledTitle } from './Styles/StyledTitle';
import { PrepareDescription } from './PrepareDescription';
import Icon from '../Icon';
// import ImageLoader from '../ImageLoader';
//import './styles.css';
import Image from './Image';
// const Image = lazy(() => import('./Image'));

export function ProjectCard({
  title,
  image,
  description,
  stack,
  links,
  elaboration,
}) {
  const viewportSize = useContext(ResponsiveContext);
  const [cardIsHovered, setHover] = useState(false);

  const bind = useHover(({ active }) => setHover(active));

  return stack ? (
    <StyledCard size={viewportSize} {...bind()}>
      <Grid
        style={{ mineight: '100%' }}
        rows={['auto', 'flex', 'auto']}
        columns={['auto', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 1] },
          { name: 'body', start: [0, 1], end: [1, 1] },
          { name: 'footer', start: [0, 2], end: [1, 2] },
        ]}
      >
        <Box gridArea="header">
          {image ? (
            <Box
              gridArea="image"
              style={{ margin: 'auto 0', overflow: 'hidden' }}
            >
              <Image src={image} alt="image" zoom={cardIsHovered} />
            </Box>
          ) : null}
        </Box>

        <Box gridArea="body" pad="small">
          <Box gridArea="title">
            <StyledTitle>{title}</StyledTitle>
          </Box>
          <Box gridArea="description">{PrepareDescription(description)}</Box>

          <Box gridArea="links">
            {links.map((link, i) => (
              <Box key={i}>
                <a
                  style={{ color: 'inherit', maxWidth: 'max-content' }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          gridArea="footer"
          direction="row"
          style={{ justifyContent: 'space-between' }}
        >
          <Box
            pad="small"
            gap="medium"
            direction="row"
            style={{
              flexWrap: 'wrap',
              flexBasis: elaboration ? '60%' : '100%',
            }}
          >
            {stack.map((icon, i) => (
              <Icon key={i} src={icon} />
            ))}
          </Box>
          {elaboration && (
            <Box pad="small" justify="end">
              <Button
                style={{
                  padding: '7px 10px',
                  borderRadius: '4px',
                  border: '2px solid #fff',
                }}
              >
                Read More
              </Button>
            </Box>
          )}
        </Box>
      </Grid>
    </StyledCard>
  ) : null; // instead of null there should be sceleton or loader.
}
