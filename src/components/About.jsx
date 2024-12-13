const About = () => {
    return (
      <section className="p-4 bg-white">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 tracking-wide relative inline-block">
            About Us
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded"></span>
          </h2>
        </div>
  
        {/* Content Section */}
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Introduction */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
              <div className="relative p-6 border-2 border-gray-200 rounded-lg bg-theme-gradient  shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Core Expertise</h3>
                <ul className="space-y-2 list-disc  text-gray-900 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl"></span> Business Restructuring
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl"></span> Leadership Solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl"></span> Fundraising
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl"></span> Business Automation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl"></span> Cash Flow Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 lg:gap-12">
            {/** one */}
            <div className="w-full rounded bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-8 space-y-3 relative overflow-hidden">
              <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
              </div>
              <div className="fill-violet-500 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                  <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
                </svg>
              </div>
              <h1 className="text-xl md:text-2xl  lg:text-2xl font-bold text-gray-800 mb-4">Our Vision</h1>
              <p className="text-xs md:text-lg lg:text-lg text-zinc-500 leading-6">
              To be the most trusted and innovative financial consultancy firm in East Africa,
                 empowering businesses to achieve sustainable growth and operational excellence.
              </p>
            </div>
            {/** two */}
            <div className="w-full rounded bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-8 space-y-3 relative overflow-hidden">
              <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
              </div>
              <div className="fill-violet-500 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                  <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
                </svg>
              </div>
              <h1 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-4">Our Mission</h1>
              <p className="text-xs md:text-lg lg:text-lg text-zinc-500 leading-6">
              At <span className="font-semibold  text-blue-600">IKO CFO</span>, our mission is to provide comprehensive financial and operational solutions that shift businesses from chaos to order, 
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
  