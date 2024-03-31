import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import { AppRoute, AuthStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../../pages/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { offers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage offers={offers} />} />
          <Route
            path={AppRoute.Favourites}
            element={
              <PrivateRoute authorizationStatus={AuthStatus.NoAuth}>
                <FavouritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<RoomPage offers={offers} reviews={reviews}/>} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
