import { EnergyType } from '../Energy';
import Archetype from './Arquetypes';

class Necromancer extends Archetype {
  private static _instance: 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instance;
  }
}

export default Necromancer;