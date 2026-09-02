const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (_req, res) => {
  fs.readFile(cardsPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Ocorreu um erro no servidor' });
    }
    return res.json(JSON.parse(data));
  });
});

module.exports = router;
