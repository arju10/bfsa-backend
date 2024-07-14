import { z } from 'zod';
import { BloodGroup, Gender } from './employee.constant';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine(value => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  lastName: z.string(),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  lastName: z.string().optional(),
});

const objectIdPattern = /^[0-9a-fA-F]{24}$/;

export const createEmployeeValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    designation: z.string(),
    name: createUserNameValidationSchema,
    gender: z.enum([...Gender] as [string, ...string[]]),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]).optional(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    department: z.string().regex(objectIdPattern, {
      message: 'Invalid department ID format',
    }),
    isDeleted: z.boolean(),
    profileImg: z.string().optional(),
  }),
});

export const updateEmployeeValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    designation: z.string().optional(),
    name: updateUserNameValidationSchema,
    gender: z.enum([...Gender] as [string, ...string[]]).optional(),
    dateOfBirth: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]).optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    department: z
      .string()
      .regex(objectIdPattern, {
        message: 'Invalid department ID format',
      })
      .optional(),
    isDeleted: z.boolean().optional(),
    profileImg: z.string().optional(),
  }),
});

export const EmployeeValidations = {
  createEmployeeValidationSchema,
  updateEmployeeValidationSchema,
};
