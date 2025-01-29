import { createContentClient } from '@/config/contentful';

const client = createContentClient();

export const getEntriesByType = async <T>(type: string, locale: string) => {
  const response = await client.getEntries<T>({
    content_type: type,
    locale: locale ?? 'en-US'
  });
  return response.items;
};
