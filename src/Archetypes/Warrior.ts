import { EnergyType } from '../Energy';
import Archetype from './Arquetypes';

class Warrior extends Archetype {
  private static _instance: 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instance;
  }
}

export default Warrior;