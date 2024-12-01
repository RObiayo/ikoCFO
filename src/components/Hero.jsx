
const Hero = () => {
    return (
      <section className="flex flex-col items-center justify-center mx-auto lg:h-[1000px] text-center bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Transforming Financial Chaos into Sustainable Growth
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Empowering businesses across East Africa with innovative financial solutions tailored to your needs.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-theme-gradient text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
            Explore Our Services
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-xl shadow-md hover:bg-gray-200 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
