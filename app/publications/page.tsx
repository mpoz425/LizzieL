import React from 'react'
import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function Publications() {
  const publications = [
    {
      title: 'Publication Title 1',
      authors: 'Author 1, Author 2, Author 3',
      journal: 'Journal Name 1',
      year: '2023',
      doi: 'https://doi.org/10.1234/example1',
      abstract: 'Abstract of the first publication goes here. This should be a brief summary of the research and its findings.',
    },
    {
      title: 'Publication Title 2',
      authors: 'Author 1, Author 2',
      journal: 'Journal Name 2',
      year: '2022',
      doi: 'https://doi.org/10.1234/example2',
      abstract: 'Abstract of the second publication goes here. This should be a brief summary of the research and its findings.',
    },
    // Add more publications as needed
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`${courier.className} text-4xl font-extrabold text-slate-800 sm:text-5xl`}>
            Publications
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
            A collection of my academic publications and research work.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-blue-50 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <h2 className={`${courier.className} text-xl font-bold text-slate-800`}>
                  {pub.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {pub.authors}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {pub.journal} • {pub.year}
                </p>
                <p className="mt-4 text-base text-slate-600">
                  {pub.abstract}
                </p>
                <div className="mt-4">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Publication →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Citation Information */}
        <div className="mt-16">
          <h2 className={`${courier.className} text-2xl font-bold text-slate-800 text-center`}>
            Citation Information
          </h2>
          <p className="mt-4 text-center text-slate-600">
            If you use any of this work in your research, please cite using the provided DOI links.
          </p>
        </div>
      </div>
    </div>
  )
} 