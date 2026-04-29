"use client";

import { Star, StarHalf } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Thompson",
    location: "Springfield",
    rating: 5,
    text: "Absolutely professional team! They replaced my entire roof in 2 days and cleaned up everything. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Riverside",
    rating: 5,
    text: "Emergency repair after a storm — they came within hours and fixed the leak. Fair price and great work.",
  },
  {
    id: 3,
    name: "David Chen",
    location: "Oakwood",
    rating: 4.5,
    text: "Very thorough inspection and honest assessment. Didn't try to upsell me on unnecessary repairs.",
  },
  {
    id: 4,
    name: "Lisa Martinez",
    location: "Fairview",
    rating: 5,
    text: "From estimate to completion, everything was seamless. My new metal roof looks amazing!",
  },
];

// ⭐ Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ⭐ Stars
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />,
    );
  }

  if (hasHalfStar) {
    stars.push(
      <StarHalf
        key="half"
        className="w-5 h-5 fill-yellow-400 text-yellow-400"
      />,
    );
  }

  return stars;
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">
            Real reviews from real homeowners and business owners.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Footer */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
