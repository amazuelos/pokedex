import PokedexRepository from '../infrastructure/PokedexRepository'

export class FetchPokedexUseCase {
  async execute() {
    return await new PokedexRepository().fetch();
  }
}