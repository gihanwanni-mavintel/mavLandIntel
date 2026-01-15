import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MavLand Intelligence - Land Decision Intelligence for Sri Lanka',
  description: 'Make the right land decision backed by real market intelligence, not guesswork. We deliver deep research and prescriptive recommendations to support land selling, buying, and holding decisions across Sri Lanka.',
  keywords: 'land intelligence, real estate, Sri Lanka, property valuation, market research, land decisions',
  authors: [{ name: 'MavLand Intelligence' }],
  openGraph: {
    title: 'MavLand Intelligence - Land Decision Intelligence',
    description: 'Make confident land decisions backed by real market intelligence',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
