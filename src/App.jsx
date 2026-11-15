// import React from 'react'
// import Experience from './components/Experience'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Certifications from './components/Certifications'
// import About from './components/About'
// import './index.css'
// import Skills from './components/Skills'
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Certifications />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Certifications />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;