const { Client } = require('pg')

// I create a function to help queries execution
function query(query, parameters, callback) {
    const client = new Client({
        user: 'makersbnb_user',
        host: 'localhost',
        database: 'makersbnb',
        password: '',
        port: 5432,
      });
    client.connect();
    client.query(query, parameters, (err, res) => {
        client.end();
        callback(err, res);
    });
};

module.exports = query;

query('INSERT INTO users (username, password_hash, email) VALUES ($1::text, $2::text, $3::text)',
['cat', '123', 'cat@email.com'], (err, res) => {
    console.log('callback');
    console.log(res);
   });
