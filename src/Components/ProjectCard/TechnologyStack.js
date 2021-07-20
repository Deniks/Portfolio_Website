import React from 'react';

import { Box } from 'grommet';
import { Reactjs, Grommet, Heroku, Docker } from 'grommet-icons';
import Icon from '../Icon';

import GraphQl from '../../Assets/icons/graphql.svg';
import MaterialUI from '../../Assets/icons/material-ui.svg';
import Django from '../../Assets/icons/django.svg';
import Python from '../../Assets/icons/python.svg';
import MongoDB from '../../Assets/icons/mongo.svg';
import CSharp from '../../Assets/icons/csharp.svg';
import Sass from '../../Assets/icons/sass.svg';
import Apollo from '../../Assets/icons/apollo.svg';
import Azure from '../../Assets/icons/azure.svg';
import Express from '../../Assets/icons/express.svg';
import Typescript from '../../Assets/icons/typescript.svg';

export function TechnologyStack() {
  return (
    <Box pad="small" gap="medium" direction="row">
      <Reactjs color="plain" />
      <Heroku color="plain" />
      <Grommet color="plain" />
      <Docker color="plain" />
      <Icon src={GraphQl} />
      <Icon src={MaterialUI} />
      <Icon src={MongoDB} />
    </Box>
  );
}
