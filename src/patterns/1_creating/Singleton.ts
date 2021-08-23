interface InstanceType {
  dbConnect: {
    host: string
    clientId: string
    clientSecret: string
  }
}

export class Singleton {
  private static instance: InstanceType = null

  constructor(data: InstanceType) {
    if (!Singleton.instance) Singleton.instance = data
  }

  get() {
    return Singleton.instance
  }
}

export const Singleton_Result = () => {
  const singleton = new Singleton({
    dbConnect: {
      host: 'sql.mysite.com',
      clientId: 'xxx',
      clientSecret: 'xxx'
    }
  })

  const singleton2 = new Singleton({
    dbConnect: {
      host: 'another.host.com',
      clientId: '123',
      clientSecret: '123'
    }
  })
  console.log(singleton.get(), 'Singleton Instance 1');
  console.log(singleton2.get(), 'Singleton Instance 2');
}
