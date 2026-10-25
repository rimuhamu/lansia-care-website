import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';

type Props = {
  content: any;
  className?: string;
};

export function RichText({ content, className }: Props) {
  if (!content) {
    return null;
  }

  return (
    <div className={className}>
      <RichTextConverter content={content} />
    </div>
  );
}
