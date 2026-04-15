"use client";

import { Star, StarHalf } from "lucide-react";

const testimonials = [
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">
            Real reviews from real homeowners and business owners.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex gap-0.5 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
