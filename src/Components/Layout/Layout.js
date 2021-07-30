import React, { lazy } from 'react';

import { useRouteMatch } from 'react-router-dom';

// UI
import { Box, ResponsiveContext, Grid } from 'grommet';

// Components
import Header from '../Header';
import Footer from '../Footer';

import EpicBackground from '../EpicBackground';

// const EpicBackground = lazy(() => import('../EpicBackground'));

export const Layout = ({ children }) => {
  let isBlankPageRequired = useRouteMatch('/resume');

  return isBlankPageRequired ? (
    children
  ) : (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Grid
          style={{ minHeight: '100vh' }}
          rows={['10vh', 'auto', '10vh']}
          columns={
            size === 'small' ? ['5vw', 'auto', '5vw'] : ['10vw', 'auto', '10vw']
          }
          gap="small"
          areas={[
            { name: 'header', start: [0, 0], end: [2, 0] },
            { name: 'main', start: [1, 1], end: [1, 1] },
            { name: 'footer', start: [1, 2], end: [1, 2] },
          ]}
        >
          <Box gridArea="header">
            <Header />
          </Box>
          <Box gridArea="main">{children}</Box>

          <Box gridArea="footer">
            <Footer />
          </Box>
          <Box fill style={{ position: 'absolute', zIndex: -1 }}>
            <EpicBackground />
          </Box>
        </Grid>
      )}
    </ResponsiveContext.Consumer>
  );
};
