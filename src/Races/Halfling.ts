import Race from './Race';

class Halfling extends Race {
  private readonly _maxLifePoints: number = 60;
  private static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.counter += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;