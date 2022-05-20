import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import style from './App.css';
import Auth from './views/Auth/Auth';
import Home from '../src/views/Home/Home';
import Header from './views/Header/Header';
import CharacterList from './views/Characters/List';
import { CharacterProvider } from './context/CharContext';
import CharacterForm from './views/Characters/Form';
import { UserProvider } from './context/UserContext';
import { Redirect } from 'react-router-dom';
import CharacterDetails from './views/Characters/Details';

export default function App() {
  return (
    <UserProvider>
      <CharacterProvider>
        <Router>
          <Header />
          <section className={style.body}>
            <Switch>
              <Route exact path="/login">
                <Auth />
              </Route>
              {/* <PrivateRoute exact path="/characters/edit"></PrivateRoute> */}
              <PrivateRoute exact path="/characters/add">
                <CharacterForm />
                {/* <CharacterList /> */}
              </PrivateRoute>
              <PrivateRoute exact path="/characters/:id">
                <CharacterDetails />
              </PrivateRoute>
              <PrivateRoute exact path="/characters">
                <CharacterList />
              </PrivateRoute>
              {/* <PrivateRoute exact path="/create_character_form">
                <CharacterForm />
              </PrivateRoute> */}
              <PrivateRoute exact path="/">
                {/* <Home /> */}
                <Redirect to="/characters" />
              </PrivateRoute>
            </Switch>
          </section>
        </Router>
      </CharacterProvider>
    </UserProvider>
  );
}
