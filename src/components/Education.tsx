
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sclImage from '../assets/scl.jpg'; // Import scl image
import ksrImage from '../assets/ksr.jpg'; // Import ksr image

const education = [
  {
    degree: 'HCS Computer Science',
    school: 'Government boys higher secondary school, Tiruchengode.',
    year: '2018 - 2020 | Completed',
    image: sclImage, // Add image for the first container
  },
  {
    degree: 'Bachelor of ComputerScience Engineering',
    school: 'K S R Institute For Engineering And Technology',
    year: '2020-2024 | Completed',
    image: ksrImage, // Add image for the second container
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Education
          </h2>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gradient-to-r from-indigo-50 to-white rounded-xl shadow-lg"
              >
                <div className="flex items-top flex-col sm:flex-row">
                  {/* Left Side: Image */}
                  <div className="flex-shrink-0 w-50 h-60">
                    <img
                      src={edu.image} // Use the image from the array (scl or ksr)
                      alt="Education"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
              
                  {/* Right Side: Content */}
                  <div className="ml-6 mt-4 sm:mt-0 p-6">
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="mt-2 text-lg text-indigo-600">{edu.school}</p>
                    <p className="mt-1 text-gray-500">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
