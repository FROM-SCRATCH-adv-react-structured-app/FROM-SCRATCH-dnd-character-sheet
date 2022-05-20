import { createContext, useReducer } from 'react';

export const CharacterContext = createContext();

function reducer(characters, { type, payload }) {
  switch (type) {
    case 'create':
      return [payload, ...characters];
    case 'reset':
      // console.log(`|| payload >`, payload);
      return payload;
    default:
      throw Error('yep Error');
  }
}



export const CharacterProvider = ({ children }) => {
  const [characters, dispatch] = useReducer(reducer);

  return (
    <CharacterContext.Provider value={{ characters, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};
