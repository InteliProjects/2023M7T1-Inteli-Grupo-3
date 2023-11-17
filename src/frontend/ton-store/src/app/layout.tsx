// Importing global styles and fonts.
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Importing Inter font.
const inter = Inter({ subsets: ['latin'] })

// Exporting metadata.
export const metadata: Metadata = {
  title: 'Ton',
  description: 'Store to buy some cool stuff',
}

// Exporting root layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + " " + "my-16 mx-72"}>{children}</body>
    </html>
  )
}
