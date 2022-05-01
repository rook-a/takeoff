import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/const';
import PrivateOutlet from '../private-outlet/private-outlet';

const MainPage = lazy(() => import('../../pages/main-page/main-page'));
const LoginPage = lazy(() => import('../../pages/login-page/login-page'));
const Contacts = lazy(() => import('../../pages/contacts/contacts'));

function App(): JSX.Element {
  const authorizationStatus = AuthorizationStatus.NoAuth;

  return (
    <Suspense>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route
          element={<PrivateOutlet authorizationStatus={authorizationStatus} />}>
          <Route path={AppRoute.Contacts} element={<Contacts />} />
        </Route>

        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
