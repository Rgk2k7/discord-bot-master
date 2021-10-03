const chalk = require('chalk');

class Client {
  randInt(max) {
    if(!max){
      return console.log(chalk.red('Error: You must provide a parameter for the limit the number can be generated to!'))
    }

    let int = Math.floor(Math.random() * max);

    return int;
  }
}

module.exports = {
  Client: Client
}