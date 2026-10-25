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

## Upload to cPanel

Shared hosting serves the files in `public_html`. The cPanel package is a static export of the public pages.

```bash
npm run export:cpanel
```

That writes `lansia-care-cpanel.zip`. In cPanel File Manager, open `public_html`, upload the zip, and extract it so `index.html` sits directly in `public_html`.

Page copy lives in `lib/content`.