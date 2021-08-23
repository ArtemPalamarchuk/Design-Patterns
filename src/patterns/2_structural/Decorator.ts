interface SomeServerData{
  ip: string,
  port: number,
}

class Server {
  data: SomeServerData = {
    ip: '',
    port: 0,
  }

  constructor(ip, port) {
    this.data.ip = ip
    this.data.port = port
  }

  getUrl() {
    return `https://${this.data.ip}:${this.data.port}`
  }
}

const aws = server => {
  server.data.isAWS = true
  server.awsInfo = () => server.data

  return server
}

const azure = server => {
  server.data.isAzure = true
  server.data.port += 500

  return server
}


export const Decorator_Result = () => {
  const server1 = aws(new Server('12.34.56.78', 8080))
  const server2 = azure(new Server('12.34.56.78', 1000))

  console.log(server1.awsInfo());
  console.log(server2.getUrl());
}