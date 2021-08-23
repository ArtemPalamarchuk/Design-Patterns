class Employee {
  private readonly name
  private readonly salary

  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} выполняет ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'UI interfaces'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'Programm testing'
  }
}


export const Template_Result = () => {
  const dev = new Developer('Artem', `2500$`)
  console.log(dev.getPaid());
  console.log(dev.work());

  const tester = new Tester('Vika', `5$`)
  console.log(tester.responsibilities());
  console.log(tester.work());
}