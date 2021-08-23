class Auto {
  startEngine(engine) {
    engine.runOldEngine()
  }
}

class OldEngine {
  runOldEngine() {
    console.log('run old engine - Adapter')
  }
}

class NewEngine {
  runNewEngine() {
    console.log('run new engine - Adapter')
  }
}

class Adapter {
  private engine

  constructor(engine) {
    this.engine = engine
  }

  runOldEngine() {
    this.engine.runNewEngine()
  }
}


export const Adapter_Result = () => {
  const car = new Auto()
  const old_Engine = new OldEngine()

  const newCar = new Auto()
  const new_Engine = new NewEngine()
  const engine_adapter = new Adapter(new_Engine)

  car.startEngine(old_Engine)
  newCar.startEngine(engine_adapter)
}

