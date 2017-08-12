var route = require('express').Router();

	route.get('/api/v2', function(req, res) {
			var teammates = [
			{
				'name': 'Josh',
				'age': 20,
				'country' : 'Canada'
			},
			{
				'name' :  'Nick',
				'age' :24,
				'country' : 'Georgia'
			}
		];
		res.json(teammates);
	})




 module.exports = route
