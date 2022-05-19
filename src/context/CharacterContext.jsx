import { createContext, useContext, useReducer } from 'react';
import { createCharacter, getCharacters } from '../services/characters';
import { useState, useEffect } from 'react';

const characterReducer = async (state, action) => {
  switch (action.type) {
    case 'create_character':
      return {
        character: action.payload
      },
    
    console.log('action', action);
    
    default:
      throw new Error(`Action type ${action.type} has not been defined in ShoppingListProvider`);
  };
}

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState({});
  const [characterList, setCharacterList] = useState([]);
  const [characterDispatch, dispatch] = useReducer(characterReducer, character);

  const fetchAllCharacters = async () => {
    const res = await getCharacters();
    setCharacterList(res);
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const handleCreateNewCharacter = () => {
    dispatch({ type: 'create_character', payload: { characterDispatch }});
    console.log('characterDispatch', characterDispatch)
    console.log('character', character)
  }

  return (
    <CharacterContext.Provider
      value={{
        characterList,
        character,
        setCharacter,
        handleCreateNewCharacter
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if (context === undefined) {
    throw new Error('useCharacter must be called within a CharacterProvider');
  }

  return context;
};
