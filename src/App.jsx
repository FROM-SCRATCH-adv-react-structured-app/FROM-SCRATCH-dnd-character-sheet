import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import styles from './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        {/* <Route path="/register">
          <Auth isSigningUp />
        </Route> */}
      </Switch>
    </Router>
  );
}
