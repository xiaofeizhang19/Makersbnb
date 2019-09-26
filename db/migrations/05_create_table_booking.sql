CREATE TABLE IF NOT EXISTS booking(
    id SERIAL PRIMARY KEY, 
    check_in TIMESTAMP NOT NULL, 
    check_out TIMESTAMP NOT NULL, 
    space_id INT NOT NULL, 
    customer_id INT NOT NULL,
    FOREIGN KEY(space_id) REFERENCES space(id),
    FOREIGN KEY(customer_id) REFERENCES users(id)
);
