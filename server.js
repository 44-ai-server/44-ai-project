const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: '44 AI',
    status: 'online',
    message: 'Добро пожаловать в 44 AI!'
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('44 AI запущен на порту 3000');
});
