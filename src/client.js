class Client {
  constructor(name) {
    if(!name) {
      console.log('You must provide a name for your client!');
    } else {
      this.name = name;
    }
  }
}

module.exports = {
  Client: Client
}