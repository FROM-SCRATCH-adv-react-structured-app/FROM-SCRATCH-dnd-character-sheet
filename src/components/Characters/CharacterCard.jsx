import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character, handleDeleteCharacter }) {
  function handleDeleteClick() {
    handleDeleteCharacter(character.id);
  }

  return (
    <section>
      <div>{character.name}</div>
      <button onClick={handleDeleteClick}>Delete</button>
    </section>
  );
}
