import React from 'react';

const teamMembers = [
  { name: 'Dr. Jane Doe', title: 'PhD in Computer Science', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' },
  { name: 'Prof. John Smith', title: 'MSc in Data Science', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' },
  { name: 'Dr. Emily Johnson', title: 'MBA in Business Management', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' },
  { name: 'Mr. Alex Brown', title: 'BSc in Software Engineering', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' },
  { name: 'Ms. Sarah White', title: 'MSc in Cybersecurity', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' },
  { name: 'Dr. Michael Green', title: 'PhD in Artificial Intelligence', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' },
  { name: 'Prof. Linda Blue', title: 'MSc in Information Technology', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' },
  { name: 'Mr. David Black', title: 'BSc in Network Engineering', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format' }
];

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 mb-4">
        We are dedicated to providing the best service in the industry. Our team of experts is here to assist you with all your needs.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Services</h2>
      <p className="text-gray-600 mb-4">
        We offer a wide range of services tailored to meet your requirements. From consultations to full-service solutions, we have you covered.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Meet Our Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 cursor-pointer">
            <img src={member.image} alt={member.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold text-gray-800 mt-2">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
