import { createReadStream } from 'fs';
import csv from 'csv-parser';
import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo',
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Succesfully connected to database');
});

const createTable = `CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  prefix VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  address VARCHAR(255),
  height FLOAT,
  bitcoin_address VARCHAR(255),
  color_preference VARCHAR(255)
)`;

connection.query(createTable, (error) => {
  if (error) throw error;
  console.log('Successfully created table');
});

createReadStream('assets/users.csv')
  .pipe(csv())
  .on('data', (row) => {
    let values = [
      row.id,
      row.prefix,
      row.first_name,
      row.last_name,
      row.address,
      row.height,
      row.bitcoin_address,
      row.color_preference,
    ];
    connection.query(
      'INSERT INTO users (id, prefix, first_name, last_name, address, height, bitcoin_address, color_preference) VALUES ?',
      [...values],
      (error, result) => {
        if (error) throw error;
      },
    );
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
