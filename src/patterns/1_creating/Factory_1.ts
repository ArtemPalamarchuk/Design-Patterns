interface MonsterStats {
  hp: number,
  mp: number,
  atk: number,
  def: number,
}

enum MONSTER_STATS_TYPES {
  simple = 'simple',
  gold = 'gold',
  platinum = 'platinum',
}

export abstract class FactoryProps {
  abstract getStats();
}

export class MonsterFactory extends FactoryProps {
  monster_stats: MonsterStats
  extra_stats: any

  private default_stats = {
    hp: 200,
    mp: 100,
    atk: 10,
    def: 5,
  }

  constructor() {
    super();
    this.monster_stats = this.default_stats
  }

  getStats(): MonsterStats {
    return this.monster_stats
  }

  createMonster = (type: MONSTER_STATS_TYPES) => {
    let MonsterInstance, additionalData;

    switch (type) {
      case MONSTER_STATS_TYPES.simple: {
        MonsterInstance = WeakMonster;
        break
      }
      case MONSTER_STATS_TYPES.gold: {
        MonsterInstance = AverageMonster;
        break
      }
      case MONSTER_STATS_TYPES.platinum: {
        MonsterInstance = StrongMonster;
        additionalData = {
          ult: () => 'Super Skill'
        }
        break
      }
      default:
        MonsterInstance = WeakMonster;
    }

    return new MonsterInstance(additionalData)
  }
}

class WeakMonster extends MonsterFactory {
  constructor(data = {}) {
    super()
    this.extra_stats = data
  }
}

class AverageMonster extends MonsterFactory {
  constructor(data = {}) {
    super()
    this.monster_stats.hp += 100;
    this.extra_stats = data
  }
}

class StrongMonster extends MonsterFactory {
  constructor(data = {}) {
    super()
    this.monster_stats.hp += 200;
    this.extra_stats = data
  }
}


export const Factory_1_Result = () => {
  const monsterFactory = new MonsterFactory()

  const monsters = [
    monsterFactory.createMonster(MONSTER_STATS_TYPES.simple),
    monsterFactory.createMonster(MONSTER_STATS_TYPES.gold),
    monsterFactory.createMonster(MONSTER_STATS_TYPES.platinum),
  ]

  console.log(monsters.map(monster => monster), 'Monster Factory 1');
  console.log(monsters.map(monster => monster.getStats()), 'Monster Stats 1');
}
