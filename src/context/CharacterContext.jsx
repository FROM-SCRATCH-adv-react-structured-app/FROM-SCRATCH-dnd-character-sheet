import { createContext, useContext, useReducer } from 'react';
import { createCharacter, getCharacters } from '../services/characters';
import { useState, useEffect } from 'react';
import { useUserContext } from './UserContext';

const characterReducer = async (state, action) => {
  console.log(`|| action.payload.char >`, action.payload.char);
  switch (action.type) {
    case 'create_character':
      const upload = await createCharacter(action.payload.char);

      return {
        upload,
      };

    default:
      throw new Error(
        `Action type ${action.type} has not been defined in ShoppingListProvider`
      );
  }
};

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState({});
  const { user } = useUserContext();
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
    console.log(`|| character >`, character);
    dispatch({
      type: 'create_character',
      payload: { user_id: user.id, char: character },
    });
    console.log('characterDispatch', characterDispatch);
  };

  return (
    <CharacterContext.Provider
      value={{
        characterList,
        character,
        setCharacter,
        handleCreateNewCharacter,
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
