import React, { useContext } from 'react';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { StyledCard } from './Styles/StyledCard';
import { StyledTitle } from './Styles/StyledTitle';
import Skelton, { SkeletonTheme } from 'react-loading-skeleton';

export function CardSkelton() {
  const viewportSize = useContext(ResponsiveContext);

  return (
    <StyledCard size={viewportSize}>
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
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Box gridArea="header">
            <Skelton height="200px" duration={1.5} />
          </Box>

          <Box gridArea="body" pad="small">
            <Box gridArea="title">
              <StyledTitle>
                <Skelton width="70px" height="15px" />
              </StyledTitle>
            </Box>
            <Box gridArea="description">
              <Skelton count={3} width="300px" />
            </Box>

            <Box gridArea="links">
              <Skelton width="200px" />
              <Skelton width="200px" />
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
              style={{ flexWrap: 'wrap', flexBasis: '60%' }}
            >
              <Skelton circle={true} width="25px" height="25px" />
              <Skelton circle={true} width="25px" height="25px" />
              <Skelton circle={true} width="25px" height="25px" />
            </Box>
            <Box pad="small" justify="end">
              <Skelton width="60px" height="30px" />
            </Box>
          </Box>
        </SkeletonTheme>
      </Grid>
    </StyledCard>
  );
}
