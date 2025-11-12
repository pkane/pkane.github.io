import type { Metadata } from 'next'
import './globals.scss'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Kane Creative - Portfolio',
  description: 'Modern portfolio showcasing creative work and design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}