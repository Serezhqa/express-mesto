const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const pathToCards = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  fs.readFile(pathToCards, (error, data) => {
    if (error) {
      res.status(500).send(`При чтении файла по пути ${pathToCards} произошла ошибка: ${error}`);
    }

    res.send(JSON.parse(data));
  });
});

module.exports = router;
