interface User {
  name: string,
  age: number,
  accountNumber: number,
}

class Order {
  private readonly userData: User

  constructor(userData: User) {
    this.userData = userData
  }

  makeDocuments(){
    console.log('make documents');
  }

  callToSuppliers(){
    console.log('call to suppliers');
  }

  setRequestToWarehouse(){
    console.log('set request to ware house');
  }

  productBoxing(){
    console.log('product boxing');
  }

  sendProduct(){
    console.log('product sending');
  }

  makeOrder(){
    console.log('--------- hard logic ---------')
    this.makeDocuments()
    this.callToSuppliers()
    this.setRequestToWarehouse()
    this.productBoxing()
    this.sendProduct()
    console.log('--------- hard logic ---------')
  }
}


export const Facade_Result = () => {
  const order = new Order({name: 'Jo', age: 1, accountNumber: 867958})

  order.makeOrder();
}