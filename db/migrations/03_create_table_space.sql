CREATE TABLE IF NOT EXISTS space(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(60) NOT NULL, 
    description VARCHAR(1000), 
    price INT NOT NULL, 
    capacity INT NOT NULL, 
    owner_id INT NOT NULL, 
    FOREIGN KEY(owner_id) REFERENCES users(id)
);