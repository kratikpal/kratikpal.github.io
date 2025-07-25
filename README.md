# 🚀 Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a functional contact form powered by EmailJS.

## ✨ Features

- 📱 Responsive design that works on all devices
- 🎨 Modern UI with smooth animations and gradients
- 📧 Working contact form with EmailJS integration
- 🚀 Fast loading with Vite build system
- 🔒 Secure environment variable handling
- 📄 Clean, maintainable TypeScript code

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- EmailJS account (for contact form)

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kratikpal/kratikpal.github.io.git
   cd kratikpal.github.io
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` with your EmailJS credentials.

4. **Start development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**: http://localhost:5173

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly from the frontend. Follow these guides:

- **📋 EmailJS Setup**: See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
- **🚀 Deployment Guide**: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔧 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form with EmailJS
│   ├── Education.tsx   # Education timeline
│   ├── Experience.tsx  # Work experience
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Landing section
│   ├── Navbar.tsx      # Navigation
│   ├── Projects.tsx    # Project showcase
│   └── Skills.tsx      # Skills section
├── data/
│   └── resume.ts       # Resume data configuration
├── App.tsx             # Main app component
└── main.tsx           # Entry point
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### For Contributors:

1. Follow the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
2. Set up GitHub Secrets for EmailJS
3. Push to main branch to trigger deployment

### Live Site:

🌐 **https://kratikpal.github.io**

## 🔒 Environment Variables

Required for contact form functionality:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Feel free to reach out through the contact form on the website or connect with me on:

- 💼 [LinkedIn](https://linkedin.com/in/kratikpal)
- 🐙 [GitHub](https://github.com/kratikpal)
- 📧 Email: kratikpal@gmail.com

---

Built with ❤️ using React and TypeScript
