
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [

  {
    role: '(ABE-GROUPS) Mobile App Developer ',
    company: 'ABE-GROUPS',
    period: '2023 - 2024',
    description: 'Developed cross-platform mobile applications using Flutter',
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Creative Agency',
    period: '2023 - 2024',
    description: 'Assisted in designing user interfaces for web and mobile applications',
    
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`relative flex justify-between items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-5/12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <Briefcase className="h-6 w-6 text-indigo-600" />
                        <h3 className="ml-2 text-xl font-bold text-gray-900">{exp.role}</h3>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}