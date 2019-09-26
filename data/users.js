const query = require('./connection');
module.exports = {
    create: (data, response) => {
        console.log('hello we are in data');
        console.log(data);

    query('INSERT INTO users (username, password_hash, email) VALUES ($1::text, $2::text, $3::text)', 
        [data.username, data.password, data.email], (err, res) => {
            console.log('callback');
            console.log('wuauuahkbkhvbhsjvshjg');
           });
    }
}
// module.exports = {
//   create: (data, response) => {
//     console.log('create');
//     query(
//       // 'INSERT ...',
//       // [data.username, data.password, data.email],
//       // (err, result) => {
//       //   console.log('callback');
//       //   response.send(result);
//   // }
// // }
