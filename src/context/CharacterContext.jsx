import { createContext, useContext } from 'react';
import { getCharacters } from '../services/characters';
import { useState, useEffect } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterList, setCharacterList] = useState([]);

  const characterState = {
    characterList,
    setCharacterList
  }

  const fetchAllCharacters = async () => {
    const res = await getCharacters();
    console.log('res!!!!!!!!!!', res)
    setCharacterList(res);
  }

  useEffect(() => {
    fetchAllCharacters();
  }, [])
  
  return (
    <CharacterContext.Provider
    value={{ characterState, characterList }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if(context === undefined) {
    throw new Error('useCharacter must be called within a CharacterProvider');
  }

  return context;
}