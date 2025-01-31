import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Github } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-extrabold text-center text-white sm:text-4xl mb-8">
            Contact Information
          </h2>

          {/* Responsive container */}
          <div className="flex flex-wrap md:flex-nowrap justify-start md:justify-between items-center gap-4">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap md:flex-nowrap gap-6 justify-start md:justify-start"
            >
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-white" />
                <span className="ml-2 text-gray-300">ibrahimibrahim45555@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-white" />
                <span className="ml-2 text-gray-300">+91 63834 46512</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-white" />
                <span className="ml-2 text-gray-300">Tiruchengode, Namakkal, Tamil Nadu</span>
              </div>
            </motion.div>

            {/* Social Media Icons - Centered on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex gap-4 md:gap-6 justify-center md:justify-start w-full md:w-auto"
            >
              <a href="https://www.linkedin.com/in/ibrahim-sheriff-t-k-91052b221/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8 text-white cursor-pointer hover:opacity-80" />
              </a>
              <a href="https://wa.me/916383446512" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-8 w-8 text-white cursor-pointer hover:opacity-80" />
              </a>
              <a href="mailto:ibrahimibrahim45555@gmail.com">
                <Mail className="h-8 w-8 text-white cursor-pointer hover:opacity-80" />
              </a>
              <a href="https://github.com/ibrahimsheriff" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8 text-white cursor-pointer hover:opacity-80" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


