import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Check-In Pilot',
  description: 'GPS-powered employee check-ins for Logistics OS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
