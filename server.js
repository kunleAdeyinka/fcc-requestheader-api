const express = require('express');
const routes = require('./routes/index.js');

const app = express();

const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);

app.listen(port, () => {
  console.log('Application is listening on port ' + port);
});
