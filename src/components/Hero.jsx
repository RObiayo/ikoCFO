import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="p-5 relative flex items-center justify-center mt-{80px} lg:h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-6 overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 bg-[url('/Board1.jpg')] bg-fixed bg-cover bg-center opacity-90"></div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-200 opacity-90"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full">
        {/* Heading */}
        <motion.h2
          className="max-w-full text-center p-2 text-3xl md:text-5xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-grey-50 to-gray-800  leading-tight drop-shadow-md mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transforming Financial Chaos into Sustainable Growth
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-sm font-semibold md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto max-w-full text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Empowering businesses across East Africa with innovative financial solutions tailored to your needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="p-1.5 md:p-2 lg:px-8 lg:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white   text-sm lg:text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
            Explore Our Services
          </button>
          <button className="p-1.5 md:p-2 lg:px-8 lg:py-3 bg-white text-gray-800 border border-gray-300 text-sm font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Get in Touch
          </button>
        </motion.div>
      </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-4 sm:bottom-6 flex justify-center w-full">
      <motion.div
        className="animate-bounce text-gray-500 text-xl sm:text-2xl lg:text-3xl hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓
      </motion.div>
    </div>
    </section>
  );
};

export default Hero;
