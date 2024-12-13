

const teamMembers = [
  {
    name: 'John Doe',
    title: 'CEO',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
    image: 'Man2.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'CFO',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 234-5678',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
    },
    image: 'Woman2.jpg',
  },
  {
    name: 'Alice Johnson',
    title: 'CTO',
    email: 'alice.johnson@example.com',
    phone: '+1 (555) 345-6789',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
    image: 'Woman.jpg',
  },
  {
    name: 'Bob Brown',
    title: 'COO',
    email: 'bob.brown@example.com',
    phone: '+1 (555) 456-7890',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/bobbrown',
      twitter: 'https://twitter.com/bobbrown',
    },
    image: 'Alvin.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-18 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our  Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our team is dedicated to driving success and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.title}</p>
              <p className="text-gray-600 mb-1">{member.email}</p>
              <p className="text-gray-600 mb-4">{member.phone}</p>
              <div className="flex justify-center space-x-2 mt-4">
                {member.socialLinks.linkedin && (
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;