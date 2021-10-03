const chalk = require('chalk');

class Client {
  randInt(max) {
    if(!max){
      return console.log(chalk.red('Error: You must provide a parameter for the limit the number can be generated to!'))
    }
    if(isNaN(max)){
      return console.log(chalk.red('Error: Max must be type of int value!'))
    }

    let int = Math.floor(Math.random() * max);

    return int;
  }
}

module.exports = {
  Client: Client
}