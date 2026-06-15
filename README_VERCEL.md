Deploying to Vercel

Steps to let Vercel detect the frontend in this monorepo:

1. Sign in to Vercel and import the Git repository: https://github.com/kamleshthink/CHAKRAVE
2. In the Project Import settings, set the Root Directory to `frontend` (this tells Vercel to build the Next.js app there).
3. Environment variables: add any required env vars for production in Vercel dashboard (e.g., `MONGODB_URI`, `RESEND_API_KEY`, etc.). Note: backend is not configured for Vercel serverless by default.
4. Build & Output: Vercel will automatically detect Next.js and use `npm run build`.

Notes:
- A `frontend/vercel.json` is present to help Vercel choose the Next builder when scanning the monorepo.
- The backend is currently an Express app and may require adaptation to Vercel Serverless Functions if you want to deploy it on Vercel (recommended: move API endpoints to `frontend/src/pages/api` or use a separate server hosting provider).
