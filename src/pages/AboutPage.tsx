import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import ThreeScene from '../components/ThreeScene';
import AnimatedButton from '../components/AnimatedButton';

// For demo, using placeholder icons
const techIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
];

const AboutPage = () => {
  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="violet-gradient">About Me</span>
          </h1>
          
          <div className="space-y-4 text-text-secondary">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I'm a passionate <span className="text-text-accent font-medium">Full Stack Developer</span> with over 5 years of experience building beautiful, functional web applications.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              My journey in web development started in 2018, and since then I've worked with various technologies and frameworks to create exceptional digital experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              I specialize in <span className="text-text-accent font-medium">React.js</span>, <span className="text-text-accent font-medium">Node.js</span>, and <span className="text-text-accent font-medium">TypeScript</span>, and I'm always excited to learn and adopt new technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-4"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">Experience</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Senior Frontend Developer at TechCorp (2022-Present)</li>
                <li>Full Stack Developer at WebSolutions (2020-2022)</li>
                <li>Junior Developer at StartupXYZ (2018-2020)</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-4"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">Education</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>B.S. in Computer Science, Tech University (2014-2018)</li>
                <li>Various certifications in Web Development and UI/UX Design</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="pt-4"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">Personal Traits</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Adaptable</li>
                <li>Team Player</li>
                <li>Leadership</li>
                <li>Time management</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="pt-4"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">Achievements</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Poster Designing (2021)</li>
                <li>Science Expo (2022)</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="pt-6"
            >
              <AnimatedButton
                text="View Resume"
                link="/resume"
                className="mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="w-full max-w-md animated-border-box p-6 rounded-xl">
            <div className="rounded-xl overflow-hidden mb-6">
              <motion.img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Developer"
                className="w-full h-auto rounded-xl"
                initial={{ scale: 1.1, filter: 'blur(8px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">
              Tech I Work With
            </h3>
            
            <div className="w-full h-[300px]">
              <ThreeScene icons={techIcons} />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;