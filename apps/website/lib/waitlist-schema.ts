import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  city: z
    .string()
    .trim()
    .min(2, "Please enter your city")
    .max(100, "City name is too long"),
  gender: z.enum(["man", "woman"], {
    message: "Please select how you identify",
  }),
});

export type WaitlistFormInput = z.infer<typeof waitlistSchema>;
