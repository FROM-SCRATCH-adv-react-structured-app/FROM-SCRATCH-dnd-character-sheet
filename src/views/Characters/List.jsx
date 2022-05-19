import React from 'react'
import { useCharacter } from '../../context/CharacterContext';
import CharacterCard from '../../components/Characters/CharacterCard';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export default function CharacterList() {
  const { characterList, fetchAllCharacters, handleDeleteCharacter } = useCharacter();
  const history = useHistory();
  
  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <>
      <button onClick={() => history.push('/create_character_form')}>Add New Character</button>
      <div>
        {characterList.map((character) => 
          <CharacterCard 
            key={`${character.id}`}
            character={character}
            handleDeleteCharacter={handleDeleteCharacter}
            />)}
      </div>
    </>
    
  )
}
