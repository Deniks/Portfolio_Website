import React, { Suspense, lazy } from 'react';

import { Route, Switch, useLocation, Router } from 'react-router-dom';

// Pages
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';

import PageLoader from './Components/PageLoader';

import ProjectsPage from './Pages/ProjectsPage';

// import Layout from './Components/Layout';
const Layout = lazy(() => import('./Components/Layout'));

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/projects" component={ProjectsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default App;
