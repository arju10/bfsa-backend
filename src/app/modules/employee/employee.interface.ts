import { Model, Types } from 'mongoose';

export type TGender = 'male' | 'female' | 'other';
export type TBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TEmployee = {
  id: string;
  // user: Types.ObjectId;
  // designation: Types.ObjectId;
  designation: string;
  name: TUserName;
  gender: TGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup?: TBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  department: Types.ObjectId;
  isDeleted: boolean;
};

export interface EmployeeModel extends Model<TEmployee> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TEmployee | null>;
}
