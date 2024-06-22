import Api from '../services/Api';

const API_POKEMON_PATH: string = '/pokemon-species/';
export default class PokemonRepository {
  async fetchById(id: number) {
    const response = new Api().get(`${API_POKEMON_PATH}/${id}`);
    return response;
  }
}
