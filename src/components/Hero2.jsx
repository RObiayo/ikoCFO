// HeroSection.js

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container px-4 mx-auto">
    <div className="mx-auto">
      <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
            <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your name" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
            <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
            <textarea className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
          </div>
          <button className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}




const HeroSection = () => {
  return (
    <section className="relative   text-white">

      
      <div className="absolute inset-0 bg-[url('/Board1.jpg')]  bg-cover bg-center opacity-95 "></div> 

        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-blue-400 bg-opacity-35"></div>
              {/** shapedivider */}
                <div className="custom-shape-divider-bottom-1733999735">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
                </svg>
                </div>
      <div className="relative container mx-auto flex flex-col items-center justify-center h-screen lg:h-[1100px] px-6">
        <div className="relative z-10 w-full">      
            {/* Content Wrapper */}

            {/* Heading */}
            <div className='w-full  p-2 lg:w-1/2'>
            <motion.h2
            className=" text-3xl  md:text-5xl lg:text-6xl leading-0  font-extrabold  mix-blend-difference   mb-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            Transforming Financial Chaos into Sustainable Growth
            </motion.h2>

            {/* Subtext */}
            <motion.p
            className="text-xl font-normal md:text-lg lg:text-xl mb-8 mix-blend-difference"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            >
            Empowering businesses across East Africa with innovative financial solutions tailored to your needs.
            </motion.p>
            </div>

            {/* Buttons */}
            <div className='mt-11 max-w-full'>
            <motion.div
            className="flex gap-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            >
            <div>
            <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-700 rounded-md group-hover:translate-x-0" />
                <span className="relative w-full lg:text-left text-center  text-white transition-colors duration-200 ease-in-out group-hover:text-white">Explore Our Services</span>
            </button>
            </div>

            </motion.div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default HeroSection;
