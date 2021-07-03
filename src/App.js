import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

// UI
import {
  Box,
  Grommet,
  ResponsiveContext,
  Grid
} from 'grommet';


// Pages
import HomePage from './Pages/HomePage';
import ContactsPage from './Pages/ContactsPage';
import ErrorPage from './Pages/ErrorPage';

// Components
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import InteractiveBackground from './Components/InteractiveBackground';
import Header from './Components/Header';

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
        {size => (
          <Grid
            style={{maxHeight: "100vh"}}
            rows={['auto', 'auto']}
            columns={['auto', 'auto']}
            gap="small"
            areas={[
              { name: 'header', start: [0, 0], end: [1, 0] },
              { name: 'sidebar', start: [0, 1], end: [0, 1] },
              { name: 'main', start: [1, 1], end: [1, 1] },
            ]}
          >
            <Box gridArea="header">
              <Header />
            </Box>
            
            <Box gridArea="sidebar">
              <Navbar />
            </Box>
            <Box gridArea="main">
                  <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/contacts" component={ContactsPage} />
                    <Route component={ErrorPage} />
                  </Switch>
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
