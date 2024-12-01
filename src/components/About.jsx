const About = () => {
    return (
      <section className="px-6 py-16 bg-gradient-to-b from-blue-50 to-blue-100">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 tracking-wide relative inline-block">
            About Us
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded"></span>
          </h2>
        </div>
  
        {/* Content Section */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 space-y-6">
              <p className="text-gray-600 sm:text-sm md:text-lg leading-relaxed">
                <span className="font-semibold text-blue-600">IKO CFO</span> is a premier financial consultancy firm in East Africa, 
                led by <span className="font-semibold text-gray-800">Rupal Sheth</span>, a seasoned financial architect with over two 
                decades of experience across various sectors including manufacturing, automotive, FMCG, and retail.
              </p>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Our mission is to transform complex business environments into streamlined, profitable entities. 
                We specialize in business restructuring, leadership solutions, fundraising, business automation, and improved cash flow management. 
                Our approach combines cutting-edge financial strategies with practical, real-world solutions to drive sustainable growth and operational excellence.
              </p>
            </div>
            <div className="lg:flex-1 lg:pl-8">
              <div className="relative p-6 border-2 border-gray-200 rounded-lg bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Core Expertise</h3>
                <ul className="space-y-2 text-gray-600 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✔</span> Business Restructuring
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✔</span> Leadership Solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✔</span> Fundraising
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✔</span> Business Automation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✔</span> Cash Flow Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="p-8 bg-transparent shadow-lg rounded-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted and innovative financial consultancy firm in East Africa, empowering businesses to achieve sustainable growth and operational excellence.
              </p>
            </div>
  
            {/* Mission */}
            <div className="p-8 bg-transparent shadow-lg rounded-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                At <span className="font-semibold text-blue-600">IKO CFO</span>, our mission is to provide comprehensive financial and operational solutions that shift businesses from chaos to order, 
                driving resource efficiencies and sustainable profitability. 
                We aim to demystify financial complexities and make high-level advisory services accessible and actionable for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  