import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

ReactDOM.render(
  <MantineProvider>
    <Router />
  </MantineProvider>,
  document.getElementById('root'),
);
