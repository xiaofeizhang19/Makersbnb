const { Client } = require('pg')
const client = new Client({
    user: 'xiaofeizhang',
    host: 'localhost',
    database: 'makersbnb',
    password: '',
    port: 5432,
  })
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.message) // Hello World!
});

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res.rows[0])
    client.end()
  })

module.exports = {}