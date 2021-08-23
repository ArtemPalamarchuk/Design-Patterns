interface DefaultHouseOptions {
  wall: string;
  roof: string;
  door: string;
}

class House {
  private houseOptions: DefaultHouseOptions

  constructor(wall, door, roof) {
    this.houseOptions = {
      door,
      wall,
      roof,
    }
  }
}

class HouseBuilder {
  private readonly house;

  constructor() {
    this.house = new House('wall', 'door', 'roof')
  }

  buildGarage() {
    this.house.garage = true
    return this
  }

  buildTerrace() {
    this.house.terrace = true
    return this
  }

  buildFloors(count: number) {
    this.house.floors = count
    return this
  }

  build() {
    return this.house
  }
}


export const Builder_Result = () => {
  const myHouse = new HouseBuilder()
  myHouse.buildFloors(5).buildTerrace().buildGarage().build()

  console.log(myHouse)
}

