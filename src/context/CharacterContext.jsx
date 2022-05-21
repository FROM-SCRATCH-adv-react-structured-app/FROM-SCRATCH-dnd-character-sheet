// import { createContext, useContext, useReducer } from 'react';
// import { createCharacter, getCharacters } from '../services/characters';
// import { useState, useEffect } from 'react';
// import { useUserContext } from './UserContext';

// const characterReducer = async (state, action) => {
//   switch (action.type) {
//     case 'create_character':
//       const upload = await createCharacter(action.payload.char);

//       return {
//         upload,
//       };

//     case 'delete_character':
//       console.log('state', state);
//       const deletedCharacter = state.filter(
//         (character) => character.id !== action.payload.id
//       );
//       return [...deletedCharacter];

//     case 'reset':
//       return action;

//     default:
//       throw new Error(
//         `Action type ${action.type} has not been defined in CharacterProvider`
//       );
//   }
// };

// const CharacterContext = createContext();

// export const CharacterProvider = ({ children }) => {
//   const [character, setCharacter] = useState({});
//   const { user } = useUserContext();
//   const [characterList, setCharacterList] = useState([]);

//   // const [characterDispatch, dispatch] = useReducer(
//   //   characterReducer,
//   //   handleNull()
//   // );

//   const fetchAllCharacters = async () => {
//     const res = await getCharacters();
//     setCharacterList(res);
//     return res;
//   };

//   const handleCreateNewCharacter = async (character) => {
//     console.log(`|| submit in CONTEXT >`);
//     dispatch({
//       type: 'create_character',
//       payload: { char: character },
//     });
//   };

//   const handleDeleteCharacter = async (id) => {
//     dispatch({ type: 'delete_character', payload: { id } });
//   };

//   const [characterDispatch, dispatch] = useReducer(characterReducer);

//   return (
//     <CharacterContext.Provider
//       value={{
//         fetchAllCharacters,
//         characterList,
//         character,
//         setCharacter,
//         handleCreateNewCharacter,
//         handleDeleteCharacter,
//         characterDispatch,
//         dispatch,
//       }}
//     >
//       {children}
//     </CharacterContext.Provider>
//   );
// };

// // export const useCharacter = ({ children }) => {
// // const context = useContext(CharacterContext);
// // const [characterDispatch, dispatch] = useReducer(characterReducer);

// //   if (context === undefined) {
// //     throw new Error('useCharacter must be called within a CharacterProvider');
// //   }

// //   return context;
// // };
