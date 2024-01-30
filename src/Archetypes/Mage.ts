import { EnergyType } from '../Energy';

import Archetype from './Arquetype';

class Mage extends Archetype {
  private static mageInstance: 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.mageInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageInstance;
  }
}

export default Mage;
