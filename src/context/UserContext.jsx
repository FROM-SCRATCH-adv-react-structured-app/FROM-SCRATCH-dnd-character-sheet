import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signUpUser, signOutUser } from '../services/user';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();

  const [user, setUser] = useState(currentUser || { email: null });
  const [signInOrUp, setSignInOrUp] = useState(true);
  const [loading, setLoading] = useState(true);

  // const userState = {
  //   signInOrUp,
  //   setSignInOrUp,
  //   user,
  //   setUser,
  //   loading,
  //   setLoading,
  //   signUp,
  // };

  const login = async (email, password) => {
    const authenticatedUser = await signInUser({ email, password });

    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  };

  const signUp = async (email, password) => {
    const newUser = await signUpUser({ email, password });

    if (newUser) setUser(newUser);
  };

  const logout = async (email, password) => {
    const logoutUser = await signOutUser();

    setUser(logoutUser);
  };

  return (
    <UserContext.Provider
      value={{
        signInOrUp,
        setSignInOrUp,
        user,
        setUser,
        loading,
        setLoading,
        signUp,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};
