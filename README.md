# BryTech Portfolio

A modern, responsive portfolio website showcasing 19 years of software engineering experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with dark mode support
- 📱 **Responsive**: Fully responsive across all devices
- ⚡ **Performance**: Optimized for speed and SEO
- 🎭 **Animations**: Smooth animations using Framer Motion
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📧 **Contact Form**: Functional contact form for inquiries
- 🚀 **Fast**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brytech-portfolio.git
cd brytech-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
brytech-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Experience.tsx     # Work experience
│   ├── Projects.tsx       # Portfolio projects
│   ├── Accomplishments.tsx # Achievements
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Customization

### Personal Information

Update the following files to customize your portfolio:

1. **Contact Information**: Edit `components/Contact.tsx`
2. **Experience**: Modify `components/Experience.tsx`
3. **Projects**: Update `components/Projects.tsx`
4. **Skills**: Adjust `components/Skills.tsx`
5. **About**: Customize `components/About.tsx`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in `tailwind.config.js`
- **Animations**: Adjust animation settings in `tailwind.config.js`

### Content

- **Hero Section**: Update the main headline and description in `components/Hero.tsx`
- **Meta Tags**: Modify SEO information in `app/layout.tsx`
- **Social Links**: Update social media links in `components/Contact.tsx` and `components/Footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Performance

This portfolio is optimized for performance with:

- Next.js App Router for optimal routing
- Tailwind CSS for minimal CSS bundle
- Framer Motion for efficient animations
- Optimized images and assets
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out:

- Email: hello@brytech.dev
- LinkedIn: [linkedin.com/in/brytech](https://linkedin.com/in/brytech)
- GitHub: [github.com/brytech](https://github.com/brytech)

---

Built with ❤️ using Next.js and Tailwind CSS
