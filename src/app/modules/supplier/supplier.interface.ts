import { Schema } from 'mongoose';
export type TSupplier = {
  supplierId: string;
  name: string;
  contactNumber: string;
  email: string;
  // contactPerson: Schema.Types.ObjectId; // Reference to an Employee
  contactPerson: string;
  // order:number
};
