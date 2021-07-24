import React, { useState, useContext, Suspense, lazy } from 'react';

import { Box, Grid, Button, ResponsiveContext, Tip } from 'grommet';

import { useSpring, animated, config } from 'react-spring';
import { useHover } from '@use-gesture/react';
import { StyledCard } from './StyledCard';
import { StyledTitle } from './StyledTitle';
import { PrepareDescription } from './PrepareDescription';
import Icon from '../Icon';
import ImageLoader from '../ImageLoader';
//import './styles.css';

const Image = lazy(() => import('./Image'));

export function ProjectCard({
  title,
  image,
  description,
  stack,
  links,
  id,
  expanded,
  setExpansion,
}) {
  const viewportSize = useContext(ResponsiveContext);
  const [cardIsHovered, setHover] = useState(false);
  const isExpanded = false; //id === expanded.id && expanded.active;

  const bind = useHover(({ active }) => setHover(active));
  const handleCardExpansion = () => {
    setExpansion({ id, active: isExpanded ? !isExpanded.active : true });
  };

  return stack ? (
    <StyledCard size={viewportSize} {...bind()}>
      {' '}
      {/* style={styles} for StlyedCard, removed to setup responsiveness in styled-compinenst */}
      <Grid
        style={{ mineight: '100%' }}
        rows={['auto', 'flex', 'auto']}
        columns={['auto', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [isExpanded ? 0 : 1, 1] },
          { name: 'body', start: isExpanded ? [1, 0] : [0, 1], end: [1, 1] },
          { name: 'footer', start: [0, 2], end: [1, 2] },
        ]}
      >
        <Box gridArea="header">
          {image ? (
            <Box
              gridArea="image"
              style={{ margin: 'auto 0', overflow: 'hidden' }}
            >
              <Suspense fallback={<ImageLoader />}>
                <Image src={image} zoom={cardIsHovered} />
              </Suspense>
            </Box>
          ) : null}
        </Box>

        <Box gridArea="body" pad="small">
          <Box gridArea="title">
            <StyledTitle expanded={isExpanded}>{title}</StyledTitle>
          </Box>
          <Box gridArea="description">
            {isExpanded ? description : PrepareDescription(description)}
          </Box>

          <Box gridArea="links">
            {links.map((link, i) => (
              <Box>
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
            style={{ flexWrap: 'wrap' }}
          >
            {stack.map((icon, i) => (
              <Icon key={i} src={icon} />
            ))}
          </Box>
          <Box pad="small" justify="end">
            <Button
              style={{
                padding: '7px 10px',
                borderRadius: '4px',
                border: '2px solid #fff',
              }}
              onClick={handleCardExpansion}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Grid>
    </StyledCard>
  ) : null; // instead of null there should be sceleton or loader.
}
