import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET!,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'media',
      upload: {
        staticDir: 'media',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      slug: 'users',
      auth: true,
      fields: [{ name: 'name', type: 'text', required: true }],
    },
    {
      slug: 'posts',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'slug',
          type: 'text',
          required: true,
          admin: { position: 'sidebar' },
        },
        {
          name: 'images',
          type: 'relationship',
          relationTo: 'media',
          hasMany: true,
        },
        { name: 'content', type: 'richText', editor: lexicalEditor({}) },
        { name: 'publishedDate', type: 'date', admin: { position: 'sidebar' } },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
