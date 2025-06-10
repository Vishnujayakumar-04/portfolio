import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import AnimatedButton from '../components/AnimatedButton';
import { FileDown, Briefcase, GraduationCap, Award } from 'lucide-react';

const ResumePage = () => {
  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="violet-gradient">My Resume</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl mb-8">
            Here's a summary of my professional experience, education, and achievements.
            You can download my full resume for more details.
          </p>
          
          <AnimatedButton
            text="Download Resume"
            icon={<FileDown size={18} />}
            link="#"
            isExternal
            className="mb-12"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Briefcase size={28} className="text-text-accent" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-text-accent/30" />
              
              {[
                {
                  title: "UI/UX Design Intern",
                  company: "Image Creative Education",
                  period: "7 - 30 June 2023",
                  description: "One month internship Swaran Aakarsh Infotainment for Adobe XD, Premier Pro, After Effects."
                },
                {
                  title: "IT Support & Help Desk Intern",
                  company: "Integra Software Solution",
                  period: "11 - 28 November 2022",
                  description: "Fifteen days internship based on IT support & help desk with a certificate of completion."
                },
                {
                  title: "Senior Frontend Developer",
                  company: "TechCorp Inc.",
                  period: "2022 - Present",
                  description: "Led the frontend development team in building a SaaS platform. Implemented modern React practices, improved performance, and mentored junior developers."
                },
                {
                  title: "Full Stack Developer",
                  company: "WebSolutions Ltd.",
                  period: "2020 - 2022",
                  description: "Developed full-stack applications using React, Node.js, and MongoDB. Created RESTful APIs and implemented authentication systems."
                },
                {
                  title: "Junior Developer",
                  company: "StartupXYZ",
                  period: "2018 - 2020",
                  description: "Worked on frontend development using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive web designs."
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="pl-12 relative"
                >
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-background-accent border-2 border-text-accent flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-text-accent" />
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-text-primary">{exp.title}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-text-accent">{exp.company}</p>
                      <p className="text-text-secondary text-sm">{exp.period}</p>
                    </div>
                    <p className="text-text-secondary">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap size={28} className="text-text-accent" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-text-accent/30" />
              {[
                {
                  degree: "MSC - Computer Science",
                  institution: "Pondicherry University, Puducherry",
                  period: "2024 - 2026",
                  description: "Currently pursuing Masters in Computer Science"
                },
                {
                  degree: "BCA - Computer Application",
                  institution: "Sri Manakula Vinayagar Engineering College",
                  period: "2021 - 2024",
                  description: "School of Arts and Science - CGPA - 7.90"
                },
                {
                  degree: "HSC - Higher Secondary",
                  institution: "Vidya Bhavan Higher Secondary School, Puducherry",
                  period: "2020 - 2021",
                  description: "Completed with 67.8%"
                },
                {
                  degree: "SSLC - High School",
                  institution: "Petit Seminaire Higher Secondary School, Puducherry",
                  period: "2018 - 2019",
                  description: "Completed with 49.6%"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="pl-12 relative"
                >
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-background-accent border-2 border-text-accent flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-text-accent" />
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-text-primary">{edu.degree}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-text-accent">{edu.institution}</p>
                      <p className="text-text-secondary text-sm">{edu.period}</p>
                    </div>
                    <p className="text-text-secondary">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <Award size={28} className="text-text-accent" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {[
                "AWS Certified Developer Associate",
                "Google Professional Cloud Developer",
                "MongoDB Certified Developer",
                "Certified Scrum Master"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="glassmorphism p-4 rounded-xl flex items-center gap-3"
                >
                  <div className="min-w-6 h-6 rounded-full bg-text-accent/20 flex items-center justify-center">
                    <Award size={14} className="text-text-accent" />
                  </div>
                  <p className="text-text-secondary">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResumePage;