import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRout';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import SkeletonSkeletoView from './Skeleton/Skeleton';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhoneBookPage = lazy(() => import('../pages/PhoneBook'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <SkeletonSkeletoView />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/phonebook" component={<RegisterPage />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/phonebook" component={<LoginPage />} />} />
          <Route path="/phonebook" element={<PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </>
  );
}
