import React from 'react'
import Image from 'next/image'
import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className={`${courier.className} text-4xl tracking-tight font-extrabold text-slate-800 sm:text-5xl md:text-6xl`}>
                <span className="block">Lizzie Li</span>
                <span className="block text-blue-600">PhD Student & Researcher</span>
              </h1>
              <p className={`${courier.className} mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl`}>
                I'm a PhD student in the Media, Technology, and Society program at Northwestern University. My human-computer-interaction research focuses on designing social media platforms to better align with human values.
              </p>
              <div className="mt-6">
                <p className="text-slate-600">
                  Currently working with:
                </p>
                <ul className="mt-2 text-slate-600">
                  <li>• Dr. Jeremy Birnholtz in the Social Media Lab</li>
                  <li>• Dr. Darren Gergle in the CollabLab</li>
                </ul>
              </div>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-sm hover:shadow-md transition-shadow lg:max-w-md">
                <div className="relative block w-full bg-blue-50 rounded-lg overflow-hidden aspect-square">
                  <Image
                    src="/profile.jpg"
                    alt="Lizzie Li"
                    priority
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Experience Section */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`${courier.className} text-3xl font-extrabold text-slate-800 sm:text-4xl`}>
              Research Experience
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
              Previous research positions and academic background
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-slate-800">Columbia Privacy Lab</h3>
                <p className="mt-2 text-base text-slate-600">
                  Research Fellow conducting digital ethnography on anti-privacy behavior in dating app profile sharing across social media platforms.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-slate-800">MA Human Rights Studies</h3>
                <p className="mt-2 text-base text-slate-600">
                  Thesis research at Columbia University exploring information sharing behaviors of Hinge dating app users, advised by Dr. Steven Bellovin.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-slate-800">Cornell University</h3>
                <p className="mt-2 text-base text-slate-600">
                  BS with double major in Communication and Development Sociology, minor in Inequality Studies (2019).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`${courier.className} text-3xl font-extrabold text-slate-800 sm:text-4xl`}>
              Recent Work
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
              Selected projects and positions
            </p>
          </div>
          <div className="mt-12 space-y-8">
            <div className="bg-blue-50 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-slate-800">Communications Fellow</h3>
                <p className="mt-2 text-base text-slate-600">
                  Columbia Entrepreneurship, Innovation, and Design's eLab - Working with SIPA professor Sarah Holloway on graphic and web design projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 