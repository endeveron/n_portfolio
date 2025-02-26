import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

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
      <body className={`${montserratSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
