import type { ErrorResponse } from '@/api/types.ts';

export function handleError(error: unknown): never {
  if (error instanceof Error) {
    throw {
      error: true,
      code: 0,
      message: error.message,
    } as ErrorResponse;
  }
  throw error;
}
