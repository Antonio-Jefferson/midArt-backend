import { z } from 'zod';

const post = z.object({
  description: z.string().min(3).max(20),
  drawing_image: z.string()
});

export default {
  post
};
