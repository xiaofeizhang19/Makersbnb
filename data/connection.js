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
