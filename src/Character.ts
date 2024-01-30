import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy = { type_: 'mana', amount: 0 };
  private _name: string;

  constructor(name: string) {
    const valueRandom = getRandomInt(1, 10);
    this._name = name;
    this._dexterity = valueRandom;
    this._race = new Elf(name, valueRandom);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy.type_ = this._archetype.energyType;
    this._energy.amount = getRandomInt(1, 10);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const attackDamage = this._strength;
    enemy.receiveDamage(attackDamage);
  }

  levelUp(): void {
    const raceMaxLife = this._race.maxLifePoints;
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > raceMaxLife) {
      this._maxLifePoints = raceMaxLife;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get energy() {
    return { ...this._energy };
  }

  get dexterity() {
    return this._dexterity;
  }
}

export default Character;
