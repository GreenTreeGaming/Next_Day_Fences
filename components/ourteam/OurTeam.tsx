import React from 'react'

// 1. Define your team members here
const teamMembers = [
  {
    name: 'Max Wiczek',
    title: 'Purchasing Manager - Foreman',
    image: '/person-icon.jpg', // Replace with your actual image path
  },
  {
    name: 'JMK',
    title: 'Lead Client Consultant',
    image: '/person-icon.jpg',
  },
  {
    name: 'Max N.',
    title: 'Foreman',
    image: '/person-icon.jpg',
  },
  {
    name: 'John Doe',
    title: 'Fence Installer',
    image: '/person-icon.jpg',
  },
  // Add more team members as needed
]

const OurTeam = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Meet The Next Day Team!
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurTeam
