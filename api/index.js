const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const AppRouter = require('./app.routes');
const Config = require('@questionare-be/config');
const Db = require('@questionare-be/db');


const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', AppRouter);
app.get('/', (req, res) => res.send('Hello World'));


(async () => {
    Db.connect();

    app.listen(Config.port, () => {
        console.log(`Application running on port: ${ Config.port }`);
    });
})();
