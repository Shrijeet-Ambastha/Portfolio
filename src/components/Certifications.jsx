// import React, { useState, useEffect } from 'react';
// import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar, ShieldCheck, FileText } from 'lucide-react';

// const Certifications = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const certifications = [
//     {
//       title: 'Machine Learning',
//       issuer: 'Tutedude Academy',
//       date: '24th July 2026',
//       credentialId: 'TD-SHRI-ML-2127',
//       description:
//         'Completed comprehensive training in data cleaning, exploratory dataset analysis, statistical modeling, and extracting actionable insights from structured datasets.',
//       skills: ['Data Science', 'Dataset Analysis', 'Data Cleaning', 'Analytics'],
//       verifyUrl: 'https://drive.google.com/file/d/1UOG1Bk598DQDrr2ZK5n0fkQda3HvdGo9/view?usp=sharing',
//       file: '/cert/machine-learning.pdf', // Optional: place certificate images in public/certs/
//     },
//     {
//       title: 'System Design & Architecture',
//       issuer: 'Tutedude Academy',
//       date: '8th September2026',
//       credentialId: 'TD-SHRI-SD-2158',
//       description:
//         'Acquired expertise in designing scalable, high-performance systems, including microservices architecture, database optimization, and cloud deployment strategies.',
//       skills: ['System Design', 'Architecture', 'Microservices', 'Cloud Deployment'],
//       verifyUrl: 'https://drive.google.com/file/d/1fSSjO2q_7_qSWFuED-RKldogIwS1wfFq/view?usp=sharing',
//       file: '/certs/mern-stack.png',
//     },
//     {
//       title: 'Internship Certificate',
//       issuer: 'TATA',
//       date: 'July 2025',
//         credentialId: 'TATA-INT-2025',
//       description:
//         'Recognized for successful completion of internship responsibilities and contributions to the organization.',
//       skills: ['MERN','microservices', 'Database Optimization', 'Cloud Deployment'],
//       verifyUrl: 'https://drive.google.com/file/d/1vUWxEkImPJKHO8CMWoZd55QdAAc4bJzL/view?usp=drive_link',
//       file: '/certs/java-dsa.png',
//     }
    
//     ,
//     {
//       title: 'Amazon Web Services (AWS) Cloud Practitioner',
//       issuer: 'Amazon Web Services',
//       date: '9th September 2025',
//         credentialId: 'AWS-CP-2025',
//       description:
//         'Demonstrated foundational knowledge of AWS cloud concepts, services, and best practices for deploying and managing applications in the cloud.',
//       skills: ['AWS', 'Cloud Computing', 'Cloud Architecture', 'Cloud Deployment'],
//       verifyUrl: 'https://drive.google.com/file/d/1wY_ppbEgKDqQX99J-4V_2CXtgTTqkhd4/view?usp=drive_link',
//       file: '/certs/aws-cloud-practitioner.png',
//     },
//     {
//       title: 'Wadhwani Enterpreneurship Development Program',
//       issuer: 'Wadhwani Foundation',
//       date: '1st October 2025',
//         credentialId: 'WAD-ENT-2025',
//       description:
//         'Demonstrated foundational knowledge of AWS cloud concepts, services, and best practices for deploying and managing applications in the cloud.',
//       skills: ['AWS', 'Cloud Computing', 'Cloud Architecture', 'Cloud Deployment'],
//       verifyUrl: 'https://drive.google.com/file/d/13Ze6bBu-4ML5ID1S8_lyApj210aif7l_/view?usp=sharing',
//       file: '/certs/wadhwani-entrepreneurship.png',
//     }
//   ];

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     if (isPaused) return;
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [currentIndex, isPaused]);

//   const currentCert = certifications[currentIndex];

