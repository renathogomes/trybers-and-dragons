import Race from './Race';

class Elf extends Race {
  private readonly _maxLifePoints: number = 99;
  private static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.counter += 1;
  }

  static createdRacesInstances(): number {
    return Elf.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;