var connection = require('../database.js');

const authorController = {};

authorController.getAll = (req, res) => {
  if (error) {
    res.status(500).send(error);
  } else {
    res.send({
      result: 'OK',
      authors: result,
    });
  }
};

authorController.create = (req, res) => {
  const data = req.body;

  if (!data?.name || !data?.country || !data?.homeCity) {
    res.status(400).send();
  } else {
    connection.query(
      `INSERT INTO author (aut_name, country, home_city) VALUES (?, ?, ?)`,
      [
        ((data.name, data.country, data.homeCity),
        (error, result) => {
          if (error) {
            res.status(500).send(error);
          } else if (result.affectedRows == 0) {
            res.status(400).send();
          } else {
            res.status(201).send({ id: result.insertId });
          }
        }),
      ],
    );
  }
};
