import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/characters';
import { useUserContext } from '../../context/UserContext';
import {
  deleteCharacterById,
  updateCharacter,
} from '../../services/characters';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from '../../hooks/useForm';
import style from './Details.css';
import { useState } from 'react';

export default function CharacterDetails() {
  const [edit, setEdit] = useState(false);
  const { user } = useUserContext();
  const { id } = useParams();
  const { character } = useCharacter(id);
  const history = useHistory();

  const isOwner = user.id === character.user_id;

  async function handleDeleteClick() {
    await deleteCharacterById(character.id);
    history.push('/characters');
  }

  const { formState, handleChange } = useForm({
    characterName: '',
    characterClass: 'Monk',
    characterRace: 'Human',
    characterAlignment: 'Lawful Good',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const updateChar = {
      id: character.id,
      user_id: user.id,
      name: formState.characterName || character.name,
      // class: formState.characterClass,
      // race: formState.characterRace,
      // alignment: formState.characterAlignment,
      // xp: 0,
      // ac: 0,
      // hp: 0,
      // level: 1,
      // stats: stats,
    };
    setEdit(false);

    console.log(`|| updateChar >`, updateChar);

    await updateCharacter(updateChar).then(console.log);
    // history.replace('/characters');
  }

  console.log(`|| character >`, character);

  return (
    <>
      <div>Character Details</div>
      {!edit ? (
        <h3>{character.name}</h3>
      ) : (
        <input
          name="characterName"
          onChange={handleChange}
          type="text"
          id="characterName"
          value={formState.characterName || character.name}
        />
      )}
      <p>Class: {character.class}</p>
      <p>Race: {character.race}</p>
      <p>Alignment: {character.alignment}</p>
      <div className={style.buttonDiv}>
        {isOwner ? <button onClick={handleDeleteClick}>Delete</button> : ''}
        {isOwner ? (
          <button
            onClick={() => {
              !edit ? setEdit(true) : setEdit(false);
            }}
          >
            edit
          </button>
        ) : (
          <button>copy</button>
        )}
        {edit ? <button onClick={handleSubmit}>save</button> : () => {}}
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
