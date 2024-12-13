import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="p-5 relative flex items-center  justify-center mt-{80px} h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-6 overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 bg-[url('/Board1.jpg')] bg-fixed bg-cover bg-center opacity-90"></div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-400 opacity-90"></div> 

      {/** shapedivider */}
        <div className="custom-shape-divider-bottom-1733999735">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
          </svg>
        </div>


      {/* Content Wrapper */}
      <div className="relative z-10 w-full">
        {/* Heading */}
        <motion.h2
          className="p-2 text-3xl md:text-5xl lg:text-9xl font-extrabold  mix-blend-difference   mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transforming Financial Chaos into Sustainable Growth
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-sm font-semibold md:text-xl lg:text-2xl text-gray-700 mb-8 mix-blend-difference  mx-auto max-w-full text-center"
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
    </section>
  );
};

export default Hero;
