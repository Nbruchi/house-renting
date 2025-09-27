# 🏡 Airbnb Clone

Welcome to the **Airbnb Clone** – a modern accommodation marketplace built with the latest Next.js 15 features, sleek UI components, and real-world integrations for authentication, image uploads, and geolocation. ✈️🌍

> "Book unique stays and host unforgettable experiences." This project reimagines the Airbnb experience for learning and rapid prototyping.

---

## ✨ Feature Highlights

- **Listings & Filters**: Dynamic listing cards, category filters, and search parameters powered by `react-hook-form` + `query-string`.
- **Interactive Map**: Location selection with Leaflet + `react-leaflet` to pinpoint stays visually.
- **Cloudinary Uploads**: Drag-and-drop image handling via `next-cloudinary` with instant previews.
- **Secure Auth**: Email/password plus OAuth (Google & GitHub) using `next-auth` and Prisma adapter.
- **Responsive Design**: TailwindCSS-driven layouts optimized for desktop and mobile.
- **State Management**: `zustand`-based modals and UI flows to keep things snappy.
- **Toast Notifications**: `react-hot-toast` to deliver friendly feedback.

---

## 🧱 Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | Next.js 15, React 19, TailwindCSS 4 |
| Backend | Next.js App Router APIs, Prisma ORM |
| Database | Prisma (compatible with PostgreSQL/MySQL/SQLite) |
| Auth | NextAuth with Google, GitHub, and Credentials providers |
| Media | Cloudinary via `next-cloudinary` |
| Maps | Leaflet + React Leaflet |

---

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Prepare environment variables**
   Create a `.env.local` file with the following keys:
   ```bash
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB"
   AUTH_SECRET="your-strong-secret"

   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"

   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_UPLOAD_PRESET="airbnb"
   ```

3. **Generate Prisma client & run migrations** (adjust DB provider to match your setup)
   ```bash
   npx prisma migrate dev
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Visit the app**
   Open [http://localhost:3000](http://localhost:3000) and begin exploring listings, categories, and the host flow.

---

## 🧪 Useful Scripts

- **`npm run dev`**: Start the Next.js development server.
- **`npm run build`**: Create an optimized production build.
- **`npm run start`**: Serve the production build locally.
- **`npx prisma studio`**: Inspect your database with the Prisma GUI.

---

## 📁 Project Structure Overview

- **`app/`**: App Router pages, API routes, and layout configuration.
- **`components/`**: Reusable UI pieces, modals, and form inputs.
- **`hooks/`**: Custom hooks for modal state, listing filters, etc.
- **`lib/`**: Prisma client and helper utilities.
- **`prisma/`**: Schema definitions and migrations.

---

## 🗺️ Hosting Modal Flow

1. **Choose a category**
2. **Set the location** (with Leaflet map pin)
3. **Describe your space & amenities**
4. **Upload standout photos** (Cloudinary widget)
5. **Add pricing, title, and description**

Each step uses `zustand`-backed modals, client-side validation, and server-side persistence.

---

## 📸 Screenshots

> Drop your UI screenshots or GIFs in `/public/images/` and embed them here for a polished presentation.

---

## 🛣️ Roadmap Ideas

- **Availability calendaring** with `react-date-range`.
- **Reservation checkout flow** with secure payments.
- **User reviews & ratings** for community feedback.
- **Admin dashboard** for hosts to manage listings.

---

## 🤝 Contributing

- **Fork & branch**: Create a feature branch from `main`.
- **Commit with context**: Follow conventional messages when possible.
- **Open a PR**: Describe the change, screenshots, and testing notes.
- **Discuss**: Use issues for bugs, ideas, or enhancements.

---

## 🙏 Acknowledgements

- **Design inspiration**: [Airbnb](https://www.airbnb.com/)
- **Next.js Team**: For the App Router & performance enhancements.
- **Cloudinary**: For effortless media management.
- **Leaflet community**: For open-source mapping goodness.

---

## 📄 License

This project is intended for educational purposes. Customize terms as needed before publishing publicly.

Happy hosting! 🧳✨
