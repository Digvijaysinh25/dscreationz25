import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DScreationz25 — Visual Stories. Lasting Impact.',
  description:
    'DScreationz25 by Digvijaysinh S. Vala — Digital Creator, Videographer, Drone Storyteller & Photographer based in Gandhinagar, Gujarat, India. Crafting cinematic visual stories that leave a lasting impact.',
  generator: 'v0.app',
  keywords: [
    'DScreationz25',
    'Digvijaysinh Vala',
    'videographer',
    'drone storytelling',
    'photography',
    'Gandhinagar',
    'Gujarat',
    'digital creator',
  ],
  openGraph: {
    title: 'DScreationz25 — Visual Stories. Lasting Impact.',
    description:
      'Cinematic drone storytelling, videography and photography by Digvijaysinh S. Vala.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
