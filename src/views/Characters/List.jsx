import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/characters';
import CharacterCard from '../../components/Characters/CharacterCard';
import style from './List.css';

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([]);
  // const { characterList, fetchAllCharacters, handleDeleteCharacter } =
  // CharacterProvider();
  // const { characters, dispatch } = CharacterProvider();
  const history = useHistory();
  // const context = useContext(CharacterProvider);

  // const { characterDispatch, dispatch } = context;

  // useEffect(() => {
  //   const fillCharacterArr = async () => {
  //     const payload = await fetchAllCharacters();
  //     console.log(payload);
  //     dispatch({ type: 'reset', payload });
  //   };
  //   fillCharacterArr();
  // }, []);

  useEffect(() => {
    getCharacters().then(setCharacterList).catch(console.error);
  }, []);

  return (
    <>
      {/* <button onClick={() => history.push('/create_character_form')}>
        Add New Character
      </button> */}
      <button
        className={style.addNewCharacter}
        onClick={() => history.push('/characters/add')}
      >
        Add New Character
      </button>
      <div>
        {characterList.map((character) => (
          <CharacterCard
            key={`${character.id}`}
            character={character}
            // handleDeleteCharacter={handleDeleteCharacter}
          />
        ))}
      </div>
    </>
  );
}
