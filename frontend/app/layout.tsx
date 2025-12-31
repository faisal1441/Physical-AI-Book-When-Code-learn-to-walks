import type { Metadata } from 'next'
import '../lib/globals.css'

export const metadata: Metadata = {
  title: 'When Code Learns to Walk',
  description: 'Interactive web frontend for When Code Learns to Walk Physical AI book',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
