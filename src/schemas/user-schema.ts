import { z } from 'zod';

const register = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6)
});

const login = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export default {
  register,
  login
};
