import React from 'react'

export default function CharacterCard({ character, handleDeleteCharacter }) {

  function handleDeleteClick() {
    handleDeleteCharacter(character.id)
  }

  return (
    <>
      <div>{character.name}</div>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  )
}
