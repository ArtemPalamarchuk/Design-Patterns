class Vehicle {
  protected timeTaken;

  travelTime() {
    return this.timeTaken
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5
  }
}

class Car1 extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime()
  }
}


export const Strategy_Result = () => {
  const comumte = new Commute()

  console.log(comumte.travel(new Taxi()));
  console.log(comumte.travel(new Car1()));
  console.log(comumte.travel(new Bus()));
}