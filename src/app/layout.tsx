import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { TProject } from '@/types';
import projects from '../../data/projects';

import './globals.css';

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Endeveron',
  description: 'Full stack engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {projects.map((data: TProject) => (
          <link
            rel="preload"
            href={`images/projects/${data.id}-bg.jpg`}
            as="image"
            key={data.id}
          />
        ))}
      </head>
      <body className={`${montserratSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
