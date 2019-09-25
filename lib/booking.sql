CREATE TABLE booking(booking_id SERIAL PRIMARY KEY, check_in TIMESTAMP, check_out TIMESTAMP, space_id INT, FOREIGN KEY(space_id) REFERENCES space(space_id));
ALTER TABLE booking 
makersbnb-# ADD CONSTRAINT customerfk FOREIGN KEY (customer_id) REFERENCES owner (id) MATCH FULL;