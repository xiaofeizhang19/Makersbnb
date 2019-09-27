const query = require('./connection');
module.exports = {
  create: (data, response) => {
    // console.log('hello we are in data');
    // console.log(data.check_in);
    // check_in = (new Date(data.check_in)).getTime();
    timestamp1 = data.check_in + ' 00:00:00-07'
    timestamp2 = data.check_out + ' 00:00:00-07'

    query('INSERT INTO booking (check_in, check_out, space_id, customer_id) VALUES ($1, $2, $3, $4)',
    [timestamp1, timestamp2, data.space_id, data.customer_id], (err, res) => {
      // console.log('callback');
      // console.log(data.check_in);

      console.log(err);
      console.log('wuauuahkbkhvbhsjvshjg');
    });
  }
}
