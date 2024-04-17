const express = require('express');
const app = express();
const port = 3000;

app.get('/:id', (req, res) => {
  const test = {id: req.params.id}


 res.send(`Ola ${test.id}`);
});

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});
