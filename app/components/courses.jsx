"use client"
import { ArrowRight, ExternalLink, Eye, Heart } from 'lucide-react'
import React, { useState } from 'react'

const fillter = [
  { id: "all", label: "Tất Cả Khoá Học" },
  { id: "free", label: "Khoá Học FREE" },
  { id: "pro", label: "Khoá Học Pro" },
]

const project = [
  {
    id: 1,
    title: "Smart Study Assistant",
    category: "Websites E-leaning",
    description:
      "A smart web-based learning assistant platform that helps students, teachers, and parents manage, track, and improve the learning process effectively.",
    image:
      "https://web-beautiful-react-tailwind-portfo.vercel.app/photo/project1.png",
    type: "free",
    stats: { view: "1000", likes: "20" },
    link: "https://github.com/mdtit2007/smartstudyassistant",
  },
  {
    id: 2,
    title: "Websites Portfolio Profile",
    category: "Web Design",
    description:
      "A modern, beautiful, and responsive personal portfolio website built with React + Tailwind CSS.",
    image:
      "https://i.imgur.com/y4aYSwR.jpeg",
    type: "pro",
    stats: { view: "1200", likes: "30" },
    link: "https://github.com/mdtit2007/web-beautiful-react-tailwind-portfolio",
  }
]

function Portfolios() {
  const [activefilter, setActivefilter] = useState("all");
  
  const filterproject = activefilter === "all"
    ? project
    : project.filter((project) => project.type === activefilter);

  return (
    <section 
      id='courses' 
      className='py-20 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden'
    >
      {/* Background Decorations */}
      <div className='absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-500 dark:to-pink-500 rounded-full filter blur-3xl opacity-30'></div>
      <div className='absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-blue-200 to-cyan-200 dark:from-blue-500 dark:to-cyan-500 rounded-full filter blur-3xl opacity-30'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-8 relative z-10'>
        <div className='text-center mb-16'>
        
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Khoá Học
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Explore our latest work showcasing innovative solutions across
            various industries and digital platforms
          </p>          
        </div>

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {fillter.map((fillter) => {
            return (
              <button 
                key={fillter.id}
                onClick={() => setActivefilter(fillter.id)}
                className={`cursor-pointer px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activefilter === fillter.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500'
                }`}
              >
                {fillter.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filterproject.map((project) => {
            return (
              <div 
                key={project.id}
                className='group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'
              >
                <div className='relative overflow-hidden'>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className='w-full h-64 object-cover group-hover:scale-110 transition-all duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                      <div className='flex space-x-2'>
                        <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1'>
                          <Eye className='text-white' size={14} />
                          <span className='text-white text-xs font-medium'>
                            {project.stats.view}
                          </span>
                        </div>
                        <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1'>
                          <Heart className='text-white' size={14} />
                          <span className='text-white text-xs font-medium'>
                            {project.stats.likes}
                          </span>
                        </div>
                      </div>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'
                      >
                        <ExternalLink className='text-gray-700' size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className='p-6'>
                  <div className='text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2'>
                    {project.category}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-3 transition-all duration-300'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.link}  
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group/btn inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 font-semibold transition-all duration-300'
                  >
                    View Project 
                    <ArrowRight className='ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300' />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 dark:border dark:border-purple-600 rounded-3xl p-8 text-white relative overflow-hidden'>
            <div className='absolute inset-0 bg-black/10'></div>
            <div className='relative z-10'>
              <h3 className='text-2xl font-semibold mb-4'>Like what you see?</h3>
              <p className='text-purple-100 dark:text-purple-200 mb-6 max-w-2xl mx-auto'>
                Let's create something amazing together. 
                View our complete portfolio or start a project today
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='bg-white text-purple-600 dark:text-purple-800 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-300 whitespace-nowrap'>
                  View All Projects
                </button>
                <button className='border border-purple-600 dark:border-purple-400 text-white hover:bg-white hover:text-purple-600 dark:hover:text-purple-800 px-6 py-3 rounded-xl font-semibold transition-colors duration-300 whitespace-nowrap'>
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolios