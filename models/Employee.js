var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema(
  {
    employeeId: {
      type: Number,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    miniBio: {
      type: String,
      required: true
    },
    iconTypeName: {
      type: String,
      required: true
    },
    funFact: {
      type: String,
      required: true
    },
    fullBio: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
