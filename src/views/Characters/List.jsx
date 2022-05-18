import React from 'react'
import { useCharacter } from '../../context/CharacterContext';
import CharacterCard from '../../components/Characters/CharacterCard';

export default function CharacterList() {
  const { characterList } = useCharacter();
  
  return (
    <div>
      {characterList.map((character) => 
        <CharacterCard 
          key={`${character.id}`}
          character={character}
          />)}
    </div>
  )
}
