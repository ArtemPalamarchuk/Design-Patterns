class Account {
  private incomer;
  public balance;
  public name;

  pay(price){
    if(this.canPay(price)){
      console.log(`order paid by ${this.name}`);
    }else if(this.incomer){
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(price)
    }else {
      console.log('not enough money');
    }
  }

  canPay(amount){
    return this.balance >= amount
  }

  setNext(account){
    this.incomer = account
  }
}

class Master extends Account{
  constructor(balance) {
    super();
    this.name = 'Master Card'
    this.balance = balance
  }
}

class Paypal extends Account{
  constructor(balance) {
    super();
    this.name = 'Paypal'
    this.balance = balance
  }
}

class Qiwi extends Account{
  constructor(balance) {
    super();
    this.name = 'Qiwi'
    this.balance = balance
  }
}


export const COR_Result = () => {
  const masterCard = new Master(100)
  const payPal = new Paypal(200)
  const qiwi = new Qiwi(500)

  masterCard.setNext(payPal)
  payPal.setNext(qiwi)

  masterCard.pay(239)
}