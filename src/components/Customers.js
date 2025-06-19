import React, { useState, useEffect } from 'react';

const companies = [
  {
    name: 'Flipkart',
    logo: 'https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png',
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'Uber',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    name: 'Swiggy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png',
  },
  {
    name: 'Zomato',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png',
  }
];

const Customers = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink(false), 400);
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 400);
      setStartIndex((prev) => (prev + 6) % companies.length);
    }, 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(blinkTimeout);
    };
  }, []);

  const visibleCompanies = [
    ...companies.slice(startIndex, startIndex + 6),
    ...(startIndex + 6 > companies.length ? companies.slice(0, (startIndex + 6) % companies.length) : [])
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading mb-6 text-primary-600 dark:text-primary-400 text-center">Our Customers</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          {visibleCompanies.map((company) => (
            <div
              key={company.name}
              className={`flex items-center justify-center rounded-lg p-6 transition-all duration-300 ${blink ? 'animate-pulse' : ''} bg-gray-100 dark:bg-dark-800 shadow`}
            >
              <img src={company.logo} alt={company.name + ' logo'} className="h-12 object-contain" style={{ maxWidth: 120 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers; 