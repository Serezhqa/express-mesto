const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const pathToCards = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  fs.readFile(pathToCards, (error, data) => {
    if (error) {
      res.status(500).send({
        message: `При чтении файла по пути ${pathToCards} произошла ошибка: ${error}`,
      });
      return;
    }

    try {
      res.send(JSON.parse(data));
    } catch (err) {
      res.status(500).send({
        message: `При парсинге файла по пути ${pathToCards} произошла ошибка: ${err}`,
      });
    }
  });
});

module.exports = router;
