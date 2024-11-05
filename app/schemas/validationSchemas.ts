import { z } from "zod";

// Sign-Up Schema
export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  state: z
    .string()
    .max(2, { message: "State should be abbreviated (e.g., NY)." }),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, { message: "Postal code must be 5 digits." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  ssn: z
    .string()
    .regex(/^\d{4}$/, { message: "SSN must be the last 4 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

// Login Schema
export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
