import React from 'react';
import { deleteCharacterById } from '../../services/characters';

export default function CharacterCard({ character, handleDeleteCharacter }) {
  async function handleDeleteClick() {
    await deleteCharacterById(character.id);
    location.reload();
  }

  return (
    <section>
      <div>{character.name}</div>
      <button onClick={handleDeleteClick}>Delete</button>
    </section>
  );
}
