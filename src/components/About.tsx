import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ibrahimImage from '../assets/ibrahim.jpg'; // Import local image

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Profile Image (Reduced Size) */}
            <div className="mx-auto">
              <img
                className="object-cover rounded-lg shadow-lg "
                src={ibrahimImage} // Using local asset
                alt="Profile"
              />
            </div>

            {/* About Text */}
            <div className="text-left">
              <p className="mt-4 text-lg text-gray-500 text-justify">
                With over a year of experience in UI/UX design and Flutter mobile app development, I specialize in creating intuitive, visually appealing, and highly functional digital experiences. My expertise lies in designing user-centric interfaces and developing seamless applications that enhance usability and engagement.
              </p>
              <p className="mt-4 text-lg text-gray-500 text-justify">
                I have collaborated on diverse projects across various industries, helping businesses bring their ideas to life through well-structured design systems and efficient coding practices. My approach combines creative design thinking with technical expertise, ensuring that every product I build is not only aesthetically pleasing but also practical and performance-driven.
              </p>
              <p className="mt-4 text-lg text-gray-500 text-justify">
                Passionate about innovation and problem-solving, I continuously explore new design trends and development techniques to create solutions that add real value to users. Whether it's designing a compelling UI, optimizing user experience, or building a fully responsive mobile app, I am committed to delivering excellence in every project.
              </p>

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1lPyofeXPXhr2NKA0M2Twwis97y9JfLEv/view?usp=sharing"
                className="mt-8 inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
