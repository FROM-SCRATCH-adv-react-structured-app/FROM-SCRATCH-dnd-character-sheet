import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import style from './App.css';
import Auth from './views/Auth/Auth';
import Home from '../src/views/Home/Home';
import Header from './views/Header/Header';
import CharacterList from './views/Characters/List';

export default function App() {
  return (
    <Router>
      <Header />
      <section className={style.body}>
        <Switch>
        <PrivateRoute exact path="/characters">
            <CharacterList />
          </PrivateRoute>
          <Route exact path="/login">
            <Auth />
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </section>
    </Router>
  );
}
