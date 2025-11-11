# Beezi Landing Page

A modern landing page built with Next.js 14 App Router, configured for static export.

## Features

- ✨ Next.js 14 with App Router (new routing system)
- 🎨 Tailwind CSS for styling
- 📦 TypeScript for type safety
- 🚀 Static export ready
- 📱 Responsive design

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build and export the static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready to deploy to any static hosting service.

## Project Structure

```
beezi_landing/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── next.config.js      # Next.js configuration with static export
└── package.json
```

## Static Export

This project is configured with `output: 'export'` in `next.config.js`, which means:

- The site will be compiled to static HTML/CSS/JS
- All pages are pre-rendered at build time
- The output can be deployed to any static hosting (Netlify, Vercel, GitHub Pages, S3, etc.)
- No Node.js server required

## Deployment

After building, deploy the `out/` directory to your hosting service of choice:

- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: `vercel deploy --prebuilt`
- **GitHub Pages**: Push the `out/` folder to `gh-pages` branch
- **S3/CloudFront**: Upload the `out/` folder contents

## Customization

- Edit `app/page.tsx` to customize the landing page content
- Modify `app/layout.tsx` to update metadata and global layout
- Update `app/globals.css` for global styles
- Configure `tailwind.config.ts` for Tailwind customization

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

