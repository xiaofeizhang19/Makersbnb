const { Client } = require('pg')

// I create a function to help queries execution
async function query(query, parameters) {
    const client = new Client({
        user: 'makersbnb_user',
        host: 'localhost',
        database: 'makersbnb',
        password: '',
        port: 5432,
      });
    client.connect();

    try {
        return await client.query(query, parameters);
    } finally {
        client.end();
    }
};

module.exports = query;
