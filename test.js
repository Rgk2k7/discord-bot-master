const Master = require('./index.js');

const client = new Master.Client();

let int = client.randInt(1000)

console.log(int)