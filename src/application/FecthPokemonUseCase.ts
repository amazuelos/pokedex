import PokemonRepository from '../infrastructure/PokemonRepository'

export class FetchPokemonUseCase {
  public id;
  
  constructor(id: number){
    this.id = id;
  }

  async execute() {
    return await new PokemonRepository().fetchById(this.id);
  }
}