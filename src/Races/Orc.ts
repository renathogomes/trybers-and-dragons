import Race from './Race';

class Orc extends Race {
  private static _count = 0;
  private readonly _maxLifePoints: number = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._count += 1;
  }

  static createdRacesInstances(): number {
    return Orc._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;