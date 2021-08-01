import React, { useState, useContext, useRef, Suspense, lazy } from 'react';

import { Box, Grid, Button, ResponsiveContext } from 'grommet';

import { useHover } from '@use-gesture/react';
import { StyledCard } from './Styles/StyledCard';
import { StyledTitle } from './Styles/StyledTitle';
import { PrepareDescription } from './Other/PrepareDescription';
import Icon from '../Icon';
import ImageLoader from '../ImageLoader';
//import './styles.css';
// import Image from './Contents/Image';
import { Link } from 'react-router-dom';
import DebitAnimation from '../DebitAnimation';
import { useOnScreen } from '../../Hooks/useOnScreen';
const Image = lazy(() => import('./Contents/Image'));

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

  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return stack ? (
    <DebitAnimation trigger={isVisible}>
      <StyledCard ref={ref} size={viewportSize} {...bind()}>
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
                <Suspense fallback={<ImageLoader />}>
                  <Image src={image} alt="image" zoom={cardIsHovered} />
                </Suspense>
              </Box>
            ) : null}
          </Box>

          <Box gridArea="body" pad="small">
            <Box gridArea="title">
              <StyledTitle>{title}</StyledTitle>
            </Box>
            <Box gridArea="description">{PrepareDescription(description)}</Box>

            <Box gridArea="links" style={{ marginTop: 'auto' }}>
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
                <Link
                  to={`/projects/${title}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Button
                    style={{
                      padding: '7px 10px',
                      borderRadius: '4px',
                      border: '2px solid #fff',
                    }}
                  >
                    Read More
                  </Button>
                </Link>
              </Box>
            )}
          </Box>
        </Grid>
      </StyledCard>
    </DebitAnimation>
  ) : null; // instead of null there should be sceleton or loader.
}
