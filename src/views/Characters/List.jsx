import React from 'react'
import { useCharacter } from '../../context/CharacterContext';
import CharacterCard from '../../components/Characters/CharacterCard';
import { useHistory } from 'react-router-dom';

export default function CharacterList() {
  const { characterList } = useCharacter();
  const history = useHistory();
  
  return (
    <>
      <button onClick={() => history.push('/create_character_form')}>Add New Character</button>
      <div>
        {characterList.map((character) => 
          <CharacterCard 
            key={`${character.id}`}
            character={character}
            />)}
      </div>
    </>
    
  )
}
