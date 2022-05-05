const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeModel = new Schema(
	{
		first_name: String,
		last_name: String,
		email: String,
		job_title: String,
		address: {
			street: String,
			city: String,
			state: String,
			zip: Number
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Employees', EmployeeModel);
