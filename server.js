const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
//Connect Db
const conn = massive.connectSync({
	connectionString: config.connectionString
});

app.set('db', conn);
const db = app.get('db');
const mainCtrl = require('./mainCtrl');


app.get('/api/todos', mainCtrl.getList);
app.post('/api/todos', mainCtrl.addList);

app.listen(config.port, () => console.log(`The server is now listening on ${config.port}`))
