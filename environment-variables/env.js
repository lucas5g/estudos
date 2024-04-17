import { z } from 'zod'

export const env = z.object({
  TOKEN: z.string(),
  ID_GUILD: z.string(),
  GOOGLE_URL: z.string(),
  ROLES: z.string().transform(val => val.split(',')),
  JSON_CONFIG: z.string().transform(val => JSON.parse(val))
}).parse(process.env)