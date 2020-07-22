// Third party imports
const express = require('express');
const bodyParser = require('body-parser');

// Local imports
const { handleError } = require('./utils/error');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

// Express error middleware
app.use((err, req, res, next) => {
  handleError(res, err);
});
// Unknown endpoints middleware
app.use('*', (req, res) => {
  const url = req.originalUrl;
  res.status(404).send({
    status: 'error',
    message: `Oops. ${req.method} ${url} not found on this website`
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening in port ${PORT}`);
});
