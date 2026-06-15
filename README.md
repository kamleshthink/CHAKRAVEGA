# Chakravega Technologies

A refined corporate website and backend system for Chakravega Technologies.

## Repository Structure

- `frontend/` — Next.js website, UI, privacy and cookies pages, and user-facing contact form
- `backend/` — Express API, MongoDB contact storage, email notifications using Resend, Telegram alerts, and IP/cookie handling

## Frontend Development

```bash
cd frontend
npm install
npm run dev
```

The frontend runs locally at `http://localhost:3000` and sends contact submissions to the backend API.

## Backend Development

```bash
cd backend
npm install
npm run dev
```

The backend starts on `http://localhost:4000` and exposes `POST /api/contact` for form submissions.

## Environment Configuration

- `frontend/.env.local` — local frontend API base URL
- `frontend/.env.example` — sample frontend env values
- `backend/.env.example` — backend environment template
- `backend/.env.local` — local backend secrets (ignored by git)

## Features

- Contact form saves inquiries to MongoDB with visitor IP and location metadata
- Email notifications via Resend API when new data arrives
- Telegram alerts sent to the configured bot chat
- Privacy Policy and Cookie Policy pages with corporate data handling details
- Cookie consent persistence using a secure backend cookie

## Notes

Keep sensitive values out of source control by using the local `.env.local` files. The project is structured to keep frontend and backend concerns separate while still supporting a unified corporate workflow.

---

© Chakravega Technologies Private Limited. All Rights Reserved.
