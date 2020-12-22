import React from 'react';
import ReactDOM from 'react-dom';
import { CreateRouter } from 'estafette-router';
import { ProviderContext } from 'contexts/FontContext';
import { routes } from 'routes';

import 'styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProviderContext>
      <CreateRouter routes={routes} />
    </ProviderContext>
  </React.StrictMode>,
  document.getElementById('root')
);
