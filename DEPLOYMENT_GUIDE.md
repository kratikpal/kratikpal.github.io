# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website with EmailJS contact form functionality to GitHub Pages.

## Prerequisites

Before deploying, make sure you have:

- ✅ EmailJS account set up
- ✅ Gmail service connected to EmailJS
- ✅ Email template created in EmailJS
- ✅ Your EmailJS credentials (Service ID, Template ID, Public Key)

## 📋 Step-by-Step Deployment

### 1. Add GitHub Secrets

1. **Navigate to your repository**: https://github.com/kratikpal/kratikpal.github.io

2. **Go to Repository Settings**:

   - Click on **"Settings"** tab
   - In the left sidebar, under "Security", click **"Secrets and variables"**
   - Click **"Actions"**

3. **Add the following Repository Secrets**:

   Click **"New repository secret"** for each of these:

   | Secret Name                | Value                    | Where to Find                         |
   | -------------------------- | ------------------------ | ------------------------------------- |
   | `VITE_EMAILJS_SERVICE_ID`  | Your EmailJS Service ID  | EmailJS Dashboard → Email Services    |
   | `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID | EmailJS Dashboard → Email Templates   |
   | `VITE_EMAILJS_PUBLIC_KEY`  | Your EmailJS Public Key  | EmailJS Dashboard → Account → General |

   **Example Values** (replace with your actual values):

   ```
   VITE_EMAILJS_SERVICE_ID: service_abc123
   VITE_EMAILJS_TEMPLATE_ID: template_xyz789
   VITE_EMAILJS_PUBLIC_KEY: user_def456ghi789
   ```

### 2. Verify GitHub Actions Workflow

Your `.github/workflows/node.js.yml` has been updated to include environment variables during the build process. The workflow will:

1. Checkout your code
2. Set up Node.js
3. Install dependencies
4. **Build with environment variables** (NEW)
5. Deploy to GitHub Pages

### 3. Enable GitHub Pages

1. **Go to Repository Settings** → **Pages**
2. **Source**: Select "GitHub Actions"
3. **Save** the settings

### 4. Deploy Your Site

1. **Push your code** to the main branch:

   ```bash
   git add .
   git commit -m "Add EmailJS environment variables for deployment"
   git push origin main
   ```

2. **Monitor the deployment**:

   - Go to **"Actions"** tab in your repository
   - Watch the "Deploy static content to Pages" workflow
   - Wait for it to complete (usually 2-3 minutes)

3. **Access your live site**:
   - Your site will be available at: `https://kratikpal.github.io`
   - The contact form will now work with your EmailJS configuration!

## 🔍 Troubleshooting

### If the deployment fails:

1. **Check GitHub Actions logs**:

   - Go to "Actions" tab → Click on the failed workflow
   - Check the build step for any errors

2. **Verify your secrets**:

   - Make sure all three secrets are added correctly
   - Check for any typos in secret names or values

3. **Test locally first**:
   ```bash
   npm run build
   npm run preview
   ```

### If the contact form doesn't work after deployment:

1. **Check browser console** for JavaScript errors
2. **Verify EmailJS settings**:

   - Make sure your EmailJS service is active
   - Confirm your email template is published
   - Check that your Gmail is properly connected

3. **Test with a simple message** to see if emails are received

## 🔒 Security Notes

- ✅ Environment variables are stored securely in GitHub Secrets
- ✅ Variables are only accessible during the build process
- ✅ Your EmailJS credentials are not exposed in the source code
- ✅ The `.env` file is gitignored to prevent accidental commits

## 📧 EmailJS Configuration Reminder

Make sure your EmailJS template includes these variables:

```
Subject: New Contact Form Submission from {{from_name}}

Content:
Hello,

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

## 🎉 Success!

Once deployed, your portfolio will be live at `https://kratikpal.github.io` with a fully functional contact form that sends emails directly to your Gmail inbox!

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review the GitHub Actions logs
3. Verify your EmailJS configuration
4. Test the contact form functionality

---

**Next Steps**: After successful deployment, test the contact form by filling it out and checking your Gmail for the message!
