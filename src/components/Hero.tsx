import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import boyImage from '../assets/boy.jpg'; // Import image for hero section
import backgroundVideo from '../assets/background.mp4'; // Import video for background

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to make text more visible */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="pl-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Hii👋🏻</span>
                <span className="block">I'm Ibrahim Sheriff</span>
                <span className="block text-sky-500">UI/UX Designer & Mobile Developer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Crafting beautiful digital experiences and building innovative mobile solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-5 flex justify-start space-x-6"
            >
              <a href="https://github.com/ibrahimsheriff" className="text-gray-300 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-sheriff-t-k-91052b221/" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:ibrahimibrahim45555@gmail.com" className="text-gray-300 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>

            <motion.a
              href="#about"
              className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-sky-500 rounded-lg shadow-md hover:bg-sky-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              About Me
            </motion.a>
          </div>

          <div className="mt-8 md:mt-0 relative">
            <img
              src={boyImage} // Use the imported image
              alt="Ibrahim Sheriff"
              className="w-100 h-100 object-cover md:w-70 md:h-70 mx-auto rounded-full shadow-lg shadow-sky-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
