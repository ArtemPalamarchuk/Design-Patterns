/*class User {
  private readonly name
  private room

  constructor(name) {
    this.name = name
    this.room = null
  }

  send(msg, to) {
    this.room.send(msg, this, to)
  }

  receive(msg, from) {
    console.log(`${from.name} => ${this.name}: ${msg}`)
  }
}

class ChatRoom {
  private readonly users

  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this;
  }

  send(msg, from, to) {
    if (to) {
      to.receive(msg, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(msg, from)
        }
      })
    }
  }
}

export const Mediator_Result = () => {
  const vlad = new User('Vlad')
  const lena = new User('Lena')
  const igor = new User('Igor')

  const room = new ChatRoom()

  room.register(vlad)
  room.register(lena)
  room.register(igor)

  vlad.send('Hello', lena)
  lena.send('Hello Hello', vlad)
  igor.send('vsem privet', null)
}*/

interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component2 = c2;

    this.component1.setMediator(this);
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers following operations:');
      this.component2.doC();
    }

    if (event === 'D') {
      console.log('Mediator reacts on D and triggers following operations:');
      this.component1.doB();
      this.component2.doC();
    }
  }
}

class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class Component1 extends BaseComponent {
  public doA(): void {
    this.mediator.notify(this, 'A');
  }

  public doB(): void {
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  public doC(): void {
    this.mediator.notify(this, 'C');
  }

  public doD(): void {
    this.mediator.notify(this, 'D');
  }
}

export const Mediator_Result = () => {
  const c1 = new Component1();
  const c2 = new Component2();

  const mediator = new ConcreteMediator(c1, c2);

  c1.doA();
  c2.doD();
}