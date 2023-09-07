import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='content'>
          <div className='container mx-auto'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  )
}
