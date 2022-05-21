import { client, parseData } from './client';

export async function getCharacters() {
  const request = await client
    .from('character_sheet')
    .select()
    .order('created_at', { ascending: false });
  return parseData(request);
}

export async function getCharacter(id) {
  const request = await client
    .from('character_sheet')
    .select()
    .match({ id })
    .single();
  return parseData(request);
}

export async function createCharacter(content) {
  const request = await client
    .from('character_sheet')
    .insert({ ...content })
    .single();
  return parseData(request);
}

export async function updateCharacterById(content) {
  console.log(`|| content >`, content);
  const request = await client
    .from('character_sheet')
    .update({ ...content })
    .match(content.id);
  console.log(`|| request >`, request);
  return parseData(request);
}

export async function deleteCharacterById(id) {
  const request = await client.from('character_sheet').delete().match({ id });
  return parseData(request);
}
