import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import styles from './App.css';
import Auth from './views/Auth/Auth';
import Home from '../src/views/Home/Home';
import Header from './views/Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Auth />
        </Route>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
