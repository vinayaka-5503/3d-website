# Step-by-Step Deployment Guide

Follow this guide to push your code to GitHub and host your Next.js scrollytelling portfolio live on a free public domain (HTTPS).

---

## 🛠️ Step 1: Push Your Code to GitHub

### 1. Create a Repository
1. Open your browser and go to: **[https://github.com/new](https://github.com/new)**
2. Fill in the following details:
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Public/Private**: Keep it **Public** (recommended so Vercel can access it easily)
   - **DO NOT** check any checkboxes for adding a README, `.gitignore`, or License (these are already configured in your local folder).
3. Click the green **"Create repository"** button.

### 2. Connect and Push Local Code
1. Open your terminal in your workspace (`d:\3d website`).
2. Run these commands one by one to link your local files to your GitHub account:

```bash
# 1. Link your local project to your new GitHub repository
git remote add origin https://github.com/vinayaka-5503/3d-website.git

# 2. Rename the default branch to 'main'
git branch -M main

# 3. Push your files to GitHub
git push -u origin main
```

*Note: If a window pops up asking you to log in, click **"Sign in with your browser"** and click **"Authorize"**.*

---

## 🚀 Step 2: Host Live on Vercel (Free)

Vercel is the official hosting platform for Next.js. It compiles your website and puts it live on the web with free SSL (HTTPS) security.

### 1. Sign Up / Log In
1. Go to: **[https://vercel.com/signup](https://vercel.com/signup)**
2. Choose **"Continue with GitHub"** to automatically connect your accounts.

### 2. Import and Deploy
1. Once logged in to the Vercel Dashboard, click **"Add New..."** in the top-right and select **"Project"**.
2. You will see a list of your GitHub repositories. Find **`portfolio`** and click the green **"Import"** button next to it.
3. On the configuration page, leave all settings at their default values (Vercel automatically configures the Next.js build scripts).
4. Click the blue **"Deploy"** button.

### 3. Finished!
- Vercel will build your website. This takes about 45 to 60 seconds.
- Once completed, you will see a congratulations screen and a link to your live website (e.g. `portfolio-nine.vercel.app` or similar, depending on availability).

---

## 🔄 How to Push Future Updates
Whenever you want to update your live website in the future:
1. Make your changes in your code editor.
2. Run these commands in your terminal:
   ```bash
   git add .
   git commit -m "Update details"
   git push
   ```
3. Vercel will detect the push automatically and update your live site within seconds!
