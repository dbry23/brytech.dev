# BryTech Portfolio Website

A modern, responsive portfolio website showcasing 19 years of software engineering experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

Visit the live portfolio at: [brytech.dev](https://brytech.dev)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional design with dark mode support
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Built with Next.js for optimal speed and SEO
- 🎭 **Smooth Animations**: Engaging animations using Framer Motion
- 🌙 **Dark/Light Mode**: Toggle between themes with persistent preference
- 📧 **Contact Form**: Functional contact form integrated with Formspree
- 🔍 **SEO Optimized**: Meta tags, structured data, and performance metrics
- ♿ **Accessible**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel
- **Form Handling**: Formspree

## 📁 Project Structure

```
brytech.dev/
├── app/                   # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── Header.tsx         # Navigation with theme toggle
│   ├── Hero.tsx           # Hero section with CTA
│   ├── About.tsx          # About section with bio
│   ├── Skills.tsx         # Skills showcase with icons
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Portfolio projects grid
│   ├── Contact.tsx        # Contact form and social links
│   └── Footer.tsx         # Footer with links
├── public/                # Static assets
│   ├── projects/          # Project screenshots and GIFs
│   └── favicon.png        # Site favicon
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dbry23/brytech.dev.git
cd brytech.dev
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local
# Edit .env.local with your actual Formspree form ID
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Customization

### Personal Information

Update the following components to customize your portfolio:

- **Contact Information**: Edit `components/Contact.tsx`
- **Experience**: Modify `components/Experience.tsx`
- **Projects**: Update `components/Projects.tsx`
- **Skills**: Adjust `components/Skills.tsx`
- **About**: Customize `components/About.tsx`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in `tailwind.config.js`
- **Animations**: Adjust animation settings in individual components

### Content

- **Hero Section**: Update the main headline and description in `components/Hero.tsx`
- **Meta Tags**: Modify SEO information in `app/layout.tsx`
- **Social Links**: Update social media links in `components/Contact.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables

Set the following environment variable in your deployment platform:

- `NEXT_PUBLIC_FORMSPREE_FORM_ID`: Your Formspree form ID

## 📊 Performance

This portfolio is optimized for performance with:

- Next.js App Router for optimal routing
- Tailwind CSS for minimal CSS bundle
- Framer Motion for efficient animations
- Optimized images and assets
- SEO-friendly structure with meta tags
- Lighthouse score: 95+ across all metrics

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Dave Bry - [dave@brytech.dev](mailto:dave@brytech.dev)

Project Link: [https://github.com/dbry23/brytech.dev](https://github.com/dbry23/brytech.dev)

---

⭐ If you found this portfolio template helpful, please give it a star!
