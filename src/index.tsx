import React from 'react';
import ReactDOM from 'react-dom';
import { MainLayout } from 'ui/templates/MainLayout/MainLayout';

import 'styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
  document.getElementById('root')
);
