const app = require('./server');
const db = app.get('db');

module.exports = {
	getList(req, res) {
		db.get_list((err, list) => {
			(!err) ? res.status(200).send(list) : res.status(404).send(err);
		});
	},

	addList(req, res) {
		let body;;
		db.add_list([req.body.title, req.body.the_time, req.body.action], (err, list) => {
			(!err) ? res.status(200).send(list) : res.status(404).send(err);
		});
	}
	
}
