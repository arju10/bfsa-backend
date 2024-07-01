import { Schema, model } from 'mongoose';
import { TDepartment } from './department.interface';

const departmentSchema = new Schema<TDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      // required: true,
    },
    order: {
      type: Number,
      // required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Department = model<TDepartment>('Department', departmentSchema);
