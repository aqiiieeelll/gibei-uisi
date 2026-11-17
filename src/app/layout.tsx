import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({ src: '../assets/fonts/inter-latin.woff2', variable: '--font-inter', weight: '100 900', display: 'swap' });
const jakarta = localFont({ src: '../assets/fonts/plus-jakarta-sans-latin.woff2', variable: '--font-jakarta', weight: '200 800', display: 'swap' });

export const metadata: Metadata = {
  title: 'GIBEI UISI — Galeri Investasi BEI',
  description: 'Kenali Galeri Investasi BEI UISI, wadah edukasi, literasi, dan riset pasar modal bagi generasi muda di Universitas Internasional Semen Indonesia.',
  icons: { icon: '/images/gibei-mark.jpg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
