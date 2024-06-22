import PokedexPage from '../src/ui/pages/PokedexPage';
import { FetchPokedexUseCase } from '../src/application/FetchPokedexUseCase';

const HomePage = async () => {
  const initialPokedexList = await new FetchPokedexUseCase().execute();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='border-b border-b-gray-400 w-full text-center mb-4 p-4'>Pokédex</h1>
      <PokedexPage initialPokedexList={initialPokedexList.results} />
    </div>
  );
};

export default HomePage;