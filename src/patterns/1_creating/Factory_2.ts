import {FactoryProps} from './Factory_1';

interface NpcStats {
  hp: number,
}

enum NPC_TYPES {
  QUEST = 'QUEST',
  BANK = 'BANK',
  TELEPORT = 'TELEPORT',
}



export class NpcFactory extends FactoryProps {
  npc_stats: NpcStats
  additionalData: any

  constructor() {
    super()
    this.npc_stats = {
      hp: 99999,
    }
  }

  getStats(): NpcStats {
    return this.npc_stats
  }

  createNpc = (type: NPC_TYPES) => {
    let NpcInstance, additionalData;

    switch (type) {
      case 'QUEST': {
        NpcInstance = QuestNpc;
        break
      }
      case 'BANK': {
        NpcInstance = BankNpc;
        break
      }
      case 'TELEPORT': {
        NpcInstance = TeleportNpc;
        additionalData = {
          global: () => 'Global tp'
        }
        break
      }
    }

    return new NpcInstance(additionalData)
  }
}

class QuestNpc extends NpcFactory {
  private readonly questInfo

  constructor(data = {}) {
    super()
    this.additionalData = data
    this.questInfo = 'info'
  }
}


class BankNpc extends NpcFactory {
  private readonly store

  constructor(data = {}) {
    super()
    this.additionalData = data
    this.store = {size: 50}
  }
}

class TeleportNpc extends NpcFactory {
  private readonly teleport

  constructor(data = {}) {
    super()
    this.additionalData = data
    this.teleport = {cities: []}
  }
}


export const Factory_2_Result = () => {
  const npcFactory = new NpcFactory()

  const npc = [
    npcFactory.createNpc(NPC_TYPES.QUEST),
    npcFactory.createNpc(NPC_TYPES.BANK),
    npcFactory.createNpc(NPC_TYPES.TELEPORT),
  ]

  console.log(npc.map(npc => npc), 'Npc Factory 2');
  console.log(npc.map(npc => npc.getStats()), 'Npc Stats 2');
}
