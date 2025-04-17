import React from "react";
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "Kitchen Appliances", href: "#" },
      { name: "Home Entertainment", href: "#" },
      { name: "Smart Devices", href: "#" },
      { name: "Cleaning Appliances", href: "#" },
      { name: "New Arrivals", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Warranty", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: "#" },
    { icon: FiTwitter, href: "#" },
    { icon: FiInstagram, href: "#" },
    { icon: FiYoutube, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">HomeAppliances</h2>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for premium home appliances and smart
              solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMapPin className="w-5 h-5 mr-3 text-blue-500" />
                <span className="text-gray-400">
                  123 Main Street, New York, NY 10001
                </span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3 text-blue-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-blue-500" />
                <span className="text-gray-400">info@homeappliances.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-6 capitalize">{title}</h3>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <FiArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} HomeAppliances. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
