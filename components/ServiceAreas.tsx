"use client";

import { MapPin, Compass, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const cities = [
  "Springfield",
  "Riverside",
  "Oakwood",
  "Fairview",
  "Lakewood",
  "Hillcrest",
  "Brookside",
  "Maple Grove",
  "Cedar Park",
  "Stone Ridge",
  "Westbrook",
  "Northgate",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const cityVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 1,
    },
  },
  hover: {
    scale: 1.08,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 20,
    },
  },
};

const iconVariants: Variants = {
  hidden: { rotate: -180, scale: 0, opacity: 0 },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  },
  hover: {
    scale: 1.3,
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      rotate: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
      scale: { duration: 0.2 },
    },
  },
};

const glowVariants: Variants = {
  hover: {
    scale: 1.5,
    opacity: 0.8,
    transition: { duration: 0.3 },
  },
};

export default function ServiceAreas() {
  const [screen, setScreen] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <motion.section
      className="relative py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden"
      id="service-areas"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated Background Elements - More Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white/10 rounded-full"
            initial={{
              x: Math.random() * screen.width,
              y: Math.random() * screen.height,
            }}
            animate={{
              y: [null, -20, 20, -20],
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            },
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">
              Coverage Areas
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            Where We Shine
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bringing excellence and innovation to homes and businesses across
            the region. Your neighborhood, our priority.
          </motion.p>
        </motion.div>

        {/* Cities Grid with Modern Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cities.map((city, index) => (
            <motion.div
              key={city}
              variants={cityVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              className="relative group"
            >
              {/* Glow effect behind card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 blur-xl"
                variants={glowVariants}
                whileHover="hover"
              />

              {/* Card Content */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 shadow-lg transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl overflow-hidden">
                {/* Animated gradient overlay on hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  variants={iconVariants}
                  className="inline-block mb-2 relative"
                >
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <MapPin className="w-5 h-5 text-cyan-400 relative z-10 group-hover:text-cyan-300 transition-colors duration-300" />
                </motion.div>

                <motion.span
                  className="text-gray-200 font-semibold text-sm md:text-base block relative z-10"
                  whileHover={{ letterSpacing: "0.5px" }}
                  transition={{ duration: 0.2 }}
                >
                  {city}
                </motion.span>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 rounded-br-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-white font-semibold text-lg shadow-lg overflow-hidden border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              Check Your Area
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-slate-900/30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            className="opacity-20"
          />
        </svg>
      </div>
    </motion.section>
  );
}
