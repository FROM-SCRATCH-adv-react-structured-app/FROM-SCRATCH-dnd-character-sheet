import React, { useContext, useState, useEffect } from 'react';
import { CharacterProvider } from '../../context/CharacterContext';
import CharacterCard from '../../components/Characters/CharacterCard';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export default function CharacterList() {
  const { characterList, fetchAllCharacters, handleDeleteCharacter } =
    CharacterProvider();
  const history = useHistory();
  const context = useContext(CharacterProvider);

  const { characterDispatch, dispatch } = context;

  useEffect(() => {
    const fillCharacterArr = async () => {
      const payload = await fetchAllCharacters();
      console.log(payload);
      dispatch({ type: 'reset', payload });
    };
    fillCharacterArr();
  }, []);

  return (
    <>
      <button onClick={() => history.push('/create_character_form')}>
        Add New Character
      </button>
      <div>
        {characterList.map((character) => (
          <CharacterCard
            key={`${character.id}`}
            character={character}
            handleDeleteCharacter={handleDeleteCharacter}
          />
        ))}
      </div>
    </>
  );
}