//   return (
//     <section
//       id="certifications"
//       className="py-20 px-6 bg-slate-50 text-slate-900 border-t border-slate-200"
//     >
//       <div className="max-w-5xl mx-auto">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
//               Licenses &amp; <span className="text-red-600">Certifications</span>
//             </h2>
//             <div className="w-16 h-1 bg-red-600 mt-3 rounded-full" />
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="text-xs font-medium text-slate-500 mr-2">
//               {currentIndex + 1} / {certifications.length}
//             </span>
//             <button
//               onClick={prevSlide}
//               aria-label="Previous Certification"
//               className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-red-600 transition-colors shadow-sm cursor-pointer"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={nextSlide}
//               aria-label="Next Certification"
//               className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-red-600 transition-colors shadow-sm cursor-pointer"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Slideshow Card */}
//         <div
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           className="relative rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all"
//         >
//           <div className="grid md:grid-cols-5">
//             {/* Left Certificate Preview Panel */}
//             <div className="md:col-span-2 bg-gradient-to-br from-red-600 to-red-700 text-white p-8 flex flex-col justify-between relative overflow-hidden">
//               <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
//                 <Award className="w-48 h-48" />
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="p-3 rounded-xl bg-white/15 backdrop-blur-xs">
//                   <Award className="w-7 h-7 text-white" />
//                 </div>
//                 <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15">
//                   Verified
//                 </span>
//               </div>

//               <div className="my-8 relative z-10">
//                 <p className="text-red-100 text-xs uppercase tracking-widest font-semibold">
//                   Certificate of Completion
//                 </p>
//                 <h3 className="text-xl font-bold mt-2 leading-snug">
//                   {currentCert.title}
//                 </h3>
//                 <p className="text-red-100 text-sm mt-2">{currentCert.issuer}</p>
//               </div>

//               <div className="flex items-center gap-2 text-xs text-red-100 border-t border-white/20 pt-4">
//                 <ShieldCheck className="w-4 h-4 shrink-0" />
//                 <span>ID: {currentCert.credentialId}</span>
//               </div>
//             </div>

//             {/* Right Details Panel */}
//             <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
//               <div>
//                 <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500 mb-4">
//                   <span className="inline-flex items-center gap-1.5 font-medium text-red-600">
//                     <Calendar className="w-4 h-4" />
//                     Issued {currentCert.date}
//                   </span>
//                 </div>

//                 <h4 className="text-2xl font-bold text-slate-900">
//                   {currentCert.title}
//                 </h4>
//                 <p className="text-slate-600 mt-3 leading-relaxed text-sm md:text-base">
//                   {currentCert.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mt-6">
//                   {currentCert.skills.map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 text-xs font-medium rounded-full bg-red-50 text-red-700 border border-red-200"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
//                 <a
//                   href={currentCert.verifyUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
//                 >
//                   View Credential
//                   <ExternalLink className="w-4 h-4" />
//                 </a>

