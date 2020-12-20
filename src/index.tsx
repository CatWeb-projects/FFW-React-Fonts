import React from 'react';
import ReactDOM from 'react-dom';
import { CreateRouter } from 'estafette-router';
import { routes } from 'routes';
import { ProviderContext } from 'contexts/FontContext';

import 'styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProviderContext>
      <CreateRouter routes={routes} />
    </ProviderContext>
  </React.StrictMode>,
  document.getElementById('root')
);
