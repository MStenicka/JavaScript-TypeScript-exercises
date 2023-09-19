import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected to the MySQL server');
});

export default connection;
