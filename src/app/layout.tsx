import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.scss'
import Cursor from '@/components/Cursor/Cursor'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Rahul Sharma — Frontend Developer',
  description: 'Frontend Developer crafting pixel-perfect, performant digital experiences with React, Next.js, and modern CSS.',
  openGraph: {
    title: 'Rahul Sharma — Frontend Developer',
    description: 'Crafting pixel-perfect digital experiences.',
    url: 'https://itsrahulsharma.com',
    siteName: 'itsrahulsharma.com',
    type: 'website',
  },
   other: {
    "google-adsense-account": "ca-pub-4350118092267439",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
