class Model {
  protected readonly color

  constructor(color) {
    this.color = color
  }
}

class Color {
  private readonly type

  constructor(type) {
    this.type = type
  }

  get() {
    return this.type
  }
}

class Metallic extends Color {
  constructor() {
    super('metallic')
  }
}


class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `auto: audi, color ${this.color.get()}`
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `auto: bmw, color ${this.color.get()}`
  }
}


export const Bridge_Result = () => {
  const blackBmw = new Bmw(new Metallic())

  console.log(blackBmw.paint());
}
