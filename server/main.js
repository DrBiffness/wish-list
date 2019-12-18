'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config');

main()
.then(c => console.log(c))
.catch(e => console.log(e))

async function main() {
    const app = express();

    app.use(bodyParser.json());

    app.use('./src/routes');

    app.listen(port, () => console.log(`Listening on port ${port}`));
}