import { EnergyType } from '../Energy';
import Archetype from './Arquetype';

class Ranger extends Archetype {
  private static _instance: 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }
}

export default Ranger;