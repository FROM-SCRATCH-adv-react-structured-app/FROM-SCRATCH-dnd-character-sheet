import React from 'react';
import { deleteCharacterById } from '../../services/characters';
import { useUserContext } from '../../context/UserContext';

export default function CharacterCard({ character, handleDeleteCharacter }) {
  const { user } = useUserContext();

  console.log(`|| user >`, user);
  console.log(`|| character >`, character);

  const isOwner = user.id === character.user_id;

  async function handleDeleteClick() {
    await deleteCharacterById(character.id);
    location.reload();
  }

  return (
    <section>
      <div>{character.name}</div>
      {isOwner ? <button onClick={handleDeleteClick}>Delete</button> : ''}
    </section>
  );
}
