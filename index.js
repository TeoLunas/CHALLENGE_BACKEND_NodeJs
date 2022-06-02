const express = require('express');
const routerApi = require('./router');

const app = express();

const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => console.log(`App corriendo en puerto || ${port}`));