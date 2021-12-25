import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
}
