export class Pokemon {
  public id;
  public name;
  public description;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}