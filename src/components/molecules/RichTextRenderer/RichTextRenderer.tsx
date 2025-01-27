import ReactMarkdown, { Components } from 'react-markdown';
import { Heading } from '@/components/atoms/Heading/Heading';
import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';

interface RichTextRendererProps {
  content: string;
}

export const RichTextRenderer = ({ content }: RichTextRendererProps) => {
  const components: Components = {
    p: ({ node, children }) => (
      <Paragraph style={{ marginBottom: '10px' }}>{children}</Paragraph>
    ),
    h2: ({ node, children }) => (
      <Heading style={{ margin: '20px 0 20px 0' }} as="h2">
        {children}
      </Heading>
    ),
    h3: ({ node, children }) => <Heading as="h3">{children}</Heading>,
    li: ({ node, children }) => (
      <li style={{ margin: '0 0 10px 20px' }}>{children}</li>
    )
  };
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
};
