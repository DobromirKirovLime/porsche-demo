import { Box, Heading, Paragraph } from '@/components';
import React from 'react';

interface ErrorTextProps {
  message: string;
}

export const ErrorText = ({ message }: ErrorTextProps) => {
  return (
    <Box>
      <Heading>Error</Heading>
      <Paragraph>Unable to load content. Please try again later.</Paragraph>
      <Paragraph>{message}</Paragraph>
    </Box>
  );
};
