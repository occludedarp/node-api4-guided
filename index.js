require('dotenv').config();
 //read from a .env file located in the root of the project
 //this merges the key/value pairs from the env file to process
const server = require('./api/server.js');

//you do not need to set the port locally on your computer
//just allow for the server to tell you what port they would like to use
//define the port to be variable that is dynamically assigned by the server
// SCREAMING__SNAKE_CASE
//heroku will place the the PORT environ value on their server

const port = process.env.PORT || 5000
// const port = 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
