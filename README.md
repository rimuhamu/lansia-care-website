# Complete Deployment Guide

A step-by-step guide to deploy this Next.js application from development to production.

## 📋 Prerequisites

- **Node.js**: Version 18.18.0 or higher
- **npm**: Latest version (comes with Node.js)
- **Git**: For version control
- **Vercel Account**: For deployment (optional, supports other platforms)

## ⚡ Local Development Setup

### 1. Clone the Repository

```bash
git clone [<your-repository-url>](https://github.com/rimuhamu/lansia-care-website-o2)
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables Setup

Create a `.env` file in the root directory:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

#### Required Environment Variables:

| Variable                          | Required | Description                                  |
| --------------------------------- | -------- | -------------------------------------------- |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | No       | Google Maps API key for location map display |

#### Getting Google Maps API Key (Optional):

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Maps Embed API** and **Maps JavaScript API**
4. Create credentials → API Key
5. Restrict the API key to your domains
6. Copy the API key to your `.env` file

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

### 5. Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build production version
npm run start    # Start production server
npm run lint     # Run ESLint
```
