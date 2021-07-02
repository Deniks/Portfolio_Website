import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

// UI
import {
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';


// Pages
import HomePage from './Pages/HomePage';
import ContactsPage from './Pages/ContactsPage';
import ErrorPage from './Pages/ErrorPage';

// Components
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import InteractiveBackground from './Components/InteractiveBackground';

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
          <Box fill>
            <InteractiveBackground />
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Navbar />
              <Box flex align='center' justify='center'>
                  <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/contacts" component={ContactsPage} />
                    <Route component={ErrorPage} />
                  </Switch>
                </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
