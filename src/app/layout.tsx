import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GIBEI UISI',
  description: 'GIBEI UISI — rebuild dari awal.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
