import { createContentClient } from '@/config/contentful';

const client = createContentClient();

export const getEntriesByType = async (type: string) => {
  const response = await client.getEntries({ content_type: type });
  return response.items;
};
