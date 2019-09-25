const { Client } = require('pg')
const client = new Client({
    user: 'makersbnb_user',
    host: 'localhost',
    database: 'makersbnb',
    password: '',
    port: 5432,
  })
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
});

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end();
});

//   client.query('INSERT into owner (username, password_hash, email) VALUES ($1::text, $2::text, $3::text)', ['cat', '12345', 'cat@gmail.com'], (err, res) => {
//     console.log(err ? err.stack : res)
//     client.end()

// });