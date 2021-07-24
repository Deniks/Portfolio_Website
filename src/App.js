import React, { Suspense, lazy } from 'react';

import { Route, Switch, useLocation, Router } from 'react-router-dom';

// UI
import { Box, Grommet, ResponsiveContext, Grid } from 'grommet';

// Pages
import HomePage from './Pages/HomePage';
import ContactsPage from './Pages/ContactsPage';
import ErrorPage from './Pages/ErrorPage';

import Layout from './Components/Layout';
import PageLoader from './Components/PageLoader';

import ProjectsPage from './Pages/ProjectsPage';

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default App;
