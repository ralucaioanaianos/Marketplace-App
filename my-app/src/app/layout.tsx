import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import SearchButton from './components/SearchButton'
import { clothingData } from '../utils/ClothingData'; // Import the clothing data
import ClothingItem from './components/ClothingItem'
import ClothesList from './components/ClothesList'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description"  />
      </head>
      <body className={inter.className}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
