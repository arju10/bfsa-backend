import { z } from 'zod';

const createSupplierValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Supplier must be string',
    }),
    contactNumber: z.string({
      invalid_type_error: 'Contact Number must be string',
    }),
    email: z
      .string({
        invalid_type_error: 'Email must be string',
      })
      .optional(),
    contactPerson: z.string({
      invalid_type_error: 'Contact must be string',
    }),
  }),
});

const updateSupplierValidationSchema = z.object({
  body: z.object({
    supplierId: z
      .string({
        invalid_type_error: 'Supplier must be string',
      })
      .optional(),
    name: z
      .string({
        invalid_type_error: 'Supplier must be string',
      })
      .optional(),
    contactNumber: z
      .string({
        invalid_type_error: 'Contact Number must be string',
      })
      .optional(),
    email: z
      .string({
        invalid_type_error: 'Email must be string',
      })
      .optional(),
    contactPerson: z
      .string({
        invalid_type_error: 'Contact must be string',
      })
      .optional(),
  }),
});

export const SupplierValidation = {
  createSupplierValidationSchema,
  updateSupplierValidationSchema,
};
