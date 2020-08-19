const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const pathToUsers = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  fs.readFile(pathToUsers, (error, data) => {
    if (error) {
      res.status(500).send(`При чтении файла по пути ${pathToUsers} произошла ошибка: ${error}`);
    }

    res.send(JSON.parse(data));
  });
});

router.get('/:id', (req, res) => {
  fs.readFile(pathToUsers, (error, data) => {
    if (error) {
      res.status(500).send(`При чтении файла по пути ${pathToUsers} произошла ошибка: ${error}`);
    }

    res.send(JSON.parse(data).filter((user) => user._id === req.params.id));
  });
});

module.exports = router;
