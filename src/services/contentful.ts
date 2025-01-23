import { createContentClient } from '@/config/contentful';

const client = createContentClient();

export const getEntriesByType = async <T>(type: string) => {
  const response = await client.getEntries<T>({ content_type: type });
  return response.items;
};
