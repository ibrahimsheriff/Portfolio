import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layout, Database } from 'lucide-react';

const skills = [
  {
    category: 'UI/UX Design',
    icon: <Layout className="w-8 h-8" />,
    items: ['Figma', 'Adobe Illustrator', 'CorelDRAW', 'Prototyping', 'Wireframing', 'User Research', 'Canva']
  },
  {
    category: 'Frontend & Mobile App Development',
    icon: <Code2 className="w-8 h-8" />,
    items: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Dart']
  },
  {
    category: 'Backend',
    icon: <Database className="w-8 h-8" />,
    items: ['Firebase', 'MySQL']
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Skills & Expertise
          </h2>

          {/* Grid Layout with 3D Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform perspective-1000"
                style={{
                  transformStyle: "preserve-3d", // To preserve 3D transformations
                  transform: "rotateY(0deg)", // Reset rotation for a clean perspective
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="p-2 bg-indigo-100 rounded-lg text-indigo-600"
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.5 }}
                      className="flex items-center bg-gray-50 rounded-md p-2"
                    >
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
