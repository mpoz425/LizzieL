import React from 'react'
import type { Metadata } from 'next'
import { Inter, Courier_Prime } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const courier = Courier_Prime({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lizzie Li',
  description: 'Personal website of Lizzie Li',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" className={`${courier.className} text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors`}>
                    Lizzie Li
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className={`${courier.className} inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-800 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                    Home
                  </a>
                  <a href="/research" className={`${courier.className} inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                    Research
                  </a>
                  <a href="/publications" className={`${courier.className} inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                    Publications
                  </a>
                  <a href="/contact" className={`${courier.className} inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className={`${courier.className} text-center text-sm text-slate-500`}>
              © {new Date().getFullYear()} Lizzie Li. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
} 