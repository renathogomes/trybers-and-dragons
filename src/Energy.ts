export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type: EnergyType;
  amount: number;
}