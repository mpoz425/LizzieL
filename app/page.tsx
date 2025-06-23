import React from 'react'
import Image from 'next/image'
import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-container">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="col-span-12 lg:col-span-7 mb-12 lg:mb-0">
              <h1 className={`${courier.className} hero-title text-slate-800`}>
                <span className="block mb-2">Lizzie Li</span>
                <span className="block text-blue-600 hero-subtitle">PhD Student & Researcher</span>
              </h1>
              <p className={`${courier.className} content-text mt-6 text-slate-600`}>
                I'm a PhD student in the Media, Technology, and Society program at Northwestern University. My human-computer-interaction research focuses on designing social media platforms to better align with human values.
              </p>
              <div className="mt-6">
                <p className="content-text text-slate-600 font-medium">
                  Currently working with:
                </p>
                <ul className="mt-3 space-y-2 content-text text-slate-600">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Dr. Jeremy Birnholtz in the Social Media Lab
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Dr. Darren Gergle in the CollabLab
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-full">
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
      <section className="bg-blue-50 section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${courier.className} section-title text-slate-800`}>
              Research Experience
            </h2>
            <p className="mt-4 content-text text-slate-600 max-w-2xl mx-auto">
              Previous research positions and academic background
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <h3 className="text-lg font-medium text-slate-800 mb-3">Columbia Privacy Lab</h3>
              <p className="content-text text-slate-600">
                Research Fellow conducting digital ethnography on anti-privacy behavior in dating app profile sharing across social media platforms.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-slate-800 mb-3">MA Human Rights Studies</h3>
              <p className="content-text text-slate-600">
                Thesis research at Columbia University exploring information sharing behaviors of Hinge dating app users, advised by Dr. Steven Bellovin.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-slate-800 mb-3">Cornell University</h3>
              <p className="content-text text-slate-600">
                BS with double major in Communication and Development Sociology, minor in Inequality Studies (2019).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="bg-white section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${courier.className} section-title text-slate-800`}>
              Recent Work
            </h2>
            <p className="mt-4 content-text text-slate-600 max-w-2xl mx-auto">
              Selected projects and positions
            </p>
          </div>
          <div className="space-y-6">
            <div className="card bg-blue-50">
              <h3 className="text-lg font-medium text-slate-800 mb-3">Communications Fellow</h3>
              <p className="content-text text-slate-600">
                Columbia Entrepreneurship, Innovation, and Design's eLab - Working with SIPA professor Sarah Holloway on graphic and web design projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 