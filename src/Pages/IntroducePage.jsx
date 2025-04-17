import React from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiMapPin,
  FiArrowRight,
  FiClock,
  FiPhone,
} from "react-icons/fi";

const IntroducePage = () => {
  const stats = [
    { icon: FiUsers, value: "10K+", label: "Happy Customers" },
    { icon: FiAward, value: "15+", label: "Years Experience" },
    { icon: FiMapPin, value: "50+", label: "Store Locations" },
    { icon: FiTrendingUp, value: "95%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We ensure every product meets the highest standards of quality and performance.",
      image: "/images/values/quality.jpg",
    },
    {
      title: "Innovation",
      description:
        "Continuously bringing the latest technology and solutions to our customers.",
      image: "/images/values/innovation.jpg",
    },
    {
      title: "Customer Focus",
      description:
        "Putting our customers needs at the heart of everything we do.",
      image: "/images/values/customer.jpg",
    },
  ];

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/images/team/ceo.jpg",
      quote:
        "Building the future of home appliances through innovation and quality.",
    },
    {
      name: "Sarah Johnson",
      position: "Head of Design",
      image: "/images/team/design-head.jpg",
      quote: "Creating products that blend seamlessly with modern lifestyles.",
    },
    {
      name: "Michael Chen",
      position: "Technical Director",
      image: "/images/team/tech-director.jpg",
      quote: "Pushing the boundaries of whats possible in home technology.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/hero-bg.jpg"
            alt="Company Overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Transforming Homes with Smart Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Leading the way in innovative home appliances and smart technology
              for over 15 years.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2008, we began with a simple mission: to make
                everyday life easier through innovative home appliances. Today,
                we're proud to be a leading provider of smart home solutions,
                serving customers across the globe.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been marked by continuous innovation, unwavering
                commitment to quality, and a deep understanding of our
                customers' needs. We believe in creating products that not only
                meet but exceed expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Industry-leading innovation",
                  "Commitment to sustainability",
                  "Customer-centric approach",
                  "Premium quality products",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="/images/about/story.jpg"
                alt="Our Story"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from product development
              to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries leading our company towards innovation and
              excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-4">{member.position}</p>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Transform Your Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Explore our range of innovative home appliances and find the perfect
            solutions for your needs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Browse Products
            <FiArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Showroom
              </h2>
              <p className="text-gray-600 mb-6">
                Experience our products firsthand at our state-of-the-art
                showroom. Our expert staff is ready to help you find the perfect
                solutions for your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiMapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">
                    123 Main Street, New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center">
                  <FiClock className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
              </div>
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                Get Directions
                <FiArrowRight className="ml-2" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/about/showroom-map.jpg"
                alt="Showroom Location"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroducePage;
