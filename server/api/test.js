// ~/server/api/test.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  return { message: 'API is working' };
});
