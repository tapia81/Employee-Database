const db = require("./db");
const EmployeeModel = require("./models/employee");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const findAllEmployees = async () => {
  const employees = await EmployeeModel.find();
  console.log("Current Employees", employees);
};

const findAllNames = async () => {
  const employees = await EmployeeModel.find(
    {},
    { first_name: true, last_name: true }
  );

  return console.log(employees);
};

const createEmployeeProfile = async () => {
  const newEmployee = new EmployeeModel({
    first_name: "Ron",
    last_name: "Swanson",
    email: "RonSwanson67@pawneeindiana.gov",
    job_title: "Director of Parks and Recreation",
    address: {
      street: "Not Listed",
      city: "Pawnee",
      state: "Indiana",
      zip: null,
    },
  });
  await newEmployee.save();
  console.log("Created New Employee Profile!!!", newEmployee);
};

const createThreeEmployeeProfile = async () => {
  const newEmployeesArr = [
    {
      first_name: "Chris",
      last_name: "Traeger",
      email: "ChrisTraeger67@pawneeindiana.gov",
      job_title: "City Manager",
      address: {
        street: "Not Listed",
        city: "Pawnee",
        state: "Indiana",
        zip: 74058,
      },
    },
    {
      first_name: "Ann",
      last_name: "Perkins",
      email: "AnnPerkins81@pawneeindiana.gov",
      job_title: "Public Relations Director of the Health Department",
      address: {
        street: "234 Sullivan Street",
        city: "Pawnee",
        state: "Indiana",
        zip: 74058,
      },
    },
    {
      first_name: "Andy",
      last_name: "Dwyer",
      email: "AndyDwyer81@pawneeindiana.gov",
      job_title: "Shoeshiner",
      address: {
        street: "666 Beacon Avenue",
        city: "Pawnee",
        state: "Indiana",
        zip: 74058,
      },
    },
  ];

  await EmployeeModel.insertMany(newEmployeesArr);
};

const updateEmployeeProfile = async () => {
  const updatedEmployee = await EmployeeModel.updateMany(
    { first_name: "Ron", last_name: "Swanson" },
    { $set: { first_name: "Duke", last_name: "Silver" } }
  );
  console.log(updatedEmployee);
};

const deleteEmployeeProfile = async () => {
  // const deletedProfile = await EmployeeModel.deleteMany({});
  const deletedProfile = await EmployeeModel.deleteOne({ last_name: `Dwyer` });
  console.log(deletedProfile);
};

const run = async () => {
  // await findAllEmployees();
  // await createEmployeeProfile();
  // await createThreeEmployeeProfile();
  // await updateEmployeeProfile();
  // await deleteEmployeeProfile();
  await findAllNames();
  process.exit();
};

run();
