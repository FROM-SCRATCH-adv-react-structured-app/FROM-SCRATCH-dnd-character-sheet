import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import styles from './App.css';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Home from '../src/views/Home/Home'

export default function App() {
  return (
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/register">
            <Auth isSigningUp />
          </Route> */}
        </Switch>
      </Router>
  );
}
