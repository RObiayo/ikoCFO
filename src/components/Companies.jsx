import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const companies = [
  {
    name: 'Company A',
    logo: 'https://via.placeholder.com/150?text=Logo+A',
  },
  {
    name: 'Company B',
    logo: 'https://via.placeholder.com/150?text=Logo+B',
  },
  {
    name: 'Company C',
    logo: 'https://via.placeholder.com/150?text=Logo+C',
  },
];

const CompanyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 logos at a time
    slidesToScroll: 1,
    centerMode: true, // Center the active slide
    centerPadding: '40px', // Add padding to the sides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 logo on smaller screens
          centerPadding: '20px', // Less padding on smaller screens
        },
      },
    ],
  };

  return (
    <section className="w-[100px] bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Companies I've Worked With</h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="flex  justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-24 object-contain " // Adjusted size to 150px
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanyCarousel;