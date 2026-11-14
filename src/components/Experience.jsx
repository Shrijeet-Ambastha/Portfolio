import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      role: 'ITS Department Intern',
      organization: 'TRF Ltd (A TATA Enterprise)',
      location: 'Jamshedpur, Jharkhand',
      period: 'June 2025 – July 2025',
      description: [
        'Developed, deployed, and maintained the server-based TRF Visitor E-Gate Pass System to digitize and streamline facility entry workflows.',
        'Collaborated with the Information Technology Services (ITS) team on system testing, deployment configuration, and day-to-day maintenance.',
      ],
      skills: ['Web Development', 'Server Deployment', 'Database Management', 'IT Systems'],
    },
    {
      type: 'certification',
      role: 'Data Science & Dataset Analysis Certification',
      organization: 'Certification Program',
      location: 'Remote',
      period: 'September 2026',
      description: [
        'Completed hands-on training in data cleaning, exploratory dataset analysis, and statistical modeling.',
        'Applied structured analytical workflows to extract actionable insights from real-world datasets.',
      ],
      skills: ['Data Science', 'Dataset Analysis', 'Data Cleaning', 'Analytics'],
    },
    {
      type: 'education',
      role: 'Bachelor of Technology in Computer Science & Engineering',
      organization: 'VIT-AP University',
      location: 'Amaravati, Andhra Pradesh',
      period: '2023 – 2027 (Expected)',
      description: [
        'Focusing on Data Structures & Algorithms in Java, Operating Systems, Database Management Systems, and Full-Stack Web Engineering.',
        'Qualified GATE 2026 applicant and active builder of full-stack MERN and cloud-integrated applications.',
      ],
      skills: ['Java', 'DSA', 'MERN Stack', 'DBMS', 'REST APIs'],
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'internship':
        return <Briefcase className="w-5 h-5 text-red-600" />;
      case 'certification':
        return <Award className="w-5 h-5 text-red-600" />;
      case 'education':
      default:
        return <GraduationCap className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Experience &amp; <span className="text-red-600">Education</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3 rounded-full" />
        </div>

        <div className="relative border-l-2 border-red-200 ml-3 md:ml-6 space-y-10">
          {experiences.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              <div className="absolute -left-[21px] top-1 p-2 rounded-full bg-white border-2 border-red-600 shadow-sm">
                {getIcon(item.type)}
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-red-300 shadow-sm transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                    <p className="text-red-600 font-medium">{item.organization}</p>
                  </div>

                  <div className="flex flex-col md:items-end text-sm text-slate-500 gap-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-red-600" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-red-600" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-slate-600 text-sm leading-relaxed list-disc list-inside mb-4">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-red-50 text-red-700 border border-red-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;