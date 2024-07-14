import { Schema, model } from 'mongoose';
import { EmployeeModel, TEmployee, TUserName } from './employee.interface';
import { BloodGroup, Gender } from './employee.constant';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },

  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const employeeSchema = new Schema<TEmployee, EmployeeModel>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    // user: {
    //   type: Schema.Types.ObjectId,
    //   required: [true, 'User id is required'],
    //   unique: true,
    //   ref: 'User',
    // },

    // designation: {
    //   type: Schema.Types.ObjectId,
    //   required: [true, 'Designation id is required'],
    //   ref: 'Designation',
    // },
    designation: {
      type: String,
      required: [true, 'Designation is required'],
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: Gender,
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloogGroup: {
      type: String,
      enum: {
        values: BloodGroup,
        message: '{VALUE} is not a valid blood group',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    profileImg: { type: String, default: '' },
    department: {
      type: Schema.Types.ObjectId,
      required: [true, 'Department is required'],
      ref: 'Department',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// generating full name
// employeeSchema.virtual('fullName').get(function () {
//   return this?.name?.firstName + '' + this?.name?.lastName;
// });

// // filter out deleted documents
// employeeSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// employeeSchema.pre('findOne', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// employeeSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

// //checking if user is already exist!
// employeeSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Employee.findOne({ id });
//   return existingUser;
// };

export const Employee = model<TEmployee, EmployeeModel>(
  'Employee',
  employeeSchema,
);
