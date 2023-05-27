import { z } from 'zod';

const user = z.object({
  description: z.string().min(3).max(20),
  image
});

export default {
  user
};
