import React from 'react';
import style from './CharacterCard.css';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {

  return (
    <Link to={`/characters/${character.id}`}>
      <section className={style.characterCard} onClick={() => {}}>
        <div>{character.name}</div>
      </section>
    </Link>
    
  );
}
