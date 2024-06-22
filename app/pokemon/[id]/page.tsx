// app/pokemon/[id]/page.js
import Link from 'next/link';
import { FetchPokemonUseCase } from '../../../src/application/FecthPokemonUseCase'

const PokemonPage = async ({ params }: { params: any }) => {
  const pokemon = await new FetchPokemonUseCase(params.id).execute();
  return (
    <div className='flex flex-col items-center w-full gap-4 text-center'>
      <h1 className='text-4xl border-b border-b-gray-400 px-4 w-full text-center'>{pokemon.name}</h1>
      <p>ID: {pokemon.id}</p>
      <p className='border-b border-b-gray-400'>Pokedex Description</p>
      <p>{pokemon.flavor_text_entries[0].flavor_text}</p>
      <Link className="rounded-md bg-blue-400 px-6 py-2" href="/">⬅ Back to Pokedex</Link>
    </div>
  );

}

export default PokemonPage;