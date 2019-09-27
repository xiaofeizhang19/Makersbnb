const query = require('./connection');

module.exports = {
    create: (data, response) => {
        console.log('hello we are in data');
        console.log(data);

    query('INSERT INTO space (name, description, price, capacity, owner_id) VALUES ($1::text, $2::text, $3::int, $4::int, $5::int)', 
        [data.name, data.description, parseInt(data.price), parseInt(data.capacity), parseInt(data.ownerId)], (err, res) => {
            console.log('callback');
            console.log('james and val');
            console.log(err);
            console.log(res);
           });
    },

   
    read: (data, response) => {
        query('SELECT id, name, description, price, capacity, owner_id FROM space',[], (err, res) => {
        
        var test2 = JSON.stringify(res.rows);
        response.send(test2);
    });
    
    //response.send({"result": {"session_id": 0}});
   
    }
}