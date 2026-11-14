import React, { useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'SmartResumeScreener',
      category: 'Full-Stack',
      description:
        'An automated resume screening platform built with cloud database integration to parse, evaluate, and shortlist candidate profiles efficiently.',
      tech: ['React', 'Supabase', 'Tailwind CSS', 'REST API'],
      github: 'https://github.com/Shrijeet-Ambastha/Smart-Resume-Screener',
      
    },
    {
      title: 'TRF Visitor E-Gate Pass System',
      category: 'Enterprise',
      description:
        'Server-based visitor management and digital gate pass system deployed during internship at TRF Ltd (A TATA Enterprise) to streamline facility security.',
      tech: ['Web Stack', 'Server Deployment', 'Database', 'IT Systems'],
      github: 'https://github.com/Shrijeet-Ambastha/TRF-Visitor-pass',
      
    },
  
    
    {
      title: 'Food Delivery Time Predictor',
      category: 'Machine Learning',
      description:
        'Responsive e-commerce product showcase featuring dynamic filtering, cart state management, and modern UI styling.',
      tech: ['Python', 'Streamlit', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/Shrijeet-Ambastha/food-delivery-time-predictor',
      
    },
  
    {
      title: 'Global Pollution Analysis Dashboard & Recovery Predictor',
      category: 'Machine Learning',
      description:
        'Interactive data visualization dashboard for analyzing global pollution trends and predicting recovery scenarios.',
      tech: ['Python', 'Streamlit', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/Shrijeet-Ambastha/Global-Pollution-analysis-and-energy-recovery-prediction',
      
    },
{
      title: 'Semantic Search Engine',
      category: 'RAG',
      description:
        'RAG based semantic search engine that retrieves relevant information from a knowledge base using natural language queries.',
      tech: ['Python', 'Streamlit', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/Shrijeet-Ambastha/semantic-search-system',
      
    }

  ];

  const categories = ['All', 'Full-Stack', 'Machine Learning', 'RAG', 'Enterprise'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Featured <span className="text-red-600">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-red-600 mt-3 rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === category
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-red-300 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-300 shadow-sm transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-red-50 text-red-600">
                    <FolderGit2 className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-3 text-slate-500">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                      className="hover:text-red-600 transition-colors"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="hover:text-red-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-red-50/70 text-red-700 border border-red-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;