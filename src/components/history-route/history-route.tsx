import React, { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import type { BrowserHistory } from 'history';

export interface IHistoryRouter {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

const HistoryRouter = ({ basename, children, history }: IHistoryRouter) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}>
      {children}
    </Router>
  );
};

export default HistoryRouter;
