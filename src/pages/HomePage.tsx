import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedButton from '../components/AnimatedButton';
import ProjectsSection from '../components/ProjectsSection';
import { useState, useEffect } from 'react';

// Import tool icons
const tools = [
  {
    name: "Adobe Lightroom",
    icon: "/Assets/Lightroom.png"
  },
  {
    name: "Adobe Photoshop",
    icon: "/Assets/Photoshop.png"
  },
  {
    name: "Adobe XD",
    icon: "/Assets/Adobe-xd.png"
  },
  {
    name: "CapCut",
    icon: "/Assets/Capcut.png"
  },
  {
    name: "Figma",
    icon: "/Assets/Figma.png"
  }
];

const HomePage = () => {
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const jobTitles = ["Video Editor", "Graphic Designer", "Full Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SectionWrapper className="relative min-h-screen bg-background-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-background-accent/20 via-background-primary to-background-primary" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="font-dancing text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text inline-block hover:scale-105 transition-transform">
                  Vishnu J
                </span>
              </h1>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 whitespace-nowrap">
                I'm a{" "}
                <motion.span
                  key={jobTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text inline-block whitespace-nowrap"
                >
                  {jobTitles[jobTitleIndex]}
                </motion.span>
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl font-light text-justify">
                Passionate creative professional specializing in video editing, photo editing, and full stack development. 
                I transform ideas into visually stunning content and powerful web applications, combining technical expertise 
                with artistic vision to deliver impactful solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <AnimatedButton
                  text="Get in Touch"
                  link="/contact"
                  className="font-display font-semibold bg-text-accent text-background-primary hover:bg-text-accent/90"
                />
                <AnimatedButton
                  text="Resume"
                  link="/Assets/Vishnu Resume.pdf"
                  isExternal
                  className="font-display font-semibold border-2 border-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 [background-clip:padding-box] relative
                  before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#FFD700] before:via-[#FFA500] before:to-[#FF4500] before:blur-xl before:opacity-0 before:transition-opacity hover:before:opacity-30"
                />
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light via-gold-DEFAULT to-gold-dark p-1">
                  <div className="rounded-full overflow-hidden w-full h-full bg-background-primary">
                    <img
                      src="/Assets/Profile.jpg"
                      alt="Vishnu J"
                      className="w-full h-full object-cover object-center scale-150"
                      style={{
                        objectPosition: "center 50%"
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24"
          >
            <h3 className="font-display text-center text-2xl font-extrabold mb-12 tracking-widest-plus uppercase">
              EXPERIENCE WITH
            </h3>
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="w-20 h-20 rounded-2xl bg-background-accent/50 p-4 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm text-text-secondary whitespace-nowrap">
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Internship Title */}
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 tracking-wider-plus uppercase text-center">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
              Internship
            </span>
          </h2>
          
          <div className="relative w-full pt-8">
            {/* Timeline line */}
            <div className="absolute left-0 ml-4 h-full w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF4500]" />

            {/* Image Creative Education Internship */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 ml-2.5 w-3 h-3 rounded-full bg-[#FF4500] border-2 border-[#FFD700]" />
              
              <div className="ml-12 bg-background-accent/10 rounded-xl p-4 backdrop-blur-sm border border-text-accent/10">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-extrabold tracking-wider text-white">
                      Image Creative Education
                    </h3>
                    <div className="flex flex-col items-end justify-center min-w-[200px]">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500 whitespace-nowrap">
                        One Month Internship
                      </span>
                      <div className="text-text-secondary mt-1 text-right">
                        7 - 30 June 2023
                      </div>
                      <a
                        href="/Assets/Image Creative.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center px-3 py-1 text-sm bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-white rounded-md hover:opacity-90 transition-opacity"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                  <p className="text-text-secondary text-justify mb-2 mt-2">
                    SWARAN AAKARSH INFOTAINMENT<br />
                    For Adobe Xd, Premier Pro, After Effects.
                  </p>
                  <p className="text-text-secondary text-justify">
                    Thiruvalluvar Salai, Iyyanar Nagar,<br />
                    Pudupalaiyam, Puducherry
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Integra Software Solution Internship */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 ml-2.5 w-3 h-3 rounded-full bg-[#FF4500] border-2 border-[#FFD700]" />
              
              <div className="ml-12 bg-background-accent/10 rounded-xl p-4 backdrop-blur-sm border border-text-accent/10">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-extrabold tracking-wider text-white">
                      Integra Software Solution
                    </h3>
                    <div className="flex flex-col items-end justify-center min-w-[200px]">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500 whitespace-nowrap">
                        Fifteen Days Internship
                      </span>
                      <div className="text-text-secondary mt-1 text-right">
                        11 - 28 November 2022
                      </div>
                      <a
                        href="/Assets/Integra Intern Certificate.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center px-3 py-1 text-sm bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-white rounded-md hover:opacity-90 transition-opacity"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                  <p className="text-text-secondary text-justify mb-2 mt-2">
                    IT Support & Help Desk with a certificate of completion
                  </p>
                  <p className="text-text-secondary text-justify">
                    Pakkamudayanpet, Annamalai Nagar,<br />
                    Puducherry
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certificates Section */}
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 tracking-wider-plus uppercase text-center">
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
            Certificates
          </span>
        </h2>
        <div className="w-full flex justify-center">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-2 animate-scroll-x">
            {/* Images */}
            <a href="/Assets/Image Creative.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/Assets/Image Creative.jpg" alt="Image Creative Certificate" className="h-64 rounded-lg shadow-lg object-contain" />
            </a>
            <a href="/Assets/Udemy Certificate.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/Assets/Udemy Certificate.jpg" alt="Udemy Certificate" className="h-64 rounded-lg shadow-lg object-contain" />
            </a>
            <a href="/Assets/Certificate.png" target="_blank" rel="noopener noreferrer">
              <img src="/Assets/Certificate.png" alt="Certificate" className="h-64 rounded-lg shadow-lg object-contain" />
            </a>
            {/* PDFs */}
            <a href="/Assets/ICT Main Certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/pdf.svg" alt="ICT Main Certificate PDF" className="h-24 mb-2" />
              <span className="text-sm text-center text-text-secondary">ICT Main Certificate</span>
            </a>
            <a href="/Assets/LUB555139_Microsoft_AIBuilderChallenge.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/pdf.svg" alt="Microsoft AI Builder Challenge PDF" className="h-24 mb-2" />
              <span className="text-sm text-center text-text-secondary">Microsoft AI Builder</span>
            </a>
            <a href="/Assets/LUB555139_Microsoft_MachineLearningChallenge.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/pdf.svg" alt="Microsoft Machine Learning Challenge PDF" className="h-24 mb-2" />
              <span className="text-sm text-center text-text-secondary">Microsoft ML Challenge</span>
            </a>
            <a href="/Assets/Certificate of Successful Completion- Vishnu J.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
              <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/pdf.svg" alt="Certificate of Successful Completion PDF" className="h-24 mb-2" />
              <span className="text-sm text-center text-text-secondary">Completion Certificate</span>
            </a>
          </div>
        </div>
      </div>

      {/* Education Title */}
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 tracking-wider-plus uppercase text-center">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
              Education
            </span>
          </h2>
          <div className="relative w-full pt-8">
            {/* Timeline line */}
            <div className="absolute left-0 ml-4 h-full w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF4500]" />

            {/* BCA Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 ml-2.5 w-3 h-3 rounded-full bg-[#FF4500] border-2 border-[#FFD700]" />
              
              <div className="ml-12 bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-extrabold mb-2 tracking-wider uppercase bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                      BCA - Computer Application
                    </h3>
                    <p className="text-xl text-text-primary mt-2">
                      Sri Manakula Vinayagar Engineering College
                    </p>
                    <p className="text-text-secondary mt-1">School of Arts and Science</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-text-secondary">2021 - 2024</span>
                    <span className="mt-2 px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500">
                      CGPA: 7.90
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MSc Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 ml-2.5 w-3 h-3 rounded-full bg-[#FF4500] border-2 border-[#FFD700]" />
              
              <div className="ml-12 bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-extrabold mb-2 tracking-wider uppercase bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                      MSc - Computer Science
                    </h3>
                    <p className="text-xl text-text-primary mt-2">
                      PONDICHERRY UNIVERSITY
                    </p>
                    <p className="text-text-secondary mt-1">PUDUCHERRY</p>
                  </div>
                  <div className="text-text-secondary">
                    2024 - 2026
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center"
      >
        <h2 className="font-display text-4xl font-extrabold mb-4 tracking-wider-plus uppercase text-center bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8 font-normal text-center">
          Ready to bring your ideas to life? Let's collaborate! Whether you're a startup, established company, or individual with a vision, I'm here to help. From concept to execution, let's create something amazing together.
        </p>

        <div className="flex flex-col items-center gap-4 max-w-md w-full">
          {/* Email */}
          <a
            href="mailto:vishnujayakumar4104@gmail.com"
            className="flex items-center gap-4 text-text-secondary hover:text-text-accent transition-colors group w-full pl-16"
          >
            <div className="w-10 h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-background-accent/70">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span>vishnujayakumar4104@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919487052144"
            className="flex items-center gap-4 text-text-secondary hover:text-text-accent transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-background-accent/70">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.5 2.5c-2.8-1.4-5.1-3.8-6.5-6.5l2.5-2.5c.2-.3.3-.7.2-1-.3-1.2-.5-2.4-.5-3.6 0-.5-.4-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.4-1-1-1zM12 3v10l3-3h6V3h-9z"/>
              </svg>
            </div>
            <span>+91 9487052144</span>
          </a>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vishnu-jayakumar-5b42a8283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-background-accent/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/.mr.p.r.i.n.c.e.?igsh=MW8wM2N3dGFleDkzeg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-background-accent/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Vishnujayakumar-04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-background-accent/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="py-8 text-center">
        <p className="text-text-secondary text-sm">
          @Designed By{" "}
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text font-semibold">
            VISHNU J
          </span>
        </p>
      </div>
    </>
  );
};

export default HomePage;