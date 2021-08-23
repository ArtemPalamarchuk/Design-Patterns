import {MonsterFactory} from './Factory_1';
import {NpcFactory} from './Factory_2';

enum Factories {
  NPC = 'NPC',
  MONSTER = 'MONSTER',
}

const abstractFactory = type => {
  switch (type) {
    case Factories.NPC:
      return NpcFactory
    case Factories.MONSTER:
      return MonsterFactory
    default:
      console.error('No factory with such type')
  }
}


export const Abstract_Factory_Result = () => {
  const Unit_1 = abstractFactory(Factories.NPC)
  const Unit_2 = abstractFactory(Factories.MONSTER)

  const unit1 = new Unit_1()
  const unit2 = new Unit_2()

  console.log(unit1, unit1.getStats(), 'Abstract Factory unit 1');
  console.log(unit2, unit2.getStats(), 'Abstract Factory unit 2');
}