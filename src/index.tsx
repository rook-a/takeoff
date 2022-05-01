import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';

import App from './components/app/app';
import HistoryRouter from './components/history-route/history-route';
import { browserHistory } from './browser-history';
import { store } from './store/store';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <HistoryRouter history={browserHistory}>
          <App />
        </HistoryRouter>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
);
