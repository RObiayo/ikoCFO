const Services = () => {
    const services = [
      {
        title: "Business Process Optimization",
        items: [
          {
            subTitle: "Assessment and Planning",
            description:
              "We perform a detailed evaluation of your company’s processes and collaborate with your leadership team to set clear restructuring objectives. Our comprehensive plan details specific actions to enhance efficiency and close any gaps.",
          },
          {
            subTitle: "Implementation and Monitoring",
            description:
              "We ensure the restructuring process remains on track through effective project management, maintaining regular communication and performance monitoring to achieve the desired results.",
          },
        ],
      },
      {
        title: "Executive-Level Guidance (Filling a Leadership Vacuum)",
        items: [
          {
            subTitle: "Assessment and Immersion",
            description:
              "We evaluate your organization's current leadership structure and identify gaps or areas for improvement. Collaborating with your executive team, we develop a strategic plan to fill leadership voids and strengthen overall management effectiveness.",
          },
          {
            subTitle: "Implementation and Monitoring",
            description:
              "We oversee the implementation of leadership solutions, ensuring alignment with organizational goals. Through continuous communication and performance monitoring, we help maintain focus and drive progress towards achieving executive-level excellence.",
          },
        ],
      },
      {
        title: "Funding Acquisition Expertise (Applies for SMEs)",
        items: [
          {
            subTitle: "Assessment and Planning",
            description:
              "We assess your company's funding needs and financial health, then work with you to identify the most suitable funding options. Our strategic plan outlines targeted approaches for securing capital to support your business goals.",
          },
          {
            subTitle: "Implementation and Monitoring",
            description:
              "We manage the funding acquisition process, guiding you through each step, from preparing documentation to negotiating terms. Regular updates and performance tracking ensure the process stays on course and meets your funding objectives.",
          },
        ],
      },
      {
        title: "Automated Financial Systems",
        items: [
          {
            subTitle: "Assessment and Planning",
            description:
              "We evaluate your current financial processes and identify opportunities for automation. Collaborating with your team, we develop a tailored plan to integrate automated systems that enhance accuracy, efficiency, and overall financial management.",
          },
          {
            subTitle: "Implementation and Monitoring",
            description:
              "We oversee the deployment of automated financial systems, ensuring smooth integration with your existing operations. Continuous monitoring and support help address any issues, optimize performance, and ensure the systems meet your evolving needs.",
          },
        ],
      },
      {
        title: "Enhanced Cash Flow Visibility",
        items: [
          {
            subTitle: "Assessment and Immersion",
            description:
              "We analyze your current cash flow management practices and identify areas for improvement. Together with your team, we design a plan to enhance cash flow visibility through better tracking, forecasting, and reporting methods.",
          },
          {
            subTitle: "Implementation and Monitoring",
            description:
              "We implement advanced tools and techniques to improve cash flow visibility, ensuring real-time insights and accurate forecasting. Ongoing monitoring and analysis help maintain optimal cash flow management and promptly address discrepancies.",
          },
        ],
      },
      {
        title: "Expert Budgeting and Forecasting",
        items: [
          {
            subTitle: "Assessment and Planning",
            description:
              "We review your existing budgeting and forecasting processes to identify strengths and areas for enhancement. Partnering with your team, we create a detailed plan to refine these processes, incorporating best practices for accuracy and relevance.",
          },
          {
            subTitle: "Implementation and Monitoring",
            description:
              "We assist in executing the revised budgeting and forecasting strategies, integrating them with your financial systems. Continuous monitoring and adjustment ensure that budgets and forecasts remain aligned with your business goals and respond to changing conditions.",
          },
        ],
      },
      {
        title: "Streamlined Month-End and Year-End Closure",
        items: [
          {
            subTitle: "Assessment and Planning",
            description:
              "We assess your current month-end and year-end closing procedures to identify inefficiencies and areas for improvement. We then collaborate with your team to develop a streamlined process that enhances accuracy and reduces the time required for each closure.",
          },
          {
            subTitle: "Implementation and Monitoring",
            description:
              "We oversee the implementation of the refined closing procedures, ensuring a smooth transition and integration with your existing operations.",
          },
        ],
      },
      {
        title: "Transforming Number Crunchers into Storytellers",
        items: [
          {
            subTitle: "Assessment and Skill Development",
            description:
              "We assess the current state of financial reporting to identify areas where data can be translated into more compelling business insights. Our training focuses on developing the skills needed for the finance team to link numbers to strategic business outcomes, transforming complex data into clear, actionable narratives.",
          },
        ],
      },
    ];
  
    return (
      <section className="lg:px-4 lg:py-14 ">
        <div className="text-center mb-16">
          <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="lg:text-lg text-sm md:text-lg text-gray-900 font-semibold mb-6">
            At IKO CFO, we provide expert financial consulting to help your business thrive in an ever-changing environment. Explore our services that can transform your operations and set you up for sustainable success.
          </p>
        </div>
  
        <div className="w-full max-w-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:gap-12 lg:px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="lg:p-6 md:p-4 p-2  bg-white  rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-blue-800"
            >
              <h3 className=" text-lg md:text-2xl lg:text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <h4 className="text-sm md:text-lg lg:text-lg font-bold text-blue-600 mb-2">{item.subTitle}</h4>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm lg:text-lg">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
      </section>
    );
  };
  
  export default Services;
  