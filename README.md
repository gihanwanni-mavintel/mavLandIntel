# MavLand Intelligence - Land Decision Intelligence Platform

A modern, responsive real estate landing page built with Next.js 14+, featuring intelligent land decision-making tools for the Sri Lankan market.

## Features

- **Modern Design**: Clean, professional UI with a green color palette
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Contact Form**: Integrated with Resend for email notifications
- **Form Validation**: Client-side validation using React Hook Form
- **Smooth Animations**: Hover effects and smooth scroll behavior
- **SEO Optimized**: Meta tags and semantic HTML structure
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Email Service**: Resend
- **Image Hosting**: Unsplash (placeholder images)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Resend account (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MavLand
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Resend API key
   - Add your admin email address

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key_here
ADMIN_EMAIL=your-email@example.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
MavLand/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # Email API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Navbar.tsx                # Navigation bar
│   ├── Hero.tsx                  # Hero section
│   ├── WhySection.tsx            # Why land decisions go wrong
│   ├── IntelligenceSection.tsx   # Decision intelligence
│   ├── ConfidentSection.tsx      # Clear direction section
│   ├── HowItWorks.tsx            # Process explanation
│   ├── OutcomesSection.tsx       # Case studies
│   ├── WhoWeWorkWith.tsx         # Target audience
│   ├── CTASection.tsx            # Call-to-action
│   ├── ContactForm.tsx           # Contact form
│   └── Footer.tsx                # Footer
├── public/                       # Static assets
├── .env.local.example            # Environment variables template
├── .gitignore                    # Git ignore file
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies

```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your Resend API key for sending emails | Yes |
| `ADMIN_EMAIL` | Email address where form submissions are sent | Yes |

## Features Breakdown

### Navigation Bar
- Sticky header with backdrop blur on scroll
- Responsive mobile menu
- Smooth scroll to sections

### Hero Section
- Full-screen hero with background image
- Two CTA buttons
- Animated scroll indicator

### Why Section
- 4 cards explaining common land decision problems
- Icon-based visual communication

### Intelligence Section
- Market analysis features
- Field-verified price signals
- Prescriptive action strategies

### Confident Section
- Service comparison
- Two package types (One-time & Subscription)
- Add-on services

### How It Works
- 5-step process visualization
- Professional consultation imagery

### Outcomes Section
- Real case studies
- Before/After comparisons
- Results-driven content

### Who We Work With
- 4 target audience segments
- Problem-solution framework

### Contact Form
- Full form validation
- Loading states
- Success/Error feedback
- Email integration with Resend

### Footer
- Company information
- Social media links
- Quick links
- Contact details

## Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: '#1a4d2e',      // Dark forest green
  secondary: '#2d5f3f',     // Medium green
  'light-green': '#3a7350', // Light green
  background: '#f8f9fa',    // Off-white
  // ... more colors
}
```

### Images

Replace Unsplash placeholder images with your own:
- Update image URLs in component files
- Add custom images to the `public/` directory
- Update `next.config.js` to add new image domains

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## Email Setup with Resend

1. Sign up at [Resend](https://resend.com)
2. Verify your domain (or use the test domain)
3. Create an API key
4. Add the API key to `.env.local`
5. Update the `from` email in `app/api/send-email/route.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- Code splitting with App Router
- CSS optimization with Tailwind CSS
- Fast initial page load

## License

All rights reserved.

## Support

For support, email info@mavlandintelligence.com

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Next.js](https://nextjs.org/)
