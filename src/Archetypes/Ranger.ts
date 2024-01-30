import { EnergyType } from '../Energy';
import Archetypes from './Arquetypes';

class Ranger extends Archetypes {
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
    return Ranger._instance;
  }
}

export default Ranger;