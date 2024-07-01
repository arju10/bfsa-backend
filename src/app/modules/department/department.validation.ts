import { z } from 'zod';

const createDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Department must be string',
    }),
    description: z
      .string({
        invalid_type_error: 'Description must be string',
      })
      .optional(),
    order: z
      .number({
        invalid_type_error: 'Order must be number',
      })
      .optional(),
  }),
});

const updateDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Department must be string',
      })
      .optional(),
    description: z
      .string({
        invalid_type_error: 'Description must be string',
      })
      .optional(),
    order: z
      .number({
        invalid_type_error: 'Order must be number',
      })
      .optional(),
  }),
});

export const DepartmentValidation = {
  createDepartmentValidationSchema,
  updateDepartmentValidationSchema,
};
