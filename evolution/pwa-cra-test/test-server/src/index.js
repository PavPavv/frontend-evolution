const express = require('express');
const path = require('path');

const app = express();
const PORT = 9000;

console.log('>>>', path.join(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
