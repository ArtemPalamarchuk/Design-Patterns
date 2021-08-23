interface CarInterface {
  model: string,
  price: number,
}

class Car {
  public model
  public price

  constructor({model, price} :CarInterface) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  private cars: CarInterface[] = []

  create(model, price){
    const candidate = this.getCar(model)
    if (candidate) return candidate

    const newCar = new Car({model, price})
    this.cars.push(newCar)
    return newCar
  }

  getCar(model) {
    return this.cars.find(car => car.model === model)
  }

  showAllCars(){
    console.log(this.cars);
  }
}


export const Flyweight_Result = () => {
  const factory = new CarFactory()

  factory.create('tesla', 10000)
  factory.create('audi', 10000)
  factory.create('tesla', 12000)
  factory.showAllCars()
}