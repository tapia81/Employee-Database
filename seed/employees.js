const db = require('../db');
const EmployeeModel = require('../models/employee');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	const employees = [
		{
			first_name: 'Leslie',
			last_name: 'Knope',
			email: 'LeslieKnope75@pawneeindiana.gov',
			job_title: 'Deputy Director of Parks and Recreation',
			address: {
				street: '2358 Highland Avenue',
				city: 'Pawnee',
				state: 'Indiana',
				zip: 74058
			}
		},
		{
			first_name: 'Ben',
			last_name: 'Wyatt',
			email: 'BenWyatt@pawneeindiana.gov',
			job_title: 'Assistant City Manager',
			address: {
				street: '2358 Highland Avenue',
				city: 'Pawnee',
				state: 'Indiana',
				zip: 74058
			}
		},
		{
			first_name: 'April',
			last_name: 'Ludgate',
			email: 'AprilLudgate89@pawneeindiana.gov',
			job_title: 'Assistent to Director of Parks and Recreation',
			address: {
				street: '666 Beacon Avenue',
				city: 'Pawnee',
				state: 'Indiana',
				zip: 74058
			}
		}
	];
	await EmployeeModel.insertMany(employees);
	console.log('Created Employee Profiles');
};

const run = async () => {
	await main();
	db.close();
};

run();
