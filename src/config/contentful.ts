import { createClient } from 'contentful';

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
  });
};
