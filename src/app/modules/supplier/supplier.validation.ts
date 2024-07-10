import { z } from 'zod';

const createSupplierValidationSchema = z.object({
  body: z.object({
    supplierId: z.string({
      invalid_type_error: 'Supplier must be string',
    }),
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
    // order: z
    //   .number({
    //     invalid_type_error: 'Order must be number',
    //   }),
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
    // order: z
    //   .number({
    //     invalid_type_error: 'Order must be number',
    //   }).optional(),
  }),
});

export const SupplierValidation = {
  createSupplierValidationSchema,
  updateSupplierValidationSchema,
};
