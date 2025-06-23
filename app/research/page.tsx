import React from 'react'
import Image from 'next/image'
import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function Research() {
  const researchAreas = [
    {
      title: 'Research Area 1',
      description: 'Detailed description of research area 1 and its significance in the field.',
      image: '/research1.jpg',
      projects: [
        {
          title: 'Project 1',
          description: 'Description of project 1 and its objectives.',
        },
        {
          title: 'Project 2',
          description: 'Description of project 2 and its objectives.',
        },
      ],
    },
    {
      title: 'Research Area 2',
      description: 'Detailed description of research area 2 and its significance in the field.',
      image: '/research2.jpg',
      projects: [
        {
          title: 'Project 3',
          description: 'Description of project 3 and its objectives.',
        },
        {
          title: 'Project 4',
          description: 'Description of project 4 and its objectives.',
        },
      ],
    },
    // Add more research areas as needed
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`${courier.className} text-4xl font-extrabold text-slate-800 sm:text-5xl`}>
            Research
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
            Exploring innovative solutions through academic research.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
              <div className="relative">
                <h2 className={`${courier.className} text-2xl font-extrabold text-slate-800 tracking-tight sm:text-3xl`}>
                  {area.title}
                </h2>
                <p className="mt-3 text-lg text-slate-600">
                  {area.description}
                </p>

                <div className="mt-8 space-y-6">
                  {area.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-medium text-slate-800">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-base text-slate-600">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="relative aspect-w-5 aspect-h-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={area.image}
                    alt={area.title}
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Methodology Section */}
        <div className="mt-16 border-t border-gray-100 pt-16">
          <div className="text-center">
            <h2 className={`${courier.className} text-3xl font-extrabold text-slate-800`}>
              Research Methodology
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
              Our approach to conducting research and solving complex problems.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-slate-800">
                Data Collection
              </h3>
              <p className="mt-2 text-base text-slate-600">
                Description of data collection methods and tools used in research.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-slate-800">
                Analysis
              </h3>
              <p className="mt-2 text-base text-slate-600">
                Description of analysis techniques and methodologies.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-slate-800">
                Implementation
              </h3>
              <p className="mt-2 text-base text-slate-600">
                Description of how research findings are implemented and validated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 