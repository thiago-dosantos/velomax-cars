import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Velomax Auto',
  description: 'Web site based on Aston Martin site.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body className={inter.className}>{children}</body>
    </html>
  )
}
