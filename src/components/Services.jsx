import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  { id: 1, title: 'Service 1', price: '$100', details: ['Detail 1.1', 'Detail 1.2', 'Detail 1.3'] },
  { id: 2, title: 'Service 2', price: '$150', details: ['Detail 2.1', 'Detail 2.2', 'Detail 2.3'] },
  { id: 3, title: 'Service 3', price: '$200', details: ['Detail 3.1', 'Detail 3.2', 'Detail 3.3'] },
  { id: 4, title: 'Service 4', price: '$250', details: ['Detail 4.1', 'Detail 4.2', 'Detail 4.3'] },
  { id: 5, title: 'Service 5', price: '$300', details: ['Detail 5.1', 'Detail 5.2', 'Detail 5.3'] },
  { id: 6, title: 'Service 6', price: '$350', details: ['Detail 6.1', 'Detail 6.2', 'Detail 6.3'] },
  { id: 7, title: 'Service 7', price: '$400', details: ['Detail 7.1', 'Detail 7.2', 'Detail 7.3'] },
  { id: 8, title: 'Service 8', price: '$450', details: ['Detail 8.1', 'Detail 8.2', 'Detail 8.3'] },
  { id: 9, title: 'Service 9', price: '$500', details: ['Detail 9.1', 'Detail 9.2', 'Detail 9.3'] },
  { id: 10, title: 'Service 10', price: '$550', details: ['Detail 10.1', 'Detail 10.2', 'Detail 10.3'] },
];

const Services = () => {
  return (
    <section className="p-5 bg-blue-500  ">
      <h2 className="text-2xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {servicesData.map((service) => (
          <Link 
            key={service.id}
            to={`/services/${service.id}`} 
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600">Price: {service.price}</p>
            <ul className="text-gray-600">
              {service.details.map((detail, index) => (
                <li key={index}>- {detail}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;