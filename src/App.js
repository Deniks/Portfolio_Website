import React, { useState } from 'react';

import { Route, Switch, useLocation, Router } from 'react-router-dom';

// UI
import { Box, Grommet, ResponsiveContext, Grid } from 'grommet';

// Pages
import HomePage from './Pages/HomePage';
import ContactsPage from './Pages/ContactsPage';
import ErrorPage from './Pages/ErrorPage';

// Components
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import InteractiveBackground from './Components/InteractiveBackground';
import Header from './Components/Header';
import EpicBackground from './Components/EpicBackground';
import Footer from './Components/Footer';
import ProjectsPage from './Pages/ProjectsPage';
import { animated, useTransition } from 'react-spring';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            style={{ minHeight: '100vh' }}
            rows={['10vh', 'auto', '10vh']}
            columns={['10vw', 'auto', '10vw']}
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
            <Box gridArea="main">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Route component={ErrorPage} />
              </Switch>
            </Box>

            <Box gridArea="footer">
              <Footer />
            </Box>
            <Box fill style={{ position: 'absolute', zIndex: -1 }}>
              <EpicBackground />
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
