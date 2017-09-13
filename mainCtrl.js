const app = require('./server');
const db = app.get('db');

module.exports = {
	getList(req, res) {
		db.get_list((err, list) => {
			(!err) ? res.status(200).send(list) : res.status(404).send(err);
		});
	},

	addList(req, res) {
		let body = [req.body.title, req.body.the_time, req.body.action];
		db.add_list(body, (err, list) => {
			(!err) ? res.status(200).send(list) : res.status(404).send(err);
		});
	},

	removeList(req ,res) {
		let userId = [req.body.id];
		db.delete_item(userId, (err, item) => {
			(!err) ? res.status(200).send(item) : res.status(404).send(err);
		});
	}

}
