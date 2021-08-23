class Originator {

  private state: number;

  constructor(state: number) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  public doSomething(): void {
    this.state = Math.random();
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}


interface Memento {
  getState(): number;
  getName(): string;
  getDate(): string;
}

class ConcreteMemento implements Memento {
  private readonly state: number;
  private readonly date: string;

  constructor(state: number) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): number {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}


class Caretaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log('\nCaretaker: Saving Originator\'s state...');
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();

    console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
    this.originator.restore(memento);
  }

  public showHistory(): void {
    console.log('Caretaker: Here\'s the list of mementos:');
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}


export const Memento_Result = () => {
  const originator = new Originator(123);
  const caretaker = new Caretaker(originator);

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  console.log('');
  caretaker.showHistory();

  console.log('\nRollback!\n');
  caretaker.undo();

  console.log('\nRollback!\n');
  caretaker.undo();
}