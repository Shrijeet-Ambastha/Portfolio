// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm'
//           : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
//         <a
//           href="#hero"
//           className="text-xl font-bold tracking-tight text-slate-900 hover:opacity-90 transition-opacity"
//         >
//           Shrijeet<span className="text-red-600">.dev</span>
//         </a>

//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors shadow-sm"
//           >
//             Hire Me
//           </a>
//         </nav>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//           className="md:hidden p-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-2 pb-6 space-y-3 shadow-lg">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block py-2 text-base font-medium text-slate-700 hover:text-red-600 transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             onClick={() => setIsOpen(false)}
//             className="block w-full text-center py-2.5 mt-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
//           >
//             Hire Me
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-Spy using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map((link) => link.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px', // Triggers when section enters the middle of the viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-slate-900 hover:opacity-90 transition-opacity"
        >
          Shrijeet<span className="text-red-600">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-red-600 font-semibold'
                    : 'text-slate-600 hover:text-red-600'
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-red-600 transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors shadow-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-600 font-semibold'
                    : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-2.5 mt-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;