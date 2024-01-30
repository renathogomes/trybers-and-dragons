import { EnergyType } from '../Energy';
import Archetypes from './Arquetypes';

class Mage extends Archetypes {
  private static _instance: 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._instance;
  }
}

export default Mage;
