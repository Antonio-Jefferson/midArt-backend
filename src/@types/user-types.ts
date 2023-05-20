import { z } from 'zod';

import userSchema from '../schemas/user-schema';

export type userProps = z.infer<typeof userSchema.user>;
