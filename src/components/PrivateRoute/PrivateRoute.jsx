import { Redirect, Route, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const location = useLocation();

  return <Route {...rest}></Route>;
}
