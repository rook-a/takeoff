import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainOutlet from '../main-outlet/main-outlet';
import PrivateOutlet from '../private-outlet/private-outlet';
import NotFound from '../../pages/not-found/not-found';
import Spinner from '../spinner/spinner';

import { useAppSelector } from '../../hooks/hooks';
import { selectAuthrizationStatus } from '../../store/user-slice/user-slice';

import { AppRoute } from '../../utils/const';

const MainPage = lazy(() => import('../../pages/main-page/main-page'));
const LoginPage = lazy(() => import('../../pages/login-page/login-page'));
const Contacts = lazy(() => import('../../pages/contacts/contacts'));

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthrizationStatus);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainOutlet />}>
          <Route index element={<MainPage />} />
          <Route
            element={
              <PrivateOutlet authorizationStatus={authorizationStatus} />
            }>
            <Route path={AppRoute.Contacts} element={<Contacts />} />
          </Route>

          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
