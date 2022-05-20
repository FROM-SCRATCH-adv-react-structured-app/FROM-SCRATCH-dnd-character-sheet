import { useParams } from 'react-router-dom'
import { useCharacter } from '../../hooks/characters'
import { useUserContext } from '../../context/UserContext';
import { deleteCharacterById } from '../../services/characters';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CharacterDetails() {
  const { user } = useUserContext()
  const { id } = useParams();
  const { character } = useCharacter(id);
  const history = useHistory();
  
  const isOwner = user.id === character.user_id;

  async function handleDeleteClick() {
    await deleteCharacterById(character.id);
    history.push('/characters');
  }

  return (
  <>
  <div>Character Details</div>
    <h3>{character.name}</h3>
    <p>Class: {character.class}</p>
    <p>Race: {character.race}</p>
    <p>Alignment: {character.alignment}</p>
    {isOwner ? <button onClick={handleDeleteClick}>Delete</button> : ''}
  </>
    
  )
}
