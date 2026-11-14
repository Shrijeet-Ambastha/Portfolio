import React from 'react';
import { Layout, Server, Code2, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-red-600" />,
      skills: [
        'React',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Vite',
        'Responsive Design',
      ],
    },
    {
      title: 'Backend & Databases',
      icon: <Server className="w-5 h-5 text-red-600" />,
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'Mongoose',
        'Supabase',
        'RESTful APIs',
      ],
    },
    {
      title: 'Languages & Core CS',
      icon: <Code2 className="w-5 h-5 text-red-600" />,
      skills: [
        'Java',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'DBMS',
        'Operating Systems',
        'SQL',
      ],
    },
    {
      title: 'Tools & Cloud Deployment',
      icon: <Wrench className="w-5 h-5 text-red-600" />,
      skills: [
        'Git',
        'GitHub',
        'Amazon Web Services (AWS)',
        'Vercel',
        'Render',
        'Postman / Thunder Client',
        'VS Code',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Technical <span className="text-red-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-red-300 shadow-sm transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-100">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-white text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    {skill}
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

export default Skills;