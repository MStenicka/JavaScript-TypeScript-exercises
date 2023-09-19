import express from 'express';
import { createConnection } from 'mysql2';

const app = express();
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

app.set('view engine', 'ejs');

// endpoint "/titles"
app.get('/books/titles', (req, res) => {
  const query = connection.query(
    'SELECT book_name FROM book_mast',
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.render('books-titles', { books: result });
      }
    },
  );

  console.log(`>> Executed query was: ${query.sql}`);
});

app.get('/books', (req, res) => {
  let sqlQuery =
    'SELECT book_mast.book_name AS title, author.aut_name AS author, category.cate_descrip AS category, publisher.pub_name AS publisher, book_mast.book_price AS price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id';
  let filters = req.query;
  let where = ' WHERE ';
  let values = [];

  if (filters.category) {
    sqlQuery += where + 'category.cate_descrip = ?';
    where = ' AND ';
    values.push(filters.category);
    console.log(filters.category);
  }
  if (filters.publisher) {
    sqlQuery += where + 'publisher.pub_name = ?';
    where = ' AND ';
    values.push(filters.publisher);
  }
  if (filters.plt) {
    sqlQuery += where + 'book_mast.book_price < ?';
    where = ' AND ';
    values.push(filters.plt);
  }
  if (filters.pgt) {
    sqlQuery += where + 'book_mast.book_price > ?';
    values.push(filters.pgt);
  }

  console.log(`Parameters values: ${values}`);

  const query = connection.query(sqlQuery, values, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.render('books-table', { books: results });
    }
  });

  console.log(`>> Executed query was: ${query.sql}`);
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
