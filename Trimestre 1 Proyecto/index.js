const express = require('express');

const loaders = require('./src/loaders');
const logger = require('./src/utils/logger');
const router = require('./src/routes');
const server = express();

const port = 3001;

loaders.init(server);

server.listen(port, () => {
  logger.info(`Example app listening on ${port}`)
});


router.get("/public", (req , res) => {
    res.status(200).send('Acceso público que permitirá el acceso a invitados debes registrarte antes para utilizarlo');
});
