import React from 'react';
import { Code2, GraduationCap, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-red-600" />,
      title: 'Full-Stack Development',
      description: 'Building scalable MERN applications with React, Node.js, Express, and MongoDB.',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-red-600" />,
      title: 'Education',
      description: 'Computer Science student at VIT-AP University with strong DSA foundations in Java.',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-red-600" />,
      title: 'Experience',
      description: 'ITS Department Intern at TRF Ltd (A TATA Enterprise), developing internal web systems.',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            About <span className="text-red-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-slate-900 font-semibold">Shrijeet Ambastha</span>, a full-stack web developer and software engineer passionate about turning complex problems into clean, responsive web applications.
            </p>
            <p>
              I specialize in modern JavaScript ecosystems—architecting RESTful backends with Node.js and Express, designing responsive interfaces with React and Tailwind CSS, and solving algorithmic challenges in Java.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 pt-2">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Jamshedpur, Jharkhand, India</span>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-red-300 shadow-sm transition-colors flex gap-4"
              >
                <div className="p-3 rounded-lg bg-red-50 h-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;