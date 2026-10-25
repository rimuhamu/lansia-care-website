import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from 'lexical';

type Props = {
  content?: SerializedEditorState | null;
  className?: string;
};

export function RichText({ content, className }: Props) {
  if (!content) {
    return null;
  }

  return (
    <div className={className}>
      <RichTextConverter data={content} />
    </div>
  );
}
