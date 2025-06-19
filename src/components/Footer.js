import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = ({ onMouseEnter, onMouseLeave }) => {
  const navigation = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'Features', href: '#features' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com',
        icon: FaGithub,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: FaTwitter,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: FaLinkedinIn,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: FaInstagram,
      },
    ],
  };

  return (
    <footer
      className="bg-white dark:bg-dark-900"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#"
              className="text-2xl font-bold text-primary-600 dark:text-primary-400"
              whileHover={{ scale: 1.05 }}
            >
              Strategize.
            </motion.a>
            <p className="text-gray-600 dark:text-gray-300">
              Creating beautiful digital experiences that inspire and innovate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>123 Innovation Street</li>
              <li>Tech City, TC 12345</li>
              <li>hello@strategize.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <form className="mt-4">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-l-lg border-0 bg-gray-100 dark:bg-dark-800 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <motion.button
                  type="submit"
                  className="rounded-r-lg bg-primary-600 px-4 py-3 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 border-t border-gray-200 dark:border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} Strategize. Made with{' '}
              <HiHeart className="inline-block w-5 h-5 text-red-500 animate-pulse" />{' '}
              by our team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 