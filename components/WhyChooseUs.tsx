"use client";

import { Shield, Award, FileText, Clock, LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade of proven excellence in roofing craftsmanship.",
  },
  {
    icon: FileText,
    title: "Free Estimates",
    description: "No-obligation, detailed quotes for every project.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent roofing needs.",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

const iconVariants: Variants = {
  hover: {
    scale: 1.15,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.6,
    },
  },
  tap: {
    scale: 0.9,
    rotate: 0,
  },
};

const cardVariants: Variants = {
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <motion.section
      className="py-16 px-4 md:px-6 lg:px-8 bg-white"
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
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Setting the standard for quality, reliability, and customer care.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <motion.div
                className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
              >
                <feature.icon className="w-8 h-8 text-orange-600" />
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
