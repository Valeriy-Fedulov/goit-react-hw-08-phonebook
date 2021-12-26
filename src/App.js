import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from './components/loader';
import AppBar from './components/appbar';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/privateroute/PrivateRoute';
import PublicRoute from './components/publicroute/PublicRoute';

import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
