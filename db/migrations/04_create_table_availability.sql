CREATE TABLE IF NOT EXISTS availability(
    id SERIAL PRIMARY KEY, 
    start_date TIMESTAMP NOT NULL, 
    end_date TIMESTAMP NOT NULL, 
    status VARCHAR(15) NOT NULL, 
    space_id INT NOT NULL, 
    FOREIGN KEY(space_id) REFERENCES space(id)
);
