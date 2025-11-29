# Lansia Care Website

This is a website for Lansia Care, a service for elderly people.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## CMS

This project uses [Payload CMS](https://payloadcms.com/) for content management. The admin panel is available at [http://localhost:3000/admin](http://localhost:3000/admin).

The collections are defined in `payload.config.js`.

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
DATABASE_URI=mongodb://127.0.0.1:27017/lansia-care
PAYLOAD_SECRET=your-secret
```