import React from 'react';
import ReactDOM from 'react-dom';
import { CreateRouter } from 'estafette-router';

import 'styles/styles.scss';
import { routes } from 'routes';

ReactDOM.render(
  <React.StrictMode>
    <CreateRouter routes={routes} />
  </React.StrictMode>,
  document.getElementById('root')
);
