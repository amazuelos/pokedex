import Api from '../services/Api';

const API_POKEDEX_PATH: string = '/pokemon?limit=151';
export default class PokedexRepository {
  async fetch() {
    const response = new Api().get(API_POKEDEX_PATH);
    return response;
  }
}
