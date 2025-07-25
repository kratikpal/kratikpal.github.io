# EmailJS Setup Instructions

To enable the contact form to send emails to your Gmail account, follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Add Gmail Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" and authorize EmailJS to access your Gmail
5. Note down the **Service ID** (e.g., `service_xyz123`)

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**

```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_abc456`)

## 4. Get Your Public Key

1. Go to "Account" > "General" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `abc123xyz`)

## 5. Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your Gmail inbox for the test email

## 7. For Production Deployment

- Make sure to set the environment variables in your hosting platform (Vercel, Netlify, etc.)
- The `.env` file is gitignored for security

## EmailJS Free Tier Limits

- 200 emails per month
- EmailJS branding in emails
- For higher limits, consider upgrading to a paid plan

## Troubleshooting

- Ensure all three environment variables are correctly set
- Check the browser console for any error messages
- Verify your EmailJS service and template are active
- Make sure your Gmail account is properly connected to EmailJS

## Security Note

Never expose your EmailJS credentials in client-side code. This implementation uses Vite's environment variable system to keep credentials secure.
