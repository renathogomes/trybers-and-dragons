import Race from './Race';

class Dwarf extends Race {
  private static _counter = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints: number = 80) {
    super(name, dexterity);
    Dwarf._counter += 1;
  }

  static override createdRacesInstances(): number {
    return Dwarf._counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
