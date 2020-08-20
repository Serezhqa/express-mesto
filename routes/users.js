const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const pathToUsers = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  fs.readFile(pathToUsers, (error, data) => {
    if (error) {
      res.status(500).send(`При чтении файла по пути ${pathToUsers} произошла ошибка: ${error}`);
      return;
    }

    try {
      res.send(JSON.parse(data));
    } catch (err) {
      res.status(500).send(`При парсинге файла по пути ${pathToUsers} произошла ошибка: ${err}`);
    }
  });
});

router.get('/:id', (req, res) => {
  fs.readFile(pathToUsers, (error, data) => {
    if (error) {
      res.status(500).send(`При чтении файла по пути ${pathToUsers} произошла ошибка: ${error}`);
      return;
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (err) {
      res.status(500).send(`При парсинге файла по пути ${pathToUsers} произошла ошибка: ${err}`);
    }

    const user = users.find((item) => item._id === req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send(`Пользователь с id = ${req.params.id} не найден`);
    }
  });
});

module.exports = router;
