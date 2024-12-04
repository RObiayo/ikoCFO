

const Partners = () => {
  const logos = [
    "/CTM.png", // Replace with your logo URLs
    "/Nissan.png",
    "/Lecol_Logo.png",
    "/MAtchMasters.png",
  ];

  return (
    <section className="py-16 ">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
        Our Trusted Partners
      </h2>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 px-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center transition-transform transform hover:scale-105 p-4 rounded-md bg-white shadow-md hover:shadow-lg duration-300"
            style={{ minWidth: "160px", flexGrow: 1, flexBasis: "18%" }} // Adjust flex-basis for more/less logos per row
          >
            <img
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-20  object-contain  transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
