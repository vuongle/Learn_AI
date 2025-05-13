# The Urlist

A modern web application for creating and sharing lists of URLs with automatic metadata fetching.

## Features

- Create lists of URLs with titles and descriptions
- Automatic metadata fetching from URLs
- Real-time URL preview
- Shareable links for your URL lists
- Responsive design
- SEO and social media optimization

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Prisma with PostgreSQL
- React Hook Form with Zod validation
- React Hot Toast for notifications

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your PostgreSQL database and update `.env` with your database URL:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/urlist"
   ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://user:password@localhost:5432/urlist"
```

## Development

The project uses:

- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting
- Prisma for database management

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - Reusable React components
- `/lib` - Utility functions and shared code
- `/prisma` - Database schema and migrations
- `/types` - TypeScript type definitions

## API Routes

- `POST /api/lists` - Create a new URL list
- `GET /api/lists/[slug]` - Get a URL list by slug
- `POST /api/metadata` - Fetch metadata for a URL

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
