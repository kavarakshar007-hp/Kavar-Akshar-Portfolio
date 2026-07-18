/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Dynamic Background */}
      <BackgroundEffect />

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Sections Layout */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Achievements */}
        <Achievements />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

