import React, { useState } from 'react'
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
          <div className="nav-container">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <a href="/" className={`${courier.className} text-xl sm:text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors`}>
                  Lizzie Li
                </a>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex md:space-x-8">
                <a href="/" className={`${courier.className} text-sm font-medium text-slate-800 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                  Home
                </a>
                <a href="/research" className={`${courier.className} text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                  Research
                </a>
                <a href="/publications" className={`${courier.className} text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                  Publications
                </a>
                <a href="/contact" className={`${courier.className} text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors`}>
                  Contact
                </a>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="Main menu"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className="hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className={`${courier.className} block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 transition-colors`}>
                  Home
                </a>
                <a href="/research" className={`${courier.className} block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors`}>
                  Research
                </a>
                <a href="/publications" className={`${courier.className} block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors`}>
                  Publications
                </a>
                <a href="/contact" className={`${courier.className} block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors`}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-100">
          <div className="nav-container py-6">
            <p className={`${courier.className} text-center text-sm text-slate-500`}>
              © {new Date().getFullYear()} Lizzie Li. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
} 