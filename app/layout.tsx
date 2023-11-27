import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Rajdhani } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/partials/navbar'
import Footer from '@/components/partials/footer'

const inter = Inter({ subsets: ['latin'] })
const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Buka Tutup Sekre',
  description: 'Buka tutup sekre adalah sebuah kemudahan untuk membuka ruangan sekretariat',
  icons: {
    icon: '/icon.svg'
  },
  authors: [{ name: 'Buka Tutup Sekre Team', url: 'https://btsfilkom.vercel.app/' }],
  metadataBase: new URL('https://btsfilkom.vercel.app/'),
  openGraph: {
    images: [
      {
        url: 'https://btsfilkom.vercel.app/assets/static/brand/logo-brand-512.png',
        width: 512,
        height: 512,
      },
    ],    
    title: 'Buka Tutup Sekre',
    description: 'Buka tutup sekre adalah sebuah kemudahan untuk membuka ruangan sekretariat',
    url: 'https://btsfilkom.vercel.app/',
    siteName: 'Buka Tutup Sekre',
  },
  keywords: ['Buka Tutup Sekre', 'IOT', 'MQTT', 'FILKOM', 'UB'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} max-w-screen-2xl mx-auto`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
