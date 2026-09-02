const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users', (_req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Ocorreu um erro no servidor' });
    }
    return res.json(JSON.parse(data));
  });
});

router.get('/users/:id', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Ocorreu um erro no servidor' });
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'ID do usuário não encontrado' });
    }
    return res.json(user);
  });
});

module.exports = router;