//                 {/* Slide Indicator Dots */}
//                 <div className="flex items-center gap-2">
//                   {certifications.map((_, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setCurrentIndex(idx)}
//                       aria-label={`Go to slide ${idx + 1}`}
//                       className={`h-2.5 rounded-full transition-all cursor-pointer ${
//                         idx === currentIndex
//                           ? 'w-7 bg-red-600'
//                           : 'w-2.5 bg-slate-300 hover:bg-red-300'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, ShieldCheck, FileText } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const certifications = [
    {
      title: 'Machine Learning',
      issuer: 'Tutedude Academy',
      date: '24th July 2026',
      credentialId: 'TD-SHRI-ML-2127',
      description:
        'Completed comprehensive training in data cleaning, exploratory dataset analysis, statistical modeling, and extracting actionable insights from structured datasets.',
      skills: ['Data Science', 'Dataset Analysis', 'Data Cleaning', 'Analytics'],
      verifyUrl: 'https://drive.google.com/file/d/1UOG1Bk598DQDrr2ZK5n0fkQda3HvdGo9/view?usp=sharing',
      file: '/certs/machine-learning.pdf', // Replace with your exact PDF filename in public/certs/
    },
    {
      title: 'System Design & Architecture',
      issuer: 'Tutedude Academy',
      date: '8th September 2026',
      credentialId: 'TD-SHRI-SD-2158',
      description:
        'Acquired expertise in designing scalable, high-performance systems, including microservices architecture, database optimization, and cloud deployment strategies.',
      skills: ['System Design', 'Architecture', 'Microservices', 'Cloud Deployment'],
      verifyUrl: 'https://drive.google.com/file/d/1fSSjO2q_7_qSWFuED-RKldogIwS1wfFq/view?usp=sharing',
      file: '/certs/system-design.pdf', // Replace with your exact PDF filename in public/certs/
    },
    {
      title: 'Internship Certificate',
      issuer: 'TATA',
      date: 'July 2025',
      credentialId: 'TATA-INT-2025',
      description:
        'Recognized for successful completion of internship responsibilities and contributions to the organization.',
      skills: ['MERN', 'Microservices', 'Database Optimization', 'Cloud Deployment'],
      verifyUrl: 'https://drive.google.com/file/d/1vUWxEkImPJKHO8CMWoZd55QdAAc4bJzL/view?usp=drive_link',
      file: '/certs/tata-internship.pdf', // Replace with your exact PDF filename in public/certs/
    },
    {
      title: 'Amazon Web Services (AWS) Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '9th September 2025',
      credentialId: 'AWS-CP-2025',
      description:
        'Demonstrated foundational knowledge of AWS cloud concepts, services, and best practices for deploying and managing applications in the cloud.',
      skills: ['AWS', 'Cloud Computing', 'Cloud Architecture', 'Cloud Deployment'],
      verifyUrl: 'https://drive.google.com/file/d/1wY_ppbEgKDqQX99J-4V_2CXtgTTqkhd4/view?usp=drive_link',
      file: '/certs/aws.pdf', // Replace with your exact PDF filename in public/certs/
    },
    {
      title: 'Wadhwani Entrepreneurship Development Program',
      issuer: 'Wadhwani Foundation',
      date: '1st October 2025',
      credentialId: 'WAD-ENT-2025',
      description:
        'Completed structured entrepreneurship and venture development training focused on opportunity discovery, business modeling, and go-to-market execution.',
      skills: ['Entrepreneurship', 'Business Modeling', 'Product Strategy', 'Leadership'],
      verifyUrl: 'https://drive.google.com/file/d/13Ze6bBu-4ML5ID1S8_lyApj210aif7l_/view?usp=sharing',
      file: '/certs/wadhwani.pdf', // Replace with your exact PDF filename in public/certs/
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const currentCert = certifications[currentIndex];

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-slate-50 text-slate-900 border-t border-slate-200"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Licenses &amp; <span className="text-red-600">Certifications</span>
            </h2>
            <div className="w-16 h-1 bg-red-600 mt-3 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500 mr-2">
              {currentIndex + 1} / {certifications.length}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous Certification"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-red-600 transition-colors shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Certification"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-red-600 transition-colors shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slideshow Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all"
        >
          <div className="grid md:grid-cols-5">
            {/* Left Certificate PDF Preview Panel */}
            <div className="md:col-span-2 bg-red-50/60 border-b md:border-b-0 md:border-r border-slate-200 p-4 flex flex-col justify-between">
              <div className="relative w-full h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center group">
                <iframe
                  src={`${currentCert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={currentCert.title}
                  className="w-full h-full border-0 pointer-events-none"
                />

                <a
                  href={currentCert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all"
                >
                  <span className="px-3.5 py-2 rounded-lg bg-white text-slate-900 text-xs font-semibold shadow-md inline-flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-red-600" />
                    Open Full PDF
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-3 px-1">
                <span className="inline-flex items-center gap-1.5 font-medium text-red-700">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  {currentCert.credentialId}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold">
                  Verified
                </span>
              </div>
            </div>

            {/* Right Details Panel */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500 mb-4">
                  <span className="inline-flex items-center gap-1.5 font-medium text-red-600">
                    <Calendar className="w-4 h-4" />
                    Issued {currentCert.date}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {currentCert.issuer}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-slate-900">
                  {currentCert.title}
                </h4>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm md:text-base">
                  {currentCert.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {currentCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-red-50 text-red-700 border border-red-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={currentCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Slide Indicator Dots */}
                <div className="flex items-center gap-2">
                  {certifications.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'w-7 bg-red-600'
                          : 'w-2.5 bg-slate-300 hover:bg-red-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;