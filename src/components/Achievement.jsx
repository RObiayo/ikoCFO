import  { useState } from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "Business Process Optimization (BPO)",
      details: [
        "Reduced the finance team size at Dawa by 23% through automation and process streamlining.",
        "Streamlined inventory management at Match Masters by automating the stock system.",
        "Eradicated 80% of operational inefficiencies at Nissan Kenya by reviewing and enhancing SOPs.",
        "Successfully set up financial structures and formalized the finance department at CTM Kenya from scratch.",
        "Customized accounting software reports at CTM Kenya to accelerate month-end closure by 2 days.",
      ],
    },
    {
      title: "Executive-Level Guidance",
      details: [
        "Successfully mitigated a USD 400,000 exposure at Dawa by implementing a cash flow monitoring process.",
        "Improved Gross Profit margin by 2% at Dawa through product profitability reports.",
        "Achieved a break-even position for a struggling division at Match Masters by uncovering losses and implementing cost optimization.",
        "Successfully boosted cash inflows by 10% from the government at Nissan Kenya by cultivating better relationships.",
        "Analyzed costs and empowered the procurement team at Nissan Kenya to secure better pricing.",
      ],
    },
    {
      title: "Automated Financial Systems",
      details: [
        "Reduced the finance team size at Dawa by automating report generation through SAP.",
        "Streamlined inventory management at Match Masters by automating the stock system using Tally software.",
        "Customized accounting software reports at CTM Kenya to accelerate month-end closure.",
      ],
    },
    {
      title: "Enhanced Cash Flow Visibility",
      details: [
        "Successfully mitigated a USD 400,000 exposure at Dawa by implementing a cash flow monitoring process.",
        "Achieved savings of USD 200,000 at Dawa by establishing a more rigorous CAPEX approval system.",
        "Reduced debtors by 23% at Dawa through an effective debt collection strategy.",
        "Successfully negotiated extended payment terms from suppliers at CTM Kenya, improving cash flow.",
      ],
    },
    {
      title: "Expert Budgeting & Forecasting",
      details: [
        "Developed and implemented financial and operational strategies at Match Masters.",
        "Led annual business planning at Match Masters, developing budgets, forecasts and variance analyses.",
        "Developed Group Budgeting Guidelines and Budget Mapping at Dawa.",
      ],
    },
    {
      title: "Streamlined Month-End & Year-End Close",
      details: [
        "Reduced month-end closure time at CTM Kenya from 5 days to 3 days.",
        "Overseen all month-end and year-end close processes at CTM Kenya.",
      ],
    },
  ];

  const [openCard, setOpenCard] = useState(null);

  const toggleCollapse = (index) => {
    setOpenCard(openCard === index ? null : index); // Toggle the card
  };

  return (
    <section className="px-6 py-16  text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">Key Achievements</h1>
        <p className="text-lg text-white opacity-80 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Discover the significant milestones and results achieved through strategic planning, process optimization, and financial expertise.
        </p>

      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{
              height: openCard === index ? "auto" : "130px", // Adjust height based on whether the card is open or closed
            }}
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-4">{achievement.title}</h3>

            {/* Read More Button */}
            <button
              onClick={() => toggleCollapse(index)}
              className="w-full text-left text-lg text-blue-600 font-semibold flex justify-between items-center mb-4 transition-all duration-300 transform hover:scale-105"
            >
              <span>{openCard === index ? "Show Less" : "Read More"}</span>
              <span>
                {openCard === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
              </span>
            </button>

            {/* Show Details Only When Card is Open */}
            {openCard === index && (
              <div className="space-y-2">
                {achievement.details.map((detail, subIndex) => (
                  <p key={subIndex} className="text-gray-600">{detail}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="#contact"
          className="px-8 py-4 bg-blue-800 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Contact Us to Learn More
        </a>
      </div>
    </section>
  );
};

export default Achievements;
