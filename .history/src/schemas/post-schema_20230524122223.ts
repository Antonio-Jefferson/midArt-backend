import { z } from 'zod';

const user = z.object({
  descr: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6)
});

export default {
  user
};
