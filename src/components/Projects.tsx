import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';
import musicAppImage from '../assets/music_app.jpeg'; // Import music app image
import portfolioImage from '../assets/portfolio.png'; // Import portfolio image
import linkedinCloneImage from '../assets/Linkedin_clone.png'; // Import Linkedin clone image

const projects = [
  {
    title: 'Music Mobile App',
    description: 'A Music application built with Flutter and Firebase',
    image: musicAppImage, // Use the imported image for Music App
    tags: ['Flutter', 'Firebase', 'UI/UX Design'],
    github: 'https://github.com/ibrahimsheriff/Music_App',
  },
  {
    title: 'Figma Design',
    description: 'In the Design every single component created and refined',
    image: portfolioImage, // Use the imported image for Figma Design
    tags: ['Figma'],
  },
  {
    title: 'Linkedin Clone App',
    description: 'A job search application inspired by LinkedIn',
    image: linkedinCloneImage, // Use the imported image for Linkedin Clone
    tags: ['Flutter'],
    github: 'https://github.com/ibrahimsheriff/linkedin_clone',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-100 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative transform-gpu"
                whileHover={{ scale: 1.1, rotateY: 10, rotateX: 5 }}
                style={{
                  perspective: '1500px',
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const { offsetWidth: width, offsetHeight: height } = card;
                  const { offsetX: x, offsetY: y } = e.nativeEvent;

                  const xRotate = ((y / height) - 0.6) * 30;
                  const yRotate = ((x / width) - 0.6) * -30;
                  card.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
                }}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 text-gray-500 hover:text-black"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
