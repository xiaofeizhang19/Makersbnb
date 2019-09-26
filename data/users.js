const query = require('./connection');
module.exports = {
  create: (data, response) => {
    query('INSERT INTO users (username, password_hash, email) VALUES ($1::text, $2::text, $3::text)', 
      [data.username, data.password, data.email], (err, res) => {
        console.log('hello from signing up');
      });
  },

  login: (data, response) => {
    query('SELECT * FROM users WHERE username = $1::text', 
      [data.username], (err, result, fields) => {
        console.log(result);
        if (err) {
          console.log("error");
          return;
        }
        // var rows = JSON.parse(JSON.stringify(results[0]));
        // console.log(rows);
        // if (result.length > 0) {
        //   console.log("fine");
        // } 
        // if (row.length === 0) {
        //   console.log('user does not exist')
        // }
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
