"use client";

import {
  Home,
  Hammer,
  AlertTriangle,
  Gauge,
  ClipboardCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Roof Installation",
    description:
      "Professional installation for asphalt, metal, tile, and flat roofs.",
  },
  {
    icon: Hammer,
    title: "Roof Repair",
    description:
      "Fast, reliable repairs for leaks, missing shingles, and storm damage.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Roofing",
    description: "24/7 rapid response for urgent roof damage and leaks.",
  },
  {
    icon: Gauge,
    title: "Gutter Installation",
    description: "Seamless gutters and downspouts to protect your foundation.",
  },
  {
    icon: ClipboardCheck,
    title: "Roof Inspection",
    description:
      "Thorough inspections with detailed reports and recommendations.",
  },
];

// Animation variants with proper TypeScript typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.7,
    },
  },
};

const iconVariants: Variants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const cardVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const arrowVariants: Variants = {
  hover: {
    x: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
      repeat: Infinity,
      repeatType: "reverse" as const,
      repeatDelay: 0.2,
    },
  },
};

export default function Services() {
  return (
    <motion.section
      className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={headerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Roofing Services
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive roofing solutions for every need — residential and
            commercial.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group mx-auto md:mx-0 w-full max-w-sm md:max-w-none cursor-pointer"
            >
              <motion.div
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
              >
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </motion.div>

              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-2 text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-4 text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {service.description}
              </motion.p>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all justify-center md:justify-start w-full md:w-auto"
                whileHover="hover"
                variants={cardVariants}
              >
                Learn More
                <motion.span variants={arrowVariants}>
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
