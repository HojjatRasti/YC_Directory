# YC Directory

A startup directory built with **Next.js** and **Sanity CMS**.  
This project allows users to explore, list, and manage startups with modern UI and fast SSR performance.

---

## 🚀 Features

- Built with **Next.js 14** for server-side rendering and static site generation
- **Sanity CMS** integration for managing startups
- SEO-optimized pages for startups
- Dynamic routing and data fetching
- Responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **CMS:** Sanity.io
- **Deployment:** Vercel
- **Database:** Sanity Studio

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/yc-directory.git
cd yc-directory
npm install
````

---

## ⚙️ Environment Variables

Before running the project, you need to set up your `.env.local` file in the root directory.
Create a file called `.env.local` and add the following keys:

```env
# Sanity project settings
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-08-01

# Sanity API Token (required for authenticated requests)
SANITY_API_TOKEN=your_sanity_token
```

### 🔑 How to get these values

* Go to your [Sanity.io project dashboard](https://www.sanity.io/manage)
* Find your **Project ID** and **Dataset name** (usually `production`)
* Create an **API token** in the "API" settings section (choose **Read/Write** if you need mutations)

⚠️ **Important:** Never commit your `.env.local` file to GitHub. Add it to `.gitignore`.

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📷 Screenshots

*Add a few screenshots or GIFs of your app here.*


