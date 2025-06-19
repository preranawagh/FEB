import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = ({ onMouseEnter, onMouseLeave }) => {
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'hello@nexusflow.com',
      href: 'mailto:hello@nexusflow.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: HiLocationMarker,
      label: 'Address',
      value: '123 Innovation Street, Tech City, TC 12345',
      href: 'https://maps.google.com',
    },
  ];

  return (
    <section
      id="contact"
      className="section bg-gray-50 dark:bg-dark-800"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading mb-6 text-primary-600 dark:text-primary-400 text-center">Contact Us</h2>
          <p className="subheading text-center max-w-2xl mx-auto mb-8">
            Have a project in mind or want to collaborate? Reach out to us and our team will get back to you soon.
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-6 w-full max-w-md">
            {contactInfo.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-dark-900 shadow-md flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 