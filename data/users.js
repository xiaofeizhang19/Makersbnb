const query = require('./connection');
const queryAsync = require('./connectionAsync');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  create: (data, response) => {
    bcrypt.hash(
      data.password, 
      saltRounds,
      function(err, hash) {
        if (err) {
          console.log(err.stack);
          response.status(500);
          response.send({"result": {"error": "NO_CLUE"}});
          return;
        }

        query(
          `INSERT INTO users (username, password_hash, email) 
          VALUES ($1::text, $2::text, $3::text)
          RETURNING id`,
          [data.username, hash, data.email],
          (err, result) => {
            if (!err) {
              const user_id = result.rows[0];
              response.send({"result": {"user_id": user_id}});
              return;
            }
    
            if (err.code === "23505") {
              response.status(409);
              response.send({"result": {"error": "USER_EXISTS"}});
            } else if (err.code === "23502") {
              response.status(400);
              response.send({"result": {"error": "MISSING_DATA"}});
            } else {
              console.log(err.stack);
              response.status(500);
              response.send({"result": {"error": "NO_CLUE"}});
            }
          }
        );
      }
    );  
  },

  createAsync: async (data, response) => {
    let hash;
    try {
      hash = await bcrypt.hash(data.password, saltRounds);
    } catch(err) {
      return error(response, err);
    }

    let result;
    try {
      result = await queryAsync(
        `INSERT INTO users (username, password_hash, email) 
        VALUES ($1::text, $2::text, $3::text)
        RETURNING id`,
        [data.username, hash, data.email]
      );
    } catch(err) {
      if (err.code === "23505") {
        return error(response, err, 409, "USER_EXISTS");
      } else if (err.code === "23502") {
        return error(response, err, 400, "MISSING_DATA");
      } else {
        return error(response, err);
      }
    }

    const user_id = result.rows[0];
    response.send({"result": {"user_id": user_id}});
  },

  login: async (data, response) => {
    const result = await queryAsync(
      'SELECT password_hash FROM users WHERE username = $1::text',
      [data.username]
    );
    if (result.rows.length === 0) {
      response.status(401);
      response.send({"result": {"error": "LOGIN_FAILED"}});
      return;
    }

    const hash = result.rows[0].password_hash;

    const match = await bcrypt.compare(data.password, hash);
    
    if (!match) {
      response.status(401);
      response.send({"result": {"error": "LOGIN_FAILED"}});
      return;
    }

    response.send({"result": {"session_id": 0}});
  }
}

function error(response, err, status = 500, errorString = "NO_CLUE") {
  if (status >= 500) {
    console.log(err.stack);
  }
  response.status(status);
  response.send({"result": {"error": errorString}});
}
