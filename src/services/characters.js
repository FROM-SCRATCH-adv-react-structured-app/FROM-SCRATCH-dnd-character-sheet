import { client, parseData } from './client';

export async function getCharacters() {
  const request = await client
    .from('character_sheet')
    .select()
    .order('created_at', { ascending: false });
  return parseData(request);
}

export async function createCharacter({ userId, content }) {
  const request = await client
    .from('character_sheet')
    .insert({ user_id: userId, content });
  return parseData(request);
}

export async function updateCharacterById(id, content) {
  const request = await client
    .from('character_sheet')
    .update({ content })
    .match({ id });
  return parseData(request);
}

export async function deleteCharacterById(id) {
  const request = await client.from('character_sheet').delete().match({ id });
  return parseData(request);
}
