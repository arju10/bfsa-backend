import { model, Schema } from 'mongoose';
import { TSupplier } from './supplier.interface';

const supplierSchema = new Schema<TSupplier>(
  {
    supplierId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String },
    // contactPerson: { type: Schema.Types.ObjectId, ref: 'User', required: true } // Reference to an Employee
    contactPerson: { type: String, required: true },
    // order:{ type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Supplier = model<TSupplier>('Supplier', supplierSchema);
