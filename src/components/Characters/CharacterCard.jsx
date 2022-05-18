import React from 'react'

export default function CharacterCard({ character }) {
  console.log('CharacterCard', character)
  return (
    <div>{character.name}</div>
  )
}
