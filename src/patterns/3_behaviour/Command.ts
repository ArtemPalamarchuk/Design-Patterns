class Driver {
  private command

  constructor(command) {
    this.command = command
  }

  execute() {
    this.command.execute()
  }
}

class Engine {
  private state

  constructor() {
    this.state = false
  }

  on() {
    this.state = true
  }

  off() {
    this.state = false
  }
}

class OnStartCommand {
  private engine

  constructor(engine) {
    this.engine = engine
  }

  execute() {
    this.engine.on()
  }
}

class OffCommand {
  private engine

  constructor(engine) {
    this.engine = engine
  }

  execute() {
    this.engine.off()
  }
}


export const Command_Result = () => {
  const engine = new Engine()
  console.log(engine);

  const onStartCommand = new OnStartCommand(engine)
  const driver = new Driver(onStartCommand)
  driver.execute()

  console.log(engine);
}