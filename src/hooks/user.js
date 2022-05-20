import { useContext } from 'react';
import { useUserContext } from '../context/UserContext';
import { signInUser, signUpUser, signOutUser } from '../services/user';

export const useAuth = () => {
  const context = useContext(useUserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used withing a UserProvider');
  }

  const { user, setUser } = context;

  const isLoggedIn = user?.email;

  const 
};
