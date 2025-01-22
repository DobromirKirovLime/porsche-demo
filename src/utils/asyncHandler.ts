export const asyncHandler = async <T>(fn: Promise<T>) => {
  try {
    const result = await fn;
    return { data: result, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
};
