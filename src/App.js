import React, { Suspense, lazy } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { Grommet } from 'grommet';
// Pages
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';

import PageLoader from './Components/PageLoader';

import ProjectsPage from './Pages/ProjectsPage';
import DetailedProjectPage from './Pages/DetailedProjectPage';
import ResumePage from './Pages/ResumePage';

// import Layout from './Components/Layout';
const Layout = lazy(() => import('./Components/Layout'));

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
      <Suspense fallback={<PageLoader />}>
        <Layout>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/projects/:title" component={DetailedProjectPage} />
            <Route path="/resume" exact component={ResumePage} />
            <Route path="/page-not-found" component={ErrorPage} />
            <Route path="*">
              <Redirect to="/page-not-found" />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </Grommet>
  );
};

export default App;
