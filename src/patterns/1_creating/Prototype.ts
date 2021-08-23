class Prototype_1 {
  private readonly prop1
  private readonly prop2
  private readonly prop3

  constructor(prop1, prop2, prop3) {
    this.prop1 = prop1
    this.prop2 = prop2
    this.prop3 = prop3
  }

  clone(){
    return new Prototype_1(this.prop1, this.prop2, this.prop3)
  }
}


export const Prototype_Result_1 = () => {
  const prototype_1 = new Prototype_1('prop1', 'prop2', 'prop3')
  const clone_1 = prototype_1.clone()
  const clone_2 = prototype_1.clone()

  console.log(
    prototype_1, 'object',
    clone_1, 'clone_1',
    clone_2, 'clone_2',
    clone_1 === clone_2, 'clone_1 === clone_2'
  )
}
