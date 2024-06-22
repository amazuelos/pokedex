"use client";
const PokedexPage: React.FC<PokemonPageProps> = ({ initialPokedexList }) => {
  const [pokedexList] = useState<Pokedex[]>(initialPokedexList);

  if (pokedexList.length === 0) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-6 w-full">
        {pokedexList.map((pokemon, index) => (
          <Link 
            href={`/pokemon/${index + 1}`} 
            className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center '
            key={index}
            >
            {pokemon.name}
          </Link>
        ))}
    </div>
  );
};

import Link from 'next/link';

import { useState } from 'react';

interface Pokedex {
  name: string;
  url: string;
}

interface PokemonPageProps {
  initialPokedexList: Pokedex[];
}




export default PokedexPage;
