import React, { useState, useContext } from 'react';

import {
  Image,
  Box,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  List,
  Markdown,
  Spinner,
  Button,
  Heading,
  ResponsiveContext,
} from 'grommet';

import { useSpring, animated, config } from 'react-spring';
import { useHover } from '@use-gesture/react';
import { StyledCard } from './StyledCard';
import { StyledTitle } from './StyledTitle';
import { PrepareDescription } from './PrepareDescription';
import { TechnologyStack } from './TechnologyStack';
import Icon from '../Icon';
//import './styles.css';

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
  const styles = useSpring({
    width: isExpanded ? '100%' : '300px',
    height: isExpanded ? '100%' : '400px',
  });

  const imageStyles = useSpring({
    transform: cardIsHovered ? 'scale(1.2)' : 'scale(1.05)',
    config: config.stiff,
  });

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
              <animated.img style={imageStyles} alt="hey" src={image} />
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
              <a
                style={{ color: 'inherit', maxWidth: 'max-content' }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                {link}
              </a>
            ))}
          </Box>
        </Box>
        <Box gridArea="footer" direction="row">
          <Box pad="small" gap="medium" direction="row">
            {stack.map((icon, i) => (
              <Icon key={i} src={icon} />
            ))}
          </Box>
          <Box pad="small" style={{ marginLeft: 'auto' }}>
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
