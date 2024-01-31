import { z } from "zod";

export const signupValidation = z.object({
    name: z.string().min(2, {message: "Too short"}),
  username: z.string().min(2,{message: "Too short"} ),
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(8, {message: "Pasword must be at least of 8 characters"})
});